import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),

    defineField({
      name: 'titlear',
      title: 'TitleAr',
      type: 'string',
    }),

    
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),


    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type: 'author'},
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
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    }),



    // defineField({
    //   name: 'tags',
    //   title: 'Tags',
    //   type: 'array',
    //   of: [{type: 'reference', to: {type: 'tag'}}],
    // }),


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
      name: 'bodyar',
      title: 'BodyAr',
      type: 'blockContent',
    }),




    // defineField({
    //   name: 'description',
    //   description: 'Enter a short snippet for the blog...',
    //   title: 'Description',
    //   type: 'string',
    // }),

    // defineField({
    //   name: 'description2',
    //   description: 'Enter a short snippet for the blog desc2...',
    //   title: 'Description2',
    //   type: 'string',
    // }),


  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
