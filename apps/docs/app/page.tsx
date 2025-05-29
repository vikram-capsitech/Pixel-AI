import Header from "@tarviks/ui/Components/Header/Header";
import AnimatedCover from "@tarviks/ui/Components/PixelDiv/PixelDiv";
import DocsHomePage from "./pages";

export default function Home() {
  return (
    <>
      <AnimatedCover variant="particles" opacity={0.9} />
      <DocsHomePage />
    </>
  );
}
