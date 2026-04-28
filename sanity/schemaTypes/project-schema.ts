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
      name: 'links',
      type: 'array',
      title: 'Project Links',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', type: 'string', title: 'Label (bijv. GitHub, Live Demo)' },
            { name: 'url', type: 'url', title: 'URL' }
          ]
        }
      ]
    }),
    defineField({
      name: 'cloudinaryUrl',
      type: 'url',
      title: 'Cloudinary Image URL',
      description: 'Plak hier de URL van je afbeelding op Cloudinary'
    }),
    defineField({
      name: 'tags',
      type: 'array',
      title: 'Tags',
      of: [{ type: 'string' }]
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'challenge',
      type: 'text',
      title: 'Challenge',
      description: 'Vul hier de uitgebreide beschrijving van de uitdaging in die je hebt gekregen voor dit project.',
      rows: 5,
    }),
    defineField({
      name: 'concept',
      type: 'text',
      title: 'Concept',
      description: 'Vul hier het concept in van het project.',
      rows: 5,
    }),
    defineField({
      name: 'solution',
      type: 'text',
      title: 'Solution',
      description: 'Vul hier de uitgebreide beschrijving in van hoe je de uitdaging hebt aangepakt en opgelost.',
      rows: 5,
    }),
    defineField({
      name: 'technicalText',
      type: 'text',
      title: 'Technical Breakdown',
      description: 'Leg hier de architectuur, gebruikte libraries en technische uitdagingen uit.',
      rows: 7,
    }),
    defineField({
      name: 'gallery',
      type: 'array',
      title: 'Project Gallery',
      of: [{ type: 'image' }],
      description: 'Voeg extra screenshots of ontwerpen toe die op de detailpagina verschijnen.',
    }),
  ],
})