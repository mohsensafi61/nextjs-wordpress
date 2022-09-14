import Link from "next/link";
import Image from "next/image";

const PostList = ({ posts }) => {
  return posts.map((post, index) => {
    return (
      <Link key={index} href={`/posts/${post.slug}`}>
        <a>
          <div className="rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-lg">
            <div className="aspect-w-16 aspect-h-9">
              <Image
                layout="fill"
                placeholder="blur"
                blurDataURL={post.featuredImage?.node?.sourceUrl}
                loading="lazy"
                src={post.featuredImage?.node?.sourceUrl}
                alt={post.title}
                className="h-full w-full rounded-lg object-cover object-center"
              />
            </div>
            <h1 className="my-6 text-center text-2xl font-bold text-blue-900">
              {post.title}
            </h1>
            <div
              className="line-clamp-2"
              dangerouslySetInnerHTML={{ __html: post.content }}
            ></div>
          </div>
        </a>
      </Link>
    );
  });
};

export default PostList;
