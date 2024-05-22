"use client";

import React, { useState, useEffect, useMemo } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { groq } from "next-sanity";
import { client } from "../../../lib/sanity.client";
import MainShop from "./mainShop";

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

export default function ShopPage() {
  const searchParams = useSearchParams();

  const [cases, setCases] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);

  const getCases = async () => {
    const casesdata = await client.fetch(groq`
         *[_type=='product'] {
           ...,
          
        
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
   <MainShop   loadMore={getCases} contact={contacts[0]} products={cases} />
    </div>
  );
}




// // -----------------
// import MainShop from './mainShop'
// import { groq } from "next-sanity";
// import { client } from "../../../lib/sanity.client";

// export const revalidate = 30;



// const productsquery = groq`
//   *[_type=='product'] {
//     ...,
    
    
//   } | order(_createdAt desc)
//   [0...3]
// `;

// const ProductsPage = async () => {
//   const products = await client.fetch(productsquery);


//   return (
//     <>

//     <div className="arabic">
      

// <MainShop products={products}/>




// </div>

// </>
    





 
//   );
// };

// export default ProductsPage;
