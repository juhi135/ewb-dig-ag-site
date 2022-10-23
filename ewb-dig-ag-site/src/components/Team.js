import React from "react";
import tanzania_photo from "../assets/tanzania_drone_pic3.jpg";

import sunnyImage from "../assets/Sunny-modified.png";
import alexImage from "../assets/Alex-modified.png";
import alishaImage from "../assets/Alisha-modified.png";
import bradyImage from "../assets/Brady-modified.png";
import corbanImage from "../assets/Corban-modified.png";
import crystalImage from "../assets/Crystal-modified.png";
import jasonImage from "../assets/Jason-modified.png";
import jessicaImage from "../assets/Jessica-modified.png";
import juhiImage from "../assets/Juhi-modified.png";
import nathanImage from "../assets/Nathan-modified.png";
import nicholasImage from "../assets/Nicholas-modified.png";
import nithinImage from "../assets/Nithin-modified.png";
import raginiImage from "../assets/Ragini-modified.png";
import unknownImage from "../assets/Unknown-modified.png";

import nathan_article_image from "../assets/Nathan_Research_Drone.png";
import styled from "styled-components";
import Image from "react-bootstrap/Image";
import {
  Row,
  Column,
  Container,
  TextContainer,
  Overlay,
  ContentContainer,
} from "./shared/Div.styles";
import { Title, PrimaryTitle } from "./shared/Title.styles";
import { OddSection, EvenSection } from "./shared/Section.styles";

const CoverImage = styled(Image)`
  height: 400px;
  object-fit: cover;
  object-position: 20% 10%;
`;

function Team() {
  return (
    <div>
      <Container>
        <CoverImage className="d-block w-100" src={tanzania_photo} />
        <Overlay>
          <Title> The Team </Title>
        </Overlay>
      </Container>
      <OddSection>
        <Row>
          <Column>
            <ContentContainer>
              <PrimaryTitle> Background and History </PrimaryTitle>
              <TextContainer>
                Cornell Engineers Without Borders is a Cornell University
                project team affiliated with the National Engineers Without
                Borders Organization. The Digital Agriculture Team, led by
                undergraduate student Jessica Henson, is a part of Cornell's EWB
                chapter.
              </TextContainer>
              <TextContainer>
                The Digital Agriculture team is split into two subteams:
                hardware and software. The hardware team focuses on the
                construction and operation of the rover and drone, and the
                software team focuses on machine learning, this website, and
                applications for interfacing with the hardware.
              </TextContainer>
              <TextContainer>
                The idea to use digital agriculture tools to identify northern
                leaf blight (NLB) disease in maize crop was first explored on
                campus by undergraduate Nathan Zheng ('21), postdoctoral
                researcher Ethan Stewart and Professor Michael Gore in the
                summer of 2019. After a strong research proposal paper, the
                project received grant money. In need of contributors, the
                project was quickly adopted by Engineers Without Borders at
                Cornell and was established as the Digital Agriculture Subteam.
                As semesters have past, older members graduate and new members
                join, the common goal has not changed -- to help farmers
                identifty NLB early on at unprecedented efficiency and
                simplicity
              </TextContainer>
              <TextContainer>
                <h6>References</h6>
                "By Land and Air, Students to Detect Crop Diseases with Tech."
                Cornell Chronicle,
                news.cornell.edu/stories/2019/07/land-and-air-students-detect-crop-diseases-tech.
              </TextContainer>
            </ContentContainer>
          </Column>
          <Column>
            <ContentContainer>
              <Image
                width={700}
                height={450}
                src={nathan_article_image}
              ></Image>
            </ContentContainer>
          </Column>
        </Row>
      </OddSection>
      <EvenSection>
        <Row>
          <Column>
            <ContentContainer>
              <Image width={150} height={150} src={sunnyImage}></Image>
            </ContentContainer>
          </Column>
          <Column>
            <ContentContainer>
              <Image width={150} height={150} src={sunnyImage}></Image>
            </ContentContainer>
          </Column>
        </Row>
      </EvenSection>
    </div>
  );
}

export default Team;
