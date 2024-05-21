import { DocumentTextIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const homeSectionOneFeatures = defineType({
  name: "homeOneFeatures",
  type: "object",
  title: "homeOneFeatures",
  fields: [
    defineField({
      name: "heading",
      type: "string",
    }),
  

    defineField({
        name: "desc",
        type: "string",
      }),
  
      
      defineField({
        name: "type",
        type: "string",
      }),
    


  
    defineField({
      name: "image",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          type: "string",
          title: "Alternative text",
        }),
      ],
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
        subtitle: "homeOneFeatures",
        media: image || DocumentTextIcon,
      };
    },
  },
});