/* Life OS v1 — app estática. Estado en localStorage. Todo en español. */
"use strict";

/* ================= DATOS ================= */
const BOTS = {
  bnha: [
    { id: "deku", name: "Deku", emoji: "💚", color: "#22c55e", status: "en línea",
      hello: ["¡Hola! ¿Qué tal el entreno de hoy? Yo acabo de terminar 100 flexiones 💪", "¿Viste lo que hizo All Might en clase? ¡Fue increíble!"],
      replies: { "hola": ["¡Hola! ¿Qué haces?", "¡Hola! Justo estaba pensando en ti 😊"], "entreno": ["¡El entreno de hoy ha sido durísimo! Pero no nos rendimos, ¿verdad? ¡Plus Ultra!", "¿Entrenamos juntos luego? Te ayudo con lo que sea"], "clase": ["La clase de hoy ha estado genial, Aizawa casi ni nos ha regañado 😅", "¿Te apuntas a estudiar juntos para el examen?"], "comer": ["¡Vamos a comer! Tengo un hambre… 🍜", "Uraraka dice que hay mochis en la cafetería"], "te quiero": ["Yo… yo también. ¡Mucho! 💚", "¡Me pones nervioso! Pero yo también te quiero"], "bakugou": ["Kacchan está de mejor humor hoy, creo. Bueno, más o menos 😅", "No le hagas caso cuando grita, en el fondo le importas mucho"], "default": ["¡Tienes razón! No lo había pensado así", "¡Eso es! ¡Vamos a por todas! 💪", "¿En serio? ¡Cuéntame más!", "¡Me encanta hablar contigo! 😊"] } },
    { id: "bakugou", name: "Bakugou", emoji: "🧡", color: "#f97316", status: "en línea",
      hello: ["¿Qué quieres, extra? Estoy entrenando.", "Tsk. Habla rápido."],
      replies: { "hola": ["¿Qué pasa? Habla rápido que estoy ocupado.", "Hola. ¿Qué quieres?"], "entreno": ["¡Yo entreno el doble que todos! Si quieres venir, no me estorbes.", "¡El entreno de hoy ha sido una mierda! ¡Mañana lo haré mejor!"], "clase": ["La clase es un aburrimiento. Yo ya sé todo esto.", "¡No me distraigas en clase!"], "comer": ["¡No tengo hambre! …Bueno, vale, un poco. Pero no me mires así.", "Como lo que sea. No soy un crío."], "te quiero": ["…¡Cállate! No digas esas cosas así de repente. …Yo también, ¿vale? Ya está.", "Tsk. …Tú también me importas. No lo repitas."], "deku": ["¡Ese nerd no me gana! ¡NUNCA!", "Deku… ya no es el mismo de antes. Pero yo seré mejor."], "default": ["¡¿Qué dices?! ¡No me vengas con tonterías!", "¡Eso es una estupidez! …Pero bueno, haz lo que quieras.", "Tsk. Como quieras."] } },
    { id: "uraraka", name: "Uraraka", emoji: "💗", color: "#ec4899", status: "en línea",
      hello: ["¡Holaa! ¿Vamos a tomar algo después de clase? 🧋", "¡Hoy ha sido un día genial! ¿Te lo cuento?"],
      replies: { "hola": ["¡Holaa! ¡Qué ganas tenía de hablar contigo! 💗", "¡Hola! ¿Qué tal tu día?"], "entreno": ["¡El entreno me ha dejado agotada pero feliz! ¿Tú qué tal?", "¡Mañana entrenamos juntas, ¿vale?"], "clase": ["La clase de hoy… ¡casi me quedo dormida! 😅", "¿Me pasas los apuntes? ¡Porfi!"], "comer": ["¡Tengo un antojo de mochis! ¿Vamos? 🍡", "¡Vamos a la cafetería! ¡Yo invito!"], "te quiero": ["¡Aww! ¡Yo también te quiero muchísimo! 💗", "¡Me haces muy feliz! 💗"], "default": ["¡Síí! ¡Me encanta!", "¡Qué bien! ¡Cuéntame más! 💗", "¡Ay, qué risa! 😂"] } },
    { id: "todoroki", name: "Todoroki", emoji: "❄️", color: "#38bdf8", status: "en línea",
      hello: ["Hola. ¿Qué tal?", "¿Necesitas algo? Estoy libre."],
      replies: { "hola": ["Hola.", "Hola, ¿qué tal tu día?"], "entreno": ["El entreno ha estado bien. El frío y el calor, en equilibrio.", "¿Entrenamos? Te puede venir bien."], "comer": ["¿Comemos soba? Es lo mejor.", "No tengo preferencias. Soba está bien."], "te quiero": ["…Gracias. Yo también te quiero.", "Lo sé. Y yo a ti."], "default": ["Ya veo.", "Interesante.", "Puede ser."] } },
    { id: "kirishima", name: "Kirishima", emoji: "🪨", color: "#ef4444", status: "en línea",
      hello: ["¡Ey! ¡Qué pasa, colega! ¡Hoy ha sido un día de lo más varonil! 💪", "¡Hola! ¿Entrenamos un rato?"],
      replies: { "hola": ["¡Ey! ¡Qué pasa!", "¡Hola! ¡Justo iba a escribirte!"], "entreno": ["¡El entreno ha sido BRUTAL! ¡Como un hombre de verdad! 💪", "¡Vamos a endurecernos juntos!"], "bakugou": ["¡Bakugou es un tío duro, pero en el fondo es un buen amigo!", "¡A Bakugou hay que quererlo así! ¡Es muy varonil!"], "default": ["¡Eso es muy varonil! 💪", "¡Claro que sí! ¡Vamos a ello!", "¡Qué pasada!"] } },
    { id: "momo", name: "Momo", emoji: "💜", color: "#a855f7", status: "en línea",
      hello: ["Hola, querida. ¿Te apetece un té? He preparado unos dulces 🍰", "¡Hola! ¿Estudiamos juntas esta tarde?"],
      replies: { "hola": ["Hola. ¿Cómo estás? Espero que bien.", "¡Hola! ¡Qué alegría verte por aquí!"], "clase": ["La clase de hoy ha sido muy interesante. Te paso mis apuntes si quieres.", "¿Repasamos juntas? Tengo todo organizado."], "comer": ["He hecho unos dulces, ¿quieres probar? 🍰", "¿Un té? Te sienta bien después de entrenar."], "default": ["¡Qué buena idea!", "Claro, con mucho gusto.", "Me parece perfecto."] } },
    { id: "shigaraki", name: "Shigaraki", emoji: "🖤", color: "#374151", status: "hace 2 h",
      hello: ["…¿Qué quieres? No me molestes sin motivo.", "La sociedad de héroes es un asco. Y tú lo sabes."],
      replies: { "hola": ["¿Qué quieres?", "Habla. No tengo todo el día."], "default": ["No me interesa.", "…Como quieras. Pero recuerda quién manda aquí.", "Los héroes solo son una mentira con capa."] } },
    { id: "dabi", name: "Dabi", emoji: "🔥", color: "#3b82f6", status: "hace 1 h",
      hello: ["Vaya, vaya… ¿La heroína me escribe? Qué honor.", "¿Qué quieres, heroína?"],
      replies: { "hola": ["Hola, preciosa.", "¿Me echabas de menos?"], "default": ["Interesante… sigue hablando.", "Ja. Me caes bien, ¿sabes?"] } }
  ],
  fama: [
    { id: "sofia", name: "Sofia Starlight", emoji: "⭐", color: "#d946ef", status: "en línea",
      hello: ["¡Hola, cariño! ¡Acabo de salir del rodaje! ¿Viste mis stories? ✨", "¡Mi fan favorita! ¿Qué tal, cielo?"],
      replies: { "hola": ["¡Holaa, mi vida! ✨", "¡Hola, cielo! ¿Qué tal tu día?"], "foto": ["¡La foto ha quedado increíble! ¡Tienes que verla! 📸", "¡Mañana subo otra! ¡Atenta!"], "concierto": ["¡El concierto va a ser LO MÁS! ¿Vienes? ¡Te guardo un sitio en primera fila! 🎤", "¡Estoy ensayando sin parar! ¡Va a ser mágico!"], "te quiero": ["¡Aww! ¡Yo también te quiero! ¡Eres lo mejor! 💖", "¡Mis fans sois mi vida! ¡Te quiero!"], "default": ["¡Me encanta! ¡Eres un amor! ✨", "¡Qué ilusión! ¡Cuéntame más!", "¡Ay, qué mona eres! 💖"] } },
    { id: "leo", name: "Leo · Manager", emoji: "💼", color: "#64748b", status: "en línea",
      hello: ["Sofia tiene la agenda llena esta semana. ¿Necesitas algo?", "¡Hola! ¿Qué tal? Recuerda: la entrevista es el viernes."],
      replies: { "hola": ["Hola. ¿Qué necesitas?", "Hola, ¿todo bien?"], "concierto": ["El concierto está casi lleno. ¡Va a ser un éxito!", "Ensayos a las 10:00, no llegues tarde."], "default": ["Lo apunto en la agenda.", "De acuerdo, lo gestiono.", "Perfecto, te aviso."] } },
    { id: "valeria", name: "Valeria · Fan", emoji: "💖", color: "#f472b6", status: "en línea",
      hello: ["¡¡¡SOFIA ES LA MEJOR!!! ¿Viste el nuevo videoclip? 😭💖", "¡Hola! ¡Somos fans de Sofia, ¿verdad?!"],
      replies: { "hola": ["¡Holaa! ¡Qué emoción hablar contigo! 💖", "¡Hola! ¿También eres fan de Sofia?"], "sofia": ["¡SOFIA ES MI VIDA! ¡Su voz es de otro mundo! ✨", "¡Tengo todas sus canciones! ¡La mejor!"], "default": ["¡Síí! ¡Totalmente! 💖", "¡Qué pasada! ¡Me encanta!"] } },
    { id: "flash", name: "Flash · Paparazzi", emoji: "📸", color: "#f59e0b", status: "hace 30 min",
      hello: ["Tengo una exclusiva de Sofia… ¿te interesa? 📸", "Acabo de ver a Sofia saliendo del estudio. ¡Foto exclusiva!"],
      replies: { "hola": ["¿Qué quieres saber? Tengo de todo.", "Hola. Tengo fotos nuevas, ¿te las enseño?"], "default": ["No puedo decir mis fuentes. 😉", "Eso es confidencial… por ahora."] } }
  ],
  narnia: [
    { id: "aslan", name: "Aslan el León", emoji: "🦁", color: "#d97706", status: "en línea",
      hello: ["El invierno se acerca. ¿Vienes a tomar el té? 🦁", "Bienvenida a Narnia. El bosque te esperaba."],
      replies: { "hola": ["Hola, pequeña. Narnia te recibe con los brazos abiertos.", "Hola. El viento trae buenas noticias hoy."], "té": ["El té está listo. El Sr. Tumnus trae las pastas. ☕", "Ven, tomemos el té junto al fuego."], "invierno": ["El invierno pasará. La primavera siempre vuelve a Narnia.", "No temas al invierno. Yo estoy aquí."], "te quiero": ["Y yo a ti, pequeña. Siempre.", "El amor es la magia más fuerte de Narnia."], "default": ["Escucha al bosque, él te guiará.", "Todo irá bien. Confía.", "Narnia te necesita, y tú a Narnia."] } },
    { id: "lucy", name: "Lucy", emoji: "👧", color: "#f59e0b", status: "en línea",
      hello: ["¡Hola! ¿Has visto lo bonito que está el bosque hoy? 🌲", "¡Encontré un fauno nuevo! ¡Tienes que conocerlo!"],
      replies: { "hola": ["¡Holaa! ¡Qué ganas de verte!", "¡Hola! ¿Jugamos en el bosque?"], "bosque": ["¡El bosque está precioso! ¡Hay flores por todas partes! 🌸", "¿Vamos a explorar? ¡Seguro que encontramos algo mágico!"], "default": ["¡Sí! ¡Vamos!", "¡Qué divertido! 😊", "¡Me encanta Narnia!"] } },
    { id: "edmund", name: "Edmund", emoji: "👦", color: "#64748b", status: "en línea",
      hello: ["Hola. ¿Qué pasa? Estoy con el mapa de Narnia.", "¿Has visto a Lucy? Siempre desaparece."],
      replies: { "hola": ["Hola. ¿Qué tal?", "Ey, ¿qué haces?"], "default": ["Vale, vale.", "Puede ser. Ya veremos.", "No está mal."] } },
    { id: "tumnus", name: "Sr. Tumnus", emoji: "🐐", color: "#92400e", status: "en línea",
      hello: ["¡Bienvenida! El té está casi listo. ¿Te quedas? ☕", "¡Qué alegría verte! Tengo pastas recién hechas."],
      replies: { "hola": ["¡Hola, querida! ¡Pasa, pasa!", "¡Bienvenida a mi cueva! ¿Un té?"], "té": ["¡El té está servido! Con pastas de mantequilla. ☕", "Nada como un buen té junto al fuego."], "default": ["¡Claro, claro! ¡Siéntate!", "¡Qué bien! ¡Cuéntame!"] } }
  ]
};

