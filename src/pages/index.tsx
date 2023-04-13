import { A } from "@solidjs/router";

export default function Home() {
  return (
    <div class="flex flex-col gap-8 p-8 mt-16">
      <h1 class="text-white text-4xl font-bold">This weeks playlist</h1>
      <A
        href="/playlist"
        class="relative overflow-hidden group w-full h-48 bg-center rounded-2xl"
      >
        <img
          src="/artwork/graphic.png"
          class="absolute w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <p class="absolute p-4 flex flex-col-reverse text-white text-2xl bg-black/60 w-full h-full">
          Best of 2010s
        </p>
      </A>
      <h2 class="text-white text-2xl font-bold">Your playlists</h2>
    </div>
  );
}
