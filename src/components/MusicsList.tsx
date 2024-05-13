'use client'
import api from "@/apiClient/api";
import { Music, Trash } from "lucide-react";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

interface IMusic {
  id: string;
  title: string;
  author: string;
  releaseDate: Date;
  keywords: string;
}

interface MusicsListProps {
  musicsList: IMusic[] 
  setMusicsList: Dispatch<SetStateAction<any>>
}

export default function MusicsList({ musicsList, setMusicsList }: MusicsListProps) {

  async function handleDeleteMusic(musicId: string) {
    try {
      await api.delete(`/musics/${musicId}`)
      let updatedMusicsList = musicsList?.filter(musics => {
        return (musics.id !== musicId)
      })
      setMusicsList(updatedMusicsList)
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <section className="grid grid-cols-3 gap-4 mt-10">
      {musicsList?.length > 0 ? musicsList?.map((musicItem: IMusic) => {
        return (
          <div
            key={musicItem.title}
            className="bg-white/10 justify-between rounded w-[350px] h-24 flex items-center gap-4 hover:bg-white/20 cursor-pointer"
          >
            <span className="h-24 w-24 flex items-center justify-center bg-zinc-800">
              <Music size={35} />
            </span>
            <div className="flex flex-col">
              <strong>{musicItem.title}</strong>
              <p className="text-sm">{musicItem.author}</p>
              <p className="text-xs mb-1">{musicItem.keywords}</p>
              <p className="text-xs mb-1">Lançamento: {new Date(musicItem.releaseDate).toLocaleDateString()}</p>
            </div>
            <button onClick={() => handleDeleteMusic(musicItem.id)}>
              <Trash className="mr-3 text-rose-500" />
            </button>
          </div>
        );
      }) : <p>Adicione suas músicas na tela <Link href="/library">+ músicas.</Link></p>}
    </section>
  );
}
