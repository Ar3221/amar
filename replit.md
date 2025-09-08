# Amar Splints Manufacturing Website

## Overview

This is a modern full-stack web application for Amar Splints Private Limited, a safety matches and wooden match splints manufacturer based in Uttar Pradesh, India. The application serves as a comprehensive business website featuring product showcases, company information, manufacturing process details, quality certifications, and a contact inquiry system. Built with React/TypeScript frontend and Express.js backend, it provides an engaging user experience with smooth animations, responsive design, and professional business presentation.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The client-side application is built using **React 18** with **TypeScript** and follows a component-based architecture. The UI leverages **shadcn/ui** components built on top of **Radix UI** primitives for consistent, accessible design patterns. **Tailwind CSS** provides utility-first styling with a custom design system featuring brand-specific colors and typography. The application uses **Wouter** for lightweight client-side routing and **TanStack Query** for server state management and API caching.

The frontend is organized into logical sections:
- **Layout components**: Header with navigation and Footer
- **Page sections**: Hero, About, Products, Manufacturing, Quality, and Contact
- **UI components**: Reusable shadcn/ui components for forms, dialogs, cards, etc.
- **Hooks**: Custom hooks for mobile detection, scroll animations, and toast notifications

### Backend Architecture  
The server follows a **RESTful API** pattern using **Express.js** with TypeScript. The architecture separates concerns through:
- **Route handlers** for API endpoints (`/api/contact`)
- **Storage abstraction layer** with interface-based design allowing for pluggable data persistence
- **Middleware** for request logging, JSON parsing, and error handling
- **Development tooling** with Vite integration for hot module replacement

Currently implements in-memory storage with the flexibility to swap to database persistence later.

### Data Storage
The application uses **Drizzle ORM** with **PostgreSQL** schema definitions for type-safe database operations. The schema defines:
- **Users table**: Basic user authentication structure
- **Contact inquiries table**: Customer inquiry form submissions with fields for name, company, email, phone, product interest, and message

The storage layer implements an interface pattern (`IStorage`) with a current in-memory implementation (`MemStorage`) that can be easily replaced with database-backed storage.

### Form Handling & Validation
Contact forms use **React Hook Form** with **Zod schema validation** for type-safe form processing. The validation schemas are shared between frontend and backend using the `@shared/schema` module, ensuring consistency across the application stack.

### Development & Build System
The application uses **Vite** as the build tool with:
- **Hot Module Replacement** for development
- **TypeScript compilation** with strict type checking  
- **Path aliases** for clean imports (`@/`, `@shared/`)
- **PostCSS** with Tailwind CSS processing
- **ESBuild** for optimized production builds

## External Dependencies

### UI and Styling
- **@radix-ui/***: Accessible UI primitives for complex components (dialogs, dropdowns, navigation, etc.)
- **tailwindcss**: Utility-first CSS framework for responsive design
- **class-variance-authority**: Type-safe component variant management
- **lucide-react**: Modern icon library for consistent iconography

### Database and Backend
- **drizzle-orm**: Type-safe SQL query builder and ORM
- **@neondatabase/serverless**: PostgreSQL database driver optimized for serverless environments
- **connect-pg-simple**: PostgreSQL session store for Express sessions

### Form Management
- **react-hook-form**: Performant form library with minimal re-renders
- **@hookform/resolvers**: Form validation resolvers
- **zod**: TypeScript-first schema declaration and validation library

### State Management and Data Fetching
- **@tanstack/react-query**: Server state management with caching, background updates, and optimistic updates
- **wouter**: Lightweight client-side routing library

### Development Tools
- **vite**: Fast build tool with HMR support
- **typescript**: Static type checking
- **@replit/vite-plugin-runtime-error-modal**: Development error overlay
- **tsx**: TypeScript execution environment for server development

### Date and Utilities
- **date-fns**: Modern date utility library
- **clsx**: Conditional className utility
- **nanoid**: URL-safe unique string ID generator