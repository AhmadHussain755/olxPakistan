import {
  Container,
  Row,
  Col,
  Navbar,
  NavItem,
  NavLink,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
} from "reactstrap";

import { useLocation, useParams } from "react-router-dom";
import { styles } from "../secondPageComponent/style";
import heartIcon from "../assets/heart.png";
import shareIcon from "../assets/share.png";
import profileIcon from "../assets/iconProfilePicture.7975761176487dc62e25536d9a36a61d.png";
import phoneIcon from "../assets/phone.png";
import blueIcon from "../assets/blueicon.png";
import React, { Component, useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  UncontrolledCarousel,
} from "reactstrap";
import henImage from "../assets/hen.jpg";
import { Link } from "react-router-dom";
import mapImage from "../assets/mapimage.svg";
import nextArrow from "../assets/next.png";
import { doc, getDoc } from "firebase/firestore";
import { useEffect } from "react";
import { db } from "../config/firebase";
import { useState } from "react";
// import zalmiAddImage from "../assets/zalmiadd.png"

const items = [
  {
    src: "https://images.olx.com.pk/thumbnails/220497810-400x300.webp",
    height: 500,
  },
  {
    src: "https://images.olx.com.pk/thumbnails/220497808-400x300.webp",
    height: 500,
  },
  {
    src: "https://images.olx.com.pk/thumbnails/220497814-400x300.webp",
    height: 500,
  },
];

