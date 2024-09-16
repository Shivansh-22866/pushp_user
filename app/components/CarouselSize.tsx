import * as React from "react";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";

interface CarouselSizeProps {
  items: CollectionType[];
}

export function CarouselSize({ items }: CarouselSizeProps) {
  // Calculate the number of slides needed
  const numSlides = Math.ceil(items.length / 3);

  return (
    <Carousel
      opts={{
        align: "center",
        loop: true,
      }}
      className="w-full max-w-4xl"
    >
      <CarouselContent>
        {Array.from({ length: numSlides }).map((_, slideIndex) => (
          <CarouselItem key={slideIndex} className="flex gap-4">
            {items
              .slice(slideIndex * 3, slideIndex * 3 + 3)
              .map((item) => (
                <div key={item._id} className="basis-1/3 p-2">
                  <Card>
                    <Link href={`/collections/${item._id}`}>
                      <img src={item.image} alt={item.title} className="rounded-lg object-cover" />
                    </Link>
                  </Card>
                </div>
              ))}
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
