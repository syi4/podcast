import { FC } from "react";
import Image from "next/image";
import styles from "./Banner.module.css";

interface BannerProps {
  title: string;
  imageUrl: string;
}

const Banner: FC<BannerProps> = ({ title, imageUrl }) => {
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.title_wrapper}>
          <h5 className={styles.title}>{title}</h5>
        </div>
        <Image
          src={imageUrl}
          alt="Project Heat Podcast Members"
          fill
          className={styles.banner_image}
        />
      </div>
    </div>
  );
};

export default Banner;
