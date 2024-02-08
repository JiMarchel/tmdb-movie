import {
    Carousel,
    CarouselContent,
    CarouselItem
} from "@/components/ui/carousel";
import { PosterCard } from "./poster-card";

interface CarouselCastProps {
  similarMovies?: MoviesType[];
  similarTv?: TvType[];
  loading?: boolean;
}
export function CarouselSimilarShows({
  similarMovies,
  loading,
  similarTv,
}: CarouselCastProps) {
  return (
    <Carousel className="w-full">
      <h1 className="text-3xl font-bold ml-3">Similar Shows</h1>
      {similarMovies && (
        <CarouselContent className="-ml-1">
          {similarMovies?.map((data, i) => (
            <CarouselItem
              className="sm:basis-1/4 md:basis-1/5 lg:basis-1/6 pl-3"
              key={i}
            >
              <PosterCard
                href={`/detail/movie/${data?.id}`}
                image={data?.poster_path}
                title={data?.title}
                loading={loading}
                released_date={data?.release_date}
                vote={data?.vote_average}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      )}
      {similarTv && (
        <CarouselContent className="-ml-1">
          {similarTv?.map((data, i) => (
            <CarouselItem className="sm:basis-1/4 md:basis-1/5 lg:basis-1/6 pl-3" key={i}>
              <PosterCard
                href={`/detail/movie/${data?.id}`}
                image={data?.poster_path}
                title={data?.name}
                loading={loading}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      )}
    </Carousel>
  );
}
