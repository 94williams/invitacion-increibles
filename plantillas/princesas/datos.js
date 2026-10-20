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
  "theme": "princesas",
  "nombre": "Isabella",
  "edad": 5,
  "fechaEvento": "2027-05-15T17:00:00-06:00",
  "zonaHoraria": "America/Mexico_City",
  "modoDemo": true,
  "lugar": {
    "nombre": "Castillo de Estrellas",
    "direccion": "Paseo de la Fantasía 28, Ciudad Ejemplo · Dirección ficticia",
    "maps": ""
  },
  "whatsappContacts": [
    {
      "id": "contacto-1",
      "name": "Clara",
      "phone": ""
    },
    {
      "id": "contacto-2",
      "name": "Gabriel",
      "phone": ""
    }
  ],
  "temaNombre": "Princesas Disney",
  "zonaEtiqueta": "Ciudad de México",
  "duracionHoras": 4,
  "textos": {
    "tituloLinea1": "Había una vez…",
    "tituloLinea2": "un día mágico.",
    "subtitulo": "Un nuevo capítulo está por comenzar. Y en esta historia hay un lugar para ti.",
    "encabezadoMensaje": "Queridos invitados",
    "mensaje": "En un reino lleno de cariño, los días se cuentan en sonrisas. Hoy comienza mi capítulo número {edadPalabra} y quiero escribirlo junto a las personas que más quiero. Será un honor celebrar contigo.",
    "galeriaTitulo": "Pequeños capítulos, grandes recuerdos",
    "fraseFinal": "Y celebraron felices, juntos."
  },
  "fotos": [
    {
      "src": "assets/photo-1.webp",
      "alt": "Pastel de cumpleaños de ejemplo con crema y velas",
      "titulo": "Un pastel de cuento",
      "historia": "Un detalle dulce para empezar una celebración inolvidable.",
      "posicion": "50% 50%"
    },
    {
      "src": "assets/photo-2.webp",
      "alt": "Globos pastel de ejemplo para una celebración",
      "titulo": "Colores encantados",
      "historia": "Los colores también cuentan una historia de alegría.",
      "posicion": "50% 50%"
    },
    {
      "src": "assets/photo-3.webp",
      "alt": "Mesa de fiesta de ejemplo con flores y platos de colores",
      "titulo": "La mesa del reino",
      "historia": "La mejor mesa es la que compartimos con nuestras personas favoritas.",
      "posicion": "50% 50%"
    },
    {
      "src": "assets/photo-4.webp",
      "alt": "Regalos de ejemplo con papel y cintas pastel",
      "titulo": "Pequeños tesoros",
      "historia": "Las pequeñas sorpresas hacen especial cada momento.",
      "posicion": "50% 50%"
    },
    {
      "src": "assets/photo-5.webp",
      "alt": "Galletas y macarons de ejemplo sobre un plato de cerámica",
      "titulo": "Dulces de fantasía",
      "historia": "Los buenos recuerdos también tienen un toque de dulzura.",
      "posicion": "50% 50%"
    }
  ],
  "portada": {
    "imagenes": [
      {
        "src": "https://lumiere-a.akamaihd.net/v1/images/hb_disneyprincess_createyourworldcampaignportal_3497_v2_c34b141e.jpeg?region=0%2C0%2C2048%2C878&width=1536",
        "alt": "Princesas Disney: escena de bienvenida para la celebración"
      }
    ],
    "pie": "Princesas Disney · El mundo de mi cumpleaños"
  }
};
