"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LogOut } from "lucide-react";
import NavItems from "./NavItems";

function DropdownMenuDemo() {
  const router = useRouter();
  const handleSignOut = async () => {
    router.push("/signin");
  };

  const user = { name: "Ashish Sharma", email: "ashishnitro5@gmail.com" };
  //  const initials = user.name.split(' ').map(n => n[0]).join('').toUpperCase();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex item-center gap-3 text-gray-4 hover:text-green-400"
        >
          <Avatar className="h-8 w-8">
            <AvatarImage src="https://avatars.githubusercontent.com/u/94678815?v=4" />
            <AvatarFallback className="bg-green-500 text-green-900 text-sm font-bold">
              {user.name[0]}
            </AvatarFallback>
          </Avatar>
          <div className="hidden md:flex flex-col item-start">
            <span className="test-base font-medium text-gray-400 ">
              {user.name}
            </span>
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="text-gray-400 ">
        <DropdownMenuLabel>
          <div className="flex relative flex-center gap-3 py-2 px-2">
            <Avatar className="h-8 w-8">
              <AvatarImage src="https://avatars.githubusercontent.com/u/94678815?v=4" />
              <AvatarFallback className="bg-green-500  text-green-900 text-sm font-bold">
                {user.name[0]}
              </AvatarFallback>
            </Avatar>
            <div className="flex  flex-col">
              <span className="test-base font-medium text-gray-400 ">
                {user.name}
              </span>
              <span className="test-sm text-gray-500 ">{user.email}</span>
            </div>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-gray-500" />
        <DropdownMenuItem
          onClick={handleSignOut}
          className="text-gray-100 text-sm font-medium focus:bg-transparent focus:text-red-600  transition-colors cursor-pointer"
        >
          <LogOut className="h-4 w-4 mr-2 sm-block " />
          Logout
        </DropdownMenuItem>
        <DropdownMenuSeparator className="hidden sm:block bg-gray-500" />
        <nav className="sm:hidden">
          <NavItems />
        </nav>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
export default DropdownMenuDemo;
