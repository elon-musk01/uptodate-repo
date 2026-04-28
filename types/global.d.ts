// Global TypeScript type definitions for the portfolio

import type { Metadata } from 'next';

// Extend Next.js Metadata interface with custom portfolio metadata
declare module 'next' {
  interface Metadata {
    portfolio?: {
      author: string;
      siteUrl: string;
      social?: {
        github: string;
        linkedin: string;
        email: string;
      };
    };
  }
}

// Custom types for portfolio-specific components
export interface Skill {
  name: string;
  level: number;
}

export interface SkillCategory {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  skills: Skill[];
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  color: string;
}

export interface Service {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  color: string;
  bgColor: string;
}

export interface Stat {
  number: string;
  label: string;
  description: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactFormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

// Custom cursor state
export type CursorState = {
  x: number;
  y: number;
  isHovering: boolean;
};

// Navigation link type
export interface NavLink {
  href: string;
  label: string;
}

// Page metadata type
export interface PageMetadata {
  title: string;
  description: string;
  keywords?: string[];
}
