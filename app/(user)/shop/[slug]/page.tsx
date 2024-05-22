import { groq } from 'next-sanity';
import Image from 'next/image';
import { client } from '../../../../lib/sanity.client';

 
 import MainProductDetails from './productMainDetails'

type Props = {
  params: {
    slug: string;
  };
};


  const query = groq`*[_type == "product"][slug.current == $slug][0] {
  
      ...,      
  
      

  }`;


  const contactquery = groq`
  *[_type=='contact'] {
    ...,
    
    
  } | order(_createdAt desc)
`;




const ProductDetailPages  = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;

  const productdata = await client.fetch(query, { slug }) || [];
const contact = await client.fetch(contactquery);
  return (
    <div
      id="section"
      className=" "
    >

    <MainProductDetails contact={contact[0]} productdata={productdata} />  

      {/* <div className=' mt-24 mx-12'>
      <PortableText value={post?.body} components={RichTextComponents} />
      </div> */}

    </div>
  );
};

export default ProductDetailPages;


