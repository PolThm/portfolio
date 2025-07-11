import React from 'react';
import {Col, Row, Container} from "react-bootstrap";
import Realisation from "./Realisation";
import skinGenius from "../img/skin-genius.jpg";
import demapp from "../img/demapp.jpg";
import lucatelli from "../img/lucatelli.jpg";
import ravize from "../img/ravize.jpg";
import faceArchitect from "../img/face-architect.jpg";
import hairCare from "../img/hair-care.jpg";
import hairColor from "../img/hair-color.jpg";
import shadeFinder from "../img/shade-finder.jpg";
import spotscan from "../img/spotscan.jpg";
import enjoySushi from "../img/enjoy-sushi.jpg";
import octappus from "../img/octappus.jpg";
import xpeer from "../img/xpeer.jpg";
class MesRealisationsPage1 extends React.Component {
  render() {
    const content =
      <div>
        <Row>
        <Col md={6} lg={4}>
            <Realisation
              picture={xpeer}
              description={"Xpeer (Next.js, React Native)"}
              link={'https://xpeer.app'}
            />
          </Col>
          <Col md={6} lg={4}>
            <Realisation
              picture={skinGenius}
              description={"L'Oréal Skin Genius (Vue.js)"}
              link={'https://www.loreal-paris.co.uk/skin-genius'}
            />
          </Col>
          <Col md={6} lg={4}>
            <Realisation
              picture={shadeFinder}
              description={"Lancôme e-Shade Finder (Vue.js)"}
              link={'https://www.lancome-usa.com/e-shade-finder.html'}
            />
          </Col>
          <Col md={6} lg={4}>
            <Realisation
              picture={hairColor}
              description={"Garnier Color Match (Vue.js)"}
              link={'https://www.garnier.ca/en-ca/tools-and-services/color-match'}
            />
          </Col>
          <Col md={6} lg={4}>
            <Realisation
              picture={faceArchitect}
              description={"Armani Face Maestro (Vue.js)"}
              link={'https://www.armanibeauty.fr/face-maestro-armani-beauty/face-maestro.html'}
            />
          </Col>
          <Col md={6} lg={4}>
            <Realisation
              picture={hairCare}
              description={"Kerastase Hair Quiz (Vue.js)"}
              link={'https://www.kerastase-usa.com/hair-quiz.html'}
            />
          </Col>
          <Col md={6} lg={4}>
            <Realisation
              picture={spotscan}
              description={"La Roche Posay Spotscan (Vue.js)"}
              link={'https://www.laroche-posay.com.au/spotscan.html'}
            />
          </Col>
          <Col md={6} lg={4}>
            <Realisation
              picture={octappus}
              description={"Octappus (React.js)"}
              link={'https://octappus.fr'}
            />
          </Col>
          <Col md={6} lg={4}>
            <Realisation
              picture={enjoySushi}
              description={"Enjoy Sushi (React Native)"}
              link={'https://www.youtube.com/watch?v=cv4yXD17giE/'}
            />
          </Col>
          <Col md={6} lg={4}>
            <Realisation
              picture={demapp}
              description={"Demapp (React.js)"}
              link={'https://pro.demapp.fr/'}
            />
          </Col>
          <Col md={6} lg={4}>
            <Realisation
              picture={ravize}
              description={'Ravizé (Webflow)'}
              link={'https://ravize.webflow.io//'}
            />
          </Col>
          <Col md={6} lg={4}>
            <Realisation
              picture={lucatelli}
              description={'Lucatelli (Wix)'}
              link={'https://www.jl-lucatelli-artiste-peintre.com/'}
            />
          </Col>
        </Row>
      </div>;

    return(
      <Container fluid>
        {content}
      </Container>
    )
  }
}

export default MesRealisationsPage1;
