import "./App.css";
import { Provider } from "react-redux";
import store from "./Redux/store";
import ParentComp from "./Calculator";
import MeraCalculator from "./ReduxToolkit/Calculator";
import SagaCalculator from "./SagaCalculator";

function App() {
  return (
    <>
      <Provider store={store}>
        {/**Calculator from simple React-Redux */}
        {/* <ParentComp /> */}
        {/**Calculatore from react toolkit */}
        {/* <MeraCalculator /> */}
        <SagaCalculator />
      </Provider>
    </>
  );
}

export default App;
