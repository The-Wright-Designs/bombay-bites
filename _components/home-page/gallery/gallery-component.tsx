import generalData from "@/_data/general-data.json";

import SectionHeading from "@/_components/ui/section-heading";
import GallerySlider from "@/_components/home-page/gallery/gallery-slider";

interface Props {
  cssClasses?: string;
}

const GalleryComponent = ({ cssClasses }: Props) => {
  return (
    <section className={cssClasses} id="gallery">
      <SectionHeading heading="Gallery" cssClasses="mb-10 w-full" />
      <GallerySlider data={generalData.gallerySlider} />
    </section>
  );
};

export default GalleryComponent;
