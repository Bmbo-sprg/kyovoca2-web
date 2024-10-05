import bg from "./assets/banner-bg.png";
import jacket from "./assets/jacket.png";
import niconico from "./assets/icons/niconico.png";
import youtube from "./assets/icons/youtube.png";
import x from "./assets/icons/x.png";
import soundcloud from "./assets/icons/soundcloud.png";
import pixiv from "./assets/icons/pixiv.png";
import fuyune from "./assets/icons/fuyune.jpg";
import styled from "styled-components";
import members from "./members";
import React, { useState } from "react";
import { Helmet } from "react-helmet";

const Header = styled.h1`
  text-align: center;
  font-family: "Jost", sans-serif;
  font-weight: 300;
  font-style: normal;
  font-size: 3rem;
  color: #115394;
  text-decoration: underline dotted 2px;
  text-underline-offset: 0.2em;
`;

const CenterText = styled.p`
  text-align: center;
  margin-top: 40px;
  font-size: 1.2rem;
  line-height: 2;
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

const Introduction = () => {
  return (
    <CenterText>
      サークル、回生、音楽ジャンルの垣根を超えた、<br />
      気鋭京大生ボカロPによるコンピレーションアルバム<br />
      Kyoto University VOCALOID Compilation 2 「Bros.」
    </CenterText>
  )
}

interface MemberProps {
  member: {
    name: string;
    comment?: string;
    icon: string;
    niconico?: string;
    youtube?: string;
    x?: string;
    soundcloud?: string;
    pixiv?: string;
  },
  onHover?: () => void;
  onLeave?: () => void;
  interactive?: boolean;
};

const MemberContainer = styled.div<{interactive?: boolean}>`
  border-radius: 1rem;
  background-color: #dae2eb;
  display: flex;
  width: 230px;
  height: 90px;
  -webkit-transform: scale(1);
  transform: scale(1);
  -webkit-transition: all 0.4s;
  transition: all 0.4s;
  &:hover {
    -webkit-transform: scale(${({ interactive }) => interactive ? 1.1 : 1});
    transform: scale(${({ interactive }) => interactive ? 1.1 : 1});
    -webkit-transition: all 0.4s;
    transition: all 0.4s;
  }
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

interface LinkIconProps {
  src: string;
  href: string;
};

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

const Member: React.FC<MemberProps> = ( { member, onHover, onLeave, interactive } ) => {
  return (
    <MemberContainer interactive={interactive} onMouseEnter={onHover} onMouseLeave={onLeave}>
      <Icon src={member.icon} alt={member.name} />
      <NameLink>
        <Name>{member.name}</Name>
        <LinkIcons>
          {member.niconico && <LinkIcon src={niconico} href={member.niconico}/>}
          {member.youtube && <LinkIcon src={youtube} href={member.youtube} />}
          {member.x && <LinkIcon src={x} href={member.x} />}
          {member.soundcloud && <LinkIcon src={soundcloud} href={member.soundcloud} />}
          {member.pixiv && <LinkIcon src={pixiv} href={member.pixiv} />}
        </LinkIcons>
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

const CommentContainer = styled.div`
  background-color: #f0f0f0;
  border-radius: 1rem;
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
  padding: 10px;
  white-space: pre-wrap;
  width: 50%;
  min-width: 200px;
  font-size: clamp(12px, 1vw, 14px);
`;

const Members = () => {
  const [comment, setComment] = useState("");

  return (
    <>
      <Header>Composers</Header>
      <MembersContainer>
        {members.map((member, index) => (
          <Member
            key={index}
            member={member}
            onHover={() => setComment(member.comment)}
            onLeave={() => setComment("")}
            interactive
          />
        ))}
      </MembersContainer>
      <CommentContainer>{comment}</CommentContainer>
    </>
  )
}

const Artwork = () => {
  return (
    <>
      <Header>Artwork</Header>
      <MembersContainer>
        <Member member={{
          "name": "柚雪ふゆね",
          "icon": fuyune,
          "x": "https://x.com/Snow53902",
          "pixiv": "https://www.pixiv.net/users/42157580",
        }} />
      </MembersContainer>
    </>
  )
}

const Organizer = () => {
  return (
    <>
      <Header>Organizer, Mastering</Header>
      <MembersContainer>
        <Member member={members[15]} />
      </MembersContainer>
    </>
  )
}

const XFD = () => {
  return (
    <>
      <Header>Crossfade</Header>
      <CenterText>Coming soon...</CenterText>
    </>
  )
}

const Lyrics = () => {
  return (
    <>
      <Header>Lyrics</Header>
      <CenterText>
        全15曲<br />
        Coming soon...
      </CenterText>
    </>
  )
}

const Price = () => {
  return (
    <>
      <Header>Price</Header>
      <CenterText>1,500円</CenterText>
    </>
  )
}

const Schedule = () => {
  return (
    <>
      <Header>Schedule</Header>
      <CenterText>
        2024.10.19 (Sat.) クロスフェード公開<br />
        2024.10.27 (Sun.) <a href="https://www.m3net.jp/">M3-2024秋</a>にて頒布<br />
        2024.11.01 (Fri.) 通販開始 (予定)<br />
        2024.11.20 (Wed.) ~ 2024.11.23 (Sat.) <a href="https://www.nf.la/">京都大学11月祭</a>内即売会「<a href="https://comicomm.netlify.app/">Comic Community 06</a>」にて頒布<br />
        2024.11.23 (Sat.) <a href="https://www.ketto.com/tvm/">THE VOC@LOiD M@STER 57</a>にて頒布
      </CenterText>
    </>
  )
}

const Main = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: -21px;
  padding: 20px;
  width: 70%;
  max-width: 1150px;
  background-color: #b8cce0;
  filter: drop-shadow(0 5px 5px rgba(0, 0, 0, 0.5));
`;

const Page = styled.div`
  background-image: url(${bg});
  background-size: cover;
  background-position: middle;
`;

const App = () => {
  return (
    <Page>
      <Helmet>
        <meta property="og:image" content={jacket} />
        <meta property="twitter:image" content={jacket} />
      </Helmet>
      <Banner />
      <Main>
        <Introduction />
        <Members />
        <Artwork />
        <Organizer />
        <XFD />
        <Lyrics />
        <Price />
        <Schedule />
      </Main>
    </Page>
  )
};

export default App;
