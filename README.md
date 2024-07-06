# Guía para Configurar un Subdominio en Namecheap y Vincularlo a una Página de GitHub

## Introducción

Esta guía detalla cómo configurar un subdominio en Namecheap y vincularlo a una página de GitHub desde una nueva cuenta. Asumimos que ya tienes una página principal en GitHub vinculada a tu dominio principal.

## Paso 1: Configurar la Página en GitHub

1. **Crear el Repositorio en GitHub**:
   - Inicia sesión en tu nueva cuenta de GitHub.
   - Crea un nuevo repositorio para tu sitio web. Ejemplo: `mi-sitio-web`.

2. **Agregar Contenido al Repositorio**:
   - Sube los archivos HTML, CSS, JS, etc., necesarios para tu sitio web dentro de este repositorio.

3. **Habilitar GitHub Pages**:
   - Ve a la configuración del repositorio (`Settings`).
   - En la sección "Pages", selecciona la rama que deseas utilizar como fuente de GitHub Pages (por ejemplo, `main` o `gh-pages`).
   - GitHub proporcionará una URL (por ejemplo, `https://usuario.github.io/mi-sitio-web`).

## Paso 2: Configurar el Subdominio en Namecheap

1. **Iniciar Sesión en Namecheap**:
   - Ve a [Namecheap](https://www.namecheap.com/) y accede a tu cuenta.

2. **Acceder a la Gestión del Dominio**:
   - En tu panel de control, ve a "Domain List" en el menú de la izquierda.
   - Encuentra el dominio principal y haz clic en "Manage".

3. **Configurar Subdominio en Advanced DNS**:
   - Ve a la pestaña "Advanced DNS".
   - En la sección "Host Records", haz clic en "Add New Record".

### Configuración del Registro DNS

| Tipo de Registro | Host   | Valor                 | TTL  |
|------------------|--------|-----------------------|------|
| CNAME Record     | blog   | usuario.github.io     | Auto |

- **Host**: El subdominio que deseas crear (ejemplo: `blog` para `blog.tudominio.com`).
- **Value**: La URL proporcionada por GitHub Pages sin el prefijo `https://` (ejemplo: `usuario.github.io`).
- **TTL**: Tiempo de vida del registro, puedes dejarlo en "Auto".

4. **Guardar los Cambios**:
   - Haz clic en el ícono de guardar (generalmente un disco o un botón que dice "Save Changes").

## Paso 3: Configurar el Subdominio en GitHub

1. **Crear un Archivo CNAME en el Repositorio**:
   - En el repositorio de GitHub, crea un archivo llamado `CNAME` en la raíz del repositorio.
   - Dentro del archivo `CNAME`, escribe el subdominio completo (ejemplo: `blog.tudominio.com`).

2. **Guardar y Subir el Archivo**:
   - Guarda el archivo `CNAME` y súbelo a tu repositorio.
   - Esto le dice a GitHub Pages que tu sitio se servirá desde el subdominio especificado.

## Verificar la Configuración

1. **Propagación de DNS**:
   - Ten en cuenta que los cambios en los registros DNS pueden tardar entre unos minutos y 48 horas en propagarse.

2. **Acceder al Subdominio**:
   - Después de la propagación, intenta acceder a tu subdominio (ejemplo: `blog.tudominio.com`) para asegurarte de que redirige correctamente a tu página de GitHub.

## Resumen de Configuración

### Namecheap

- **Host Record**:
  - **Host**: `blog`
  - **Type**: `CNAME Record`
  - **Value**: `usuario.github.io`
  - **TTL**: Auto

### GitHub Pages

- **Archivo `CNAME`**:
  - Contenido: `blog.tudominio.com`

## Conclusión

Siguiendo estos pasos detallados, podrás configurar correctamente un subdominio en Namecheap y vincularlo a una página de GitHub desde una nueva cuenta, permitiendo que tu sitio sea accesible desde el subdominio especificado
