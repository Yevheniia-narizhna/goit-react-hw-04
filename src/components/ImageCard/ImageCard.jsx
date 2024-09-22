import s from "./ImageCard.module.css";
export default function ImageCard({ picture, onClick }) {
  return (
    <div className={s.imageCard} onClick={() => onClick(picture)}>
      <img src={picture.urls.small} alt={picture.alt_description} />
    </div>
  );
}
