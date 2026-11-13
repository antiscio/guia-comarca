// Guarda la app en el celular para que funcione sin señal.
// Al cambiar cualquier contenido, subir el número de versión para que los huéspedes reciban lo nuevo.
const VERSION = "guia-v10";
const ARCHIVOS = [
  "./styles.css", "./data.js", "./app.js",
  "./casis/", "./casis/index.html", "./casis/manifest.webmanifest",
  "./kalimera/", "./kalimera/index.html", "./kalimera/manifest.webmanifest",
  "./img/logo-casis.svg", "./img/logo-kalimera.png",
  "./img/icono-casis-192.png", "./img/icono-kalimera-192.png",
];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(VERSION).then((c) => c.addAll(ARCHIVOS)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== VERSION).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET") return;
  const url = new URL(e.request.url);
  const propio = url.origin === location.origin;
  const fuente = url.host === "fonts.googleapis.com" || url.host === "fonts.gstatic.com";
  if (!propio && !fuente) return;

  // Primero la red (contenido actualizado); sin señal, lo guardado.
  e.respondWith(
    fetch(e.request)
      .then((r) => {
        if (r.ok || r.type === "opaque") {
          const copia = r.clone();
          caches.open(VERSION).then((c) => c.put(e.request, copia));
        }
        return r;
      })
      .catch(() => caches.match(e.request, { ignoreSearch: true }))
  );
});
