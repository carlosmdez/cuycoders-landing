/** Escape script terminators without changing the structured data. */
export function serializeJsonLd(schema: Record<string, unknown>): string {
  return JSON.stringify(schema).replace(/</g, '\\u003c');
}
