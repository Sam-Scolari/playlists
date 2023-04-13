import { For } from "solid-js";

export default function Playlist() {
  const submissions = [
    {
      title: "Safe And Sound",
      image: "/albums/in-a-tidal-wave-of-mystery.png",
      artist: "Capital Cities",
      album: "In a Tidal Wave of Mystery",
      submittedBy: { name: "boosh0x.eth", image: "/people/boosh0x.png" },
    },
    {
      title: "Let You Down",
      artist: "NF",
      image: "/albums/perception.png",
      album: "Perception",
      submittedBy: { name: "Sam Scolari", image: "/people/sam.png" },
    },
    {
      title: "Dark Horse",
      artist: "Katy Perry",
      image: "/albums/prism.png",
      album: "Prism",
      submittedBy: { name: "Noun 721", image: "/people/721.png" },
    },
    {
      title: "Wake Me Up",
      artist: "Avicii",
      image: "/albums/true.png",
      album: "True",
      submittedBy: { name: "Noun 834", image: "/people/834.png" },
    },
  ];

  return (
    <div class="flex flex-col">
      <div class="relative h-[300px]">
        <img
          src="/artwork/graphic.png"
          alt="Playlist banner"
          draggable={false}
          class="w-full h-full object-cover object-center select-none"
        />
        <div class="bg-gradient-to-b from-transparent to-gray-900 absolute top-0 w-full h-full"></div>
        <div class="absolute -bottom-8 left-8 overflow-hidden flex gap-6 items-center">
          <div class="w-32">
            <img
              src="/vinyls/black.png"
              class="relative z-10"
              draggable={false}
            />
            <div class="w-32 h-32 absolute top-0 flex items-center justify-center">
              <img
                src="/artwork/graphic.png"
                class="w-[60%] h-[60%] object-cover object-center"
                draggable={false}
              />
            </div>
          </div>
          <h1 class="text-white text-6xl font-bold">Best of 2010s</h1>
        </div>
      </div>
      <div class="flex flex-col gap-8 p-8 mt-8">
        <div class="flex gap-4 items-center">
          <button class="px-4 py-2 h-min bg-green text-black font-bold rounded-full hover:bg-green/75 transition-colors duration-300">
            Submit
          </button>
          <p>
            This playlists’ theme is{" "}
            <span class="text-white">Best of 2010s</span> for the week of{" "}
            <span class="text-white">May 2nd, 2023</span>. Submit and vote on
            your favorite songs that you think fit this theme and should be
            included in the final playlist!
          </p>
        </div>
        <table class="w-full">
          <thead class="--border-2 border-b-gray-500">
            <tr>
              <th class="text-left">#</th>
              <th class="text-left">Title</th>
              <th class="text-left">Album</th>
              <th class="text-left">Submitted By</th>
            </tr>
          </thead>
          <tbody>
            <For each={submissions}>
              {(submission, index) => (
                <tr>
                  <td>{index() + 1}</td>
                  <td class="flex gap-3 items-center">
                    <img src={submission.image} class="w-12 h-12" />
                    <div class="flex flex-col gap-1">
                      <p class="text-white">{submission.title}</p>
                      <p class="text-sm">{submission.artist}</p>
                    </div>
                  </td>
                  <td>{submission.album}</td>
                  <td class="flex gap-3 items-center">
                    <img
                      src={submission.submittedBy.image}
                      class="w-8 h-8 rounded-full"
                    />
                    {submission.submittedBy.name}
                  </td>
                </tr>
              )}
            </For>
          </tbody>
        </table>
      </div>
    </div>
  );
}
