"use client";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useRef, useState } from "react";
import { Input } from "./ui/input";

interface PaginationMovieProps {
  query: number;
  currentPath: string;
  totalPages: number;
}
export function PaginationMovie({
  query,
  currentPath,
  totalPages,
}: PaginationMovieProps) {
  const router = useRouter();
  const [page, setPage] = useState(query);
  const refInput = useRef<HTMLInputElement>(null);

  const handlePageChange = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages || newPage === page) return;
    setPage(newPage);
    router.push(`${currentPath}page=${newPage}`);
  };

  const nextClick = () => {
    handlePageChange(page + 1);
  };

  const prevClick = () => {
    handlePageChange(page - 1);
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let newPage = parseInt(refInput.current?.value!);
    setPage(newPage);
    router.push(`${currentPath}page=${newPage}`);
  };

  return (
    <Pagination className="mt-5 mb-10">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious onClick={prevClick} />
        </PaginationItem>
        <form className="flex items-center mx-2" onSubmit={onSubmit}>
          <Input
            id="page"
            className="max-w-7 border-none px-0 focus-visible:ring-transparent "
            defaultValue={page}
            ref={refInput}
          />
          <label htmlFor="page" className="cursor-pointer"> /{totalPages}</label>
        </form>
        <PaginationItem>
          <PaginationNext onClick={nextClick} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
