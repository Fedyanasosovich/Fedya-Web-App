"use client";
import Hero from "@/components/home/hero";
import { useEffect, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import Footer from "@/components/footer/Footer";
import { IoCloseOutline } from "react-icons/io5";
import { BiLoaderAlt } from "react-icons/bi";

export default function Home() {
  // useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);

  //   const sections = gsap.utils.toArray(".");

  //   sections.forEach((section, i) => {
  //     const nextSection = sections[i + 1];

  //     if (nextSection) {
  //       // Define timeline for fading out the current section and fading in the next section
  //       const tl = gsap.timeline({
  //         scrollTrigger: {
  //           trigger: section,
  //           start: "top top", // Trigger when the current section starts to scroll into view
  //           end: "bottom top", // End when the section leaves the screen
  //           scrub: true,
  //           pin: true, // Pin the section in place while it's fading out
  //           pinSpacing: false,
  //         },
  //       });

  //       tl.to(section, { opacity: 0, y: -50 }, 0) // Fade out the current section
  //         .fromTo(
  //           nextSection,
  //           { opacity: 0, y: 50 },
  //           { opacity: 1, y: 0 },
  //           "<"
  //         ); // Fade in the next section
  //     }
  //   });
  // }, []);
  const [openModalIndex, setOpenModalIndex] = useState(null);
  const [videoLoading, setVideoLoading] = useState(true);

  const openModal = (index) => {
    // Toggle modal visibility: If the same modal is clicked again, close it.
    setOpenModalIndex(openModalIndex === index ? null : index);
  };

  const spinner = () => {
    setVideoLoading(!videoLoading);
  };

  function callingAfterAweekAutomatically(apiCall) {
    apiCall();

    // Set timeout for one week (604800 seconds)
    setTimeout(() => {
      callingAfterAweekAutomatically(apiCall); // Recursively call the function
    }, 604800 * 1000); // Convert seconds to milliseconds
  }

  async function fetchAllFileUrls(bucketName) {
    try {
      const response = await fetch("/api/getPresignedUrl", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ bucketName }),
      });

      const data = await response.json();
      return data.urls; // Array of objects with { key, url }
    } catch (error) {
      console.error("Error fetching file URLs:", error);
      return [];
    }
  }

  const [files, setFiles] = useState([]);

  async function loadFiles() {
    const fileUrls = await fetchAllFileUrls("buypfizergenotropinhgh.com");
    setFiles(fileUrls);
  }

  useEffect(() => {
    callingAfterAweekAutomatically(loadFiles);
  }, []);

  const separateFiles = files.reduce(
    (acc, file) => {
      const extension = file.key.split(".").pop().toLowerCase();
      if (["jpg", "jpeg", "png"].includes(extension)) {
        acc.images.push(file);
      } else if (["mp4"].includes(extension)) {
        acc.videos.push(file);
      }
      return acc;
    },
    { images: [], videos: [] }
  );

  
  // You now have separate arrays for images and videos
  const { images, videos } = separateFiles;
  const videoOne = videos[0];
  const restVideos = videos.slice(1);

  const gridItems = [
    {
      imageSrc: "/images/slider-img-1.webp",
      title: "Why You Should Trust Me",
      videoSrc: files.length > 0 && restVideos[0].url,
    },
    {
      imageSrc: "/images/slider-img-1.webp",
      title: "Why You Should Trust Me",
      videoSrc: files.length > 0 && restVideos[1].url,
    },
  ];

  useEffect(() => {
    console.log(images);
    console.log(videos);
  }, [files]);

  return (
    <>
      <Hero vidUrl={files.length > 0 && videoOne.url} />

      <div className="container">
        {/* First Section */}

        <div className="  pt-12 lg:pt-48 flex flex-col gap-5 text-md lg:text-2xl  ">
          <p>
            Human Growth Hormone – Somatropin is the wonder substance of the
            last few decades. It is used by everyone from models to
            bodybuilders, athletes to actors from singers to celebrities. It is
            nothing short of a miracle substance, it is know as the master
            hormone. For this reason it builds muscle, burns fat, repairs old
            injuries and makes you look younger.
          </p>
          <p className="font-tavirajItalic">
            Dosages for youth and beauty should be at around 3 iu per day. For a
            model like body around 5iu and for bodybuilding purposes around 7 iu
            per day is recommended.
          </p>
          <p>
            As you can see in the video after having had access to omnitrope as
            well as humatrope I have decided to focus exclusively on Genotropin
            as i find it is the most desirable of all the pharmaceutical brands
            mg to mg it is much stronger than the other brands . So we have
            decided to only stock this in the pharmacy.
          </p>
          <p>Each Pack contains 36iu as pictured below.</p>
          <div className="py-6 lg:pt-48">
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={0}
              slidesPerView={3}
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              navigation={true}
              className="mySwiper px-20"
              breakpoints={{
                300: { slidesPerView: 1 },
                768: { slidesPerView: 3 },
              }}
            >
              {images &&
                images.map((items, i) => (
                  <SwiperSlide key={i} className="px-14">
                    <Image
                      src={items.url}
                      width={300}
                      height={300}
                      className="h-64 w-full object-cover rounded"
                      alt={items.key}
                    />
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
          <p>
            Each order is handled by me personally purchased through the
            pharmacy with a valid prescription via doctors supervision.
          </p>
          <p>
            Payment by Credit card through PayPal Bank Wire or Western
            Union/Moneygram
          </p>
          <p>Worldwide shipping via discreet packaging.</p>
          <p>
            UK USA CANADA and EUROPE have 100% success rate over 17 years of
            shipping !!!!
          </p>
          <p>No hidden costs all fees included.</p>
          <p>
            PLEASE NOTE THIS IS THE LATEST PACKAGING STARTING FROM THE BEGINNING
            OF 2023
          </p>
        </div>

        {/* Second Section */}

        <div className=" lg:pt-48">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 mt-10  gap-8">
            {/* <video src=""></video> */}

            {gridItems.map((item, index) => (
              <div
                key={index}
                onClick={() => openModal(index)} // Pass the index to open the correct modal
                className="cursor-pointer  w-full"
              >
                <div className="relative  w-full before:absolute before:left-0 before:right-0 before:top-0 before:z-10 before:h-full before:w-full before:bg-black before:opacity-50">
                  <Image
                    src={item.imageSrc}
                    className="w-full max-w-[1500px] max-h-full lg:max-h-[400px] object-cover rounded-lg"
                    width={1500}
                    height={200}
                    alt={item.title}
                  />
                  <h2 className="text-xl md:text-3xl absolute bottom-0 z-30 p-2 font-taviraj">
                    {item.title}
                  </h2>
                </div>

                {/* Conditionally render the modal if it matches the openModalIndex */}
                {openModalIndex === index && (
                  <section className="modal__bg">
                    <div className="modal__align">
                      <div className="modal__content">
                        <IoCloseOutline
                          className="modal__close"
                          aria-label="Close modal"
                          onClick={() => setOpenModalIndex(null)} // Close modal
                        />
                        <div className="modal__video-align">
                          {videoLoading ? (
                            <div className="modal__spinner">
                              <BiLoaderAlt
                                className="modal__spinner-style"
                                fadeIn="none"
                              />
                            </div>
                          ) : null}
                          <video
                            className="modal__video-style"
                            onLoad={spinner}
                            loading="lazy"
                            width="800"
                            height="500"
                            src={item.videoSrc}
                            controls
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          ></video>
                        </div>
                      </div>
                    </div>
                  </section>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* form */}

      <section className="pt-12 lg:pt-48 ">
        <div className="container px-4 lg:py-16 sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 gap-x-16 gap-y-8 ">
            <div className="rounded-lg bg-white text-black px-4 lg:px-8 pt-8 pb-6 shadow-lg lg:col-span-3 lg-px-8">
              <form action="#" className="space-y-4">
                <div>
                  <label className="sr-only" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="w-full rounded-lg border border-gray-600 p-3 text-sm"
                    placeholder="Name"
                    type="text"
                    id="name"
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="sr-only" htmlFor="email">
                      Email
                    </label>
                    <input
                      className="w-full rounded-lg border border-gray-600 p-3 text-sm"
                      placeholder="Email address"
                      type="email"
                      id="email"
                    />
                  </div>

                  <div>
                    <label className="sr-only" htmlFor="phone">
                      Phone
                    </label>
                    <input
                      className="w-full rounded-lg border border-gray-600 p-3 text-sm"
                      placeholder="Phone Number"
                      type="tel"
                      id="phone"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="sr-only" htmlFor="product">
                      Product
                    </label>
                    <select
                      id="product"
                      className="w-full rounded-lg text-black border border-gray-600 p-3 text-sm"
                    >
                      <option value="">Select Quantity</option>
                      <option value="product1">
                        2 x 36 iu total 72iu . Price is 760 euro (380 euro per
                        pack)
                      </option>
                      <option value="product2">
                        4 x 36 iu total 144 iu Price is 1480 euro (370 euro per
                        pack)
                      </option>
                      <option value="product3">
                        6 x 36 iu total 216 iu Price is 2160 euro (360 euro per
                        pack )
                      </option>
                      <option value="product4">
                        10 x 36 iu total 360iu Price is 3500 euro (350 euro per
                        pack)
                      </option>
                    </select>
                  </div>
                  <div>
                    <label className="sr-only" htmlFor="product">
                      Product
                    </label>
                    <select
                      id="product"
                      className="w-full rounded-lg text-black border border-gray-600 p-3 text-sm"
                    >
                      <option value="">Select Payment Method</option>
                      <option value="Paypal">Paypal</option>
                      <option value="Bank-Wire">Bank Wire</option>
                      <option value="Western-Union">
                        Western Union / Money Gram
                      </option>
                      <option value="Crypto">Crypto</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="sr-only" htmlFor="message">
                    Message
                  </label>

                  <textarea
                    className="w-full rounded-lg border border-gray-600 p-3 text-sm"
                    placeholder="Message"
                    rows="8"
                    id="message"
                  ></textarea>
                </div>

                <div className="mt-4">
                  <button
                    type="submit"
                    className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                  >
                    Order Now
                  </button>
                </div>
                <div>
                  <p>
                    For custom orders and inquires about hgh, please contact me
                    directly.{" "}
                    <a
                      href="mailto:fedyanasosovich@gmail.com"
                      className="text-darkPurple underline line-clamp-2 underline-offset-4"
                    >
                      fedyanasosovich@gmail.com
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
