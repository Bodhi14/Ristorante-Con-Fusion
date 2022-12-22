// will be acting as a pseudo container component

import React, { Component } from "react";
import Menu from "./MenuComponent";
import { DISHES } from "../shared/dishes";
import DishDetailComponent from "./DishDetailComponent";
import Footer from "../components/FooterComponent";
import Header from "./HeaderComponent";
import Home from "./HomeComponent";
import {
  BrowserRouter,
  Switch,
  Redirect,
  Route,
  Routes
} from "react-router-dom";

class Main extends Component {
  componentDidMount() {
    console.log("MainComponent ComponentDidMount invoked");
  }

  componentDidUpdate() {
    console.log("MainComponent ComponentDidUpdate invoked");
  }
  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
      selectedDish: null
    };
  }

  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId });
  }

  render() {
    console.log("MainComponent render invoked");

    const HomePage = () => {
      return (
        <>
          <Home />
        </>
      );
    };

    const MenuPage = () => {
      return (
        <>
          <Menu
            dishes={this.state.dishes}
            onClick={(dishId) => this.onDishSelect(dishId)}
          />
        </>
      );
    };

    const DishDetailComponentPage = () => {
      return (
        <>
          <DishDetailComponent
            dish={
              this.state.dishes.filter(
                (dish) => dish.id === this.state.selectedDish
              )[0]
            }
          />
        </>
      );
    };

    return (
      <React.Fragment>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route exact path="/menu" component={MenuPage} />
          <Route exact path="/about" component={DishDetailComponentPage} />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Main;
