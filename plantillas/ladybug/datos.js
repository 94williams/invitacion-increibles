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
  "theme": "ladybug",
  "nombre": "Sofía",
  "edad": 8,
  "fechaEvento": "2027-04-17T17:00:00-06:00",
  "zonaHoraria": "America/Mexico_City",
  "modoDemo": true,
  "lugar": {
    "nombre": "Terraza París",
    "direccion": "Avenida de las Estrellas 16, Ciudad Ejemplo · Dirección ficticia",
    "maps": ""
  },
  "whatsappContacts": [
    {
      "id": "contacto-1",
      "name": "Julia",
      "phone": ""
    },
    {
      "id": "contacto-2",
      "name": "Álex",
      "phone": ""
    }
  ],
  "temaNombre": "Ladybug",
  "zonaEtiqueta": "Ciudad de México",
  "duracionHoras": 4,
  "textos": {
    "tituloLinea1": "Una fiesta",
    "tituloLinea2": "miraculosa.",
    "subtitulo": "La ciudad necesita un gran equipo. Y tú tienes un lugar en el mío.",
    "encabezadoMensaje": "Expediente: cumpleaños",
    "mensaje": "Una misión importante está por comenzar: reunir a mis personas favoritas para celebrar mis {edadPalabra} años. No necesitas poderes especiales; con tu compañía, la aventura ya es extraordinaria.",
    "galeriaTitulo": "Mi historia, cuadro a cuadro",
    "fraseFinal": "Nuestro verdadero poder es estar juntos."
  },
  "fotos": [
    {
      "src": "assets/photo-1.webp",
      "alt": "Pastel de cumpleaños de ejemplo con crema y velas",
      "titulo": "El pastel de la misión",
      "historia": "Un detalle dulce para empezar una celebración inolvidable.",
      "posicion": "50% 50%"
    },
    {
      "src": "assets/photo-2.webp",
      "alt": "Globos pastel de ejemplo para una celebración",
      "titulo": "Colores con superpoder",
      "historia": "Los colores también cuentan una historia de alegría.",
      "posicion": "50% 50%"
    },
    {
      "src": "assets/photo-3.webp",
      "alt": "Mesa de fiesta de ejemplo con flores y platos de colores",
      "titulo": "La mesa del equipo",
      "historia": "La mejor mesa es la que compartimos con nuestras personas favoritas.",
      "posicion": "50% 50%"
    },
    {
      "src": "assets/photo-4.webp",
      "alt": "Regalos de ejemplo con papel y cintas pastel",
      "titulo": "Sorpresa desbloqueada",
      "historia": "Las pequeñas sorpresas hacen especial cada momento.",
      "posicion": "50% 50%"
    },
    {
      "src": "assets/photo-5.webp",
      "alt": "Galletas y macarons de ejemplo sobre un plato de cerámica",
      "titulo": "Una misión muy dulce",
      "historia": "Los buenos recuerdos también tienen un toque de dulzura.",
      "posicion": "50% 50%"
    }
  ],
  "portada": {
    "imagenes": [
      {
        "src": "https://miraculous.com/wp-content/uploads/2024/07/HOME_Movie-Chara-solo-1024x491.webp",
        "alt": "Ladybug: escena de bienvenida para la celebración"
      }
    ],
    "pie": "Ladybug · El mundo de mi cumpleaños"
  }
};
