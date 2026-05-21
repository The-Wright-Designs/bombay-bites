"use client";

import classNames from "classnames";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import SectionHeading from "@/_components/ui/section-heading";
import ContactInfoComponent from "@/_components/home-page/contact/contact-info";
import ContactMapComponent from "@/_components/home-page/contact/contact-map";
import ContactFormComponent from "@/_components/home-page/contact/contact-form";

interface Props {
  cssClasses?: string;
}

export default function ContactComponent({ cssClasses }: Props) {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
    >
      <section
        id="contact"
        className={classNames("grid gap-10 desktop:grid-cols-2", cssClasses)}
      >
        <div className="flex flex-col gap-10">
          <SectionHeading heading="Contact" cssClasses="w-full" />
          <ContactInfoComponent />
          <ContactMapComponent cssClasses="w-full h-[388px] desktop:h-full rounded" />
        </div>
        <ContactFormComponent />
      </section>
    </GoogleReCaptchaProvider>
  );
}
