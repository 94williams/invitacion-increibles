/**
 * DATOS DE LA INVITACIÓN — edita este archivo y recarga la página.
 * nombre / edad / fechaEvento: datos del festejo. Conserva el formato de fecha y zona horaria.
 * fotos: cambia src, titulo, historia y posicion para usar tus propias imágenes.
 * lugar.maps: pega el enlace de Google Maps del lugar.
 * whatsappContacts.phone: escribe 52 seguido de los 10 dígitos del celular mexicano.
 * modoDemo: true muestra una prueba sin enviar nada; false activa WhatsApp con los teléfonos configurados.
 * textos: puedes usar {nombre}, {edad} y {edadPalabra}; se actualizan automáticamente.
 */
window.INVITATION = {
  "theme": "plaza-sesamo",
  "nombre": "Leo",
  "edad": 2,
  "fechaEvento": "2027-05-09T12:30:00-06:00",
  "zonaHoraria": "America/Mexico_City",
  "modoDemo": true,
  "lugar": {
    "nombre": "Jardín de los Amigos",
    "direccion": "Calle de los Colores 82, Ciudad Ejemplo · Dirección ficticia",
    "maps": ""
  },
  "whatsappContacts": [
    {
      "id": "contacto-1",
      "name": "Sara",
      "phone": ""
    },
    {
      "id": "contacto-2",
      "name": "Pablo",
      "phone": ""
    }
  ],
  "temaNombre": "Plaza Sésamo",
  "zonaEtiqueta": "Ciudad de México",
  "duracionHoras": 4,
  "textos": {
    "tituloLinea1": "¡Uno, dos…",
    "tituloLinea2": "y a celebrar!",
    "subtitulo": "Una fiesta llena de colores, descubrimientos y amigos como tú.",
    "encabezadoMensaje": "Hoy aprendemos algo muy bonito",
    "mensaje": "Con la A de amistad y el {edadPalabra} de mi cumpleaños, vamos a llenar esta calle de alegría. Me encantaría que nos acompañaras a contar risas, compartir abrazos y crear nuevos recuerdos.",
    "galeriaTitulo": "Una ventana a mis recuerdos",
    "fraseFinal": "En esta calle siempre hay lugar para ti."
  },
  "fotos": [
    {
      "src": "assets/photo-1.webp",
      "alt": "Pastel de cumpleaños de ejemplo con crema y velas",
      "titulo": "A de alegría",
      "historia": "Un detalle dulce para empezar una celebración inolvidable.",
      "posicion": "50% 50%"
    },
    {
      "src": "assets/photo-2.webp",
      "alt": "Globos pastel de ejemplo para una celebración",
      "titulo": "C de colores",
      "historia": "Los colores también cuentan una historia de alegría.",
      "posicion": "50% 50%"
    },
    {
      "src": "assets/photo-3.webp",
      "alt": "Mesa de fiesta de ejemplo con flores y platos de colores",
      "titulo": "M de mesa",
      "historia": "La mejor mesa es la que compartimos con nuestras personas favoritas.",
      "posicion": "50% 50%"
    },
    {
      "src": "assets/photo-4.webp",
      "alt": "Regalos de ejemplo con papel y cintas pastel",
      "titulo": "S de sorpresa",
      "historia": "Las pequeñas sorpresas hacen especial cada momento.",
      "posicion": "50% 50%"
    },
    {
      "src": "assets/photo-5.webp",
      "alt": "Galletas y macarons de ejemplo sobre un plato de cerámica",
      "titulo": "D de dulces",
      "historia": "Los buenos recuerdos también tienen un toque de dulzura.",
      "posicion": "50% 50%"
    }
  ],
  "portada": {
    "imagenes": [
      {
        "src": "https://sesameworkshop.org/wp-content/uploads/2023/03/el-p014-sst-376x282.jpg?theia_smart_thumbnails_file_version=2",
        "alt": "Elmo saluda a los invitados"
      },
      {
        "src": "https://sesameworkshop.org/wp-content/uploads/2023/03/cm-p034-sst-376x282.jpg",
        "alt": "El Monstruo Comegalletas con su galleta"
      },
      {
        "src": "https://sesameworkshop.org/wp-content/uploads/2023/03/bb-p008-sst-376x282.jpg",
        "alt": "Big Bird da la bienvenida"
      }
    ],
    "pie": "Amigos de Plaza Sésamo · Todos son bienvenidos"
  }
};
