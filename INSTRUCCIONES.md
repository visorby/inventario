# Sistema de Gestión de Almacenes - Constructora Ríos Herrera

## Descripción General

Se ha desarrollado un **sitio web educativo completamente funcional** para el Sistema de Gestión de Almacenes y Control de Inventarios de la Constructora Ríos Herrera, utilizando:

- **Frontend**: HTML5 + Bootstrap 5 + CSS3 personalizado
- **JavaScript**: Vanilla JS para interactividad
- **Características**: Navegación con anclas, dropdowns, formulario funcional, videos embebidos

---

## Estructura del Proyecto

```
/vercel/share/v0-project/
├── index.html                    # Página principal con blog
├── marco-teorico.html            # Marco Teórico con 7 secciones
├── analisis-estructurado.html    # Análisis Estructurado con anclas
├── orientado-objetos.html        # Conceptos de OOP con acordeones
├── videos.html                   # Galería de 4 videos educativos
├── contactos.html                # Formulario de contactos + mapa
├── styles.css                    # 377 líneas de CSS personalizado
├── public/
│   └── js/
│       └── script.js             # JavaScript para formularios
└── INSTRUCCIONES.md              # Este archivo
```

---

## Características Principales

### 1. Sistema de Anclas (Hash Links)
El sitio incluye navegación avanzada con anclas que funcionan:

**Dentro de la misma página:**
- Haz clic en un elemento del índice lateral para ir directamente a esa sección
- Ejemplo: En Marco Teórico, haz clic en "Propósito del Estudio" y te lleva a `#proposito`

**Entre páginas:**
- Desde el menú dropdown, puedes ir directamente a una sección en otra página
- Ejemplo: Dropdown "Marco Teórico" → "Propósito del Estudio" va a `marco-teorico.html#proposito`

### 2. Paleta de Colores
- **Azul Primario**: #1f3a93 (Encabezados y elementos principales)
- **Naranja Primario**: #ff8c00 (Acentos y botones)
- **Grises**: #333, #f5f5f5 (Texto y fondos)

### 3. Componentes Incluidos
- Navbar sticky con dropdowns
- Hero section con gradiente azul
- Blog cards responsivas
- Índice lateral sticky en páginas internas
- Formulario de contacto funcional
- Footer con 4 columnas
- Videos YouTube embebidos
- Breadcrumb de navegación

---

## Cómo Abrir el Sitio

### Opción 1: Abrir directamente (más simple)
1. Abre el archivo `index.html` con tu navegador
2. ¡Listo! El sitio es completamente funcional

## Páginas Incluidas

| Página | Descripción | Anclas |
|--------|-------------|--------|
| `index.html` | Página de inicio con blog de 3 artículos | N/A |
| `marco-teorico.html` | 7 secciones sobre teoría | `#introduccion`, `#antecedentes`, `#planteamiento`, `#arbol`, `#formulacion`, `#proposito`, `#metodologia` |
| `analisis-estructurado.html` | Análisis del sistema | `#declaracion`, `#diagrama`, `#eventos` |
| `orientado-objetos.html` | Conceptos de OOP | `#definicion`, `#conceptos`, `#principios`, `#ejemplo` |
| `videos.html` | 4 videos educativos | N/A |
| `contactos.html` | Formulario + información | N/A |

---

## Navegación con Anclas

### Todas las Anclas Disponibles

**Desde el dropdown "Marco Teórico":**
```
marco-teorico.html#introduccion
marco-teorico.html#antecedentes
marco-teorico.html#planteamiento
marco-teorico.html#arbol
marco-teorico.html#formulacion
marco-teorico.html#proposito
marco-teorico.html#metodologia
```

**Desde el dropdown "Análisis Estructurado":**
```
analisis-estructurado.html#declaracion
analisis-estructurado.html#diagrama
analisis-estructurado.html#eventos
```

**Dentro de las páginas:**
- En Marco Teórico y Análisis Estructurado hay un **índice lateral** con links internos
- Haz clic en cualquier título para ir directamente a esa sección

---

## Personalización

### Cambiar Colores
Edita `styles.css` líneas 1-6:
```css
:root {
    --primary-blue: #1f3a93;      /* Azul principal */
    --primary-orange: #ff8c00;    /* Naranja principal */
    --dark-gray: #333;
    --light-gray: #f5f5f5;
    --white: #ffffff;
}
```

### Cambiar Contenido de Texto
1. Abre cualquier archivo `.html` con un editor de texto
2. Busca y reemplaza el Lorem Ipsum con tu contenido
3. Guarda el archivo
4. Recarga la página en el navegador

### Cambiar Videos YouTube
En `videos.html`, busca la URL de YouTube y reemplaza el ID:
```html
<!-- Cambiar este ID: dQw4w9WgXcQ -->
<iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" ...></iframe>
```

### Cambiar Logo/Nombre de Empresa
En todos los archivos `.html`, busca:
```html
<a class="navbar-brand fw-bold" href="index.html">
    <span class="text-primary">Ríos</span>
    <span class="text-warning">Herrera</span>
</a>
```

### Reemplazar Imágenes Placeholder
- Busca: `https://via.placeholder.com/`
- Reemplaza con rutas locales: `/images/mi-imagen.jpg`

---

## Formulario de Contactos

El formulario en `contactos.html` incluye:
- Validación HTML5
- Mensaje de confirmación con JavaScript
- Campo de teléfono, email, asunto y mensaje

**Nota:** Actualmente solo valida y muestra un mensaje. Para enviar emails, necesitarás integrar un servicio como:
- Formspree.io
- EmailJS
- Backend propio

---

## Despliegue

### Vercel (Recomendado)
1. Sube el proyecto a GitHub
2. Ve a [vercel.com](https://vercel.com)
3. Conecta tu repositorio
4. ¡Listo! Vercel despliega automáticamente

### Netlify
1. Arrastra la carpeta del proyecto a [netlify.com](https://netlify.com)
2. ¡Tu sitio está online en segundos!

### GitHub Pages
1. Crea un repositorio en GitHub
2. Habilita "GitHub Pages" en Settings
3. Tu sitio estará en `tuusuario.github.io/nombre-repo`

---

## Responsive Design

El sitio es completamente responsivo:
- ✅ Dispositivos móviles (320px+)
- ✅ Tablets (768px+)
- ✅ Desktops (1024px+)
- ✅ Pantallas grandes (1920px+)

Bootstrap 5 maneja automáticamente todos los breakpoints.

---

## Estadísticas del Proyecto

| Métrica | Cantidad |
|---------|----------|
| Archivos HTML | 6 |
| Líneas de HTML | ~1,370 |
| Líneas de CSS | 377 |
| Páginas | 6 |
| Anclas disponibles | 10 |
| Videos embebidos | 4 |

---

## Navegadores Compatibles

- Chrome/Chromium ✅
- Firefox ✅
- Safari ✅
- Edge ✅
- Navegadores móviles modernos ✅

---

## Próximos Pasos Sugeridos

1. Reemplaza todo el Lorem Ipsum con contenido real
2. Agrega tus propias imágenes
3. Personaliza los colores corporativos si es necesario
4. Integra un servicio de emails para el formulario
5. Despliega en Vercel, Netlify o GitHub Pages

---

**Versión**: 2.0  
**Tipo**: HTML5 estático + Bootstrap 5  
**Última actualización**: Enero 2024  
**Licencia**: Gratuito para uso interno de Constructora Ríos Herrera
