"use client";

import { Hero } from "@/components/hero";
import { MoviesCard } from "@/components/movies-card";
import { PaginationMovie } from "@/components/pagination";
import { Wrapper } from "@/components/wrapper";
import { useSearchMovies, useTrendingMovies } from "@/queries";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

const SearchQueryPage = () => {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("query");
  const page = searchParams.get("page") || "1";
  const { data, isPending, refetch } = useSearchMovies(
    searchQuery,
    parseInt(page)
  );
  const { data: trendingData, isPending: trendingPending } =
    useTrendingMovies();

  useEffect(() => {
    refetch();
  }, [refetch, page]);
  console.log(data);

  return (
    <Wrapper>
      <Hero moviesData={trendingData?.results} isPending={trendingPending} />
      <MoviesCard datas={data?.results} loading={isPending} />
      {data?.results.length === 0 && (
        <div className="flex flex-col text-center">
          <p className="underline font-medium text-lg">{searchQuery}</p>
          <h1 className="text-xl md:text-2xl font-bold">Not found</h1>
        </div>
      )}
      <PaginationMovie
        query={parseInt(page)}
        currentPath={`/search?query=${searchQuery}&`}
        totalPages={data?.total_pages}
      />
    </Wrapper>
  );
};

export default SearchQueryPage;
