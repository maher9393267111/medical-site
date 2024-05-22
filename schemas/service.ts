import { DocumentTextIcon } from "@sanity/icons";
import { defineField, defineType, defineArrayMember } from "sanity";
import { preview } from "sanity-plugin-icon-picker";

export const Service = defineType({
  name: "service",
  type: "document",
  title: "Service",
  fields: [
    defineField({
      name: "heading",
      type: "string",
    }),


    defineField({
      name: "headingar",
      type: "string",
    }),



    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "heading",
        maxLength: 25,
      },
    }),

    // defineField({
    //   name: "heading2",
    //   type: "string",
    // }),



    // defineField({
    //   name: "title",
    //   type: "string",
    // }),



    defineField({
      name: "desc",
      description: "Enter a short snippet for the desc...",
      title: "Description",
      type: "string",
    }),

    defineField({
      name: "descar",
      description: "Enter a short snippet for the arabic desc...",
      title: "DescArabic",
      type: "string",
    }),

    // defineField({ name: "sidebarIcon", type: "inlineSvg" }),

    // defineField({
    //   name: "icon",
    //   type: "string",
    // }),






    // arra

    // {
    //   name: "list",
    //   type: "array",
    //   title: "List",
    //   of: [
    //     {
    //       type: "object",
    //       fields: [
    //         {
    //           name: "title",
    //           type: "string",
    //           title: "Title",
    //         },
    //       ],

         
    //     },
    //   ],
    // },



    // {
    //   name: "accordion",
    //   type: "array",
    //   title: "Accordion",
    //   of: [
    //     {
    //       type: "object",
    //       fields: [
    //         {
    //           name: "question",
    //           type: "string",
    //           title: "Question",
    //         },

    //         {
    //           name: "answer",
    //           type: "string",
    //           title: "Answer",
    //         },
    //       ],

    //       // show icon instead of icon name
    //     },
    //   ],
    // },

    //steps

    // {
    //   name: "steps",
    //   type: "array",
    //   title: "Steps",
    //   of: [
    //     {
    //       type: "object",
    //       fields: [
    //         {
    //           name: "title",
    //           type: "string",
    //           title: "Title",
    //         },

    //         {
    //           name: "desc",
    //           type: "string",
    //           title: "Desc",
    //         },
    //       ],

    //       // show icon instead of icon name
    //     },
    //   ],
    // },

    defineField({
      name: "image1",
      title: "Image1",
      type: "image",
      options: {
        hotspot: true,
      },
    }),

    // defineField({
    //   name: "image2",
    //   title: "Image2",
    //   type: "image",
    //   options: {
    //     hotspot: true,
    //   },
    // }),
  ],
  icon: DocumentTextIcon,
  preview: {
    select: {
      title: "heading",
      image: "image",
    },
    prepare({ title, image }) {
      return {
        title: title || "Untitled",
        subtitle: "service",
        media: image || DocumentTextIcon,
      };
    },
  },
});
