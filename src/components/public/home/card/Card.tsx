import "./Card.css";

function Card() {
  return (
    <div className="card">
      <div className="product-img">
        <img src="/card/Vector.svg" alt="" />
      </div>
      <div className="product-info">
        <h3 className="product-title">Chocolate Cheesecake</h3>
        <p className="product-price">$20.99</p>
        <div className="product-points">
          <p>
            ★★★★★ <span>(120)</span>{" "}
          </p>
        </div>
      </div>
      <div className="product-add">
        <img src="/card/shopping-cart.svg" alt="" />
      </div>
    </div>
  );
}

export default Card;
