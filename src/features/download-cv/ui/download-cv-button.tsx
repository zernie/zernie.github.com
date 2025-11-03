import Link from "next/link";

import { siteConfig } from "@/shared/config";
import { Button } from "@/shared/ui/shadcn";

export function DownloadCvButton() {
  return (
    <Button asChild size="lg">
      <Link
        href={siteConfig.links.resume}
        target="_blank"
        rel="noopener noreferrer"
      >
        See Resume (PDF)
      </Link>
    </Button>
  );
}
