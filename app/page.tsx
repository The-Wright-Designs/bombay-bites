import AboutComponent from "@/_components/home-page/about-component";
import ContactComponent from "@/_components/home-page/contact/contact-component";
import GalleryComponent from "@/_components/home-page/gallery/gallery-component";
import HeroComponent from "@/_components/home-page/hero/hero-component";
import PageWrapper from "@/_lib/utils/page-wrapper";

export default function HomePage() {
  return (
    <div>
      <HeroComponent />
      <PageWrapper cssClasses="desktop:mt-15 flex flex-col gap-15">
        <AboutComponent />
        <hr className="border-black/25 w-full tablet:hidden" />
        <GalleryComponent cssClasses="scroll-mt-32 desktop:scroll-mt-40" />
        <ContactComponent cssClasses="mt-6 scroll-mt-32 desktop:scroll-mt-40" />
      </PageWrapper>
    </div>
  );
}
