'use client'
import { Music } from "lucide-react";

interface IMusic {
  id: string;
  title: string;
  author: string;
  releaseDate: string;
  keywords: string;
}

interface MusicsListProps {
  musicsList: IMusic[] | null
}

export default function MusicsList({ musicsList }: MusicsListProps) {
  return (
    <section className="grid grid-cols-3 gap-4 mt-10">
      {musicsList?.map((musicItem: IMusic) => {
        return (
          <div
            key={musicItem.title}
            className="bg-white/10 rounded w-80 h-16 flex items-center gap-4 hover:bg-white/20 cursor-pointer"
          >
            <span className="h-16 w-16 flex items-center justify-center bg-zinc-800">
              <Music />
            </span>
            <div className="flex flex-col">
              <strong>{musicItem.title}</strong>
              <p className="text-sm">{musicItem.author}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
}
