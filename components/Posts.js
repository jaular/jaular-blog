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
        <div
          key={post.title}
          className="p-4 bg-gray-200 rounded-md dark:bg-black-400"
        >
          <p className="text-sm text-gray-700 dark:text-gray-400">
            {post.publishedAt.toLocaleDateString("fr-CA", { timeZone: "UTC" })}
          </p>
          <Link
            as={`/blog/${post.filePath.replace(/\.mdx?$/, "")}`}
            href={`/blog/[slug]`}
          >
            <a className="inline-block mt-2">
              <p className="font-medium text-emerald-600 hover:text-emerald-700">
                {post.title}
              </p>
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
}
