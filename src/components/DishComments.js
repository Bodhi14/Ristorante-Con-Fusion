import { Card, CardBody } from "reactstrap";
import { DISHES as dishes } from "../shared/dishes";

function DishComments(props) {
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
  );
}

export default DishComments;
