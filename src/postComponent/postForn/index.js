import imageIcon from "../../assets/imageIcon.svg";
import { Label, Input, Button, Container } from "reactstrap";
import { styles } from "./style";
import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../config/firebase";

function PostForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");
  const [file, setFile] = useState("");
  const onSubmitHandler = async () => {
    try {
      const userObject = {
        title: title,
        description: description,
        type: type,
        price: price,
        file: file,
      };
      const docRef = await addDoc(collection(db, "adds"), userObject);
      console.log("docRef", docRef);
    } catch (err) {
      console.log("err", err);
    }
  };
  const typeFiles = (buttonTypes) => {
    setType(buttonTypes);
  };

  return (
    <Container>
      <div style={styles.postHeading}>
        <h5 style={styles.postHeading}>POST YOUR AD</h5>
      </div>

      <form>
        <div>
          <div style={styles.detailBox}>
            <h1 style={styles.detailsComp}>INCLUDE SOME DETAILS</h1>
            <div>
              <div>
                <label>Ad Title</label>
              </div>
              <div>
                <input
                  type={"text"}
                  style={styles.titleInput}
                  onChange={(evt) => setTitle(evt.target.value)}
                />
              </div>
              <p style={styles.keyFeatures}>
                Mention the key features of your item (e.g. brand, model, age,
                type)
              </p>
            </div>
            <div>
              <div>
                <label>Description</label>
              </div>
              <div>
                <input
                  type={"text"}
                  style={styles.desInput}
                  onChange={(evt) => setDescription(evt.target.value)}
                />
              </div>
              <p style={styles.keyFeatures}>
                Description should contain at least 10 alphanumeric characters.
                Please edit the field
              </p>
            </div>

            <div>
              <label>Type</label>
            </div>
            <div>
              <Button
                color="primary"
                outline
                onClick={() => typeFiles("mobiles")}
              >
                Mobiles
              </Button>{" "}
              <Button outline onClick={() => typeFiles("tablets")}>
                Tablets
              </Button>{" "}
              <Button color="success" outline onClick={() => typeFiles("cars")}>
                Cars
              </Button>{" "}
              <Button
                color="info"
                outline
                onClick={() => typeFiles("motorcycles")}
              >
                Motorcycles
              </Button>{" "}
              <Button
                color="warning"
                outline
                onClick={() => typeFiles("houses")}
              >
                Houses
              </Button>{" "}
              <Button color="danger" outline onClick={() => typeFiles("bats")}>
                Bats
              </Button>
            </div>
          </div>
        </div>
        <div style={styles.priceBox}>
          <h1 style={styles.priceHeading}>SET A PRICE</h1>
          <label>Price</label>
          <div>
            <input
              type={"number"}
              placeholder="Rs."
              style={styles.titleInput}
              onChange={(evt) => setPrice(evt.target.value)}
            />
          </div>
        </div>
        <div style={styles.priceBox}>
          <h1 style={styles.priceHeading}>UPLOAD UP TO 20 PHOTOS</h1>
          <div>
            <Label for="exampleFile" sm={2}>
              File
            </Label>
            <Input
              id="exampleFile"
              name="file"
              type="file"
              style={styles.titleInput}
              onChange={(evt) => setFile(evt.target.value)}
            />
          </div>
        </div>
      </form>
      <div style={styles.butDiv}>
        <Button style={styles.submitButton} onClick={onSubmitHandler}>
          Submit
        </Button>
      </div>
    </Container>
  );
}
export default PostForm;
