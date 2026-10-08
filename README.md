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

La salida estática está en `dist/`. La raíz redirige a `/es/`; el inglés está en `/en/`. En Railway, Caddy hace la redirección HTTP 301; otros hosts estáticos conservan el redirect HTML de Astro.

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
