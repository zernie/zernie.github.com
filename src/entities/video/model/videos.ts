export interface Video {
  title: string;
  youtubeId: string;
  isShort?: boolean; // YouTube Shorts have different aspect ratio
}

export const videos: Video[] = [
  {
    title: "Action Produces Information",
    youtubeId: "q2iBxRGSH3E",
  },
  {
    title: "Understanding the useEffect Hook",
    youtubeId: "LCZt2RnL4lY",
    isShort: true,
  },
];
