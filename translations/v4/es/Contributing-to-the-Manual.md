---
layout: default
---
# Contribuir al manual de TinyCAD
{: #contributing-to-the-tinycad-manual}

Este manual se publica con GitHub Pages. Si encuentra un error, falta algún paso, una captura de pantalla no es clara o la información está desactualizada, puede proponer una corrección mediante una solicitud de incorporación de cambios (Pull Request, PR).

Esta guía explica dos flujos de trabajo:

- **Ediciones rápidas en el navegador** (ideal para corregir textos breves)
- **Edición y vista previa local** (ideal para cambios más amplios)

## Antes de empezar
{: #before-you-start}

Necesitará:

- Una cuenta de GitHub
- Para editar localmente: Git, Node.js, Ruby y Bundler

Detalles del repositorio:

- **Repositorio de origen:** `https://github.com/matt123p/TinyCAD-docs`
- **Sitio publicado:** salida de GitHub Pages de este repositorio
- **Carpeta de origen de la documentación:** `docs/`
- **Páginas de v4:** `docs/v4/`

## Opción A: Edición rápida en GitHub (sin configuración local)
{: #option-a-quick-edit-in-github-no-local-setup}

Use este método para corregir errores tipográficos, aclarar algo brevemente o actualizar enlaces.

### 1) Abra en GitHub el código fuente de la página
{: #open-the-page-source-on-github}

1. Vaya al repositorio de documentación de TinyCAD:
   `https://github.com/matt123p/TinyCAD-docs`
2. Busque la página que desea editar en `docs/v4/`.
3. Abra el archivo Markdown (por ejemplo, `Rulers.md`).

### 2) Empiece a editar
{: #start-editing}

1. Haga clic en el icono del lápiz (**Edit this file**).
2. Si se le solicita, GitHub le ayudará a crear automáticamente una bifurcación (fork).
3. Realice los cambios en Markdown.

### 3) Confirme el cambio
{: #commit-your-change}

1. Desplácese hasta **Commit changes**.
2. Use un mensaje de confirmación claro, por ejemplo:
  `docs(v4): clarify ruler units in Rulers`
3. Elija **Create a new branch for this commit**.
4. Haga clic en **Propose changes**.

### 4) Abra una solicitud de incorporación de cambios
{: #open-a-pull-request}

1. Haga clic en **Compare & pull request**.
2. Establezca el repositorio base en `matt123p/TinyCAD-docs` y la rama base en `main`.
3. Complete el título y la descripción de la PR (consulte la plantilla a continuación).
4. Envíe la PR.


## Opción B: Edición local + vista previa (recomendada para cambios más amplios)
{: #option-b-local-edit--preview-recommended-for-bigger-changes}

Use este método cuando necesite editar varios archivos, comprobar enlaces o previsualizar el formato.

### 1) Bifurque y clone
{: #fork-and-clone}

1. Bifurque `matt123p/TinyCAD-docs` en GitHub.
2. Clone su bifurcación:

```bash
git clone https://github.com/<your-username>/TinyCAD-docs.git
cd TinyCAD-docs
```

3. Añada el repositorio remoto original:

```bash
git remote add upstream https://github.com/matt123p/TinyCAD-docs.git
```

### 2) Instale las dependencias
{: #install-dependencies}

Este repositorio incluye scripts de npm que ejecutan Bundler + Jekyll por usted:

```bash
npm install
npm run bundle:install
```

### 3) Cree una rama para el cambio
{: #create-a-branch-for-your-change}

```bash
git checkout -b docs/v4-fix-rulers
```

Ideas para nombrar la rama:

- `docs/fix-typo-...`
- `docs/v4-update-...`
- `docs/add-...`

### 4) Realice las ediciones
{: #make-your-edits}

La mayoría de las páginas visibles para los usuarios están en:

- `docs/v4/*.md` (páginas del manual de v4)
- `docs/v3/*.md` (páginas del manual de v3)
- `docs/_data/navigation.yml` (navegación lateral)

Si añade una página nueva, actualice también la navegación para que los usuarios puedan encontrarla.

### 5) Previsualice el sitio localmente
{: #preview-site-locally}

```bash
npm run serve
```

A continuación, abra la URL local que aparece en el terminal (normalmente, `http://127.0.0.1:4000`).

Compruebe que:

- La estructura de los encabezados sea legible
- Los enlaces internos funcionen
- La navegación incluya la página nueva o renombrada
- Las imágenes se carguen correctamente

### 6) Confirme y envíe los cambios
{: #commit-and-push}

```bash
git add .
git commit -m "docs(v4): improve Rulers instructions"
git push -u origin docs/v4-fix-rulers
```

### 7) Cree la PR
{: #create-the-pr}

1. Abra su bifurcación en GitHub.
2. Haga clic en **Compare & pull request** para su rama.
3. Seleccione como destino `matt123p/TinyCAD-docs:main`.
4. Complete el título y la descripción de la PR y envíela.

## Lista de comprobación de calidad de redacción
{: #writing-quality-checklist}

Antes de abrir una PR, compruebe rápidamente que:

- El alcance esté bien definido (un tema o problema por PR)
- Las instrucciones sean precisas y correspondan al comportamiento actual de TinyCAD
- El lenguaje sea claro y conciso
- Los destinos de los enlaces sean válidos
- La página esté enlazada desde la navegación cuando sea necesario
- Se mantengan el estilo y la terminología existentes

## Conjuntos de pestañas reutilizables para navegador y escritorio
{: #reusable-browserdesktop-tabsets}

Cuando una página requiera instrucciones distintas para TinyCAD en el navegador y en
la aplicación de escritorio, use el componente compartido de conjunto de pestañas en vez de crear
marcado específico para esa página.

```md
<div class="manual-tabset" data-tabset="product-mode" data-tabset-label="Choose your TinyCAD product" data-default-tab="Browser" markdown="1">

### Browser

Browser-specific content.

### Desktop App

Desktop-specific content.

</div>
```

Notas:

- `data-tabset` es la clave de sincronización/almacenamiento. Reutilice el mismo valor para mantener sincronizados varios
  conjuntos de pestañas de una misma página.
- `data-default-tab` establece la pestaña seleccionada en la primera visita.
- Mantenga todos los encabezados de pestaña en el mismo nivel (`###` en el ejemplo anterior).

## Plantilla sugerida para la PR
{: #suggested-pr-template}

Copie y pegue esto en la descripción de su PR:

```md
## Summary
-

## What changed
-

## Why
-

## Validation
- [ ] Previewed locally with `npm run serve`
- [ ] Checked navigation and links
- [ ] Confirmed formatting on rendered page

## Screenshots (if relevant)
-
```

## Mantenga su bifurcación actualizada
{: #keeping-your-fork-up-to-date}

Si su PR permanece abierta durante un tiempo, sincronice su rama con la versión más reciente de `main`:

```bash
git fetch upstream
git checkout main
git merge upstream/main
git push origin main

git checkout docs/v4-fix-rulers
git merge main
git push
```

## Problemas habituales y soluciones
{: #common-issues-and-fixes}

- **La PR muestra cambios en archivos que no están relacionados**
  - Cree una rama nueva a partir de `main` actualizado y aplique con cherry-pick únicamente sus confirmaciones.
- **Falta un elemento de navegación**
  - Actualice `docs/_data/navigation.yml` y asegúrese de que la URL coincida con la ruta del enlace permanente de la página.
- **La página se muestra de forma extraña**
  - Compruebe los niveles de los encabezados, la sangría de las listas y los marcadores de bloques de código cercados.
- **El enlace funciona localmente, pero no en Pages**
  - Prefiera los enlaces relativos usados en otras partes de este repositorio y mantenga coherentes los nombres de las páginas.

## Después del envío
{: #after-submission}

Es posible que los responsables del mantenimiento soliciten cambios. Añada confirmaciones de seguimiento a la misma rama/PR;
la PR se actualizará automáticamente. Una vez aprobados y fusionados, sus cambios aparecerán
en el manual publicado cuando GitHub Pages vuelva a generarlo.

Gracias por mejorar la documentación de TinyCAD.

- Volver al [contenido de v4](../CONTENTS/)
