import React from "react";
import clsx from "clsx";

const Button = ({ id, title, rightIcon, leftIcon, containerClass }) => {
  return (
    <button
      id={id}
      className={clsx(
        "group relative z-10 w-fit cursor-pointer overflow-hidden border-none bg-darkPurple rounded-full   px-12 py-2.5",
        containerClass
      )}
    >
      {leftIcon}

      <span className="relative inline-flex overflow-hidden font-general text-xs capitalize">
        <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:translate-y-[-210%] group-hover:skew-y-12 text-base">
          {title}
        </div>
        <div className="absolute translate-y-[214%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0 text-base">
          {title}
        </div>
      </span>

      {rightIcon}
    </button>
  );
};

export default Button;
