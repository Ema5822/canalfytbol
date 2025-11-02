// Base de datos de partidos disponibles
const basePartidos = [
    {
        liga: "Copa Libertadores",
        hora: "21:00",
        equipo1: "Boca Juniors",
        equipo2: "River Plate",
        canal: "Tyc Sports",
        id: 1
    },
    {
        liga: "Liga 1 Perú",
        hora: "19:00",
        equipo1: "Alianza Lima",
        equipo2: "Universitario",
        canal: "Liga1Max",
        id: 2
    },
    {
        liga: "Primera División Argentina",
        hora: "20:00",
        equipo1: "Racing",
        equipo2: "Independiente",
        canal: "Tnt Sports",
        id: 3
    },
    {
        liga: "Champions League",
        hora: "15:00",
        equipo1: "Real Madrid",
        equipo2: "Barcelona",
        canal: "ESPN Premium",
        id: 4
    },
    {
        liga: "Brasileirão",
        hora: "18:00",
        equipo1: "Flamengo",
        equipo2: "Palmeiras",
        canal: "Fox Sports",
        id: 5
    },
    {
        liga: "Liga BetPlay Colombia",
        hora: "17:00",
        equipo1: "Millonarios",
        equipo2: "Nacional",
        canal: "Win Sports",
        id: 6
    },
    {
        liga: "Copa Sudamericana",
        hora: "16:00",
        equipo1: "São Paulo",
        equipo2: "Colo-Colo",
        canal: "Fox Sports 2",
        id: 7
    },
    {
        liga: "Primera División de Chile",
        hora: "18:30",
        equipo1: "Universidad de Chile",
        equipo2: "Colo-Colo",
        canal: "DSports",
        id: 8
    },
    {
        liga: "Europa League",
        hora: "14:00",
        equipo1: "Liverpool",
        equipo2: "Atlético Madrid",
        canal: "ESPN1",
        id: 9
    },
    {
        liga: "Liga 1 Perú",
        hora: "20:30",
        equipo1: "Sporting Cristal",
        equipo2: "Melgar",
        canal: "Liga1Max",
        id: 10
    },
    {
        liga: "Primera División Argentina",
        hora: "19:30",
        equipo1: "San Lorenzo",
        equipo2: "Huracán",
        canal: "ESPN2",
        id: 11
    },
    {
        liga: "Brasileirão",
        hora: "17:30",
        equipo1: "São Paulo",
        equipo2: "Corinthians",
        canal: "Fox Sports",
        id: 12
    }
];

// Partidos adicionales que pueden aparecer aleatoriamente
const partidosAleatorios = [
    {
        liga: "Copa Libertadores",
        equipo1: "Flamengo",
        equipo2: "Palmeiras",
        canal: "Tyc Sports"
    },
    {
        liga: "Champions League",
        equipo1: "Bayern Munich",
        equipo2: "PSG",
        canal: "ESPN Premium"
    },
    {
        liga: "Liga BetPlay Colombia",
        equipo1: "Deportivo Cali",
        equipo2: "Atlético Nacional",
        canal: "Win Sports"
    },
    {
        liga: "Primera División Argentina",
        equipo1: "Estudiantes",
        equipo2: "Gimnasia",
        canal: "Tnt Sports"
    },
    {
        liga: "Liga 1 Perú",
        equipo1: "Cienciano",
        equipo2: "Deportivo Municipal",
        canal: "Liga1Max"
    }
];

// Mapeo de nombres de canales a IDs
const mapeoCanales = {
    "Tyc Sports": "tyc-sports",
    "Tnt Sports": "tnt-sports",
    "ESPN Premium": "espn-premium",
    "Espn Premium": "espn-premium",
    "Win Sports": "win-sports",
    "DSports": "dsports",
    "DSports+": "dsports-plus",
    "ESPN1": "espn1",
    "ESPN": "espn1",
    "ESPN2": "espn2",
    "ESPN3": "espn3",
    "Fox Sports": "fox-sports",
    "Fox Sports 2": "fox-sports-2",
    "Fox Sports 3": "fox-sports-3",
    "Liga1Max": "liga1max",
    "LIGA 1 MAX": "liga1max"
};

