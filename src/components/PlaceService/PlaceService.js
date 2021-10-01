import Sidebar from "../Dashboard/Sidebar/Sidebar";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const promise = loadStripe(
  "pk_test_51IhsRTDIrlQ0GMJ6Blyc2Y5WNa1tGNERjnT5IoPpXd9NagrXrnh9WSBABWYUE5NLWHCszPtL5O2nPYUfNj3tK9oK00vJItvxfW"
);

const PlaceService = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        {/* sidebar */}
        <div className="col-md-3 col-lg-2 bg-gray-200 md:h-screen h-full">
          <Sidebar></Sidebar>
        </div>

        {/* payment-area */}
        <div className="col-md-9 col-lg-10 text-center">
          <p className="py-5 text-2xl font-bold text-blue-700">
            International Payment Getway
          </p>
          <div className="row">
            <div className="col-sm-12 col-md-8 col-lg-6 mx-auto">
              <Elements stripe={promise}>
                <CheckoutForm />
              </Elements>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceService;
