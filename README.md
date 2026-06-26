# Mechanical Engineering Portfolio

Source for my personal portfolio site, live at **[shahradzomorrodi.com](https://shahradzomorrodi.com)**.

I'm a mechanical engineering student at UC San Diego (B.S. expected March 2027). I build systems where mechanical hardware meets rigorous analysis: CFD-validated aerodynamics, thermal characterization, flight-ready eVTOL avionics, and competition robotics. This site is where I document that work in depth, with the numbers, the methods, and what actually happened when I tested it.

## What's in here

The site is a small content-driven React app. Each project page follows the same structure on purpose: **what** I built, **how** it works, and the **measured results**, because a portfolio that only shows renders is not engineering. Highlights:

- **Leading-edge slat aerodynamics** — Hele-Shaw flow visualization on a NACA 8612 airfoil, validated against ANSYS Fluent CFD. The slat delayed stall from ~12 to 20 degrees and raised peak lift ~30%.
- **Pin-fin heat sink characterization** — convective heat transfer across free, forced-laminar, and forced-turbulent regimes. Fit Nu = 0.220 Re^0.678 and verified it against a Fusion 360 thermal model.
- **eVTOL wildfire-response quadcopter** — led electrical integration (6S propulsion pack, four 80A ESCs, Pixhawk 4, hand-soldered harness) to 49.6 N thrust at a 1.26 thrust-to-weight ratio.
- **Escapement pendulum clock** — compared a point-mass timing model (21% error) against a full rigid-body model (0.96% error), then traced the residual to acrylic-thickness tolerance.
- **Competition robot** — a geared claw, a 6.75:1 compound arm, and a friction drivetrain, designed end to end and scored at double the point target.

All project content lives in one typed file, [`src/data/projects.ts`](src/data/projects.ts), so adding or editing a project is a data change, not a layout change.

## Stack and why

- **TanStack Start** (React 19, file-based routing) on **Vite**. I wanted real routes and static-friendly rendering for SEO without pulling in a heavier framework than a portfolio needs.
- **Tailwind CSS v4** with **shadcn/ui** (Radix primitives) for accessible components I can own and restyle, rather than a component library I'd have to fight.
- **TypeScript** throughout, with the project data strongly typed so a malformed project fails at build time, not in the browser.
- **Bun** as the package manager and runtime.

## Running it locally

```bash
bun install
bun run dev      # local dev server
bun run build    # production build
bun run preview  # serve the production build
bun run lint     # eslint
```

## Deployment

`main` is production. Pushing to `main` auto-deploys to Vercel. Getting the build output right took real iteration (the commit history shows the back-and-forth with Nitro and Vercel's Build Output API); it now ships as a clean static deploy.

## Contact

Shahrad Zomorrodi
[shahradzomorrodi.com](https://shahradzomorrodi.com) · [LinkedIn](https://www.linkedin.com/in/shahradzomorrodi) · shahradzomorrodi@gmail.com
