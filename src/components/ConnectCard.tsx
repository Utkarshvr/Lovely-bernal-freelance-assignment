import Image from "next/image";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { CheckIcon } from "lucide-react";

export type ConnectCardItemType = {
  title: string;
  subtitle: string;
  isActive?: boolean;
  image: string;
};

// https://media.istockphoto.com/id/654095766/vector/email-symbol-icon.jpg?s=170667a&w=0&k=20&c=Jk0Vie5z8LJTWQB1aHEza1dVIGqNnvqfbgmzCjTm9wI=
export default function ConnectCard({
  title,
  subtitle,
  isActive,
  image,
}: ConnectCardItemType) {
  return (
    <>
      <div className="p-3 rounded-md border border-zinc-200 flex gap-12 items-center">
        <Image src={image} alt="Image" width={100} height={100} unoptimized />

        <div className="w-full flex gap-6 items-center justify-between">
          <div className="flex flex-col gap-1">
            <div className="flex gap-1">
              <h5 className="text-lg font-medium">{title}</h5>
              {isActive && (
                <Badge
                  variant="outline"
                  className="bg-green-100 text-green-800 gap-1"
                >
                  Active
                  <CheckIcon className="text-green-800 w-4 h-4" />
                </Badge>
              )}
            </div>
            <p>{subtitle}</p>
          </div>

          {!isActive && <Button>Connect</Button>}
        </div>
      </div>
    </>
  );
}
