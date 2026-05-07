# Guía de Optimización de Imágenes y Videos - GMT

## 🚀 Cambios Implementados

Se han realizado las siguientes optimizaciones para mejorar el rendimiento:

### 1. **Componentes de Lazy Loading**
- ✅ `LazyImage.svelte`: Carga imágenes bajo demanda usando Intersection Observer
- ✅ `LazyVideo.svelte`: Carga videos solo cuando están visibles en la pantalla

### 2. **Google Fonts Optimizadas**
- ✅ Consolidado 3 imports en 1 solo
- ✅ Reducidas variantes de peso a solo las necesarias (400, 500, 600)
- ✅ Incluido `display=swap` para evitar FOIT

### 3. **Configuración de Vite**
- ✅ Minificación con Terser
- ✅ Code-splitting automático
- ✅ CSS separado por componente
- ✅ Deshabilitado sourcemap en producción

---

## 📦 Próximas Optimizaciones (IMPORTANTE)

### Comprimir Imágenes
Las imágenes aún no están comprimidas. **Necesitas hacer esto manualmente** para máximo rendimiento:

#### Opción 1: Usar ImageMagick (Recomendado)
```bash
# Instalar ImageMagick
# Windows: https://imagemagick.org/script/download.php
# Mac: brew install imagemagick
# Linux: sudo apt-get install imagemagick

# Comprimir todas las imágenes JPG a 80% calidad
mogrify -quality 80 src/lib/assets/images/*.jpg

# Crear versiones WebP (más modernas y pequeñas)
mogrify -format webp -quality 75 src/lib/assets/images/*.jpg
```

#### Opción 2: Usar FFmpeg para Videos
```bash
# Instalar FFmpeg
# Windows: https://ffmpeg.org/download.html
# Mac: brew install ffmpeg
# Linux: sudo apt-get install ffmpeg

# Comprimir videos H.264 (compatibilidad máxima)
ffmpeg -i interface.mp4 -c:v libx264 -crf 28 -preset fast interface-optimized.mp4

# Usar VP9 para mejor compresión (pero menos compatible)
ffmpeg -i interface.mp4 -c:v libvpx-vp9 -crf 30 -b:v 0 interface-vp9.mp4
```

#### Opción 3: Herramienta Online (Más Fácil)
- **TinyPNG** (https://tinypng.com): Excelente para PNG/JPG, sube hasta 100 imágenes
- **Squoosh** (https://squoosh.app): Google, soporta múltiples formatos
- **CloudConvert** (https://cloudconvert.com): Convierte a WebP, HEIC, etc.

### Características del Componente LazyImage

```svelte
<LazyImage 
  src={imagePath}
  alt="Descripción"
  priority={true}  {/* Para imágenes above-the-fold */}
  class="mi-clase"
  width={300}
  height={200}
/>
```

- **Lazy Loading**: Solo carga cuando entra en viewport (+ 50px margen)
- **Blur Placeholder**: Muestra versión borrosa mientras carga
- **Fallback**: Usa `<img>` nativo si el navegador no soporta IntersectionObserver

### Características del Componente LazyVideo

```svelte
<LazyVideo 
  src={videoPath}
  autoplay={true}
  loop={true}
  muted={true}
  playsinline={true}
  class="mi-clase"
/>
```

- **Lazy Loading**: Video se carga solo cuando es visible
- **Preload**: Descarga metadata pero no el archivo completo
- **Autoplay Seguro**: Maneja restricciones del navegador

---

## 📊 Impacto Estimado

### Antes
- Tamaño inicial: ~5-8 MB (si todas las imágenes sin comprimir)
- Videos sin comprimir: +10-20 MB
- Tiempo primer contenful paint (FCP): 2-3s

### Después (Con Optimizaciones)
- Tamaño inicial: ~1-2 MB (solo visible)
- Lazy loading: reduce carga inicial 60-70%
- FCP: 0.5-1s
- Imágenes comprimidas: 50-70% menos tamaño
- Videos H.264: 40-50% menos tamaño

---

## 🔍 Verificar Mejoras

### Chrome DevTools
1. Abre DevTools (F12)
2. Ve a **Network** tab
3. Recarga la página
4. Filtra por:
   - `Type: img` - Ver peso de imágenes
   - `Type: media` - Ver peso de videos
5. Compara:
   - Tamaño inicial (First Load)
   - Cuando scrolleas (Lazy loading)

### Lighthouse
1. DevTools → **Lighthouse** tab
2. Click "Analyze page load"
3. Busca métricas:
   - **LCP** (Largest Contentful Paint): Debe ser < 2.5s
   - **CLS** (Cumulative Layout Shift): Debe ser < 0.1
   - **FID** (First Input Delay): Debe ser < 100ms

---

## 🛠️ Próximos Pasos

1. **Comprimir imágenes** (ver sección arriba)
2. **Generar WebP**: Crea versiones WebP para navegadores modernos
3. **Preload crítico**: Añade `<link rel="preload">` para fuentes
4. **Service Worker**: Implementar para cache offline
5. **Image optimization plugins**: Usar `vite-plugin-image-compression`

---

## 📚 Recursos

- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [WebPageTest](https://www.webpagetest.org/)
- [MDN: Lazy Loading](https://developer.mozilla.org/en-US/docs/Web/Performance/Lazy_loading)
- [Vite Performance Guide](https://vitejs.dev/guide/ssr.html#performance-guide)
