import arrowRight from "img/arrow_rig.png";
import arrowLeft from "img/arrow_left.png";
function ProgressControl({setCurrentStep}) {
  return (
    <section className="progress-control-container col col-lg-6 col-sm-12">
      <section className="button-group col col-12" data-phase="address">
        <button className="next" onClick={() => {
  setCurrentStep("2");
}} >
          下一步
          <img src={arrowRight} alt="arrowRight" />
        </button>
      </section>
      <section className="button-group col col-12" data-phase="shipping">
        <button className="prev" onClick={() => {
  setCurrentStep("1");
}}>
          <img src={arrowLeft} alt="arrowLeft" />
          上一步
        </button>
        <button className="next" onClick={() => {
  setCurrentStep("3");
}}>
          下一步
          <img src={arrowRight} alt="arrowRight" />
        </button>
      </section>
      <section className="button-group col col-12" data-phase="credit-card">
        <button className="prev" onClick={() => {
  setCurrentStep("2");
}}>
          <img src={arrowLeft} alt="arrowLeft" />
          上一步
        </button>
        <button className="next">確認下單</button>
      </section>
    </section>
  );
}

export default ProgressControl;
