import {
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Container,
  Row,
  Col,
} from "reactstrap";
import { collection, getDocs } from "firebase/firestore";
import { useNavigate, createSearchParams } from "react-router-dom";

import { db } from "../../config/firebase";
import dairyMilk from "../../assets/dairymilk.jpg";
import henImage from "../../assets/hen.jpg";
import { styles } from "../../componets/adds/style";
import watchImage from "../../assets/watch.jpg";
import MTJimage from "../../assets/MTJ.png";
import { Link } from "react-router-dom";
import OlxPhoneImage from "../../assets/olx phone.webp";
import appIcons from "../../assets/iconAppStoreEN_noinline.a731d99c8218d6faa0e83a6d038d08e8.svg";
import { useEffect } from "react";
import { useState } from "react";
function Adds() {
  const [getData, setGetData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    getAddsData();
  }, []);

  const getAddsData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "adds"));

      let dataArr = [];

      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        let dataObj = {
          docId: doc.id,

          ...doc.data(),
        };

        console.log("dataObj", dataObj);

        dataArr.push(dataObj);
      });

      console.log("dataArr", dataArr);

      setGetData(dataArr);
    } catch (Err) {
      console.log("err", Err);
    }
  };

  const navigateToDetails = (evt, docId) => {
    evt.preventDefault();
    console.log("docIdfasd", docId);

    navigate({
      pathname: "secondPage",
      search: docId,
    });
  };

  return (
    <div>
      <div style={styles.backgroundImage}></div>
      <div style={styles.dairyMilkImage}>
        <img src={dairyMilk} alt="dairyMilk" style={styles.daiMilkImageWidth} />
      </div>
      <div>
        <h6 style={styles.freshRec}>Fresh recommendations</h6>
      </div>
      <Container>
        <Row>
          {getData.map((item, i) => {
            console.log("itemObj", item);

            return (
              <Col sm="12" md="3">
                <Card onClick={(evt) => navigateToDetails(evt, item.docId)}>
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
                        <p>{item.title}</p>
                      </a>
                    </CardText>
                    <CardTitle>
                      <h1>RS. {item.price}</h1>
                    </CardTitle>
                    <CardText>
                      <a href="" style={styles.henDescription}>
                        <p>{item.description}</p>
                      </a>
                    </CardText>
                  </CardBody>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>

      <div style={styles.loadButton}>
        <button style={styles.moreButton}>Load More</button>
      </div>
      <div style={styles.MtjImage}>
        <img src={MTJimage} alt="mtj" style={styles.MTJImageWidth} />
      </div>

      <Container>
        <Row>
          <Col md="4" sm="12" style={styles.displayOfOlxImage}>
            <div>
              <img src={OlxPhoneImage} />
            </div>
          </Col>
          <Col md="4" sm="12">
            <div>
              <h1>TRY THE OLX APP</h1>
              <h6 style={styles.buySell}>
                Buy, sell and find just about anything using the app on your
                mobile.
              </h6>
            </div>
            <div style={styles.lineDivider}></div>
          </Col>
          <Col md="4" sm="12" style={styles.iconImagesDiv}>
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
        </Row>
      </Container>
    </div>
  );
}
export default Adds;
