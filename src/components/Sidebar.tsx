import Icon from "./Icon";
import Stoplight from "./Stoplight";
import { FiHome } from "solid-icons/fi";
import { BsPeople, BsDisc } from "solid-icons/bs";
import { useLocation, A } from "@solidjs/router";
import { JSX } from "solid-js";

export default function Sidebar() {
  return (
    <aside class="w-[300px] p-4 bg-black">
      <Stoplight />
      <nav class="flex flex-col mt-8 mx-4 gap-8">
        <Group>
          <NavItem href="/home" icon={FiHome}>
            Home
          </NavItem>
          <NavItem href="/" icon={BsDisc}>
            Playlist
          </NavItem>
          <NavItem href="/proposals" icon={BsPeople}>
            Proposals
          </NavItem>
        </Group>
        <Group title="LINKS">
          <Link
            href="https://twitter.com/PlaylistsWTF"
            image="/socials/twitter.webp"
          >
            Twitter
          </Link>
          <Link href="" image="/socials/discord.webp">
            Discord
          </Link>
          <Link href="" image="/socials/spotify.webp">
            Spotify
          </Link>
        </Group>
        <Group title="PLAYLISTS">
          <Playlist href="" image="/artwork/graphic.png">
            Best of 2010s
          </Playlist>
        </Group>
      </nav>
    </aside>
  );
}

function Group(props: { children: JSX.Element; title?: string }) {
  return (
    <div class="flex flex-col gap-4">
      {props.title && <p class="font-bold select-none">{props.title}</p>}
      <ul class="flex flex-col gap-4">{props.children}</ul>
    </div>
  );
}

function NavItem(props: { href: string; icon: Function; children: string }) {
  const location = useLocation();

  return (
    <A href={props.href}>
      <li
        style={{ color: location.pathname === props.href ? "white" : "" }}
        class="flex items-center gap-3 group text-xl font-medium hover:text-white cursor-pointer transition-colors duration-300 select-none"
      >
        <Icon icon={<props.icon size={26} />} />
        {props.children}
      </li>
    </A>
  );
}

function Link(props: { href: string; children: string; image: string }) {
  return (
    <a
      href={props.href}
      draggable={false}
      target="_blank"
      rel="noopener noreferrer"
    >
      <li class="flex items-center gap-4 text-xl font-medium hover:text-white transition-colors duration-300">
        <img
          src={props.image}
          alt={`A link to the Playlists ${props.children}} account`}
          class="rounded-lg w-8 h-8"
        />
        {props.children}
      </li>
    </a>
  );
}

function Playlist(props: { href: string; children: string; image: string }) {
  return (
    <a
      href={props.href}
      draggable={false}
      target="_blank"
      rel="noopener noreferrer"
    >
      <li class="flex items-center gap-4 text-xl font-medium hover:text-white transition-colors duration-300">
        <img
          src={props.image}
          alt={`A link to the Playlists ${props.children}} account`}
          class="w-8 h-8"
        />
        {props.children}
      </li>
    </a>
  );
}
