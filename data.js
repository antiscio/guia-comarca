/*
  Contenido de la guía. Todo sale de "Guía alojamientos – Contenido para Claude Code".
  Los campos marcados PENDIENTE están vacíos ("") a propósito: cuando se completen, aparecen solos en la app.
  Para sumar un alojamiento: agregar una entrada en ALOJAMIENTOS y una carpeta como /casis.
*/

// Enlace de búsqueda en Google Maps a partir de un nombre o dirección
const maps = (q) => "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(q);

const FRANCISCO = { nombre: "Francisco", telefono: "294 457-6587", tel: "+5492944576587" };

const BIENVENIDA =
  "¡Bienvenidos! Nos alegra mucho recibirlos. Preparamos esta guía para que tengan a mano todo lo que necesitan durante su estadía y algunas de nuestras recomendaciones favoritas de la Comarca Andina. Cualquier cosa que necesiten, Francisco está para ayudarlos. ¡Que disfruten su estadía!";

const RESENA =
  "Esperamos que hayas disfrutado de tu estadía y de la Comarca. Si te sentiste a gusto, nos ayudaría mucho que compartieras tu experiencia en Booking: tus palabras orientan a otros viajeros y nos alegran a nosotros. ¡Gracias, y ojalá vuelvas pronto!";

// Enlaces oficiales
const ENLACES = {
  splif: "https://splif.rionegro.gov.ar/el-bolson",                          // SPLIF El Bolsón: nivel de peligrosidad, se actualiza a diario
  golondrinaHorarios: "https://www.turismoelbolson.gob.ar/conectividad-comarcal", // Conectividad comarcal (turismo El Bolsón)
  turismoInvierno: "https://www.turismoelbolson.gob.ar/actividades-invernales",
  anpraleRegistro: "https://anprale.com/recomendaciones-registro/",          // ANPRALE: registro obligatorio y aviso de descenso
};

// Información importante: registro para subir al ANPRALE (según anprale.com)
const ANPRALE = {
  titulo: "Si suben al ANPRALE (Cajón del Azul y refugios)",
  items: [
    "Antes de subir hay que registrarse: es obligatorio y personal, uno por persona. Se hace por la web o en Informes de Montaña.",
    "Cada uno necesita su propio correo electrónico: ahí llega el comprobante con el número de registro, que pueden pedir los guardas.",
    "El día que bajan, hay que hacer el aviso de descenso en la misma web, con el número de registro.",
    "Antes de salir, revisen el estado de los senderos: algunos sectores siguen cerrados por el incendio de 2025.",
  ],
};

const CHECKIN = {
  entrada: "Después de las 15 h.",
  salida: "Hasta las 10 h. Salida tardía, a consultar.",
  recibimiento:
    "Los recibimos en persona: les mostramos el lugar, cómo funciona todo y les damos un panorama de la zona.",
  salidaDetalle: [
    "Lo ideal es que el día anterior nos avisen por mensaje a qué hora salen.",
    "La llave se le entrega a Francisco si los despide; si no, Francisco les indica personalmente dónde dejarla.",
  ],
};

const EMERGENCIAS = {
  "El Bolsón": [
    { nombre: "Policía", corto: "911" },
    { nombre: "Hospital de Área", directo: "294 449-3632" },
    { nombre: "Bomberos Voluntarios", directo: "294 486-0939" },
    {
      nombre: "SPLIF (Servicio de Prevención y Lucha contra Incendios Forestales)",
      corto: "103",
      directo: ["294 449-2310", "294 445-5973"],
    },
  ],
  "Lago Puelo": [
    { nombre: "Policía", corto: ["101", "911"] },
    { nombre: "Hospital", directo: "294 449-9041" },
    { nombre: "Bomberos", corto: "114", directo: "294 449-9029" },
    { nombre: "Defensa Civil", directo: "294 449-9299" },
  ],
};
const EMERGENCIAS_NOTA =
  "Desde algunos celulares los números cortos pueden comunicar con otra localidad; conviene usar los números directos.";

