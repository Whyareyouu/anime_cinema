"use client";

import Image from "next/image";
import { StarIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface AnimeCardProps {
  poster: string;
  title: string;
  rating?: number;
}

export const AnimeCard = ({ poster, title, rating }: AnimeCardProps) => {
  return (
    <div className="relative flex flex-col w-fit">
      <div className="relative">
        <Image src={poster} width={250} height={400} alt={title} />
        <Badge className="absolute top-1 left-1 flex gap-2 bg-zinc-800 hover:bg-zinc-800">
          <StarIcon color="white" />
          <span className="text-white text-xl">{rating?.toFixed(1) || null}</span>
        </Badge>
      </div>
      <h3 className="absolute bottom-0 w-full text-white bg-zinc-800 bg-opacity-75 p-2 text-2xl text-center font-bold">
        {title}
      </h3>
    </div>
  );
};
