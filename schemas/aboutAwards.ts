import { DocumentTextIcon } from "@sanity/icons";
import { defineField, defineType, defineArrayMember } from "sanity";
import { preview } from "sanity-plugin-icon-picker";

export const AboutAwards = defineType({
  name: "aboutAwards",
  type: "document",
  title: "AboutAwards",
  fields: [
    defineField({
      name: "heading",
      type: "string",
    }),

    defineField({
      name: "title",
      type: "string",
    }),



    // arra

    {
      name: "awardslist",
      type: "array",
      title: "AwardsList",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "title",
              type: "string",
              title: "Title",
            },

            {
              name: "time",
              type: "string",
              title: "Time",
            },

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
        subtitle: "AboutAwards",
        media: image || DocumentTextIcon,
      };
    },
  },
});
