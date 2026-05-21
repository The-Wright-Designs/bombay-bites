import Image from "next/image";
import Link from "next/link";
import classNames from "classnames";
import generalData from "@/_data/general-data.json";
import ShowEmailAddress from "@/_components/ui/contact/show-email-address";
import ShowPhoneNumber from "@/_components/ui/contact/show-phone-number";

interface Props {
  cssClasses?: string;
}

export default function ContactInfoComponent({ cssClasses }: Props) {
  const { phone } = generalData.contact;

  return (
    <div className={classNames("flex flex-col gap-3", cssClasses)}>
      <div className="flex flex-col gap-5 desktop:gap-3">
        <div className="flex flex-col gap-1 min-[375px]:flex-row min-[375px]:items-center min-[375px]:gap-2">
          <p className="w-[65px] shrink-0">Phone:</p>
          <ShowPhoneNumber />
        </div>
        <div className="flex flex-col gap-1 min-[375px]:flex-row min-[375px]:items-center min-[375px]:gap-2">
          <p className="w-[65px] shrink-0">Email:</p>
          <ShowEmailAddress />
        </div>
      </div>
      <Link
        href={`https://wa.me/${phone.replace(/\s/g, "")}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact us on WhatsApp"
        className="self-start desktop:hover:opacity-80 desktop:hover:cursor-pointer"
      >
        <Image
          src="/icons/WhatsApp/whatsapp.svg"
          alt="WhatsApp"
          width={40}
          height={40}
          className="desktop:w-7 desktop:h-auto"
        />
      </Link>
    </div>
  );
}
