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
  ShoppingBag,
} from "lucide-react";

import Image from "next/image";

export default function DropMenu({ user }) {
  return (
    <DropdownMenu >
      <DropdownMenuTrigger asChild>
        <Image
          src={user.data.user.profileImage}
          alt="profile image "
          width={50}
          height={50}
          className="rounded-full"
        />
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className="w-56 bg-black/80 shadow-lg  rounded-lg  text-white mt-8 border-none"
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
          <Link href="/orders">
            <DropdownMenuItem>
              Orders
              <DropdownMenuShortcut>
                <ShoppingBag />
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
        <DropdownMenuSeparator className="border border-gray-700" />
        <DropdownMenuItem>
          Support
          <DropdownMenuShortcut>
            <Headset />
          </DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuSeparator className="border border-gray-700 mb-2" />
        <DropdownMenuItem className="text-red-600">

          Log out
          <DropdownMenuShortcut>
            <LogOut />
          </DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
