import Image from 'next/image';
import styles from './ImageGrid.module.css';
import animations from './animations.module.css'; // <-- ADDED: Import animations CSS

type ImageType = { url: string; width: number; height: number; };
type ImageGridProps = {
  data: {
    imagesCollection?: {
      items: ImageType[];
    };
  };
};

export default function ImageGrid({ data }: ImageGridProps) {
  const images = data.imagesCollection?.items;

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <section className={`${styles.grid} ${animations.fadeIn}`}> {/* <-- ADDED: Apply fadeIn class */}
      {images.map((image, index) => (
        <div key={image.url} className={styles.gridItem}>
          <Image
            src={image.url}
            alt={`Grid image ${index + 1}`}
            width={500}
            height={500}
            quality={80}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
          />
        </div>
      ))}
    </section>
  );
}
