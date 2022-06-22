import "./CardItemContent"

import CardItemContent from "../CardItemContent"

export default function CardItemContent(params){
  return(
    <div className="card-item-content">
        <p className="title">Name</p>
        <p className="content">
          {firstName} {lastName}
        </p>
      </div>

  )
}