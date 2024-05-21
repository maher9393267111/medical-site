// -----------------
import { groq } from "next-sanity";
import { client } from "../../../lib/sanity.client";
import FaqMAin from "./Main";
export const revalidate = 30;

const query = groq`
  *[_type=='faqs']{
    ...,
    
  } | order(_createdAt desc)
`;



const contactquery = groq`
  *[_type=='contact'] {
    ...,
    
    
  } | order(_createdAt desc)
`;



export const metadata = {
  icons: {
    icon: "/assets/img/sm-logo.svg",
  },
};
const FaqsPage = async () => {
  const faqsData = await client.fetch(query);
const contact = await client.fetch(contactquery);
  console.log(faqsData[0]);

  return (
    <>
      <FaqMAin contact={contact[0]} data={faqsData[0]} />
    </>
  );
};

export default FaqsPage;
