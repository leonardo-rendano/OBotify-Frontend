'use client'
import api from '@/apiClient/api';
import Greetings from '@/components/Greetings';
import MusicsList from '@/components/MusicsList';
import { FormEvent, useEffect, useState } from 'react';

interface IMusic {
  id: string;
  title: string;
  author: string;
  releaseDate: Date;
  keywords: string;
}

export default function Home() {
  const [musicInfo, setMusicInfo] = useState<string>('')
  const [musicsList, setMusicsList] = useState<IMusic[]>([])

  async function handleSearchMusic(event: FormEvent) {
    event.preventDefault();
    try {
      const response = await api.get(`/musics/${musicInfo}`);
      setMusicsList(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    async function getMusicsList() {
      try {
        const response = await api.get("/musics");
        setMusicsList(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    getMusicsList()
  }, []);

  return (
    <div className="flex flex-col">
      <main className="flex-1 p-6">
        <Greetings />
        <form onSubmit={handleSearchMusic}>
          <input
            type="text"
            value={musicInfo}
            onChange={e => setMusicInfo(e.target.value)}
            placeholder="O que você quer ouvir?"
            className="mt-8 text-sm p-4 rounded-full w-80 h-10 bg-zinc-800 hover:border"
          />
        </form>
        <MusicsList musicsList={musicsList} setMusicsList={setMusicsList} />
      </main>
    </div>
  );
}
