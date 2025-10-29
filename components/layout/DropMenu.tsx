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
        <span className="flex items-center gap-1 font-medium">
          <CircleUserRound size={22} /> 
          <span className="hidden md:block" >Account</span>
        </span>
      </DropdownMenuTrigger>
      
      <DropdownMenuContent className="w-56 bg-black/80  text-white mt-8 " align="center">
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
        <DropdownMenuSeparator  />
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
