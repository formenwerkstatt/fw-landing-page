import Image from "next/image";
import SectionTitle from "./SectionTitle";
import { cn } from "@/utils/cn";

interface ImageSectionProps {
  title: string;
  paragraph: string;
  list: string[];
  src: string;
  center?: boolean;
  sustain?: boolean;
}

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);
const List = ({ text }: { text: string }) => (
  <p className="mb-5 flex items-center text-lg font-medium text-body-color">
    <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
      {checkIcon}
    </span>
    {text}
  </p>
);
export default function ImageSection({
  title,
  paragraph,
  list,
  src,
  center = false,
  sustain = false,
}: ImageSectionProps) {
  return (
    <section id="service-info-1">
      <div className="container">
        <div className="border-b border-body-color/15 pb-16 dark:border-white/15 ">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className={` px-4  ${src ? "lg:w-1/2" : "w-full"}`}>
              <SectionTitle
                title={title}
                paragraph={paragraph}
                mb={"40px"}
                width={`${!src && "full"}`}
                center={center}
              />

              <div className="mb-12 lg:mb-0" data-wow-delay=".15s">
                <div className="flex flex-wrap">
                  <div
                    className={`${src ? "w-full sm:w-1/2 lg:w-full" : "mx-auto"}`}
                  >
                    {list &&
                      list.map((text) => <List key={text} text={text} />)}
                  </div>
                </div>
              </div>
            </div>

            {src && (
              <div className=" w-full px-12 lg:w-1/2">
                <div
                  className={cn(
                    "relative mx-auto aspect-square w-full lg:mr-0",
                    sustain &&
                      "rounded-full bg-linear-to-t from-lime-600/80 via-lime-600/10 to-lime-600/5",
                  )}
                >
                  <Image
                    className={cn(
                      sustain
                        ? "object-contain"
                        : "rounded-br-[10%] rounded-tl-[10%] object-cover",
                    )}
                    src={src}
                    alt={`${title}-image`}
                    fill
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
