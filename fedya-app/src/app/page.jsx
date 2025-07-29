// page.jsx (Server Component)
import Hero from "@/components/buypfizergenotropinhgh/hero";
import GallerySection from "@/components/buypfizergenotropinhgh/GallerySection";
import VideoGrid from "@/components/buypfizergenotropinhgh/VideoGrid";
import Form from "@/components/buypfizergenotropinhgh/form";
import { fetchAllFileUrls } from "@/libs/dataFetching";
import { useState, useEffect } from "react";
import Button from "@/components/global/button";

export default async function Home() {
  // Server-side data fetching
  const files = await fetchAllFileUrls("buypfizergenotropinhgh.com");

  // Data processing logic
  const separateFiles = files.reduce(
    (acc, file) => {
      const extension = file.key.split(".").pop().toLowerCase();
      if (["jpg", "jpeg", "png"].includes(extension)) {
        // acc.images.push(file);
      } else if (["mp4"].includes(extension)) {
        acc.videos.push(file);
      }
      return acc;
    },
    {
      images: [
        "/images/DSC_1694.JPG",
        "/images/DSC_1695.JPG",
        "/images/DSC00043.JPG",
        "/images/DSC00045.JPG",
        "/images/DSC00046.JPG",
      ],
      videos: [],
    }
  );

  const images = [
    { url: "/images/DSC1.JPG" },
    { url: "/images/DSC2.JPG" },
    { url: "/images/DSC00043.JPG" },
    { url: "/images/DSC00045.JPG" },
    { url: "/images/DSC00046.JPG" },
  ];

  // You now have separate arrays for images and videos
  const { imagess, videos } = separateFiles;
  let middleIndex = Math.floor(videos.length / 2);
  const videoOne = videos.length > 0 ? [videos[middleIndex]] : [];
  const restVideos =
    videos.length > 0
      ? videos.slice(0, middleIndex).concat(videos.slice(middleIndex + 1))
      : [];

  const gridItems = [
    {
      imageSrc: "/images/thumbnail-1.png",
      title: "Buying hgh in a pharmacy hidden camera",
      videoSrc: "/videos/Buying-hgh-in-a-pharmacy-hidden-camera.mp4",
    },
    {
      imageSrc: "/images/thumbnail-2.png",
      title: "Why You Should Trust Me",
      videoSrc: "/videos/Why-you-should-trust-me.mp4",
    },
  ];

  const heroVideo = "/videos/saizen.mp4";

  // DisclaimerDialog client component
  function DisclaimerDialog() {
    const [open, setOpen] = useState(true);
    useEffect(() => {
      // Prevent background scroll when dialog is open
      if (open) document.body.style.overflow = "hidden";
      else document.body.style.overflow = "";
      return () => { document.body.style.overflow = ""; };
    }, [open]);
    if (!open) return null;
    return (
      <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-80" style={{background: "var(--background)"}}>
        <div className="max-w-lg w-full mx-4 bg-[var(--background)] text-[var(--foreground)] rounded-2xl shadow-xl p-8 flex flex-col items-center">
          <h2 className="text-xl font-bold mb-4 text-center">Disclaimer</h2>
          <div className="text-sm space-y-3 mb-8 text-center">
            <p>The photographs on this website are the property of Fedya Nasosovich. Any trademarks, logos, or brand identifiers depicted in these photographs are the property of their respective owners (Sandoz AG) and are used for illustrative purposes only according to fair use.</p>
            <p>We do not claim ownership of or affiliation with these trademarks.</p>
            <p>We do not operate an online pharmacy.</p>
            <p>We do not sell hgh.</p>
            <p>We provide a bespoke service whereby we obtain a prescription from the doctor on your behalf (after being given authorisation and consent from you) and we then use your prescription to purchase hgh from the pharmacy on your behalf.</p>
            <p>Please check local laws if ordering internationally.</p>
          </div>
          <Button title="I agree" containerClass="bg-[#5d3fd3] text-white w-full" onClick={() => setOpen(false)} />
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Disclaimer Dialog */}
      <DisclaimerDialog />
      <h1 className="sr-only">
        Buy Sandoz Omnitrope HGH Online – Pharmaceutical Human Growth Hormone
      </h1>
      <h2 className="sr-only">
        Genuine Sandoz Omnitrope | Buy Pharmaceutical HGH Online | Human Growth Hormone for Sale
      </h2>
      <Hero vidUrl={heroVideo} title={`Sandoz Omnitrope`} />

      <div className="container">
        {/* First Section */}
        <div className="pt-12 flex flex-col gap-5 text-md lg:text-2xl">
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

          {/* Gallery Section - Client Component */}
          <GallerySection images={images} />

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
            UK USA CANADA and EUROPE have 100% success rate over 22 years of
            shipping !!!!
          </p>
          <p>No hidden costs all fees included.</p>
          <p>
            PLEASE NOTE THIS IS THE LATEST PACKAGING STARTING FROM THE BEGINNING
            OF 2023
          </p>
        </div>

        {/* Video Grid - Client Component */}
        <div className="lg:pt-48">
          <VideoGrid gridItems={gridItems} />
        </div>
      </div>

      {/* Form */}
      <Form />
     
    </>
  );
}
