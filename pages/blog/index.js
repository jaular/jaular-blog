import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Container from "@/components/Container";
import Posts from "@/components/Posts";
import { postFilePaths, POSTS_PATH } from "@/utils/mdxUtils";

const navigation = [
  { name: "Inicio", href: "/", current: false },
  { name: "Blog", href: "/blog", current: true },
];

export default function Blog({ posts }) {
  return (
    <Container navigation={navigation} title="Blog">
      <Posts posts={posts} />
    </Container>
  );
}

export async function getStaticProps() {
  const posts = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
    const { content, data } = matter(source);

    return {
      content,
      data,
      filePath,
    };
  });

  return { props: { posts } };
}
