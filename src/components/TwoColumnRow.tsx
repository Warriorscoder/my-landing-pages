import Image from 'next/image';
import styles from './TwoColumnRow.module.css';
import animations from './animations.module.css'; // <-- ADDED: Import animations CSS

type ImageType = { url: string; width: number; height: number; };
type TwoColumnRowProps = {
  data: {
    heading?: string;
    subtitle?: string;
    cta?: string;
    image?: ImageType;
  };
};

export default function TwoColumnRow({ data }: TwoColumnRowProps) {
  const { heading, subtitle, cta, image } = data;

  return (
    <section className={`${styles.twoCol} ${animations.fadeIn}`}> {/* <-- ADDED: Apply fadeIn class */}
      <div className={styles.textColumn}>
        {heading && <h2>{heading}</h2>}
        {subtitle && <p>{subtitle}</p>}
        {cta && <button className={styles.cta}>{cta}</button>}
      </div>
      <div className={styles.imageColumn}>
        {image && (
          <Image
            src={image.url}
            alt={heading || 'Feature image'}
            width={image.width}
            height={image.height}
            quality={80}
            sizes="(max-width: 768px) 100vw, 50vw"
            loading="lazy"
          />
        )}
      </div>
    </section>
  );
}
