export default function Playlist() {
  return (
    <div class="relative h-[300px] overflow-hidden">
      <img
        src="/artwork/graphic.png"
        alt="Playlist banner"
        draggable={false}
        class="w-full h-full object-cover object-center select-none"
      />
      <div class="bg-gradient-to-b from-transparent to-gray-900 absolute top-0 w-full h-full"></div>
    </div>
  );
}
