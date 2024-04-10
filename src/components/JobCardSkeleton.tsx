import { Separator } from "./ui/separator";
import { Skeleton } from "./ui/skeleton";
import { Card } from "./ui/card";

const JobCardSkeleton = () => {
  return (
    <Card>
      <div className="p-4 flex gap-2 items-center">
        <Skeleton className="h-10 w-10 rounded-md" />
        <div className="space-y-1">
          <Skeleton className="h-3 w-20" />
          <Skeleton className="h-3 w-16" />
        </div>
      </div>
      <Separator />

      <div className="p-4 flex gap-10 items-center">
        <div className=" space-y-3">
          <div className="flex gap-2 items-center">
            <Skeleton className="h-4 w-4" />
            <Skeleton className="h-4 w-10" />
          </div>
          <div className="flex gap-2 items-center">
            <Skeleton className="h-4 w-4" />
            <Skeleton className="h-4 w-10" />
          </div>
        </div>
        <div className=" space-y-3">
          <div className="flex gap-2 items-center">
            <Skeleton className="h-4 w-4" />
            <Skeleton className="h-4 w-10" />
          </div>
          <Skeleton className="h-4 w-20" />
        </div>
      </div>

      <Separator />
      <div className="p-4 flex gap-2 items-center">
        <Skeleton className="h-8 w-20" />
        <Skeleton className="h-8 w-20" />
        <Skeleton className="h-8 w-20" />
      </div>
    </Card>
  );
};

export default JobCardSkeleton;
