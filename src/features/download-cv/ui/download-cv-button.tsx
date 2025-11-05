import Link from "next/link";
import { FileText } from "lucide-react";

import { siteConfig } from "@/shared/config";
import { Button } from "@/shared/ui/shadcn";

export function DownloadCvButton() {
  return (
    <Button asChild size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground shadow-lg hover:shadow-xl hover:scale-105 transition-all font-bold">
      <Link
        href={siteConfig.links.resume}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2"
      >
        <FileText className="h-5 w-5" />
        See Resume (PDF)
      </Link>
    </Button>
  );
}
