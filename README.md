# poke-api

Proyecto demo: cliente web que consume la API de Pokémon usando Web Components y Vite.

## Descripción

Aplicación frontend ligera que muestra una lista de Pokémon y una página de detalle para cada uno. Está construida con Web Components (Lit), Bulma para estilos y usa `axios` para llamadas HTTP.

## Tecnologías

- Vite (dev/build)
- Lit / Web Components
- Axios
- Bulma

## Estructura del proyecto

- `index.html` - punto de entrada
- `package.json` - scripts y dependencias
- `src/`
  - `index.js` - inicialización
  - `index.css` - estilos globales
  - `my-element.js` - componente base
  - `assets/` - imágenes/recursos
  - `components/`
    - `main-footer.js`
    - `main-header.js`
    - `poke-desc.js`
  - `layout/`
    - `main-layout.js`
  - `pages/`
    - `list-page.js`
    - `detail-page.js`
  - `service/`
    - `poke-service.js` - lógica de consumo de la API


## Instalación

Clonar el repositorio e instalar dependencias:

```bash
npm install
```

## Desarrollo (hot-reload)

Arrancar servidor de desarrollo (Vite):

```bash
npm run dev
```

Abre la aplicación en `http://localhost:5173` (o el puerto que Vite muestre).

## Construir para producción

```bash
npm run build
```

Previsualizar build:

```bash
npm run preview
```

## Uso

- La lista de Pokémon se muestra en la página principal.
- Haz clic en un elemento para ver su página de detalle.

## Contribuir

1. Crear una rama feature: `git checkout -b feat/nueva-funcionalidad`
2. Hacer cambios y commitear
3. Abrir pull request

## Notas

- Los scripts disponibles están en `package.json`: `dev`, `build`, `preview`.
- Si prefieres servir el proyecto sin Vite, puedes abrir `index.html` en un servidor estático, pero Vite es recomendado para desarrollo.

## Licencia

Proyecto sin licencia explícita (ajusta según convenga).
