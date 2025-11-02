# ⚽ Pelota Libre - Aplicación de Fútbol en Vivo

Aplicación web moderna para ver canales de fútbol en vivo, inspirada en Pelota Libre (pelota-libre.pe).

## 🚀 Características

- **Canales Deportivos**: Acceso a múltiples canales deportivos en vivo
  - Tyc Sports, Tnt Sports, ESPN (Premium, 1, 2, 3)
  - Fox Sports (1, 2, 3)
  - Win Sports, DSports, DSports2, DSports+
  - Liga1Max, GOLPERU, Movistar

- **Agenda de Partidos**: Visualización de partidos del día con:
  - Horarios locales
  - Información de equipos
  - Canal de transmisión

- **Ligas y Competiciones**:
  - Copa Libertadores y Copa Sudamericana
  - Champions League y Europa League
  - Ligas de Argentina, Perú, Brasil, Chile, Colombia

- **Diseño Responsive**: Optimizado para dispositivos móviles, tablets y desktop

- **Interfaz Moderna**: Diseño atractivo con gradientes y animaciones suaves

## 📋 Requisitos

No se requieren dependencias adicionales. La aplicación es pura HTML, CSS y JavaScript vanilla.

## 🛠️ Instalación y Uso

1. Abre el archivo `index.html` en tu navegador web
2. O si prefieres usar un servidor local:

```bash
# Usando Python 3
python -m http.server 8000

# Usando Node.js (con http-server instalado)
npx http-server

# Usando PHP
php -S localhost:8000
```

Luego visita `http://localhost:8000` en tu navegador.

## 📁 Estructura del Proyecto

```
pelota-libre-app/
├── index.html      # Página principal
├── styles.css      # Estilos de la aplicación
├── script.js       # Funcionalidad JavaScript
└── README.md       # Este archivo
```

## 🎨 Personalización

### Agregar Canales

Edita el archivo `index.html` y agrega nuevas tarjetas de canal en la sección `.canales-grid`:

```html
<div class="canal-card">
    <div class="canal-logo">📺</div>
    <h3 class="canal-name">Nuevo Canal</h3>
    <p class="canal-description">Descripción del canal.</p>
    <button class="btn-ver-canal" data-canal="nuevo-canal">Ver Canal</button>
</div>
```

Luego agrega la URL en `script.js`:

```javascript
const canalesUrls = {
    // ... otros canales
    "nuevo-canal": "https://url-del-stream.com"
};
```

### Modificar Partidos

Edita el array `partidosEjemplo` en `script.js` para agregar o modificar partidos.

## 🔧 Notas Importantes

⚠️ **URLs de Streaming**: 
Las URLs de los canales en `script.js` son placeholders. Para que la aplicación funcione completamente, necesitarás:

1. Obtener URLs reales de streaming para cada canal
2. Actualizar el objeto `canalesUrls` en `script.js` con las URLs válidas

⚠️ **Consideraciones Legales**:
Asegúrate de tener los permisos necesarios para transmitir o enlazar contenido de estos canales. Esta aplicación es solo una interfaz y no proporciona el contenido de streaming directamente.

## 🌐 Compatibilidad

- ✅ Chrome/Edge (recomendado)
- ✅ Firefox
- ✅ Safari
- ✅ Opera
- ✅ Navegadores móviles modernos

## 📱 Responsive Design

La aplicación se adapta automáticamente a diferentes tamaños de pantalla:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (< 768px)

## 🔮 Mejoras Futuras

- [ ] Integración con API de partidos en tiempo real
- [ ] Sistema de favoritos
- [ ] Notificaciones de partidos
- [ ] Chat en vivo durante partidos
- [ ] Sistema de búsqueda
- [ ] Modo oscuro/claro
- [ ] PWA (Progressive Web App)

## 📝 Licencia

Este proyecto es para fines educativos y de demostración.

## 👨‍💻 Desarrollo

Desarrollado con HTML5, CSS3 y JavaScript vanilla (ES6+).

---

⚽ **Pelota Libre TV 2025** - Fútbol en Vivo HD
