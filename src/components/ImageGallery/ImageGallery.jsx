export default function ImageGallery({ pictures }) {
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
