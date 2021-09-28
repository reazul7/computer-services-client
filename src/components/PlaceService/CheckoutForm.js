import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { UserContext } from "../../App";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import "./stripe.css";
import Swal from 'sweetalert2'

export default function CheckoutForm() {
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState("");
  const stripe = useStripe();
  const elements = useElements();

  const { id } = useParams();
  const { loggedInUser } = useContext(UserContext);
  const [service, setService] = useState([]);

  // finding clicked file from home page
  const newService = service.find((sv) => sv._id === id);
  // console.log(newService);
  // console.log(service);

  useEffect(() => {
    fetch("https://warm-springs-45915.herokuapp.com/seeService")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

  useEffect(() => {
    window
      .fetch("https://warm-springs-45915.herokuapp.com/create-payment-intent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ items: [{ id }] }),
      })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setClientSecret(data.clientSecret);
      });
  }, []);

  const cardStyle = {
    style: {
      base: {
        color: "#32325d",
        fontFamily: "Arial, sans-serif",
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#32325d",
        },
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a",
      },
    },
  };

  const handleChange = async (event) => {
    // Listen for changes in the CardElement
    // and display any errors as the customer types their card details
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    setProcessing(true);

    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });

    if (payload.error) {
      setError(`Payment failed ${payload.error.message}`);
      setProcessing(false);
    } else {
      setError(null);
      setProcessing(false);
      setSucceeded(true);

      const formData = new FormData();
      formData.append("status", "pending");
      formData.append("service", newService.title);
      formData.append("image", newService.image.img);
      formData.append("price", newService.price);
      formData.append("email", loggedInUser.email);
      formData.append("name", loggedInUser.name);
      formData.append("description", newService.description);

      fetch("https://warm-springs-45915.herokuapp.com/placeService", {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((result) => {
          Swal.fire({
            icon: 'success',
            title: 'Thanks, for purchase',
            showConfirmButton: false,
            timer: 2000
          })
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <form id="payment-form" onSubmit={handleSubmit} className="shadow-2xl mx-auto">
      {newService && (
        <div className="bg-gray-100 p-2 rounded-lg text-center">
          <h2 className="text-xl font-semibold pb-2">
            Service Name:{" "}
            <span className="font-bold pl-2">{newService.title}</span>
          </h2>
          <p className="py-2 mb-2 text-lg">{newService.description}</p>
          <p className="bg-blue-100 px-4 py-2 mx-auto w-6/12 font-bold rounded-lg">
            Price: {newService.price}
          </p>
        </div>
      )}
      <br />
      <CardElement
        id="card-element"
        options={cardStyle}
        onChange={handleChange}
      />
      <button disabled={processing || disabled || succeeded} id="submit" className="w-6/12 mx-auto rounded my-2">
        <span id="button-text">
          {processing ? (
            <div className="spinner" id="spinner"></div>
          ) : (
            "Pay Now"
          )}
        </span>
      </button>
      {/* Show any error that happens when processing the payment */}
      {error && (
        <div className="card-error" role="alert">
          {error}
        </div>
      )}
      {/* Show a success message upon completion */}
      <p className={succeeded ? "result-message" : "result-message hidden"}>
        Payment succeeded, see the result in your
        <a href={`https://dashboard.stripe.com/test/payments`}>
          {" "}
          Stripe dashboard.
        </a>{" "}
        Refresh the page to pay again.
      </p>
    </form>
  );
}
