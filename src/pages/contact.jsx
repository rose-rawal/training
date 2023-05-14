import React, { useContext } from "react";
import Layout from "../layouts";
import { UserContext } from "../contexts/usercontext";

const Contact = () => {
  const userContext = useContext(UserContext)
  console.log(userContext, 'userContext')
  return <Layout>Contact</Layout>;
};

export default Contact;
