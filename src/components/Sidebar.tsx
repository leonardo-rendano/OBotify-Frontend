import { HomeIcon, LibraryBig, AudioLines } from "lucide-react";
import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-72 bg-zinc-950 p-6">
      <Link
        href="/"
        className="font-semibold gap-3 text-3xl mb-6 flex items-center text-zinc-200"
      >
        <AudioLines />
        O Botify
      </Link>
      <nav className="space-y-5">
        <Link
          href="/"
          className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
        >
          <HomeIcon />
          Página inicial
        </Link>
        <Link
          href="/library"
          className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
        >
          <LibraryBig />
          + músicas
        </Link>
      </nav>
    </aside>
  );
}
