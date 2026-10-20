# Once plantillas de invitaciones

Colección de Barbie, Bluey, Princesas Disney, La Bella y la Bestia, Frozen, Bob Esponja, Plaza Sésamo, Ladybug, Minecraft, Cars / Rayo McQueen y Plim Plim.

Abre **index.html** para elegir un diseño. Cada carpeta es autónoma: incluye HTML, CSS, JavaScript, imágenes genéricas y fuentes con sus licencias. Puedes copiarla a otro repositorio sin cambiar sus rutas. No necesita npm ni compilación.

## Cambiar el festejo

Edita **datos.js** dentro de la carpeta del tema. Es el único archivo necesario para cambiar nombre, edad, fecha y hora, lugar, Google Maps, contactos, fotos y textos. Los datos visibles, la edad decorativa, los mensajes y el archivo de calendario se actualizan al recargar.

- `nombre` y `edad`: datos de la persona festejada.
- `fechaEvento`: fecha ISO con desplazamiento, por ejemplo `2027-03-20T16:30:00-06:00`.
- `zonaHoraria` y `zonaEtiqueta`: zona usada para mostrar la hora.
- `lugar`: nombre, dirección y enlace `maps`.
- `whatsappContacts`: nombres y teléfonos. Para México, 52 más los diez dígitos del celular.
- `fotos`: rutas de las tres imágenes temáticas, títulos, historias y encuadres.
- `portada.imagenes`: imagen de los personajes o imágenes principales del tema.
- `textos`: titulares y mensajes. Puedes usar `{nombre}`, `{edad}` y `{edadPalabra}`.
- `modoDemo`: déjalo en true para una demostración sin mensajes. Cuando tus datos y teléfonos estén listos, cámbialo a false para usar WhatsApp.
- `duracionHoras`: duración del evento que se descarga al calendario.

Los nombres, edades, fechas, direcciones y contactos de estas plantillas son ficticios. Los teléfonos están vacíos. La confirmación abre una vista local de ejemplo y no registra invitados ni envía mensajes. El calendario también identifica el evento como ejemplo mientras esté activo modoDemo.

## Guardado y publicación

La carpeta `plantillas/` de este repositorio contiene el catálogo completo. GitHub Pages puede servirlo desde `https://94williams.github.io/invitacion-increibles/plantillas/`.

Para usar una invitación sola, copia todo el contenido de la carpeta del tema a la raíz de su propio repositorio y configura GitHub Pages desde main / (root).

Las tres imágenes temáticas y las fuentes se incluyen localmente. Algunos recursos de personajes se cargan desde sus fuentes externas y requieren Internet. Los créditos y prompts están en RECURSOS.md y en el CREDITOS.md de cada diseño.


## Edición visual 3

Cada tema incluye un escenario propio, tres imágenes temáticas y tratamientos específicos para fecha, galería, ubicación y confirmación. Las imágenes nuevas son archivos locales. `ambientacion` controla el escenario y `fotos` la galería. Los prompts completos y rutas se documentan en RECURSOS-VISUALES-V3.md.

El catálogo usa vistas locales de los nueve escenarios. Cada carpeta conserva HTML, fuentes, CSS, scripts, assets/ y .nojekyll para publicarse por separado desde la raíz de otro repositorio. No requiere compilación.


## Cars y Plim Plim

La colección ahora incluye once diseños. Cars / Rayo McQueen y Plim Plim se muestran directamente, sin botón de descubrimiento. Los nuevos recursos y los prompts de ImageGen se documentan en RECURSOS-VISUALES.md dentro de cada carpeta. Ambas tienen datos ficticios editables en datos.js y modoDemo activo.

Ladybug incluye una corrección de contraste en fecha, contador y botón de calendario.
