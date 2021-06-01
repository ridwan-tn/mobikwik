import Home from "./Pages/Home/Home";
import Loan from "./Pages/Boost Loan/Loan";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import TransferBank from "./Pages/Transfer To Bank/TransferBank";
import Side from "./Pages/Drawer/SideDrawer";
import PayBack from "./Pages/RedeemPaybackPoints/paybackPoints";
import Mgm from "./Pages/RedeemMGMPoints/mgmPoints";
import Wallet from "./Pages/walletTransfer/wallet";
import Offer from "./Pages/offers&deals/Main/Main";
import Local from "./Pages/local stores/Popup/popup";
import Career from "./Pages/FooterMain/career/career";
import Bsnl from "./Pages/FooterMain/BSNL Recharge/bsnl";
import Vi from "./Pages/FooterMain/vi/vi";
import Jio from "./Pages/FooterMain/Jio/jio";
import Mntl from "./Pages/FooterMain/Mntl/mntl";
import Contact from "./Pages/FooterMain/contact/contact";
import Sitemap from "./Pages/FooterMain/sitemap/sitemap";
import Blog from "./Pages/FooterMain/Blog/Blog";
import About from "./Pages/FooterMain/About/about";
import Avvnl from "./Pages/FooterMain/ElectricityPayments/ElectricityPayment";
function Main() {
  return (
    <>
      <BrowserRouter>
        <Side />
        <Switch>
          <Route exact path="/" render={(props) => <Home {...props} />} />
          <Route exact path="/loan" render={(props) => <Loan {...props} />} />
          <Route
            exact
            path="/transfer"
            render={(props) => <TransferBank {...props} />}
          />
          <Route
            exact
            path="/payback"
            render={(props) => <PayBack {...props} />}
          />
          <Route exact path="/mgm" render={(props) => <Mgm {...props} />} />
          <Route
            exact
            path="/wallet"
            render={(props) => <Wallet {...props} />}
          />
          <Route path="/offers" component={Offer} />
          <Route path="/local" component={Local} />
          <Route path="/career" component={Career} />
          <Route path="/bsnl" component={Bsnl} />
          <Route path="/vi" component={Vi} />
          <Route path="/jio" component={Jio} />
          <Route path="/mntl" component={Mntl} />
          <Route path="/contact" component={Contact} />
          <Route path="/sitemap" component={Sitemap} />
          <Route path="/blog" component={Blog} />
          <Route path="/about" component={About} />
          <Route path="/avvnl" component={Avvnl} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default Main;
