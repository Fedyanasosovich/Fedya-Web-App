"use client";

import clsx from "clsx";
import gsap from "gsap";
import { useWindowScroll } from "react-use";
import { useEffect, useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
const Button = ({ id, title, rightIcon, leftIcon, containerClass }) => {
  return (
    <button
      id={id}
      className={clsx(
        "group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full border  px-12 py-2.5",
        containerClass
      )}
    >
      {leftIcon}

      <span className="relative inline-flex overflow-hidden font-general text-xs capitalize">
        <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:translate-y-[-160%] group-hover:skew-y-12 text-base">
          {title}
        </div>
        <div className="absolute translate-y-[164%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0 text-base">
          {title}
        </div>
      </span>

      {rightIcon}
    </button>
  );
};

const navItems = ["Home", "Free Video Courses", "Ebooks", "Buys HGH"];

const NavBar = () => {
  // State for toggling audio and visual indicator
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isIndicatorActive, setIsIndicatorActive] = useState(false);

  const [hamburgerClick, setHamburgerClick] = useState(false);
  const topBar = useRef(null);
  const bottomBar = useRef(null);

  const toggleMenu = () => {
    setHamburgerClick((prev) => !prev);

    if (!hamburgerClick) {
      // Animate to cross
      gsap.to(topBar.current, { rotate: 45, y: 6, duration: 0.3,
        ease: "power3.out", });
      gsap.to(bottomBar.current, { rotate: -45, y: -2, duration: 0.3,
        ease: "power3.out",});
    } else {
      // Animate back to hamburger
      gsap.to(topBar.current, { rotate: 0, y: 0, duration: 0.3,
        ease: "power3.out",});
      gsap.to(bottomBar.current, { rotate: 0, y: 0, duration: 0.3,
        ease: "power3.out",});
    }
  };

  // Refs for audio and navigation container

  const navContainerRef = useRef(null);

  const { y: currentScrollY } = useWindowScroll();
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Toggle audio and visual indicator
  const toggleAudioIndicator = () => {
    setIsAudioPlaying((prev) => !prev);
    setIsIndicatorActive((prev) => !prev);
  };

  useEffect(() => {
    if (currentScrollY === 0) {
      // Topmost position: show navbar without floating-nav
      setIsNavVisible(true);
      navContainerRef.current.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      // Scrolling down: hide navbar and apply floating-nav
      setIsNavVisible(false);
      navContainerRef.current.classList.add("floating-nav");
    } else if (currentScrollY < lastScrollY) {
      // Scrolling up: show navbar with floating-nav
      setIsNavVisible(true);
      navContainerRef.current.classList.add("floating-nav");
    }

    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisible]);

  return (
    <div
      ref={navContainerRef}
      className="fixed  top-4 z-50 h-16 border-none transition-all duration-700 inset-x-6"
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex size-full items-center justify-between p-4">
          {/* Logo and Product button */}
          <div className="flex items-center gap-7">
            <img src="/images/F.png" alt="logo" className="w-10" />
          </div>

          {/* Navigation Links and Audio Button */}
          <div className="flex h-full items-center l">
            <div className="hidden md:block">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={`#${item.toLowerCase()}`}
                  className="nav-hover-btn py-"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          <Button
            id="product-button"
            title="Contact"
            containerClass="md:flex text-foreground px-10 border-purple   font-bold border-2 py-2 hidden items-center justify-center gap-1"
          />
          <div onClick={toggleMenu} className="text-2xl cursor-pointer">
            <div className="md:hidden flex flex-col gap-1.5">
              <span
                ref={topBar}
                className="w-8 h-0.5 block rounded bg-foreground transition-all"
              ></span>
              <span
                ref={bottomBar}
                className="w-8 h-0.5 block rounded bg-foreground transition-all"
              ></span>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
