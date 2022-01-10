import React, { useState } from "react";
import { useAuth } from "../../../contexts/auth";
import Button from "../../elements/button";
import Input from "../../elements/input";
import Modal from "../../elements/modal";
import Overlay from "../../elements/overlay";
import "./index.sass";

const AuthOverlay = () => {
  const { logIn, user } = useAuth();
  const [email, setEmail] = useState(user);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      logIn(email, password);
    } catch (e) {
      console.log(e);
      setError(e.message);
    }
  };

  return (
    <>
      <Overlay />
      <Modal
        className="auth-modal"
        default={{}}
        style={{
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
        disableDragging
        disableHeader
      >
        <form className="auth-form" onSubmit={handleSubmit}>
          <Input
            type="email"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.currentTarget.value)}
          />

          <Input
            type="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.currentTarget.value)}
          />

          <p className="auth-form__error">
            <small>{error}</small>
          </p>

          <Button type="submit" disabled={!email || !password}>
            Log in
          </Button>
        </form>
      </Modal>
    </>
  );
};

export default AuthOverlay;
