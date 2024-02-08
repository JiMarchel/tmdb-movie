import { Card } from "./ui/card";
import { Skeleton } from "./ui/skeleton";

export const SkeletonCarousel = () => {
  return (
    <div className="flex items-center relative sm:hidden">
      <Skeleton className="h-[180px] w-[320px] rounded" />
      <div className="absolute bottom-2 z-50 flex flex-col gap-2 ml-2">
        <Skeleton className="h-8 w-[300px]" />
        <Skeleton className="h-6 w-[200px]" />
      </div>
    </div>
  );
};

export const SkeletonCardMovies = () => {
  return (
    <div className="grid grid-cols-2 gap-2 space-y-6">
      {Array.from({ length: 20 }).map((_, i) => (
        <Card key={i} className="border-none flex justify-center relative">
          <Skeleton className="w-[160px] h-[230px]" />
          <div className="absolute z-50 bottom-0 w-full bg-gradient-to-t from-black px-3 pt-20 pb-1">
            <Skeleton className="w-full h-6" />
            <div className="text-muted-foreground flex items-center justify-between mt-2">
              <Skeleton className="w-12 h-4" />
              <Skeleton className="w-16 h-4" />
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};
