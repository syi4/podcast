import { FC } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import clsx from "clsx";
import YoutubeIcon from "../Icons/YoutubeIcon";
import styles from "./Navbar.module.css";
import InstagramIcon from "../Icons/InstagramIcon";
import TikTokIcon from "../Icons/TikTokIcon";

interface PageLink {
  name: string;
  link: string;
}

interface SocialLink {
  icon: JSX.Element;
  link: string;
}

const pageLinks: PageLink[] = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Podcast", link: "/podcast" },
];

const socialLinks: SocialLink[] = [
  {
    icon: <YoutubeIcon className={styles.youtube_icon} />,
    link: "https://www.youtube.com",
  },
  {
    icon: <InstagramIcon className={styles.instagram_icon} />,
    link: "https://www.instagram.com",
  },
  {
    icon: <TikTokIcon className={styles.tiktok_icon} />,
    link: "https://www.tiktok.com",
  },
];

const Navbar: FC = () => {
  const router = useRouter();

  return (
    <header className={styles.container}>
      <nav className={styles.nav_link_wrapper}>
        {pageLinks.map((pageLink, idx) => (
          <Link key={idx} href={pageLink.link} className={styles.nav_link}>
            {pageLink.name}
            <span
              className={clsx(
                styles.nav_link_border,
                router.asPath === pageLink.link && styles.nav_link_border_active
              )}
            >
              &nbsp;
            </span>
          </Link>
        ))}
      </nav>

      <nav className={styles.social_link_wrapper}>
        {socialLinks.map((socialLink, idx) => (
          <a key={idx} href={socialLink.link}>
            {socialLink.icon}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
