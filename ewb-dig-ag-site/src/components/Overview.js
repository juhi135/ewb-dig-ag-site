import React from "react";
import tanzania_photo from "../assets/tanzania_drone_pic3.jpg";
import nlb_photo from "../assets/nlb.jpg";
import dig_ag_classic from "../assets/dig_ag_classic.png";
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

function Overview() {
  return (
    <div>
      <Container>
        <CoverImage className="d-block w-100" src={tanzania_photo} />
        <Overlay>
          <Title> Project Overview </Title>
        </Overlay>
      </Container>
      <OddSection>
        <Row>
          <Column>
            <ContentContainer>
              <PrimaryTitle>The Problem of NLB</PrimaryTitle>
              <TextContainer>
                Globally, an average of 8% of maize crops are lost to diseases
                (Oerke, 2006). In 2015, one-fourth of all estimated yield losses
                from disease were attributed to Northern Leaf Blight (NLB),
                resulting in an estimated $1.9 billion economic loss. NLB
                presents as cigar-shaped lesions on the leaves of a maize crop.
                As the disease grows bottom-up from the maize crop, it reduces
                the crop's yield and spreads to nearby crops. Typically, these
                lesions are visually identified by trained individuals to
                determine where to deploy fungicides to prevent further NLB
                spread, but this identification process is lengthy and subject
                to observer biases.
              </TextContainer>
              <TextContainer>
                <h6>References</h6>
                https://www.genomes2fields.org/docs/publications/tppj-2-1-190006.pdf
                Oerke, E.-C. (2006). Centenary review: Crop losses to pests.
                Journal of Agricultural Science. 144: 31-43.
              </TextContainer>
            </ContentContainer>
          </Column>
          <Column>
            <ContentContainer>
              <Image src={nlb_photo}></Image>
            </ContentContainer>
          </Column>
        </Row>
      </OddSection>
      <EvenSection>
        <Row>
          <Column>
            <ContentContainer>
              <PrimaryTitle> Our Solution </PrimaryTitle>
              <TextContainer>
                The Digital Agriculture Project will design and implement an
                autonomous system consisting of a high-throughput Unmanned
                Aerial Vehicle (UAV) and an Unmanned Ground Vehicle (UGV) that
                will work side-by-side with farmers to assess levels of crop
                disease. With early detection of crop diseases, we can aid
                farmers with disease-resistant breeding, monitoring of crops for
                new outbreaks, and strategic control of fungicide deployment.
                Our goal is to build a non-commercialized, open-source system
                that can employ deep learning algorithms to detect disease
                symptoms before the disease spreads.We believe that once
                implemented, our proposed system will be the first innovative
                system to utilize UGVs in parallel with UAVs to detect plant
                disease, providing an early warning detection system for
                researchers and farmers.
              </TextContainer>

              <TextContainer>
                Initially, the drone or UAV scans the field taking photos which
                are then run through the machine learning algorithm. This will
                indicate areas of possible outbreaks. At each of these
                locations, the rover or UGV will go and take more pictures which
                are then run through a machine learning algorithm as well to
                detect areas that are affected by NLB. Then the data from the
                rover is sent to an interface so that the user can view where in
                the field there is NLB. The user can then proceed to
                appropriately address the threat.
              </TextContainer>

              <TextContainer>
                We believe that once implemented, our proposed system will be
                the first innovative system to utilize UGVs in parallel with
                UAVs to detect plant disease, providing an early warning
                detection system for researchers and farmers.
              </TextContainer>
            </ContentContainer>
          </Column>
          <Column>
            <ContentContainer>
              <Image width={700} height={400} src={dig_ag_classic}></Image>
            </ContentContainer>
          </Column>
        </Row>
      </EvenSection>
    </div>
  );
}

export default Overview;