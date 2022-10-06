import "./App.css";
import { Provider } from "react-redux";
import store from "./Redux/store";
import ParentComp from "./Calculator";
import MeraCalculator from "./ReduxToolkit/Calculator";
import SagaCalculator from "./SagaCalculator";
import ReduxSagaCalculator from "./ReduxCalculator";
import APICall from "./APICall";

function App() {
  return (
    <>
      <Provider store={store}>
        {/**Calculator from simple React-Redux */}
        {/* <ParentComp /> */}
        {/**Calculatore from react toolkit */}
        {/* <MeraCalculator /> */}
        {/* <SagaCalculator /> */}
        {/**Redux Saga Calcluator */}
        {/* <ReduxSagaCalculator /> */}
        <APICall />
      </Provider>
    </>
  );
}

export default App;
