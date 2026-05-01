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
      name: 'projectImage',
      type: 'cloudinary.asset',
      title: 'Project Image (Cloudinary)',
      description: 'Kies direct een afbeelding uit je Cloudinary mediabibliotheek',
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
      name: 'year',
      type: 'number',
      title: 'jaar gemaakt project',
      description: 'Zet hier het jaar dat je aan dit project hebt gewerkt. Dit veld is optioneel, maar kan helpen bij het ordenen van je projecten op je portfolio.',
    }),
    defineField({
      name: 'gallery',
      type: 'array',
      title: 'Project Gallery',
      of: [{ type: 'cloudinary.asset' }],
      description: 'Voeg extra screenshots of ontwerpen toe die op de detailpagina verschijnen.',
    }),
  ],
})