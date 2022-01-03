import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage
} from "mdb-react-ui-kit";

export default function Product({ data }) {
  return (
    <div>
      <div className="row">
        {data.map((data, index) => (
          <div className="col-md-3" key={index}>
            <MDBCard style={{ maxWidth: "22rem", minHeight: "33rem" }}>
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
                <button className="btn btn-primary">Buy</button>
              </MDBCardBody>
            </MDBCard>
          </div>
        ))}
      </div>
    </div>
  );
}
