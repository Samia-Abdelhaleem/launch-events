import React, { Component } from "react";
import Layout from "../components/layout/layout";
import "../styles/global.css";
export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
