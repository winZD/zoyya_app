import React, { useState } from "react";
import locations from "../database/locations.json";
import styled from "styled-components";
import { useParams } from "react-router-dom";

import { Link } from "react-router-dom";

const LocationDetail = () => {
  const { id } = useParams();
  const link = "https://www.zoyya.com/";
  const [locationDetail, setLocationDetail] = useState(locations[id]);
  const [shifts, setShifts] = useState(locations[id].workShifts);
  console.log(locations[id]);
  console.log(shifts);

  return (
    <Root>
      <Header>
        {" "}
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
      <Container>
        <CardFlex>
          <CardLeftChild>
            <div style={{ padding: 20 }}>
              <h2>{locationDetail.name}</h2>
              <h5> {"Zadovoljnih korisnika " + locationDetail.id}</h5>
              <h5>{locationDetail.zipCode + " " + locationDetail.city}</h5>
            </div>
            <Button>{"Request your appointment"}</Button>
          </CardLeftChild>

          <CardRightChild>
            <img
              style={{
                height: "282px",
                borderRadius: 10,
              }}
              src={locationDetail.imageUrl}
            ></img>
          </CardRightChild>
        </CardFlex>
        <CardFlex>
          <CardLeftChild2>
            <h2>{"About us"}</h2>
            <span>{locationDetail.description}</span>
            <h2>{"Contact"}</h2>
            <div style={{ display: "flex" }}>
              <span>
                <strong>{"Email: "}</strong>
              </span>
              {locationDetail.email}
            </div>
            <div style={{ display: "flex" }}>
              <span>
                <strong>{"Cell: "}</strong>
              </span>{" "}
              {locationDetail.mobilePhone}
            </div>
            <div style={{ display: "flex" }}>
              <span>
                <strong>{"Website: "}</strong>
              </span>{" "}
              {"No address"}
            </div>
          </CardLeftChild2>
          <CardRightChild2>
            {shifts.map((shift) => (
              <div>
                <h2>{"Working hours"}</h2>
                <div style={{ display: "flex" }}>
                  <div style={{ width: "50%" }}>
                    <p>{shift.openHours[0].dayName}</p>
                    <p>{shift.openHours[1].dayName}</p>
                    <p>{shift.openHours[2].dayName}</p>
                    <p>{shift.openHours[3].dayName}</p>
                    <p>{shift.openHours[4].dayName}</p>
                    <p>{shift.openHours[5].dayName}</p>
                    <p>{shift.openHours[6].dayName}</p>
                  </div>
                  <div style={{ width: "50%" }}>
                    <p>
                      {shift.openHours[0].startTime}
                      {`- ${shift.openHours[0].endTime}`}
                    </p>
                    <p>
                      {shift.openHours[1].startTime}
                      {` - ${shift.openHours[1].endTime}`}
                    </p>
                    <p>
                      {shift.openHours[2].startTime}
                      {`- ${shift.openHours[2].endTime}`}
                    </p>
                    <p>
                      {shift.openHours[3].startTime}
                      {`- ${shift.openHours[3].endTime}`}
                    </p>
                    <p>
                      {shift.openHours[4].startTime}
                      {`- ${shift.openHours[4].endTime}`}
                    </p>
                    <p>
                      {shift.openHours[5].startTime}
                      {`- ${shift.openHours[5].endTime}`}
                    </p>
                    <p>
                      {shift.openHours[6].startTime}
                      {`- ${shift.openHours[6].endTime}`}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </CardRightChild2>
        </CardFlex>
        <h2>{"Our team"}</h2>
        <CardFlex>
          <CardBottomChild>
            {locationDetail.teamMembers.map((team, index) => (
              <div>
                {" "}
                <div style={{ margin: 50 }}>
                  <span>&#128512;{`Slika_${index}`}</span>
                </div>
                <div>
                  <span>{team.nickName}</span>
                </div>
              </div>
            ))}
          </CardBottomChild>
        </CardFlex>
      </Container>
    </Root>
  );
};

export default LocationDetail;
const Root = styled.div``;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px;
`;

const Header = styled.div`
  overflow: hidden;
  background-color: #f1f1f1;
  padding: 10px 15px;
  @media (max-width: 600px) {
    display: flex;
    flex-direction: row;
    position: absolute;
    width: 100%;
  }
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
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
  }
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

const CardFlex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  alignt-items: center;
  text-align: center;
  height: 33%;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

const CardLeftChild = styled.div`
  display: flex;
  flex-direction: column;
  width: 75%;
  background-color: rgb(241, 241, 241);
  height: fit-content;
  border-radius: 4px;
  text-align: left;
  margin-right: 10px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const CardLeftChild2 = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;

  border-radius: 4px;
  text-align: left;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const CardRightChild = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;

  align-items: center;
  border-radius: 4px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const CardRightChild2 = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;

  border-radius: 4px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const CardBottomChild = styled.div`
  display: flex;
  flex-direction: row;
  align-items: left;
  justify-content: left;
  width: 100%;

  border-radius: 4px;
`;
const Button = styled.button`
  background-color: purple;
  border: none;
  color: white;
  height: 45px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 6%;
  margin-left: 10px;
  margin-right: 10px;

  :hover {
    background-color: #350080;
  }
`;
