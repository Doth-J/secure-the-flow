import { Dispatch, SetStateAction } from "react";

export default function Lamp({
  width = 600,
  height = 400,
  isOpen,
  setOpen,
}: {
  height?: number;
  width?: number;
  isOpen: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <div
      className="relative w-full flex flex-col justify-center items-center hover:cursor-pointer transition-all duration-1000"
      onClick={() => setOpen(!isOpen)}
      title={isOpen ? "Turn off lamp" : "Turn on lamp"}
    >
      <div
        className={`relative w-3 h-6 bg-zinc-700 border-zinc-600 border-t-[1px] border-x-[1px] rounded-t-md z-20 ${
          isOpen ? "flicker-on" : "flicker-off"
        }`}
      ></div>
      <div
        className={`lamp relative h-3 bg-zinc-700 border-zinc-600 border-t-[1px] border-x-[1px] rounded-t-md z-20 ${
          isOpen ? "flicker-on " : "flicker-off"
        }`}
        style={{ width: width + "px", minWidth: width + "px" }}
      ></div>
      <div
        className={`absolute top-[42px] left-1/2 blur-sm opacity-80 z-10 light-beam ${
          isOpen ? "flicker-in" : "flicker-out"
        }`}
        style={{ width: width + "px", height: height + "px" }}
      ></div>
    </div>
  );
}
