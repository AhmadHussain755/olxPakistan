import { useState } from "react";
import { Link } from "react-router-dom";
import { Label, Input, Button, Container, Form, FormGroup } from "reactstrap";
import { styles } from "../logInComponent/style";
import { auth, db } from "../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { collection, query, where, getDocs } from "firebase/firestore";

function LogInForm() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const onSubmitHandler = async () => {
    try {
      // authenticate with firebase

      const res = await signInWithEmailAndPassword(auth, email, pass);

      console.log("resSignin", res);

      const q = query(
        collection(db, "users"),
        where("uid", "==", res.user.uid)
      );

      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
      });
    } catch (err) {
      console.log("err wile ", err);
    }
  };

  return (
    <div>
      <Container style={styles.conDiv}>
        <div style={styles.signInDiv}>
          <div style={styles.heading}>
            <h1>Sign in</h1>
          </div>
          <Form inline>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input
                id="exampleEmail"
                name="email"
                placeholder="Email"
                type="email"
                onChange={(evt) => setEmail(evt.target.value)}
              />
            </FormGroup>{" "}
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                id="examplePassword"
                name="password"
                placeholder="Password"
                type="password"
                onChange={(evt) => setPass(evt.target.value)}
              />
            </FormGroup>{" "}
            <Button onClick={onSubmitHandler}>Submit</Button>
          </Form>
        </div>
        {/* <div style={styles.memberRegistrationDis}>
        <p>Not a member?</p>
        <Link to={"/SignUpComponent"}>
          <p>Registered</p>
        </Link>
      </div> */}
      </Container>
      <div style={styles.memberRegistrationDis}>
        <p>Not a member?</p>
        <Link to={"/SignUpComponent"}>
          <p>Register</p>
        </Link>
      </div>
    </div>
  );
}
export default LogInForm;
