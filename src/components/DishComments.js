import {Card, CardBody} from 'reactstrap';
import { comments } from '../shared/dishcomments';

function DishComments(props) {
  
  const comment_list = comments.map((comment) => {
    return(
     <ul>
       {comment}
       </ul>
    )
  });
   return(
     <div className="col-12 col-md-5 m-1">
     <Card>
       <CardBody>
         <ul>
           <h1>
             Comments
             </h1>
         </ul>
         {comment_list}
         </CardBody>
     </Card>
     </div>
   )
}

export default DishComments;