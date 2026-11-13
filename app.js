(function () {
  const A = ALOJAMIENTOS[window.ALOJAMIENTO];
  const app = document.getElementById("app");
  document.documentElement.dataset.alojamiento = A.id;

  // ---------- utilidades ----------
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const telHref = (n) => "tel:" + (n.startsWith("+") ? n : "+54" + n).replace(/[^\d+]/g, "");
  const waHref = (n) => "https://wa.me/" + n.replace(/\D/g, "");
  const ext = (url, label, cls = "link") =>
    url ? `<a class="${cls}" href="${esc(url)}" target="_blank" rel="noopener">${esc(label)} ${ICON.arrow}</a>` : "";
  const mapsBtn = (url) => ext(url, "Cómo llegar", "chip");
  const enlace = (key, label) => ext(ENLACES[key], label);
  const lista = (items) => `<ul class="list">${items.map((i) => `<li>${typeof i === "string" ? esc(i) : esc(i.texto) + " " + mapsBtn(i.maps)}</li>`).join("")}</ul>`;
  const card = (titulo, cuerpo, extra = "") => `<section class="card">${titulo ? `<h3>${esc(titulo)}</h3>` : ""}${cuerpo}${extra}</section>`;
  // Actividades sin lugar fijo: se piden informes en la oficina de turismo de El Bolsón
  const informes = () => {
    const t = INFO_TURISTICA[0];
    return `<p class="nota">Informes en el ${esc(t.nombre)}.</p>
      <div class="acciones"><a class="chip" href="${telHref(t.tel)}">${ICON.phone} ${esc(t.tel)}</a>${mapsBtn(t.maps)}</div>`;
  };
  const p = (t) => (t ? `<p>${esc(t)}</p>` : "");
  const foto = (slug) => {
    // Varias fotos: van completas, sin recortar, una al lado de la otra
    if (Array.isArray(slug)) return `<div class="foto-par">${slug.map((x) => FOTOS[x] ? `<img src="${esc(FOTOS[x].src)}" alt="" loading="lazy">` : "").join("")}</div>`;
    const f = FOTOS[slug];
    return f ? `<figure class="foto-lugar"><img src="${esc(f.src)}" alt="" loading="lazy">${f.url ? `
      <figcaption><a href="${esc(f.url)}" target="_blank" rel="noopener">Foto: ${esc(f.autor)} · ${esc(f.licencia)}</a></figcaption>` : ""}</figure>` : "";
  };

  const ICON = {
    arrow: `<svg class="i-arrow" viewBox="0 0 24 24"><path d="M7 17 17 7M8 7h9v9"/></svg>`,
    back: `<svg viewBox="0 0 24 24"><path d="M15 18 9 12l6-6"/></svg>`,
    pin: `<svg viewBox="0 0 24 24"><path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/></svg>`,
    key: `<svg viewBox="0 0 24 24"><circle cx="8" cy="15" r="4"/><path d="m11 12 9-9M17 6l3 3M15 8l2 2"/></svg>`,
    phone: `<svg viewBox="0 0 24 24"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/></svg>`,
    wifi: `<svg viewBox="0 0 24 24"><path d="M2 8.8a15 15 0 0 1 20 0M5 12.5a10 10 0 0 1 14 0M8.5 16a5 5 0 0 1 7 0"/><circle cx="12" cy="19.5" r=".8"/></svg>`,
    rules: `<svg viewBox="0 0 24 24"><path d="M7 3h10a2 2 0 0 1 2 2v16l-3-2-2 2-2-2-2 2-2-2-3 2V5a2 2 0 0 1 2-2zM9 8h6M9 12h6"/></svg>`,
    info: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7.5v.5"/></svg>`,
    home: `<svg viewBox="0 0 24 24"><path d="M3 11 12 4l9 7M5 10v10h14V10M10 20v-5h4v5"/></svg>`,
    mountain: `<svg viewBox="0 0 24 24"><path d="m2 20 7-12 4 6 3-4 6 10z"/><path d="m7.5 11 1.5 1.5L11 11"/></svg>`,
    bulb: `<svg viewBox="0 0 24 24"><path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3z"/></svg>`,
    food: `<svg viewBox="0 0 24 24"><path d="M7 3v8M4 3v5a3 3 0 0 0 6 0V3M7 11v10M17 21V3c-2.5 1-4 3.5-4 7v3h4"/></svg>`,
    leaf: `<svg viewBox="0 0 24 24"><path d="M12 3c3 2.5 4.5 5.5 4.5 9S15 18.5 12 21c-3-2.5-4.5-5.5-4.5-9S9 5.5 12 3z"/><path d="M12 7v14M12 11l2.5-2M12 15l-2.5-2"/></svg>`,
    star: `<svg viewBox="0 0 24 24"><path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1 6.2L12 17.3 6.5 20.2l1-6.2L3 9.6l6.2-.9z"/></svg>`,
    copy: `<svg viewBox="0 0 24 24"><rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"/></svg>`,
    ig: `<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".8"/></svg>`,
    wa: `<svg viewBox="0 0 24 24"><path d="M4 20l1.3-4A8 8 0 1 1 8 18.7z"/><path d="M9 9.5c0 3 2.5 5.5 5.5 5.5l1-1.5-2-1-1 1a4 4 0 0 1-2-2l1-1-1-2z"/></svg>`,
  };

  const otraLocalidad = A.localidad === "El Bolsón" ? "Lago Puelo" : "El Bolsón";

  // ---------- secciones (los once botones) ----------
  const SECCIONES = [
    {
      id: "ubicacion", titulo: "Ubicación y cómo llegar", icono: "pin",
      render: () =>
        (A.fotoFachada ? `<img class="foto" src="${esc(A.fotoFachada)}" alt="Fachada de ${esc(A.nombre)}">` : "") +
        (A.indicaciones ? card("", lista(A.indicaciones)) : "") +
        (A.mapsUrl
          ? `<a class="btn-primario" href="${esc(A.mapsUrl)}" target="_blank" rel="noopener">${ICON.pin} Abrir en Google Maps</a>`
          : `<p class="pendiente">Enlace de Google Maps pendiente.</p>`),
    },
    {
      id: "checkin", titulo: "Check-in / Check-out", icono: "key",
      render: () =>
        `<div class="horarios">
          <div><span class="etq">Check-in</span><strong>15 h</strong><small>${esc(CHECKIN.entrada)}</small></div>
          <div><span class="etq">Check-out</span><strong>10 h</strong><small>${esc(CHECKIN.salida)}</small></div>
        </div>` +
        card("Llegada", p(CHECKIN.recibimiento)) +
        card("Salida", lista(CHECKIN.salidaDetalle)),
    },
    {
      id: "contacto", titulo: "Contacto", icono: "phone",
      render: () =>
        card(FRANCISCO.nombre, `<p class="grande">${esc(FRANCISCO.telefono)}</p><p>Siempre atento.</p>
          <div class="acciones">
            <a class="btn-primario" href="${waHref(FRANCISCO.tel)}" target="_blank" rel="noopener">${ICON.wa} Escribir por WhatsApp</a>
          </div>`) +
        card("Seguinos en Instagram",
          A.instagram
            ? `<a class="btn-secundario" href="https://instagram.com/${esc(A.instagram)}" target="_blank" rel="noopener">${ICON.ig} @${esc(A.instagram)}</a>`
            : `<p class="pendiente">Cuenta de Instagram pendiente.</p>`),
    },
    {
      id: "wifi", titulo: "Wifi", icono: "wifi",
      render: () =>
        `<div class="wifi">
          <span class="etq">Red</span><p class="grande">${esc(A.wifi.red)}</p>
          <span class="etq">Contraseña</span><p class="grande mono">${esc(A.wifi.clave)}</p>
          <button class="btn-primario" id="copiar">${ICON.copy} <span>Copiar contraseña</span></button>
        </div>`,
      despues: () => {
        const b = document.getElementById("copiar");
        b.onclick = async () => {
          try { await navigator.clipboard.writeText(A.wifi.clave); }
          catch {
            const t = document.createElement("textarea"); t.value = A.wifi.clave; document.body.appendChild(t);
            t.select(); document.execCommand("copy"); t.remove();
          }
          b.querySelector("span").textContent = "¡Copiada!";
          b.classList.add("ok");
          setTimeout(() => { b.querySelector("span").textContent = "Copiar contraseña"; b.classList.remove("ok"); }, 2000);
        };
      },
    },
    {
      id: "reglamento", titulo: "Reglamento", icono: "rules",
      render: () => card("", lista(A.reglamento)),
    },
    {
      id: "info", titulo: "Información importante", icono: "info",
      render: () => {
        const nums = (v) => [].concat(v || []).map((n) => `<a class="num" href="${telHref(n)}">${esc(n)}</a>`).join("");
        const emerg = EMERGENCIAS[A.localidad].map((e) =>
          `<li class="emerg"><span>${esc(e.nombre)}</span><span class="nums">${nums(e.corto)}${nums(e.directo)}</span></li>`).join("");
        const serv = A.servicios.map((s) => card(s.titulo, lista(s.items), s.enlace ? enlace(s.enlace, s.etiqueta) : "")).join("");
        const tur = INFO_TURISTICA.map((t) => card(t.nombre,
          p(t.texto) +
          `<div class="acciones">
            ${t.tel ? `<a class="chip" href="${telHref(t.tel)}">${ICON.phone} ${esc(t.tel)}</a>` : ""}
            ${t.whatsapp ? `<a class="chip" href="${waHref(t.whatsapp)}" target="_blank" rel="noopener">${ICON.wa} ${esc(t.whatsapp)}</a>` : ""}
            ${t.email ? `<a class="chip" href="mailto:${esc(t.email)}">${esc(t.email)}</a>` : ""}
            ${mapsBtn(t.maps)}
          </div>`)).join("");
        return `<h2 class="sub">Teléfonos de emergencia · ${esc(A.localidad)}</h2>
          <section class="card"><ul class="list emergs">${emerg}</ul><p class="nota">${esc(EMERGENCIAS_NOTA)}</p></section>
          <h2 class="sub">Servicios cerca</h2>${serv}
          <h2 class="sub">Información turística</h2>${tur}`;
      },
    },
    {
      id: "comodidades", titulo: "Comodidades", icono: "home",
      render: () =>
        card("", lista(A.comodidades.intro)) +
        `<div class="grilla-2">${A.comodidades.grupos.map((g) =>
          card(g.titulo, g.items.length ? lista(g.items) : "", g.enlace ? enlace(g.enlace, g.etiqueta) : "")).join("")}</div>`,
    },
    {
      id: "actividades", titulo: "Actividades", icono: "mountain",
      tabs: [
        {
          id: "paseos", titulo: "Paseos",
          render: () => PASEOS.map((x) => `<section class="card">${foto(x.foto)}
              <span class="etq">${esc(x.lugar)}</span><h3>${esc(x.nombre)}</h3>${lista(x.puntos)}
              <div class="acciones">${(x.enlaces || []).map((l) => ext(l.url, l.etiqueta, "chip")).join("")}${mapsBtn(x.maps)}</div>
            </section>`).join("") + `<p class="nota">${esc(INVIERNO_NOTA)}</p>`,
        },
        {
          id: "aventura", titulo: "Actividades",
          render: () => ACTIVIDADES.map((x) => card(x.nombre,
            foto(x.foto) + p(x.texto) + (x.lugares ? `<ul class="list">${x.lugares.map((l) => `<li>${esc(l.nombre)} ${mapsBtn(l.maps)}</li>`).join("")}</ul>` : ""),
            x.informes ? informes() : "")).join("") +
            card("Agenda cultural", `<p>${esc(AGENDA.nombre)}</p>`, mapsBtn(AGENDA.maps)),
        },
        {
          id: "invierno", titulo: "Invierno",
          render: () => INVIERNO.map((x) => card(x.nombre,
            p(x.texto) + (x.lugares ? `<ul class="list">${x.lugares.map((l) => `<li>${esc(l.nombre)} ${mapsBtn(l.maps)}</li>`).join("")}</ul>` : ""),
            mapsBtn(x.maps))).join("") +
            `<p class="nota">${esc(INVIERNO_NOTA)}</p>` + enlace("turismoInvierno", "Actividades de invierno (turismo El Bolsón)"),
        },
        {
          id: "fiestas", titulo: "Fiestas",
          render: () => `<section class="card"><ul class="list fiestas">${FIESTAS.map((f) =>
            `<li><span><strong>${esc(f.nombre)}</strong>${f.lugar ? `<small>${esc(f.lugar)}</small>` : ""}</span><span class="cuando">${esc(f.cuando)}</span></li>`).join("")}</ul>
            <p class="nota">${esc(FIESTAS_NOTA)}</p></section>`,
        },
      ],
    },
    {
      id: "recomendaciones", titulo: "Recomendaciones", icono: "bulb",
      render: () => `<section class="card"><ol class="list numerada">${RECOMENDACIONES.map((r) =>
        `<li>${esc(r.texto)}${r.enlace ? "<br>" + enlace(r.enlace, r.etiqueta) : ""}</li>`).join("")}</ol></section>`,
    },
    {
      id: "comer", titulo: "Dónde comer", icono: "food",
      tabs: [A.localidad, otraLocalidad].map((loc) => ({
        id: loc === "El Bolsón" ? "bolson" : "puelo", titulo: loc,
        render: () => COMER[loc].map((x) => {
          const texto = [x.texto, A.id === "casis" ? x.soloCasis : ""].filter(Boolean).join(" ");
          const ig = x.instagram ? ext("https://instagram.com/" + x.instagram, "@" + x.instagram, "chip") : "";
          return card(x.nombre, p(texto), `<div class="acciones">${ig}${mapsBtn(x.maps)}</div>`);
        }).join(""),
      })),
    },
    {
      id: "resena", titulo: "Reseña", icono: "star",
      render: () => card("", `<p class="cita">${esc(RESENA)}</p>`,
        A.booking
          ? `<a class="btn-primario" href="${esc(A.booking)}" target="_blank" rel="noopener">${ICON.star} Dejar reseña en Booking</a>`
          : `<p class="pendiente">Enlace de Booking pendiente.</p>`),
    },
    {
      id: "conoce", titulo: "Conocé El Bolsón", icono: "leaf",
      render: () => CONOCE.map((b) => card(b.titulo, foto(b.foto) + b.texto.map(p).join(""))).join(""),
    },
  ];

  // ---------- pantallas ----------
  const logo = `<img class="logo" src="${esc(A.logo)}" alt="${esc(A.nombre)}">`;

  function bienvenida() {
    return `<main class="bienvenida">
      ${logo}
      <p class="tipo">${esc(A.tipo)}</p>
      <p class="texto-bienvenida">${esc(BIENVENIDA)}</p>
      <a class="btn-primario grande" href="#menu">Ver la guía</a>
    </main>`;
  }

  function menu() {
    return `<header class="cabecera">${logo}<p class="tipo">${esc(A.tipo)}</p></header>
      <main class="menu">${SECCIONES.map((s) =>
        `<a class="boton" href="#${s.id}"><span class="ico">${ICON[s.icono]}</span><span>${esc(s.titulo)}</span></a>`).join("")}</main>
      ${A.instagram ? `<footer class="pie"><a href="https://instagram.com/${esc(A.instagram)}" target="_blank" rel="noopener">${ICON.ig} Seguinos en Instagram</a></footer>` : ""}`;
  }

  function seccion(s, tabId) {
    let cuerpo, tabs = "";
    if (s.tabs) {
      const t = s.tabs.find((x) => x.id === tabId) || s.tabs[0];
      tabs = `<nav class="tabs">${s.tabs.map((x) =>
        `<a href="#${s.id}/${x.id}" class="${x === t ? "activa" : ""}">${esc(x.titulo)}</a>`).join("")}</nav>`;
      cuerpo = t.render();
    } else cuerpo = s.render();
    return `<header class="barra">
        <a class="volver" href="#menu" aria-label="Volver">${ICON.back}</a>
        <h1>${esc(s.titulo)}</h1>
        <span class="ico">${ICON[s.icono]}</span>
      </header>${tabs}<main class="contenido">${cuerpo}</main>`;
  }

  function mostrar() {
    const [ruta, sub] = location.hash.replace("#", "").split("/");
    const s = SECCIONES.find((x) => x.id === ruta);
    app.className = s ? "vista-seccion" : ruta === "menu" ? "vista-menu" : "vista-bienvenida";
    app.innerHTML = s ? seccion(s, sub) : ruta === "menu" ? menu() : bienvenida();
    if (s && s.despues) s.despues();
    window.scrollTo(0, 0);
  }

  window.addEventListener("hashchange", mostrar);
  mostrar();

  // Funciona sin señal: registra el service worker (la raíz de la app es la carpeta de arriba)
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("../sw.js", { scope: "../" }).catch(() => {});
  }
})();
