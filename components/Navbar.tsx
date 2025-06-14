"use client";

import { LogOut, Moon, Settings, Sun, User } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Avatar, AvatarImage } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";
import { SidebarTrigger } from "./ui/sidebar";

function Navbar() {
  const { theme, setTheme } = useTheme();
  console.log(theme);

  return (
    <nav className="flex justify-between p-4">
      {/* LEFT */}
      <SidebarTrigger /> {/* RIGHT */}{" "}
      <div className="flex gap-4 items-center">
        <Link href="/">Dashboard</Link>
        <Button
          variant="outline"
          size="icon"
          onClick={() => {
            theme === "dark" ? setTheme("light") : setTheme("dark");
          }}
        >
          <Moon className="block dark:hidden" />
          <Sun className="hidden dark:block" />
          <span className="sr-only">Toggle theme</span>
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage
                className="animate-in duration-100 hover:scale-110 scale-105"
                src="https://res.cloudinary.com/di81zcvbz/image/upload/t_profile/v1738162332/IMG_5581_vvr4vn.jpg"
                alt="@CK"
              />
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <User />
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings /> Settings
            </DropdownMenuItem>
            <DropdownMenuItem variant="destructive">
              <LogOut /> Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
}

export default Navbar;