// Mapeo de canales a URLs reales
const canalesUrls = {
    "tyc-sports": "https://futbollibrelibre.com/canales.php?stream=tycsports",
    "tnt-sports": "https://futbollibrelibre.com/canales.php?stream=tntsports",
    "espn-premium": "https://futbollibrelibre.com/canales.php?stream=espnpremium",
    "win-sports": "https://futbollibrelibre.com/canales.php?stream=winsports",
    "dsports": "https://futbollibrelibre.com/canales.php?stream=dsports",
    "dsports-plus": "https://futbollibrelibre.com/canales.php?stream=dsportsplus",
    "espn1": "https://futbollibrelibre.com/canales.php?stream=espn",
    "espn2": "https://futbollibrelibre.com/canales.php?stream=espn2",
    "espn3": "https://futbollibrelibre.com/canales.php?stream=espn3",
    "fox-sports": "https://futbollibrelibre.com/canales.php?stream=foxsports",
    "fox-sports-2": "https://futbollibrelibre.com/canales.php?stream=foxsports2",
    "fox-sports-3": "https://futbollibrelibre.com/canales.php?stream=foxsports3",
    "liga1max": "https://futbollibrelibre.com/canales.php?stream=liga1max"
};

// Función para obtener emoji de equipo
function getEquipoEmoji(equipo) {
    const emojis = {
        "Boca Juniors": "🔵",
        "River Plate": "🔴",
        "Alianza Lima": "🔵",
        "Universitario": "🔴",
        "Racing": "🔵",
        "Independiente": "🔴",
        "Real Madrid": "⚪",
        "Barcelona": "🔴",
        "Flamengo": "🔴",
        "Palmeiras": "🟢",
        "Millonarios": "🔵",
        "Nacional": "🟢",
        "São Paulo": "🔴",
        "Colo-Colo": "🔵",
        "Universidad de Chile": "🔵",
        "Liverpool": "🔴",
        "Atlético Madrid": "🔴",
        "Sporting Cristal": "🔴",
        "Melgar": "🟡",
        "San Lorenzo": "🔴",
        "Huracán": "🔴",
        "Corinthians": "⚪",
        "Bayern Munich": "🔴",
        "PSG": "🔵",
        "Deportivo Cali": "🔴",
        "Atlético Nacional": "🟢",
        "Estudiantes": "🔴",
        "Gimnasia": "🟢",
        "Cienciano": "🔴",
        "Deportivo Municipal": "🔵"
    };
    return emojis[equipo] || "⚽";
}

// Obtener hora actual en formato HH:mm
function obtenerHoraActual() {
    const ahora = new Date();
    const horas = String(ahora.getHours()).padStart(2, '0');
    const minutos = String(ahora.getMinutes()).padStart(2, '0');
    return `${horas}:${minutos}`;
}

// Convertir hora string a minutos para comparación
function horaAMinutos(hora) {
    const [h, m] = hora.split(':').map(Number);
    return h * 60 + m;
}

// Determinar estado del partido
function obtenerEstadoPartido(horaPartido) {
    const ahora = obtenerHoraActual();
    const minutosActuales = horaAMinutos(ahora);
    const minutosPartido = horaAMinutos(horaPartido);
    
    // Un partido dura aproximadamente 105 minutos (90 + 15 de descanso)
    const duracionPartido = 105;
    
    if (minutosActuales < minutosPartido - 15) {
        return 'proximo'; // Más de 15 minutos antes
    } else if (minutosActuales >= minutosPartido - 15 && minutosActuales <= minutosPartido + duracionPartido) {
        return 'enVivo'; // En vivo (15 min antes hasta final)
    } else {
        return 'finalizado'; // Ya finalizó
    }
}

