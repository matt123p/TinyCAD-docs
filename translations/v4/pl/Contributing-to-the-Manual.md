---
layout: default
---
# Współtworzenie podręcznika TinyCAD
{: #contributing-to-the-tinycad-manual}

Podręcznik jest publikowany za pomocą GitHub Pages. Jeśli znajdziesz błąd, brakujący krok, niejasny 
zrzut ekranu lub nieaktualne informacje, możesz zaproponować poprawkę za pomocą Pull Requesta (PR).

Ten przewodnik opisuje dwa sposoby pracy:

- **Szybkie poprawki w przeglądarce** (najlepsze do drobnych poprawek tekstu)
- **Edycja lokalna i podgląd** (najlepsze w przypadku większych zmian)

## Zanim zaczniesz
{: #before-you-start}

Potrzebne będą:

- Konto GitHub
- Do edycji lokalnej: Git, Node.js, Ruby i Bundler

Informacje o repozytorium:

- **Repozytorium źródłowe:** `https://github.com/matt123p/TinyCAD-docs`
- **Opublikowana witryna:** wynik publikacji tego repozytorium za pomocą GitHub Pages
- **Folder źródłowy dokumentacji:** `docs/`
- **Strony v4:** `docs/v4/`

## Opcja A: Szybka edycja w GitHubie (bez konfiguracji lokalnej)
{: #option-a-quick-edit-in-github-no-local-setup}

Użyj tej metody do poprawiania literówek, krótkich doprecyzowań lub aktualizacji odnośników.

### 1) Otwórz źródło strony w GitHubie
{: #open-the-page-source-on-github}

1. Przejdź do repozytorium dokumentacji TinyCAD:
   `https://github.com/matt123p/TinyCAD-docs`
2. Przejdź do strony, którą chcesz edytować, w `docs/v4/`.
3. Otwórz plik Markdown (na przykład `Rulers.md`).

### 2) Rozpocznij edycję
{: #start-editing}

1. Kliknij ikonę ołówka (**Edytuj ten plik**).
2. Jeśli pojawi się monit, GitHub pomoże automatycznie utworzyć fork.
3. Wprowadź zmiany w Markdown.

### 3) Zatwierdź zmianę
{: #commit-your-change}

1. Przewiń do sekcji **Commit changes**.
2. Użyj jasnego komunikatu zatwierdzenia, na przykład:
  `docs(v4): clarify ruler units in Rulers`
3. Wybierz **Create a new branch for this commit**.
4. Kliknij **Propose changes**.

### 4) Otwórz Pull Request
{: #open-a-pull-request}

1. Kliknij **Compare & pull request**.
2. Ustaw repozytorium bazowe na `matt123p/TinyCAD-docs` i gałąź bazową na `main`.
3. Wpisz tytuł i opis PR (szablon poniżej).
4. Wyślij PR.


## Opcja B: Edycja lokalna + podgląd (zalecana przy większych zmianach)
{: #option-b-local-edit--preview-recommended-for-bigger-changes}

Użyj tej metody, gdy chcesz edytować wiele plików, sprawdzić odnośniki lub podejrzeć formatowanie.

### 1) Utwórz fork i sklonuj repozytorium
{: #fork-and-clone}

1. Utwórz fork repozytorium `matt123p/TinyCAD-docs` w GitHubie.
2. Sklonuj swój fork:

```bash
git clone https://github.com/<your-username>/TinyCAD-docs.git
cd TinyCAD-docs
```

3. Dodaj zdalne repozytorium nadrzędne:

```bash
git remote add upstream https://github.com/matt123p/TinyCAD-docs.git
```

### 2) Zainstaluj zależności
{: #install-dependencies}

To repozytorium udostępnia skrypty npm, które uruchamiają Bundler + Jekyll:

```bash
npm install
npm run bundle:install
```

### 3) Utwórz gałąź dla swojej zmiany
{: #create-a-branch-for-your-change}

```bash
git checkout -b docs/v4-fix-rulers
```

Pomysły na nazwy gałęzi:

- `docs/fix-typo-...`
- `docs/v4-update-...`
- `docs/add-...`

### 4) Wprowadź zmiany
{: #make-your-edits}

Większość stron widocznych dla użytkowników znajduje się w:

- `docs/v4/*.md` (strony podręcznika v4)
- `docs/v3/*.md` (strony podręcznika v3)
- `docs/_data/navigation.yml` (lewa nawigacja)

Jeśli dodajesz nową stronę, zaktualizuj również nawigację, aby użytkownicy mogli ją znaleźć.

### 5) Wyświetl lokalny podgląd witryny
{: #preview-site-locally}

```bash
npm run serve
```

Następnie otwórz lokalny adres URL wyświetlony w terminalu (zazwyczaj `http://127.0.0.1:4000`).

Sprawdź, czy:

- Struktura nagłówków jest czytelna
- Odnośniki wewnętrzne działają
- Nawigacja zawiera nową/przemianowaną stronę
- Obrazy ładują się prawidłowo

### 6) Zatwierdź i wypchnij zmiany
{: #commit-and-push}

```bash
git add .
git commit -m "docs(v4): improve Rulers instructions"
git push -u origin docs/v4-fix-rulers
```

### 7) Utwórz PR
{: #create-the-pr}

1. Otwórz swój fork w GitHubie.
2. Kliknij **Compare & pull request** dla swojej gałęzi.
3. Wskaż jako cel `matt123p/TinyCAD-docs:main`.
4. Uzupełnij tytuł i opis PR, a następnie go wyślij.

## Lista kontrolna jakości tekstu
{: #writing-quality-checklist}

Przed otwarciem PR szybko sprawdź, czy:

- Zakres jest ograniczony (jeden temat/problem na PR)
- Instrukcje są zgodne z aktualnym działaniem TinyCAD
- Język jest jasny i zwięzły
- Odnośniki prowadzą do właściwych miejsc
- W razie potrzeby strona jest połączona z nawigacją
- Zachowano istniejący styl i terminologię

## Współdzielone zestawy kart przeglądarka/aplikacja desktopowa
{: #reusable-browserdesktop-tabsets}

Gdy strona wymaga odrębnych instrukcji dla TinyCAD w przeglądarce i w aplikacji
desktopowej, użyj współdzielonego komponentu zestawu kart zamiast tworzyć
własne znaczniki dla danej strony.

```md
<div class="manual-tabset" data-tabset="product-mode" data-tabset-label="Choose your TinyCAD product" data-default-tab="Browser" markdown="1">

### Browser

Browser-specific content.

### Desktop App

Desktop-specific content.

</div>
```

Uwagi:

- `data-tabset` to klucz synchronizacji/przechowywania. Użyj tej samej wartości, aby synchronizować wiele
  zestawów kart na tej samej stronie.
- `data-default-tab` ustawia kartę wybraną podczas pierwszej wizyty.
- Utrzymuj ten sam poziom nagłówków kart (`###` w powyższym przykładzie).

## Proponowany szablon PR
{: #suggested-pr-template}

Skopiuj i wklej poniższy tekst do opisu PR:

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

## Aktualizowanie forka
{: #keeping-your-fork-up-to-date}

Jeśli PR pozostaje otwarty przez dłuższy czas, zsynchronizuj swoją gałąź z najnowszą wersją `main`:

```bash
git fetch upstream
git checkout main
git merge upstream/main
git push origin main

git checkout docs/v4-fix-rulers
git merge main
git push
```

## Typowe problemy i rozwiązania
{: #common-issues-and-fixes}

- **PR pokazuje niepowiązane zmiany plików**
  - Utwórz nową gałąź na podstawie zaktualizowanego `main` i wybierz cherry-pick wyłącznie swoich zatwierdzeń.
- **Brakuje elementu nawigacji**
  - Zaktualizuj `docs/_data/navigation.yml` i sprawdź, czy adres URL jest zgodny ze ścieżką permalink strony.
- **Strona wyświetla się nieprawidłowo**
  - Sprawdź poziomy nagłówków, wcięcia list i znaczniki bloków kodu.
- **Odnośnik działa lokalnie, ale nie w Pages**
  - Preferuj odnośniki względne używane w innych miejscach tego repozytorium i zachowaj spójne nazwy stron.

## Po wysłaniu
{: #after-submission}

Opiekunowie mogą poprosić o wprowadzenie zmian. Dodaj kolejne zatwierdzenia do tej samej gałęzi/PR;
PR zaktualizuje się automatycznie. Po zatwierdzeniu i scaleniu zmiany pojawią się
w opublikowanym podręczniku po ponownym zbudowaniu witryny przez GitHub Pages.

Dziękujemy za ulepszanie dokumentacji TinyCAD.

- Wróć do [spisu treści v4](../CONTENTS/)
