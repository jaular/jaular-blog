import Link from "next/link";

export default function Posts(props) {
  const { posts } = props;

  const orderByDateDesc = posts
    .map((post) => ({
      title: post.data.title,
      publishedAt: new Date(post.data.publishedAt),
      filePath: post.filePath,
    }))
    .sort((a, b) => b.publishedAt - a.publishedAt);

  return (
    <div className="grid gap-8 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-12">
      {orderByDateDesc.map((post) => (
        <Link
          key={post.title}
          as={`/blog/${post.filePath.replace(/\.mdx?$/, "")}`}
          href={`/blog/[slug]`}
        >
          <a className="p-4 bg-gray-200 border-2 border-transparent rounded-md hover:border-emerald-700 dark:hover:border-emerald-500 dark:bg-black-400">
            <p className="text-sm text-gray-700 dark:text-gray-400">
              {post.publishedAt.toLocaleDateString("fr-CA", {
                timeZone: "UTC",
              })}
            </p>

            <p className="inline-block mt-2 font-medium text-black-300 dark:text-gray-300">
              {post.title}
            </p>
          </a>
        </Link>
      ))}
    </div>
  );
}
