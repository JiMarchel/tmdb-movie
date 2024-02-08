"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { BASE_TMDB_IMAGE_URL, MOVIE_BACKDROP_SIZE } from "@/configs";
import Autoplay from "embla-carousel-autoplay";
import { TrendingUp } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import { SkeletonCarousel } from "./skeleton";
import Link from "next/link";

interface HeroCarouselProps {
  moviesData?: MoviesType[];
  tvData?: TvType[];
  isPending: boolean;
}
export function HeroCarousel({
  moviesData,
  tvData,
  isPending,
}: HeroCarouselProps) {
  const plugin = useRef(Autoplay());

  return (
    <div>
      <div className="flex items-center gap-2 mb-3 sm:justify-center">
      <h1 className="text-2xl sm:text-4xl font-bold text-transparent bg-gradient-to-tl from-primary/80 to-white bg-clip-text">
          Trending this week
        </h1>
        <TrendingUp size={30}/>
      </div>
      <Carousel
        className="max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-4xl mx-auto"
        plugins={[plugin.current]}
        onMouseLeave={plugin.current.reset}
      >
        {isPending ? (
          <CarouselContent>
            <CarouselItem>
              <SkeletonCarousel />
            </CarouselItem>
          </CarouselContent>
        ) : (
          <CarouselContent>
            {moviesData &&
              moviesData?.map((data) => (
                <CarouselItem key={data.id} className="relative w-full">
                  <Link
                    href={`/detail/movie/${data.id}`}
                  >
                    <Image
                      src={`${BASE_TMDB_IMAGE_URL}/${MOVIE_BACKDROP_SIZE}/${data.backdrop_path}`}
                      alt={data.title}
                      width={1400}
                      height={1000}
                      priority
                      className="rounded md:rounded-lg object-cover h-full w-full"
                    />
                    <div className="absolute z-50 bottom-0 w-full bg-gradient-to-t from-black px-3 sm:px-7 sm:pb-5 pt-16">
                      <h1 className="font-medium text-xl sm:text-2xl sm:font-bold">{data.title}</h1>
                      <p className="text-sm text-muted-foreground font-medium">
                        {data.release_date}
                      </p>
                    </div>
                  </Link>
                </CarouselItem>
              ))}
            {tvData &&
              tvData?.map((data) => (
                <CarouselItem key={data.id} className="relative">
                  <Link href={`/detail/tv/${data.id}`}>
                    <Image
                      src={`${BASE_TMDB_IMAGE_URL}/${MOVIE_BACKDROP_SIZE}/${data.backdrop_path}`}
                      alt={data.name}
                      width={400}
                      height={200}
                      priority
                      className="rounded md:rounded-lg object-cover h-full w-full"
                    />
                    <div className="absolute z-50 bottom-0 w-full bg-gradient-to-t from-black px-3 sm:px-7 sm:pb-5 pt-16">
                      <h1 className="font-medium text-xl">{data.name}</h1>
                      <p className="text-sm text-muted-foreground font-medium">
                        {data.first_air_date}
                      </p>
                    </div>
                  </Link>
                </CarouselItem>
              ))}
          </CarouselContent>
        )}
      </Carousel>
    </div>
  );
}
