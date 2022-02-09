import { Container, Row, Col } from "reactstrap";
import { styles } from "./style";

// import OlxPhoneImage from "../../assets/olx phone.webp";
import appIcons from "../../assets/iconAppStoreEN_noinline.a731d99c8218d6faa0e83a6d038d08e8.svg";

function Footer() {
  return (
    <div style={styles.olxPhoneDiv}>
      {/* <Container>
        <Row>
          <Col md="8" style={styles.displayOfOlxImage}>
            <div>
              <img src={OlxPhoneImage} />
            </div>
            <div>
              <h1>TRY THE OLX APP</h1>
              <h6 style={styles.buySell}>
                Buy, sell and find just about anything using the app on your
                mobile.
              </h6>
            </div>
            <div style={styles.lineDivider}></div>
          </Col>
          <Col md="4" style={styles.iconImagesDiv}>
            <h6>GET YOUR APP TODAY</h6>
            <div>
              <a href="https://apps.apple.com/pk/app/olx-pakistan/id1551315538">
                <img src={appIcons} style={styles.appIcons} />
              </a>
              <a href="https://apps.apple.com/pk/app/olx-pakistan/id1551315538">
                <img src={appIcons} style={styles.appIcons} />
              </a>
              <a href="https://apps.apple.com/pk/app/olx-pakistan/id1551315538">
                <img src={appIcons} style={styles.appIcons} />
              </a>
            </div>
          </Col>
        </Row> */}
        <Container style={styles.footerDiv}>
          <Row>
            <Col>
              <div>
                <ul>
                  <h6>POPULAR CATEGORIES</h6>
                  <li style={styles.contents}>
                    <a
                      href="https://www.olx.com.pk/cars_c84"
                      style={styles.contents}
                    >
                      Cars
                    </a>
                  </li>
                  <li style={styles.contents}>
                    <a
                      href="https://www.olx.com.pk/apartments-flats_c1723F"
                      style={styles.contents}
                    >
                      Flat for rent
                    </a>
                  </li>
                  <li style={styles.contents}>
                    <a href="" style={styles.contents}>
                      Mobile Phones
                    </a>
                  </li>
                  <li style={styles.contents}>
                    <a href="" style={styles.contents}>
                      Job
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col>
              <div>
                <ul>
                  <h6>TRENDING SEARCHES</h6>
                  <li style={styles.contents}>
                    <a href="" style={styles.contents}>
                      bikes
                    </a>
                  </li>
                  <li style={styles.contents}>
                    <a href="" style={styles.contents}>
                      watches
                    </a>
                  </li>
                  <li style={styles.contents}>
                    <a href="" style={styles.contents}>
                      books
                    </a>
                  </li>
                  <li style={styles.contents}>
                    <a href="" style={styles.contents}>
                      dogs
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col>
              <div>
                <ul>
                  <h6>ABOUT US</h6>
                  <li style={styles.contents}>
                    <a href="" style={styles.contents}>
                      {" "}
                      About EMPG{" "}
                    </a>
                  </li>
                  <li style={styles.contents}>
                    <a href="" style={styles.contents}>
                      {" "}
                      OLX Blog
                    </a>
                  </li>
                  <li style={styles.contents}>
                    <a href="" style={styles.contents}>
                      Contact us
                    </a>
                  </li>
                  <li style={styles.contents}>
                    <a href="" style={styles.contents}>
                      {" "}
                      OLX for Businesses
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col>
              <div>
                <ul>
                  <h6>OLX</h6>
                  <li style={styles.contents}>
                    <a href="" style={styles.contents}>
                      {" "}
                      Help{" "}
                    </a>
                  </li>
                  <li style={styles.contents}>
                    <a href="" style={styles.contents}>
                      {" "}
                      Sitemap
                    </a>
                  </li>
                  <li style={styles.contents}>
                    <a href="" style={styles.contents}>
                      Terms of use
                    </a>
                  </li>
                  <li style={styles.contents}>
                    <a href="" style={styles.contents}>
                      {" "}
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col>
              <h6>FOLLOW US</h6>

              <div>
                <a href="https://apps.apple.com/pk/app/olx-pakistan/id1551315538">
                  <img src={appIcons} style={styles.footerIconList} />
                </a>
                <a href="https://apps.apple.com/pk/app/olx-pakistan/id1551315538">
                  <img src={appIcons} style={styles.footerIconList} />
                </a>
                <a href="https://apps.apple.com/pk/app/olx-pakistan/id1551315538">
                  <img src={appIcons} style={styles.footerIconList} />
                </a>
              </div>
            </Col>
          </Row>
      </Container>
    </div>
  );
}
export default Footer;
