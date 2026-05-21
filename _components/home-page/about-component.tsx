import Image from "next/image";
import SectionHeading from "@/_components/ui/section-heading";
import ianImage from "@/public/images/team/ian.jpg";

const AboutComponent = () => {
  return (
    <div className="grid gap-10 min-[1000px]:grid-cols-2">
      <div className="flex flex-col gap-10">
        <SectionHeading heading="About" cssClasses="w-full" />
        <p>
          Milli and Ian have been enthusiastic home cooks for many years and
          have a particular interest in Asian food and more specifically the
          wonderful curries on India. They launched Bombay Bites in November
          2025, delivering a variety of{" "}
          <strong>
            home cooked curries to customers in the Plettenberg Area
          </strong>
          .
        </p>
        <p>
          In January of 2026 they were offered{" "}
          <strong>a shop at Market off Main</strong> and launched their outlet
          there in March.
        </p>
        <p>
          They are both passionate about quality ingredients and sourcing the
          best of Indian spices to create their curries.
        </p>
        <p>
          In addition to providing authentic curries at Market off Main,{" "}
          <strong>
            they also do takeaways as well as catering for private functions
          </strong>{" "}
          - where they are delighted to provide any curry your heart may desire.
          Please use the contact tab for any enquiries for private catering.
        </p>
      </div>
      <div className="grid gap-10 min-[375px]:grid-cols-2 min-[375px]:gap-7 min-[375px]:h-[75vw] min-[1000px]:h-full">
        <div className="relative rounded-sm aspect-square min-[375px]:aspect-auto">
          <Image
            src="/images/team/millie"
            alt="Millie"
            fill
            className="object-cover"
            sizes="(max-width:1000px)50vw,350px"
          />
        </div>
        <div className="relative rounded-sm aspect-square min-[375px]:aspect-auto">
          <Image
            src={ianImage}
            alt="Ian"
            fill
            className="object-cover"
            sizes="(max-width:1000px)50vw,350px"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutComponent;
