import Link from "next/link";
import { cn } from "@/utils/cn";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

export default function SharePost() {
  return (
    <>
      <Link
        href="https://www.instagram.com/formenwerkstatt_gmbh/"
        aria-label="social-media-page-instagram"
        className={cn(
          "mb-3 inline-flex size-12 items-center justify-center rounded-md",
          "bg-gray-light text-body-color duration-300 hover:bg-primary hover:text-white dark:bg-gray-dark dark:hover:bg-primary",
        )}
      >
        <FaInstagram className="size-full p-2" />
      </Link>
      <Link
        href="https://www.linkedin.com/company/formenwerkstatt-gmbh/"
        aria-label="social-media-page-linkedin"
        className={cn(
          "mb-3 ml-3 inline-flex size-12 items-center justify-center rounded-md",
          "bg-gray-light text-body-color duration-300 hover:bg-primary hover:text-white dark:bg-gray-dark dark:hover:bg-primary",
        )}
      >
        <FaLinkedin className="size-full p-2" />
      </Link>
      <Link
        href="https://www.facebook.com/formenwerkstattgmbh"
        aria-label="social-media-facebook"
        className={cn(
          "mb-3 ml-3 inline-flex size-12 items-center justify-center rounded-md",
          "bg-gray-light text-body-color duration-300 hover:bg-primary hover:text-white dark:bg-gray-dark dark:hover:bg-primary",
        )}
      >
        <FaFacebook className="size-full p-2" />
      </Link>
    </>
  );
}
