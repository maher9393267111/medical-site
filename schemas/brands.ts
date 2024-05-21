import { DocumentTextIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const Brands = defineType({
  name: "brands",
  type: "document",
  title: "Brands",
  fields: [
    defineField({
      name: "heading",
      type: "string",
    }),
  
    // defineField
    // ({
    //   name: "image",
    //   type: "image",
    //   options: { hotspot: true },
    //   fields: [
    //     defineField({
    //       name: "alt",
    //       type: "string",
    //       title: "Alternative text",
    //     }),
    //   ],
    // }),


defineField({
      name: 'images',
      type: 'array',
      title: 'Images'
    
      ,
      of: [{ type: "image" }],
      options: {
        layout: 'grid',
      },
    }),


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
        subtitle: "Brands",
        media: image || DocumentTextIcon,
      };
    },
  },
});