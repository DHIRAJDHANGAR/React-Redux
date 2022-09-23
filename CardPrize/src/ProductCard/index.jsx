import { useDispatch, useSelector } from "react-redux";
import { DECREMENT, INCREMENT } from "./action";

const CardContainer = () => {
  const ProductList = useSelector((state) => {
    console.log("LN6", state.ProductCard);
    return state.ProductCard;
  });
  const dispatch = useDispatch();

  const increment = (id) => {
    dispatch({ type: INCREMENT, param: id });
  };
  const decrement = (id) => {
    dispatch({ type: DECREMENT, param: id });
  };
  console.log("@DD Productlist", ProductList);

  return (
    <>
      <div className="container">
        <div className="card-deck">
          {ProductList.map((item) => {
            const { id, title, prize, quantity } = item;
            return (
              <div className="card bg-primary" key={id}>
                <div className="card-body text-center">
                  <p className="card-text">Title : {title}</p>
                  <p className="card-text">prize : {prize}</p>
                  <p>
                    <button
                      onClick={() => {
                        decrement(id);
                      }}
                    >
                      -
                    </button>
                  </p>
                  <p>{quantity}</p>
                  <p>
                    <button
                      onClick={() => {
                        increment(id);
                      }}
                    >
                      +
                    </button>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default CardContainer;
