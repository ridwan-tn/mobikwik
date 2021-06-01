import React, { useState } from "react";
import Carousel from "../Carousels/Carousel";
import "./Main.css";
import HeaderSection from "../pageHeader/HeaderSection";
import Grocery from "../Grocery/Grocery";
import Navbar from "../Navbar/Navbar";
import Shopping from "../Shopping/Shopping";
import MegaSaving from "../MegaSavings/MegaSaving";
import FirstPeCashback from "../FirstPeCashBack/FirstPeCashBack";
import Travel from "../Travel/Travel";
import Cashback from "../Cashback/Cashback";
import RechargeAndBills from "../RechargeAndBills/RechargeAndBills";
import Health from "../Health/Health";
import Gaming from "../Gaming/Gaming";
import GroceryStores from "../GroceryStores/GroceryStores";
import HealthStores from "../HealthStores/HealthStores";
import InfiniteSavings from "../InfiniteSavings/InfiniteSavings";
import SuperChoice from "../SuperChoice/SuperChoice";
import Restaurents from "../Restaurants/Restaurants";
import ShoppingStores from "../Shopping Stores/ShoppingStores";
import StoresNearYou from "../StoresNearYou/StoresNearYou";
import Service from "../Service/Service";
import NewUserOffers from "../NewUserOffers/NewUserOffers";
import Education from "../Education/Education";
import CashbackOnBackpack from "../CashbackOnBackpack/CashbackOnBackpack";
import LoyaltyRedemption from "../LoyaltyRedemption/LoyaltyRedemption";
import BoxOffice from "../BoxOffice/BoxOffice";
import MobikwikBlueAmericanExpressCard from "../MobikwikBlueAmericanExpressCard/MobikwikBlueAmericanExpressCard";
import PopularSearches from "../PopularSearches/PopularSearches";
import GroceryComponent from "../GroceryComponent/GroceryComponent";
import { Route, useRouteMatch } from "react-router-dom";
import ShoppingComponent from "../ShoppingComponent/ShoppingComponent";
import FirstPeCashBackComponent from "../FirstPeCashBackComponent/FirstPeCashBackComponent";
import TravelComponent from "../TravelComponent/TravelComponent";
import CashBackComponent from "../CashbackComponent/CashbackComponent";
import RechargeAndBillsComponents from "../RechargeAndBillsComponents/RechargeAndBillsComponents";
import HealthComponent from "../HealthComponent/HealthComponent";
import GamingComponent from "../GamingComponent/GamingComponent";
import GroceryStoresComponent from "../GroceryStoresComponent/GroceryStoresComponent";
import HealthStoresComponent from "../HealthStoresComponent/HealthStoresComponent";
import InfiniteSavingsComponent from "../InfiniteSavingsComponent/InfiniteSavingsComponent";
import SuperChoiceComponent from "../SuperChoiceComponent/SuperChoiceComponent";
import UPIComponent from "../UPIOfferComponent/UPIComponent";
import Food from "../Food/Food";
import FoodComponent from "../FoodComponent/FoodComponent";
import RestaurentComponent from "../RestaurentComponents/RestaurentComponents";
import BusTicketComponent from "../BusTicketComponent/BusTicketComponent";
import Entertainment from "../Entertainment/Entertainment";
import EntertainmentComponents from "../EntertainmentComponent/EntertainmentComponent";
import ShoppingStoresComponent from "../ShoppingStoresComponent/ShoppingStoresComponent";
import StoresNearYouComponent from "../StoresNearYouComponent/StoresNearYouComponent";
import ServiceComponent from "../ServiceComponent/ServiceComponent";
import NewUserOffersComponent from "../NewUserOfferComponent/NewUserOfferComponent";
import EducationComponent from "../EducationComponent/EducationComponent";
import ExchangesComponent from "../ExchangesComponent/ExchangesComponent";
import cashOnBackpackComponent from "../CashOnBackpackComponent/CashOnBackpackComponent";
import LoyalityRedemptionComponent from "../LoyalityRedemptionComponents/LoyalityRedemptionComponents";
import BoxOfficeComponent from "../BoxOfficeComponent/BoxOfficeComponent";
import Footer from "../Footer/Footer";
import RightBar from "../RightBar/RightBar";


