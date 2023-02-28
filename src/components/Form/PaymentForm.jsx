import { useContext } from "react";
import { FormContext } from "FormContext";

function PaymentForm() {
  const { data, handleChange } = useContext(FormContext);
  return (
    <form className="col col-12" data-phase="credit-card">
      <h3 className="form-title">付款資訊</h3>
      <section className="form-body col col-12">
        <div className="col col-12">
          <div className="input-group input-w-lg-4 input-w-sm-full">
            <div className="input-label">持卡人姓名</div>
            <input
              type="text"
              placeholder="John Doe"
              name="payName"
              value={data.payName}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="col col-12">
          <div className="input-group input-w-lg-4 input-w-sm-full">
            <div className="input-label">卡號</div>
            <input
              type="text"
              placeholder="1111 2222 3333 4444"
              name="cardNumber"
              value={data.cardNumber}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="col col-12">
          <div className="input-group input-w-lg-3 input-w-sm-s3">
            <div className="input-label">有效期限</div>
            <input
              type="text"
              placeholder="MM/YY"
              name="expireDate"
              value={data.expireDate}
              onChange={handleChange}
            />
          </div>
          <div className="input-group input-w-lg-3 input-w-sm-s3">
            <div className="input-label">CVC / CCV</div>
            <input
              type="text"
              placeholder="123"
              name="CCV"
              value={data.CCV}
              required=""
              onChange={handleChange}
            />
          </div>
        </div>
      </section>
    </form>
  );
}

export default PaymentForm;
