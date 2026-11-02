import React, {Component} from 'react';
import ScrollableAnchor from "react-scrollable-anchor";
import ScrollAnimation from "react-animate-on-scroll";
import polProfil from "../img/pol-profil-bw.jpg"
import {Button, Image} from "react-bootstrap";
import ModalContact from "./ModalContact";


class APropos extends Component {
  render() {
    return (
      <ScrollableAnchor id={"a-propos"}>
        <div className={"a-propos"}>
          <div>
            <div className={"a-propos-content"}>
              <div className={"texts-a-propos"}>
                <ScrollAnimation animateIn={"fadeIn"} animateOnce={true}>
                  <h2 className={"a-propos-title-notForPhone"}>About</h2>
                </ScrollAnimation>
                <ScrollAnimation animateIn={"fadeIn"} animateOnce={true} delay={100}>
                  <p className={"text-a-propos"}>
                    I work across the full product lifecycle, from technical design and architecture through implementation, testing, deployment and continuous improvement. I can quickly get up to speed in an existing codebase, take ownership of a feature, and work with a team to bring it safely into production.
                    <br/><br/>
                    I also help teams make practical use of AI: from prototyping ideas and automating repetitive work to integrating intelligent features into products. I use modern LLMs and development tools to move faster without compromising on sound architecture, quality or maintainability.
                    <br/><br/>
                    My experience spans React, React Native, Next.js, TypeScript and Node.js, as well as Vue.js and Angular. I care about clean architecture, reliable testing, performance and a great developer experience, and I make pragmatic technical decisions guided by product needs.
                    <br/><br/>
                    I enjoy solving complex challenges, modernizing applications and collaborating with engineering, design and product teams to build software that can evolve with confidence. I’m comfortable taking initiative independently while keeping communication clear and collaborative.
                  </p>
                </ScrollAnimation>
              </div>
              <div className={"picture-a-propos"}>
                <ScrollAnimation animateIn={"fadeIn"} animateOnce={true}>
                  <h2 className={"a-propos-title-forPhone"}>ABOUT</h2>
                </ScrollAnimation>
                <Image className={"picture-a-propos"} src={polProfil} roundedCircle/>
              </div>
            </div>
            <div className="fas-links fas-links-not-for-phone">
              <div>
                <a href="https://www.linkedin.com/in/pol-thomas/" target="_blank" rel="noopener noreferrer">
                  <ScrollAnimation animateIn={"fadeInUp"} animateOnce={true} duration={3} delay={50}>
                    <i className="fab fa-linkedin"/>
                  </ScrollAnimation>
                </a>
              </div>
              <div>
                <a href="https://github.com/PolThm" target="_blank" rel="noopener noreferrer">
                  <ScrollAnimation animateIn={"fadeInUp"} animateOnce={true} duration={3} delay={550}>
                    <i className="fab fa-github"/>
                  </ScrollAnimation>
                </a>
              </div>
              <div role='button' onClick={this.props.openCvPdf}>
                <ScrollAnimation animateIn={"fadeInUp"} animateOnce={true} duration={3} delay={1050}>
                  <i className="fas fa-address-card"/>
                </ScrollAnimation>
              </div>
            </div>
            <div className="fas-links fas-links-for-phone">
              <div>
                <a href="https://www.linkedin.com/in/pol-thomas/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"/></a>
              </div>
              <div>
                <a href="https://github.com/PolThm" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"/></a>
              </div>
              <div role='button' onClick={this.props.openCvPdf}><i className="fas fa-address-card"/></div>
            </div>
          </div>

          <section className={'contactSection'}>
            <ScrollAnimation animateIn={"fadeIn"} animateOnce={true}>
              <Button variant="secondary" className="buttonContact buttonContactNotForPhone" onClick={this.props.openModalContact}>CONTACT</Button>
            </ScrollAnimation>
            <Button variant="secondary" className="buttonContact buttonContactForPhone" onClick={this.props.openModalContact}>CONTACT</Button>


            <ModalContact
              showModalContact={this.props.showModalContact}
              closeModalContact={this.props.closeModalContact}
            />
          </section>
        </div>
      </ScrollableAnchor>
    );
  }
}

export default APropos;
