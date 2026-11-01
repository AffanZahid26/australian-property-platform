"use client";

import MuxPlayer from "@mux/mux-player-react";
import Image from "next/image";
import { useEffect, useRef } from "react";

type Props = {
  mux?: string | null;
  image?: string | null;
  className?: string;
  priority?: boolean;
  active?: boolean;
};

type MuxLike = {
  play?: () => Promise<void>;
  pause?: () => void;
};

export function MediaBackground({
  mux,
  image,
  className = "",
  priority,
  active = true,
}: Props) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const poster =
    image || (mux ? `https://image.mux.com/${mux}/thumbnail.jpg?time=1&width=1920` : null);

  useEffect(() => {
    if (!mux || !wrapRef.current) return;
    const player = wrapRef.current.querySelector("mux-player") as unknown as MuxLike | null;
    if (!player) return;
    if (active) void player.play?.().catch(() => undefined);
    else player.pause?.();
  }, [active, mux]);

  return (
    <div ref={wrapRef} className={`absolute inset-0 overflow-hidden bg-primary ${className}`}>
      {mux ? (
        <MuxPlayer
          playbackId={mux}
          streamType="on-demand"
          autoPlay={active}
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full"
          poster={poster ?? undefined}
        />
      ) : poster ? (
        <Image
          src={poster}
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          priority={priority}
        />
      ) : null}
    </div>
  );
}