// localidad: solo se muestra en la guía de esa localidad (Lago Puelo, pedido para Kalimera); sin localidad, en todas
const INFO_TURISTICA = [
  {
    id: "turismoBolson",
    nombre: "Centro de Informes Turísticos de El Bolsón",
    texto: "Av. Belgrano y Pastorino (entrada sur, Ruta 40).",
    tel: "+54 294 4498008",
    email: "turismo@elbolson.gov.ar",
    maps: maps("Centro de Informes Turísticos, Av. Belgrano y Pastorino, El Bolsón"),
  },
  {
    nombre: "Informes de Montaña de El Bolsón",
    texto: "Mario J. Guasco y Perito Moreno, junto a la plaza. De 8 a 20 h.",
    whatsapp: "+54 9 294 4929496",
    maps: maps("Informes de Montaña, Mario J. Guasco y Perito Moreno, El Bolsón"),
  },
  {
    nombre: "Centro de Informes Turísticos de Lago Puelo", localidad: "Lago Puelo",
    texto: "Av. 2 de Abril y Av. Los Notros, frente a la plaza. Atención telefónica todos los días de 8 a 19 h.",
    tel: "+54 9 294 4141353",
    email: "info.turismo@lagopuelo.gob.ar",
    maps: maps("Oficina de Turismo, Av. 2 de Abril y Av. Los Notros, Lago Puelo, Chubut"),
  },
];

const RECOMENDACIONES = [
  { texto: "Bajen antes el mapa de la Comarca en Google Maps para usarlo sin conexión." },
  { texto: "Lleven algo de abrigo aunque sea verano." },
  { texto: "Tengan efectivo para la feria y las chacras." },
  { texto: "Respeten la prohibición de fuego.", enlace: "splif", etiqueta: "Ver si se puede hacer fuego (SPLIF)" },

  { texto: "En verano, lleven repelente para los tábanos en los ríos." },
  { texto: "Verifiquen en Google los horarios de los lugares recomendados." },
];

const COMER = {
  "El Bolsón": [
    { nombre: "Jauja", texto: "Heladería (artesanal, con leche y frutas del lugar), chocolatería y restaurante al lado. A media cuadra de la plaza.", maps: maps("Jauja, El Bolsón") },
    { nombre: "Zona Perito Moreno y Dorrego", texto: "Cafés, restaurantes y cervecerías. La zona con más movida nocturna.", maps: maps("Perito Moreno y Dorrego, El Bolsón") },
    { nombre: "Patio Cervecero", texto: "Frente a la plaza.", maps: maps("Patio Cervecero, El Bolsón") },
    { nombre: "Feria Regional", texto: "Martes, jueves y sábados (también domingos y feriados, según la época), de 10 hasta la tarde. Conviene ir a la mañana.", maps: maps("Feria Regional, El Bolsón") },
    { nombre: "Supermercado La Anónima", texto: "", soloCasis: "Cerca del departamento.", maps: maps("La Anónima, El Bolsón") },
    { nombre: "El Chaqueño", texto: "Av. San Martín 1996. Abre siempre, incluso al mediodía y feriados.", maps: maps("El Chaqueño, Av. San Martín 1996, El Bolsón") },
    { nombre: "Altos Pollos", texto: "Rotisería al peso, frente a El Chaqueño.", maps: maps("Altos Pollos, El Bolsón") },
    { nombre: "Panadería La Tribu", texto: "Al lado de la rotisería.", soloCasis: "Este rincón queda a 3–4 cuadras del depto.", maps: maps("Panadería La Tribu, El Bolsón") },
    { nombre: "Almendra Pastelería", texto: "Av. San Martín y Lavalle. Casera, con opciones veganas.", maps: maps("Almendra Pastelería, El Bolsón") },
    { nombre: "Lo de María Bakeshop", texto: "Av. San Martín 3275. Wifi, mesas afuera, opciones veganas.", maps: maps("Lo de María Bakeshop, Av. San Martín 3275, El Bolsón") },
    { nombre: "Humus de la Montaña (Chacra Humus)", texto: "Camino de los Nogales, a 2,4 km del centro. A la mañana: yogur, leche fresca, quesos, ahumados y dulces. A la tarde: confitería y heladería. En invierno, cerrado.", instagram: "heladoshumus", maps: maps("Chacra Humus, Camino de los Nogales, El Bolsón") },
    { nombre: "La Encontrada Wine Bistró", texto: "Camino al Cerro Amigo, complejo Duendes y Hadas. Vinos y productos de la Comarca.", maps: maps("La Encontrada Wine Bistró, El Bolsón") },
  ],
  "Lago Puelo": [
    { nombre: "Supermercado La Anónima", texto: "Ruta 16. Muy grande, con estacionamiento.", maps: maps("La Anónima, Ruta 16, Lago Puelo") },
    { nombre: "Zona gastronómica", texto: "En la entrada al pueblo desde el norte.", maps: maps("Lago Puelo, Chubut") },
    { nombre: "Panadería Delicias del Lago", texto: "La clásica, buena.", maps: maps("Panadería Delicias del Lago, Lago Puelo") },
    { nombre: "Casa KoKo", texto: "Masa madre y pastelería. Una alternativa interesante.", maps: maps("Casa KoKo, Lago Puelo") },
    { nombre: "Chocolates Lago Puelo", texto: "Ruta 16. Chocolatería, casa de té, cafetería y heladería artesanal, muy rica.", maps: maps("Chocolates Lago Puelo, Ruta 16") },
    { nombre: "Sepia Casa de Té", texto: "Pastelería artesanal, ambiente acogedor.", maps: maps("Sepia Casa de Té, Lago Puelo") },
  ],
};

