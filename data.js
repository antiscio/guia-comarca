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

const INFO_TURISTICA = [
  {
    nombre: "Centro de Informes Turísticos",
    texto: "Av. Belgrano y Pastorino (entrada sur, Ruta 40).",
    tel: "+54 294 4498008",
    email: "turismo@elbolson.gov.ar",
    maps: maps("Centro de Informes Turísticos, Av. Belgrano y Pastorino, El Bolsón"),
  },
  {
    nombre: "Informes de Montaña",
    texto: "Mario J. Guasco y Perito Moreno, junto a la plaza. De 8 a 20 h.",
    whatsapp: "+54 9 294 4929496",
    maps: maps("Informes de Montaña, Mario J. Guasco y Perito Moreno, El Bolsón"),
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

// Paseos compartidos. Las distancias son las del contenido (desde el centro de El Bolsón cuando así figura).
const PASEOS = [
  {
    nombre: "Cerro Amigo", lugar: "El Bolsón",
    puntos: ["Miradores al valle; caminata corta y fácil.", "La entrada vale por una semana.", "Abierto todo el año."],
    maps: maps("Cerro Amigo, El Bolsón"),
  },
  {
    nombre: "Cerro Piltriquitrón: Plataforma, Bosque Tallado y Refugio", lugar: "El Bolsón",
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
    nombre: "Wharton – La Confluencia – Refugios del ANPRALE", lugar: "Mallín Ahogado",
    puntos: [
      "Chacra Wharton, en Mallín Ahogado, a 16–17 km del centro. Antes de bajar hay cervecerías y pizza (por ejemplo, Campo Base).",
      "Bajada de ~40 min a La Confluencia (ríos Azul y Encanto Blanco), con camping.",
      "Cruzando la primera pasarela, la hostería La Confluencia, para comer o tomar un té.",
      "Desde ahí, el Cajón del Azul y los refugios del ANPRALE (~13 interconectados).",
      "Registro obligatorio antes de subir: en anprale.com o en Informes de Montaña.",
    ],
    enlaces: [{ etiqueta: "anprale.com", url: "https://anprale.com" }],
    maps: maps("Chacra Wharton, Mallín Ahogado, El Bolsón"),
  },
  {
    nombre: "Cascada Escondida y Jardín Botánico", lugar: "Mallín Ahogado",
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
    nombre: "Bodega Adamow", lugar: "Cerro Radal, Lago Puelo",
    puntos: ["Bodega boutique familiar, a 10 min del centro de Lago Puelo.", "Pinot Noir y Sauvignon Blanc; visitas y degustación."],
    maps: maps("Bodega Adamow, Lago Puelo"),
  },
  {
    nombre: "Parque Nacional Lago Puelo", lugar: "Lago Puelo",
    puntos: [
      "Navegación: Náutica Puelo (~3 h, hasta 5 pasajeros; traslados a El Turbio).",
      "La Playita por el Sendero del Pitranto Grande (~1 km), y un sendero corto al Mirador de La Playita.",
    ],
    maps: maps("Parque Nacional Lago Puelo"),
  },
  {
    nombre: "Mirador de los Saltos del Motoco", lugar: "Río Azul",
    puntos: [
      "Desde la pasarela del río Azul; ~5 km ida y vuelta (~1 h 30), con la Cascada Cárdenas en el camino.",
      "En el camping junto al río Blanco se puede tomar algo.",
    ],
    maps: maps("Saltos del Motoco"),
  },
  {
    nombre: "Laberinto Patagonia", lugar: "El Hoyo",
    puntos: ["Camino a El Desemboque km 3,7.", "~8000 m² y 2,2 km de sendero. Confitería, restaurante, helados, sidra de hielo."],
    maps: maps("Laberinto Patagonia, El Hoyo"),
  },
  {
    nombre: "El Desemboque", lugar: "El Hoyo",
    puntos: ["Donde el río Epuyén desemboca en el lago Puelo. Se cobra entrada.", "Hay un pitranto muy antiguo."],
    maps: maps("El Desemboque, El Hoyo, Chubut"),
  },
  {
    nombre: "Puerto Patriada", lugar: "Lago Epuyén",
    puntos: ["De los lugares más lindos de la Comarca.", "Agua tranquila, ideal para SUP y kayak. Camping, proveeduría y restaurante."],
    maps: maps("Puerto Patriada, Lago Epuyén"),
  },
  {
    nombre: "Cascada Corbata Blanca", lugar: "El Hoyo",
    puntos: ["Estacionamiento pago.", "Sendero de ~35 min entre cipreses y coihues."],
    maps: maps("Cascada Corbata Blanca, El Hoyo"),
  },
  {
    nombre: "Estupa budista de Epuyén", lugar: "Epuyén",
    puntos: ["Antes de entrar a Epuyén desde El Hoyo, del lado este de la Ruta 40, señalizada.", "Libre y gratuita."],
    maps: maps("Estupa budista, Epuyén"),
  },
  {
    nombre: "Centro Cultural Antú Quillén", lugar: "Lago Epuyén",
    puntos: ["En Puerto Bonito.", "Artesanías, galería, talleres, espectáculos y buffet."],
    maps: maps("Centro Cultural Antú Quillén, Puerto Bonito, Epuyén"),
  },
];

const ACTIVIDADES = [
  { nombre: "Rafting", texto: "En el río Azul." },
  { nombre: "Parapente", texto: "En la plataforma del Piltriquitrón." },
  { nombre: "Cabalgatas", texto: "" },
  { nombre: "Kayak y SUP", texto: "Kayak en los lagos y SUP en el lago Epuyén." },
  { nombre: "Trekking con guía", texto: "Con guías habilitados de turismo. La lista se consulta en la oficina de informes.", tel: "+54 294 4498008", etiqueta: "Informes" },
  { nombre: "Alquiler de bicicletas", texto: "" },
  {
    nombre: "Tirolesa", texto: "",
    lugares: [
      { nombre: "Parque Aéreo Kona (Las Golondrinas)", maps: maps("Parque Aéreo Kona, Las Golondrinas") },
      { nombre: "Patagonia Canopy Tour (Mallín)", maps: maps("Patagonia Canopy Tour, El Bolsón") },
    ],
  },
];

const INVIERNO = [
  { nombre: "Cerro Perito Moreno", texto: "Esquí, trineo, raquetas, aerosilla y el Refugio Albrecht Rudolph.", maps: maps("Cerro Perito Moreno, El Bolsón") },
  { nombre: "Transfer de invierno", texto: "La Golondrina, desde Plaza Pagano.", maps: maps("Plaza Pagano, El Bolsón") },
  { nombre: "Piltriquitrón", texto: "El refugio y el Bosque Tallado siguen abiertos aun con nieve: consulten el estado de los caminos antes de subir." },
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

const ALOJAMIENTOS = {
  casis: {
    id: "casis",
    nombre: "Casis",
    tipo: "Departamento en El Bolsón",
    logo: "../img/logo-casis.svg",   // provisorio
    localidad: "El Bolsón",
    mapsUrl: "",      // PENDIENTE: enlace de Google Maps a la puerta exacta
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
        "ACA, a 100 m, y enfrente una Puma.",
        "En El Bolsón hay cuatro: ACA y Puma cerca del depto, una a la salida hacia Bariloche y otra en Balcarce y San Martín.",
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
    mapsUrl: "",   // PENDIENTE: enlace de Google Maps a la casa
    fotoFachada: "",
    instagram: "kalimera.casadehuespedes",
    booking: "https://www.booking.com/hotel/ar/kalimera-casa-de-huespedes.es.html",
    wifi: { red: "Agathos", clave: "Telperion" },
    reglamento: [
      "No se fuma adentro. En el parque se puede fumar, sin tirar colillas.",
      "Por respeto a los vecinos, les pedimos bajar el volumen después de las 22 h.",
      "No se aceptan mascotas.",
    ],
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
      { titulo: "Estación de servicio", items: [
        { texto: "YPF de Av. Los Notros y Ruta 16, la única de Lago Puelo.", maps: maps("YPF, Av. Los Notros y Ruta 16, Lago Puelo") },
        "También hay estaciones de servicio en El Hoyo y en Epuyén.",
      ] },
      { titulo: "Cajero", items: [
        { texto: "Banco del Chubut – Av. 2 de Abril", maps: maps("Banco del Chubut, Av. 2 de Abril, Lago Puelo") },
      ] },
    ],
  },
};
