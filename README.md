# AURA // Cartagena Headwear

![Status](https://img.shields.io/badge/Estado-Desarrollo-cyan?style=for-the-badge)
![Tech](https://img.shields.io/badge/React-Tailwind-slate?style=for-the-badge&logo=react)

**AURA** es una landing page de concepto para una boutique de gorras premium ubicada en el corazón de Cartagena, Colombia. Este proyecto fusiona la identidad tropical del Caribe con una estética **Web3 Minimalista**, utilizando diseño "Dark Mode", tipografías monoespaciadas y elementos visuales de vanguardia para crear una experiencia de usuario inmersiva.

---

## ⚡ Características Principales

*   **Estética Web3 / Cyberpunk Sutil:** Uso de paletas oscuras (`slate-950`), acentos cian/violeta, efectos de desenfoque (glassmorphism) y detalles "glitch" en interacciones.
*   **Diseño Totalmente Responsivo:** Adaptado para móviles, tablets y escritorio, con un menú de navegación dinámico.
*   **Navegación Fluida:** Scroll suave entre secciones (Hero, Colección, Manifiesto, Ubicación).
*   **Componentes Reutilizables:** Arquitectura modular con componentes como `Button`, `ProductCard` y `Navbar`.
*   **Interacciones Modernas:** Animaciones sutiles en hover, transiciones de opacidad y efectos de escala para mejorar la UX.

## 🛠️ Stack Tecnológico

Este proyecto ha sido construido utilizando tecnologías modernas de desarrollo frontend:

*   **[React 18](https://reactjs.org/)**: Biblioteca principal para la interfaz de usuario.
*   **[Tailwind CSS](https://tailwindcss.com/)**: Framework de utilidad para el estilizado rápido y consistente.
*   **[Lucide React](https://lucide.dev/)**: Colección de iconos vectoriales ligeros y consistentes.
*   **TypeScript**: (Opcional/Implícito) Estructura tipada para `Product` y `NavItems`.

## 📂 Estructura del Proyecto

```bash
/
├── components/          # Componentes de UI reutilizables
│   ├── Button.tsx       # Botones con efectos Web3
│   ├── Footer.tsx       # Pie de página
│   ├── Hero.tsx         # Sección principal con impacto visual
│   ├── InfoSection.tsx  # Secciones de "Manifiesto" y "Ubicación"
│   ├── Navbar.tsx       # Navegación fija con efecto glass
│   ├── ProductCard.tsx  # Tarjeta individual de producto
│   └── ProductGrid.tsx  # Grid de la colección
├── types.ts             # Definiciones de tipos TypeScript
├── App.tsx              # Orquestador principal
├── index.html           # Punto de entrada (con CDN de Tailwind)
└── index.tsx            # Punto de montaje de React
```

## 🚀 Instalación y Uso

Este proyecto está diseñado para ejecutarse en un entorno estándar de React. Si estás clonando este repositorio:

1.  **Instalar dependencias:**
    ```bash
    npm install
    # o
    yarn install
    ```

2.  **Iniciar el servidor de desarrollo:**
    ```bash
    npm start
    # o
    yarn start
    ```

3.  **Construir para producción:**
    ```bash
    npm run build
    ```

> **Nota:** El proyecto utiliza actualmente Tailwind vía CDN en el `index.html` para prototipado rápido. Para producción, se recomienda configurar Tailwind como dependencia de PostCSS.

## 🎨 Personalización

### Paleta de Colores
La identidad visual se define en la configuración de Tailwind dentro de `index.html`:

*   **Fondo:** `slate-950` / `#0f172a`
*   **Acento Principal:** `cyan-400` / `#06b6d4`
*   **Acento Secundario:** `violet-500` / `#8b5cf6`

### Tipografía
*   **Sans:** Inter (Cuerpo y títulos generales).
*   **Mono:** Fira Code (Detalles técnicos, precios, etiquetas).

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Siéntete libre de usarlo como base para tus propios proyectos de e-commerce o portafolios.

---
*Diseñado con ❤️ y código en Cartagena.*
