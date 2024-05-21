import { DocumentTextIcon } from "@sanity/icons";
import { defineField, defineType, defineArrayMember } from "sanity";
import { preview } from "sanity-plugin-icon-picker";

export const AboutDiscover = defineType({
  name: "aboutDiscover",
  type: "document",
  title: "AboutDiscover",
  fields: [
    defineField({
      name: "heading",
      type: "string",
    }),

    defineField({
      name: "title",
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
    })

,




    defineField({
      name: "desc",
      description: "Enter a short snippet for the desc...",
      title: "Description",
      type: "string",
    }),


    defineField({
        name: "subdesc",
        description: "Enter a short snippet for subdesc...",
        title: "SubDescription",
        type: "string",
      }),
  

   

 
    // arra

    {
      name: "achivments",
      type: "array",
      title: "Achivments",
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
                name: "number",
                type: "string",
                title: "Number",
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
        subtitle: "AboutDiscover",
        media: image || DocumentTextIcon,
      };
    },
  },
});
