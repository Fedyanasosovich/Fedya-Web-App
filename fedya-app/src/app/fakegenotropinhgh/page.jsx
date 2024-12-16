"use client";
import Hero from "@/components/buypfizergenotropinhgh/hero";
import { useEffect, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

import { IoCloseOutline } from "react-icons/io5";
import { BiLoaderAlt } from "react-icons/bi";
import { IoIosPlayCircle } from "react-icons/io";
import Form from "@/components/buypfizergenotropinhgh/form";

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
    const fileUrls = await fetchAllFileUrls("fakegenotropinhgh.com");
    setFiles(fileUrls);
  }

  useEffect(() => {
    callingAfterAweekAutomatically(loadFiles);
  }, []);

  const separateFiles = files.reduce(
    (acc, file) => {
      const extension = file.key.split(".").pop().toLowerCase();
      if (["jpg", "jpeg", "png", "webp"].includes(extension)) {
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
  // let middleIndex = Math.floor(videos.length / 2);
  // const videoOne = [videos[middleIndex]];
  // const restVideos = videos
  //   .slice(0, middleIndex)
  //   .concat(videos.slice(middleIndex + 1));

  // const gridItems = [
  //   {
  //     imageSrc: "/images/thumbnail-1.png",
  //     title: "Buying hgh in a pharmacy hidden camera",
  //     videoSrc: files.length > 0 && restVideos[0].url,
  //   },
  //   {
  //     imageSrc: "/images/thumbnail-2.png",
  //     title: "Why You Should Trust Me",
  //     videoSrc: files.length > 0 && restVideos[1].url,
  //   },
  // ];

  useEffect(() => {
    console.log(images);
    // console.log(videos);
  }, [files]);

  return (
    <>
      <Hero
        title={"HOW TO IDENTIFY FAKE HGH"}
        text={`From the hundreds of clients I deal with 90% of those who have
            previously purchased human growth hormone ( somatropin) over the
            internet or from a source have received fake hgh . This page is
            designed to help you identify and know the signs so as not to lose
            your money !!!!`}
      />

      <div className="container">
        {/* First Section */}

        <div className="  pt-12 lg:pt-48 flex flex-col gap-5 text-md lg:text-2xl  ">
          <p></p>
          <p className="font-tavirajItalic">
            Below I will show you ways to tell if your hgh is real. Ofcourse the
            easiest way is to purchase it from me as you can see my videos where
            I purchase direct from the pharmacy LEGALLY ! However for everyone
            out there who thinks they may have already been burnt . I advise you
            to cross reference all these different ways and then come to a
            conclusion.
          </p>
          <h2 className="font-taviraj text-5xl">Testing</h2>
          <p>
            Blood tests for IGF should be conducted before and 1-2 months after
            the beginning of usage. HGH serum test should be done 2-4 hours post
            injection. These tests can be faked by high quality methods nowadays
            such as using gh releasers ( cjc ghrp etc) and igf in place of real
            hgh. This would cause you to get a fake high value in the blood
            test. As well as some cortisone to simulate the water retention in
            hands and hgh fragment for hunger. I don’t place too much emphasis
            on blood tests because they can be faked and its no indication of
            quality. Also absorption is different in everyone one person will
            use 1 iu and get an increase in serum by 1 point another by 4
            points…. However it is a start.
          </p>
          <h2 className="font-taviraj text-5xl">Usage</h2>
          <p>
            Usually human growth hormone has some specific effects on people fat
            loss, looking younger, better sleep, crazy vivid dreams swollen or
            tight feeling hands. You should have some of these effects . If you
            are using a good fake it may have Chinese hgh or
            ghrp6/insulin/frag/cortisone. Which would fake some effects but
            generally there is no rule of thumb. One person may sleep 3 hours
            longer than usual whilst another may have vivid dreams. Whereas a 3
            person may be starving or lose his appetite and have an overwhelming
            feeling of wellbeing.
          </p>
          <h2 className="font-taviraj text-5xl">Logical analysis</h2>
          <p>
            Price – There is no such thing as cheap hgh. Some countries are
            cheaper due to it being a low income country and some countries are
            expensive due to taxes. But generally hgh costs 8-10 dollars per iu
            in the pharmacy even in low cost countries plus whoever is selling
            it to you for profit. Country of origin and country of purchase. Be
            wary of buying Italian norditropin from china for example. Also some
            countries eg Bulgaria manufacture tons of fakes for the whole world.
            Who is the person selling it ? Are they a pharmacy ? Are they a
            doctor ? Do they have a script ? Or do they sell anything under the
            sun.
          </p>
          <h2 className="font-taviraj text-5xl">Packaging</h2>
          <p>
            Packaging can be faked almost to perfection nowadays but thankfully
            you can still tell the originals from the fakes. Using photos that I
            have provided here . Or from the original manufacturers websites.
            There are serial numbers and QR codes on packaging but these can be
            faked simply by buying an original pen and duplicating the serial
            number for a whole run . So even if you scan a QR code and it comes
            up good . Its no indication as maybe the qr code is on an original
            pen and has been printed 10,000 times on fake packages. SERIAL
            NUMBERS MUST BE DIFFERENT ON EACH PRODUCT. BATCH NUMBERS ARE THE
            SAME. Also note that packaging and contents should have the same
            serial number and XP date (about 2 years) If the box says GX123456
            and the pen says AB65432 its fake. Generally speaking Yellow
            humatrope is the most faked hgh on the planet I would stay away from
            99% of yellow humatrope. I have never seen fake omnitrope before
            thus there are no photos of omnitrope on this page . Genotropin is
            quite commonly faked and the fakes are quite good. I will provide
            some of the Genotropin pen fake photos below. Norditropin is often
            faked however the fakes are not advanced enough to pass the barcode
            scan so I have not put any photos of the fake norditropin. I hope
            that using all this information you will be able to steer clear of
            any fakes . As I said before to be 100% sure please buy hgh from me
            !!!!
          </p>
          <h2 className="font-taviraj text-5xl">Fake Yellow Humatrope HGH</h2>
          <p>
            Yellow humatrope hgh has a huge flaw in the fact that the barcode is
            totally wrong. This is the most commonly faked hgh and it scans
            correct with the qr code program and even has almost identical
            packaging to the original. Sometimes the serials do not match
            however if the barcode looks like the fake one then forget it. Its
            really simple to identify The real humatrope hgh has one single
            black tab with the serial and batch numbers . The fake has one white
            at the bottom and one black at the top.
          </p>
          <p>
            New fakes have emerged with the black serial code. The original
            boxes all have a separate (21) code. The fake boxes are all printed
            with the same (21) code
          </p>
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

          <h2 className="font-taviraj text-5xl">Fake Genotropin HGH</h2>
          <p>
            The quality of these fakes are surreal. Thus I have provided a lot
            of photos so you can tell the difference. Again price and non
            matching serial numbers are a huge giveaway.
          </p>

          <p>
            The real box font is in capital letters. The fake one in smaller
            letters.
          </p>
          <div className="flex gap-3">
            <div>
              <figcaption className="font-taviraj">Real</figcaption>
              <Image
                src={"/images/fakegenotropinhgh/Real-Box-Font.webp"}
                width={300}
                height={300}
                alt="Real Box Font"
              />
            </div>
            <div>
              <figcaption className="font-taviraj">Fake</figcaption>
              <Image
                src={"/images/fakegenotropinhgh/Fake-Box-Font.webp"}
                width={300}
                height={300}
                alt="Real Box Font"
              />
            </div>
          </div>
          <p>The Real package has a much thinner purple line.</p>
          <div className="flex gap-3">
            <div>
              <figcaption className="font-taviraj">Real</figcaption>
              <Image
                src={"/images/fakegenotropinhgh/Thin-purple-line-real.webp"}
                width={300}
                height={300}
                alt="Thin Purple Line"
              />
            </div>
            <div>
              <figcaption className="font-taviraj">Fake</figcaption>
              <Image
                src={"/images/fakegenotropinhgh/Thick-purple-line-fake.webp"}
                width={300}
                height={300}
                alt="Thick Purple Line"
              />
            </div>
          </div>
          <p>
            Differences between fake qr code and real qr code. The real qr code
            is smaller.
          </p>
          <div className="flex gap-3">
            <div>
              <figcaption className="font-taviraj">Real</figcaption>
              <Image
                src={"/images/fakegenotropinhgh/Real-QR-code.webp"}
                width={300}
                height={300}
                alt="Real-QR-code"
              />
            </div>
            <div>
              <figcaption className="font-taviraj">Fake</figcaption>
              <Image
                src={"/images/fakegenotropinhgh/Fake-QR-code.webp"}
                width={300}
                height={300}
                alt="Fake-QR-code"
              />
            </div>
          </div>
          <p>
            There are both fakes and original boxes from both Belgium and
            Almanya so country of manufacture is no indication
          </p>
          <div className="flex gap-3">
            <div>
              <figcaption className="font-taviraj">Real</figcaption>
              <Image
                src={
                  "/images/fakegenotropinhgh/Real-country-of-manufacture.webp"
                }
                width={300}
                height={300}
                alt="Real-QR-code"
              />
            </div>
            <div>
              <figcaption className="font-taviraj">Fake</figcaption>
              <Image
                src={
                  "/images/fakegenotropinhgh/fake-country-of-manufacture.webp"
                }
                width={300}
                height={300}
                alt="Fake-QR-code"
              />
            </div>
          </div>
          <p>
            The real mg on the packet are printed. The fake one has a sticker.
          </p>
          <div className="flex gap-3">
            <div>
              <figcaption className="font-taviraj">Real</figcaption>
              <Image
                src={"/images/fakegenotropinhgh/Real-mg-printed.webp"}
                width={300}
                height={300}
                alt="Real-mg-printed"
              />
            </div>
            <div>
              <figcaption className="font-taviraj">Fake</figcaption>
              <Image
                src={"/images/fakegenotropinhgh/Fake-mg-sticker.webp"}
                width={300}
                height={300}
                alt="Fake-mg-printed"
              />
            </div>
          </div>
          <p>
            The sticker on the inset is lighter in the real packet. The fake one
            is darker.
          </p>
          <div className="flex gap-3">
            <div>
              <figcaption className="font-taviraj">Real</figcaption>
              <Image
                src={"/images/fakegenotropinhgh/Real-blue-sticker.webp"}
                width={300}
                height={300}
                alt="Real-blue-sticker"
              />
            </div>
            <div>
              <figcaption className="font-taviraj">Fake</figcaption>
              <Image
                src={"/images/fakegenotropinhgh/Fake-blue-sticker.webp"}
                width={300}
                height={300}
                alt="Real-blue-sticker"
              />
            </div>
          </div>
          <p>
            Lastly the adjustment dial on the back of the pen is printed on the
            real pen. The fake pen has a sticker over it. I assume it is a 16iu
            pen that has had a sticker over it to look like its calibrated for a
            36iu pen. So in essence it may be real but underdosed.
          </p>
          <div className="flex gap-3">
            <div>
              <figcaption className="font-taviraj">Real</figcaption>
              <Image
                src={"/images/fakegenotropinhgh/Real-pen-adjustment.webp"}
                width={300}
                height={300}
                alt="Real-pen-adjustment"
              />
            </div>
            <div>
              <figcaption className="font-taviraj">Fake</figcaption>
              <Image
                src={"/images/fakegenotropinhgh/Fake-pen-adjustment.webp"}
                width={300}
                height={300}
                alt="Fake-pen-adjustment"
              />
            </div>
          </div>
          <p>
            PLEASE NOTE FROM THE BEGINNING OF 2023 THE LOGO AND PACKAGING HAS
            CHANGED. THE ORIGINAL PACKAGING NOW HAS THESE CHANGES:
          </p>

          <div>
            <figcaption className="font-taviraj">A NEW LOGO</figcaption>
            <Image
              src={"/images/fakegenotropinhgh/New-logo.webp"}
              className="w-full"
              width={300}
              height={300}
              alt="Real-pen-adjustment"
            />
          </div>
          <div>
            <figcaption className="font-taviraj">
              SMALLER PRINT ON THE EXPIRY DATE{" "}
            </figcaption>
            <Image
              src={
                "/images/fakegenotropinhgh/Smaller-print-on-expiry-date.webp"
              }
              className="w-full"
              width={300}
              height={300}
              alt="Real-pen-adjustment"
            />
          </div>
          <div>
            <figcaption className="font-taviraj">
              A DIFFERENT QR CODE STICKER WITH ROUND EDGES AND DARKER INK
            </figcaption>
            <Image
              src={
                "/images/fakegenotropinhgh/Different-qr-code-sticker-with-round-edges-darker-ink.webp"
              }
              className="w-full"
              width={300}
              height={300}
              alt="Real-pen-adjustment"
            />
          </div>

          <p>
            I hope all this has helped tremendously . Please bear in mind that
            some fakes may only have one mistake on the pen and the package is
            perfect. Others have many mistakes on the package but the pen is
            perfect !
          </p>
        </div>

        {/* Second Section */}

        <div className=" lg:pt-48">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 mt-10  gap-8">
            {/* <video src=""></video> */}

            {/* gridItems.map((item, index) => (
              <div
                key={index}
                onClick={() => openModal(index)} // Pass the index to open the correct modal
                className="cursor-pointer  w-full"
              >
                <div className="relative  w-full before:absolute before:left-0 before:right-0 before:top-0 before:z-10 before:h-full h-full z-10 before:w-full before:bg-black before:opacity-50">
                  <Image
                    src={item.imageSrc}
                    className="w-full max-w-[1500px] h-full max-h-full lg:max-h-[400px] object-cover rounded-lg"
                    width={1500}
                    height={200}
                    alt={item.title}
                  />
                  <p className="absolute top-1/2 z-20 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <IoIosPlayCircle size={54} />
                  </p>
                </div>

                {/* Conditionally render the modal if it matches the openModalIndex */}
            {/* {openModalIndex === index && ( */}
            {/* <section className="modal__bg">
                    <div className="modal__align">
                      <div className="modal__content">
                        <IoCloseOutline
                          className="modal__close"
                          aria-label="Close modal"
                          onClick={() => setOpenModalIndex(null)} // Close modal
                        />
                        <div className="modal__video-align flex-col items-center">
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
                            autoPlay
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          ></video>
                          <h2 className="text-2xl text-center  md:text-3xl text-white  bottom-0 z-30 p-2 font-taviraj">
                            {item.title}
                          </h2>
                        </div>
                      </div>
                    </div>
                  </section>
                )}
              </div> */}

            {/* )) } */}
          </div>
        </div>
      </div>

      {/* form */}

      <Form />
    </>
  );
}
