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
      <div className="flex flex-col gap-10">
        <Button>
          <Link href="/suspense">
            Suspense
          </Link>
        </Button>
        <Button>
          <Link href="/suspense/child">
            Suspense first child
          </Link>
        </Button>
        <Button>
          <Link href="/suspense/child/child-second">
            Suspense second child
          </Link>
        </Button>
      </div>

    </div>
  );
}
