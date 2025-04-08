// This file should be named page.js or page.tsx in a Next.js app directory structure

import Hero from "@/components/fakegenotropinhgh/hero";
import DynamicSlider from "@/components/fakegenotropinhgh/dynamicSlider";
import Link from "next/link";
import Button from "@/components/global/button";
import Image from "next/image";
import { IoLogoInstagram } from "react-icons/io5";

// Import Swiper components (these will be client components)
import ClientSideSwiper from "@/components/fakegenotropinhgh/ClientSideSwiper";

// Export a configuration for SSR
export const dynamic = 'force-dynamic'; // This forces SSR

export default function Home() {
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
        <div className="pt-12 flex flex-col gap-5 text-md lg:text-2xl">
          <p className="font-tavirajItalic">
            Below I will show you ways to tell if your hgh is real. Ofcourse the
            easiest way is to purchase it from me as you can see my videos where
            I purchase direct from the pharmacy LEGALLY ! However for everyone
            out there who thinks they may have already been burnt . I advise you
            to cross reference all these different ways and then come to a
            conclusion.
          </p>
          <h2 className="font-taviraj text-3xl mt-8">Testing</h2>
          <p>
            Blood tests for IGF should be conducted before and 1-2 months after
            the beginning of usage. HGH serum test should be done 2-4 hours post
            injection. These tests can be faked by high quality methods nowadays
            such as using gh releasers ( cjc ghrp etc) and igf in place of real
            hgh. This would cause you to get a fake high value in the blood
            test. As well as some cortisone to simulate the water retention in
            hands and hgh fragment for hunger. I don't place too much emphasis
            on blood tests because they can be faked and its no indication of
            quality. Also absorption is different in everyone one person will
            use 1 iu and get an increase in serum by 1 point another by 4
            points…. However it is a start.
          </p>
          <h2 className="font-taviraj text-3xl mt-8">Usage</h2>
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
          <h2 className="font-taviraj text-3xl mt-8">Logical analysis</h2>
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
          <h2 className="font-taviraj text-3xl mt-8">Packaging</h2>
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
          <h2 className="font-taviraj text-3xl mt-8">
            Fake Yellow Humatrope HGH
          </h2>
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
          <div className="py-6 lg:pt-12">
            <DynamicSlider />
          </div>

          <h2 className="font-taviraj text-3xl mt-8">Fake Genotropin HGH</h2>
          <p>
            The quality of these fakes are surreal. Thus I have provided a lot
            of photos so you can tell the difference. Again price and non
            matching serial numbers are a huge giveaway.
          </p>

          <p className="mt-4">
            The real box font is in capital letters. The fake one in smaller
            letters.
          </p>
          
          {/* Using the client-side swiper component */}
          <ClientSideSwiper
            images={[
              {
                src: "/images/fakegenotropinhgh/Real-Box-Font.webp",
                alt: "Real Box Font",
                caption: "Real"
              },
              {
                src: "/images/fakegenotropinhgh/fake-Box-Font.webp",
                alt: "Fake Box Font",
                caption: "Fake"
              }
            ]}
          />
          
          <p className="mt-4">
            The Real package has a much thinner purple line.
          </p>
          
          <ClientSideSwiper
            images={[
              {
                src: "/images/fakegenotropinhgh/Thin-purple-line-real.webp",
                alt: "Thin Purple Line",
                caption: "Real"
              },
              {
                src: "/images/fakegenotropinhgh/Thick-purple-line-fake.webp",
                alt: "Thick Purple Line",
                caption: "Fake"
              }
            ]}
          />
          
          <p className="mt-4">
            The old qr code had 2 lines of serial numbers. The new qr code has 4
            lines of serial numbers.
          </p>
          
          <ClientSideSwiper
            images={[
              {
                src: "/images/fakegenotropinhgh/Real-QR-code.webp",
                alt: "Real-QR-code",
                caption: "Fake"
              },
              {
                src: "/images/fakegenotropinhgh/Fake-QR-code.webp",
                alt: "Fake-QR-code",
                caption: "Fake"
              },
              {
                src: "/images/fakegenotropinhgh/Real-qr-code.jpg",
                alt: "Fake-QR-code",
                caption: "Real"
              }
            ]}
          />
          
          <p className="mt-4">
            There are both fakes and original boxes from both Belgium and
            Almanya so country of manufacture is no indication
          </p>
          
          <ClientSideSwiper
            images={[
              {
                src: "/images/fakegenotropinhgh/Real-country-of-manufacture.webp",
                alt: "Real-QR-code"
              },
              {
                src: "/images/fakegenotropinhgh/fake-country-of-manufacture.webp",
                alt: "Fake-QR-code"
              }
            ]}
          />
          
          <p className="mt-4">
            The real mg on the packet are printed. The fake one has a sticker.
          </p>
          
          <ClientSideSwiper
            images={[
              {
                src: "/images/fakegenotropinhgh/Real-mg-printed.webp",
                alt: "Real-mg-printed",
                caption: "Real"
              },
              {
                src: "/images/fakegenotropinhgh/Fake-mg-sticker.webp",
                alt: "Fake-mg-printed",
                caption: "Fake"
              }
            ]}
          />
          
          <p className="mt-4">
            The sticker on the inset is lighter in the real packet. The fake one
            is darker.
          </p>
          
          <ClientSideSwiper
            images={[
              {
                src: "/images/fakegenotropinhgh/Real-blue-sticker.webp",
                alt: "Real-blue-sticker",
                caption: "Real"
              },
              {
                src: "/images/fakegenotropinhgh/Fake-blue-sticker.webp",
                alt: "Real-blue-sticker",
                caption: "Fake"
              }
            ]}
          />
          
          <p className="mt-4">
            Lastly the adjustment dial on the back of the pen is printed on the
            real pen. The fake pen has a sticker over it. I assume it is a 16iu
            pen that has had a sticker over it to look like its calibrated for a
            36iu pen. So in essence it may be real but underdosed.
          </p>
          
          <ClientSideSwiper
            images={[
              {
                src: "/images/fakegenotropinhgh/Real-pen-adjustment.webp",
                alt: "Real-pen-adjustment",
                caption: "Real"
              },
              {
                src: "/images/fakegenotropinhgh/Fake-pen-adjustment.webp",
                alt: "Fake-pen-adjustment",
                caption: "Fake"
              }
            ]}
          />
        
          <p className="mt-4">
            PLEASE NOTE FROM THE BEGINNING OF 2023 THE LOGO AND PACKAGING HAS
            CHANGED. THE ORIGINAL PACKAGING NOW HAS THESE CHANGES:
          </p>

          <ClientSideSwiper
            images={[
              {
                src: "/images/fakegenotropinhgh/DSC_1603.JPG",
                alt: "Real-pen-adjustment",
                caption: "A NEW LOGO",
                className: "h-72"
              },
              {
                src: "/images/fakegenotropinhgh/DSC_1600.JPG",
                alt: "Real-pen-adjustment",
                caption: "SMALLER PRINT ON THE EXPIRY DATE",
                className: "h-72"
              },
              {
                src: "/images/fakegenotropinhgh/DSC_1602.JPG",
                alt: "Real-pen-adjustment",
                caption: "A DIFFERENT QR CODE STICKER WITH ROUND EDGES AND DARKER INK",
                className: "h-72"
              }
            ]}
          />
          
          <div className="flex justify-center items-center flex-col">
            <Image
              src="/images/fakegenotropinhgh/New-qr-code-update-2027.JPG"
              width={900}
              height={900}
              className="w-full md:max-w-xl max-h-56 object-cover"
              alt="Thick Purple Line"
            />
            <figcaption className="font-taviraj">For pens expiring after January of 2027 the 17 code now looks like this.</figcaption>
          </div>
          
          <p className="mt-4">
            I hope all this has helped tremendously. Please bear in mind that
            some fakes may only have one mistake on the pen and the package is
            perfect. Others have many mistakes on the package but the pen is
            perfect!
          </p>
        </div>

        <div className="flex flex-col items-center mt-12">
          <Link href={"https://buypfizergenotropinhgh.com/"} target="_blank">
            <Button
              title={"Click here to purchase pharmaceutical HGH"}
              containerClass={"text-sm px-6"}
            />
          </Link>
          <div className="mt-5">
            <p className="mb-2 text-center">Follow us on</p>
            <Link href={"https://www.instagram.com/fedya_nasosovich/"}>
              <IoLogoInstagram size={34} className="text-darkPurple mx-auto" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}