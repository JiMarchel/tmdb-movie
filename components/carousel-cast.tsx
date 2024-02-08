import {
    Carousel,
    CarouselContent,
    CarouselItem
} from "@/components/ui/carousel";
import { PosterCard } from "./poster-card";

interface CarouselCastProps {
  cast: CastType;
  loading?: boolean;
}
export function CarouselCast({ cast, loading }: CarouselCastProps) {
  return (
    <Carousel className="w-full mx-auto">
      <h1 className="text-3xl font-bold ml-3">Cast</h1>
      <CarouselContent className="-ml-1">
        {cast?.cast?.map((char, i) => (
          <CarouselItem
            className="sm:basis-1/4 md:basis-1/5 lg:basis-1/6 pl-3"
            key={i}
          >
            <PosterCard
              href=""
              image={char.profile_path}
              title={char.name}
              character={char.character}
              loading={loading}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
