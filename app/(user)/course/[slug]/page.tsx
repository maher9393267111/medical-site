import { groq } from 'next-sanity';
import Image from 'next/image';
import { client } from '../../../../lib/sanity.client';

 import { Post } from '../../../../typings';
 import MainBlogDetails from './blogDetailsMain'
import BllogFake from './blogFake'
import BlogDetailsFake from './blogFake';
type Props = {
  params: {
    slug: string;
  };
};


  const query = groq`*[_type == "post"][slug.current == $slug][0] {
  
    ...,
    author->,
    "categories": categories[]->{
      _id,
      title,
      titlear
      // any other category fields you want to fetch
    },
     

      'prev': *[_type == 'post'  && _createdAt < ^._createdAt].slug | order(_createdAt desc)[0],
      'next': *[_type == 'post' && _createdAt > ^._createdAt].slug | order(_createdAt desc)[0]
  

  }`;



  const contactquery = groq`
  *[_type=='contact'] {
    ...,
    
    
  } | order(_createdAt desc)
`;





const BlogDetailPage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;

  const blog = await client.fetch(query, { slug }) || [];
  const contact = await client.fetch(contactquery);
console.log("BLOG" , blog?.prev ,blog?.next)

  return (
    <div
      id="section"
      className=" "
    >

{/* <BlogDetailsFake/> */}
    <MainBlogDetails
    contact = {contact[0]}
    blog={blog} />  

      {/* <div className=' mt-24 mx-12'>
      <PortableText value={post?.body} components={RichTextComponents} />
      </div> */}

    </div>
  );
};

export default BlogDetailPage;






// import { groq } from 'next-sanity';
// import Image from 'next/image';
// import { client } from '../../../../lib/sanity.client';
// import urlFor from '../../../../lib/urlFor';
// import { PortableText} from '@portabletext/react';
// import { RichTextComponents } from '../../../../components/RichTextComponents';
//  import { Post } from '../../../../typings';

// type Props = {
//   params: {
//     slug: string;
//   };
// };




// export const revalidate = 30; // revalidate this page every 30 seconds


// // Static Site Generation
// export async function generateStaticParams(){
//   const query = groq`
//       *[_type == "post"]
//       {
//           slug
//       }
//   `;

//   const slugs: Post[] = await client.fetch(query);
//   const slugRoutes = slugs.map(slug => slug?.slug.current)

//   return slugRoutes?.map(slug => ({
//       slug
//   }))
// }







// const PostSingle = async ({ params: { slug } }: Props) => {
//   const Query = groq`
//     //all the post data and also slug field (on studio) matches
//     *[_type=='post' && slug.current == $slug][0]
//     {
//         ...,      // all the fields
//         author->, //author reference with {}
//         categories[]-> // categories reference with []
//     }
//     `;

//   const query = groq`*[_type == "post"][slug.current == $slug][0] {
  
//       ...,      // all the fields
//       author->, //author reference with {}
//       categories[]-> // categories reference with []
//   }`;




//     console.log("SLUG" ,slug)

//   // "Post" type ni "typings.d.ts"-d bga uchras automataar duudagdana.
//   const post = await client.fetch(query, { slug }) || [];


//   if (!post) {
//     return <div>Not found</div>
    
    
//   }




//   return (
//     <div>

// {post && (
    
//     <article className='px-10 pb-28'>

      



//     </article>

//               )}
//     </div>
//   );
// };

// export default PostSingle;