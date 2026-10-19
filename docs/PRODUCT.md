# NoriDex — Product Brief

**Status:** Initial planning

## Purpose

Build a fast, offline-first iPad application that helps restaurant employees access accurate information about menu items, ingredients, sauces, allergens, dietary options, and modifications.

## Primary users

Servers and other front-of-house restaurant employees.

## Initial scope

A single restaurant, with no required user accounts or backend.

## MVP features

- Browse menu items organized by category.
- Search dishes, ingredients, and sauces.
- View detailed dish information and photographs.
- Filter menu items by dietary and ingredient information.
- Access all downloaded menu information without an internet connection.

## Technical direction

React, TypeScript, Vite, Tailwind CSS, and local structured menu data. Package the application as a Progressive Web App.

## Key requirements

- Designed primarily for iPad touch interaction.
- Fast and simple enough to use during table service.
- Menu data is available locally after installation.
- Unknown or unverified allergen information must never be presented as confirmed safe.
- Maintain clear separation between menu data, application logic, and UI components.

## Out of scope for V1

- POS integration
- Customer ordering
- Authentication
- Supabase
- Multi-restaurant management
- Manager editing dashboard

## Future direction

Add an easy manager-facing menu editor, data publishing and synchronization, and potentially a Supabase backend supporting multiple restaurants.

## Development goals

Use GitHub Issues, feature branches, pull requests, automated tests, documentation, and Codex-assisted development. Maintain a portfolio-quality repository with clear evidence of the engineering process.

## First milestone

Deliver a working prototype that displays a sample menu, supports search and detailed item views, and functions on an iPad without Wi-Fi after initial installation.
