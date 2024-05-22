"use client";

import React, { useState, useEffect, useMemo } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { groq } from "next-sanity";
import { client } from "../../../lib/sanity.client";
import MainBlogs from "./mainBlogs";
import { off } from "process";
export default function BlogPage() {
  const searchParams = useSearchParams();
  const cat = searchParams.get("category");
  const tag = searchParams.get("tag");
  const isparams = cat || tag ? true : false;

  const [posts, setPosts] = useState([]);
  const [cats, setCats] = useState([]);
  const [tags, setTags] = useState([]);
  const [newposts, setNewPosts] = useState([]);

  const nepostsquery = groq`
  *[_type=='post'] {
    ...,
    author->,
    "categories": categories[]->{
      _id,
      title,
      titlear
  } | order(_createdAt desc) [0...3]
`;

  const catsquery = groq`*[_type == "category"] {
  ...,
  "count": count(*[_type == "post" && references(^._id)])
} | order(count desc) [0...5]`;

  const tagsquery = groq`
  *[_type=='tag'] {
    ...,

  } | order(_createdAt desc)
`;

  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);

  const getPosts = async () => {
    if (cat || tag) {
      const productFilter = `_type == "post"`;
      const categoryFilter = cat ? `&& "${cat}" in categories[]->title ` : "";
      const tagFilter = tag ? `&& "${tag}" in tags[]->title ` : "";
      const filter = `*[${productFilter}${categoryFilter}${tagFilter}]`;

      const blogs = await client.fetch(groq`${filter} {
  ...
  } | order(_createdAt desc)  `);

      setPosts([...blogs]);
      // setPosts([...posts, ...blogs]);
      // setOffset(offset + 1);
      console.log(blogs);
    } else {
      const productFilter = `_type == "post"`;
      const categoryFilter = cat ? `&& "${cat}" in categories[]->title ` : "";
      const tagFilter = tag ? `&& "${tag}" in tags[]->title ` : "";
      const filter = `*[${productFilter}${categoryFilter}${tagFilter}]`;

      const blogs = await client.fetch(groq`${filter} {
  ...
  } | order(_createdAt desc) [${offset}...${offset + 2}] `);

      setPosts([...blogs]);
      setPosts([...posts, ...blogs]);
      setOffset(offset + 2);
      console.log(blogs);
    }
  };

  const getTags = async () => {
    const tagsData = await client.fetch(tagsquery);
    setTags(tagsData);
  };

  const getCats = async () => {
    const catsData = await client.fetch(catsquery);
    setCats(catsData);
  };

  const getNewPosts = async () => {
    const newData = await client.fetch(nepostsquery);
    setNewPosts(newData);
    console.log(newposts);
  };

  useEffect(() => {
    getPosts();
    getCats();
    getTags();
    getNewPosts();
  }, [cat, tag]);

  return (
    <div>
      <MainBlogs
        isparams={isparams}
        newpostsData={newposts}
        tagsData={tags}
        catsData={cats}
        blogs={posts}
        loadMore={getPosts}
      />
    </div>
  );
}
