import { React, Component, useState, useEffect } from "react";
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from "reactstrap";
import DishComments from "./DishComments";
import DishDetailComponent from "./DishDetailComponent";

function Menu(obj) {
  

  const [SelectedDish, SetSelectedDish] = useState(null);

  
  // const OnDishSelect = (dish) => {
  //   SetSelectedDish(dish);
      
  // } => was resulting in infinite loop

  
  

  const menu = obj.dishes.map((dish) => {
    return (
      <div key={dish.id} className="col-12 col-md-5 m-1">
        <Card onClick={()=> SetSelectedDish(dish)}>
        
         
            <CardImg width="100%" src={dish.image} alt={dish.name} />
          
          <CardImgOverlay>
            <CardTitle>{dish.name}</CardTitle>
          </CardImgOverlay>
        
        </Card>
      </div>
    );
  });

  return (
    <div className="container">
      <div className="row">
        {menu}
      </div>
     <div className="row">
       <DishDetailComponent dish={SelectedDish} />
       <DishComments />
     </div>
    </div>
  );
}

export default Menu;
