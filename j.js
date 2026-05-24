const contenedor = document.getElementById('fresas');

for (let i = 0; i < 30; i++) {
  const fresa = document.createElement('div');
  fresa.classList.add('fresa');
  fresa.innerHTML = '🍓';

  fresa.style.left = Math.random() * 100 + 'vw';
  fresa.style.animationDuration = (Math.random() * 5 + 5) + 's';
  fresa.style.fontSize = (Math.random() * 25 + 20) + 'px';
  fresa.style.opacity = Math.random();

  contenedor.appendChild(fresa);
}

const mensajes = [
  '🎨 Tu imaginación merece una galería entera.',
  '🍓 Que tu cumpleaños tenga colores tan dulces como fresas.',
  '✨ Cada año eres una obra de arte más increíble.',
  '🖌️ Sigue pintando tu vida con felicidad y creatividad.',
  '🌸 Hoy el lienzo del mundo celebra tu existencia.'
];

function animarFresa(fresa) {
  fresa.style.transform = 'scale(1.5) rotate(20deg)';

  setTimeout(() => {
    fresa.style.transform = 'scale(1) rotate(0deg)';
  }, 500);

  const frases = [
    '🍓 El arte también puede ser dulce.',
    '🎨 Cada fresa guarda inspiración.',
    '✨ Las ideas más bonitas nacen jugando.',
    '🖌️ Tu creatividad florece como una pintura.'
  ];

  const random = Math.floor(Math.random() * frases.length);
  document.getElementById('mensaje').innerHTML = frases[random];
}

function mostrarMensaje() {
  const mensaje = document.getElementById('mensaje');
  const random = Math.floor(Math.random() * mensajes.length);
  mensaje.innerHTML = mensajes[random];
}
