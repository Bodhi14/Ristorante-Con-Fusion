import { React, useState } from "react";
import { Card, CardImg, CardImgOverlay, CardBody, CardTitle } from "reactstrap";
import DishDetailComponent from "./DishDetailComponent";
import { DISHES as dishes } from "../shared/dishes";

function Menu(obj) {
  const [SelectedDish, SetSelectedDish] = useState(null);

  // const OnDishSelect = (dish) => {
  //   SetSelectedDish(dish);

  // } => was resulting in infinite loop

  const menu = obj.dishes.map((dish) => {
    return (
      <div key={dish.id} className="col-12 col-md-5 m-1">
        <Card onClick={() => SetSelectedDish(dish)}>
          <CardImg width="100%" src={dish.image} alt={dish.name} />

          <CardImgOverlay>
            <CardTitle>{dish.name}</CardTitle>
          </CardImgOverlay>
        </Card>
      </div>
    );
  });

  const first_dish = dishes[0];

  const comment_list = first_dish.comments.map((comm) => {
    const date = comm.date.substring(0, 10);
    const timezone = comm.date.substring(12, 26);
    return (
      <ul>
        <p>
          <strong>- - START TO THE TESTIMONIAL OF {comm.author} - - </strong>
        </p>
        <p>{comm.comment}</p>
        <p>-- {comm.author}</p>
        <p>Date: {date}</p>
        <p>TimeZone: {timezone}</p>
        <p>
          <strong>- - END TO THE TESTIMONIAL OF {comm.author} - - </strong>
        </p>
      </ul>
    );
  });

  return (
    <div className="container">
      <div className="row">{menu}</div>
      <div className="row">
        <DishDetailComponent dish={SelectedDish} />
        <div className="col-12 col-md-5 m-1">
          <Card>
            <CardBody>
              <ul>
                <h1>Comments</h1>
              </ul>
              {comment_list}
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Menu;
