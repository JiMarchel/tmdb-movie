"use client";
import { MovieDetail } from "@/components/movie-detail";
import { useMovieDetail } from "@/queries";

const DetailIdPage = ({ params }: { params: { id: string } }) => {
  const { data, isPending: movieDetailPending } = useMovieDetail(
    "movie-detail",
    params.id
  );
  const { data: creditsData, isPending: creditsPending } = useMovieDetail(
    "movie-credits",
    params.id,
    "/credits"
  );
  const { data: similarData, isPending: similarPending } = useMovieDetail(
    "similar-movie",
    params.id,
    "/similar"
  );
  
  return (
    <MovieDetail
      cast={creditsData}
      data={data}
      loading={movieDetailPending || creditsPending || similarPending}
      similarData={similarData?.results}
    />
  );
};

export default DetailIdPage;
