"use client";

import { Hero } from "@/components/hero";
import { MoviesCard } from "@/components/movies-card";
import { PaginationMovie } from "@/components/pagination";
import { Wrapper } from "@/components/wrapper";
import { usePopularMovies, useTrendingMovies } from "@/queries";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

const PopularPage = () => {
  const params = useSearchParams();
  const getPageParams = params.get("page") || "1";
  const { data, isPending, refetch } = usePopularMovies(
    parseInt(getPageParams)
  );
  const { data: trendingData, isPending: trendingPending } =
    useTrendingMovies();

  useEffect(() => {
    refetch();
  }, [getPageParams, refetch]);
  
  return (
    <Wrapper>
      <Hero moviesData={trendingData?.results} isPending={trendingPending}/>
      <MoviesCard datas={data?.results} loading={isPending} />
      <PaginationMovie
        query={parseInt(getPageParams)}
        currentPath="/popular/movies?"
        totalPages={data?.total_pages}
      />
    </Wrapper>
  );
};

export default PopularPage;
