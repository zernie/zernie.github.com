"use client";

import { X } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/shared/ui/shadcn/dialog";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
  title: string;
}

export function VideoModal({ isOpen, onClose, videoUrl, title }: VideoModalProps) {
  if (!isOpen || !videoUrl) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl p-0 border-0 bg-transparent shadow-none">
        <DialogHeader className="sr-only">
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-black border border-white/10">
          <video
            className="h-full w-full"
            controls
            autoPlay
            src={videoUrl}
          >
            <track kind="captions" />
            Your browser does not support the video tag.
          </video>
          <button
            onClick={onClose}
            className="absolute -right-10 top-0 rounded-full bg-black/50 p-2 text-white opacity-70 transition-opacity hover:opacity-100 hover:bg-black/70"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
            <span className="sr-only">Close</span>
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
