import { HeroCarousel } from "./hero-carousel";
import { SearchInput } from "./navbar/search-input";

interface HeroProps {
  moviesData?: MoviesType[];
  tvData?: TvType[];
  isPending: boolean;
}

export const Hero = ({ moviesData, tvData, isPending }: HeroProps) => {
  return (
    <div className="mb-7">
      <HeroCarousel
        moviesData={moviesData}
        tvData={tvData}
        isPending={isPending}
      />
      <div>
        <h1 className="text-4xl sm:text-6xl sm:max-w-xl font-bold mt-6 mb-3 text-transparent bg-gradient-to-tl from-primary/80 to-white bg-clip-text text-center mx-auto">
          What do you want to watch today?
        </h1>
        <SearchInput />
      </div>
    </div>
  );
};
