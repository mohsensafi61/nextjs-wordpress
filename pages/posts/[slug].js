import Image from "next/image";
import axios from "axios";
import { client } from "../../lib/apollo";
import { gql } from "@apollo/client";
import {useRouter} from 'next/router'

export default function Post({ post }) {
  

  const router = useRouter();

  if (router.isFallback){
    return <div>loadong ...</div>
  }
  return (
    <div dir="rtl" className="md:max-w-screen-lg container mx-auto">
      <main
        className="prose prose-xl prose-slate prose-h1:text-xl md:prose-h1:text-3xl
          prose-h1:font-black prose-h2:text:xl md:prose-h2:text-2xl prose-h2:font-extrabold
          prose-p:text-base prose-p:leading-8 md:prose-p:text-ls md:prose-p:leading-10
          prose-img:rounded-xl prose-img:mx-auto prose-a:text-blue-500 prose-a:no-underline mb-8 max-w-screen-md mx-auto"
      >
        <div className="aspect-w-16 aspect-h-9 rounded-lg w-full h-96 object-center object-cover">
          <img
            src={post.featuredImage.node.sourceUrl}
            alt={post.title}
            className="w-full h-full"
          />
        </div>
        <h1 className="text-center bg-gray-200 p-10 mt-16 rounded-lg">
          {post.title}
        </h1>

        <article
          className="pt-10"
          dangerouslySetInnerHTML={{ __html: post.content }}
        ></article>
      </main>
    </div>
  );
}

export async function getStaticProps({ params }) {
  const GET_POST_BY_SLUG = gql`
    query GetPostByUri($id: ID!, $idType: PostIdType) {
      post(id: $id, idType: $idType) {
        title
        content
        date
        slug
        author {
          node {
            firstName
            lastName
          }
        }
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
    }
  `;

  const response = await client.query({
    query: GET_POST_BY_SLUG,
    variables: {
      id: params.slug,
      idType: "SLUG",
    },
  });
  console.log(response?.data?.post);
  const post = response?.data?.post;

  return {
    props: {
      post,
    },
    revalidate: 5
  };
}

export async function getStaticPaths() {
  const GET_POSTS = gql`
  query GetAllPosts {
    posts {
      nodes {
        content
        title
        slug
        date
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
    }
  }
  `;
  const response = await client.query({
    query: GET_POSTS
  })
  
  
    const paths = response.data.posts.nodes.map(((post) => ({
      params: { slug: post.slug },
    })));
  
    return {
      paths,
      fallback: true,
    };
  }
