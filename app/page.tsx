import AboutComponent from "@/_components/home-page/about-component";
import HeroComponent from "@/_components/home-page/hero/hero-component";
import PageWrapper from "@/_lib/utils/page-wrapper";

export default function HomePage() {
  return (
    <div>
      <HeroComponent />
      <PageWrapper cssClasses="desktop:mt-15">
        <AboutComponent />
      </PageWrapper>
    </div>
  );
}
