import React, { createContext, useEffect, useState } from 'react'
// import firebase
import { getAuth, createUserWithEmailAndPassword,GoogleAuthProvider,signInWithPopup,updateProfile, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import app from '../utils/firebase/firebase.config';
export const AuthContext = createContext(null);
const auth = getAuth(app)

const AuthProvider = ({children}) => {

  const [user,setUser] = useState(null);
  const [loading,setLoading]=useState(true);

  // create user using email and password
  const createUserUsingEmail=(email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password)
  }

  // create user using google
  const crateUserUsingGoogle=()=>{
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth,googleProvider)
    .then((result)=>{
      const user = result.user;
      console.log(user)
    })
    .catch((error)=>{
      console.log(error)
    })

  }

  //  user updata profile
const updataUserProfile=(user,name)=>{
  updateProfile(user,{
    displayName:name
  })
  .then((result)=>{
    const user = result.user;
    console.log(user)
  })
  .catch((error)=>{
    console.log(error.mesage)
  })
}
// user sign
  const userSignIn=(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
  }

// user signed chack
useEffect(()=>{
  const unSubscribe = onAuthStateChanged(auth,currentUser=>{
    setUser(currentUser)
  })
  return()=>{
    unSubscribe();
  }
},[])
// user sign out
 const logOut=()=>{
  signOut(auth)
  .then((user)=>{
    console.log("Sign Out successful")
  })
  .catch((error)=>{
    console.log(error.message)
  })
 }
  const userInfo = {
    user,
    createUserUsingEmail,
    crateUserUsingGoogle,
    userSignIn,
    updataUserProfile,
    logOut
  }

  return (
    <div>
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider