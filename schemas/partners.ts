import { DocumentTextIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const Partners = defineType({
  name: "partners",
  type: "document",
  title: "Partners",
  fields: [
    defineField({
      name: "heading",
      type: "string",
    }),



    defineField({
        name: "work",
        type: "string",
      }),
  


    defineField({
      name: "image",
      title: "image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),


    
    // defineField({
    //     name: "imageblack",
    //     title: "imageBlack",
    //     type: "image",
    //     options: {
    //       hotspot: true,
    //     },
    //   }),
  



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
        subtitle: "Partners",
        media: image || DocumentTextIcon,
      };
    },
  },
});
