import React from "react";
import ReactDOM from "react-dom";

function Card(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.img} width="200" height="200" alt="avatar_img" />
      <p>{props.tel}</p>
      <p>{props.email}</p>
    </div>
  );
}

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>

    <Card
      name="Beyonce"
      img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      tel="+12345678"
      email="b@beyonce.com"
    />

    <Card
      name="Jack Bauer"
      img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7rFQGuC1j4HT-z0y_WD2MCghq8NejK--KtpMiQbSyGQ&s"
      tel="+987456412"
      email="jack@bauer.com"
    />

    <Card
      name="John Doe"
      img="https://www.beaconjournal.com/gcdn/presto/2021/03/15/NABJ/bed373b6-58db-41d0-8c1c-f5dc3643394d-johndoebarrel.jpg?crop=619,349,x0,y132&width=619&height=349&format=pjpg&auto=webp"
      tel="+999915151"
      email="john@doe.com"
    />
  </div>,
  document.getElementById("root")
);