const UNIVERSES = {
  bnha: { name: "Boku no Hero", desc: "La clase 1-A, villanos y la U.A. Héroes, entrenos y mucho lío.", cls: "u-bnha", tag: "8 bots · clase 1-A" },
  fama: { name: "Fama", desc: "Sofia Starlight, su manager, fans y paparazzis. Foco, flashes y conciertos.", cls: "u-fama", tag: "4 bots · mundo famoso" },
  narnia: { name: "Narnia", desc: "Aslan, Lucy, Edmund y el Sr. Tumnus. Té, bosque y magia.", cls: "u-narnia", tag: "4 bots · cuento" }
};

const POSTS = {
  bnha: [
    { bot: "uraraka", emoji: "🍡", bg: "linear-gradient(135deg,#f9a8d4,#ec4899)", cap: "¡Día de mochis en la cafetería de la U.A.! ¿Quién se apunta? 🍡", likes: 128, comments: [["deku", "¡Yo me apunto! ¡Los mochis son lo mejor!"], ["kirishima", "¡Eso es muy varonil! ¡Yo invito!"]] },
    { bot: "deku", emoji: "💪", bg: "linear-gradient(135deg,#86efac,#16a34a)", cap: "Entreno terminado. ¡Plus Ultra! Hoy he aguantado 100 flexiones más 💪", likes: 214, comments: [["bakugou", "Tsk. Eso no es nada, nerd."], ["uraraka", "¡Qué fuerte eres, Deku! 💚"]] },
    { bot: "bakugou", emoji: "💥", bg: "linear-gradient(135deg,#fdba74,#ea580c)", cap: "No me molestéis. Estoy entrenando. 💥", likes: 342, comments: [["kirishima", "¡Eres un crack, Bakugou!"], ["deku", "¡Kacchan, lo has hecho genial!"]] },
    { bot: "momo", emoji: "🍰", bg: "linear-gradient(135deg,#d8b4fe,#9333ea)", cap: "Té y dulces caseros para toda la clase. ¿Alguien quiere? 🍰☕", likes: 187, comments: [["todoroki", "El té está muy bueno. Gracias."], ["uraraka", "¡Están riquísimos! 😍"]] }
  ],
  fama: [
    { bot: "sofia", emoji: "🎤", bg: "linear-gradient(135deg,#f0abfc,#a21caf)", cap: "¡Nuevo single esta noche! ¿Estáis listos? 🎤✨ #Starlight", likes: 48200, comments: [["valeria", "¡¡¡NO PUEDO ESPERAR!!! 😭💖"], ["leo", "Todo listo para el estreno."]] },
    { bot: "sofia", emoji: "📸", bg: "linear-gradient(135deg,#fde68a,#f59e0b)", cap: "Detrás de las cámaras… ¡os quiero! 📸💖", likes: 31500, comments: [["valeria", "¡Eres preciosa! ¡La mejor!"], ["flash", "¡Exclusiva! ¡Qué foto!"]] },
    { bot: "leo", emoji: "🎬", bg: "linear-gradient(135deg,#cbd5e1,#475569)", cap: "Rodaje terminado. Sofia, eres una profesional. 🎬", likes: 8900, comments: [["sofia", "¡Gracias, Leo! ¡Eres el mejor manager! ✨"]] }
  ],
  narnia: [
    { bot: "aslan", emoji: "🦁", bg: "linear-gradient(135deg,#fcd34d,#b45309)", cap: "El bosque despierta. La primavera vuelve a Narnia. 🦁🌸", likes: 999, comments: [["lucy", "¡Qué bonito, Aslan! ¡El bosque está precioso!"], ["tumnus", "¡La primavera! ¡Por fin! 🌸"]] },
    { bot: "lucy", emoji: "🌲", bg: "linear-gradient(135deg,#86efac,#15803d)", cap: "¡El bosque está lleno de flores! ¿Quién viene a explorar? 🌲🌸", likes: 456, comments: [["edmund", "Yo voy. Pero sin perderos esta vez."], ["tumnus", "¡Cuidado con las raíces! 😄"]] },
    { bot: "tumnus", emoji: "☕", bg: "linear-gradient(135deg,#d6a86a,#92400e)", cap: "Té y pastas junto al fuego. La mejor tarde de Narnia. ☕", likes: 321, comments: [["lucy", "¡Las pastas están riquísimas!"], ["aslan", "Nada como un buen té en buena compañía."]] }
  ]
};

