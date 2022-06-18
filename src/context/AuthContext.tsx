import { createContext, useEffect, useState } from "react";
import { userObserver } from "../helpers/AuthFirebase";
import {useData} from "../helpers/DataBaseFirebase";

export const AuthContext = createContext({});

const AuthContextProvider = ({ children }:any) => {
  const [currentUser, setCurrentUser] = useState();
  const [commentData, setCommentData] = useState();

  useEffect(() => {
    userObserver(setCurrentUser);
  }, []);

  const ChangeCommentData = () => {
    useData(setCommentData);
  }

  useEffect(() => {
    ChangeCommentData()
  }, []);

  console.log(commentData);
  return (
    <AuthContext.Provider value={{ currentUser, commentData, ChangeCommentData }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;