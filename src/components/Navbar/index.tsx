import { FC } from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";

interface PageLink {
  name: string;
  link: string;
}

interface SocialLink {
  name: string;
  link: string;
}

const pageLinks: PageLink[] = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Podcast", link: "/podcast" },
];

const socialLinks: SocialLink[] = [
  { name: "Youtube", link: "www.youtube.com" },
  { name: "Instagram", link: "www.instagram.com" },
  { name: "TikTok", link: "www.tiktok.com" },
];

const Navbar: FC = () => {
  return (
    <header className={styles.container}>
      <nav className={styles.link_wrapper}>
        {pageLinks.map((pageLink, idx) => (
          <Link key={idx} href={pageLink.link}>
            {pageLink.name}
          </Link>
        ))}
      </nav>

      <nav className={styles.link_wrapper}>
        {socialLinks.map((socialLink, idx) => (
          <Link key={idx} href={socialLink.link}>
            {socialLink.name}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
