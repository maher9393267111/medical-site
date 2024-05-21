"use client";

import React, { useState, useEffect, useMemo } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { groq } from "next-sanity";
import { client } from "../../../lib/sanity.client";
import MainCases from "./mainComp";

export const revalidate = 30;

const query = groq`
  *[_type=='casestudy'] {
    ...,
    
    category->
  } | order(_createdAt desc)
`;

const contactquery = groq`
  *[_type=='contact'] {
    ...,
    
    
  } | order(_createdAt desc)
`;

// export const metadata = {
//   icons: {
//     icon: "/assets/img/sm-logo.svg",
//   },
// };

export default function Case() {
  const searchParams = useSearchParams();

  const [cases, setCases] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);

  const getCases = async () => {
    const casesdata = await client.fetch(groq`
         *[_type=='casestudy'] {
           ...,
          
           category->
         } | order(_createdAt desc) [${offset}...${offset + 2}] 
       `);

    setCases([...cases, ...casesdata]);
    setOffset(offset + 2);
    console.log(cases);
  };

  const getContacts = async () => {
    const tagsData = await client.fetch(contactquery);
    setContacts(tagsData);
  };

  useEffect(() => {
    getCases();
    getContacts();
  }, []);

  return (
    <div>
   <MainCases   loadMore={getCases} contact={contacts[0]} cases={cases} />
    </div>
  );
}

//import { groq } from "next-sanity";
// import { client } from "../../../lib/sanity.client";
// import MainCases from "./mainComp";

// export const revalidate = 30;

// const query = groq`
//   *[_type=='casestudy'] {
//     ...,

//     category->
//   } | order(_createdAt desc)
// `;

// const contactquery = groq`
//   *[_type=='contact'] {
//     ...,

//   } | order(_createdAt desc)
// `;

// export const metadata = {
//   icons: {
//     icon: "/assets/img/sm-logo.svg",
//   },
// };

// interface Props {
//   searchParams: {
//     category?: string;
//     tag?: any;
//   };
// }

// const CasePage = async ({ searchParams }: Props) => {
//   const cases = await client.fetch(query);
//   const contact = await client.fetch(contactquery);
//   console.log(cases);
//   //?category=development

//   return (
//     <>
//       <MainCases contact={contact[0]} cases={cases} />
//     </>
//   );
// };

// export default CasePage;
