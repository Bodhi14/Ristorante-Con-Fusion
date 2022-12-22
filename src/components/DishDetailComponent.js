import { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

class DishDetailComponent extends Component {
 
  componentDidMount() {
    console.log("DishDetailComponent Mounted")
  }

  componentDidUpdate() {
    console.log("DishDetailComponent Updated");
  }

  render() {
  console.log("Dish Detail Component Rendered");
  
  if(this.props.dish!=null) {
    return(
      <>
      <div className="col-12 col-md-5 m-1">
     <Card>
       <CardImg width="100%" src={this.props.dish.image} alt="image not loaded" />
       <CardBody>
         <CardTitle>{this.props.dish.name}</CardTitle>
         <CardText>{this.props.dish.description}</CardText>
       </CardBody>
      </Card>
      </div>
      </>
    );
  }
  else
  return (
    <div>
    </div>
  )
}
}

export default DishDetailComponent;