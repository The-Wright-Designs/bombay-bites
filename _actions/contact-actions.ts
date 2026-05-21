"use server";

import contactData from "@/_data/general-data.json";
import { verifyRecaptchaToken } from "@/_lib/verify-recaptcha";

const {
  contact: { email, phone },
} = contactData;

export const fetchEmail = async (recaptchaToken?: string) => {
  if (recaptchaToken) {
    const result = await verifyRecaptchaToken(recaptchaToken);
    if (!result.success)
      throw new Error(result.error || "reCAPTCHA verification failed");
  }
  return email;
};

export const fetchPhone = async (recaptchaToken?: string) => {
  if (recaptchaToken) {
    const result = await verifyRecaptchaToken(recaptchaToken);
    if (!result.success)
      throw new Error(result.error || "reCAPTCHA verification failed");
  }
  return phone;
};
