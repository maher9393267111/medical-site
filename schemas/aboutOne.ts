import { DocumentTextIcon } from "@sanity/icons";
import { defineField, defineType, defineArrayMember } from "sanity";
import { preview } from "sanity-plugin-icon-picker";

export const AboutOne = defineType({
  name: "aboutOne",
  type: "document",
  title: "AboutOne",
  fields: [
    defineField({
      name: "heading",
      type: "string",
    }),

    defineField({
      name: "headingar",
      type: "string",
    }),


    // defineField({
    //   name: "title",
    //   type: "string",
    // }),




    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "heading",
        maxLength: 25,
      },
    }),





    defineField({
      name: "desc",
      description: "Enter a short snippet for the blog...",
      title: "Description",
      type: "string",
    }),


    
    defineField({
      name: "descar",
      description: "Enter a short snippet for the arabic desc...",
      title: "DescriptionArabic",
      type: "string",
    }),


   

 
    // arra

    // {
    //   name: "achivments",
    //   type: "array",
    //   title: "Achivments",
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
    //           name: "number",
    //           type: "string",
    //           title: "Number",
    //         },
    //         {
    //           name: "numbertitle",
    //           type: "string",
    //           title: "NumberTitle",
    //         },
            
    // ({ name: "Icon", type: "inlineSvg" }),



    //       ],

    //     },
    //   ],
    // },

    // {
    //   name: "features",
    //   type: "array",
    //   title: "Features",
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

    //         ({
    //             name: "image",
    //             type: "image",
    //             options: { hotspot: true },
    //             fields: [
    //               defineField({
    //                 name: "alt",
    //                 type: "string",
    //                 title: "Alternative text",
    //               }),
    //             ],
    //           }),
    //       ],

    //       // show icon instead of icon name
    //     },
    //   ],
    // },


  




 
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
        subtitle: "AboutOne",
        media: image || DocumentTextIcon,
      };
    },
  },
});
