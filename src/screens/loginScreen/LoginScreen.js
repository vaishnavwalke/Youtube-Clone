import React, { useEffect } from "react";
import "./_loginScreen.scss";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/actions/auth.action";
import { useHistory, useNavigate } from "react-router-dom";
const LoginScreen = () => {
  const dispatch = useDispatch();

  const accessToken = useSelector((state) => state.auth.accessToken);

  const history = useNavigate();
  useEffect(() => {
    if (accessToken) {
      history("/");
    }
  }, [accessToken, history]);

  const handleLogin = () => {
    console.log("Attempting to log in with Google...");
    dispatch(login());
  };

  return (
    <div className="login">
      <div className="login__container">
        <img src="http://pngimg.com/uploads/youtube/youtube_PNG2.png" alt="" />
        <button onClick={handleLogin}>Login with Google </button>
        <p>This project is made with Youtube Data API</p>
      </div>
    </div>
  );
};

export default LoginScreen;
