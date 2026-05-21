"use client";

import Link from "next/link";
import { useState } from "react";
import classNames from "classnames";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { fetchPhone } from "@/_actions/contact-actions";
import { ShowPhoneNumberProps } from "@/_types/general-types";

const ShowPhoneNumber = ({
  buttonClasses,
  linkClasses,
}: ShowPhoneNumberProps) => {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [showPhone, setShowPhone] = useState("Show phone number");
  const [showSpinnerPhone, setShowSpinnerPhone] = useState(false);

  const handleShowPhoneNumbers = async () => {
    setShowSpinnerPhone(true);
    try {
      let recaptchaToken: string | undefined;
      if (executeRecaptcha) {
        recaptchaToken = await executeRecaptcha("fetch_phone");
      }
      const phoneNumber =
        (await fetchPhone(recaptchaToken)) || "Phone number not found";
      setShowPhone(phoneNumber);
    } catch (error) {
      console.error("Error fetching phone:", error);
      setShowPhone("Phone not available");
    }
    setShowSpinnerPhone(false);
  };

  if (showPhone === "Show phone number") {
    return (
      <button
        onClick={handleShowPhoneNumbers}
        className={classNames(
          "px-2 text-left -mx-2 italic text-link py-3 self-start -my-3 desktop:hover:opacity-80 desktop:hover:cursor-pointer desktop:p-0 desktop:m-0",
          buttonClasses,
        )}
        aria-label="Show phone number"
      >
        {showSpinnerPhone ? (
          <div className="py-[3.25px]">
            <div className="spinner"></div>
          </div>
        ) : (
          showPhone
        )}
      </button>
    );
  }

  return (
    <Link
      href={`tel:${showPhone}`}
      className={classNames(
        "py-2 text-left px-2 -my-2 -mx-2 self-start desktop:hover:opacity-80 desktop:p-0 desktop:m-0",
        linkClasses,
      )}
    >
      {showPhone}
    </Link>
  );
};

export default ShowPhoneNumber;
