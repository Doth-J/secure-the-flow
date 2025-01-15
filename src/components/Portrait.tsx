import React, { ReactNode } from "react";

export default function Portrait({
  title = "Title Placeholder",
  isOpen,
  children,
  height = "350px",
  portaitClassname,
  titleClassname,
}: {
  children?: ReactNode;
  title?: string;
  width?: string;
  height?: string;
  isOpen?: boolean;
  portaitClassname?: string;
  titleClassname?: string;
}) {
  return (
    <div className="flex flex-col justify-center items-center z-0 gap-4 mt-5">
      <div
        className={`bg-zinc-900 aspect-video rounded-md flex justify-center items-center flex-col transition-all duration-1000 ease-in ${portaitClassname}`}
        style={{ height }}
      >
        {children ?? "Portrait Placeholder "}
      </div>
      <h1
        className={`pt-2 text-5xl text-center m-0 tracking-wider transition-all ease-in duration-1000 rounded-full p-2 ${
          isOpen
            ? "text-white [text-shadow:_0_5px_10px_rgb(0_0_0_/_70%)] "
            : "text-zinc-600"
        } ${titleClassname}`}
      >
        {title}
      </h1>
    </div>
  );
}
