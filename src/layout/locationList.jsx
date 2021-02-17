import React, { useState, useEffect } from "react";
import locations from "../database/locations.json";
import styled from "styled-components";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

const LocationList = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const link = "https://www.zoyya.com/";
  console.log(locations);
  return (
    <div>
      <Header>
        <Link to="/">
          <HeaderChildLeft>{"ZOYYA LOGO"}</HeaderChildLeft>
        </Link>{" "}
        <HeaderChildRight>
          <a href={link}>
            <HeaderChildRightChild>{"My appointments"}</HeaderChildRightChild>
          </a>
          <a href={link}>
            <HeaderChildRightChild>{"My places"}</HeaderChildRightChild>
          </a>{" "}
          <a href={link}>
            <HeaderChildRightChild>
              {"Back to business app"}
            </HeaderChildRightChild>
          </a>
        </HeaderChildRight>
      </Header>
      <Container>
        {locations.map((location, index) => (
          <Card>
            <img
              style={{ maxWidth: "100%", maxHeight: "100%" }}
              src={location.imageUrl}
            ></img>
            <div>{location.name}</div>
            <div>{location.description}</div>
            <Link to={`/location_detail/${index}`}>
              <p>&rArr;{"SEE LOCATION"}</p>
            </Link>
          </Card>
        ))}
        {!!selectedLocation && (
          <div onClick={() => setSelectedLocation(null)}>{"<- BACK"}</div>
        )}
      </Container>
    </div>
  );
};

export default LocationList;

const Container = styled.div`
display: grid;
 margin:50px 10px 10px 10px;
grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
 
grid-auto-rows: auto;
 
grid-gap: 1rem;
 
}
`;

const Header = styled.div`
  overflow: hidden;
  background-color: #f1f1f1;
  padding: 10px 15px;
`;
const HeaderChildLeft = styled.div`
  float: left;
  color: black;
  text-align: center;
  font-size: 25px;
  font-weight: bold;
  text-decoration: none;
  font-size: 18px;
  line-height: 25px;
  border-radius: 4px;
  :hover {
    background-color: #ddd;
    color: black;
  }
  :active {
    background-color: dodgerblue;
    color: white;
  }
`;
const HeaderChildRight = styled.div`
  float: right;
`;
const HeaderChildRightChild = styled.div`
  float: right;
  color: black;
  text-align: center;
  font-size: 25px;
  font-weight: bold;
  text-decoration: none;
  font-size: 18px;
  line-height: 25px;
  border-radius: 4px;
  margin-left: 50px;
  :hover {
    background-color: #ddd;
    color: black;
  }
  :active {
    background-color: dodgerblue;
    color: white;
  }
`;

const Card = styled.div`
  border: 2px solid #e7e7e7;

  border-radius: 4px;

  padding: 0.5rem;
  :hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.5);
`;
