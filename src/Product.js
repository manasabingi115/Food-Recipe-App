import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage
} from "mdb-react-ui-kit";

export default function Product({ data }) {
  console.log(data[0].recipe.label);

  return (
    <div>
      <ul>
        {data.map((data, index) => (
          <li key={index}>
            <MDBCard style={{ maxWidth: "22rem" }}>
              <MDBCardImage
                src={data.recipe.image}
                position="top"
                alt="Fissure in Sandstone"
              />
              <MDBCardBody>
                <MDBCardTitle>
                  <strong>{data.recipe.label}</strong>
                </MDBCardTitle>
                <MDBCardText>
                  Total Amount of Calories: {Math.round(data.recipe.calories)}
                </MDBCardText>
                <button>Buy</button>
              </MDBCardBody>
            </MDBCard>
          </li>
        ))}
      </ul>
    </div>
  );
}