// Fotos: las propias no llevan crédito; las de Wikimedia Commons, autor y licencia (obligatorio)
const FOTOS = {
  "bosque-tallado": {
    "src": "../img/fotos/bosque-tallado.jpg",
    "autor": "Jaqura1",
    "licencia": "CC BY-SA 4.0",
    "url": "https://commons.wikimedia.org/wiki/File:BOSQUE_TALLADO.jpg"
  },
  "cajon-del-azul": {
    "src": "../img/fotos/cajon-del-azul.jpg",
    "autor": "Thalassa16",
    "licencia": "CC BY-SA 4.0",
    "url": "https://commons.wikimedia.org/wiki/File:El_Caj%C3%B3n_del_Azul_paisaje.jpg"
  },
  "cascada-escondida": {
    "src": "../img/fotos/cascada-escondida.jpg",
    "autor": "Isha",
    "licencia": "CC BY-SA 3.0",
    "url": "https://commons.wikimedia.org/wiki/File:Mirador_desde_Cascada_Escondida.jpg"
  },
  "lago-puelo": {
    "src": "../img/fotos/lago-puelo.jpg"
  },
  "puerto-patriada": {
    "src": "../img/fotos/puerto-patriada.jpg"
  },
  "laberinto": {
    "src": "../img/fotos/laberinto.jpg",
    "autor": "KorgM50",
    "licencia": "CC0",
    "url": "https://commons.wikimedia.org/wiki/File:Laberinto_Patagonia.jpg"
  },
  "kayak": {
    "src": "../img/fotos/kayak.jpg"
  },
  "desemboque": {
    "src": "../img/fotos/desemboque.jpg"
  },
  "corbata-blanca": {
    "src": "../img/fotos/corbata-blanca.jpg"
  },
  "bodega-adamow": {
    "src": "../img/fotos/bodega-adamow.jpg"
  },
  "motoco": {
    "src": "../img/fotos/motoco.jpg"
  },
  "rio-azul": {
    "src": "../img/fotos/rio-azul.jpg"
  },
  "flores-centro": {
    "src": "../img/fotos/flores-centro.jpg"
  },
  "flores-pico": {
    "src": "../img/fotos/flores-pico.jpg"
  },
  "cerro-amigo": {
    "src": "../img/fotos/cerro-amigo.jpg"
  },
  "otono": {
    "src": "../img/fotos/otono.jpg"
  },
  "cerezas": {
    "src": "../img/fotos/cerezas.jpg"
  },
  "parapente": {
    "src": "../img/fotos/parapente.jpg"
  },
  "epuyen": {
    "src": "../img/fotos/epuyen.jpg"
  },
  "parva": {
    "src": "../img/fotos/parva.jpg"
  }
};





