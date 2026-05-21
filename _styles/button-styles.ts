import classNames from "classnames";

export const buttonStyles = (
  cssClasses?: string,
  disabled?: boolean,
  pending?: boolean,
  redButton?: boolean,
  whiteBorder?: boolean,
) =>
  classNames(
    "border-2 flex text-paragraph items-center uppercase font-normal text-center px-7 py-3 justify-center ease-in-out duration-300 rounded-md phone:px-10",
    cssClasses,
    {
      "opacity-50 cursor-not-allowed": pending || disabled,
      "hover:cursor-pointer": !(disabled || pending),
      "bg-red text-white": redButton,
      "border-white": redButton && whiteBorder,
      "border-brown": redButton && !whiteBorder,
      "desktop:hover:bg-white desktop:hover:text-red":
        redButton && !(disabled || pending),
      "bg-beige text-black border-brown": !redButton,
      "desktop:hover:bg-red desktop:hover:text-white desktop:hover:border-red":
        !redButton && !(disabled || pending),
    },
  );
