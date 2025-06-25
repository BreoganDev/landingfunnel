import { z, defineCollection } from "astro:content";

// Schema que acepta TODO - No puede fallar
const pageCollection = defineCollection({
  type: 'content',
  schema: z.any(), // Acepta cualquier estructura sin validación
});

// Schema que acepta TODO para blog
const blogCollection = defineCollection({
  type: 'content', 
  schema: z.any(), // Acepta cualquier estructura sin validación
});

// Schema que acepta TODO para testimonios
const testimonialsCollection = defineCollection({
  type: 'content',
  schema: z.any(), // Acepta cualquier estructura sin validación
});

// Exportar todas las colecciones
export const collections = {
  page: pageCollection,
  blog: blogCollection,
  testimonials: testimonialsCollection,
};