import React, { useEffect, useState } from "react";
import axios, { Axios } from "axios";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Pages/Header";
import Footer from "./Pages/Footer";
import BookService from "./Pages/ServiceBook";
import Type from "./Pages/ServiceType";
import Banner from "./Pages/Banner";
import Testimonial from "./Pages/Testimonial";
import PestOptionsPage from "./Pages/PestOptionsPage";
import Termite from "./Pages/Termite";
import Cockroach from "./Pages/Cockroach";
import Mosquito from "./Pages/Mosquito";
import Mouse from "./Pages/Mouse";
import Ant from "./Pages/Ant";
import WoodBorer from "./Pages/WoodBorer";
import BedBug from "./Pages/BedBug";
import General from "./Pages/General";
import Fly from "./Pages/Fly";
import Agriculture from "./Pages/Agriculture";
import HomePage from "./Pages/HomePage";
import Contact from "./Pages/Contact";
import ThankYou from "./Pages/ThankYou";

// import CheckService from "./Pages/CheckService";

function App() {
  const [data, setData] = useState();

  const fetchData = async () => {
    try {
      const response = await Axios.get("http://localhost:5000/getData");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data from backend:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/contact" component={Contact} />
        <Route path="/thankYou" component={ThankYou} />
        <Route path="/" exact component={PestOptionsPage} />
        <Route path="/termite" component={Termite} />
        <Route path="/cockroach" component={Cockroach} />
        <Route path="/mosquito" component={Mosquito} />
        <Route path="/mouse" component={Mouse} />
        <Route path="/ant" component={Ant} />
        <Route path="/woodborer" component={WoodBorer} />
        <Route path="/bedbug" component={BedBug} />
        <Route path="/general" component={General} />
        <Route path="/fleafly" component={Fly} />
        <Route path="/agriculture" component={Agriculture} />
      </Switch>
      <Route
        render={({ location }) => {
          if (location.pathname === "/") {
            // Render the common components only on the home page
            return (
              <>
                <BookService />
                {/* <CheckService /> */}
                <Type />
                <Banner />
                <HomePage />
                <Testimonial />
              </>
            );
          }
        }}
      />
      <Footer />
    </Router>
  );
}

export default App;