// Paseos compartidos. Las distancias son las del contenido (desde el centro de El Bolsón cuando así figura).
const PASEOS = [
  {
    nombre: "Cerro Amigo", foto: "cerro-amigo", lugar: "El Bolsón",
    puntos: ["Miradores al valle; caminata corta y fácil.", "La entrada vale por una semana.", "Abierto todo el año."],
    maps: maps("Cerro Amigo, El Bolsón"),
  },
  {
    nombre: "Cerro Piltriquitrón: Plataforma, Bosque Tallado y Refugio", foto: "bosque-tallado", lugar: "El Bolsón",
    puntos: [
      "En auto: 13 km de ripio desde la Ruta 40 sur hasta la Plataforma (~1400 msnm), despegue de parapente (vuelos de bautismo).",
      "A pie: 30–60 min al Bosque Tallado, con unas 60 esculturas (Marcelo López, 1998). Hay baños y agua potable.",
      "Unos 15 min más: Refugio Piltriquitrón (pizzas, cerveza, productos regionales). La cumbre (2260 msnm) está a ~3 h del refugio.",
      "Lleven agua y calzado adecuado, y no suban al mediodía en verano.",
      "En invierno el refugio y el Bosque Tallado siguen abiertos, aun con nieve: consulten el estado de los caminos antes de subir.",
    ],
    maps: maps("Bosque Tallado, Cerro Piltriquitrón, El Bolsón"),
  },
  {
    nombre: "Wharton – La Confluencia – Refugios del ANPRALE", foto: "cajon-del-azul", lugar: "Mallín Ahogado",
    puntos: [
      "Chacra Wharton, en Mallín Ahogado, a 16–17 km del centro. Antes de bajar hay cervecerías y pizza (por ejemplo, Campo Base).",
      "Bajada de ~40 min a La Confluencia (ríos Azul y Encanto Blanco), con camping.",
      "Cruzando la primera pasarela, la hostería La Confluencia, para comer o tomar un té.",
      "Desde ahí, el Cajón del Azul y los refugios del ANPRALE (~13 interconectados).",
      "Registro obligatorio antes de subir: en anprale.com o en Informes de Montaña.",
    ],
    enlaces: [{ etiqueta: "Registro ANPRALE", url: ENLACES.anpraleRegistro }],
    maps: maps("Chacra Wharton, Mallín Ahogado, El Bolsón"),
  },
  {
    nombre: "Cascada Escondida y Jardín Botánico", foto: "cascada-escondida", lugar: "Mallín Ahogado",
    puntos: ["A ~10 km.", "Salto de ~30 m con piletón al pie; senderos de flora nativa.", "Gratuito."],
    maps: maps("Cascada Escondida, El Bolsón"),
  },
  {
    nombre: "Museo de Piedras Patagónicas", lugar: "Mallín Ahogado",
    puntos: ["Chacra Iaten K'Aike, a ~13 km.", "Rocas y minerales, meteoritos; taller de lapidación y venta."],
    maps: maps("Museo de Piedras Patagónicas, Mallín Ahogado, El Bolsón"),
  },
  {
    nombre: "Piscicultura Truchas Río Negro", lugar: "Camino a Bariloche",
    puntos: ["A ~8 km, camino a Bariloche; todo el año.", "Pescás tu trucha y te la entregan lista. Ahumados, dulces, hongos, escabeches."],
    maps: maps("Piscicultura Truchas Río Negro, El Bolsón"),
  },
  {
    nombre: "Bodega Adamow", foto: "bodega-adamow", lugar: "Cerro Radal, Lago Puelo",
    puntos: ["Bodega boutique familiar, a 10 min del centro de Lago Puelo.", "Pinot Noir y Sauvignon Blanc; visitas y degustación."],
    maps: maps("Bodega Adamow, Lago Puelo"),
  },
  {
    nombre: "Parque Nacional Lago Puelo", foto: "lago-puelo", lugar: "Lago Puelo",
    puntos: [
      "Navegación: Náutica Puelo (~3 h, hasta 5 pasajeros; traslados a El Turbio).",
      "La Playita por el Sendero del Pitranto Grande (~1 km), y un sendero corto al Mirador de La Playita.",
    ],
    maps: maps("Parque Nacional Lago Puelo"),
  },
  {
    nombre: "Mirador de los Saltos del Motoco", foto: "motoco", lugar: "Río Azul",
    puntos: [
      "Desde la pasarela del río Azul; ~5 km ida y vuelta (~1 h 30), con la Cascada Cárdenas en el camino.",
      "En el camping junto al río Blanco se puede tomar algo.",
    ],
    maps: maps("Saltos del Motoco"),
  },
  {
    nombre: "Laberinto Patagonia", foto: "laberinto", lugar: "El Hoyo",
    puntos: ["Camino a El Desemboque km 3,7.", "~8000 m² y 2,2 km de sendero. Confitería, restaurante, helados, sidra de hielo."],
    maps: maps("Laberinto Patagonia, El Hoyo"),
  },
  {
    nombre: "El Desemboque", foto: "desemboque", lugar: "El Hoyo",
    puntos: ["Donde el río Epuyén desemboca en el lago Puelo. Se cobra entrada.", "Hay un pitranto muy antiguo."],
    maps: maps("El Desemboque, El Hoyo, Chubut"),
  },
  {
    nombre: "Puerto Patriada", foto: "puerto-patriada", lugar: "Lago Epuyén",
    puntos: ["De los lugares más lindos de la Comarca.", "Agua tranquila, ideal para SUP y kayak. Camping, proveeduría y restaurante."],
    maps: maps("Puerto Patriada, Lago Epuyén"),
  },
  {
    nombre: "Cascada Corbata Blanca", foto: "corbata-blanca", lugar: "El Hoyo",
    puntos: ["Estacionamiento pago.", "Sendero de ~35 min entre cipreses y coihues."],
    maps: maps("Cascada Corbata Blanca, El Hoyo"),
  },
  {
    nombre: "Stupa budista de Epuyén", lugar: "Epuyén",
    puntos: ["Antes de entrar a Epuyén desde El Hoyo, del lado este de la Ruta 40, señalizada.", "Libre y gratuita."],
    maps: maps("Stupa budista, Epuyén"),
  },
  {
    nombre: "Centro Cultural Antú Quillén", foto: "epuyen", lugar: "Lago Epuyén",
    puntos: ["En Puerto Bonito.", "Artesanías, galería, talleres, espectáculos y buffet."],
    maps: maps("Centro Cultural Antú Quillén, Puerto Bonito, Epuyén"),
  },
];

