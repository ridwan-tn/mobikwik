import React from "react";
import Main from "./Main";
import BecomeAPartner from "./Pages/BecomeAPartner/BecomeAPartnerWrapper/BecomeAPartnerComponentsWrapper";
import Zaakpay from "./Pages/zaakpay/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Mutual from "./Pages/mutualFunds/mutualFunds"
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/partner" component={BecomeAPartner} />
          <Route path="/zaakpay" component={Zaakpay} />
          <Route path="/mutual" component={Mutual} />

        </Switch>
      </BrowserRouter>

    </>
  );
}