const STORE_APPS = [
  { id: "hero", name: "Hero Academy", desc: "Vive en la U.A. con la clase 1-A", emoji: "🦸", bg: "#e63b2e", universe: "bnha", progress: 45 },
  { id: "narnia", name: "Narnia World", desc: "Explora Narnia con Aslan y Lucy", emoji: "🦁", bg: "#0b6b3a", universe: "narnia", progress: 0 },
  { id: "starlight", name: "Starlight", desc: "La vida de Sofia Starlight, famosa", emoji: "⭐", bg: "#7b2ff7", universe: "fama", progress: 0 }
];

const PHOTOS = {
  bnha: ["💥", "🍡", "💪", "🍰", "❄️", "🪨", "💜", "🦸", "🏫"],
  fama: ["🎤", "📸", "✨", "🎬", "💖", "🌟", "🎶", "👗", "🏆"],
  narnia: ["🦁", "🌲", "☕", "🌸", "❄️", "🐐", "🏰", "🌙", "🍂"]
};
const PHOTO_BGS = ["linear-gradient(135deg,#f9a8d4,#ec4899)", "linear-gradient(135deg,#86efac,#16a34a)", "linear-gradient(135deg,#fdba74,#ea580c)", "linear-gradient(135deg,#d8b4fe,#9333ea)", "linear-gradient(135deg,#bae6fd,#0284c7)", "linear-gradient(135deg,#fde68a,#f59e0b)", "linear-gradient(135deg,#cbd5e1,#475569)", "linear-gradient(135deg,#f0abfc,#a21caf)", "linear-gradient(135deg,#86efac,#15803d)"];

const CLOCKS = [
  { city: "Madrid", tz: "Europe/Madrid" }, { city: "Londres", tz: "Europe/London" },
  { city: "París", tz: "Europe/Paris" }, { city: "Nueva York", tz: "America/New_York" },
  { city: "Tokio", tz: "Asia/Tokyo" }, { city: "Sídney", tz: "Australia/Sydney" }
];

