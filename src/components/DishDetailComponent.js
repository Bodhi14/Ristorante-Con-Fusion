import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

function DishDetailComponent(props) {
  if(props.dish!=null) {
    return(
      <>
      <div className="col-12 col-md-5 m-1">
     <Card>
       <CardImg width="100%" src={props.dish.image} alt="image not loaded" />
       <CardBody>
         <CardTitle>{props.dish.name}</CardTitle>
         <CardText>{props.dish.description}</CardText>
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

export default DishDetailComponent;