import { useDispatch, useSelector } from "react-redux";
import { DELETENOTE } from "../action";

const ShowTodoList = () => {
  const todoList = useSelector((state) => {
    return state.TodoOprations;
  });

  const dispatch = useDispatch();

  const deleteTodoNote = (id) => {
    const filterTodoList = todoList.filter((todo) => {
      return todo.id !== id;
    });
    dispatch({ type: DELETENOTE, payLoad: filterTodoList });
  };

  const editTodoNote = (id) => {};

  return (
    <>
      <div className="column">
        <p> My Todo List : {todoList.length}</p>
        {todoList.map((item) => {
          const { id, title, discription } = item;
          return (
            <div className="card" key={id}>
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{discription}</p>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => {
                    deleteTodoNote(id);
                  }}
                >
                  DELETENOTE
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => {
                    editTodoNote(id);
                  }}
                >
                  EDITTODO
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default ShowTodoList;
