import { useLoaderData } from "react-router-dom";

function Index(props){
  
  const people = useLoaderData();
  return people.map(person => (
    <div key={person._id} className="person"></div>
  ))
}

export default Index;