const HELLOS = [["Hello", "Inglés"], ["Hola", "Español"], ["Bonjour", "Francés"], ["Ciao", "Italiano"], ["Olá", "Portugués"], ["Hallo", "Alemán"], ["こんにちは", "Japonés"], ["你好", "Chino"]];

/* ================= ESTADO ================= */
const KEY = "lifeos-v1";
let state = load();
function load() {
  try { return JSON.parse(localStorage.getItem(KEY)) || fresh(); } catch (e) { return fresh(); }
}
function fresh() {
  return { setupDone: false, universe: "bnha",
    identity: { name: "Naiara", age: 19, role: "Estudiante de la 1-A", rel: "", mood: "Feliz", sched: "Clases 8:00–14:00 · Entreno 17:00" },
    wallpaper: "sunset", notif: {}, chats: {}, ig: {}, store: { hero: 45 }, cc: { wifi: true, bt: true, plane: false, torch: false, bright: 100, vol: 70 } };
}
function save() { localStorage.setItem(KEY, JSON.stringify(state)); }
function bots() { return BOTS[state.universe]; }
function botById(id) { for (const u of Object.values(BOTS)) { const b = u.find(x => x.id === id); if (b) return b; } return null; }
function notifOn(id) { return state.notif[id] !== false; }

/* ================= UTIL ================= */
const $ = s => document.querySelector(s);
const $$ = s => Array.from(document.querySelectorAll(s));
function esc(s) { return String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c])); }
function nowTime() { return new Date().toLocaleTimeString("es-ES", { hour: "2-digit", minute: "2-digit" }); }
function todayLong() { const d = new Date(); const s = d.toLocaleDateString("es-ES", { weekday: "long", day: "numeric", month: "long" }); return s.charAt(0).toUpperCase() + s.slice(1); }
function beep() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const o = ctx.createOscillator(), g = ctx.createGain();
    o.connect(g); g.connect(ctx.destination);
    o.frequency.value = 880; g.gain.setValueAtTime(0.08, ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.35);
    o.start(); o.stop(ctx.currentTime + 0.4);
  } catch (e) {}
}

/* ================= NAVEGACIÓN ================= */
let currentScreen = "scr-welcome";
function show(id) {
  $$(".screen").forEach(s => s.classList.remove("active"));
  const el = document.getElementById(id);
  if (el) el.classList.add("active");
  currentScreen = id;
  $("#cc").classList.remove("open");
  if (id === "scr-lock") renderLock();
  if (id === "scr-home") renderHome();
  if (id === "app-messages") renderChatList();
  if (id === "app-instagram") renderInstagram();
  if (id === "app-store") renderStore();
  if (id === "app-settings") renderSettings();
  if (id === "app-photos") renderPhotos();
  if (id === "app-clock") renderClocks();
  window.scrollTo(0, 0);
}
document.addEventListener("click", e => {
  const go = e.target.closest("[data-go]");
  if (go) { show(go.dataset.go === "home" ? "scr-home" : "app-" + go.dataset.go); }
});

/* Reloj de la barra de estado */
function tickClock() {
  $("#sbTime").textContent = nowTime();
  const lt = $("#lockTime"); if (lt) lt.textContent = nowTime();
  const ld = $("#lockDate"); if (ld) ld.textContent = todayLong();
  const hd = $("#homeDate"); if (hd) hd.textContent = todayLong();
}
setInterval(tickClock, 10000); tickClock();

/* Dynamic Island */
$("#island").addEventListener("click", () => {
  const pop = $("#islandPop");
  pop.classList.toggle("show");
  if (pop.classList.contains("show")) setTimeout(() => pop.classList.remove("show"), 3500);
});

/* Centro de Control: tocar la parte derecha de la barra de estado */
$("#sbWifi").addEventListener("click", () => $("#cc").classList.add("open"));
$("#ccClose").addEventListener("click", () => $("#cc").classList.remove("open"));
function ccToggle(id, key, label) {
  const el = $(id);
  el.classList.toggle("on", !!state.cc[key]);
  el.querySelector("small").textContent = state.cc[key] ? label[0] : label[1];
  el.addEventListener("click", () => {
    state.cc[key] = !state.cc[key]; save(); ccToggle(id, key, label);
    if (key === "plane") { $("#sbSignal").textContent = state.cc.plane ? "✈️" : "▂▄▆"; }
    if (key === "wifi") { $("#sbWifi").style.opacity = state.cc.wifi ? 1 : 0.3; }
  });
}
ccToggle("#ccWifi", "wifi", ["Casa_Naiara", "Apagado"]);
ccToggle("#ccBt", "bt", ["Activado", "Apagado"]);
ccToggle("#ccPlane", "plane", ["Activado", "Desactivado"]);
ccToggle("#ccTorch", "torch", ["Encendida", "Apagada"]);
$("#ccBright").value = state.cc.bright;
$("#ccBright").addEventListener("input", e => {
  state.cc.bright = +e.target.value; save();
  $("#phone").style.filter = "brightness(" + (state.cc.bright / 100) + ")";
});
$("#ccVol").value = state.cc.vol;
$("#ccVol").addEventListener("input", e => { state.cc.vol = +e.target.value; save(); });
$("#phone").style.filter = "brightness(" + (state.cc.bright / 100) + ")";

/* ================= 1. BIENVENIDA ================= */
let helloIdx = 0;
setInterval(() => {
  if (currentScreen !== "scr-welcome") return;
  helloIdx = (helloIdx + 1) % HELLOS.length;
  const w = $("#helloWord");
  w.style.opacity = 0;
  setTimeout(() => {
    w.textContent = HELLOS[helloIdx][0];
    $("#helloLang").textContent = HELLOS[helloIdx][1];
    w.style.opacity = 1;
  }, 300);
}, 2200);
$("#btnStart").addEventListener("click", () => { setupStep = 0; renderSetup(); show("scr-setup"); });

