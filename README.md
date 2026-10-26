# Cuy Coders

Sitio de software a la medida construido con Astro, Tailwind CSS v4 y Lucide. Genera HTML estático: no necesita un servidor de aplicación.

## Desarrollo

Requiere Bun 1.4.2 o posterior; `bun.lock` es el único lockfile del proyecto.

```sh
bun install --frozen-lockfile
bun run dev --background
bun run astro dev status
bun run astro dev logs
bun run astro dev stop
```

## Verificar y compilar

```sh
bun run check
bun run test:seo
bun run build
bun run verify:build
bun run preview
```

La salida estática está en `dist/`. Caddy redirige la raíz a `/es/` con HTTP 301; el inglés está en `/en/`.

El dominio de producción confirmado es `https://cuycoders.com`. La compilación genera canonical, hreflang, Open Graph URL y sitemap con ese origen. `SITE_URL` permite cambiarlo si el dominio de publicación cambia; debe contener únicamente el origen, sin subcarpetas. `robots.txt` incluye la ubicación del sitemap.

## Editar contenido

- `src/i18n/content.ts`: textos compartidos en español e inglés.
- `src/components/`: secciones con una responsabilidad cada una.
- `src/content/blog/`: artículos Markdown. `translationKey` enlaza versiones equivalentes.
- `src/content.config.ts`: validación del contenido del blog.
- `src/styles/global.css`: tokens y diseño adaptable; tipografías alojadas localmente.
- `PRODUCT.md` y `DESIGN.md`: contexto de producto y sistema visual.
- `docs/seo-audit-2026-10-08.md`: auditoría SEO, resultados de Lighthouse y pendientes del hosting.

El formulario envía a `https://formserve.io/f/rvcKqtYUGPA` mediante Formserve. Con JavaScript muestra una tarjeta de agradecimiento animada solo tras confirmar el envío; conserva los datos ante errores y evita envíos simultáneos. Sin JavaScript usa POST HTML. En Formserve, autoriza `cuycoders.com` y los orígenes locales que utilices (por ejemplo `localhost:4321`); revisa las notificaciones del endpoint.

Los casos y las cifras de la vista de producto son ilustrativos. Sustitúyelos por casos documentados cuando estén disponibles. La marca tiene un pequeño símbolo de cuy; los gráficos geométricos pueden reemplazarse por imágenes de marca.

## Railway con Railpack y Caddy

`railpack.json` es la configuración de despliegue. Railpack detecta Bun desde `package.json`, instala las dependencias con `bun install --frozen-lockfile` y ejecuta `bun run build`. La versión de Bun se toma de `packageManager` (`bun@1.4.2`). No se necesita un Dockerfile ni Wrangler. Los archivos excluidos de la compilación también se declaran en `railpack.json`.

La fase de despliegue copia el binario de Caddy desde `caddy:2-alpine` sobre la imagen de runtime de Railpack. Desde el build incluye solo `dist/` y el `Caddyfile` del repositorio. El comando de arranque de Caddy está declarado explícitamente en `railpack.json`; no depende de que Railpack reconozca automáticamente Astro como sitio estático. No ejecuta Astro ni necesita Bun o Node en runtime. `STATIC_ROOT=/app/dist` hace que Caddy sirva la salida que copia Railpack.

1. Conecta este repositorio a Railway y selecciona **Railpack** como builder, con la raíz del proyecto como **Root Directory**. Retira cualquier ruta de Dockerfile y deja vacíos los comandos personalizados de build/start para usar la detección de Railpack.
2. Configura **Healthcheck Path** como `/health`. Caddy escucha el `PORT` inyectado por Railway (3000 como alternativa local).
3. Añade `cuycoders.com` como dominio público y configura el DNS indicado por Railway. Si también añades `www.cuycoders.com`, Caddy lo redirige al dominio principal. Railway termina HTTPS delante de Caddy.
4. No se requieren variables adicionales: el dominio de compilación predeterminado es `https://cuycoders.com`. Si cambia, configura `SITE_URL` en Railway y recompila para regenerar canonical y sitemap.
5. Autoriza el dominio en Formserve y verifica la recepción de solicitudes después del despliegue.

Caddy comprime con gzip/zstd, sirve las rutas de Astro con barra final, mantiene una caché de un año para `/_astro/*` con hash y exige revalidación para el resto. Las rutas inexistentes devuelven 404; no hay fallback de SPA.

Para verificar el sitio y el servidor localmente:

```sh
bun install --frozen-lockfile
bun run check
bun test
bun run build
bun run verify:build
caddy validate --config Caddyfile --adapter caddyfile
bun run verify:serving
```

Con la CLI de Railpack instalada, puedes revisar el plan sin construir una imagen:

```sh
railpack prepare . --plan-out /tmp/cuycoders-railpack-plan.json
```

Para construir una imagen local se requiere BuildKit:

```sh
railpack build . --name cuycoders-landing
```

Referencias: [configuración de Railpack](https://railpack.com/config/file/) y [sitios estáticos con Astro y Caddy](https://railpack.com/languages/node/#static-sites).
