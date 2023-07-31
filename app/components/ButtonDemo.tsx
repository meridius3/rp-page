// Assuming Button and Link components are correctly imported from their respective locations

import { Button } from "@/components/ui/button";
import Link from "next/link";

export function ButtonDemo({ elLink, buttonText }: { elLink: string, buttonText: string }) {
  return (
    <Link href={elLink}>
      <Button className="pushable w-full">
      <span className="shadowButton w-full"></span>
  <span className="edge w-full"></span>
  <span className="front w-full">
  {buttonText}
  </span>
        
        </Button>
    </Link>
  );
}
