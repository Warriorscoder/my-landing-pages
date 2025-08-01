import Image from 'next/image';
import styles from './HeroBlock.module.css';
import animations from './animations.module.css'; // <-- ADDED: Import animations CSS

type ImageType = { url: string; width: number; height: number; };
type HeroBlockProps = {
  data: {
    heading?: string;
    subtitle?: string;
    cta?: string;
    backgroundImage?: ImageType;
  };
};

export default function HeroBlock({ data }: HeroBlockProps) {
  const { heading, subtitle, cta, backgroundImage } = data;

  return (
    <section className={`${styles.hero} ${animations.fadeIn}`}> 
      {backgroundImage && (
        <div className={styles.backgroundImage}>
          <Image
            src={backgroundImage.url}
            alt={heading || 'Hero background'}
            quality={80}
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
      )}
      <div className={styles.content}>
        {heading && <h1>{heading}</h1>}
        {subtitle && <p>{subtitle}</p>}
        {cta && <button className={styles.cta}>{cta}</button>}
      </div>
    </section>
  );
}
