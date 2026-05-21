import classNames from "classnames";

interface Props {
  heading: string;
  cssClasses?: string;
}

const SectionHeading = ({ heading, cssClasses }: Props) => {
  return (
    <div
      className={classNames(
        "border-b-4 border-red pb-2 inline-block",
        cssClasses,
      )}
    >
      <h2>{heading}</h2>
    </div>
  );
};

export default SectionHeading;
