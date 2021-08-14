import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Header from "../Header/Header";
import Services from "../Services/Services";
import Sliders from "../Sliders/Sliders";
import FeedBack from "../FeedBack/FeedBack";
import Contact from "../Contact/Contact";
import ReactDOM from "react-dom";
import MessengerCustomerChat from "react-messenger-customer-chat";

const Home = () => {
  return (
    <div>
      <MessengerCustomerChat
        pageId="105944268447512"
        appId="957663201750674"
      />
      <Header></Header>
      <Services></Services>
      <Sliders></Sliders>
      <FeedBack></FeedBack>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Home;
