import "./Card.css"

export default function CardContainer({
    firstName,
    lastName,
    age,
    gender,
}){
    return(
        <div className="card-content">
        <div className="card-item-content">
        <p>Nombre</p>
        <p>{firstName} {lastName}</p>
        </div>
        <div className="card-item-content">
          <p>Edad</p>
          <p>{age}</p>
        </div>
        <div className="card-item-content">
          <p>Genero</p>
          <p>{gender}</p>
        </div>
      </div>

    );
}

