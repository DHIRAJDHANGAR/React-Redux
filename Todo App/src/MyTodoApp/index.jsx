import { useState } from "react";
import { useDispatch } from "react-redux";
import { ADDNOTE } from "./action";
import ShowTodoList from "./ShowTodoList";

const MyTodoList = () => {
  const [title, setTitle] = useState("");
  const [discription, setDiscription] = useState("");

  const dispatch = useDispatch();
  const AddTodoNote = () => {
    if (title === "") {
      return alert("Enter Some Title");
    }
    if (discription === "") {
      return alert("Enter Some Discription");
    }
    dispatch({
      type: ADDNOTE,
      payLoad: {
        id: new Date().getTime(),
        title: title,
        discription: discription,
      },
    });
    setTitle("");
    setDiscription("");
  };
  return (
    <>
      <form>
        <div className="form-group">
          <h1>My Todo</h1>
          <label htmlFor="exampleFormControlInput1">TITLE</label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            aria-describedby="emailHelp"
            placeholder="Enter title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput2">DISCRIPTION</label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput2"
            aria-describedby="emailHelp"
            placeholder="Enter discription"
            value={discription}
            onChange={(e) => {
              setDiscription(e.target.value);
            }}
          />
        </div>
        <button type="button" className="btn btn-primary" onClick={AddTodoNote}>
          ADDNOTE
        </button>
      </form>
      <ShowTodoList />
    </>
  );
};
export default MyTodoList;
