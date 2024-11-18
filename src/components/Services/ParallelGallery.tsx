import { parallelGalleryImages } from "@/data/galleryImages";
import Image from "next/image";

export default function ParallelGallery({ iconName }: { iconName: string }) {
  const serviceImages: string[] = parallelGalleryImages(iconName);

  return (
    <section className="py-12">
      <div className="flex w-full justify-center gap-8 overflow-hidden">
        {serviceImages.length === 0 && (
          <div className="group relative h-[60dvh] w-full skew-x-[-15deg] transform overflow-hidden shadow-lg">
            <div
              className="pointer-events-none absolute inset-0 z-10 
            size-full 
            bg-primary/25 
            transition-opacity 
            duration-500 
            ease-in-out 
            group-hover:opacity-0"
            />
            <div
              className="absolute inset-0 
            flex 
            skew-x-[15deg] 
            scale-125 
            transform 
            items-center 
            justify-center 
            transition-transform duration-500 group-hover:scale-110 group-hover:brightness-110"
            >
              <video
                width="100%"
                height="auto"
                controls={false}
                preload="metadata"
                loop
                muted
                autoPlay
                poster="/logo.svg"
              >
                <source src="/video/1105.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        )}

        {serviceImages.map((src: string, index: number) => (
          <div
            key={src}
            className="group relative h-[50dvh] w-full skew-x-[-15deg] transform overflow-hidden shadow-lg"
          >
            <div
              className="pointer-events-none absolute inset-0 z-10 
              size-full 
              bg-primary/25 
              transition-opacity 
              duration-500 
              ease-in-out 
              group-hover:opacity-0"
            ></div>
            <div
              className="absolute inset-0 
              skew-x-[15deg] 
              scale-125 
              transform 
              transition-transform 
              duration-500 
              group-hover:scale-110 
              group-hover:brightness-110"
            >
              <Image
                src={src}
                alt={`Parallelogram image ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 50vw "
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
