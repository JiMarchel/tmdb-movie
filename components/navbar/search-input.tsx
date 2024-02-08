"use client";
import { Search } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { FormEvent, useRef } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export const SearchInput = () => {
  const searchRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const params = useSearchParams();
  const search = params.get("query") as string;
  const pathName = usePathname();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let inputValue = searchRef.current?.value;
    if (!inputValue) return;
    if (["/tv", "/popular/tv", "/search/tv"].includes(pathName)) {
      router.push(`/search/tv?query=${inputValue}&page=1`);
    } else {
      router.push(`/search/movies?query=${inputValue}&page=1`);
    }
  };

  return (
    <form className="flex items-center sm:max-w-xs md:max-w-sm lg:max-w-lg xl:max-w-xl sm:justify-center relative mx-1 sm:mx-auto" onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Search.."
        name="search"
        className="w-full  rounded-lg"
        ref={searchRef}
        defaultValue={search}
      />
      <Button
        size="icon"
        className="absolute right-2 hover:bg-transparent"
        variant="ghost"
        type="submit"
      >
        <Search />
      </Button>
    </form>
  );
};
