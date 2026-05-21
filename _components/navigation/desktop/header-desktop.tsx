import Link from "next/link";
import Image from "next/image";
import navData from "@/_data/nav-data.json";
import classNames from "classnames";

interface DesktopHeaderProps {
  cssClasses?: string;
}

const HeaderDesktop = ({ cssClasses }: DesktopHeaderProps) => {
  return (
    <div className={classNames("flex items-end justify-between", cssClasses)}>
      <Link
        href="/"
        className="flex flex-wrap gap-y-2 gap-x-3 items-center hover:opacity-90"
      >
        <Image
          src="/logo/bombay-bites-logo.png"
          alt="Bombay Bites logo"
          width={80}
          height={69}
        />
        <h1 className="text-[40px] font-semibold flex flex-col">
          Bombay Bites
          <span className="text-[14px] font-extralight">Plettenberg Bay</span>
        </h1>
      </Link>
      <nav className="flex gap-3 items-center">
        {navData.map((item) => (
          <Link
            key={item.title}
            className={classNames(
              "text-paragraph",
              item.title === "View Menu"
                ? "px-1.5 py-1.5 bg-red text-white border-2 border-red font-normal rounded-sm hover:bg-transparent hover:text-black"
                : "text-black font-extralight desktop:hover:text-red",
            )}
            href={item.url}
          >
            {item.title}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default HeaderDesktop;
