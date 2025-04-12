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
  title: "Buy Pfizer Genotropin Pharmaceutical HGH - Fedya Nasosovich",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="YARGhg_Sns4BdAKLxbzs7H9gLml3rXDPxE5hByN-53I"
        />
      </head>
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