// Generar partidos del día basándose en la hora actual
function generarPartidosDelDia() {
    const ahora = obtenerHoraActual();
    const horaActual = horaAMinutos(ahora);
    const partidosActivos = [];
    
    // Obtener partidos que están próximos o en vivo (hasta 3 horas después)
    const partidosRelevantes = basePartidos.filter(partido => {
        const horaPartido = horaAMinutos(partido.hora);
        const estado = obtenerEstadoPartido(partido.hora);
        
        // Mostrar partidos que están próximos, en vivo o finalizaron hace menos de 2 horas
        return (estado === 'proximo' || estado === 'enVivo' || 
                (estado === 'finalizado' && horaActual - horaPartido <= 120));
    });
    
    // Agregar algunos partidos aleatorios para simular nuevos partidos
    const horaDelDia = new Date().getHours();
    const cantidadAleatorios = Math.floor(Math.random() * 3); // 0-2 partidos aleatorios
    
    for (let i = 0; i < cantidadAleatorios && i < partidosAleatorios.length; i++) {
        const partidoAleatorio = partidosAleatorios[Math.floor(Math.random() * partidosAleatorios.length)];
        const horaAleatoria = generarHoraAleatoria(horaDelDia);
        const estado = obtenerEstadoPartido(horaAleatoria);
        
        if (estado === 'proximo' || estado === 'enVivo') {
            partidosActivos.push({
                ...partidoAleatorio,
                hora: horaAleatoria,
                id: Date.now() + i
            });
        }
    }
    
    // Combinar y ordenar por hora
    const todosLosPartidos = [...partidosRelevantes, ...partidosActivos];
    todosLosPartidos.sort((a, b) => {
        const estadoA = obtenerEstadoPartido(a.hora);
        const estadoB = obtenerEstadoPartido(b.hora);
        
        // Prioridad: en vivo > próximos > finalizados
        if (estadoA === 'enVivo' && estadoB !== 'enVivo') return -1;
        if (estadoB === 'enVivo' && estadoA !== 'enVivo') return 1;
        
        return horaAMinutos(a.hora) - horaAMinutos(b.hora);
    });
    
    return todosLosPartidos;
}

// Generar hora aleatoria dentro del día
function generarHoraAleatoria(horaActual) {
    const horasDisponibles = [];
    for (let h = horaActual; h < 24; h++) {
        horasDisponibles.push(h);
    }
    
    if (horasDisponibles.length === 0) {
        // Si no hay horas disponibles en el día, usar mañana temprano
        const hora = Math.floor(Math.random() * 3) + 8; // 8-11 AM
        const minuto = Math.floor(Math.random() * 4) * 15; // 0, 15, 30, 45
        return `${String(hora).padStart(2, '0')}:${String(minuto).padStart(2, '0')}`;
    }
    
    const hora = horasDisponibles[Math.floor(Math.random() * horasDisponibles.length)];
    const minutos = [0, 15, 30, 45][Math.floor(Math.random() * 4)];
    return `${String(hora).padStart(2, '0')}:${String(minutos).padStart(2, '0')}`;
}

