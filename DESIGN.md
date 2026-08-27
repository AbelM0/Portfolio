# Design System: Abel Mulat Portfolio

## 1. Visual Theme and Atmosphere

A dark developer portfolio with the precision of an engineering log and the warmth of a personal profile. The interface should feel focused, technical, and dependable rather than theatrical or cyberpunk.

- **Theme:** Deep dark mode only
- **Visual language:** Terminal-inspired labels, editorial sans-serif headlines, thin structural borders, and sharp rectangular surfaces
- **Density:** Balanced at 5/10. Enough information for technical readers without becoming a dashboard
- **Variance:** Controlled asymmetry at 6/10. Use split layouts and offset columns while keeping content easy to scan
- **Motion:** Restrained at 4/10. Motion communicates hierarchy and interaction only
- **Shape system:** Sharp corners throughout. Do not introduce rounded cards, pills, or floating capsules
- **Surface behavior:** Flat and structural. Use borders and tonal shifts instead of shadows

The page should read as one coherent portfolio: Hero, status strip, Field Log, Working Set, Project Log, and Contact.

## 2. Color Palette and Roles

Use this palette across the entire project. Acid green is the only accent color.

- **Terminal Canvas** (`#0B0D0C`) - Primary page background and deepest neutral
- **Section Surface** (`#0E110E`) - Alternate dark section and footer background
- **Panel Surface** (`#101310`) - Cards, status panels, and image frames
- **Structural Border** (`#30352F`) - Standard 1px dividers and card outlines
- **Strong Border** (`#394038`) - Major section boundaries and timeline rules
- **Control Border** (`#4B5249`) - Interactive outlines and disabled controls
- **Primary Ink** (`#F0F3EF`) - Headlines and highest-emphasis text
- **Body Ink** (`#D8DDD8`) - Primary body and control text
- **Secondary Ink** (`#929A90`) - Descriptions and supporting copy
- **Muted Ink** (`#899087`) - Metadata, captions, and secondary labels
- **Dim Ink** (`#697067`) - Disabled states and low-priority information
- **Signal Green** (`#B7F34A`) - The single accent for active links, status indicators, timeline nodes, CTA fills, focus rings, and selection

### Color Rules

- Signal Green is the only highlight color.
- Orange, amber, red-orange, purple, blue-neon, and multicolor gradients are banned.
- Never use pure black `#000000`.
- Do not apply glow effects to Signal Green.
- Maintain readable contrast: Primary Ink for headings, Body Ink for essential copy, and muted colors only for secondary information.
- Section variation must stay within the same dark green-neutral family.

## 3. Typography Rules

Use a two-family hierarchy.

- **Display and body:** Geist Sans or the project sans-serif stack
- **Technical metadata:** Geist Mono or the project monospace stack
- **Display scale:** Use responsive `clamp()` sizing with tight tracking between `-0.035em` and `-0.078em`
- **Section headings:** 3rem to 6rem, semibold, compact leading
- **Card headings:** 1.25rem to 2.75rem, medium or semibold
- **Body copy:** 0.9375rem to 1.125rem with relaxed line-height between 1.6 and 1.75
- **Terminal labels:** 0.625rem to 0.75rem in monospace, with restrained tracking
- **Line length:** Keep narrative text below 65 characters per line when practical

Do not use serif fonts, gradient text, excessively wide letter spacing, or all-caps body paragraphs. Terminal syntax such as `$ whoami`, `$ git log --career`, and `$ cat stack.txt` is reserved for real section context.

## 4. Layout Principles

- Center content inside a maximum width of 82rem to 84rem.
- Use 1rem mobile gutters and 1.5rem gutters from the small breakpoint upward.
- Prefer CSS Grid for multi-column structures.
- Hero layout: large name-led content on the left and a compact `STATUS.JSON` panel on the right.
- Status strip: three compact information columns separated by structural borders.
- Field Log: 18rem heading column paired with a vertical timeline.
- Working Set: 18rem heading column paired with a two-column card grid.
- Project Log: large media frame paired with detailed project content.
- Contact: full-width introduction, three information cards, then primary and secondary actions.
- Major sections use 6rem to 8rem vertical spacing.
- Multi-column layouts collapse to one column below 768px.
- Interactive controls must provide a minimum 44px touch target.
- Never use `h-screen`; use dynamic viewport minimum heights when a viewport-based section is required.
- Prevent horizontal scrolling at every breakpoint.

