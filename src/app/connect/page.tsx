import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import connectCardItems from "@/constants/connectCardItems";
import ConnectCard from "@/components/ConnectCard";

export default function page() {
  return (
    <main className="p-8 max-w-screen-xl m-auto">
      <div className="w-full">
        <div className="flex m-auto w-full max-w-screen-xl">
          <Input
            placeholder="Search integrations"
            icon={
              <Button type="submit" variant={"link"} size={"icon"}>
                <SearchIcon className="w-3 h-3" />
              </Button>
            }
          />
        </div>
      </div>

      <div className="mt-4 flex flex-col gap-2">
        {connectCardItems.map((item) => (
          <ConnectCard key={item.subtitle} {...item} />
        ))}
      </div>
    </main>
  );
}
