import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex gap-10">
      <Button>
        <Link href="/form-action">
          Form action example
        </Link>
      </Button>
      <Button>
        <Link href="/cypress-example">
          Cypress example
        </Link>
      </Button>
    </div>
  );
}