## 5. Component Styling

### Navigation

- Maximum height: 72px
- Use a bottom border instead of a shadow
- Brand prompt uses Signal Green monospace text
- Navigation labels are small, uppercase, and muted until hover
- Contact control uses a sharp outline with a Signal Green hover state

### Status Panel

- Sharp rectangular panel using Panel Surface and Structural Border
- Monospace key-value layout
- Signal Green is limited to the live status indicator and boolean availability
- Social links remain compact and text-led

### Timeline

- Use one vertical Strong Border line
- Timeline nodes are small square Signal Green markers
- Dates use monospace Signal Green
- Titles use sans-serif Primary Ink
- Supporting descriptions use Secondary Ink

### Working Set Cards

- Sharp cards with Panel Surface
- A 2px Signal Green left rule identifies each category
- Categories cover Languages, Applied AI, Frontend, Backend, and Tools
- The Tools card includes Git, GitHub, Docker, Vercel, and Postman
- No shadows and no nested card containers
- Collapse from two columns to one on mobile

### Project Cards

- Use a fixed, responsive media frame with `object-contain`
- Project screenshots remain close to full brightness and must not be heavily dimmed
- Live-site and GitHub controls sit at the media frame's top-right
- Public links use bordered active controls; unavailable links use Dim Ink and a disabled cursor
- Project text follows this order: year/status, title, description, private status when applicable, build highlight, stack
- AWCSA uses an explicit placeholder and clearly states that the private project is currently being tested

### Contact Cards

- Three equal information cards are allowed here because each represents a distinct contact channel
- Use Panel Surface, Structural Border, sharp corners, and generous padding
- Icons use Signal Green with no colored icon tiles
- Primary email action uses Signal Green fill and Terminal Canvas text
- Secondary unavailable actions use Control Border and Dim Ink
- Active feedback is a 1px downward translation

## 6. Motion and Interaction

Use Motion from `motion/react`.

- Standard reveal: opacity 0 to 1 and translateY 20px to 0
- Duration: approximately 650ms
- Easing: `[0.22, 1, 0.36, 1]`
- List stagger: 40ms to 80ms between related items
- Hero text may enter horizontally or vertically to establish reading order
- Hover changes should use color, opacity, or a subtle image transition
- Animate only `transform` and `opacity`
- Respect `prefers-reduced-motion` through `useReducedMotion`
- No infinite marquees, bouncing prompts, glowing pulses, cursor effects, or decorative motion loops

## 7. Content and Voice

- Write in direct first person.
- Lead with concrete work, contribution, and technical responsibility.
- Prefer plain language over inflated marketing copy.
- Keep terminal language functional, not decorative.
- Do not invent metrics, employers, deployment status, or project claims.
- Private work must be labeled honestly.
- Never copy another person's contact information.

## 8. Responsive Behavior

- Hero changes from a split grid to stacked content.
- Status columns stack with horizontal dividers.
- Field Log and Working Set heading columns stack above their content.
- Project media appears above project copy.
- Contact cards stack vertically.
- Action buttons become full-width on narrow screens.
- Display typography must scale without clipping or producing horizontal overflow.
- Images preserve their complete interface using contained fitting.

## 9. Accessibility

- Maintain WCAG AA contrast for body text and controls.
- Every icon-only link requires a descriptive accessible label and title.
- Disabled controls must expose `aria-disabled="true"`.
- Links opening a new tab use `rel="noreferrer"`.
- Focus states use a visible Signal Green outline.
- Semantic heading order must remain logical.
- Alternative text should describe the project interface, not repeat the filename.

## 10. Banned Patterns

- No orange or warm highlight colors
- No gradients
- No purple or blue-neon AI styling
- No pure black
- No glow effects
- No glassmorphism
- No rounded cards or pill buttons
- No generic SaaS feature grids
- No overlapping text and imagery
- No fake terminal output or meaningless system jargon
- No excessive badges or metadata
- No custom cursors
- No heavy image dimming
- No em dashes
- No pure CSS files beyond the Tailwind import
- No styling outside Tailwind utility classes
