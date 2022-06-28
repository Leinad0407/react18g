import "./Card.css";

export default function Card({
  firstName,
  lastName,
  photoURL,
  email,
  birthday,
}) {
  return (
    <div className="card-container">
      <div className="card-image-container">
        <img alt="profile" src={photoURL} className="card-image" />
      </div>
      <div className="card-content">
        <div className="card-item-content">
          <p className="title">Name</p>
          <p className="content">
            {firstName} {lastName}
          </p>
        </div>
        <div className="card-item-content">
          <p className="title">Photo</p>
          <p className="content">{photoURL}</p>
        </div>
        <div className="card-item-content">
          <p className="title">Email</p>
          <p className="content">{email}</p>
        </div>
        <div className="card-item-content">
          <p className="title">Birthday</p>
          <p className="content">{birthday}</p>
        </div>
      </div>
    </div>
  );
}
