"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import { FaChevronDown } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import ThemeToggler from "./ThemeToggler";
import { useChangeLocale, useCurrentLocale } from "@/locales/client";
import useMenuData from "@/data/useMenuData";
import useServiceData from "@/data/useServiceData";
import { cn } from "@/utils/cn";
import LanguageSelector from "./LanguageSelector";
import { useUser } from "@/app/providers";

export default function Header() {
  const { user } = useUser();
  const menuData = useMenuData();
  const serviceData = useServiceData();
  const locale = useCurrentLocale();
  const pathname = usePathname();
  const cleanPathname = pathname.replace(`/${locale}`, "");
  const changeLocale = useChangeLocale();

  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [openSubmenuIndex, setOpenSubmenuIndex] = useState<number | null>(null);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const navbarRef = useRef<HTMLDivElement>(null);

  if (!user) return null;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(event.target as Node)
      ) {
        setNavbarOpen(false);
        setOpenSubmenuIndex(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleStickyNavbar);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleStickyNavbar);
    };
  }, []);

  const handleStickyNavbar = () => {
    setSticky(window.scrollY >= 80);
  };

  const handleResize = () => {
    const smallScreen = window.innerWidth < 992; //992px is the lg media query
    setIsSmallScreen(smallScreen);
    if (!smallScreen) {
      setNavbarOpen(false);
      setOpenSubmenuIndex(null);
    }
  };

  const toggleSubmenu = (index: number) => {
    setOpenSubmenuIndex(openSubmenuIndex === index ? null : index);
  };

  const handleMouseEnter = (index: number) => {
    // Close the currently open submenu only if it's a different index
    if (
      !isSmallScreen &&
      openSubmenuIndex !== null &&
      openSubmenuIndex !== index
    ) {
      setOpenSubmenuIndex(null);
    }
  };

  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen);
    setOpenSubmenuIndex(null);
  };

  return (
    <header
      className={`left-0 top-0 z-40 flex w-full items-center ${
        sticky
          ? "fixed z-[9999] bg-white !bg-opacity-80 shadow-sticky backdrop-blur-sm transition dark:bg-gray-dark dark:shadow-sticky-dark"
          : "absolute bg-transparent"
      }`}
    >
      <div className="container ">
        <div
          ref={navbarRef}
          className="relative flex items-center justify-between"
        >
          <div className="w-60 max-w-full px-4 ">
            <Link
              onClick={() => {
                setNavbarOpen(false);
                setOpenSubmenuIndex(null);
              }}
              href="/"
              className="block w-full py-4"
            >
              <Image src="/logo.svg" alt="logo" width={150} height={100} />
            </Link>
          </div>
          <div className="flex w-full items-center justify-between ">
            <button
              onClick={toggleNavbar}
              id="navbarToggler"
              aria-label="Mobile Menu"
              className="absolute right-4 top-1/2 z-50 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
            >
              <span
                className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                  navbarOpen ? " top-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                  navbarOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                  navbarOpen ? " top-[-8px] -rotate-45" : ""
                }`}
              />
            </button>
            <nav
              id="navbarCollapse"
              className={cn(
                `navbar absolute right-0 rounded border-[.5px] border-body-color/50 bg-white px-6 py-4 duration-300`,
                `dark:border-body-color/20 dark:bg-dark lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100`,
                `${
                  navbarOpen && isSmallScreen
                    ? "visibility top-[70%] w-full opacity-100"
                    : "invisible top-[120%] opacity-0"
                }`,
                `${
                  isSmallScreen
                    ? "max-h-[calc(100vh-120px)] overflow-y-auto"
                    : "overflow-visible"
                }`,
              )}
            >
              <ul className="block gap-4 lg:flex">
                {menuData.map((menuItem, index) => (
                  <li
                    key={index}
                    className="group relative"
                    onMouseEnter={() => handleMouseEnter(index)}
                  >
                    {menuItem.path ? (
                      <Link
                        onClick={() => {
                          setNavbarOpen(false);
                          setOpenSubmenuIndex(null);
                        }}
                        href={menuItem.path}
                        className={cn(
                          `flex rounded-lg p-2 text-xl lg:mr-0 lg:inline-flex lg:px-4 lg:py-4`,
                          "transition duration-300 hover:bg-primary/10 hover:text-primary",
                          cleanPathname === menuItem.path && "bg-primary/10 ",
                        )}
                      >
                        {menuItem.title}
                      </Link>
                    ) : (
                      <>
                        <button
                          onClick={() => toggleSubmenu(index)}
                          className={cn(
                            "flex cursor-pointer items-center justify-between py-2",
                            "text-xl text-dark  hover:text-primary dark:text-white/70 dark:hover:text-white",
                            " lg:inline-flex lg:px-4 lg:py-4",
                            !isSmallScreen &&
                              "rounded-lg transition duration-300 hover:bg-primary/10  ",
                          )}
                        >
                          {menuItem.title}
                          <FaChevronDown className="ml-2 text-sm" />
                        </button>
                        <div
                          className={cn(
                            `mt-4 w-[60dvw] max-w-max rounded-sm bg-white dark:bg-dark `,
                            `lg:absolute lg:rounded-lg lg:px-4 lg:py-2 lg:shadow-lg`,
                            openSubmenuIndex === index
                              ? "flex  flex-col lg:flex-row  lg:gap-4"
                              : "hidden",
                          )}
                        >
                          {serviceData.map((serviceItem) => (
                            <div
                              key={serviceItem.title}
                              className={cn(
                                "rounded-md p-2",

                                serviceItem.subServices.length > 5 &&
                                  "grid grid-cols-[auto_auto] ",
                              )}
                            >
                              <p
                                className={cn(
                                  "col-span-2 cursor-default  px-1 text-lg text-dark dark:text-white",
                                )}
                              >
                                {serviceItem.title}
                              </p>
                              {serviceItem.subServices.map(
                                (subService) =>
                                  subService.path && (
                                    <Link
                                      onClick={() => {
                                        setNavbarOpen(false);
                                        setOpenSubmenuIndex(null);
                                      }}
                                      href={`/services${subService.path}`}
                                      key={subService.title}
                                      className={cn(
                                        "block rounded-md px-4 py-2 text-sm text-dark transition hover:bg-primary/10 dark:text-white",
                                      )}
                                    >
                                      {subService.title}
                                    </Link>
                                  ),
                              )}
                            </div>
                          ))}
                        </div>
                      </>
                    )}
                  </li>
                ))}

                <li>
                  <Link
                    className={cn(
                      `flex rounded-lg p-2 text-xl lg:mr-0 lg:inline-flex lg:px-4 lg:py-4`,
                      "transition duration-300 hover:bg-primary/10 hover:text-primary",
                      cleanPathname === "/shop" && "bg-primary/10 ",
                    )}
                    href="/shop"
                  >
                    Shop
                  </Link>
                </li>

                <li>
                  <Link
                    className={cn(
                      `flex items-center rounded-lg p-2 text-xl lg:mr-0 lg:inline-flex lg:px-4 lg:py-4`,
                      "transition duration-300 hover:bg-primary/10 hover:text-primary",
                      cleanPathname === "/shop/checkout" && "bg-primary/10 ",
                    )}
                    href="/shop/checkout"
                  >
                    <TiShoppingCart />
                    {user.cart.length > 0 ? user.cart.length : 0}
                  </Link>
                </li>

                {/* Language Selector inside navbar for small screens */}
                <li className="flex items-center justify-end lg:hidden">
                  <LanguageSelector
                    locale={locale}
                    changeLocale={changeLocale}
                    setNavbarOpen={setNavbarOpen}
                  />
                  <ThemeToggler />
                </li>
              </ul>
            </nav>

            <div className="hidden items-center justify-end pr-16 lg:flex lg:pr-0">
              <LanguageSelector
                locale={locale}
                changeLocale={changeLocale}
                setNavbarOpen={setNavbarOpen}
              />
              <ThemeToggler />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
