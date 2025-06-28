const participantes = [
  {
    nombre: "Angel de León",
    aciertos: 0,
    aciertosGoles: 0,
    campeon: false,
    imagen: "capturas/angel.png"
  },
  {
    nombre: "Dublas David",
    aciertos: 0,
    aciertosGoles: 0,
    campeon: false,
    imagen: "capturas/paris.png"
  },
  {
    nombre: "Fernando Cano",
    aciertos: 0,
    aciertosGoles: 0,
    campeon: false,
    imagen: "capturas/nando.png"
  }, 
  {
    nombre: "Ana Cano",
    aciertos: 1,
    aciertosGoles: 0,
    campeon: false,
    imagen: "capturas/ana.png"
   }, 

   {
    nombre: "Juana Cano",
    aciertos: 0,
    aciertosGoles: 0,
    campeon: false,
    imagen: "capturas/juana.png"
  },
  {
    nombre: "Luis Cano",
    aciertos: 1,
    aciertosGoles: 0,
    campeon: false,
    imagen: "capturas/chuga.png"
  },
  {
    nombre: "Tony Cano",
    aciertos: 0,
    aciertosGoles: 0,
    campeon: false,
    imagen: "capturas/tom.png"
  }, 
  {
    nombre: "Hugo Cano",
    aciertos: 0,
    aciertosGoles: 0,
    campeon: false,
    imagen: "capturas/pacha.png"
   }, 
   
  {
    nombre: "Daniel Gómez",
    aciertos: 0,
    aciertosGoles: 0,
    campeon: false,
    imagen: "capturas/chiri.png"
  },
  {
    nombre: "Robert Can",
    aciertos: 0,
    aciertosGoles: 0,
    campeon: false,
    imagen: "capturas/bush.png"
  },
  {
    nombre: "Selvin Godoy",
    aciertos: 1,
    aciertosGoles: 0,
    campeon: false,
    imagen: "capturas/chevere.png"
  }, 
  {
    nombre: "Esnayder Felipe",
    aciertos: 1,
    aciertosGoles: 0,
    campeon: false,
    imagen: "capturas/mayki.png"
   },
    {
    nombre: "Elwin Aquino",
    aciertos: 0,
    aciertosGoles: 0,
    campeon: false,
    imagen: "capturas/aquino.png"
   }, 
   
  {
    nombre: "Eldin Felipe",
    aciertos: 0,
    aciertosGoles: 0,
    campeon: false,
    imagen: "capturas/eldin.png"
  },
  {
    nombre: "Augusto Cano",
    aciertos: 0,
    aciertosGoles: 0,
    campeon: false,
    imagen: "capturas/augusto.png"
  },
  {
    nombre: "Alan Felipe",
    aciertos: 0,
    aciertosGoles: 0,
    campeon: false,
    imagen: "capturas/lallo.png"
  }, 
  {
    nombre: "Tifón",
    aciertos: 0,
    aciertosGoles: 0,
    campeon: false,
    imagen: "capturas/tifon.png"
  },
  {
    nombre: "Jarvin Martínez",
    aciertos: 0,
    aciertosGoles: 0,
    campeon: false,
    imagen: "capturas/migue.png"
  }, 
  {
    nombre: "Jorge Cano",
    aciertos: 0,
    aciertosGoles: 0,
    campeon: false,
    imagen: "capturas/pollo.png"
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
