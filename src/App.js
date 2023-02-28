import Cart from "./components/Cart/Cart";
import ProgressControl from "./components/Form/ProgressControl";
import Steps from "./components/Form/Steps";
import StepProgress from "./components/Form/StepProgress";
import { useContext } from "react";
import { CartProvider } from "CartContext";
import { FormContext } from "FormContext";

function App() {
  const { currentStep } = useContext(FormContext);
  return (
    <div className="App">
      <main className="site-main">
        <div className="main-container">
          <section
            className="register-container col col-lg-6 col-sm-12"
            data-phase={currentStep}
          >
            <h2 className="register-title col col-12">結帳</h2>
            <StepProgress />
            <Steps />
          </section>
          <CartProvider>
            <Cart />
          </CartProvider>
          <ProgressControl />
        </div>
      </main>
    </div>
  );
}

export default App;
