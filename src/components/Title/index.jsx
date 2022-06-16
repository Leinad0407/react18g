import './Title.css';

//export default function Title(props){
    //return (
      //  <h1>{props.text.toUpperCase()}</h1>
  //  )
//} Primer componente es una funcion

export default function Title(props){
    return (
        <p>{props.pElement.toUpperCase()}</p>
    )
} 