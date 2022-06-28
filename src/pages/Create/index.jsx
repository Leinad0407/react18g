import Card from "../../components/Card";
import { useState } from "react";

export default function Create() {
  // Components

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");

  const [infoData, setInfoData] = useState([
    {
      firstName: "",
      lastName: "",
      photoURL: "",
      email: "",
      birthday: "",
    },
  ]);

  const infoDataUI = infoData.map(
    ({ firstName, lastName, photoURL, email, birthday }, index) => {
      console.log(firstName);
      return (
        <Card
          key={index}
          firstName={firstName}
          lastName={lastName}
          photoURL={photoURL}
          email={email}
          birthday={birthday}
        />
      );
    }
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("AGREGAR Info");
    const newInfoData = [
      ...infoData,
      {
        firstName,
        lastName,
        photoURL,
        email,
        birthday,
      },
    ];

    setInfoData(newInfoData);

    setFirstName("");
    setLastName("");
    setPhotoURL("");
    setEmail("");
    setBirthday("");
    console.log(newInfoData);
  };

  console.log(infoData, "Info");

  return (
    <div className="App">
      <div className="main-container">
        <div className="container">{infoDataUI}</div>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="firstName"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
        />
        <input
          placeholder="lastName"
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
        />
        <input
          placeholder="Photo"
          value={photoURL}
          onChange={(event) => setPhotoURL(event.target.value)}
        />
        <input
          placeholder="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          placeholder="birthday dd/mm/aaaa"
          value={birthday}
          onChange={(event) => setBirthday(event.target.value)}
        />
        <button type="submit">Agregar Informacion</button>
      </form>
    </div>
  );
}

etch("https://kodemia-18g-default-rtdb.firebaseio.com/.json", {
  method: "POST",
  headers: {
    "Content-Type": "Application/JSON",
  },
  body: JSON.stringify({
    newInfoData,
  }),
})
  .then((response) => response.json())
  .then((data) => console.log(data));
