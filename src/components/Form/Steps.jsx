import AddressForm from "./AddressForm";


function Steps() {
  return (
    <section className="form-container col col-12">
      {/* address phase  */}
      <AddressForm />

      {/* shipping phase */}
      <form className="col col-12" data-phase="shipping">
        <h3 className="form-title">運送方式</h3>
        <section className="form-body col col-12">
          <label className="radio-group col col-12" data-price="0">
            <input
              id="shipping-standard"
              type="radio"
              name="shipping"
              defaultChecked
            />
            <div className="radio-info">
              <div className="col col-12">
                <div className="text">標準運送</div>
                <div className="price"></div>
              </div>
              <div className="period col col-12">約 3~7 個工作天</div>
            </div>
            <div className="radio-box-border"></div>
          </label>
          <label className="radio-group col col-12" data-price="500">
            <input id="shipping-dhl" type="radio" name="shipping" />
            <div className="radio-info">
              <div className="col col-12">
                <div className="text">DHL 貨運</div>
                <div className="price"></div>
              </div>
              <div className="period col col-12">48 小時內送達</div>
            </div>
            <div className="radio-box-border"></div>
          </label>
        </section>
      </form>

      {/* credit-card phase */}
      <form className="col col-12" data-phase="credit-card">
        <h3 className="form-title">付款資訊</h3>
        <section className="form-body col col-12">
          <div className="col col-12">
            <div className="input-group input-w-lg-4 input-w-sm-full">
              <div className="input-label">持卡人姓名</div>
              <input type="text" placeholder="John Doe" />
            </div>
          </div>
          <div className="col col-12">
            <div className="input-group input-w-lg-4 input-w-sm-full">
              <div className="input-label">卡號</div>
              <input type="text" placeholder="1111 2222 3333 4444" />
            </div>
          </div>
          <div className="col col-12">
            <div className="input-group input-w-lg-3 input-w-sm-s3">
              <div className="input-label">有效期限</div>
              <input type="text" placeholder="MM/YY" />
            </div>
            <div className="input-group input-w-lg-3 input-w-sm-s3">
              <div className="input-label">CVC / CCV</div>
              <input type="text" placeholder="123" />
            </div>
          </div>
        </section>
      </form>
    </section>
  );
}

export default Steps;
