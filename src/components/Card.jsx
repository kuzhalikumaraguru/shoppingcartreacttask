import React, { useState } from "react";

function Card({data, cartCount, setCount }) {
  let [buttonState, setButton] = useState(true);
  return (
    <div className="col mb-5">
      <div className="card h-100">
        {data.isSale ? (
          <div
            className="badge bg-dark text-white position-absolute"
            style={{ top: "0.5rem", right: "0.5rem" }}
          >
            Sale
          </div>
        ) : (
          <></>
        )}
        <img className="card-img-top" src={data.image} alt="..." />
        <div className="card-body p-4">
          <div className="text-center">
            <h5 className="fw-bolder">{data.name}</h5>
            {data.rating ? (
              <div class="d-flex justify-content-center small text-warning mb-2">
                <div class="bi-star-fill"></div>
                <div class="bi-star-fill"></div>
                <div class="bi-star-fill"></div>
                <div class="bi-star-fill"></div>
                <div class="bi-star-fill"></div>
              </div>
            ) : (
              <></>
            )}
            {data.isSale ? (
              <>
                <span className="text-muted text-decoration-line-through">
                  $50.00
                </span>
                $25.00
              </>
            ) : data.options === "View" ? (
              <>
                <span>$40.00 - $50.00</span>
              </>
            ) : (
              <>
                <span>$50.00</span>
              </>
            )}
          </div>
        </div>
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
            {buttonState ? (
              <button
                className="btn btn-outline-dark mt-auto"
                onClick={() => {
                  setCount(cartCount + 1);
                  setButton(false);
                }}
              >
                {data.options === "View" ? "View Options" : "Add to cart"}
              </button>
            ) : (
              <button
                className="btn btn-outline-dark mt-auto"
                onClick={() => {
                  setCount(cartCount - 1);
                  setButton(true);
                }}
              >
                Remove from cart
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
