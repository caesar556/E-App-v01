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

export default function DropMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <span className="flex gap-1 font-medium">
          <CircleUserRound /> Account
        </span>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="center">
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
        <DropdownMenuItem className="bg-red-800 text-white">
          Log out
          <DropdownMenuShortcut>
            <LogOut />
          </DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
