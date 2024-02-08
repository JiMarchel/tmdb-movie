"use client";

import { Hero } from "@/components/hero";
import { PaginationMovie } from "@/components/pagination";
import { TvCard } from "@/components/tv-card";
import { Wrapper } from "@/components/wrapper";
import { useTrendingTv, useTvShows } from "@/queries";
import { useSearchParams } from "next/navigation";

const TvPage = () => {
  const params = useSearchParams();
  const getPageParams = params.get("page") || "1";
  const { data, isPending } = useTvShows(parseInt(getPageParams));
  const { data: trendingData, isPending: trendingPending } = useTrendingTv();
  return (
    <Wrapper>
      <Hero tvData={trendingData?.results} isPending={trendingPending} />
      <TvCard datas={data?.results} loading={isPending} />
      <PaginationMovie
        currentPath="/tv?"
        query={parseInt(getPageParams)}
        totalPages={data?.total_pages}
      />
    </Wrapper>
  );
};

export default TvPage;
