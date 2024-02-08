"use client";
import { TvDetail } from "@/components/tv-detail";
import { Wrapper } from "@/components/wrapper";
import { useTvDetail } from "@/queries";

const TvDetailPage = ({ params }: { params: { id: string } }) => {
  const { data, isPending } = useTvDetail("tv-detail", params.id);
  const { data: creditsData, isPending: creditsPending } = useTvDetail(
    "tv-credits",
    params.id,
    "/credits"
  );
  const { data: similarData, isPending: similarPending } = useTvDetail(
    "similar-tv",
    params.id,
    "/similar"
  );

  return (
    <Wrapper>
      <TvDetail
        data={data}
        cast={creditsData}
        similarData={similarData?.results}
        loading={isPending || creditsPending || similarPending}
      />
    </Wrapper>
  );
};

export default TvDetailPage;
