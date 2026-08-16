# Çetin Design — Production

Bu repo Çetin Design canlı sitesinin ana kaynak kodudur.

## Mimari
- Cloudflare Worker: `src/index.js`
- Cloudflare D1: `cetin-design-db`
- Statik site: repo kökündeki HTML/CSS/JS/görseller
- Admin panel: `/admin` veya `/admin.html`
- Admin güvenliği: Cloudflare Access
- Worker config: `wrangler.jsonc`

## Günlük yönetim
Ürün adı, fiyat, beden, renk, aktif/pasif ve öne çıkarma için kod değiştirmek yerine canlı sitedeki admin panel kullanılır.

## Deploy
GitHub repo Cloudflare Workers Builds'e bağlandığında `main` branch'e gelen değişiklikler otomatik deploy edilmelidir.

Build/deploy komutu:

```bash
npm install
npx wrangler deploy
```

## Güvenlik
`workers_dev` ve `preview_urls` kapalıdır. Admin ve `/api/admin/*` Cloudflare Access ile korunmalıdır.

## D1
Database binding: `DB`
Database name: `cetin-design-db`

Şema: `schema.sql`
