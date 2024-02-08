import { BASE_TMDB_IMAGE_URL, MOVIE_BACKDROP_SIZE } from "@/configs";
import Image from "next/image";
import Link from "next/link";
import { PosterCard } from "./poster-card";
import { TvCard } from "./tv-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Wrapper } from "./wrapper";
import { CarouselCast } from "./carousel-cast";
import { CarouselSimilarShows } from "./carousel-similar-shows";

interface MovieDetailProps {
  data: TvDetailType;
  similarData: TvType[];
  cast: CastType;
  loading?: boolean;
}

export const TvDetail = ({
  data,
  cast,
  loading,
  similarData,
}: MovieDetailProps) => {
  const tabsContents = [
    {
      value: "overview",
      content: <p className="font-light text-sm">{data?.overview}</p>,
    },
    {
      value: "cast",
      content: (
        <div className="grid grid-cols-2 gap-2">
          {cast?.cast?.map((char, i) => (
            <PosterCard
              key={i}
              href=""
              image={char.profile_path}
              title={char.name}
              character={char.character}
              loading={loading}
            />
          ))}
        </div>
      ),
    },
    {
      value: "similar",
      content: <TvCard datas={similarData} loading={loading} />,
    },
    
  ];

  return (
    <Wrapper className="mx-2 sm:max-w-2xl sm:mx-auto md:max-w-4xl lg:max-w-6xl">
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 1)), url(${BASE_TMDB_IMAGE_URL}/${MOVIE_BACKDROP_SIZE}/${data?.backdrop_path})`,
      }}
      className="w-auto h-auto sm:mx-2 sm:rounded-md sm:w-full sm:h-[420px] bg-no-repeat bg-contain sm:bg-cover"
    >
      <div className="grid grid-cols-2 mx-1 items-end sm:h-full">
        <div className="flex flex-col ml-2 gap-2 sm:mb-10 lg:ml-6">
          <h1 className="text-xl  font-bold sm:text-4xl text-balance">
            {data?.name}
          </h1>
          <div className="flex items-center gap-2 text-xs font-light">
            <p className="border-r border-white pr-2">{data?.first_air_date}</p>
            <p>{data?.status}</p>
          </div>
          <div className="items-center gap-1 hidden sm:flex">
            {data?.genres?.map((genre, i) => (
              <p
                key={i}
                className="text-xs font-light bg-primary rounded-lg py-1 px-2"
              >
                {genre.name}
              </p>
            ))}
          </div>
          <p className="text-xs font-light">{data?.tagline}</p>
          <div className="hidden sm:flex sm:flex-col gap-2">
            <h2 className="text-2xl font-medium lg:font-bold lg:text-3xl">Summary</h2>
            <p className="text-sm font-medium text-muted-foreground lg:text-sm">
              {data?.overview}
            </p>
          </div>
        </div>
        <div className="flex justify-end sm:justify-center sm:my-auto mr-2">
          <Image
            src={
              data?.poster_path
                ? `${BASE_TMDB_IMAGE_URL}/${MOVIE_BACKDROP_SIZE}/${data?.poster_path}`
                : "/no_image.jpg"
            }
            alt={data?.name}
            width={1400}
            height={1000}
            priority
            className="rounded md:rounded-lg object-cover max-h-52 max-w-32 mt-3 sm:max-w-48 sm:max-h-72"
          />
        </div>
      </div>
    </div>
    <div className="hidden sm:flex mt-5">
      <CarouselCast cast={cast} loading={loading} />
    </div>
    <div className="hidden sm:flex mt-5">
      <CarouselSimilarShows similarTv={similarData} loading={loading} />
    </div>
    <div className="flex items-center gap-1 my-5 sm:hidden">
      {data?.genres?.map((genre, i) => (
        <p
          key={i}
          className="text-xs font-light bg-primary rounded-lg py-1 px-2"
        >
          {genre.name}
        </p>
      ))}
    </div>
    <Tabs defaultValue="overview" className="sm:hidden">
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="cast" className="px-5">
          Cast
        </TabsTrigger>
        <TabsTrigger value="similar">Similar Series</TabsTrigger>
      </TabsList>
      {tabsContents.map((content, i) => (
        <TabsContent value={content.value} key={i}>
          {content.content}
        </TabsContent>
      ))}
    </Tabs>
  </Wrapper>
  );
};
