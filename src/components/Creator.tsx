import { ReactNode } from "react";

export default function Creator({
  isOpen,
  link = "#",
  creator = "Creator Placeholder",
  children,
}: {
  children?: ReactNode;
  isOpen?: boolean;
  link?: string;
  creator?: string;
}) {
  return (
    <div className="flex flex-col items-center pt-1">
      <a
        title={creator}
        className={`hover:cursor-pointer tracking-wide transition-all ease-in duration-1000 text-xl ${
          isOpen
            ? "text-white [&>svg]:fill-zinc-200 [text-shadow:_0_5px_5px_rgb(0_0_0_/_70%)]"
            : "text-zinc-700 [&>svg]:fill-zinc-700"
        }`}
        href={link}
        target="_self"
      >
        {creator}
      </a>
      {children}
    </div>
  );
}
