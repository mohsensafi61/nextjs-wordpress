import axios from "axios";
import Link from "next/link";
import PostList from "../components/PostList";
import parse from "html-react-parser";
import { client } from "../lib/apollo";
import { gql } from "@apollo/client";
import Slider from "../components/Slider";

export default function Home({ posts }) {
  return (
    <div>
      <Slider />
      <div className="container mx-auto mt-10">
        <h1 className="text-3xl text-center text-blue-800">اخبار روز</h1>
        <div
          dir="rtl"
          className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-16 m-10 "
        >
          <PostList posts={posts} />
        </div>
      </div>
    </div>
  );
}

// Graphql API
export async function getStaticProps() {
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
    query: GET_POSTS,
    fetchPolicy: "network-only",
  });

  const posts = response?.data?.posts?.nodes;

  return {
    props: {
      posts,
    },
    revalidate: 5,
  };
}

// REST API
// export async function getStaticProps(){
//   const {data : posts} = await axios.get('http://shop.local/wp-json/wp/v2/posts')

//   console.log({posts});
//   return {
//     props: {
//       posts
//     },
//     revalidate: 5
//   }
// }
