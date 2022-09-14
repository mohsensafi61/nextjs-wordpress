import PostList from "../components/PostList";
import { client } from "../lib/apollo";
import { gql } from "@apollo/client";


export default function Home({ posts }) {
  return (
    <div>
      
      <div className="container mx-auto mt-10">
        <h1 className="text-center text-3xl text-blue-800">اخبار روز</h1>
        <div
          className="m-10 grid gap-x-6 gap-y-16 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 "
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
