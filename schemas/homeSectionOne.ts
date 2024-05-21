import { DocumentTextIcon } from "@sanity/icons";
import { defineField, defineType , defineArrayMember } from "sanity";
import { preview } from "sanity-plugin-icon-picker";

export const homeSectionOne = defineType({
  name: "homeone",
  type: "document",
  title: "HomeOne",
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
        description: 'Enter a short snippet for the blog...',
        title: 'Description',
        type: "string",
      }),
  
    




    defineField({
      name: "slug",
      type: "string",
    }),


    // array of features

    {
        name: "features",
        type: "array",
        title: "Features",
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
                name: "desc",
                type: "string",
                title: "Desc",
              },
              {
                name: "type",
                type: "string",
                title: "Type",
              },

              {

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
              }

             
            ],

            // show icon instead of icon name
        

          },
        ],
      },





   
    
 


  

    // defineField({
    //     name: 'image',
    //     title: 'image',
    //     type: 'image',
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
        subtitle: "homeone",
        media: image || DocumentTextIcon,
      };
    },
  },
});










// import { DocumentTextIcon } from "@sanity/icons";
// import { defineField, defineType ,defineArrayMember } from "sanity";

// export const  homeSectionOne  = defineType({
//   name: "Homesectionone", //filter
//   type: "document",
//   title: "HomeSectionOne",
//   fields: [
//     defineField({
//       name: "heading",
//       type: "string",
//     }),

//     defineField({
//         name: "title",
//         type: "string",
//       }),

//       defineField({
//         name: "desc",
//         type: "string",
//       }),



//     defineField({
//       name: "slug",
//       type: "string",
//     }),


    
//     defineField({
//         name: "type",
//         type: "string",
//       }),


// ,
//     // defineField({
//     //     name: "pageBuilder",
//     //     type: "array",
//     //     title: "Page builder",
//     //     of: [
//     //       defineArrayMember({
//     //         name: "homeOneFeatures",
//     //         type: "homeOneFeatures",
//     //       }),
      
      
//     //     ],
//     //   }),
    


 




//     defineField({
//       name: "image",
//       type: "image",
//       options: { hotspot: true },
//       fields: [
//         defineField({
//           name: "alt",
//           type: "string",
//           title: "Alternative text",
//         }),
//       ],
//     }),
//   ],
//   icon: DocumentTextIcon,
//   preview: {
//     select: {
//       title: "heading",
//       image: "image",
//     },
//     prepare({ title, image }) {
//       return {
//         title: title || "Untitled",
//         subtitle: "HomeSectionOne",
//         media: image || DocumentTextIcon,
//       };
//     },
//   },
// });