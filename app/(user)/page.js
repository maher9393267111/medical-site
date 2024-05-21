import Home1About from "../../components/about/Home1About";
import Home1Approach from "../../components/approachSection/Home1Approach";
import Home1Banner from "../../components/banner/Home1Banner";
import Home1Blog from "../../components/blog/Home1Blog";
import BannerWithCaseStudySlider from "../../components/caseStudy/BannerWithCaseStudySlider";
import Home1Contact from "../../components/contact/Home1Contact";
import Footer from "../../components/footer/Footer";
import Header1 from "../../components/header/Header1";
import Home1BannerMarquee from "../../components/marquee/Home1BannerMarquee";
import LogoMarquee from "../../components/marquee/LogoMarquee";
import Home1Portfolio from "../../components/portfolio/Home1Portfolio";
import Home1Solution from "../../components/solution/Home1Solution";
import Home1Testimonial from "../../components/testimonial/Home1Testimonial";
import Home1WorkProcess from "../../components/workProcess/Home1WorkProcess";
// -----------------
import { groq } from "next-sanity";
import { client } from "../../lib/sanity.client";

export const revalidate = 30;

const query = groq`
  *[_type=='post'] {
    ...,
    author->,
    categories[]->
  } | order(_createdAt desc)
`;

const bannerquery = groq`
  *[_type=='Homebanner'] {
    ...,
    "video": video.asset->url,
   
  } | order(_createdAt desc)
`;

const onequery = groq`
  *[_type=='homeone'] {
    ...
    
   
  } | order(_createdAt desc)
`;

const servicesquery = groq`
  *[_type=='service'] {
    ...
    
    
   
  } | order(_createdAt desc)
`;

//workprocess

const workPorocessquery = groq`
  *[_type=='workprocess'] {
    ...
    
    
   
  } | order(_createdAt desc)
`;

//homeapproach

const approachquery = groq`
  *[_type=='homeapproach'] {
    ...
    
    
   
  } | order(_createdAt desc)
`;

//clientcomments"

const clientsquery = groq`
  *[_type=='clientcomments'] {
    ...
    
    
   
  } | order(_createdAt desc)
`;

const casestudyquery = groq`
  *[_type=='casestudy'] {
    ...
    
    
   
  } | order(_createdAt desc)
`;

const contactquery = groq`
  *[_type=='contact'] {
    ...,
    
    
  } | order(_createdAt desc)
`;

//homeCauseSlider
const caseInfoquery = groq`
  *[_type=='homeCasesSlider'] {
    ...,
    
    
  } | order(_createdAt desc)
`;

const casesquery = groq`
  *[_type=='casestudy'] {
    ...,
    
    
  } | order(_createdAt desc)
  [0...4]
`;

const blogsquery = groq`
  *[_type=='post'] {
    ...,
    categories[]-> 
    
  } | order(_createdAt desc)
  [0...3]
`;

const aboutOnequery = groq`
  *[_type=='aboutOne']{
    ...,
    
  } | order(_createdAt desc)
`;

const brandsquery = groq`
  *[_type=='brands']{
    ...,
    
  } | order(_createdAt desc)
`;

const showcasequery = groq`
  *[_type=='showCase']{
    ...,
    
  } | order(_createdAt desc)
`;

export const metadata = {
  icons: {
    icon: "/assets/img/sm-logo.svg",
  },
};
const HomePage = async () => {
  const posts = await client.fetch(query);
  const homebannerData = await client.fetch(bannerquery);
  const sectionOneData = await client.fetch(onequery);
  const sectionOneData2 = await client.fetch(aboutOnequery);
  const servicesData = await client.fetch(servicesquery);
  const workProcessData = await client.fetch(workPorocessquery);
  const approachData = await client.fetch(approachquery);
  const clientsData = await client.fetch(clientsquery);
  const contact = await client.fetch(contactquery);
  const caseInfo = await client.fetch(caseInfoquery);

  const casesData = await client.fetch(casesquery);
  const blogsData = await client.fetch(blogsquery);
  const brandsData = await client.fetch(brandsquery);
  const showcaseData = await client.fetch(showcasequery);

  //showcasequery
  console.log(showcaseData);

  return (
    <>
      <Header1 data={contact[0]} />
      <Home1Banner data={homebannerData[0]} />
      <Home1BannerMarquee />
      <Home1About data={sectionOneData2[0]} />
      <Home1Solution data={servicesData} />
      <Home1WorkProcess data={workProcessData} />
      <Home1Approach data={approachData} />
      <Home1Testimonial data={clientsData} />
      <BannerWithCaseStudySlider caseInfo={caseInfo[0]} casesData={casesData} />
      <LogoMarquee brandsData={brandsData[0]} />
      <Home1Portfolio showcaseData={showcaseData} />
      <Home1Blog blogsData={blogsData} />
      <Home1Contact contact={contact[0]} />

      {/* 
     
      <BannerWithCaseStudySlider />
     
      */}

      {/* <Footer /> */}
    </>
  );
};

export default HomePage;