function SecondPage() {
  const [getDetail, setGetDetail] = useState([]);
  useEffect(() => {
    getDetail();
  }, []);
  const location = useLocation();

  const docId = location.search.slice(1);
  const getDetail = async () => {
    const docRef = doc(db, "adds", docId);
    const docSnap = await getDoc(docRef);

    let dataObj = {
      docId: docId,
    };
    // console.log("dataObj", dataObj);
  };

  console.log("params", docId);

  return (
    <Container>
      <Row>
        <Col>
          <Navbar>
            <NavItem style={styles.homeCom}>
              <NavLink href="/components/" style={styles.homeCom}>
                Home /
              </NavLink>
            </NavItem>
            <NavItem style={styles.homeCom}>
              <NavLink href="/components/" style={styles.homeCom}>
                Property for Sale /
              </NavLink>
            </NavItem>
            <NavItem style={styles.homeCom}>
              <NavLink href="/components/" style={styles.homeCom}>
                Land & Plots /
              </NavLink>
            </NavItem>
            <NavItem style={styles.homeCom}>
              <NavLink href="/components/" style={styles.homeCom}>
                Land & Plots in Punjab /
              </NavLink>
            </NavItem>
            <NavItem style={styles.homeCom}>
              <NavLink href="/components/" style={styles.homeCom}>
                Land & Plots in Lahore /
              </NavLink>
            </NavItem>
            <NavItem style={styles.homeCom}>
              <NavLink href="/components/" style={styles.homeCom}>
                Land & Plots in DHA 11 Rahbar
              </NavLink>
            </NavItem>
          </Navbar>
        </Col>
      </Row>
      <Row>
        <Col md="8">
          <div style={{ width: "100%" }}>
            <UncontrolledCarousel items={items} indicators={false} />
          </div>
          <div style={styles.decBox}>
            <h3 style={styles.descriptionFont}>Details</h3>
            <div style={styles.detailDisplay}>
              <div>
                <p style={styles.descriptionFont}>year</p>
                <p style={styles.descriptionFont}>Price</p>
                <p style={styles.descriptionFont}>Model</p>
                <p style={styles.descriptionFont}>Registered in</p>
              </div>
              <div>
                <p style={styles.descriptionFont}>2014</p>
                <p style={styles.descriptionFont}>2,580,000</p>
                <p style={styles.descriptionFont}>Altis Grandi</p>
                <p style={styles.descriptionFont}>Karachi</p>
              </div>
              <div>
                <p style={styles.descriptionFont}>KM's driven</p>
                <p style={styles.descriptionFont}>Make</p>
                <p style={styles.descriptionFont}>Fuel</p>
                <p style={styles.descriptionFont}>Condition</p>
              </div>
              <div>
                <p style={styles.descriptionFont}>106,000</p>
                <p style={styles.descriptionFont}>Toyota</p>
                <p style={styles.descriptionFont}>Petrol</p>
                <p style={styles.descriptionFont}>Used</p>
              </div>
            </div>
            <hr></hr>
            <div>
              <h3 style={styles.descriptionFont}>Description</h3>
              <p style={styles.descriptionFont}>
                i am selling my car in a very good condition and reasonable
                price. no work required in car. All documents are cleared.
                serious buyers can visit and check. For more discussion call on
                provided number oringal paint only one peac tochup
              </p>
            </div>
          </div>
          <div style={styles.addsBox}>
            <h3 style={styles.relatedAdds}>Related Adds</h3>
            <div style={styles.addsDisplay}>
              <div>
                <Link to={"secondPage"}>
                  <Card>
                    <CardImg />
                    <a href="">
                      <img
                        src={henImage}
                        alt="henImage"
                        style={styles.henImage}
                      />
                    </a>
                    <CardBody>
                      <CardText>
                        <a href="" style={styles.henDescription}>
                          <p> Desi Murg</p>
                        </a>
                      </CardText>
                      <CardTitle>
                        <h1 style={styles.henPrice}>RS. 500</h1>
                      </CardTitle>
                      <CardText>
                        <a href="" style={styles.henDescription}>
                          <p>Faisalabad , Ghulam Muhammad Abad, Today</p>
                        </a>
                      </CardText>
                    </CardBody>
                  </Card>
                </Link>
              </div>
              <div>
                <Link to={"secondPage"}>
                  <Card>
                    <CardImg />
                    <a href="">
                      <img
                        src={henImage}
                        alt="henImage"
                        style={styles.henImage}
                      />
                    </a>
                    <CardBody>
                      <CardText>
                        <a href="" style={styles.henDescription}>
                          <p> Desi Murg</p>
                        </a>
                      </CardText>
                      <CardTitle>
                        <h1 style={styles.henPrice}>RS. 500</h1>
                      </CardTitle>
                      <CardText>
                        <a href="" style={styles.henDescription}>
                          <p>Faisalabad , Ghulam Muhammad Abad, Today</p>
                        </a>
                      </CardText>
                    </CardBody>
                  </Card>
                </Link>
              </div>
              <div>
                <Link to={"secondPage"}>
                  <Card>
                    <CardImg />
                    <a href="">
                      <img
                        src={henImage}
                        alt="henImage"
                        style={styles.henImage}
                      />
                    </a>
                    <CardBody>
                      <CardText>
                        <a href="" style={styles.henDescription}>
                          <p> Desi Murg</p>
                        </a>
                      </CardText>
                      <CardTitle>
                        <h1 style={styles.henPrice}>RS. 500</h1>
                      </CardTitle>
                      <CardText>
                        <a href="" style={styles.henDescription}>
                          <p>Faisalabad , Ghulam Muhammad Abad, Today</p>
                        </a>
                      </CardText>
                    </CardBody>
                  </Card>
                </Link>
              </div>
              <div>
                <Link to={"secondPage"}>
                  <Card>
                    <CardImg />
                    <a href="">
                      <img
                        src={henImage}
                        alt="henImage"
                        style={styles.henImage}
                      />
                    </a>
                    <CardBody>
                      <CardText>
                        <a href="" style={styles.henDescription}>
                          <p> Desi Murg</p>
                        </a>
                      </CardText>
                      <CardTitle>
                        <h1 style={styles.henPrice}>RS. 500</h1>
                      </CardTitle>
                      <CardText>
                        <a href="" style={styles.henDescription}>
                          <p>Faisalabad , Ghulam Muhammad Abad, Today</p>
                        </a>
                      </CardText>
                    </CardBody>
                  </Card>
                </Link>
              </div>
              <div style={styles.iconDisplay}>
                <img src={nextArrow} alt="arrowIcon" style={styles.arrowIcon} />
              </div>
            </div>
          </div>
        </Col>
        <Col md="4">
          <div style={styles.firstBox}>
            <div style={styles.headIconsDisplay}>
              <h1>Rs 2,580,000</h1>
              <div>
                <a href="">
                  <img
                    src={shareIcon}
                    alt="shareIcon"
                    style={styles.shareIcon}
                  />
                </a>
                <a href="">
                  <img
                    src={heartIcon}
                    alt="heartIcon"
                    style={styles.heartIcon}
                  />
                </a>
              </div>
            </div>
            <p>106,000 km • 2014</p>
            <p>Toyota corolla</p>
            <div style={styles.dayAddressDisplay}>
              <p>Gulistan-e-Jauhar Block 5, Karachi</p>
              <p>6 days ago</p>
            </div>
          </div>

          <div style={styles.secondBox}>
            <p>Seller Description</p>
            <div style={styles.sellerDesc}>
              <img
                src={profileIcon}
                alt="iconProfile"
                style={styles.iconProfileImage}
              />
              <div style={styles.UsmanName}>
                <h6>Usman</h6>
                <p>Member since Nov 2018</p>
              </div>
            </div>
            <div style={styles.buttonDisplay}>
              <button style={styles.sellerButton}>Chat with Seller</button>
            </div>
            <div style={styles.phoneStarNum}>
              <img src={phoneIcon} alt="phoneIcon" style={styles.phoneIcon} />
              <p style={styles.phoneStarNum}>*** ** ***</p>
              <a href="" style={styles.phoneStarNum}>
                show number
              </a>
            </div>
          </div>
          <div style={styles.thirdBox}>
            <p>Car Inspection</p>
            <div style={styles.realCondition}>
              <img src={blueIcon} alt="blueIcon" style={styles.blueIconImag} />
              <h5 style={styles.findOut}>
                Find out the real condition of this car for just Rs 2500
              </h5>
            </div>
            <div style={styles.inspectionDiv}>
              <button style={styles.inspectionBut}>BOOK INSPECTION</button>
            </div>
          </div>
          <div style={styles.mapBox}>
            <h3>Posted in</h3>
            <p>Lalukhet,Karachi,Sindh</p>
            <div style={styles.backgroundImage}></div>
            <div style={styles.locArrowDis}>
              <div style={styles.seeLocation}>SEE LOCATION</div>
              <img src={nextArrow} alt="arrowIcon" style={styles.arrowIcon} />
            </div>
          </div>
          <div style={styles.reportDisplay}>
            <div style={styles.adId}>AD ID 1045114692</div>
            <div style={styles.reportAdd}>REPORT THIS AD</div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default SecondPage;
