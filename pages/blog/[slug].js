import Image from "next/image";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeCodeTitles from "rehype-code-titles";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrism from "rehype-prism-plus";
import Container from "@/components/Container";
import CustomLink from "@/components/CustomLink";
import Avatar from "@/components/Avatar";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { postFilePaths, POSTS_PATH } from "@/utils/mdxUtils";

const navigation = [
  { name: "Inicio", href: "/", current: false },
  { name: "Blog", href: "/blog", current: false },
];

const components = {
  a: CustomLink,
  Image,
};

export default function PostPage({ source, frontMatter }) {
  return (
    <Container title={frontMatter.title} navigation={navigation}>
      <article className="space-y-8">
        <h1 className="text-3xl font-bold tracking-tight text-black-500 dark:text-gray-200 md:text-5xl">
          {frontMatter.title}
        </h1>

        <Avatar
          name={frontMatter.publishedBy}
          publishedAt={frontMatter.publishedAt}
        />

        <div className="prose max-w-none dark:prose-dark">
          <MDXRemote {...source} components={components} />
        </div>
      </article>
    </Container>
  );
}

export const getStaticProps = async ({ params }) => {
  const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`);
  const source = fs.readFileSync(postFilePath);

  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [
        rehypeSlug,
        rehypeCodeTitles,
        rehypePrism,
        rehypeAutolinkHeadings,
      ],
    },
    scope: data,
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = postFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ""))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
