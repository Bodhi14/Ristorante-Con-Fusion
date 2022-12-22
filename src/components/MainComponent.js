// will be acting as a pseudo container component

import React, { Component } from "react";
import Menu from "./MenuComponent";
import { DISHES } from "../shared/dishes";
import DishDetailComponent from "./DishDetailComponent";
import Footer from "../components/FooterComponent";
import Header from "./HeaderComponent";

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

    return (
      <React.Fragment>
        <Header />
        <Menu
          dishes={this.state.dishes}
          onClick={(dishId) => this.onDishSelect(dishId)}
        />
        <DishDetailComponent
          dish={
            this.state.dishes.filter(
              (dish) => dish.id === this.state.selectedDish
            )[0]
          }
        />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Main;
