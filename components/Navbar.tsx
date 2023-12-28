"use client";
import React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import ModeToggle from "./ToggleTheme";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";


const socials = [
  {
    name: "GitHub",
    url: "https://github.com/vinceflores",
    description: "Want to Colaborate? 😅",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/vince-flores-software-engineer/",
    description: "Connect, Network, & See what I'm up to!",
  },
  {
    name: "Email",
    url: "mailto:vincegabriel.flores@gmail.com",
    description: "Resume requests and other business inquiries",
  },
];

const Navbar = () => {
  return (
    <>
      <div className=" hidden md:flex items-center justify-between px-2 ">
        <NavigationMenu className=" list-none w-full ">
          <RouteButton href="/" label="Home" />
          <RouteButton href="/projects" label="Projects" />
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-[9px] md:text-sm text-slate-400 dark:text-slate-300 dark:hover:text-white hover:text-slate-900">
              About
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-3 md:p-6 w-screen md:w-[600px] lg:w-[500px] grid-cols-2">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <Link
                      className="flex h-full w-full select-none flex-col justify-end   hover:bg-gray-400 dark:hover:bg-gray-500 rounded-md bg-gradient-to-b from-muted/50 to-muted p-3 md:p-6 no-underline outline-none focus:shadow-md"
                      href="/about"
                    >
                      <h1 className="mb-1 text-md md:text-lg text-slate-900 dark:text-white">
                        Vince Flores
                      </h1>
                      <p className="text-xs md:text-sm md:leading-tight text-muted-foreground">
                        A Computer Science Student from York University{" "}
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>
                {socials.map((social) => (
                  <ListItem
                    key={social.name}
                    href={social.url}
                    title={social.name}
                    className=" hover:bg-gray-200 dark:hover:bg-gray-700"
                  >
                    {social.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

        </NavigationMenu>
        <ModeToggle />
      </div> 
      <div className="flex md:hidden justify-between h-1/2 w-full  ">
        <NavigationMenu className=" list-none w-full ">
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-[9px] md:text-sm text-slate-300 dark:hover:text-white hover:text-slate-900">
              Menu
            </NavigationMenuTrigger>
            <NavigationMenuContent className=" w-screen p-3 grid grid-cols-3 gap-3">
                <h1 className="col-span-3 text-slate-900 dark:text-white " >Routes</h1>
              <RouteButton href="/" label="Home" />
              <RouteButton href="/projects" label="Projects" />
              <RouteButton href="/contact" label="Contact" />
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenu>
        <ModeToggle />
      </div>
    </>
  );
};

export default Navbar;

const RouteButton = ({ href, label }: { href: string; label: string }) => {
  const buttonclass =
    "text-decoration-none text-[9px] md:text-sm text-slate-400 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white ";
  return (
    <NavigationMenuItem>
      <Link href={`${href}`} legacyBehavior passHref>
        <NavigationMenuLink
          className={navigationMenuTriggerStyle() + buttonclass}
        >
          {label}
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          href={props.href}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});

ListItem.displayName = "ListItem";
