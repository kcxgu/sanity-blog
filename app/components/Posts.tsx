import type { SanityDocument } from "@sanity/client";
import Link from "next/link";

const Posts = ({ posts = [] }: { posts: SanityDocument[] }) => {
  const numberOfPosts = posts.length === 1 ? `1 Post` : `${posts.length} Posts`;

  return (
    <div className="mx-auto grid grid-cols-1">
      <p className="text-gray-500 border-b">{numberOfPosts}</p>
      {posts.map((post) =>
        <Link
          className="p-4 underline underline-offset-2 hover:opacity-90"
          key={post._id}
          href={post.slug.current}
        >
          <h2 className="font-medium text-xl">{post.title}</h2>
        </Link>
      )}
    </div>
  )
}

export default Posts
