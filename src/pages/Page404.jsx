import React from "react";
import { Link } from "react-router-dom";
import Layout from "../layouts";

const Page404 = () => {
  return (
    <Layout>
      Page Not Found
      <br />
      <Link to="/">Go to home</Link>
    </Layout>
  );
};

export default Page404;
