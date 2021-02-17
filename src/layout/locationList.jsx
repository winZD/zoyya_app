import React, { useState, useEffect } from "react";
import locations from "../database/locations.json";
import styled from "styled-components";
import { Link } from "react-router-dom";

const LocationList = () => {
  
  const link = "https://www.zoyya.com/";
  console.log(locations);
  return (
    <div>
      <Header>
        <Link to="/">
          <HeaderChildLeft>{"ZOYYA LOGO"}</HeaderChildLeft>
        </Link>{" "}
        <HeaderChildRight>
          <HeaderChildRightChild>
            <div style={{ display: "flex" }}>
              <img
                src="avatar.png"
                alt=" Ivana Zuber"
                class="avatar"
                style={{
                  fontSize: 10,
                  fontWeight: "normal",
                  verticalAlign: "middle",
                  borderRadius: "50%",
                }}
              ></img>
            </div>
          </HeaderChildRightChild>
          <a href={link} target={"_blank"}>
            <HeaderChildRightChild>{"My appointments"}</HeaderChildRightChild>
          </a>
          <a href={link} target={"_blank"}>
            <HeaderChildRightChild>{"My places"}</HeaderChildRightChild>
          </a>{" "}
          <a href={link} target={"_blank"}>
            <HeaderChildRightChild>
              {"Back to business app"}
            </HeaderChildRightChild>
          </a>
        </HeaderChildRight>
      </Header>
      <h3 style={{ marginLeft: "10px" }}>{"Featured partners"}</h3>
      <Container>
        {locations.map((location, index) => (
          <Card>
            <img
              key={index}
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                borderRadius: "10px",
              }}
              src={location.imageUrl}
            ></img>
            <div>{location.name}</div>
            <div>{location.description}</div>
            <Link to={`/location_detail/${index}`}>
              <p>&rArr;{"SEE LOCATION"}</p>
            </Link>
          </Card>
        ))}
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
 
  border-radius:10px;

  padding: 0.5rem;
  :hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.5);
`;
