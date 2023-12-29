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
import { Navigation } from "lucide-react";
import logo from "../lib/logo";
import Image from "next/image";
import { AlignJustify, Mail, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const socials = [
  {
    name: "GitHub",
    url: "https://github.com/vinceflores",
    img: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWdpdGh1YiI+PHBhdGggZD0iTTE1IDIydi00YTQuOCA0LjggMCAwIDAtMS0zLjVjMyAwIDYtMiA2LTUuNS4wOC0xLjI1LS4yNy0yLjQ4LTEtMy41LjI4LTEuMTUuMjgtMi4zNSAwLTMuNSAwIDAtMSAwLTMgMS41LTIuNjQtLjUtNS4zNi0uNS04IDBDNiAyIDUgMiA1IDJjLS4zIDEuMTUtLjMgMi4zNSAwIDMuNUE1LjQwMyA1LjQwMyAwIDAgMCA0IDljMCAzLjUgMyA1LjUgNiA1LjUtLjM5LjQ5LS42OCAxLjA1LS44NSAxLjY1LS4xNy42LS4yMiAxLjIzLS4xNSAxLjg1djQiLz48cGF0aCBkPSJNOSAxOGMtNC41MSAyLTUtMi03LTIiLz48L3N2Zz4=",
    imgJSX: <Github />,
    description: "Want to Colaborate? 😅",
  },
  {
    name: "LinkedIn",
    img: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWxpbmtlZGluIj48cGF0aCBkPSJNMTYgOGE2IDYgMCAwIDEgNiA2djdoLTR2LTdhMiAyIDAgMCAwLTItMiAyIDIgMCAwIDAtMiAydjdoLTR2LTdhNiA2IDAgMCAxIDYtNnoiLz48cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSIxMiIgeD0iMiIgeT0iOSIvPjxjaXJjbGUgY3g9IjQiIGN5PSI0IiByPSIyIi8+PC9zdmc+",
    url: "https://www.linkedin.com/in/vince-flores-software-engineer/",
    imgJSX: <Linkedin />,
    description: "Connect, Network, & See what I'm up to!",
  },
  {
    name: "Email",
    img: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLW1haWwiPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIxNiIgeD0iMiIgeT0iNCIgcng9IjIiLz48cGF0aCBkPSJtMjIgNy04Ljk3IDUuN2ExLjk0IDEuOTQgMCAwIDEtMi4wNiAwTDIgNyIvPjwvc3ZnPg==",
    imgJSX: <Mail />,
    url: "mailto:vincegabriel.flores@gmail.com",
    description: "Resume requests and business inquiries",
  },
];

const Navbar = () => {
  const { avatarLogo } = logo;
  const socialsList = socials.map((social) => (
    <ListItem
      key={social.name}
      href={social.url}
      title={social.name}
      img={social.img}
      imgJSX={social.imgJSX}
      className=" hover:bg-gray-200 dark:hover:bg-gray-700"
    >
      {social.description}
    </ListItem>
  ));

  const endBtns = () => {
    return (
      <div className="flex justify-center items-center">
        <Link href={socials[0].url}>
          <Button size={"icon"} className="bg-none   " variant={"ghost"}>
            <Github size={18} />
          </Button>
        </Link>
        <ModeToggle />
      </div>
    );
  };

  return (
    <>
      <div className=" hidden md:flex items-center justify-between px-2 py-3">
        <NavigationMenu className=" list-none w-full ">
          <NavLogoButton />
          <RouteButton href="/" label="Home" />
          <RouteButton href="/projects" label="Projects" />
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-[9px] md:text-sm text-slate-500 dark:text-slate-300 dark:hover:text-white hover:text-slate-900">
              About
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-3 md:p-6 w-screen md:w-[600px] lg:w-[500px] grid-cols-2">
                <li className="row-span-3 mb-3">
                  <NavigationMenuLink asChild>
                    <Link
                      className="flex h-full w-full select-none flex-col justify-end   hover:bg-gray-400 dark:hover:bg-gray-500 rounded-md bg-gradient-to-b from-muted/50 to-muted p-3 md:p-6 no-underline outline-none focus:shadow-md"
                      href="/about"
                    >
                      <Image
                        src={avatarLogo}
                        alt="logo"
                        className="w-[140px]  -translate-x-9 mb-3"
                      />
                      <h1 className="mb-1 text-md md:text-lg text-slate-900 dark:text-white">
                        Vince Flores
                      </h1>
                      <p className="text-xs md:text-sm md:leading-tight text-muted-foreground">
                        A Computer Science Student from York University{" "}
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>
                {socialsList}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenu>
        {endBtns()}
      </div>
      {/* Mobile */}
      <div className="flex md:hidden justify-between h-1/2 w-full py-3 ">
        <NavigationMenu className=" list-none w-full ">
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-[9px] md:text-sm text-slate-00 dark:hover:text-white hover:text-slate-900">
              <AlignJustify  size={18}/>
            </NavigationMenuTrigger>
            <NavigationMenuContent className=" w-screen p-3 bg-white dark:bg-slate-900 grid grid-cols-3 gap-3">
              <h1 className="col-span-3 text-slate-900 dark:text-white ">
                Routes
              </h1>
              <RouteButton href="/" label="Home" />
              <RouteButton href="/projects" label="Projects" />
              <RouteButton href="/about" label="About" />

              <ul className="grid gap-3 p-3 md:p-6 w-screen md:w-[600px] lg:w-[500px grid-cols-2">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <Link
                      className="flex h-full w-full select-none flex-col justify-end   hover:bg-gray-400 dark:hover:bg-gray-500 rounded-md bg-gradient-to-b from-muted/50 to-muted p-3 md:p-6 no-underline outline-none focus:shadow-md"
                      href="/about"
                    >
                      <Image
                        src={avatarLogo}
                        alt="logo"
                        className="w-[140px] -translate-x-9 mb-3"
                      />
                      <h1 className="mb-1 text-md md:text-lg text-slate-900 dark:text-white">
                        Vince Flores
                      </h1>
                      <p className="text-xs md:text-sm md:leading-tight text-muted-foreground">
                        A Computer Science Student from York University{" "}
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>
                {socialsList}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenu>

        {/* <ModeToggle /> */}
        {endBtns()}
      </div>
    </>
  );
};

export default Navbar;

const RouteButton = ({ href, label }: { href: string; label: string }) => {
  const buttonclass =
    "text-decoration-none text-[9px] md:text-sm text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white ";
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
  React.ComponentPropsWithoutRef<"a"> & { img: string; imgJSX: JSX.Element }
>(({ className, title, children, img, imgJSX, ...props }, ref) => {
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
          {/* <Image src={img} alt={"logo"} className="text-white" width={20} height={20} /> */}
          {imgJSX}
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

const NavLogoButton = () => {
  const { light, dark } = logo;
  const imageWidth = "w-[1rem] h";
  return (
    <NavigationMenuItem>
      <NavigationMenuLink
        asChild
        className="flex justify-center items-center dark:hover:bg-slate-800 hover:bg-slate-300 rounded-md p-3"
      >
        <Link href={"/"} className="flex  justify-center items-center gap-1">
          <Image
            src={light}
            className="dark:hidden w-[20px] h-[16px] "
            alt="VF logo"
          />
          <Image
            src={dark}
            className="hidden dark:block outline w-[20px] h-[16px]"
            alt="VF logo"
          />
          <h1 className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white text-[12px]">
            Vince Flores
          </h1>
        </Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};
