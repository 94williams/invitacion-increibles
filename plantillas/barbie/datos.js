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
  "theme": "barbie",
  "nombre": "Valentina",
  "edad": 6,
  "fechaEvento": "2027-03-20T16:30:00-06:00",
  "zonaHoraria": "America/Mexico_City",
  "modoDemo": true,
  "lugar": {
    "nombre": "Salón Rosa Cuarzo",
    "direccion": "Calle de los Sueños 123, Ciudad Ejemplo · Dirección ficticia",
    "maps": ""
  },
  "whatsappContacts": [
    {
      "id": "contacto-1",
      "name": "Andrea",
      "phone": ""
    },
    {
      "id": "contacto-2",
      "name": "Daniel",
      "phone": ""
    }
  ],
  "temaNombre": "Barbie",
  "zonaEtiqueta": "Ciudad de México",
  "duracionHoras": 4,
  "textos": {
    "tituloLinea1": "La vida es una",
    "tituloLinea2": "fiesta.",
    "subtitulo": "Un día para brillar, soñar en rosa y celebrar todo lo que somos.",
    "encabezadoMensaje": "¡Hola, mundo rosa!",
    "mensaje": "Cada año viene con sueños nuevos. El mío es llenar este día de risas, abrazos y recuerdos contigo. Ponte tu mejor sonrisa: la fiesta empieza aquí.",
    "galeriaTitulo": "Momentos de portada",
    "fraseFinal": "Tu sonrisa es el mejor accesorio."
  },
  "fotos": [
    {
      "src": "assets/photo-1.webp",
      "alt": "Pastel de cumpleaños de ejemplo con crema y velas",
      "titulo": "Un pastel de portada",
      "historia": "Un detalle dulce para empezar una celebración inolvidable.",
      "posicion": "50% 50%"
    },
    {
      "src": "assets/photo-2.webp",
      "alt": "Globos pastel de ejemplo para una celebración",
      "titulo": "Globos con estilo",
      "historia": "Los colores también cuentan una historia de alegría.",
      "posicion": "50% 50%"
    },
    {
      "src": "assets/photo-3.webp",
      "alt": "Mesa de fiesta de ejemplo con flores y platos de colores",
      "titulo": "Una mesa soñada",
      "historia": "La mejor mesa es la que compartimos con nuestras personas favoritas.",
      "posicion": "50% 50%"
    },
    {
      "src": "assets/photo-4.webp",
      "alt": "Regalos de ejemplo con papel y cintas pastel",
      "titulo": "Sorpresas de colección",
      "historia": "Las pequeñas sorpresas hacen especial cada momento.",
      "posicion": "50% 50%"
    },
    {
      "src": "assets/photo-5.webp",
      "alt": "Galletas y macarons de ejemplo sobre un plato de cerámica",
      "titulo": "Dulces para brillar",
      "historia": "Los buenos recuerdos también tienen un toque de dulzura.",
      "posicion": "50% 50%"
    }
  ],
  "portada": {
    "imagenes": [
      {
        "src": "assets/hero-v1.webp",
        "alt": "Barbie: escena de bienvenida para la celebración"
      }
    ],
    "pie": "Barbie · El mundo de mi cumpleaños"
  }
};
