import "./sidebar.css";
function Card(props) {
    return (
      <div className="row_box" id={props.name} onClick={props.onClick}>
        <div className="ItemImage" id={props.name}>
          <img src={props.src} id={props.name}></img>
        </div>
        <div className="ItemName" id={props.name}>
          <h2 id={props.name}>{props.ItemName}</h2>
        </div>
      </div>
    );
  }
  
  export default Card;