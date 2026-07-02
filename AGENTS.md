# Power Test Colombia — AGENTS.md

## Idioma

Todo el sitio está en español: nombres de archivo, contenido HTML, CSS, JS, commits y documentación. Cualquier contenido nuevo debe ir en español.

## Sitio estático — sin build tools

HTML + CSS + JavaScript puro. No hay `package.json`, bundler, framework, tests ni CI/CD. Para previsualizar, abre `index.html` en un navegador.

### Dependencias vía CDN (no empaquetadas)

- Swiper.js (carrusel): `https://unpkg.com/swiper/swiper-bundle.min.js`
- Google Fonts: Lato, Raleway, Roboto

### CRM externo para cotizaciones

Los botones "Pedir Cotización" apuntan a DataCRM:
```
https://app.datacrm.la/datacrm/powertest/index.php?module=WForms&view=PublicLink&uniqueId=MTcxNzgwMDI5Ny42NzM1
```

## Formato de imágenes

Todas las imágenes usan `.webp` (migración reciente completada). No introducir otros formatos.

## Inconsistencia en rutas

Algunos `href`/`src` usan backslashes (`resources\logos\...`), otros forward slashes. Preferir forward slashes al editar.

## `Requerimientos.md`

Documento de requerimientos de negocio en la raíz. Contiene descripciones de productos e instrucciones de agregar/eliminar contenido. Consultarlo antes de hacer cambios de contenido.

## Directorios clave

- `scripts/html/Productos y servicios/` — Subdirectorios: `Testing/`, `Generadores/`, `Agricolas/`, `Construccion/`, `Proyectos/`
- `scripts/CSS/` — Estilos principales + responsivos (Tablets.css, Mobiles.css) + `Sub-pages/`
- `scripts/JavaScript/` — 6 archivos JS para interacciones (menú, swiper, logo, etc.)
- `resources/` — Imágenes en `logos/`, `plantas/`, `imagenes/` (organizadas por producto)

## Páginas vacías

Varias páginas HTML existen pero están vacías (ej. `ProductosyServicio.html`, `Testing.html`). Verificar el tamaño del archivo antes de asumir que tiene contenido.

## Commits

Todos en español, estilo descriptivo. No hay convenciones de ramas (una sola rama principal).
