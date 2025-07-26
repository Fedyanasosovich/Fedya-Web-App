import localFont from "next/font/local";
import "./globals.css";
import NavBar from "@/components/navigation/navbar";
import Footer from "@/components/footer/Footer";

const workSans = localFont({
  src: "./fonts/WorkSans-VariableFont.ttf",
  variable: "--worksans-variableFont",
  weight: "400 500 600",
  display: "swap",
});
const tavirajRegular = localFont({
  src: "./fonts/Taviraj-Regular.ttf",
  variable: "--taviraj-regular",
  weight: "400",
  display: "swap",
});
const tavirajItalic = localFont({
  src: "./fonts/Taviraj-Italic.ttf",
  variable: "--taviraj-italic",
  weight: "400",
  display: "swap",
});

export const metadata = {
  title: "Buy Sandoz Omnitrope HGH straight from the pharmacy - Fedya Nasosovich",
  description:
    "Buy Sandoz Omnitrope, pharmaceutical grade HGH (Human Growth Hormone) online. Trusted source for genuine Sandoz Omnitrope and other pharmaceutical HGH products. Worldwide shipping.",
  keywords:
    "Sandoz Omnitrope, HGH, Human growth hormone, Buy pharmaceutical hgh, Buy hgh online, Buy Sandoz Omnitrope, pharmacy, Fedya Nasosovich, pharmaceutical HGH, genuine HGH, buy HGH, order HGH online, growth hormone therapy",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${workSans.variable} ${tavirajRegular.variable} ${tavirajItalic.variable} antialiased`}
      >
        <NavBar />
        <main className=" ">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
