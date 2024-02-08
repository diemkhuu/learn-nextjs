import { GetStaticProps, GetStaticPropsContext } from "next";
import * as React from "react";

interface IPostPayload {
  title: string;
  author: string;
  description: string;
  createAt: string;
  updateAt: string;
  imageUrl: string;
  id: string;
}

interface IPost {
  title: string;
  id: string;
}

interface PostListPageProps {
  posts: IPost[];
}

export const getStaticProps: GetStaticProps<PostListPageProps> = async (context: GetStaticPropsContext) => {
  // server side
  // build time
  const response = await fetch("https://6580118d6ae0629a3f544205.mockapi.io/v1/posts?limit=10");
  const data = await response.json();
  console.log({ data });
  const posts = data.map((p: IPostPayload) => ({ title: p.title, id: p.id }));

  return {
    props: {
      posts,
    },
  };
};

export default function PostList(props: PostListPageProps) {
  const { posts } = props;
  return (
    <>
      <h1>POST LIST</h1>
      {posts.map((post) => (
        <p>{post.title}</p>
      ))}
    </>
  );
}
