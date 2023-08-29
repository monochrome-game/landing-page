import { styled } from "@/styled-system/jsx";
import { LandingPage } from "@/lib/landingPage";

export default function Home() {
  return (
    <styled.main
      w="100vw"
      h="100vh"
      overflow="hidden"
      bg="gsLightest"
      color="gsDarkest"
    >
      <LandingPage />
    </styled.main>
  );
}
