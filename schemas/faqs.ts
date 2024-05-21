import { DocumentTextIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const Faqs = defineType({
  name: "faqs",
  type: "document",
  title: "Faqs",
  fields: [
    defineField({
      name: "heading",
      type: "string",
    }),


    {
        name: "list",
        type: "array",
        title: "List",
        of: [
          {
            type: "object",
            fields: [
              {
                name: "answer",
                type: "string",
                title: "Answer",
              },

              {
                name: "question",
                type: "string",
                title: "Question",
              },
            ],
  
            // show icon instead of icon name
          },
        ],
      },


  
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
        subtitle: "Faqs",
        media: image || DocumentTextIcon,
      };
    },
  },
});
