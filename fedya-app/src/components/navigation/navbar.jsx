// NavBar.jsx - Server Component
import Link from "next/link";
import Button from "../global/button";
import ClientNavBar from "./ClientNavBar";

const navItems = [
  { name: "Home", url: "https://fedyanasosovich.com" },
  { name: "Latest videos", url: "https://fedyanasosovich.com/videos" },
  {
    name: "Identify fake hgh ",
    url: "https://fakegenotropinhgh.com",
  },
  {
    name: "Buy hgh from the pharmacy ",
    url: "https://www.sandozomnitrope.com/",
  },
];

// This is now a Server Component
const NavBar = () => {
  return (
    <ClientNavBar navItems={navItems} />
  );
};

export default NavBar;