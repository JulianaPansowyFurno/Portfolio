# Portfolio + CV

La actualización agrega contenido sin quitar los ocho proyectos, favoritos, redes ni intereses personales del portfolio original.

- Mi recorrido: experiencia y formación en tarjetas desplegables, con filtros.
- Habilidades agrupadas, idiomas y forma de trabajar.
- CV imprimible: el botón abre todas las etapas y la hoja de impresión incluye todas las categorías, aunque estén filtradas en pantalla.
- Portada con acceso a proyectos y CV; capturas de los proyectos originales.
- Navegación con hash para recargar rutas en GitHub Pages sin errores 404.

## Datos pendientes de confirmación

Se transcribió el CV provisto: tercer año de UTN y pasantía desde noviembre de 2025 hasta la actualidad. No se inventó empleador, certificación de inglés obtenida ni niveles de habilidad. Se mantuvo LinkedIn del portfolio original porque el PDF repetía la URL de GitHub en ese campo. No se agregó el teléfono personal.

## Desarrollo y publicación

`npm ci`, `npm start`, `npm test -- --watchAll=false --runInBand`.

`npm run build` genera la versión para GitHub Pages bajo `/Portfolio/`. `npm run build:sites` genera la vista privada en la raíz de Sites. La publicación privada no modifica GitHub ni reemplaza el portfolio público.

Para cambiar los datos profesionales: `src/components/Career/careerData.js`; para la presentación y contacto: `src/components/Career/Career.js`.
