import { defineField, defineType } from 'sanity';
import { DocumentTextIcon } from "@sanity/icons";
export default defineType({
	name: 'product',
	title: 'Product',
	type: 'document',
	fields: [
		defineField({
			name: 'title',
			title: 'Product Title',
			type: 'string',
		}),

        defineField({
			name: 'titlear',
			title: 'Product Title Arabic',
			type: 'number',
		}),


        defineField({
			name: 'price',
			title: 'Product Price',
			type: 'string',
		}),



		defineField({
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: {
				source: 'title',
				maxLength: 96,
			},
		}),

	
		defineField({
			name: 'images',
			title: 'Images',
			type: 'array',
			of: [
				{
					type: 'image',
					options: {
						hotspot: true,
					},
				},
			],
		}),

		defineField({
			name: 'body',
			title: 'Body',
			type: 'blockContent',
		}),


        defineField({
			name: 'bodyar',
			title: 'BodyArabic',
			type: 'blockContent',
		}),

        
	],

    icon: DocumentTextIcon,
    preview: {
      select: {
        title: "title",
        image: "image",
      },
      prepare({ title, image }) {
        return {
          title: title || "Untitled",
          subtitle: "service",
          media: image || DocumentTextIcon,
        };
      },
    },
});