import React from "react";
import clsx from "clsx";
import Link from "next/link";

const Button = ({
  id,
  title,
  rightIcon,
  leftIcon,
  containerClass,
  href,
  onClick,
  type = "button",
  disabled = false,
  ariaLabel,
}) => {
  return (
    <button
      id={id}
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={clsx(
        "group relative z-10 w-fit cursor-pointer overflow-hidden border-none bg-darkPurple rounded-full   px-12 py-2.5",
        containerClass
      )}
    >
      {leftIcon}

      {href ? (
        <Link
          href={href}
          className="relative inline-flex overflow-hidden font-general text-xs capitalize"
        >
          <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:translate-y-[-240%] group-hover:skew-y-12 text-base">
            {title}
          </div>
          <div className="absolute translate-y-[234%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0 text-base">
            {title}
          </div>
        </Link>
      ) : (
        <div className="relative inline-flex overflow-hidden font-general text-xs capitalize">
          <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:translate-y-[-240%] group-hover:skew-y-12 text-base">
            {title}
          </div>
          <div className="absolute translate-y-[234%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0 text-base">
            {title}
          </div>
        </div>
      )}

      {rightIcon}
    </button>
  );
};

export default Button;
