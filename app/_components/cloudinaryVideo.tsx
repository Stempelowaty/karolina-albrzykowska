"use client";

type Props = {
  src: string; 
};

export default function CloudinaryVideo({ src }: Props) {
  return (
    <video
        controls
        preload="none"
        className="rounded-lg max-h-[calc(95vh-3rem)] object-contain"
        autoPlay
        loop
        muted
        src={src}
    />
  );
}