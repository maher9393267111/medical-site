import { groq } from 'next-sanity';
import Image from 'next/image';
import { client } from '../../../../lib/sanity.client';

 
 import MainCaseDetails from './caseDetailsMain'

type Props = {
  params: {
    slug: string;
  };
};


  const query = groq`*[_type == "casestudy"][slug.current == $slug][0] {
  
      ...,      
      category->,

      'prev': *[_type == 'casestudy'  && _createdAt < ^._createdAt].slug | order(_createdAt desc)[0],
      'next': *[_type == 'casestudy' && _createdAt > ^._createdAt].slug | order(_createdAt desc)[0]
      

  }`;


  const contactquery = groq`
  *[_type=='contact'] {
    ...,
    
    
  } | order(_createdAt desc)
`;




const CaseDetailPage  = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;

  const casedata = await client.fetch(query, { slug }) || [];
const contact = await client.fetch(contactquery);
  return (
    <div
      id="section"
      className=" "
    >

    <MainCaseDetails contact={contact[0]} casedata={casedata} />  

      {/* <div className=' mt-24 mx-12'>
      <PortableText value={post?.body} components={RichTextComponents} />
      </div> */}

    </div>
  );
};

export default CaseDetailPage;


