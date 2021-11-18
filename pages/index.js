import Container from "@/components/Container";
import Banner from "@/components/Banner";
import { ExternalLinkIcon } from "@heroicons/react/outline";

const navigation = [
  { name: "Inicio", href: "/", current: true },
  { name: "Blog", href: "/blog", current: false },
];

const links = [
  { name: "leerob.io", href: "https://github.com/leerob/leerob.io" },
  {
    name: "blog.tailwindcss.com",
    href: "https://github.com/tailwindlabs/blog.tailwindcss.com",
  },
  {
    name: "with-mdx-remote",
    href: "https://github.com/vercel/next.js/tree/canary/examples/with-mdx-remote",
  },
];

export default function Index() {
  return (
    <Container navigation={navigation}>
      <Banner
        title="JAular Blog"
        description="Blog con contenido sobre programación, hecho con Next.js, Tailwind CSS y next-mdx-remote"
        imgUrl="/static/hero-image.svg"
        width="793"
        height="553"
      />
      <div className="space-y-6 text-center">
        <p className="text-black-300 dark:text-gray-300">
          Este proyecto fué realizado utilizando los siguientes ejemplos
        </p>
        <ol className="space-y-4 text-gray-700 dark:text-gray-400">
          {links.map((link) => (
            <li key={link.name}>
              <a
                className="inline-flex items-center justify-center font-medium underline text-emerald-600 hover:text-emerald-700"
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.name}
                <ExternalLinkIcon className="w-5 h-5 ml-1" aria-hidden="true" />
              </a>
            </li>
          ))}
        </ol>
      </div>
    </Container>
  );
}