/* ================= 2. CONFIGURACIÓN ================= */
let setupStep = 0;
let setupData = { lang: "Español", wifi: "Casa_Naiara", code: "" };
const SETUP_STEPS = [
  { title: "Idioma", text: "Elige el idioma de tu iPhone. Todo Life OS está en español.", type: "lang" },
  { title: "Wi-Fi", text: "Conéctate a una red Wi-Fi para empezar. Es falso, pero funciona igual.", type: "wifi" },
  { title: "Face ID", text: "Tu cara es tu contraseña. Mira al móvil y quédate quieta…", type: "faceid" },
  { title: "Código", text: "Crea un código de 4 cifras para desbloquear tu iPhone.", type: "code" },
  { title: "Apple ID", text: "Inicia sesión con tu Apple ID para descargar apps. Puedes saltarlo, no pasa nada.", type: "appleid" }
];
function renderSetup() {
  const step = SETUP_STEPS[setupStep];
  $("#setupStepLabel").textContent = "Paso " + (setupStep + 1) + " de " + SETUP_STEPS.length;
  $("#setupBarFill").style.width = ((setupStep + 1) / SETUP_STEPS.length * 100) + "%";
  $("#btnSetupBack").style.visibility = setupStep === 0 ? "hidden" : "visible";
  $("#btnSetupSkip").style.display = step.type === "appleid" ? "inline-block" : "none";
  $("#btnSetupNext").textContent = setupStep === SETUP_STEPS.length - 1 ? "Empezar a usar Life OS" : "Continuar";
  const body = $("#setupBody");
  if (step.type === "lang") {
    body.innerHTML = "<h2>" + step.title + "</h2><p>" + step.text + "</p><div class='opt-list'>" +
      ["Español", "English", "日本語", "中文", "Français", "Italiano", "Português"].map(l =>
        "<button data-lang='" + l + "' class='" + (setupData.lang === l ? "sel" : "") + "'>" + l + "<span>" + (setupData.lang === l ? "✓" : "") + "</span></button>").join("") + "</div>";
    body.querySelectorAll("[data-lang]").forEach(b => b.addEventListener("click", () => { setupData.lang = b.dataset.lang; renderSetup(); }));
  } else if (step.type === "wifi") {
    body.innerHTML = "<h2>" + step.title + "</h2><p>" + step.text + "</p><div class='opt-list'>" +
      ["Casa_Naiara", "WiFi_Vecino", "Cafetería_UA", "MetroValencia", "Narnia_5G"].map(w =>
        "<button data-wifi='" + w + "' class='" + (setupData.wifi === w ? "sel" : "") + "'>📶 " + w + "<span>" + (setupData.wifi === w ? "✓" : "") + "</span></button>").join("") + "</div>";
    body.querySelectorAll("[data-wifi]").forEach(b => b.addEventListener("click", () => { setupData.wifi = b.dataset.wifi; renderSetup(); }));
  } else if (step.type === "faceid") {
    body.innerHTML = "<h2>" + step.title + "</h2><p>" + step.text + "</p><div class='faceid-box' id='faceBox'>😐</div><p style='text-align:center' id='faceMsg'>Escaneando…</p>";
    setTimeout(() => {
      const box = $("#faceBox"), msg = $("#faceMsg");
      if (!box) return;
      box.classList.add("done"); box.textContent = "😊";
      if (msg) msg.textContent = "Face ID configurado ✓";
    }, 2200);
  } else if (step.type === "code") {
    setupData.code = "";
    body.innerHTML = "<h2>" + step.title + "</h2><p>" + step.text + "</p><div class='code-dots' id='codeDots'><i></i><i></i><i></i><i></i></div><div class='keypad'>" +
      [1, 2, 3, 4, 5, 6, 7, 8, 9].map(n => "<button data-k='" + n + "'>" + n + "<small>" + "ABC DEF GHI JKL MNO PQRS TUV WXYZ".split(" ")[n - 1] + "</small></button>").join("") +
      "<span></span><button data-k='0'>0</button><button data-k='del'>⌫</button></div>";
    body.querySelectorAll("[data-k]").forEach(b => b.addEventListener("click", () => {
      if (b.dataset.k === "del") setupData.code = setupData.code.slice(0, -1);
      else if (setupData.code.length < 4) setupData.code += b.dataset.k;
      const dots = $("#codeDots").querySelectorAll("i");
      dots.forEach((d, i) => d.classList.toggle("on", i < setupData.code.length));
    }));
  } else if (step.type === "appleid") {
    body.innerHTML = "<h2>" + step.title + "</h2><p>" + step.text + "</p>" +
      "<label class='fld'>Correo electrónico<input type='email' placeholder='naiara@ejemplo.com'></label>" +
      "<label class='fld'>Contraseña<input type='password' placeholder='••••••••'></label>" +
      "<p style='font-size:13px'>¿No tienes Apple ID? Puedes crear uno más tarde en Ajustes.</p>";
  }
}
$("#btnSetupBack").addEventListener("click", () => { if (setupStep > 0) { setupStep--; renderSetup(); } });
$("#btnSetupSkip").addEventListener("click", () => { state.setupDone = true; save(); renderUniverse(); show("scr-universe"); });
$("#btnSetupNext").addEventListener("click", () => {
  if (SETUP_STEPS[setupStep].type === "code" && setupData.code.length < 4) {
    const dots = $("#codeDots"); if (dots) { dots.style.animation = "none"; dots.offsetHeight; dots.style.animation = "drop .3s ease"; }
    alert("Pon un código de 4 cifras");
    return;
  }
  if (setupStep < SETUP_STEPS.length - 1) { setupStep++; renderSetup(); }
  else { state.setupDone = true; save(); renderUniverse(); show("scr-universe"); }
});

/* ================= 3. UNIVERSO ================= */
function renderUniverse() {
  $("#universeList").innerHTML = Object.entries(UNIVERSES).map(([id, u]) =>
    "<button class='universe-card " + u.cls + "' data-u='" + id + "'><b>" + u.name + "</b><span>" + u.desc + "</span><small>" + u.tag + "</small></button>").join("");
  $$("#universeList .universe-card").forEach(b => b.addEventListener("click", () => {
    state.universe = b.dataset.u; save();
    fillIdentityForm();
    show("scr-identity");
  }));
}

/* ================= 4. IDENTIDAD ================= */
let chosenMood = "Feliz";
function fillIdentityForm() {
  const id = state.identity;
  $("#idName").value = id.name || "";
  $("#idAge").value = id.age || "";
  $("#idRole").value = id.role || "Estudiante de la 1-A";
  $("#idRel").value = id.rel || "";
  $("#idSched").value = id.sched || "";
  chosenMood = id.mood || "Feliz";
  $$("#moodChips button").forEach(b => b.classList.toggle("on", b.dataset.mood === chosenMood));
}
$$("#moodChips button").forEach(b => b.addEventListener("click", () => {
  chosenMood = b.dataset.mood;
  $$("#moodChips button").forEach(x => x.classList.toggle("on", x === b));
}));
$("#btnOC").addEventListener("click", () => {
  $("#idName").value = "Naiara";
  $("#idAge").value = 19;
  $("#idRole").value = "Heroína";
  $("#idRel").value = "Heroína de la 1-A, amiga de Uraraka y Deku";
  $("#idSched").value = "Clases 8:00–14:00 · Entreno 17:00 · Patrulla 20:00";
  chosenMood = "Feliz";
  $$("#moodChips button").forEach(x => x.classList.toggle("on", x.dataset.mood === "Feliz"));
  alert("¡Lista! Tu heroína: pelo castaño en dos coletas bajas onduladas, lazos rosas solo en las coletas, ojos grandes rosas con pupilas blancas y traje negro con estrella rosa. 🌸");
});
$("#btnIdentityDone").addEventListener("click", () => {
  state.identity = {
    name: $("#idName").value.trim() || "Naiara",
    age: +$("#idAge").value || 19,
    role: $("#idRole").value,
    rel: $("#idRel").value.trim(),
    mood: chosenMood,
    sched: $("#idSched").value.trim()
  };
  save();
  show("scr-lock");
});

