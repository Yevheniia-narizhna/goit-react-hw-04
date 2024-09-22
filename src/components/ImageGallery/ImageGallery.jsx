import s from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";
export default function ImageGallery({ pictures, onPictureClick }) {
  return (
    <div className={s.gallery}>
      {pictures.map((picture) => (
        <div
          className={s.galleryItem}
          key={picture.id}
          onClick={() => onImageClick(picture)}
        >
          <ImageCard picture={picture} onClick={onPictureClick} />
        </div>
      ))}
    </div>
  );
}
