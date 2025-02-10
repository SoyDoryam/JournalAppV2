# JournalApp 📓

## Descripción
Este proyecto es una aplicación de diario que permite a los usuarios crear y gestionar notas de manera sencilla y eficiente. La aplicación está estructurada con componentes reutilizables y un diseño modular para facilitar su mantenimiento y ampliación.

## Estructura del Proyecto

La estructura de archivos de la aplicación es la siguiente:


### Descripción de las carpetas y archivos principales:

- **index.js**: El punto de entrada principal para la aplicación.
- **JournalApp.jsx**: El componente raíz de la aplicación.
- **style.css**: Archivos de estilo globales para la aplicación.

#### Carpeta `auth`
- **layout/AuthLayout.jsx**: Define el diseño para las páginas de autenticación (inicio de sesión y registro).
- **pages**: Contiene las páginas de autenticación: LoginPage.jsx y RegisterPage.jsx.
- **routes/AuthRoutes.jsx**: Define las rutas relacionadas con la autenticación.

#### Carpeta `journal`
- **components**: Componentes reutilizables como el `Navbar`, `SideBar`, y `ImageGallery`.
- **layout/JournalLayout.jsx**: Define el diseño general de la parte del diario.
- **pages/JournalPage.jsx**: Página principal del diario donde se muestran las notas.
- **routes/JournalRoutes.jsx**: Define las rutas principales del diario.
- **views**: Contiene vistas específicas, como `NoteView.jsx` y `NothingSelectedView.jsx`.

#### Carpeta `router`
- **AppRouter.jsx**: Define las rutas de la aplicación.

#### Carpeta `theme`
- **AppTheme.jsx**: Define la configuración del tema de la aplicación.
- **purpleTheme.js**: Archivo que define el tema morado de la aplicación.
- **index.js**: Importa y configura el tema principal de la aplicación.
