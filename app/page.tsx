"use client";
import { Hero } from "@/components/hero";
import { MoviesCard } from "@/components/movies-card";
import { PaginationMovie } from "@/components/pagination";
import { Wrapper } from "@/components/wrapper";
import { useNowPlayingMovies, useTrendingMovies } from "@/queries";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
export default function Home() {
  const params = useSearchParams();
  const getPageParams = params.get("page") || "1";
  const { data, isPending, refetch } = useNowPlayingMovies(
    parseInt(getPageParams)
  );
  const { data: trendingData, isPending: trendingPending } =
    useTrendingMovies();

    useEffect(() => {
      refetch()
    },[refetch, getPageParams])
    
  return (
    <Wrapper className="overflow-hidden">
      <Hero moviesData={trendingData?.results} isPending={trendingPending} />
      <MoviesCard datas={data?.results} loading={isPending} />
      <PaginationMovie
        query={parseInt(getPageParams)}
        currentPath="/?"
        totalPages={data?.total_pages}
      />
    </Wrapper>
  );
}
