import { DocumentTextIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const homeCauseSlider = defineType({
  name: "homeCasesSlider",
  type: "document",
  title: "HomeCasesSlider",
  fields: [
    defineField({
      name: "heading",
      type: "string",
    }),

    defineField({
        name: "title",
        type: "string",
      }),
  
    defineField({
      name: "desc",
      type: "string",
    }),
    defineField
    ({
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
        subtitle: "HomeCasesSlider",
        media: image || DocumentTextIcon,
      };
    },
  },
});