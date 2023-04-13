export default function PlaylistBar() {
  return (
    <div class="bg-gray-700 p-4 flex items-center gap-64  w-full border-gray-500 border-t-[1px]">
      <div class="flex gap-4">
        <img src="/artwork/graphic.png" class="w-16 h-16 object-cover" />
        <div class="flex flex-col justify-center gap-1">
          <p class="text-white whitespace-nowrap">Best of 2010s</p>
          <p class="text-sm whitespace-nowrap">May 2nd, 2023</p>
        </div>
      </div>
      <div class="flex flex-col items-center justify-evenly text-white h-full text-lg w-full">
        Now Submitting
        <div class="flex gap-2 text-gray-300 text-sm w-full items-center whitespace-nowrap">
          May 2nd
          <div class="rounded-full h-1.5 w-full bg-gray-500 overflow-hidden">
            <div class="h-full w-1/2 bg-white"></div>
          </div>
          May 7th
        </div>
      </div>
      <div class="w-32"></div>
    </div>
  );
}
