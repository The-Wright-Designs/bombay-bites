import ButtonLink from "@/_components/ui/buttons/button-link";
import HeroSlider from "./hero-slider";

import sliderData from "@/_data/general-data.json";
import ButtonType from "@/_components/ui/buttons/button-type";

const { heroSlider } = sliderData;

export default function HeroComponent() {
  return (
    <div className="max-w-[1280px] mx-auto">
      <div className="relative desktop:grid grid-cols-[800px_1fr]">
        <HeroSlider
          data={heroSlider}
          cssClasses="h-[650px] desktop:h-[600px] desktop:w-full"
        />
        <div className="z-10 absolute inset-0 m-auto h-fit w-fit bg-white/90 flex flex-col gap-3 items-center px-10 py-8 rounded-sm desktop:relative desktop:h-full desktop:w-full desktop:rounded-none desktop:bg-red desktop:items-start desktop:justify-center overflow-hidden">
          <div className="flex flex-col gap-1 items-center text-center desktop:text-left desktop:items-start desktop:gap-5 desktop:z-10">
            <p className="font-mozilla-text font-extralight text-[20px] desktop:text-[40px] desktop:text-white">
              Welcome to
            </p>
            <h2 className="font-semibold desktop:text-beige desktop:border-y-4 desktop:border-beige desktop:py-1 desktop:text-[92px]">
              Bombay
              <br />
              Bites
            </h2>
          </div>
          <hr className="border-black/25 w-full desktop:hidden" />
          <p className="z-10 text-red text-[32px] font-dynapuff text-center desktop:text-white desktop:text-[44px] desktop:mt-3">
            Curry &apos;n All
          </p>
          <div className="hidden desktop:block absolute h-2/3 w-[200%] -left-14 bottom-0 bg-brown/20 -rotate-60" />
          <div className="hidden desktop:block absolute h-2/3 w-[200%] bottom-0 left-4 bg-brown/40 -rotate-60" />
          <div className="hidden desktop:block absolute h-2/3 w-[200%] bottom-0 left-24 bg-brown/60 -rotate-60" />
          <div className="hidden desktop:block absolute h-2/3 w-[200%] bottom-0 left-44 bg-brown -rotate-60" />
          <div className="hidden desktop:grid z-10 grid-cols-2 gap-5 mt-10">
            <ButtonLink redButton whiteBorder>
              View Menu
            </ButtonLink>
            <ButtonLink whiteBorder href="/#contact">
              Orders
            </ButtonLink>
          </div>
        </div>
      </div>
      <div className="px-7 pb-15 pt-10 grid phone:grid-cols-2 gap-7 tablet:flex tablet:justify-center desktop:hidden">
        <ButtonLink redButton>View Menu</ButtonLink>
        <ButtonLink href="/#contact">Orders</ButtonLink>
      </div>
    </div>
  );
}
