import bg from "./assets/banner-bg.png";
import jacket from "./assets/jacket.png";
import styled from "styled-components";
import members from "./members";
import React from "react";

const Navbar = () => {

};

const Header = styled.h1`
  text-align: center;
  font-family: "Jost", sans-serif;
  font-weight: 300;
  font-style: normal;
  font-size: 3rem;
  color: #115394;
  text-decoration: underline dotted 2px;
`;

const ResponsiveImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  filter: drop-shadow(0 0 20px rgba(0, 0, 0, 0.5));
`;

const BannerContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${bg});
  background-size: cover;
  background-position: middle;
  filter: drop-shadow(0 0 5px rgba(0, 0, 0, 0.5));
  position: relative;
  z-index: 1;
`;

const Banner = () => {
  return (
    <BannerContainer>
      <ResponsiveImage
        src={jacket}
        alt={"Album jacket"}
      />
    </BannerContainer>
  );
};

interface MemberProps {
  member: {
    name: string;
    comment: string;
    icon: string;
  }
};

const Member: React.FC<MemberProps> = ( { member } ) => {
  return (
    <div>
      <h2>{member.name}</h2>
      <p style={{ whiteSpace: 'pre-wrap' }}>{member.comment}</p>
      <img src={member.icon} alt={member.name} width={"100px"}/>
    </div>
  )
}

const Members = () => {
  return (
    <div>
      <Header>Members</Header>
      {members.map((member, index) => (
        <Member key={index} member={member} />
      ))}
    </div>
  )
}

const Page = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: -21px;
  padding: 20px;
  width: 70%;
  background-color: #b8cce0;
  filter: drop-shadow(0 5px 5px rgba(0, 0, 0, 0.5));
`;

const App = () => {
  return (
    <>
      <Banner />
      <Page>
        <Members />
      </Page>
    </>
  )
};

export default App;
