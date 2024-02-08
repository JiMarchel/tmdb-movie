import Link from "next/link";
import { Card, CardContent, CardFooter } from "./ui/card";
import Image from "next/image";
import { BASE_TMDB_IMAGE_URL, MOVIE_BACKDROP_SIZE } from "@/configs";
import { Star } from "lucide-react";
import { Skeleton } from "./ui/skeleton";

interface PosterCard {
  href: string;
  image: string;
  title: string;
  vote?: number;
  released_date?: string;
  loading?: boolean;
  character?: string;
}

export const PosterCard = ({
  title,
  character,
  href,
  image,
  vote,
  released_date,
  loading,
}: PosterCard) => {
  if (loading) {
    return (
      <div className="grid grid-cols-2 gap-2 space-y-6">
        {Array.from({ length: 20 }).map((_, i) => (
          <Card key={i} className="border-none flex justify-center relative">
            <Skeleton className="w-[160px] h-[230px]" />
          </Card>
        ))}
      </div>
    );
  }

  return (
    <Card className="border-none justify-center hover:-translate-y-6 transition-all duration-300 my-5">
      <CardContent className="p-0">
        <Link href={href}>
          <Image
            src={
              image
                ? `${BASE_TMDB_IMAGE_URL}/${MOVIE_BACKDROP_SIZE}/${image}`
                : "/no_image.jpg"
            }
            alt={title}
            width={150}
            height={400}
            priority
            placeholder="blur"
            blurDataURL="/no_image.jpg"
            className="w-auto h-auto rounded sm:mx-auto md:max-w-48 md:max-h-60"
          />
        </Link>
      </CardContent>
      <CardFooter className="p-0 mt-3 flex flex-col ">
        <h1 className="font-bold text-center">{title}</h1>
        {character && (
          <p className="text-muted-foreground text-xs text-center font-bold">
            {character}
          </p>
        )}
        {!vote && !released_date ? null : (
          <div className="text-muted-foreground flex items-center gap-10">
            {released_date && (
              <p className="text-xs font-medium flex">{released_date}</p>
            )}
            {vote && (
              <div className="flex gap-1 text-xs font-medium text-start">
                <Star size={15} />
                {parseFloat(vote.toFixed(1))}
              </div>
            )}
          </div>
        )}
      </CardFooter>
    </Card>
  );
};