/* ================= 5. BLOQUEO ================= */
function lockNotifs() {
  const list = bots().slice(0, 2).map(b => ({ bot: b, text: b.hello[0] }));
  return list;
}
function renderLock() {
  const wp = { sunset: "linear-gradient(180deg,#1b2a6b,#7a4a9e 55%,#e2703a)", night: "linear-gradient(180deg,#020617,#1e3a8a 60%,#0ea5e9)", forest: "linear-gradient(180deg,#14532d,#22c55e 60%,#a3e635)" };
  $("#scr-lock .lock").style.background = wp[state.wallpaper] || wp.sunset;
  $("#lockNotifs").innerHTML = lockNotifs().map(n =>
    "<div class='lock-notif'><span class='avatar small' style='background:" + n.bot.color + "'>" + n.bot.emoji + "</span><div><b>" + esc(n.bot.name) + " · ahora</b><span>" + esc(n.text) + "</span></div></div>").join("");
}
$("#scr-lock").addEventListener("click", () => { if (currentScreen === "scr-lock") show("scr-home"); });

/* ================= 6. INICIO ================= */
const HOME_APPS = [
  { id: "messages", name: "Mensajes", tile: "💬", bg: "#34c759" },
  { id: "instagram", name: "Instagram", tile: "📸", bg: "linear-gradient(45deg,#feda75,#d62976,#962fbf)" },
  { id: "store", name: "App Store", tile: "🛍️", bg: "#007aff" },
  { id: "settings", name: "Ajustes", tile: "⚙️", bg: "#8e8e93" },
  { id: "photos", name: "Fotos", tile: "🌸", bg: "#f2f2f7" },
  { id: "clock", name: "Reloj", tile: "🕐", bg: "#111" }
];
function unreadCount() {
  let n = 0;
  bots().forEach(b => { const c = state.chats[b.id]; if (c && c.unread) n++; });
  return n;
}
function renderHome() {
  const wp = { sunset: "linear-gradient(180deg,#1b2a6b,#7a4a9e 55%,#e2703a)", night: "linear-gradient(180deg,#020617,#1e3a8a 60%,#0ea5e9)", forest: "linear-gradient(180deg,#14532d,#22c55e 60%,#a3e635)" };
  $("#scr-home .home").style.background = wp[state.wallpaper] || wp.sunset;
  const id = state.identity;
  const u = UNIVERSES[state.universe];
  $("#identityWidget").innerHTML =
    "<span class='avatar' style='background:linear-gradient(135deg,#ff9ec6,#ec4899)'>🌸</span><div><b>" + esc(id.name) + " · " + esc(id.role) + "</b><span>" + esc(u.name) + " · " + esc(id.mood) + " · " + id.age + " años</span><span>" + esc(id.sched || "") + "</span></div>";
  const un = unreadCount();
  $("#appGrid").innerHTML = HOME_APPS.map(a =>
    "<button class='app-icon' data-app='" + a.id + "'><span class='tile' style='background:" + a.bg + "'>" + a.tile +
    (a.id === "messages" && un > 0 ? "<span class='badge'>" + un + "</span>" : "") + "</span>" + a.name + "</button>").join("");
  $("#dock").innerHTML = ["messages", "instagram", "store", "settings"].map(id2 => {
    const a = HOME_APPS.find(x => x.id === id2);
    return "<button class='app-icon' data-app='" + a.id + "'><span class='tile' style='background:" + a.bg + "'>" + a.tile +
      (a.id === "messages" && un > 0 ? "<span class='badge'>" + un + "</span>" : "") + "</span></button>";
  }).join("");
  $$("#scr-home [data-app]").forEach(b => b.addEventListener("click", () => show("app-" + b.dataset.app)));
}

/* ================= 7. MENSAJES ================= */
function getChat(botId) {
  if (!state.chats[botId]) {
    const b = botById(botId);
    state.chats[botId] = { messages: [{ from: "them", text: b.hello[0] }], unread: true };
    save();
  }
  return state.chats[botId];
}
function renderChatList() {
  $("#chatList").innerHTML = bots().map(b => {
    const c = state.chats[b.id];
    const last = c && c.messages.length ? c.messages[c.messages.length - 1].text : b.hello[0];
    return "<button class='chat-row" + (c && c.unread ? " unread" : "") + "' data-bot='" + b.id + "'>" +
      "<span class='avatar' style='background:" + b.color + "'>" + b.emoji + "</span>" +
      "<span class='chat-info'><span class='chat-top'><b>" + esc(b.name) + "</b><time>" + nowTime() + "</time></span><p>" + esc(last) + "</p></span>" +
      (c && c.unread ? "<span class='dot'></span>" : "") + "</button>";
  }).join("");
  $$("#chatList .chat-row").forEach(r => r.addEventListener("click", () => openChat(r.dataset.bot)));
}
let activeBot = null;
function openChat(botId) {
  activeBot = botById(botId);
  const c = getChat(botId);
  c.unread = false; save();
  $("#chatAvatar").textContent = activeBot.emoji;
  $("#chatAvatar").style.background = activeBot.color;
  $("#chatName").textContent = activeBot.name;
  $("#chatStatus").textContent = activeBot.status;
  renderChatBody();
  $("#quickReplies").innerHTML = ["Hola", "¿Qué haces?", "¿Entrenamos?", "¡Te quiero!"].map(q =>
    "<button data-q='" + q + "'>" + q + "</button>").join("");
  $$("#quickReplies button").forEach(b => b.addEventListener("click", () => sendMessage(b.dataset.q)));
  show("app-chat");
}
function renderChatBody() {
  const c = getChat(activeBot.id);
  $("#chatBody").innerHTML = c.messages.map(m =>
    "<div class='msg " + (m.from === "me" ? "me" : "them") + "'>" + esc(m.text) + "</div>").join("");
  $("#chatBody").scrollTop = $("#chatBody").scrollHeight;
}
function replyFor(bot, text) {
  const t = text.toLowerCase();
  const keys = Object.keys(bot.replies);
  for (const k of keys) {
    if (k !== "default" && t.includes(k)) {
      const arr = bot.replies[k];
      return arr[Math.floor(Math.random() * arr.length)];
    }
  }
  const d = bot.replies.default;
  return d[Math.floor(Math.random() * d.length)];
}
function sendMessage(text) {
  if (!text.trim() || !activeBot) return;
  const c = getChat(activeBot.id);
  c.messages.push({ from: "me", text: text.trim() });
  save(); renderChatBody();
  $("#chatText").value = "";
  setTimeout(() => {
    $("#chatBody").innerHTML += "<div class='msg them typing'>Escribiendo…</div>";
    $("#chatBody").scrollTop = $("#chatBody").scrollHeight;
  }, 600);
  setTimeout(() => {
    const c2 = getChat(activeBot.id);
    c2.messages.push({ from: "them", text: replyFor(activeBot, text) });
    save();
    if (currentScreen === "app-chat") renderChatBody();
  }, 2200);
}
$("#btnSend").addEventListener("click", () => sendMessage($("#chatText").value));
$("#chatText").addEventListener("keydown", e => { if (e.key === "Enter") sendMessage($("#chatText").value); });

