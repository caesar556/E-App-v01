import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  CircleUserRound,
  Settings,
  LogOut,
  Headset,
  GithubIcon,
} from "lucide-react";

import Image from "next/image";

export default function DropMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Image
          src="/images/product1.jpg"
          alt="profile image "
          width={40}
          height={40}
        />
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className="w-56 bg-black/80  text-white mt-8 "
        align="center"
      >
        <DropdownMenuLabel>manage Account</DropdownMenuLabel>
        <DropdownMenuGroup>
          <Link href="/profile">
            <DropdownMenuItem>
              Profile
              <DropdownMenuShortcut>
                <CircleUserRound />
              </DropdownMenuShortcut>
            </DropdownMenuItem>
          </Link>
          <DropdownMenuItem>
            Settings
            <DropdownMenuShortcut>
              <Settings />
            </DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          GitHub
          <DropdownMenuShortcut>
            <GithubIcon />
          </DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          Support
          <DropdownMenuShortcut>
            <Headset />
          </DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="bg-red-700">
          Log out
          <DropdownMenuShortcut>
            <LogOut />
          </DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
