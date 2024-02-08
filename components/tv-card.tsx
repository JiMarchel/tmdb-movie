import { PosterCard } from "./poster-card";

interface MoviesCardProps {
  datas: TvType[] | undefined;
  loading?: boolean;
}

export const TvCard = ({ datas, loading }: MoviesCardProps) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:mx-32 gap-2">
      {datas?.map((data, i) => (
        <PosterCard
          href={`/detail/tv/${data?.id}`}
          key={i}
          image={data?.poster_path}
          title={data?.name}
          released_date={data?.first_air_date}
          vote={data?.vote_average}
          loading={loading}
        />
      ))}
    </div>
  );
};
