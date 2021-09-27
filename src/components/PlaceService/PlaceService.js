import Sidebar from "../Dashboard/Sidebar/Sidebar";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const promise = loadStripe(
  "pk_test_51IhsRTDIrlQ0GMJ6Blyc2Y5WNa1tGNERjnT5IoPpXd9NagrXrnh9WSBABWYUE5NLWHCszPtL5O2nPYUfNj3tK9oK00vJItvxfW"
);

const PlaceService = () => {
  return (
    <div className="row">
      <div className="col-md-3 ">
        <Sidebar></Sidebar>
      </div>

      <div className="col-md-9 mt-5 ">
        <p className="py-4 text-xl font-bold">International Payment System</p>

        <p></p>
        <Elements stripe={promise}>
          <CheckoutForm />
        </Elements>
      </div>
    </div>
  );
};

export default PlaceService;
