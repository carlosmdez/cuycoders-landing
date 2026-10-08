# Bun generates the static site; the final image contains only Caddy and dist.
FROM oven/bun:1.4.2 AS build
WORKDIR /app

COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

ARG SITE_URL=https://cuycoders.com
ENV SITE_URL=${SITE_URL}
COPY . .
RUN bun run build

FROM caddy:2-alpine
COPY --from=build /app/dist /usr/share/caddy
COPY Caddyfile /etc/caddy/Caddyfile

ENV PORT=3000
EXPOSE 3000
