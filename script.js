const participantes = [
  {
    nombre: "Fernando Cáno",
    aciertos: 0,
    aciertosGoles: 0,
    campeon: false,
    imagen: "capturas/ferran.png"
  },
  {
    nombre: "Roberto Cáno",
    aciertos: 0,
    aciertosGoles: 0,
    campeon: false,
    imagen: "capturas/andrea.png"
  },
  {
    nombre: "Jorge Cáno",
    aciertos: 0,
    aciertosGoles: 0,
    campeon: false,
    imagen: "capturas/kevin.png"
  }, 
  {
    nombre: "Tom Cáno",
    aciertos: 0,
    aciertosGoles: 0,
    campeon: false,
    imagen: "capturas/kevin.png"
   }, 

   {
    nombre: "Luis Cáno",
    aciertos: 0,
    aciertosGoles: 0,
    campeon: false,
    imagen: "capturas/ferran.png"
  },
  {
    nombre: "Selvin Godoy",
    aciertos: 0,
    aciertosGoles: 0,
    campeon: false,
    imagen: "capturas/andrea.png"
  },
  {
    nombre: "Angel de León",
    aciertos: 0,
    aciertosGoles: 0,
    campeon: false,
    imagen: "capturas/kevin.png"
  }, 
  {
    nombre: "Mayki Felipe",
    aciertos: 0,
    aciertosGoles: 0,
    campeon: false,
    imagen: "capturas/kevin.png"
   }, 
   
  {
    nombre: "Eldin Felipe",
    aciertos: 0,
    aciertosGoles: 0,
    campeon: false,
    imagen: "capturas/ferran.png"
  },
  {
    nombre: "Juana Leticia",
    aciertos: 0,
    aciertosGoles: 0,
    campeon: false,
    imagen: "capturas/andrea.png"
  },
  {
    nombre: "Ana Morales",
    aciertos: 0,
    aciertosGoles: 0,
    campeon: false,
    imagen: "capturas/kevin.png"
  }, 
  {
    nombre: "Hugo Daniel",
    aciertos: 0,
    aciertosGoles: 0,
    campeon: false,
    imagen: "capturas/kevin.png"
   }
  // Agregá más aquí...
];

function calcularPuntos(p) {
  return (p.aciertos * 3) + (p.campeon ? 5 : 0);
}

function generarTabla() {
  const cuerpo = document.getElementById('cuerpo-tabla');

  const conPuntos = participantes.map(p => ({
    ...p,
    puntos: calcularPuntos(p)
  }));

  const grupos = {};
  conPuntos.forEach(p => {
    const puntos = p.puntos;
    if (!grupos[puntos]) grupos[puntos] = [];
    grupos[puntos].push(p);
  });

  const puntosOrdenados = Object.keys(grupos).map(Number).sort((a, b) => b - a);
  const ordenFinal = [];

  puntosOrdenados.forEach(puntos => {
    const grupo = grupos[puntos];
    if (grupo.length > 1) {
      grupo.sort((a, b) => b.aciertosGoles - a.aciertosGoles);
    }
    ordenFinal.push(...grupo);
  });

  cuerpo.innerHTML = '';
  ordenFinal.forEach((p, i) => {
    const fila = document.createElement('tr');
    fila.innerHTML = `
      <td>${i + 1}</td>
      <td>${p.nombre}${p.campeon ? ' ⭐' : ''}</td>
      <td>${p.puntos}</td>
      <td>${p.aciertos}</td>
      <td>${p.aciertosGoles}</td>
      <td><button class="btn-ver" data-img="${p.imagen}">Ver Quiniela</button></td>
    `;
    cuerpo.appendChild(fila);
  });

  // Activar botones
  document.querySelectorAll('.btn-ver').forEach(btn => {
    btn.addEventListener('click', () => {
      const src = btn.getAttribute('data-img');
      document.getElementById('imagen-modal').src = src;
      document.getElementById('modal').style.display = 'flex';
    });
  });
}

// Cerrar modal
document.getElementById('cerrar-modal').addEventListener('click', () => {
  document.getElementById('modal').style.display = 'none';
});

generarTabla();