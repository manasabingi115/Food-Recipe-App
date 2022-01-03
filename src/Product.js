import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage
} from "mdb-react-ui-kit";

export default function Product() {
  return (
    <MDBCard style={{ maxWidth: "22rem" }}>
      <MDBCardImage
        src="https://mdbcdn.b-cdn.net/img/new/standard/nature/184.webp"
        position="top"
        alt="Fissure in Sandstone"
      />
      <MDBCardBody>
        <MDBCardTitle>Card title</MDBCardTitle>
        <MDBCardText>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </MDBCardText>
        <button>Button</button>
      </MDBCardBody>
    </MDBCard>
  );
}