const ACTIVIDADES = [
  { nombre: "Rafting", foto: "rio-azul", texto: "En el río Azul.", informes: true },
  { nombre: "Parapente", foto: "parapente", texto: "En la plataforma del Piltriquitrón.", informes: true },
  { nombre: "Cabalgatas", texto: "", informes: true },
  { nombre: "Kayak y SUP", foto: "kayak", texto: "Kayak en los lagos y SUP en el lago Epuyén.", informes: true },
  { nombre: "Trekking con guía", texto: "Con guías habilitados de turismo. La lista se consulta en la oficina de informes.", informes: true },
  { nombre: "Alquiler de bicicletas", texto: "", informes: true },
  {
    nombre: "Esquí (en invierno)", texto: "En el Cerro Perito Moreno, a unos 25 km: esquí, trineo, raquetas y aerosilla. Más información en la pestaña Invierno.",
    lugares: [{ nombre: "Cerro Perito Moreno", maps: maps("Cerro Perito Moreno, El Bolsón") }],
  },
  {
    nombre: "Tirolesa", texto: "",
    lugares: [
      { nombre: "Parque Aéreo Kona (Las Golondrinas)", maps: maps("Parque Aéreo Kona, Las Golondrinas") },
      { nombre: "Patagonia Canopy Tour (Mallín)", maps: maps("Patagonia Canopy Tour, El Bolsón") },
    ],
  },
];

const INVIERNO = [
  {
    nombre: "Cerro Perito Moreno", texto: "Esquí, trineo, raquetas, aerosilla y el Refugio Albrecht Rudolph.", maps: maps("Cerro Perito Moreno, El Bolsón"),
    lugares: [{ nombre: "Refugio Albrecht Rudolph", maps: maps("Refugio Albrecht Rudolph, Mallín Ahogado, Río Negro") }],
  },
  { nombre: "Transfer de invierno", texto: "La Golondrina, desde Plaza Pagano.", maps: maps("Plaza Pagano, El Bolsón") },
  { nombre: "Piltriquitrón", texto: "El refugio y el Bosque Tallado siguen abiertos aun con nieve: consulten el estado de los caminos antes de subir.", maps: maps("Bosque Tallado, Cerro Piltriquitrón, El Bolsón") },
];
const INVIERNO_NOTA = "En invierno, consulten con turismo si cada lugar está abierto.";

const FIESTAS = [
  { nombre: "Fiesta del Lúpulo", lugar: "El Bolsón", cuando: "Verano" },
  { nombre: "Fiesta de la Fruta Fina", lugar: "El Hoyo", cuando: "Verano" },
  { nombre: "Fiesta del Artesano", lugar: "Epuyén", cuando: "Verano" },
  { nombre: "Fiesta del Bosque y su entorno", lugar: "Lago Puelo", cuando: "Verano" },
  { nombre: "Fiesta de La Trochita", lugar: "El Maitén", cuando: "Verano" },
  { nombre: "Fiesta del Asado", lugar: "Cholila", cuando: "Verano" },
  { nombre: "Oktoberfest", lugar: "", cuando: "Octubre" },
];
const FIESTAS_NOTA = "Las fechas cambian año a año: confirmen en turismo.";

