# Bun generates the static site; the final image contains only Caddy and dist.
FROM oven/bun:1.4.2 AS build
WORKDIR /app

COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

ARG SITE_URL=https://cuycoders.com
ENV SITE_URL=${SITE_URL}
COPY . .
RUN bun run check && bun run test:seo && bun run build && bun run verify:build

FROM caddy:2-alpine
COPY --from=build /app/dist /usr/share/caddy
COPY Caddyfile /etc/caddy/Caddyfile
RUN caddy validate --config /etc/caddy/Caddyfile --adapter caddyfile

ENV PORT=3000
EXPOSE 3000
