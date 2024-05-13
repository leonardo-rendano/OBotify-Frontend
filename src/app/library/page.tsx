'use client'
import api from "@/apiClient/api";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useRouter } from 'next/navigation'

const createMusicvalidationSchema = z.object({
  title: z.string().min(1, 'O campo Título é obrigatório.'),
  author: z.string().min(1, 'O campo Autor é obrigatório.'),
  releaseDate: z.coerce.date().refine((date) => date < new Date(), {
    message: 'A data de lançamento não pode ser maior que a data atual.'
  }),
  keywords: z.string().min(1, 'O campo Palavras chave é obrigatório.'),
});

type CreateMusicvalidationSchema = z.infer<typeof createMusicvalidationSchema>;

export default function LibraryPage() {
  const { register, handleSubmit, formState: { errors } } = useForm<CreateMusicvalidationSchema>({
    resolver: zodResolver(createMusicvalidationSchema),
  });
  const router = useRouter()


  async function handleCreateMusic(newMusic: CreateMusicvalidationSchema) {
    try {
        await api.post('/musics', newMusic)
        router.push('/')
    } catch (error) {
        console.log(error)
    }
  }

  return (
    <main className="flex-1 p-6">
      <h1 className="font-semibold text-3xl mb-5">+ músicas para você escutar.</h1>
    
      <form
        onSubmit={handleSubmit(handleCreateMusic)}
        className="flex flex-col items-right gap-4 p-4 w-[490px]"
      >
        <input
          className=" text-sm p-4 rounded-full w-[450px] h-10 bg-zinc-800"
          type="text"
          placeholder="Título da música"
          {...register("title")}
        />
        {errors.title && <span className="text-rose-500">{errors.title.message}</span>}

        <input
          className=" text-sm p-4 rounded-full w-[450px] h-10 bg-zinc-800"
          type="text"
          placeholder="Autor"
          {...register("author")}
        />
        {errors.author && <span className="text-rose-500">{errors.author.message}</span>}

        <input
          className="text-sm p-4 rounded-full w-[450px] h-10 bg-zinc-800"
          type="date"
          placeholder="Data de lançamento"
          {...register("releaseDate")}
        />
        {errors.releaseDate && <span className="text-rose-500">{errors.releaseDate.message}</span>}

        <input
          className=" text-sm p-4 rounded-full w-[450px] h-10 bg-zinc-800"
          type="text"
          placeholder="Palavras chave"
          {...register("keywords")}
        />
        {errors.keywords && <span className="text-rose-500">{errors.keywords.message}</span>}

        <div className="mt-3">
          <button
            type="submit"
            className="border rounded-full h-10 w-32 border-green-700 bg-green-700 hover:bg-green-800"
          >
            Adicionar
          </button>
        </div>
      </form>
    </main>
  );
}
