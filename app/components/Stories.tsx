import React from "react";
import { Card } from "@/components/ui/card"; // Adjust the import path based on your setup
import Link from "next/link";

const Stories = () => {
  // Example data for the cards
  const cardData = [
    {
      image:
        "https://www.arteastic.in/blog/wp-content/uploads/2022/11/Anju-Singh-the-artisan-story.jpg", // Replace with your image URL
      description: "Kalpana Devi: Madhubani Artist from Bihar.",
      link: "/stories/story1",
    },
    {
      image: "https://miradorlife.com/wp-content/uploads/2021/08/header-6.png", // Replace with your image URL
      description: "Ghulam Hassan: Pashmina Weaver from Kashmir.",
      link: "/stories/story2",
    },
    {
      image:
        "https://d3q0fpse3wbo5h.cloudfront.net/production/uploads/innovations/_1200x480_crop_center-center_80_none/Your_Desis_are_Made_by.webp", // Replace with your image URL
      description: "Sushila Mahato: Dokra Artist from West Bengal.",
      link: "/stories/story3",
    },
  ];

  return (
    <>
      <h1 className="text-heading1-bold text-center mb-10">
        Tales of Tradition
      </h1>

      <div className="flex flex-wrap items-center justify-center gap-8 p-4">
        {cardData.map((card, index) => (
          <Link key={index} href={card.link} className="w-full sm:w-1/2 lg:w-1/4">
            <div>
              <Card className="relative overflow-hidden rounded-lg shadow-lg">
                <div
                  className="w-full h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${card.image})` }}
                ></div>
                <div className="p-4">
                  <p className="text-gray-700 text-sm">{card.description}</p>
                </div>
              </Card>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Stories;