// Cargar partidos en la página con actualización continua
function cargarPartidos() {
    const partidosGrid = document.getElementById('partidosGrid');
    const actualizacionIndicador = document.getElementById('actualizacionIndicador');
    
    // Mostrar indicador de actualización
    if (actualizacionIndicador) {
        actualizacionIndicador.style.display = 'inline-block';
        setTimeout(() => {
            if (actualizacionIndicador) {
                actualizacionIndicador.style.display = 'none';
            }
        }, 1000);
    }
    
    const partidos = generarPartidosDelDia();
    
    if (partidos.length === 0) {
        partidosGrid.innerHTML = '<div class="loading">No hay partidos programados para hoy</div>';
        return;
    }

    partidosGrid.innerHTML = partidos.map(partido => {
        const estado = obtenerEstadoPartido(partido.hora);
        const estadoClass = `partido-${estado}`;
        const estadoTexto = estado === 'enVivo' ? '🔴 EN VIVO' : 
                           estado === 'proximo' ? '⏰ Próximo' : 
                           '✅ Finalizado';
        const estadoColor = estado === 'enVivo' ? '#e94560' : 
                           estado === 'proximo' ? '#667eea' : 
                           '#6c757d';
        
        // Si está en vivo, mostrar marcador simulado
        const marcador = estado === 'enVivo' ? 
            `${Math.floor(Math.random() * 4)} - ${Math.floor(Math.random() * 4)}` : '';
        
        const canalId = mapeoCanales[partido.canal] || partido.canal.toLowerCase().replace(/\s+/g, '-');
        const nombreCanal = partido.canal;
        
        return `
        <div class="partido-card ${estadoClass}" data-id="${partido.id}" data-canal-id="${canalId}" data-canal-nombre="${nombreCanal}" style="cursor: pointer;">
            <div class="partido-header">
                <span class="partido-liga">${partido.liga}</span>
                <div style="display: flex; flex-direction: column; align-items: flex-end; gap: 0.3rem;">
                    <span class="partido-hora">${partido.hora}</span>
                    <span class="partido-estado" style="font-size: 0.75rem; color: ${estadoColor}; font-weight: 600;">
                        ${estadoTexto}
                    </span>
                    ${marcador ? `<span style="font-size: 0.9rem; font-weight: 700; color: ${estadoColor};">${marcador}</span>` : ''}
                </div>
            </div>
            <div class="partido-equipos">
                <div class="equipo">
                    <div class="equipo-logo">${getEquipoEmoji(partido.equipo1)}</div>
                    <span>${partido.equipo1}</span>
                </div>
                <div class="vs">VS</div>
                <div class="equipo">
                    <div class="equipo-logo">${getEquipoEmoji(partido.equipo2)}</div>
                    <span>${partido.equipo2}</span>
                </div>
            </div>
            <div class="partido-canal">
                <span>📺 ${partido.canal}</span>
            </div>
        </div>
    `;
    }).join('');
    
    // Agregar animación de entrada para nuevos partidos
    const nuevasCards = partidosGrid.querySelectorAll('.partido-card');
    nuevasCards.forEach((card, index) => {
        card.style.animation = 'fadeInUp 0.5s ease forwards';
        card.style.animationDelay = `${index * 0.1}s`;
        
        // Agregar evento click para redirigir al canal
        card.addEventListener('click', () => {
            const canalId = card.getAttribute('data-canal-id');
            const canalNombre = card.getAttribute('data-canal-nombre');
            if (canalId && canalNombre) {
                abrirModalCanal(canalId, canalNombre);
            }
        });
    });
}

// Actualizar partidos cada 30 segundos
let intervaloPartidos;
function iniciarActualizacionPartidos() {
    // Actualizar inmediatamente
    cargarPartidos();
    
    // Actualizar cada 30 segundos
    intervaloPartidos = setInterval(() => {
        cargarPartidos();
        console.log('Partidos actualizados:', new Date().toLocaleTimeString());
    }, 30000); // 30 segundos
    
    // También actualizar cada minuto exacto (para cambiar estados)
    setTimeout(() => {
        setInterval(() => {
            cargarPartidos();
        }, 60000); // Cada minuto
    }, (60 - new Date().getSeconds()) * 1000);
}

// Función para abrir modal de canal
function abrirModalCanal(canalId, canalNombre) {
    const modal = document.getElementById('modalCanal');
    const modalTitle = document.getElementById('modalTitle');
    const playerFrame = document.getElementById('playerFrame');

    modalTitle.textContent = canalNombre;
    
    // Obtener URL real del canal
    const url = canalesUrls[canalId];
    
    if (url) {
        playerFrame.src = url;
    } else {
        modalTitle.textContent = `Canal ${canalNombre} no disponible`;
        playerFrame.src = '';
    }
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Función para cerrar modal
function cerrarModal() {
    const modal = document.getElementById('modalCanal');
    const playerFrame = document.getElementById('playerFrame');
    
    modal.style.display = 'none';
    playerFrame.src = '';
    document.body.style.overflow = 'auto';
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    // Iniciar actualización continua de partidos
    iniciarActualizacionPartidos();
    
    // Iniciar verificación de estado de canales
    iniciarVerificacionCanales();

    // Event listeners para botones de canales
    const botonesCanales = document.querySelectorAll('.btn-ver-canal');
    botonesCanales.forEach(boton => {
        boton.addEventListener('click', (e) => {
            const canalId = boton.getAttribute('data-canal');
            const canalNombre = boton.closest('.canal-card').querySelector('.canal-name').textContent;
            abrirModalCanal(canalId, canalNombre);
        });
    });

    // Event listener para cerrar modal
    const closeModal = document.querySelector('.close-modal');
    closeModal.addEventListener('click', cerrarModal);

    // Cerrar modal al hacer click fuera
    const modal = document.getElementById('modalCanal');
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            cerrarModal();
        }
    });

    // Cerrar modal con ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            cerrarModal();
        }
    });

    // Smooth scroll para navegación
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // Animación al hacer scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observar elementos para animación
    document.querySelectorAll('.canal-card, .partido-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});

// Función para actualizar hora local (ejemplo)
function actualizarHora() {
    const ahora = new Date();
    const horaLocal = ahora.toLocaleTimeString('es-ES', { 
        hour: '2-digit', 
        minute: '2-digit' 
    });
    
    // Aquí podrías actualizar algún elemento de la página con la hora
    console.log('Hora local:', horaLocal);
}

// Actualizar hora cada minuto
setInterval(actualizarHora, 60000);
actualizarHora();

// Limpiar intervalo cuando la página se oculte (optimización)
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        if (intervaloPartidos) {
            clearInterval(intervaloPartidos);
        }
    } else {
        iniciarActualizacionPartidos();
    }
});

