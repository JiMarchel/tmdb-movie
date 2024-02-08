import { PosterCard } from "./poster-card";

interface MoviesCardProps {
  datas: MoviesType[] | undefined;
  loading?: boolean;
}

export const MoviesCard = ({ datas, loading }: MoviesCardProps) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:mx-32 gap-2">
      {datas?.map((data, i) => (
        <PosterCard
          href={`/detail/movie/${data?.id}`}
          key={i}
          image={data?.poster_path}
          title={data?.title}
          released_date={data?.release_date}
          vote={data?.vote_average}
          loading={loading}
        />
      ))}
    </div>
  );
};
