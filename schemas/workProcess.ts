import { DocumentTextIcon } from "@sanity/icons";
import { defineField, defineType, defineArrayMember } from "sanity";
import { preview } from "sanity-plugin-icon-picker";

export const workprocess = defineType({
  name: "workprocess",
  type: "document",
  title: "WorkProcess",
  fields: [
    defineField({
      name: "heading",
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

    



    defineField({
      name: "desc",
      description: "Enter a short snippet for the blog...",
      title: "Description",
      type: "string",
    }),

    defineField({ name: "sidebarIcon", type: "inlineSvg" }),

    // arra

    {
      name: "list",
      type: "array",
      title: "List",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "title",
              type: "string",
              title: "Title",
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
        subtitle: "workprocess",
        media: image || DocumentTextIcon,
      };
    },
  },
});
