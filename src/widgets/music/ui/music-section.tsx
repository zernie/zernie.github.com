import { playlist } from "@/entities/playlist";
import { Section, SectionHeading } from "@/shared/ui";

export function MusicSection() {
  return (
    <Section id="music">
      <div className="container">
        <SectionHeading eyebrow="Music" title={playlist.title} />
        <p className="mx-auto mb-10 max-w-2xl text-center text-lg text-muted-foreground">
          {playlist.description}
        </p>
        <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-border shadow-soft">
          <iframe
            title="Yandex Music playlist"
            src={playlist.embedUrl}
            className="h-[28rem] w-full"
            loading="lazy"
            allow="autoplay"
          />
        </div>
      </div>
    </Section>
  );
}
