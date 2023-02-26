import Cart from "./components/Cart/Cart";
import ProgressControl from "./components/Form/ProgressControl";
import Steps from "./components/Form/Steps";
import StepProgress from "./components/Form/StepProgress";
import { useState } from "react";


function App() {
  const [currentStep,setCurrentStep]= useState("1")
  // const currentStep=1
  return (
    <div className="App">
      <main className="site-main">
        <div className="main-container">
          <section
            className="register-container col col-lg-6 col-sm-12"
            data-phase={currentStep}
            // data-phase="1"
            data-total-price="0"
          >
            <h2 className="register-title col col-12">結帳</h2>
            <StepProgress />
            <Steps />
          </section>
          <Cart />
          <ProgressControl currentStep={currentStep} setCurrentStep={setCurrentStep}/>
        </div>
      </main>
    </div>
  );
}

export default App;
