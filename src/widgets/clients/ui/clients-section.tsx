import Image from "next/image";
import Link from "next/link";

import { clients } from "@/entities/client";
import { cn } from "@/shared/lib";
import { Section, SectionHeading } from "@/shared/ui";

export function ClientsSection() {
  return (
    <Section id="clients" className="bg-card/40 py-0">
      <div className="container">
        <SectionHeading
          eyebrow="Clients"
          title="Trusted by venture-backed teams"
          className="mb-8"
        />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {clients.map((client) => (
            <Link
              key={client.name}
              href={client.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group border-border bg-card/80 hover:border-accent flex h-28 items-center justify-center rounded-3xl border border-dashed px-6 transition-colors"
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={192}
                height={80}
                className={cn(
                  client.width,
                  "object-contain opacity-80 transition-opacity group-hover:opacity-100",
                )}
              />
            </Link>
          ))}
        </div>
      </div>
    </Section>
  );
}
