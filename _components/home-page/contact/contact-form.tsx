"use client";

import { useState } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { sendEmail } from "@/_actions/send-email-actions";
import ButtonType from "@/_components/ui/buttons/button-type";
import classNames from "classnames";

interface Props {
  cssClasses?: string;
}

const ContactFormComponent = ({ cssClasses }: Props) => {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [showEmailSubmitted, setShowEmailSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  return (
    <div className={cssClasses}>
      <div
        className={classNames(
          "bg-red px-7 py-10 min-h-[200px] flex flex-col gap-10 -mx-7 desktop:mx-0 desktop:rounded-sm desktop:min-h-[600px]",
          {
            "justify-center": showEmailSubmitted,
          },
        )}
      >
        {showEmailSubmitted ? (
          <p className="text-white text-[24px] text-center">
            Your email has been sent, we will be in touch soon.
          </p>
        ) : (
          <>
            <p className="text-white">
              For general enquiries &amp; bulk orders, please fill out the form
              below and we will be in touch ASAP...
            </p>
            <form
              className="flex flex-col gap-5"
              action={async (formData) => {
                try {
                  setError(null);

                  if (!executeRecaptcha) {
                    await new Promise((resolve) => setTimeout(resolve, 1000));
                    if (!executeRecaptcha) {
                      setError(
                        "Security verification unavailable. Please refresh and try again.",
                      );
                      return;
                    }
                  }

                  const recaptchaToken = await executeRecaptcha("contact_form");
                  formData.append("recaptchaToken", recaptchaToken);

                  const result = await sendEmail(formData);

                  if (result.success) {
                    setShowEmailSubmitted(true);
                  } else {
                    setError(
                      result.error ||
                        "Failed to send message. Please try again.",
                    );
                  }
                } catch (err) {
                  setError("An unexpected error occurred. Please try again.");
                  console.error("Contact form error:", err);
                }
              }}
            >
              <input type="hidden" name="_honey" className="hidden" />

              <label htmlFor="fullName" className="flex flex-col gap-2">
                <span className="text-white">Name:</span>
                <input
                  type="text"
                  id="fullName"
                  name="name"
                  placeholder="Full name"
                  className="bg-white px-3 h-11 rounded text-black/80 border border-black/25"
                  autoComplete="name"
                  required
                />
              </label>

              <label htmlFor="phoneNumber" className="flex flex-col gap-2">
                <span className="text-white">Phone:</span>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phone"
                  placeholder="Phone number"
                  className="bg-white px-3 h-11 rounded text-black/80 border border-black/25"
                  autoComplete="tel"
                />
              </label>

              <label htmlFor="emailAddress" className="flex flex-col gap-2">
                <span className="text-white">Email:</span>
                <input
                  type="email"
                  id="emailAddress"
                  name="email"
                  placeholder="Email address"
                  className="bg-white px-3 h-11 rounded text-black/80 border border-black/25"
                  autoComplete="email"
                  required
                />
              </label>

              <label htmlFor="message" className="flex flex-col gap-2">
                <span className="text-white">Message:</span>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Type message here..."
                  className="bg-white px-3 py-3 h-[152px] rounded text-black/80 border border-black/25 resize-none"
                  required
                />
              </label>

              {error && <p className="text-white text-[14px]">{error}</p>}

              <ButtonType whiteBorder cssClasses="mt-5 min-[600px]:self-start">
                Submit
              </ButtonType>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default ContactFormComponent;
