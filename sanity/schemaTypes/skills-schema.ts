import { defineField, defineType } from 'sanity'

export const skillsType = defineType({
  name: 'skills',
  title: 'Skills & Technologies',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Titel van de skill',
    }),
    defineField({
      name: 'tag',
      type: 'array',
      title: 'Tags',
      of: [{ type: 'string' }]
    }),
  ],
})