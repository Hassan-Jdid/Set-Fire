import "../styles/Card.css";
import Button from "./Button";

const Card = ({ src, title, price }) => {
  return (
    <article className="card menu-card" >
      <img src={src} className="card-img-top menu-card-image" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-price">{price}</p>
      </div>
      <Button text="Add to Cart" onClick={() => alert("Card Added!")} />
    </article>
  );
};
export default Card;
