import { defineField, defineType } from 'sanity'

export const aboutType = defineType({
  name: 'about',
  title: 'About Me',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Name',
    }),
    defineField({
      name: 'subtitle',
      type: 'string',
      title: 'Subtitle',
    }),
    defineField({ name: 'bio', type: 'text', title: 'Biografie' }),
    defineField({
      name: 'aboutImage',
      type: 'cloudinary.asset',
      title: 'About Image (Cloudinary)',
      description: 'Kies direct een afbeelding uit je Cloudinary mediabibliotheek',
    }),
  ],
})