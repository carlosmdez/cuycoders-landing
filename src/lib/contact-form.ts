/** Enhance the native POST form with inline, confirmed delivery feedback. */
export function initContactForms() {
  document
    .querySelectorAll<HTMLFormElement>('[data-contact-form]')
    .forEach((form) => {
      const card = form.closest<HTMLElement>('[data-contact-card]');
      const success = card?.querySelector<HTMLElement>(
        '[data-contact-success]',
      );
      const button = form.querySelector<HTMLButtonElement>(
        'button[type="submit"]',
      );
      const label = form.querySelector<HTMLElement>('[data-submit-label]');
      const status = form.querySelector<HTMLElement>('[data-contact-status]');
      const loadedAt = form.querySelector<HTMLInputElement>('[data-loaded-at]');
      if (!card || !success || !button || !label || !status) return;
      if (loadedAt) loadedAt.value = String(Date.now());
      const idleLabel = label.textContent;
      let sending = false;

      form.addEventListener('submit', async (event) => {
        event.preventDefault();
        if (sending || !form.reportValidity()) return;
        sending = true;
        button.disabled = true;
        form.setAttribute('aria-busy', 'true');
        label.textContent = form.dataset.sending ?? '';
        status.textContent = '';
        try {
          const response = await fetch(form.action, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json',
            },
            body: JSON.stringify(Object.fromEntries(new FormData(form))),
            signal: AbortSignal.timeout(20000),
          });
          const result = await response.json();
          if (!response.ok || result.status !== 'success')
            throw new Error('Submission not confirmed');
          success.hidden = false;
          form.inert = true;
          form.setAttribute('aria-hidden', 'true');
          card.classList.add('is-sent');
          success.focus({ preventScroll: true });
          form.reset();
        } catch {
          status.textContent = form.dataset.error ?? '';
        } finally {
          sending = false;
          button.disabled = false;
          label.textContent = idleLabel;
          form.removeAttribute('aria-busy');
        }
      });
    });
}
