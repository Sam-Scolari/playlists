import { Outlet } from "@solidjs/router";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import PlaylistBar from "../components/PlaylistBar";

export default function Layout() {
  return (
    <div class="flex flex-col overflow-hidden bg-gray-900 w-full h-full max-w-[1300px] max-h-[800px] max-[1600px]:rounded-none max-[1600px]:max-h-none max-[1600px]:max-w-none rounded-2xl drop-shadow-[0_25px_25px_rgb(0_0_0_/_0.6)]">
      <div class="flex h-full">
        <Sidebar />
        <div class="w-full">
          <Header />
          <Outlet />
        </div>
      </div>
      <PlaylistBar />
    </div>
  );
}
