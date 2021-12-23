import { getAuth, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { facebook, google } from "../../firebase/firebase";
import { types } from "../types/types";

// actualizar estado de user con especificacion de id de firease
export const login = (uid, email) => {
    return {
      type: types.login,
      payload: {
        uid, 
        email,
        logged: true,
      },
    };
  };
  export const logout = ()=>{
 return{
     type: types.logout,
     payload:{
         logged:false,
     }
 }
  }

export const logoutAsyc = () => {
  return (dispatch) => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        dispatch(logout());
      })
      .catch((err) => console.log(err.message));
  };
};
  export const loginAsyc = (email, password) => {
  return (dispatch)=>{
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({user}) => {
        dispatch(
            login(user.uid, user.email)
          );

        // ...
      })
      .catch((error) => console.log(error));
    }
  };



export const loginGoogle = () => {
    return (dispatch) => {
      const auth = getAuth();
      signInWithPopup(auth, google)
        .then(({ user }) => {
              dispatch(
            login(user.uid, user.email)
          );
        })
        .catch((error) => console.log(error));
    };
  };
  export const loginFacebook = () => {
    return (dispatch) => {
      const auth = getAuth();
      signInWithPopup(auth, facebook)
        .then(({ user }) => {
              dispatch(
            login(user.uid,  user.email)
          );
        })
        .catch((error) => console.log(error));
    };
  };