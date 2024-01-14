import { auth, firestore } from "../../firebase";
import firebase from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {
  LOAD_PROFILE,
  LOGIN_REQUEST,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOG_OUT,
} from "../actionType";
export const login = () => async (dispatch) => {
  try {
    dispatch({
      type: LOGIN_REQUEST,
    });

    const provider = new GoogleAuthProvider();
    provider.addScope("https://www.googleapis.com/auth/youtube.force-ssl");
    const res = await signInWithPopup(auth, provider);
    //console.log(res);

    const accessToken = res.user.accessToken;
    const profile = {
      name: res.user.displayName,
      photoURL: res.user.photoURL,
    };
    // console.log(profile);

    sessionStorage.setItem("ytc-access-token", accessToken);
    sessionStorage.setItem("ytc-user", JSON.stringify(profile));

    dispatch({
      type: LOGIN_SUCCESS,
      payload: accessToken,
    });
    dispatch({
      type: LOAD_PROFILE,
      payload: profile,
    });
  } catch (error) {
    console.log(error.message);
    dispatch({ type: LOGIN_FAIL, payload: error.message });
  }
};

export const log_out = () => async (dispath) => {
  await auth.signOut();

  dispath({
    type: LOG_OUT,
  });
  sessionStorage.removeItem("ytc-access-token");
  sessionStorage.removeItem("ytc-user");
};