export default function Main() {
    let { path, } = useRouteMatch();

    const [verticalNavbar, setVerticalNavbar] = useState(false)
    const [closeNavbar, setCloseNavbar] = useState(false)
    const [rightbar] = useState(false)
    const [closeRightbar] = useState(false)
  return (
    <div className="container-fluid">
      <div className="row">
        <Navbar className=" nav-bar" setCloseNavbar={setCloseNavbar} verticalNavbar ={ verticalNavbar }  closeNavbar={closeNavbar}  setVerticalNavbar ={ setVerticalNavbar }/>
        <RightBar rightbar={ rightbar } closeRightbar={closeRightbar}/>
      </div>
      <div className="row row-container">
        <HeaderSection/>
        <Carousel />
            <Route exact path={`${path}/all-offers`}>
              <Grocery />
              <Shopping />
              <Food />
              <MegaSaving />
              <Entertainment />
              <FirstPeCashback />
              <Travel />
              <Cashback />
              <RechargeAndBills />
              <Health />
              <Gaming />
              <GroceryStores />
              <HealthStores />
              <InfiniteSavings />
              <SuperChoice />
              <Restaurents />
              <ShoppingStores />
              <StoresNearYou />
              <Service />
              <NewUserOffers />
              <Education />
              <CashbackOnBackpack />
              <LoyaltyRedemption />
              <BoxOffice />
              <MobikwikBlueAmericanExpressCard />
            </Route>
            <Route path={`/grocery`} component={GroceryComponent}/>
            <Route path={`${path}/shopping`} component={ShoppingComponent}/>
            <Route path={`${path}/firstpecashback`} component={FirstPeCashBackComponent}/>
            <Route path={`${path}/travel`} component={TravelComponent}/>
            <Route path={`${path}/cashback`} component={CashBackComponent}/>
            <Route path={`${path}/recharge`} component={RechargeAndBillsComponents}/>
            <Route path={`${path}/health`} component={HealthComponent}/>
            <Route path={`${path}/gaming`} component={GamingComponent}/>
            <Route path={`${path}/grocerystores`} component={GroceryStoresComponent}/>
            <Route path={`${path}/healthstores`} component={HealthStoresComponent}/>
            <Route path={`${path}/infinitesavings`} component={InfiniteSavingsComponent}/>
            <Route path={`${path}/superchoice`} component={SuperChoiceComponent}/>
            <Route path={`${path}/upioffers`} component={UPIComponent}/>
            <Route path={`${path}/food`} component={FoodComponent}/>
            <Route path={`${path}/restaurants`} component={RestaurentComponent}/>
            <Route path={`${path}/bustickets`} component={BusTicketComponent}/>
            <Route path={`${path}/entertainment`} component={EntertainmentComponents}/>
            <Route path={`${path}/shopppingstores`} component={ShoppingStoresComponent}/>
            <Route path={`${path}/storenearyour`} component={StoresNearYouComponent}/>
            <Route path={`${path}/service`} component={ServiceComponent}/>
            <Route path={`${path}/newuseroffer`} component={NewUserOffersComponent}/>
            <Route path={`${path}/education`} component={EducationComponent}/>
            <Route path={`${path}/exchanges`} component={ExchangesComponent}/>
            <Route path={`${path}/cashOnBackpack`} component={cashOnBackpackComponent}/>
            <Route path={`${path}/loyalityRedumption`} component={LoyalityRedemptionComponent}/>
            <Route path={`${path}/boxOffice`} component={BoxOfficeComponent}/>

            <PopularSearches />
            <Footer/>
         
      </div>
    </div>
  );
}
