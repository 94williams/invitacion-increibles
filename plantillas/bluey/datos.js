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
  "theme": "bluey",
  "nombre": "Mateo",
  "edad": 3,
  "fechaEvento": "2027-04-11T12:00:00-06:00",
  "zonaHoraria": "America/Mexico_City",
  "modoDemo": true,
  "lugar": {
    "nombre": "Jardín Arcoíris",
    "direccion": "Avenida de la Alegría 45, Ciudad Ejemplo · Dirección ficticia",
    "maps": ""
  },
  "whatsappContacts": [
    {
      "id": "contacto-1",
      "name": "Lucía",
      "phone": ""
    },
    {
      "id": "contacto-2",
      "name": "Marcos",
      "phone": ""
    }
  ],
  "temaNombre": "Bluey",
  "zonaEtiqueta": "Ciudad de México",
  "duracionHoras": 4,
  "textos": {
    "tituloLinea1": "¡Hoy jugamos",
    "tituloLinea2": "a celebrar!",
    "subtitulo": "Hay días que se vuelven nuestros favoritos. Este será uno de ellos.",
    "encabezadoMensaje": "Este episodio se llama…",
    "mensaje": "Mi cumpleaños. Con juegos inventados, abrazos enormes y esas personas que hacen divertida cualquier tarde. Solo falta una cosa: ¡que vengas tú!",
    "galeriaTitulo": "Mis días favoritos",
    "fraseFinal": "Las mejores aventuras se juegan en familia."
  },
  "fotos": [
    {
      "src": "assets/photo-1.webp",
      "alt": "Pastel de cumpleaños de ejemplo con crema y velas",
      "titulo": "Un pastel para compartir",
      "historia": "Un detalle dulce para empezar una celebración inolvidable.",
      "posicion": "50% 50%"
    },
    {
      "src": "assets/photo-2.webp",
      "alt": "Globos pastel de ejemplo para una celebración",
      "titulo": "Colores para jugar",
      "historia": "Los colores también cuentan una historia de alegría.",
      "posicion": "50% 50%"
    },
    {
      "src": "assets/photo-3.webp",
      "alt": "Mesa de fiesta de ejemplo con flores y platos de colores",
      "titulo": "Todos a la mesa",
      "historia": "La mejor mesa es la que compartimos con nuestras personas favoritas.",
      "posicion": "50% 50%"
    },
    {
      "src": "assets/photo-4.webp",
      "alt": "Regalos de ejemplo con papel y cintas pastel",
      "titulo": "Una pequeña sorpresa",
      "historia": "Las pequeñas sorpresas hacen especial cada momento.",
      "posicion": "50% 50%"
    },
    {
      "src": "assets/photo-5.webp",
      "alt": "Galletas y macarons de ejemplo sobre un plato de cerámica",
      "titulo": "Dulces de aventura",
      "historia": "Los buenos recuerdos también tienen un toque de dulzura.",
      "posicion": "50% 50%"
    }
  ],
  "portada": {
    "imagenes": [
      {
        "src": "assets/hero-v1.webp",
        "alt": "Bluey: escena de bienvenida para la celebración"
      }
    ],
    "pie": "Bluey · El mundo de mi cumpleaños"
  }
};
