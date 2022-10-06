import { useSelector, useDispatch } from "react-redux";
import { request } from "./slice";

const APICall = () => {
  const selector = useSelector((state) => state.apiCallSlice);

  const details = selector.result;
  console.log("@DD: result", details);

  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(request());
  };

  return (
    <>
      <div className="container">
        <nav className="navbar navbar-light">
          <form className="form-inline">
            <button className="btn btn-outline-success" onClick={handleClick}>
              GET DATA
            </button>
          </form>
        </nav>
        <div
          className="container"
          style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}
        >
          {details.map((data) => {
            return (
              <>
                <div className="card" key={data.id} style={{ width: "300px" }}>
                  <img
                    className="card-img-top"
                    src={data.image}
                    alt="Card image cap"
                    style={{ width: "200px", height: "200px" }}
                  />
                  <div className="card-body">
                    <h5
                      className="card-title"
                      style={{
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {data.title}
                    </h5>
                    <p
                      className="card-text"
                      style={{
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {data.description}
                    </p>
                  </div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">{data.price}</li>
                    <li className="list-group-item">{data.category}</li>
                    <li className="list-group-item">{data.rating.rate}</li>
                    <li className="list-group-item">{data.rating.count}</li>
                  </ul>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default APICall;
