import { useState } from "react";
import { Link } from "react-router-dom";
import { Label, Input, Button, Container, Form, FormGroup } from "reactstrap";
import { styles } from "../signUpComp/styles";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../config/firebase";

function SignUpComponent() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onSubmitHandler = async () => {
    try {
      if (pass !== confirmPassword) {
        alert("password does not match with confirm password");
      }

      // const loginObj = {
      //   name: name,
      //   email: email,
      //   password: pass,
      // };

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        pass
      );


      
      console.log("objSignup", userCredential);

      const userObj = {
        email: email,
        name: name,
        uid: userCredential.user.uid,
      };

      console.log("userObj", userObj);

      const docRef = await addDoc(collection(db, "ahmad"), userObj);

      console.log("docRef", docRef);
    } catch (err) {
      console.log("err while signup", err);
    }
  };

  // const onSubmitHandler = async () => {
  //   try {
  //     const loginObject = {
  //       name: name,
  //       email: email,
  //       pass: pass,
  //     };
  //     const userCredential = await createUserWithEmailAndPassword(
  //       auth,
  //       email,
  //       pass
  //     );
  //     console.log("userCredential", userCredential);
  //     const userObj = {
  //       email: email,
  //       name: name,
  //       uid: userCredential.user.uid,
  //     };

  //     console.log("userObj", userObj);

  //     const docRef = await addDoc(collection(db, "userData"), userObj);

  //     console.log("docRef", docRef);
  //   } catch (err) {}
  // };
  // console.log("loginObject", loginObject);
  return (
    <div>
      <Container style={styles.conDiv}>
        <div style={styles.signInDiv}>
          <div style={styles.heading}>
            <h1>Sign up</h1>
          </div>
          <Form inline>
            <FormGroup>
              <Label for="examplePassword">Name</Label>
              <Input
                id="examplePassword"
                name="password"
                placeholder="Name"
                type="text"
                style={styles.paddingRight}
                onChange={(evt) => setName(evt.target.value)}
              />
            </FormGroup>{" "}
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
            <FormGroup>
              <Label for="examplePassword">Confirm Password</Label>
              <Input
                id="examplePassword"
                name="password"
                placeholder="Confirm Password"
                type="password"
                onChange={(evt) => setConfirmPassword(evt.target.value)}
              />
            </FormGroup>{" "}
            <Button onClick={onSubmitHandler}>Submit</Button>
          </Form>
        </div>
      </Container>
      <div style={styles.alreadyMember}>
        <p>Already a member?</p>
        <Link to={"/LogInForm"}>
          <p>login</p>
        </Link>
      </div>
    </div>
  );
}
export default SignUpComponent;
