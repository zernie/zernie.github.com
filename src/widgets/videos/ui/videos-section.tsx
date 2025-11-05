import { videos } from "@/entities/video";
import { Section, SectionHeading } from "@/shared/ui";

export function VideosSection() {
  return (
    <Section id="videos" className="bg-card/40">
      <div className="container">
        <SectionHeading
          eyebrow="Inspiration"
          title="Favorite Videos"
          className="mb-8"
        />
        <div className="grid gap-8 md:grid-cols-2">
          {videos.map((video) => (
            <div
              key={video.youtubeId}
              className="group relative overflow-hidden rounded-3xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="relative w-full aspect-video">
                <iframe
                  src={`https://www.youtube.com/embed/${video.youtubeId}?rel=0&color=white&iv_load_policy=3`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full rounded-3xl"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
