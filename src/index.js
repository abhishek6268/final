// ! main react app file

// importing methoods and modules
import React, { useState } from "react";
import ReactDom from "react-dom/client";
import { Provider } from "react-redux";
import store from "./redux/store";
import App from "./App";

//  reactc router dom config
import { BrowserRouter } from "react-router-dom";

// main css config
import "./index.css";

//  google credentials login
import { GoogleOAuthProvider } from "@react-oauth/google";

//  creating an target element that target the root div of html file
const targetElement = document.getElementById("root");

// crating an root element that link with the root div of html file and render react app component inside it
const root = ReactDom.createRoot(targetElement);

//  rendering component inside the created root
root.render(
  <GoogleOAuthProvider clientId="454978643735-lnhjeebtkkp82g53n53mncvp00afl66h.apps.googleusercontent.com">
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </GoogleOAuthProvider>
);
