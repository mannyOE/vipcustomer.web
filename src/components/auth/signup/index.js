import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { SlSocialInstagram, SlSocialTwitter } from "react-icons/sl";
// import { ReactComponent as Logo } from "../../../assests/icons/logo.svg";
import { ReactComponent as Logo } from "../../general/assests/icons/logo.svg";
import Checkbox from "./Checkbox";
import Input from "../Input";
import {
  Container,
  Left,
  LoginText,
  LinkStyles,
  Socials,
  Right,
  GoogleSignUp,
  OrDemarcation,
  Form,
  Names,
  SignUpBtn,
  LogoWrapper,
  NavBarWrapper
} from "./signup.styled";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../../general";
import { AuthStore } from "../../../store/contexts/AuthContext";
import { login_a } from "../../../store/actions/authActions";
import axios from "api/axios";

export default function index() {
  const navigate = useNavigate();
  const { dispatch } = AuthStore();

  async function signUpHandler(e) {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/user/signup", {
        first_name: enteredFirstName,
        last_name: enteredLastName,
        email: enteredEmail,
        password: enteredPassword
      });
      login_a(dispatch, data);
      navigate("/dashboard", { replace: true });
    } catch (err) {
      setErrorMessageIsShown(true);
    }
  }

  //TRYING TO REPLICATE FORMIK FUNCTIONALITY
  const [enteredFirstName, setEnteredFirstName] = useState("");
  const [enteredLastName, setEnteredLastName] = useState("");

  const [enteredEmail, setEnteredEmail] = useState("");
  const [emailIsError, setEmailIsError] = useState(false);
  const [emailIsTouched, setEmailIsTouched] = useState(false);

  const [enteredPassword, setEnteredPassword] = useState("");
  const [passowrdIsError, setPassowrdIsError] = useState(false);
  const [passwordIsTouched, setPasswordIsTouched] = useState(false);

  const [enteredConPassword, setEnteredConPassword] = useState("");
  const [conPassowrdIsError, setConPassowrdIsError] = useState(false);
  const [conPasswordIsTouched, setConPasswordIsTouched] = useState(false);

  const [termsIsChecked, setTermsIsChecked] = useState(false);
  const [errorMessageIsShown, setErrorMessageIsShown] = useState(false);

  const canSubmit =
    !emailIsError &&
    emailIsTouched &&
    !conPassowrdIsError &&
    conPasswordIsTouched &&
    termsIsChecked;

  function emailChangeHanlder(e) {
    const value = e.target.value;
    setEnteredEmail(value);

    if (emailIsTouched || e.type === "blur")
      setEmailIsError(
        !value
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          )
      );
  }

  function passwordChangeHanlder(e) {
    const value = e.target.value;
    setEnteredPassword(value);

    if (passwordIsTouched || e.type === "blur")
      setPassowrdIsError(value.length < 6);
  }

  function conPasswordChangeHanlder(e) {
    const value = e.target.value;
    setEnteredConPassword(value);

    if (conPasswordIsTouched || e.type === "blur")
      setConPassowrdIsError(value !== enteredPassword);
  }

  return (
    <Container>
      <NavBarWrapper>
        <Navbar />
      </NavBarWrapper>
      <Left>
        <div>
          <LogoWrapper onClick={() => navigate("/")}>
            <Logo />
          </LogoWrapper>
          <h3>Let&apos;s help you, identify VIPs</h3>
          <LoginText>
            Already have an account? <LinkStyles to="/login">Log in</LinkStyles>
          </LoginText>
          <Socials>
            <SlSocialInstagram />
            <SlSocialTwitter />
          </Socials>
        </div>
      </Left>
      <Right>
        <div>
          <GoogleSignUp>
            <span>
              <FcGoogle />
            </span>
            Sign up with Google
          </GoogleSignUp>
          <OrDemarcation>
            <span>or</span>
          </OrDemarcation>
          <Form onSubmit={signUpHandler}>
            <Names>
              <Input
                label="First Name"
                id="first-name"
                onChange={(e) => setEnteredFirstName(e.target.value)}
                value={enteredFirstName}
                required
              />
              <Input
                label="Last Name"
                id="last-name"
                onChange={(e) => setEnteredLastName(e.target.value)}
                value={enteredLastName}
                required
              />
            </Names>
            <Input
              label="Email"
              id="email"
              type="email"
              errorMessage="Please enter a valid email address"
              onChange={emailChangeHanlder}
              isError={emailIsError}
              value={enteredEmail}
              onBlur={(e) => {
                if (!emailIsTouched) {
                  setEmailIsTouched(true);
                  emailChangeHanlder(e);
                }
              }}
            />
            <Input
              label="Password"
              id="password"
              type="password"
              errorMessage="password must be more than 6 characters long"
              onChange={passwordChangeHanlder}
              isError={passowrdIsError}
              value={enteredPassword}
              onBlur={(e) => {
                setPasswordIsTouched(true);
                passwordChangeHanlder(e);
              }}
            />
            <Input
              label="Confirm Password"
              id="c-password"
              type="password"
              errorMessage="Passwords do not match"
              onChange={conPasswordChangeHanlder}
              isError={conPassowrdIsError}
              value={enteredConPassword}
              onBlur={(e) => {
                setConPasswordIsTouched(true);
                conPasswordChangeHanlder(e);
              }}
            />
            <div style={{ marginTop: "0.7rem" }}>
              <Checkbox
                id="check"
                onChange={(e) => setTermsIsChecked(e.target.checked)}>
                I agree to the <LinkStyles to='/terms'>Terms of Service</LinkStyles> and{" "}
                <LinkStyles to='/privacy'>Privacy Notice</LinkStyles>
              </Checkbox>
            </div>
            <div style={{ marginTop: "1rem" }}>
              {errorMessageIsShown && (
                <div
                  style={{
                    marginBottom: "0.5rem",
                    color: "#ff414e",
                    fontSize: "1.4rem"
                  }}>
                  An unexpected error occured. Try again another time
                </div>
              )}
              <SignUpBtn type="submit" disabled={!canSubmit}>
                Sign up
              </SignUpBtn>
            </div>
          </Form>
        </div>
      </Right>
    </Container>
  );
}
