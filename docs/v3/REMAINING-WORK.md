# Remaining work

This checklist tracks what is still needed to complete the manual migration for GitHub Pages.

## Content tasks left to do

- [ ] Review all pages for wording, grammar, and consistency (legacy text was migrated with minimal rewriting).
- [ ] Normalize heading levels in long reference pages:
  - `Menu-reference.md`
  - `Toolbar-reference.md`
- [ ] Add "Last updated" metadata (or front matter) to each page if required by the final site theme.
- [ ] Decide whether to keep legacy file names or rename to simpler slugs (and add redirects if renamed).
- [ ] Add cross-links between related topics (for example, drawing ↔ netlist export ↔ FAQ package attributes).
- [ ] Validate all external links (GitHub, forum, Node.js, NSIS, etc.) and update stale URLs.

## GitHub Pages publishing tasks

- [ ] Choose site framework: plain GitHub Pages, Jekyll, MkDocs, or Docusaurus.
- [ ] Add navigation config to match [CONTENTS](CONTENTS.md).
- [ ] Add search and a 404 page.
- [ ] Add contribution guidance for docs updates.

## Image migration status

- Existing image assets copied from legacy manual: `docs/images/*`
- Referenced images in current pages: 18
- Unused copied image: `image10 (1).png`

## New images to create

The following new screenshots/diagrams are recommended to modernize the manual and improve clarity.

1. **Modern welcome screenshot**
   - Page: `index.md`
   - Purpose: show current TinyCAD UI on startup.

2. **Updated toolbar overview image map**
   - Page: `Toolbar-reference.md`
   - Purpose: one labeled image mapping toolbar groups to names.

3. **Menu reference overview screenshot**
   - Page: `Menu-reference.md`
   - Purpose: single screenshot with menu bar and highlighted top-level menus.

4. **Multi-sheet connectivity example**
   - Page: `Using-multiple-sheet-schematics.md`
   - Purpose: diagram showing hierarchical blocks and net flow between sheets.

5. **SPICE setup walkthrough screenshots**
   - Page: `Using-SPICE-with-TinyCAD.md`
   - Purpose: configure simulation + run results flow.

6. **VHDL export workflow screenshot**
   - Page: `Using-VHDL-with-TinyCAD.md`
   - Purpose: demonstrate setup and output locations.

7. **Build prerequisites screenshot set**
   - Pages: `Tools-required-to-build.md`, `How-to-build-TinyCAD.md`
   - Purpose: Visual Studio workload selection and successful build output.

8. **FAQ visual examples**
   - Page: `FAQ.md`
   - Purpose: visual aid for common issues (duplicate symbols, package attributes, pin numbering).