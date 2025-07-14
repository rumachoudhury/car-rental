import React from "react";
import { Icons } from "./Icons";

function Title({ title, subTitle, align, showUnderline = false }) {
  return (
    <div
      className={`flex flex-col justify-center items-center text-center ${
        align === "left" && "md:items-start md:text-left"
      }`}
    >
      <div className="relative inline-block pb-6">
        <h1 className="font-semibold text-4xl md:text-[40px] relative z-10">
          {title}
        </h1>

        {/* Conditionally show underline */}
        {showUnderline && (
          <Icons.underline className="absolute bottom-0 left-[54%] -translate-x-[50%] w-[280px] text-blue-500" />
        )}
      </div>

      <p className="text-sm md:text-base text-gray-500/90 mt-2 max-w-150">
        {subTitle}
      </p>
    </div>
  );
}

export default Title;
