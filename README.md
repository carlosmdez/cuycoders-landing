# Cuy Coders

Sitio de software a la medida construido con Astro, Tailwind CSS v4 y Lucide. Genera HTML estático: no necesita un servidor de aplicación.

## Desarrollo

Requiere Node.js 22.12 o posterior.

```sh
npm install
npm run dev -- --background
npm run astro -- dev status
npm run astro -- dev logs
npm run astro -- dev stop
```

## Verificar y compilar

```sh
npm run check
npm run build
npm run verify:build
npm run preview
```

La salida estática está en `dist/`. La raíz redirige a `/es/`; el inglés está en `/en/`. En hosts estáticos, el redirect de la raíz es HTML con refresh; configura un redirect HTTP 301 en el hosting si lo necesitas.

Antes de publicar, establece `SITE_URL` con el dominio real, por ejemplo en las variables del proceso de compilación. Esto habilita los enlaces canonical, hreflang, Open Graph URL y el sitemap. `robots.txt` incluye el sitemap únicamente cuando hay dominio configurado. No se asume un dominio de producción.

## Editar contenido

- `src/i18n/content.ts`: textos compartidos en español e inglés.
- `src/components/`: secciones con una responsabilidad cada una.
- `src/content/blog/`: artículos Markdown. `translationKey` enlaza versiones equivalentes.
- `src/content.config.ts`: validación del contenido del blog.
- `src/styles/global.css`: tokens y diseño adaptable; tipografías alojadas localmente.
- `PRODUCT.md` y `DESIGN.md`: contexto de producto y sistema visual.

El formulario es una demostración: valida los campos y muestra una confirmación local sin enviar ni guardar datos. Sin JavaScript, el botón permanece deshabilitado. Para recibir mensajes, conecta un servicio y actualiza el aviso; el correo de contacto real está pendiente.

Los casos y las cifras de la vista de producto son ilustrativos. Sustitúyelos por casos documentados cuando estén disponibles. La marca tiene un pequeño símbolo de cuy; los gráficos geométricos pueden reemplazarse por imágenes de marca.
