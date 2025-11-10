// scripts/copy-htaccess.mjs
import fs from "fs";
import path from "path";

const OUT_DIR = path.resolve("out");
const HTACCESS = path.join(OUT_DIR, ".htaccess");
const HTACCESS_TXT = path.join(OUT_DIR, "htaccess.txt"); // запасной вариант для загрузки

const DOMAIN = "raumfrei-wien.at";

const CONTENT = `# ===============================
# .htaccess für ${DOMAIN}
# ===============================

RewriteEngine On

# WWW → non-WWW und HTTP → HTTPS
RewriteCond %{HTTP_HOST} ^www\\.${DOMAIN}$ [NC,OR]
RewriteCond %{HTTPS} !=on
RewriteRule ^ https://${DOMAIN}%{REQUEST_URI} [R=301,L]

# Next.js static export: SPA Fallback
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^ /index.html [QSA,L]

# Charset / MIME
AddDefaultCharset UTF-8
AddType "text/html; charset=UTF-8" .html .htm
AddType "text/css; charset=UTF-8" .css
AddType "application/javascript; charset=UTF-8" .js
AddType "application/json; charset=UTF-8" .json
AddType "image/svg+xml; charset=UTF-8" .svg
AddType "text/plain; charset=UTF-8" .txt

ErrorDocument 404 /404.html
`;

fs.mkdirSync(OUT_DIR, { recursive: true });
// пишем и скрытый, и «видимый» дубль
fs.writeFileSync(HTACCESS, CONTENT, "utf8");
fs.writeFileSync(HTACCESS_TXT, CONTENT, "utf8");

// лог
const list = fs
  .readdirSync(OUT_DIR, { withFileTypes: true })
  .map(d => `${d.isDirectory() ? "[d]" : "[f]"} ${d.name}`)
  .join("\n");

console.log(`✓ wrote: ${HTACCESS}`);
console.log(`✓ wrote: ${HTACCESS_TXT}`);
console.log("out/ contents:\n" + list);
