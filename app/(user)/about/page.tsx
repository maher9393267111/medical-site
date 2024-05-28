
// -----------------
import { groq } from 'next-sanity';
import { client } from '../../../lib/sanity.client';
import AboutOneMAin from './AboutMian'
export const revalidate = 30;



const query = groq`
  *[_type=='aboutOne']{
    ...,
    
  } | order(_createdAt desc)
`;





const bannerquery = groq`
  *[_type=='Homebanner'] {
    ...,
    "video": video.asset->url,
   
  } | order(_createdAt desc)
`;



//partners


const partnersquery = groq`
  *[_type=='partners'] {
    ...
    
   
  } | order(_createdAt desc)
`;





const contactquery = groq`
  *[_type=='contact'] {
    ...,
    
    
  } | order(_createdAt desc)
`;




export const metadata = {
  icons: {
    icon: "/logo.png",
  },
}
const AboutPage = async () => {
  const aboutOneData = await client.fetch(query);
  const partnersData = await client.fetch(partnersquery);


  const contact = await client.fetch(contactquery);



  return (
    <>
    
    <AboutOneMAin
     aboutOneData={aboutOneData[0]}
     contact ={contact}
     
     partners ={partnersData}
   
     />
  
    </>
  );
}

export default AboutPage;