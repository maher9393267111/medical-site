import { groq } from 'next-sanity';
import Image from 'next/image';
import { client } from '../../../../lib/sanity.client';
import MainService from './mainService'

export const metadata = {
  title: "Zenfy - Software, SaaS & Digital Agency Template",
  icons: {
    icon: "/assets/img/sm-logo.svg",
  },
};



type Props = {
  params: {
    slug: string;
  };
};


  const query = groq`*[_type == "service"][slug.current == $slug][0] {
  
      ...,      
     
  }`;

  const contactquery = groq`
  *[_type=='contact'] {
    ...,
    
    
  } | order(_createdAt desc)
`;


const ServiceDetailPage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;

  const service = await client.fetch(query, { slug }) || [];
  const contact = await client.fetch(contactquery);
  

  return (
    <div>

<MainService contact={contact[0]} data ={service}/>
    </div>
  );
};

export default ServiceDetailPage;

