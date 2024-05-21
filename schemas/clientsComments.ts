import { DocumentTextIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const clientcomments = defineType({
  name: "clientcomments",
  type: "document",
  title: "ClientComments",
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),

        defineField({
          name: "username",
          type: "string",
        }),
     
        defineField({
            name: "userwork",
            type: "string",
          }),
       
   
 


    defineField({
      name: "description",
      description: "Enter comment desc.",
      title: "Description",
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
        subtitle: "ClientComments",
        media: image || DocumentTextIcon,
      };
    },
  },
});
