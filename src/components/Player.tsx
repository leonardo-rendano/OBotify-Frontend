import { Play, Repeat, Shuffle, SkipBack, SkipForward } from "lucide-react";

export default function Player() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center gap-3">
        <Shuffle size={20} className="text-zinc-200" />
        <SkipBack size={20}  className="text-zinc-200" />
        <button className="w-10 h-10 flex items-center justify-center pl-1 ml-auto rounded-full bg-white text-black ">
          <Play size={20}  />
        </button>
        <SkipForward size={20}  className="text-zinc-200" />
        <Repeat size={20}  className="text-zinc-200" />
      </div>
    </div>
  );
}