const AGENDA = { nombre: "Casa del Bicentenario de El Bolsón", texto: "Agenda cultural.", maps: maps("Casa del Bicentenario, El Bolsón") };

// Sección "Conocé la Comarca Andina del Paralelo 42" (pedida después del contenido original; información de turismo y prensa regional)
const CONOCE = [
  {
    titulo: "La Comarca Andina del Paralelo 42",
    texto: [
      "Es una microrregión de la Patagonia andina situada a ambos lados del paralelo 42 sur, que marca el límite natural entre las provincias de Río Negro y Chubut.",
      "Sus localidades principales son El Bolsón, El Manso, Mallín Ahogado, Los Repollos y El Foyel, en Río Negro, y Lago Puelo, El Hoyo, Epuyén, El Maitén y Cholila, en Chubut. El Bolsón es el corazón de la microrregión.",
    ],
  },
  {
    titulo: "El Bolsón", foto: ["flores-centro", "flores-pico"],
    texto: [
      "El Bolsón está en un valle al pie del cerro Piltriquitrón, rodeado de montañas, ríos y bosques.",
      "En 1984 se declaró Zona No Nuclear, y desde entonces es conocido por su perfil ecológico, sus ferias y sus artesanos. En 2026 cumplió cien años.",
    ],
  },
  {
    titulo: "El clima", foto: "otono",
    texto: [
      "Tiene un microclima más templado que el de otros lugares de la cordillera. Los veranos son secos, con días calurosos y noches frescas; los inviernos, fríos y lluviosos, con nieve en los cerros.",
      "En otoño los bosques cambian de color. En cualquier época conviene tener algo de abrigo a mano.",
    ],
  },
  {
    titulo: "Lúpulo y cerveza artesanal",
    texto: [
      "El Bolsón es la zona lupulera más importante del país: acá se produce más de la mitad del lúpulo argentino.",
      "También es cuna de la cerveza artesanal en la Argentina, con decenas de productores en la Comarca. En verano se celebra la Fiesta del Lúpulo.",
    ],
  },
  {
    titulo: "Frutas finas", foto: "cerezas",
    texto: [
      "Frambuesas, frutillas, cerezas, guindas, grosellas, zarzamoras, saúco y casis crecen muy bien en el valle, y son una de las principales producciones de la zona.",
      "Se encuentran frescas en verano y todo el año en dulces, helados y licores. En El Hoyo se hace la Fiesta de la Fruta Fina.",
    ],
  },
  {
    titulo: "Chacras, quesos y trufas", foto: "parva",
    texto: [
      "Muchas chacras elaboran quesos caseros, lácteos, ahumados y dulces, y algunas se pueden visitar para conocer cómo trabajan y comprar directo.",
      "En los últimos años se sumaron las trufas, el azafrán y los vinos de la zona; en otoño se hace el Festival de la Trufa en Mallín Ahogado.",
    ],
  },
  {
    titulo: "Nieve",
    texto: [
      "En invierno, el cerro Perito Moreno, a unos 25 km, es el centro de esquí de la Comarca. Más información en Actividades → Invierno.",
    ],
  },
];

