import { DocumentTextIcon } from "@sanity/icons";
import { defineField, defineType, defineArrayMember } from "sanity";
import { preview } from "sanity-plugin-icon-picker";

export const Contact = defineType({
  name: "contact",
  type: "document",
  title: "Contact",
  fields: [
    defineField({
      name: "heading",
      type: "string",
    }),

  

    // defineField({
    //   name: "footerheading",
    //   type: "string",
    // }),

    // defineField({
    //   name: "title",
    //   type: "string",
    // }),


    // defineField({
    //     name: "footertitle",
    //     type: "string",
    //   }),
  

      defineField({
        name: "footeraddress",
        type: "string",
      }),
  




    // defineField({
    //   name: "desc",
    //   description: "Enter a short snippet for the blog...",
    //   title: "Description",
    //   type: "string",
    // }),

    // defineField({
    //     name: "footerdesc",
    //     description: "Enter a short snippet for the blog...",
    //     title: "FooterDescription",
    //     type: "string",
    //   }),

 
    
    defineField({
      name: "whatsapp",
      type: "string",
    }),


      defineField({
        name: "email",
        type: "string",
      }),

      defineField({
        name: "phone",
        type: "string",
      }),

      defineField({
        name: "facebook",
        type: "string",
      }),

      defineField({
        name: "instagram",
        type: "string",
      }),
   

      defineField({
        name: "linkden",
        type: "string",
      }),

      defineField({
        name: "twitter",
        type: "string",
      }),


    // arra

    {
      name: "list",
      type: "array",
      title: "List",
      of: [
        {
          type: "object",
          fields: [
          
    defineField({
        name: "country",
        type: "string",
      }),

      defineField({
        name: "city",
        type: "string",
      }),
 
  
      defineField({
        name: "address",
        type: "string",
      }),
 

      defineField({
        name: "worktime",
        type: "string",
      }),
 
      defineField({
        name: "holiday",
        type: "string",
      }),

      defineField({
        name: "map",
        type: "string",
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
        subtitle: "Contact",
        media: image || DocumentTextIcon,
      };
    },
  },
});
