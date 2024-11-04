import { useDispatch, useSelector } from "react-redux";
import { addToBasket, updateItem } from "../redux/actions/basketActions";
import { useState } from "react";

const Card = ({ product }) => {
  const state = useSelector((store) => store.basket);
  const dispatch = useDispatch();
  const [clicked, setClicked] = useState(false); // Butonun tıklanma durumu

  const found = state.basket.find((item) => item.id === product.id);

  const handleClick = () => {
    if (found) {
      dispatch(updateItem(found));
    } else {
      dispatch(addToBasket(product));
    }
    setClicked(true); // Butona tıklandığında durumu değiştir
    setTimeout(() => setClicked(false), 200); // 200ms sonra durumu sıfırlayın
  };

  return (
    <div className="card pt-4" style={{ width: "18rem" }}>
      <div className="d-flex justify-content-center">
        <img src={product.image} width={200} height={200} className="rounded" />
      </div>
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p>
          <span className="fw-bold me-2">{product.make}</span>
          <span>{product.model}</span>
        </p>
        <p className="d-flex flex-column">
          {product.specs.map((spec, i) => (
            <span key={i}>{spec}</span>
          ))}
        </p>
        <button
          onClick={handleClick}
          className={`w-100 bg-black text-white rounded ${clicked ? 'button-clicked' : ''}`}
        >
          {found ? `Miktarı Arttır (${found.amount})` : 'Sepete Ekle'}
        </button>
      </div>
    </div>
  );
};

export default Card;
