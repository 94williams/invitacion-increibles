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
  "theme": "bob-esponja",
  "nombre": "Lucas",
  "edad": 4,
  "fechaEvento": "2027-03-28T13:00:00-06:00",
  "zonaHoraria": "America/Mexico_City",
  "modoDemo": true,
  "lugar": {
    "nombre": "Salón Ola Azul",
    "direccion": "Paseo del Coral 32, Ciudad Ejemplo · Dirección ficticia",
    "maps": ""
  },
  "whatsappContacts": [
    {
      "id": "contacto-1",
      "name": "Paula",
      "phone": ""
    },
    {
      "id": "contacto-2",
      "name": "Tomás",
      "phone": ""
    }
  ],
  "temaNombre": "Bob Esponja",
  "zonaEtiqueta": "Ciudad de México",
  "duracionHoras": 4,
  "textos": {
    "tituloLinea1": "¡Estoy listo",
    "tituloLinea2": "para la fiesta!",
    "subtitulo": "Sumérgete en un cumpleaños con risas, amigos y diversión bajo el mar.",
    "encabezadoMensaje": "Una aventura muy esponjosa",
    "mensaje": "Mis {edadPalabra} años merecen una celebración totalmente coral. Habrá un mar de alegría y un lugar reservado para ti. Trae tus ganas de jugar: los buenos momentos ya están haciendo burbujas.",
    "galeriaTitulo": "Mi cofre de recuerdos",
    "fraseFinal": "¡La mejor pesca son los buenos amigos!"
  },
  "fotos": [
    {
      "src": "assets/photo-1.webp",
      "alt": "Pastel de cumpleaños de ejemplo con crema y velas",
      "titulo": "Un pastel totalmente coral",
      "historia": "Un detalle dulce para empezar una celebración inolvidable.",
      "posicion": "50% 50%"
    },
    {
      "src": "assets/photo-2.webp",
      "alt": "Globos pastel de ejemplo para una celebración",
      "titulo": "Un mar de colores",
      "historia": "Los colores también cuentan una historia de alegría.",
      "posicion": "50% 50%"
    },
    {
      "src": "assets/photo-3.webp",
      "alt": "Mesa de fiesta de ejemplo con flores y platos de colores",
      "titulo": "Todos a bordo",
      "historia": "La mejor mesa es la que compartimos con nuestras personas favoritas.",
      "posicion": "50% 50%"
    },
    {
      "src": "assets/photo-4.webp",
      "alt": "Regalos de ejemplo con papel y cintas pastel",
      "titulo": "El cofre de las sorpresas",
      "historia": "Las pequeñas sorpresas hacen especial cada momento.",
      "posicion": "50% 50%"
    },
    {
      "src": "assets/photo-5.webp",
      "alt": "Galletas y macarons de ejemplo sobre un plato de cerámica",
      "titulo": "Una ola de dulzura",
      "historia": "Los buenos recuerdos también tienen un toque de dulzura.",
      "posicion": "50% 50%"
    }
  ],
  "portada": {
    "imagenes": [
      {
        "src": "https://m.media-amazon.com/images/S/pv-target-images/588e6ca0c518b01ef860a633da83d088904c1c529835c95d9853e29b54f26008.jpg",
        "alt": "Bob Esponja: escena de bienvenida para la celebración"
      }
    ],
    "pie": "Bob Esponja · El mundo de mi cumpleaños"
  }
};
