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
  "theme": "minecraft",
  "nombre": "Nicolás",
  "edad": 9,
  "fechaEvento": "2027-05-22T15:00:00-06:00",
  "zonaHoraria": "America/Mexico_City",
  "modoDemo": true,
  "lugar": {
    "nombre": "Mundo Aventura",
    "direccion": "Camino de los Bloques 24, Ciudad Ejemplo · Dirección ficticia",
    "maps": ""
  },
  "whatsappContacts": [
    {
      "id": "contacto-1",
      "name": "Laura",
      "phone": ""
    },
    {
      "id": "contacto-2",
      "name": "David",
      "phone": ""
    }
  ],
  "temaNombre": "Minecraft",
  "zonaEtiqueta": "Ciudad de México",
  "duracionHoras": 4,
  "textos": {
    "tituloLinea1": "Subimos",
    "tituloLinea2": "al nivel {edad}.",
    "subtitulo": "La mejor aventura se construye con buenos amigos. ¿Te unes a mi mundo?",
    "encabezadoMensaje": "Mundo: {nombre}",
    "mensaje": "Ya construimos {edadPalabra} años de risas, descubrimientos y aventuras. Ahora toca reunir al equipo para el siguiente nivel. Trae tu imaginación y muchas ganas de celebrar: aquí empieza nuestra partida.",
    "galeriaTitulo": "Inventario de buenos momentos",
    "fraseFinal": "El mejor mundo es el que construimos juntos."
  },
  "fotos": [
    {
      "src": "assets/photo-1.webp",
      "alt": "Pastel de cumpleaños de ejemplo con crema y velas",
      "titulo": "Pastel fabricado",
      "historia": "Un detalle dulce para empezar una celebración inolvidable.",
      "posicion": "50% 50%"
    },
    {
      "src": "assets/photo-2.webp",
      "alt": "Globos pastel de ejemplo para una celebración",
      "titulo": "Colores desbloqueados",
      "historia": "Los colores también cuentan una historia de alegría.",
      "posicion": "50% 50%"
    },
    {
      "src": "assets/photo-3.webp",
      "alt": "Mesa de fiesta de ejemplo con flores y platos de colores",
      "titulo": "Mesa de celebración",
      "historia": "La mejor mesa es la que compartimos con nuestras personas favoritas.",
      "posicion": "50% 50%"
    },
    {
      "src": "assets/photo-4.webp",
      "alt": "Regalos de ejemplo con papel y cintas pastel",
      "titulo": "Cofre de sorpresas",
      "historia": "Las pequeñas sorpresas hacen especial cada momento.",
      "posicion": "50% 50%"
    },
    {
      "src": "assets/photo-5.webp",
      "alt": "Galletas y macarons de ejemplo sobre un plato de cerámica",
      "titulo": "Dulzura +100",
      "historia": "Los buenos recuerdos también tienen un toque de dulzura.",
      "posicion": "50% 50%"
    }
  ],
  "portada": {
    "imagenes": [
      {
        "src": "assets/hero-v1.webp",
        "alt": "Minecraft: escena de bienvenida para la celebración"
      }
    ],
    "pie": "Minecraft · El mundo de mi cumpleaños"
  }
};
