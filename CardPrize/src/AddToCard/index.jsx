import { useDispatch, useSelector } from "react-redux";

const AddToCard = () => {
  const CardList = useSelector((state) => {
    return;
  });
  const dispatch = useDispatch();
  console.log("@DD CardList", CardList);
  return (
    <>
      <div className="container">
        <div className="card-deck">
          {CardList?CardList.map((item) => {
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
          }) : <p>data not found</p>}</div>}
        </div>
      </div>
    </>
  );
};
export default AddToCard;
