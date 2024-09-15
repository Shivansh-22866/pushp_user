import { getCollections } from "@/lib/actions";
import { CarouselSize } from "./CarouselSize"; // Adjust the import path as necessary

const Collections = async () => {
  const collections = await getCollections();

  return (
    <div className="flex flex-col items-center gap-10 py-8 px-5">
      <p className="text-heading1-bold">Collections</p>
      {!collections || collections.length === 0 ? (
        <p className="text-body-bold">No collections found</p>
      ) : (
        <CarouselSize items={collections} />
      )}
    </div>
  );
};

export default Collections;
