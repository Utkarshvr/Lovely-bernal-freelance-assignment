"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Separator } from "./ui/separator";

const items = [
  {
    title: "Create",
    href: "/create",
    disabled: false,
  },
  {
    title: "Connect",
    href: "/connect",
    disabled: false,
  },
  {
    title: "Share",
    href: "/share",
    disabled: false,
  },
  {
    title: "Results",
    href: "/results",
    disabled: false,
  },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="flex gap-6">
      {items?.map((item, index) => {
        const isActiveTab = item.href === pathname;
        return (
          item.href && (
            <ul className="flex flex-col gap-1">
              <div className="flex items-center justify-between">
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    "flex items-center text-sm font-medium text-muted-foreground",
                    item.disabled && "cursor-not-allowed opacity-80",
                    isActiveTab && "font-bold text-black"
                  )}
                >
                  {item.title}
                </Link>
              </div>
            </ul>
          )
        );
      })}
    </nav>
  );
}