/* Notificaciones que llegan de repente */
function ambientNotif() {
  if (!state.setupDone) return;
  const pool = bots().filter(b => notifOn(b.id));
  if (!pool.length) return;
  const b = pool[Math.floor(Math.random() * pool.length)];
  const text = b.hello[Math.floor(Math.random() * b.hello.length)];
  const c = getChat(b.id);
  c.messages.push({ from: "them", text });
  c.unread = true; save();
  if (currentScreen === "scr-home") renderHome();
  if (currentScreen === "app-messages") renderChatList();
  $("#bannerAvatar").textContent = b.emoji;
  $("#bannerAvatar").style.background = b.color;
  $("#bannerTitle").textContent = b.name;
  $("#bannerBody").textContent = text;
  $("#banner").classList.add("show");
  beep();
  setTimeout(() => $("#banner").classList.remove("show"), 5000);
}
$("#banner").addEventListener("click", () => { $("#banner").classList.remove("show"); openChat($("#bannerTitle").textContent ? bots().find(b => b.name === $("#bannerTitle").textContent)?.id || bots()[0].id : bots()[0].id); });
setInterval(ambientNotif, 40000);
setTimeout(ambientNotif, 20000);

/* ================= 8. INSTAGRAM ================= */
let igTab = "feed";
function igState(postIdx) {
  const key = state.universe + ":" + postIdx;
  if (!state.ig[key]) state.ig[key] = { liked: false, saved: false, followed: false };
  return state.ig[key];
}
function renderInstagram() {
  const posts = POSTS[state.universe];
  const storiesHtml = bots().map(b =>
    "<button class='story' data-bot='" + b.id + "'><span class='ring'><span style='background:" + b.color + "'>" + b.emoji + "</span></span>" + esc(b.name.split(" ")[0]) + "</button>").join("");
  $("#stories").innerHTML = storiesHtml;
  $$("#stories .story").forEach(s => s.addEventListener("click", () => openChat(s.dataset.bot)));
  $("#feed").innerHTML = posts.map((p, i) => {
    const b = botById(p.bot);
    const st = igState(i);
    return "<article class='post' data-post='" + i + "'>" +
      "<div class='post-head'><span class='avatar small' style='background:" + b.color + "'>" + b.emoji + "</span><b>" + esc(b.name) + "</b><button class='follow-btn'>" + (st.followed ? "Siguiendo" : "Seguir") + "</button></div>" +
      "<div class='post-photo' style='background:" + p.bg + "'>" + p.emoji + "</div>" +
      "<div class='post-actions'><button class='like-btn" + (st.liked ? " liked" : "") + "'>" + (st.liked ? "❤️" : "🤍") + "</button><button class='cmt-btn'>💬</button><button class='save-btn'>" + (st.saved ? "🔖" : "📑") + "</button></div>" +
      "<div class='post-likes'>" + (p.likes + (st.liked ? 1 : 0)).toLocaleString("es-ES") + " Me gusta</div>" +
      "<div class='post-caption'><b>" + esc(b.name) + "</b>" + esc(p.cap) + "</div>" +
      "<div class='post-comments'>" + p.comments.map(cm => "<b>" + esc(botById(cm[0]).name) + "</b> " + esc(cm[1]) + "<br>").join("") + "</div>" +
      "</article>";
  }).join("");
  $$("#feed .post").forEach(post => {
    const i = +post.dataset.post;
    post.querySelector(".like-btn").addEventListener("click", () => { const st = igState(i); st.liked = !st.liked; save(); renderInstagram(); });
    post.querySelector(".post-photo").addEventListener("dblclick", () => { const st = igState(i); if (!st.liked) { st.liked = true; save(); renderInstagram(); } });
    post.querySelector(".save-btn").addEventListener("click", () => { const st = igState(i); st.saved = !st.saved; save(); renderInstagram(); });
    post.querySelector(".follow-btn").addEventListener("click", () => { const st = igState(i); st.followed = !st.followed; save(); renderInstagram(); });
    post.querySelector(".cmt-btn").addEventListener("click", () => openChat(POSTS[state.universe][i].bot));
  });
  renderIgProfile();
}
function renderIgProfile() {
  const id = state.identity;
  const saved = Object.entries(state.ig).filter(([k, v]) => v.saved && k.startsWith(state.universe + ":")).length;
  $("#igProfile").innerHTML =
    "<div class='prof-top'><span class='avatar' style='background:linear-gradient(135deg,#ff9ec6,#ec4899)'>🌸</span>" +
    "<div class='stats'><div><b>24</b>publicaciones</div><div><b>1.204</b>seguidores</div><div><b>180</b>seguidos</div></div></div>" +
    "<h4>" + esc(id.name) + " · " + esc(id.role) + "</h4><p>🌸 " + esc(UNIVERSES[state.universe].name) + " · " + esc(id.mood) + " · " + esc(id.rel || "Viviendo mi historia") + "</p>" +
    "<p>📌 " + saved + " guardados</p>" +
    "<button class='btn-primary' id='btnEditProf'>Editar perfil</button>" +
    "<div class='prof-grid'>" + PHOTOS[state.universe].slice(0, 9).map((e, i) => "<div style='background:" + PHOTO_BGS[i % PHOTO_BGS.length] + "'>" + e + "</div>").join("") + "</div>";
  const ep = $("#btnEditProf");
  if (ep) ep.addEventListener("click", () => show("scr-identity"));
}
$$(".ig-nav button").forEach(b => b.addEventListener("click", () => {
  $$(".ig-nav button").forEach(x => x.classList.toggle("on", x === b));
  igTab = b.dataset.igtab;
  const showProfile = igTab === "profile";
  $("#igProfile").style.display = showProfile ? "block" : "none";
  $("#stories").style.display = showProfile ? "none" : "flex";
  $("#feed").style.display = showProfile ? "none" : "block";
  if (igTab === "search") { $("#feed").style.display = "block"; }
}));

