import { EyeIcon, UserCircle2Icon } from "lucide-react";
import { Slash } from "lucide-react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "./ui/button";
import Nav from "./Nav";

function BreadcrumbWithCustomSeparator() {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink className="font-medium" href="/">
            My Workspace
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <Slash />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbPage className="font-medium">My new form</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}

export default function Header() {
  return (
    <header className="py-2 px-4 flex items-center justify-between border-zinc-300 border-b">
      <BreadcrumbWithCustomSeparator />

      <Nav />

      <div className="flex gap-2">
        <Button variant={"outline"} size={"sm"}>
          <EyeIcon className="h-4 w-4" />
        </Button>
        <Button size={"sm"}>Publish</Button>

        <Button size={"sm"} variant={"secondary"} style={{ borderRadius: 999 }}>
          <UserCircle2Icon className="h-4 w-4" />
        </Button>
      </div>
    </header>
  );
}