// Función para verificar el estado de un canal
async function verificarEstadoCanal(canalId, url) {
    const statusElement = document.querySelector(`[data-canal-id="${canalId}"] .canal-status`);
    
    if (!statusElement) return;
    
    // Mostrar estado "checking" (naranja)
    statusElement.setAttribute('data-status', 'checking');
    
    try {
        // Usar una imagen para verificar si la URL es accesible
        // Esto funciona mejor que fetch debido a restricciones CORS
        const img = new Image();
        
        const checkPromise = new Promise((resolve) => {
            let resolved = false;
            
            img.onload = () => {
                if (!resolved) {
                    resolved = true;
                    statusElement.setAttribute('data-status', 'online');
                    resolve(true);
                }
            };
            
            img.onerror = () => {
                // Si la imagen falla, intentar con fetch en modo no-cors
                fetch(url, {
                    method: 'HEAD',
                    mode: 'no-cors'
                })
                .then(() => {
                    if (!resolved) {
                        resolved = true;
                        statusElement.setAttribute('data-status', 'online');
                        resolve(true);
                    }
                })
                .catch(() => {
                    if (!resolved) {
                        resolved = true;
                        statusElement.setAttribute('data-status', 'offline');
                        resolve(false);
                    }
                });
            };
            
            // Timeout de 4 segundos
            setTimeout(() => {
                if (!resolved) {
                    resolved = true;
                    // Si no hay respuesta, asumir que está online (puede ser solo lento)
                    statusElement.setAttribute('data-status', 'online');
                    resolve(true);
                }
            }, 4000);
        });
        
        // Intentar cargar una imagen pequeña desde el dominio para verificar conectividad
        img.src = url + '?t=' + Date.now();
        
        await checkPromise;
        
    } catch (error) {
        // En caso de error, usar método simple con fetch no-cors
        try {
            await fetch(url, {
                method: 'HEAD',
                mode: 'no-cors'
            });
            statusElement.setAttribute('data-status', 'online');
        } catch (err) {
            statusElement.setAttribute('data-status', 'offline');
        }
    }
}

// Verificar estado de todos los canales
function verificarTodosLosCanales() {
    Object.keys(canalesUrls).forEach(canalId => {
        const url = canalesUrls[canalId];
        if (url) {
            // Agregar un pequeño delay entre verificaciones para no sobrecargar
            setTimeout(() => {
                verificarEstadoCanal(canalId, url);
            }, Object.keys(canalesUrls).indexOf(canalId) * 200);
        }
    });
}

// Verificar canales periódicamente (cada 2 minutos)
let intervaloVerificacionCanales;
function iniciarVerificacionCanales() {
    // Verificar inmediatamente al cargar
    verificarTodosLosCanales();
    
    // Verificar cada 2 minutos
    intervaloVerificacionCanales = setInterval(() => {
        verificarTodosLosCanales();
    }, 120000); // 2 minutos
}

console.log('Fútbol en Vivo - Aplicación cargada correctamente');
console.log('Actualización automática de partidos activada (cada 30 segundos)');
