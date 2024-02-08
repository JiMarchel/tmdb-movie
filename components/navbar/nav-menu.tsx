"use client";
import { cn } from "@/lib/utils";
import { Clapperboard, Flame, MonitorPlay, TrendingUp, Tv } from "lucide-react";
import { usePathname } from "next/navigation";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";

const pathsMovies = [
  {
    title: "Discover",
    description: "Just a random movies.",
    href: "/",
    icon: MonitorPlay,
  },
  {
    title: "Popular",
    description: "List of popular movies.",
    href: "/popular/movies",
    icon: Flame,
  },
];

const pathsTv = [
  {
    title: "Discover",
    description: "Just a random TV shows.",
    href: "/tv",
    icon: MonitorPlay,
  },
  {
    title: "Popular",
    description: "List of popular TV shows.",
    href: "/popular/tv",
    icon: Flame,
  },
];

export const NavMenu = () => {
  const pathName = usePathname();

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="hover:bg-gradient-to-tl hover:from-primary/60">
            Movies <Clapperboard size={20} className="ml-1" />
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid grid-cols-2 w-80 gap-1 p-2">
              {pathsMovies.map((path) => (
                <ListItem
                  key={path.title}
                  title={
                    <>
                      {path.title} <path.icon size={15} />
                    </>
                  }
                  href={path.href}
                  className={`${
                    pathName === path.href &&
                    "bg-gradient-to-tl from-primary/90"
                  } hover:bg-gradient-to-tl hover:from-primary/60`}
                >
                  {path.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="hover:bg-gradient-to-tl hover:from-primary/60">
            TV Shows <Tv size={20} className="ml-1" />
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid grid-cols-2 w-80 gap-1 p-2">
              {pathsTv.map((path) => (
                <ListItem
                  key={path.title}
                  title={
                    <>
                      {path.title} <path.icon size={15} />
                    </>
                  }
                  href={path.href}
                  className={`${
                    pathName === path.href &&
                    "bg-gradient-to-tl from-primary/90"
                  } hover:bg-gradient-to-tl hover:from-primary/60`}
                >
                  {path.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

interface ListItemProps extends React.ComponentPropsWithoutRef<"a"> {
  title: React.ReactElement;
}

const ListItem = React.forwardRef<HTMLAnchorElement, ListItemProps>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none flex items-center gap-2">
              {title}
            </div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);

ListItem.displayName = "ListItem";
