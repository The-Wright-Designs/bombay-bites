import Link from "next/link";
import Image from "next/image";
import navData from "@/_data/nav-data.json";

const FooterComponent = () => {
  return (
    <footer className="bg-black w-full mt-20">
      <div className="px-5 pt-10 pb-5 flex flex-col gap-5 desktop:max-w-[1280px] desktop:mx-auto desktop:px-[60px] desktop:pt-10 desktop:pb-5">
        <div className="flex flex-col gap-10 items-center desktop:flex-row desktop:justify-between desktop:items-start desktop:gap-0">
          <div className="flex flex-col gap-10 items-center desktop:items-end desktop:order-2">
            <Image src="" alt="" width={50} height={50} />
            <p className="text-paragraph text-white text-center desktop:text-right">
              Designed &amp; developed by
              <br />
              <Link
                href="https://thewrightdesigns.co.za"
                className="text-white transition-opacity duration-300 desktop:hover:opacity-80"
                target="_blank"
                rel="noopener noreferrer"
              >
                The Wright Designs
              </Link>
            </p>
          </div>
        </div>
        <p className="text-paragraph text-white text-center w-full">
          www.robbergpharmacy.co.za | © 2025 Robberg Pharmacy
        </p>
      </div>
    </footer>
  );
};

export default FooterComponent;
