"use client";
import { Hero } from "@/components/hero";
import { PaginationMovie } from "@/components/pagination";
import { TvCard } from "@/components/tv-card";
import { Wrapper } from "@/components/wrapper";
import { usePopularTv, useTrendingTv } from "@/queries";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

const PopularTvPage = () => {
  const params = useSearchParams();
  const getPageParams = params.get("page") || "1";
  const { data,refetch } = usePopularTv(parseInt(getPageParams));
  const { data: trendingData, isPending: trendingPending } = useTrendingTv();

  useEffect(() => {
    refetch()
  },[getPageParams, refetch])

  return (
    <Wrapper>
      <Hero tvData={trendingData?.results} isPending={trendingPending} />
      <TvCard datas={data?.results} />
      <PaginationMovie currentPath="/popular/tv?" query={parseInt(getPageParams)} totalPages={data?.total_pages}/>
    </Wrapper>
  );
};

export default PopularTvPage;
