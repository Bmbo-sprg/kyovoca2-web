import bg from "./assets/banner-bg.png";
import jacket from "./assets/jacket.png";
import niconico from "./assets/icons/niconico.png";
import youtube from "./assets/icons/youtube.png";
import x from "./assets/icons/x.png";
import soundcloud from "./assets/icons/soundcloud.png";
import styled from "styled-components";
import members from "./members";
import React from "react";

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
    niconico?: string;
    youtube?: string;
    x?: string;
    soundcloud?: string;
  }
};

interface LinkIconProps {
  src: string;
  href: string;
}

const MemberContainer = styled.div`
  border-radius: 1rem;
  background-color: #dae2eb;
  display: flex;
  width: 230px;
  height: 90px;
`;

const Icon = styled.img`
  border-radius: 1rem;
  width: 50px;
  height: 50px;
  margin-top: 25px;
  margin-bottom: 25px;
  margin-left: 10px;
  margin-right: 10px;
`;

const NameLink = styled.div`

`;

const Name = styled.h2`
  font-size: 24px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const LinkIcons = styled.div`
  display: flex;
  gap: 10px;
`;

const LinkIcon: React.FC<LinkIconProps> = ( {src, href} ) => {
  return (
    <a href={href}>
      <img src={src} height={"15px"} />
    </a>
  )
}

const Member: React.FC<MemberProps> = ( { member } ) => {
  return (
    <MemberContainer>
      <Icon src={member.icon} alt={member.name} />
      <NameLink>
        <Name>{member.name}</Name>
        <LinkIcons>
          {member.niconico && <LinkIcon src={niconico} href={member.niconico}/>}
          {member.youtube && <LinkIcon src={youtube} href={member.youtube} />}
          {member.x && <LinkIcon src={x} href={member.x} />}
          {member.soundcloud && <LinkIcon src={soundcloud} href={member.soundcloud} />}
        </LinkIcons>
        {/* <p style={{ whiteSpace: 'pre-wrap' }}>{member.comment}</p> */}
      </NameLink>
    </MemberContainer>
  )
}

const MembersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
`;

const Members = () => {
  return (
    <>
      <Header>Members</Header>
      <MembersContainer>
        {members.map((member, index) => (
          <Member key={index} member={member} />
        ))}
      </MembersContainer>
    </>
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
