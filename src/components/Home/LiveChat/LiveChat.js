import React from "react";
import MessengerCustomerChat from "react-messenger-customer-chat";
import Home from "../Home/Home";

const LiveChat = () => {
  return (
    <div>
      <MessengerCustomerChat 
        pageId="105944268447512" 
        appId="957663201750674" 
      />
      <Home/>
    </div>
  );
};

export default LiveChat;
