# Life OS

Un **iPhone falso** en una página web: bienvenida, configuración, pantalla de
bloqueo, pantalla de inicio y apps con **bots que se comportan como humanos**,
en tres universos elegibles: **Boku no Hero**, **Fama** y **Narnia**.

Todo en español, gratis, sin cuentas ni descargas. El estado (universo,
identidad, chats, ajustes) se guarda en el navegador con `localStorage`.

## Qué incluye

- Bienvenida «Hello» rotando en 8 idiomas
- Configuración inicial falsa: idioma, Wi-Fi, Face ID animado, código con teclado numérico y Apple ID saltable
- Elegir universo y elegir quién eres (nombre, edad, rol, relaciones, mood, horarios), con preset «Ser mi heroína» (OC de Boku no Hero)
- Pantalla de bloqueo con reloj, fecha en español y notificaciones
- Pantalla de inicio iOS con widget de identidad, iconos, dock y Centro de Control (Wi-Fi, Bluetooth, modo avión, linterna, brillo y volumen funcionan)
- Mensajes: los bots contestan por palabras clave en su tono, con «Escribiendo…» y notificaciones que llegan de repente con banner
- Instagram: historias, feed, likes (también con doble toque), comentarios, guardar, seguir y perfil `naiara.vlc`
- App Store: «Hero Academy» descargando con anillo de progreso, «Narnia World» y «Starlight»; ABRIR cambia de universo
- Ajustes: cambiar universo, identidad, fondo de pantalla, notificaciones por bot y restablecer
- Fotos y Reloj mundial

## Vista previa

Activa **GitHub Pages** en los ajustes del repositorio (Settings → Pages →
Deploy from a branch → `main` / `/ (root)`) y abre:

**https://nairawr.github.io/Liphe-OS/**

## Archivos

- `index.html` — estructura de todas las pantallas
- `app.css` — estilo iOS (blanco / negro / gris; rosa solo en el perfil y la OC)
- `app.js` — lógica, bots y estado en `localStorage`
