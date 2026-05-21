import classNames from "classnames";

export const buttonStyles = (
  cssClasses?: string,
  disabled?: boolean,
  pending?: boolean,
  redButton?: boolean,
  whiteBorder?: boolean,
) =>
  classNames(
    "border-2 flex min-w-[150px] text-paragraph items-center uppercase font-normal text-center px-7 py-3 justify-center ease-in-out duration-300 rounded-md phone:px-10",
    cssClasses,
    {
      "opacity-50 cursor-not-allowed": pending || disabled,
      "hover:cursor-pointer": !(disabled || pending),
      "bg-red text-white": redButton,
      "border-white": whiteBorder,
      "border-brown": !whiteBorder,
      "desktop:hover:bg-white desktop:hover:text-red":
        redButton && !(disabled || pending),
      "bg-beige text-black": !redButton,
      "desktop:hover:bg-red desktop:hover:text-white desktop:hover:border-red":
        !redButton && !whiteBorder && !(disabled || pending),
      "desktop:hover:bg-red desktop:hover:text-white desktop:hover:border-white":
        !redButton && whiteBorder && !(disabled || pending),
    },
  );
