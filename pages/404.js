import Container from "@/components/Container";
import Banner from "@/components/Banner";

const navigation = [
  { name: "Inicio", href: "/", current: false },
  { name: "Blog", href: "/blog", current: false },
];

export default function Custom404() {
  return (
    <Container navigation={navigation}>
      <>
        <Banner
          title="404"
          description="Página no encontrada"
          imgUrl="/static/crying-face.svg"
          width="200"
          height="200"
        />
      </>
    </Container>
  );
}
