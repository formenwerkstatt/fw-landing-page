import { cn } from "@/utils/cn";

const SectionTitle = ({
  title,
  paragraph,
  width = "768px",
  center,
  mb = "100px",
  isHomepage = false,
}: {
  title: string;
  paragraph: string;
  width?: string;
  center?: boolean;
  mb?: string;
  isHomepage?: boolean;
}) => {
  return (
    <>
      <div
        className={`w-full ${center ? "mx-auto text-center" : ""}`}
        style={{ maxWidth: width, marginBottom: mb }}
      >
        <h2
          className={cn(
            "mb-4  font-bold leading-tight! text-black dark:text-white",
            isHomepage ? "text-2xl lg:text-4xl" : "text-xl md:text-2xl",
          )}
        >
          {title}
        </h2>
        <p
          className={cn(
            " leading-relaxed! text-body-color ",
            isHomepage ? "text-lg md:text-xl" : "text-base md:text-lg",
          )}
        >
          {paragraph}
        </p>
      </div>
    </>
  );
};

export default SectionTitle;
