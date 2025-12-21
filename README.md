# Portafolio Personal

Un portafolio web moderno y responsivo desarrollado con React y TypeScript, diseñado para mostrar mis habilidades como Analista de Sistemas y Desarrollador Full Stack.

## Características

- **Diseño Responsivo**: Optimizado para dispositivos móviles, tablets y desktop
- **Modo Oscuro/Claro**: Alternancia entre temas con persistencia en localStorage
- **Internacionalización**: Soporte para español e inglés con i18next
- **Animaciones Suaves**: Implementadas con Framer Motion
- **Navegación SPA**: Routing con React Router DOM
- **Gestión de Proyectos**: Filtros y búsqueda de proyectos por categoría y tecnología
- **Formularios Interactivos**: Validación con React Hook Form y Yup

## Tecnologías Utilizadas

### Frontend
- **React 19** - Biblioteca principal para la interfaz de usuario
- **TypeScript** - Tipado estático para mayor robustez
- **Vite** - Herramienta de construcción rápida
- **Tailwind CSS** - Framework de estilos utilitarios
- **Framer Motion** - Animaciones y transiciones
- **React Router DOM** - Navegación entre páginas
- **React Hook Form** - Gestión de formularios
- **Yup** - Validación de esquemas

### Internacionalización y Contextos
- **i18next** - Gestión de traducciones
- **React i18next** - Integración con React
- **Context API** - Gestión de estado global (tema y lenguaje)

### UI/UX
- **Lucide React** - Iconos modernos
- **Swiper** - Carruseles interactivos

### Desarrollo y Calidad
- **ESLint** - Linting de código
- **Prettier** - Formateo automático
- **Husky** - Git hooks
- **Lint-staged** - Linting en staged files
- **Vitest** - Testing framework
- **Testing Library** - Utilidades de testing

## Instalación

1. **Clona el repositorio:**
   ```bash
   git clone https://github.com/mero02/portfolio.git
   cd portfolio
   ```

2. **Instala las dependencias:**
   ```bash
   npm install
   ```

3. **Inicia el servidor de desarrollo:**
   ```bash
   npm run dev
   ```

4. **Abre tu navegador en** `http://localhost:3000`

## Despliegue

### GitHub Pages

Este proyecto está configurado para desplegarse en GitHub Pages. Para desplegar:

1. **Construye el proyecto:**
   ```bash
   npm run build
   ```

2. **Despliega en GitHub Pages** (si usas GitHub Actions o manualmente):
   - Sube el contenido de la carpeta `dist` a la rama `gh-pages`
   - O configura GitHub Actions para automatizar el despliegue

El proyecto está configurado con `base: '/portfolio/'` en `vite.config.ts` para desplegarse en `https://tu-usuario.github.io/portfolio/`.

## Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Vista previa de la build de producción
- `npm run lint` - Ejecuta ESLint
- `npm run lint:fix` - Corrige automáticamente errores de linting
- `npm run format` - Formatea el código con Prettier
- `npm run test` - Ejecuta los tests con Vitest

## Estructura del Proyecto

```
portfolio/
├── public/
│   ├── locales/
│   │   ├── en.json          # Traducciones en inglés
│   │   └── es.json          # Traducciones en español
│   └── index.html
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Footer.tsx   # Pie de página
│   │   │   ├── Header.tsx   # Cabecera con navegación
│   │   │   └── Layout.tsx   # Layout principal
│   │   └── ui/
│   │       ├── ProjectCard.tsx    # Tarjeta de proyecto
│   │       ├── ProjectModal.tsx   # Modal de detalles de proyecto
│   │       └── ThemeToggle.tsx    # Alternador de tema
│   ├── contexts/
│   │   ├── LanguageContext.tsx    # Contexto de idioma
│   │   └── ThemeContext.tsx       # Contexto de tema
│   ├── data/
│   │   └── projects.ts            # Datos de proyectos
│   ├── i18n/
│   │   └── config.ts              # Configuración de i18n
│   ├── pages/
│   │   ├── About.tsx              # Página "Acerca de"
│   │   ├── Contact.tsx            # Página de contacto
│   │   ├── Home.tsx               # Página de inicio
│   │   ├── Projects.tsx           # Página de proyectos
│   │   └── Skills.tsx             # Página de habilidades
│   ├── types/
│   │   └── index.ts               # Definiciones de tipos TypeScript
│   ├── App.css                    # Estilos globales
│   ├── App.tsx                    # Componente principal
│   ├── index.css                  # Estilos base
│   └── main.tsx                   # Punto de entrada
├── package.json
├── tailwind.config.js             # Configuración de Tailwind CSS
├── tsconfig.json                  # Configuración de TypeScript
├── vite.config.ts                 # Configuración de Vite
└── README.md
```

## Temas y Personalización

El portafolio incluye dos temas principales:

- **Tema Claro**: Colores azules con fondo blanco
- **Tema Oscuro**: Colores rojos con fondo negro

Los colores están definidos en `tailwind.config.js` y pueden ser fácilmente personalizados.

## Internacionalización

Soporte completo para español e inglés. Las traducciones se almacenan en archivos JSON en `public/locales/`. El idioma se guarda en localStorage y se detecta automáticamente.

## Páginas

- **Inicio**: Presentación personal con animaciones
- **Acerca de**: Información personal y experiencia profesional
- **Habilidades**: Tecnologías y competencias
- **Proyectos**: Portafolio de proyectos con filtros y búsqueda
- **Contacto**: Formulario de contacto

## Licencia

Este proyecto está bajo la Licencia ISC.

## Contacto

**Mauro G. San Pedro**
- Email: [mero2sp@gmail.com]
- LinkedIn: [www.linkedin.com/in/mauro-san-pedro]
- GitHub: [https://github.com/mero02]