const ALOJAMIENTOS = {
  casis: {
    id: "casis",
    nombre: "Cassis",
    tipo: "Departamento en El Bolsón",
    logo: "../img/logo-casis.svg",   // provisorio
    localidad: "El Bolsón",
    mapsUrl: "https://maps.app.goo.gl/n6RDUL5sApuxFNHc9",
    indicaciones: ["Primer piso, sobre la cafetería.", "Departamento 10."],
    fotoFachada: "",  // PENDIENTE: foto de la fachada (carpeta Fotos/Departamento El Bolsón)
    instagram: "alquilerturistico_elbolson",
    booking: "https://www.booking.com/hotel/ar/departamento-70mts2-4personas.es.html",
    wifi: { red: "COOPETEL_912151", clave: "red508ab" },
    reglamento: [
      "No se fuma adentro.",
      "Por respeto a los vecinos, les pedimos bajar el volumen después de las 22 h.",
      "Si quieren venir con mascota, consúltennos antes.",
    ],
    comodidades: {
      intro: [
        "En pleno centro, en un primer piso.",
        "Dos habitaciones, cada una con su baño; living comedor luminoso y cocina.",
        "Para 4 personas. Totalmente equipado.",
      ],
      grupos: [
        { titulo: "Cocina", items: ["Heladera con freezer", "Pava eléctrica", "Cafetera", "Licuadora"] },
        { titulo: "Lavarropas", items: [] },
        { titulo: "Ropa blanca", items: ["Sábanas y toallas", "Acolchados abrigados en invierno y de verano", "Si necesitan más, nos piden."] },
        { titulo: "Baños", items: ["Secador de pelo", "Artículos de higiene"] },
        { titulo: "TV", items: ["TV en el dormitorio principal y TV grande en el living, con Roku: cada uno entra con su propia cuenta."] },
        { titulo: "Limpieza", items: ["Productos de limpieza disponibles."] },
      ],
    },
    servicios: [
      { titulo: "Estaciones de servicio", items: [
        "En El Bolsón hay cuatro:",
        { texto: "ACA, a 100 m.", maps: maps("YPF Full ACA El Bolsón, Av. San Martín, El Bolsón") },
        { texto: "Puma, enfrente de la ACA.", maps: maps("Puma Energy, Av. Belgrano y Perito Moreno, El Bolsón") },
        { texto: "A la salida hacia Bariloche.", maps: maps("YPF, Ruta 258 y Rodríguez Peña, El Bolsón") },
        { texto: "En Balcarce y San Martín.", maps: maps("Estación de servicio, Balcarce y San Martín, El Bolsón") },
      ] },
      { titulo: "Cajeros", items: [
        { texto: "Banco Patagonia – San Martín 2831", maps: maps("Banco Patagonia, San Martín 2831, El Bolsón") },
        { texto: "Banco Nación – San Martín 2598", maps: maps("Banco Nación, San Martín 2598, El Bolsón") },
      ] },
    ],
  },

  ginkgo: {
    id: "ginkgo",
    nombre: "Ginkgo",
    tipo: "Departamento en El Bolsón",
    logo: "../img/logo-ginkgo.png",
    localidad: "El Bolsón",
    mapsUrl: maps("Av. J. M. Pueyrredón 418, El Bolsón, Río Negro"),   // dirección de Booking
    indicaciones: ["Av. J. M. Pueyrredón 418, tercer piso."],
    instagram: "ginkgo_patagonia_departamento",
    booking: "https://www.booking.com/hotel/ar/ginkgo-patagonia.es.html",
    contacto: { nombre: "Victoria" },   // PROVISORIO: falta el teléfono
    wifi: { red: "", clave: "" },       // PENDIENTE
    reglamento: [
      "No se fuma adentro.",
      "Por respeto a los vecinos, les pedimos bajar el volumen después de las 22 h.",
      "No se aceptan mascotas.",
    ],
    comodidades: {
      intro: [
        "Con vista al cerro y al pueblo.",
        "Un dormitorio; cocina, comedor y living integrados, y un baño.",
        "Para 2 personas.",
      ],
      grupos: [
        { titulo: "Cocina", items: ["Pava eléctrica", "Microondas"] },
        { titulo: "Calefacción", items: ["Piso radiante: muy buena calefacción."] },
        { titulo: "Ropa blanca", items: ["Sábanas y toallas", "Acolchados abrigados en invierno y de verano", "Si necesitan más, nos piden."] },
        { titulo: "TV", items: [] },
        { titulo: "Lavarropas", items: ["No hay lavarropas."] },
      ],
    },
    servicios: [
      { titulo: "Estaciones de servicio", items: [
        "En El Bolsón hay cuatro:",
        { texto: "ACA, Av. San Martín.", maps: maps("YPF Full ACA El Bolsón, Av. San Martín, El Bolsón") },
        { texto: "Puma, Av. Belgrano y Perito Moreno.", maps: maps("Puma Energy, Av. Belgrano y Perito Moreno, El Bolsón") },
        { texto: "A la salida hacia Bariloche.", maps: maps("YPF, Ruta 258 y Rodríguez Peña, El Bolsón") },
        { texto: "En Balcarce y San Martín.", maps: maps("Estación de servicio, Balcarce y San Martín, El Bolsón") },
      ] },
      { titulo: "Cajeros", items: [
        { texto: "Banco Patagonia – San Martín 2831", maps: maps("Banco Patagonia, San Martín 2831, El Bolsón") },
        { texto: "Banco Nación – San Martín 2598", maps: maps("Banco Nación, San Martín 2598, El Bolsón") },
      ] },
    ],
  },

  kalimera: {
    id: "kalimera",
    nombre: "Kalimera",
    tipo: "Casa en Lago Puelo",
    logo: "../img/logo-kalimera.png",
    localidad: "Lago Puelo",
    mapsUrl: "https://maps.app.goo.gl/Gx6hEY7VXUV2xioi6",
    fotoFachada: "",
    instagram: "kalimera.casadehuespedes",
    booking: "https://www.booking.com/hotel/ar/kalimera-casa-de-huespedes.es.html",
    wifi: { red: "Agathos", clave: "Telperion" },
    reglamento: [
      "No se fuma adentro. En el parque se puede fumar, sin tirar colillas.",
      "Por respeto a los vecinos, les pedimos bajar el volumen después de las 22 h.",
      "No se aceptan mascotas.",
      "No se puede hacer asado, salvo que antes verifiquen que ese día está habilitado y no hay riesgo de incendio.",
    ],
    reglamentoEnlace: { enlace: "splif", etiqueta: "Ver si hoy se puede hacer fuego (SPLIF)" },
    comodidades: {
      intro: [
        "Sobre la Ruta 16, a unos 800 m del ingreso al lago.",
        "Para 6 personas. Dos dormitorios, living grande, comedor, cocina y lavaderito. Un solo baño.",
        "Parque grande, cerrado con un portón que cierra todo; los autos entran al parque.",
      ],
      grupos: [
        { titulo: "Camas", items: ["Dormitorio 1: cama doble", "Dormitorio 2: dos camas", "Living: sofá cama para dos"] },
        { titulo: "Cocina", items: ["Heladera con freezer", "Microondas", "Pava eléctrica"] },
        { titulo: "Ropa blanca", items: ["Sábanas y toallas", "Acolchados abrigados en invierno y de verano", "Si necesitan más, nos piden."] },
        { titulo: "Baño", items: ["Secador de pelo", "Artículos de higiene"] },
        { titulo: "TV smart", items: ["Cada uno entra con su propia cuenta."] },
        { titulo: "Exterior", items: ["Mesa de jardín", "Estacionamiento dentro del parque cerrado"] },
        { titulo: "Chulengo", items: ["En verano casi nunca se permite hacer fuego."], enlace: "splif", etiqueta: "Ver aviso oficial" },
        { titulo: "Limpieza", items: ["Productos de limpieza disponibles."] },
      ],
    },
    servicios: [
      { titulo: "Colectivo", items: ["La Golondrina (línea El Bolsón – Lago Puelo) pasa frente a la casa; sirve también para ir al lago."], enlace: "golondrinaHorarios", etiqueta: "Horarios y líneas (turismo El Bolsón)" },
      { titulo: "Estaciones de servicio", items: [
        { texto: "Lago Puelo: YPF de Av. Los Notros y Ruta 16, la única del pueblo.", maps: maps("YPF, Av. Los Notros y Ruta 16, Lago Puelo") },
        { texto: "El Bolsón: ACA, Av. San Martín.", maps: maps("YPF Full ACA El Bolsón, Av. San Martín, El Bolsón") },
        { texto: "El Bolsón: Puma, Av. Belgrano y Perito Moreno.", maps: maps("Puma Energy, Av. Belgrano y Perito Moreno, El Bolsón") },
        { texto: "El Bolsón: a la salida hacia Bariloche.", maps: maps("YPF, Ruta 258 y Rodríguez Peña, El Bolsón") },
        { texto: "El Bolsón: Balcarce y San Martín.", maps: maps("Estación de servicio, Balcarce y San Martín, El Bolsón") },
        "También hay estaciones de servicio en El Hoyo, Epuyén y Cholila.",
      ] },
      { titulo: "Cajeros", items: [
        { texto: "Lago Puelo: Banco del Chubut – Av. 2 de Abril", maps: maps("Banco del Chubut, Av. 2 de Abril, Lago Puelo") },
        { texto: "El Bolsón: Banco Nación – San Martín 2598", maps: maps("Banco Nación, San Martín 2598, El Bolsón") },
        { texto: "El Bolsón: Banco Patagonia – San Martín 2831", maps: maps("Banco Patagonia, San Martín 2831, El Bolsón") },
        { texto: "El Hoyo: Banco del Chubut – Islas Malvinas 410", maps: maps("Banco del Chubut, Islas Malvinas 410, El Hoyo, Chubut") },
      ] },
    ],
  },
};
