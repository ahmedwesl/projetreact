

function Supplier (props) {
  return (
    <div>
      <h1>Nom : {props.name}</h1>
      <h1>Status quantité : {props.status}</h1>
      <h1>Date : {props.checkedAt}</h1>
    </div>
  );
}
  

  
  


export default Supplier;