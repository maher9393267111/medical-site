import { DocumentTextIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const AboutSteps = defineType({
  name: "aboutSteps",
  type: "document",
  title: "AboutSteps",
  fields: [
    defineField({
      name: "heading",
      type: "string",
    }),


    defineField({
        name: "desc",
        type: "string",
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
        subtitle: "AboutSteps",
        media: image || DocumentTextIcon,
      };
    },
  },
});
