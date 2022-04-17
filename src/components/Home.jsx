import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthContext";

const Home = () => {
  const [error, setError] = useState();
  const navigate = useNavigate();
  const { user, logOut } = useUserAuth();

  const handleClick = async () => {
    setError("");
    try {
      await logOut();
      navigate("/");
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <>
      <div className="p-4 box mt-3 text-center">
        Hello Welcome
        <br />
        {user && user.email}
      </div>
      <div className="d-grid gap-2">
        <Button variant="primary" onClick={handleClick}>
          Log out
        </Button>
      </div>
    </>
  );
};

export default Home;
