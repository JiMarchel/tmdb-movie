"use client";

import { Hero } from "@/components/hero";
import { PaginationMovie } from "@/components/pagination";
import { TvCard } from "@/components/tv-card";
import { Wrapper } from "@/components/wrapper";
import {
    useSearchTv,
    useTrendingTv
} from "@/queries";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

const SearchTvPage = () => {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("query");
  const page = searchParams.get("page") || "1";
  const { data, isPending, refetch } = useSearchTv(
    searchQuery,
    parseInt(page)
  );
  const { data: trendingData, isPending: trendingPending } =
    useTrendingTv();

    useEffect(() => {
      refetch()
    },[refetch, page])
  return (
    <Wrapper>
      <Hero tvData={trendingData?.results} isPending={trendingPending} />
      <TvCard datas={data?.results} loading={isPending} />
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

export default SearchTvPage;
