import { DocumentTextIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const homebanner = defineType({
  name: "Homebanner", //filter
  type: "document",
  title: "Homebanner",
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


      defineField({
        name: "headingArabic",
        type: "string",
      }),
  
      defineField({
          name: "titleArabic",
          type: "string",
        }),
  
        defineField({
          name: "descArabic",
          type: "string",
        }),
  

defineField({

  name: 'images',
  title: 'Images gallery',
  type: 'array',
  of: [{ type: 'image' }]
}),




 
 
	// defineField({
  //       name: "video",
  //       title: "Video",
  //       type: "file",
  //       options: {
  //           accept: "video/*",
  //       },
  //   }),




  //   defineField({
  //     name: "image",
  //     type: "image",
  //     options: { hotspot: true },
  //     fields: [
  //       defineField({
  //         name: "alt",
  //         type: "string",
  //         title: "Alternative text",
  //       }),
  //     ],
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
        subtitle: "Homebanner",
        media: image || DocumentTextIcon,
      };
    },
  },
});