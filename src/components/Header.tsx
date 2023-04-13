import Icon from "./Icon";
import { BiRegularSearch } from "solid-icons/bi";
import { TiArrowSortedDown } from "solid-icons/ti";
export default function Header() {
  return (
    <header class="absolute top-0 left-0 p-4 z-50 flex items-center justify-between w-full">
      <div class="text-white bg-black hover:bg-black/60 transition-colors duration-300 cursor-pointer w-12 h-12 flex items-center justify-center rounded-full">
        <Icon icon={<BiRegularSearch size={26} />}></Icon>
      </div>
      <div class="bg-black hover:bg-black/60 transition-colors duration-300 cursor-pointer p-2 pr-4 rounded-full flex gap-3 items-center text-white">
        <img src="/people/sam.png" class="w-8 h-8" />
        Sam Scolari
        <Icon icon={<TiArrowSortedDown size={20} />} />
      </div>
    </header>
  );
}
