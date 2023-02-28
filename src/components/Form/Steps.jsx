import AddressForm from "./AddressForm";
import PaymentForm from "./PaymentForm";
import ShippingForm from "./ShippingForm";

function Steps() {
  
  
  return (
    <section className="form-container col col-12">
      <AddressForm />
      <ShippingForm />
      <PaymentForm />
    </section>
  );
}

export default Steps;
