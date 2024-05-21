import {defineField, defineType} from 'sanity'
import { DocumentTextIcon } from "@sanity/icons";
export default defineType({
  name: 'casestudy',
  title: 'CaseStudy',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 33,
      },
    }),



    defineField({
        name: 'location',
        title: 'Location',
        type: 'string',
      }),
      defineField({
        name: 'client',
        title: 'Client',
        type: 'string',
      }),

      defineField({
        name: 'industry',
        title: 'Industry',
        type: 'string',
      }),

      defineField({
        name: 'stack',
        title: 'Stack',
        type: 'string',
      }),


    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),


    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: {type: 'category'},
    }),



 


    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),

    defineField({
      name: 'description',
      description: 'Enter a short snippet for the blog...',
      title: 'Description',
      type: 'string',
    }),


  ],

  preview: {
    select: {
      title: "title",
      image: "image",
    },
    prepare({ title, image }) {
      return {
        title: title || "Untitled",
        subtitle: "CaseStudy",
        media: image || DocumentTextIcon,
      };
    },
  },
})