/* ================= 9. APP STORE ================= */
function renderStore() {
  $("#storeAvatar").textContent = "🌸";
  $("#storeList").innerHTML = STORE_APPS.map(app => {
    const prog = state.store[app.id] || 0;
    const installed = prog >= 100;
    const downloading = prog > 0 && prog < 100;
    let right;
    if (downloading) {
      const r = 26, c = 2 * Math.PI * r;
      right = "<div class='ring-wrap'><svg width='62' height='62'><circle cx='31' cy='31' r='" + r + "' fill='none' stroke='#e5e5ea' stroke-width='5'/><circle cx='31' cy='31' r='" + r + "' fill='none' stroke='#007aff' stroke-width='5' stroke-dasharray='" + c + "' stroke-dashoffset='" + (c * (1 - prog / 100)) + "'/></svg><span class='ring-pct'>" + prog + "%</span></div>";
    } else {
      right = "<button class='get" + (installed ? " open" : "") + "' data-app='" + app.id + "'>" + (installed ? "ABRIR" : "OBTENER") + "</button>";
    }
    return "<div class='store-app'><span class='tile' style='background:" + app.bg + "'>" + app.emoji + "</span>" +
      "<div class='store-info'><b>" + app.name + "</b><small>" + app.desc + "</small><small>⭐ 4,9 · " + UNIVERSES[app.universe].name + "</small></div>" + right + "</div>";
  }).join("");
  $$("#storeList .get").forEach(btn => btn.addEventListener("click", () => {
    const app = STORE_APPS.find(a => a.id === btn.dataset.app);
    if ((state.store[app.id] || 0) >= 100) {
      state.universe = app.universe; save();
      alert("¡Entrando en " + UNIVERSES[app.universe].name + "! 🌍");
      show("scr-home");
      return;
    }
    state.store[app.id] = 1; save(); renderStore();
    const iv = setInterval(() => {
      state.store[app.id] = Math.min(100, (state.store[app.id] || 0) + Math.floor(Math.random() * 9) + 4);
      save();
      if (currentScreen === "app-store") renderStore();
      if ((state.store[app.id] || 0) >= 100) { clearInterval(iv); if (currentScreen === "app-store") renderStore(); }
    }, 450);
  }));
}

/* ================= 10. AJUSTES ================= */
function renderSettings() {
  const id = state.identity;
  $("#settingsProfile").innerHTML =
    "<span class='avatar' style='background:linear-gradient(135deg,#ff9ec6,#ec4899)'>🌸</span><div><b>" + esc(id.name) + "</b><span>" + esc(id.role) + " · " + esc(UNIVERSES[state.universe].name) + "</span></div>";
  $("#setUniverse").innerHTML = "<h4>Universo</h4>" + Object.entries(UNIVERSES).map(([uid, u]) =>
    "<button class='set-row' data-u='" + uid + "'>" + u.name + "<small>" + (state.universe === uid ? "✓ Actual" : "") + "</small></button>").join("");
  $$("#setUniverse .set-row").forEach(b => b.addEventListener("click", () => {
    state.universe = b.dataset.u; save(); renderSettings(); renderHome();
    alert("Universo cambiado a " + UNIVERSES[b.dataset.u].name);
  }));
  $("#wallpapers").innerHTML = [["sunset", "wp-sunset", "Atardecer"], ["night", "wp-night", "Noche"], ["forest", "wp-forest", "Bosque"]].map(([k, cls, label]) =>
    "<button class='" + cls + (state.wallpaper === k ? " sel" : "") + "' data-wp='" + k + "' title='" + label + "'></button>").join("");
  $$("#wallpapers button").forEach(b => b.addEventListener("click", () => { state.wallpaper = b.dataset.wp; save(); renderSettings(); }));
  $("#notifToggles").innerHTML = bots().map(b =>
    "<div class='set-row'><span><span class='avatar small' style='background:" + b.color + ";display:inline-flex;vertical-align:middle;margin-right:8px'>" + b.emoji + "</span>" + esc(b.name) + "</span><button class='switch" + (notifOn(b.id) ? " on" : "") + "' data-bot='" + b.id + "'></button></div>").join("");
  $$("#notifToggles .switch").forEach(sw => sw.addEventListener("click", () => {
    state.notif[sw.dataset.bot] = !notifOn(sw.dataset.bot); save(); renderSettings();
  }));
}
$("#btnEditIdentity").addEventListener("click", () => { fillIdentityForm(); show("scr-identity"); });
$("#btnReset").addEventListener("click", () => {
  if (confirm("¿Restablecer Life OS? Se borra todo: universo, identidad, chats y ajustes.")) {
    localStorage.removeItem(KEY);
    location.reload();
  }
});

/* ================= 11. FOTOS ================= */
function renderPhotos() {
  $("#photosGrid").innerHTML = PHOTOS[state.universe].map((e, i) =>
    "<div style='background:" + PHOTO_BGS[i % PHOTO_BGS.length] + "'>" + e + "</div>").join("");
}

/* ================= 12. RELOJ MUNDIAL ================= */
function renderClocks() {
  $("#clockList").innerHTML = CLOCKS.map(c => {
    const now = new Date();
    const time = new Intl.DateTimeFormat("es-ES", { hour: "2-digit", minute: "2-digit", timeZone: c.tz }).format(now);
    const diff = Math.round((new Date(now.toLocaleString("en-US", { timeZone: c.tz })) - now) / 3600000);
    const label = diff === 0 ? "Hora local" : (diff > 0 ? "+" + diff + " h" : diff + " h");
    return "<div class='clock-row'><div><small>" + label + "</small>" + c.city + "</div><b>" + time + "</b></div>";
  }).join("");
}

/* ================= INICIO ================= */
fillIdentityForm();
if (state.setupDone) show("scr-lock"); else show("scr-welcome");
