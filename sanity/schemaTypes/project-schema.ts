import { defineField, defineType } from 'sanity'

export const projectType = defineType({
  name: 'project',
  title: 'Projecten',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Titel van het project',
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Beschrijving',
    }),
    defineField({
        name: 'link',
        type: 'url',
        title: 'GitHub Link',
        validation: (Rule) => Rule.uri({
            scheme: ['http', 'https']
        })
    }),
    defineField({
      name: 'cloudinaryUrl',
      type: 'url',
      title: 'Cloudinary Image URL',
      description: 'Plak hier de URL van je afbeelding op Cloudinary'
    }),
  ],
})