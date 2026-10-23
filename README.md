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

La salida estática está en `dist/`. La raíz redirige a `/es/`; el inglés está en `/en/`. En Cloudflare, `public/_redirects` aplica la redirección HTTP 301; en Railway la aplica Caddy.

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

## Cloudflare Workers

`wrangler.jsonc` publica `dist/` como Static Assets: no requiere adaptador de Astro ni código de servidor. La dirección `workers.dev` está habilitada y las URLs de preview deshabilitadas. Wrangler se descarga mediante `bunx`, sin dependencia ni versión fija en el proyecto.

Conecta este repositorio y su rama `main` en Workers Builds:

| Campo | Valor |
| --- | --- |
| Worker name | `cuycoders-landing` |
| Build command | `bun run build` |
| Deploy command | `bunx wrangler deploy` |
| Preview command | `bunx wrangler preview` |
| Enable Preview builds | Desactivado |
| Protect with Cloudflare Access | Desactivado para el sitio público |
| Root directory / Path | `/` |
| Build cache | Activado |
| Build variable `BUN_VERSION` | `1.4.2` |
| Build variable `NODE_VERSION` | `22.16.0` |

Permite que Workers Builds cree su API token. El nombre en Cloudflare debe coincidir con `cuycoders-landing`. No necesitas `SITE_URL` mientras publiques en `https://cuycoders.com`, el dominio predeterminado de Astro.

Para validar sin publicar:

```sh
bun install --frozen-lockfile
bun run check
bun test
bun run build
bun run verify:build
bunx wrangler deploy --dry-run
```

El script `bun run deploy` también ejecuta `bunx wrangler deploy`, publicando el build existente. Para publicar manualmente, autentícate con `bunx wrangler login` antes de compilar y desplegar.

Cloudflare sirve los archivos y administra la caché sin Caddy. Se conservan las URLs con barra final y la redirección `/` → `/es/`; las rutas inexistentes responden 404. `/health` pertenece al contenedor de Caddy y no es necesario en Workers Static Assets.

Después de verificar el sitio en `workers.dev`, conecta `cuycoders.com` desde **Settings → Domains & Routes → Add → Custom Domain**. La redirección de `www.cuycoders.com` al dominio principal que antes hacía Caddy debe configurarse en **Redirect Rules** de la zona de Cloudflare, conservando la ruta y los parámetros de consulta. Autoriza los dominios usados por el formulario en Formserve.

## Railway y Caddy

El `Dockerfile` usa Bun 1.4.2 para instalar con lockfile congelado y compilar. Las comprobaciones se ejecutan por separado. La imagen final contiene Caddy y `dist/`; no ejecuta Astro ni necesita Node.js. `.dockerignore` excluye dependencias locales, documentación y archivos de entorno.

1. Crea un servicio Railway desde este repositorio, con la raíz del proyecto como **Root Directory**. Railway [detecta el Dockerfile](https://docs.railway.com/builds/dockerfiles); deja vacíos los overrides de build/start para usarlo.
2. Configura **Healthcheck Path** como `/health`. Caddy escucha el `PORT` inyectado por Railway (3000 como alternativa local).
3. Añade `cuycoders.com` como dominio público y configura el DNS indicado por Railway. Si también añades `www.cuycoders.com`, Caddy lo redirige al dominio principal. Railway termina HTTPS delante de Caddy.
4. `SITE_URL=https://cuycoders.com` es el valor de compilación predeterminado. Cambiarlo requiere recompilar para regenerar canonical y sitemap.
5. Autoriza el dominio en Formserve y verifica la recepción de un mensaje real después del despliegue.

Caddy comprime con gzip/zstd, sirve las rutas de Astro con trailing slash, mantiene una caché de un año para `/_astro/*` con hash y exige revalidación para el resto. Las rutas inexistentes devuelven 404; no hay fallback de SPA.

Railway [ha deprecado `railway.json`/`railway.toml`](https://docs.railway.com/config-as-code) para servicios nuevos. La detección del Dockerfile permite desplegar este único servicio sin añadir un SDK de infraestructura ni configuración obsoleta.

Para validar el servidor localmente, instala Caddy y ejecuta:

```sh
bun run build
caddy validate --config Caddyfile --adapter caddyfile
bun run verify:serving
```

Para probar la imagen cuando Docker esté disponible:

```sh
docker build -t cuy-coders .
docker run --rm -p 3000:3000 -e PORT=3000 cuy-coders
```
