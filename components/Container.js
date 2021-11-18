import Head from "next/head";
import { useRouter } from "next/router";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Container(props) {
  const { children, navigation, ...customMeta } = props;
  const router = useRouter();
  const meta = {
    title: "Inicio",
    description: `Blog con contenido sobre programación, hecho con Next.js, Tailwind CSS y next-mdx-remote`,
    image: "/static/hero-image.svg",
    type: "website",
    ...customMeta,
  };

  return (
    <>
      <Head>
        <title>{`JAular | ${meta.title}`}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`http://localhost:3000${router.asPath}`}
        />
        <link rel="canonical" href={`http://localhost:3000${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="JAular" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={`JAular | ${meta.title}`} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@jaular" />
        <meta name="twitter:title" content={`JAular | ${meta.title}`} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </Head>
      <Navbar navigation={navigation} />
      <main className="container flex-grow max-w-3xl px-6 mx-auto my-14 lg:px-8 md:my-16">
        {children}
      </main>
      <Footer />
    </>
  );
}
