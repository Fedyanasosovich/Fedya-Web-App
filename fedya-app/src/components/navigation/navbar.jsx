"use client";

import clsx from "clsx";
import gsap from "gsap";
import { useWindowScroll } from "react-use";
import { useEffect, useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import Lenis from "@studio-freight/lenis";
import Button from "../global/button";
import Link from "next/link";

const navItems = ["Home", "Latest videos", "Identify fake hgh ", "Buy hgh from the pharmacy "];

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
      gsap.to(topBar.current, {
        rotate: 45,
        y: 6,
        duration: 0.3,
        ease: "power3.out",
      });
      gsap.to(bottomBar.current, {
        rotate: -45,
        y: -2,
        duration: 0.3,
        ease: "power3.out",
      });
    } else {
      // Animate back to hamburger
      gsap.to(topBar.current, {
        rotate: 0,
        y: 0,
        duration: 0.3,
        ease: "power3.out",
      });
      gsap.to(bottomBar.current, {
        rotate: 0,
        y: 0,
        duration: 0.3,
        ease: "power3.out",
      });
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
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing function
      smooth: true,
    });

    // Animation function
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    // Start the animation loop
    requestAnimationFrame(raf);

    // Cleanup on component unmount
    return () => lenis.destroy();
  }, []);

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

  const navRef = useRef(null);

  useEffect(() => {
    if (navRef.current) {
      if (hamburgerClick) {
        document.body.style.overflow = "hidden";
        // Animate the height of the nav element to expand
        gsap.to(navRef.current, {
          height: "auto", // Animate to auto height
          duration: 0.5,
          ease: "power2.out",
        });
      } else {
        // Animate the height of the nav element to collapse
        document.body.style.overflow = "";
        gsap.to(navRef.current, {
          height: 0, // Collapse nav to 0 height
          duration: 0.5,
          ease: "power2.in",
        });
      }
    }
  }, [hamburgerClick]);

  return (
    <div>
      <div
        ref={navContainerRef}
        className={clsx(
          "fixed  top-4 z-50 h-16 border-none transition-all duration-700 inset-x-4 lg:inset-x-6"
        )}
      >
        <header className="">
          <div className="absolute top-1/2 w-full -translate-y-1/2">
            <nav className="flex size-full items-center justify-between p-4">
              {/* Logo and Product button */}
              <div className="flex items-center gap-2">
                <img src="/images/F.png" alt="logo" className="w-10" />
                <div className="flex flex-col gap-0 font-medium leading-none text-lg ">
                  <span className="text-golden">Fedya</span>
                  <span className="text-darkPurple">Nasosovich</span>
                </div>
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
                containerClass="md:flex text-foreground px-10    font-bold py-2 hidden items-center justify-center gap-1 "
              />
              <div
                onClick={toggleMenu}
                className="text-2xl md:hidden block cursor-pointer"
              >
                <div className=" flex flex-col gap-1.5">
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
          </div>
        </header>
      </div>
      <nav
        ref={navRef}
        className={clsx(
          "mobile-nav bg-[#0a0521] z-30 fixed inset-0   overflow-hidden",
          !hamburgerClick && "h-0"
        )}
      >
        <div className="pt-28 pb-12 flex flex-col h-full items-center font-taviraj gap-4">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={`#${item.toLowerCase()}`}
              className="nav-hover-btn !mx-0 !text-2xl"
            >
              {item}
            </a>
          ))}
      
          <Link href="mailto:fedyanasosovich@gmail.com" className="mt-auto">
            <Button
              id="product-button"
              title="Contact"
              containerClass="flex text-foreground px-10 border-purple font-bold border-2 py-2 items-center justify-center gap-1 "
            />
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
