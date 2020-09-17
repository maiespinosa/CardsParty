import React from "react";
import Head from "../components/head";
import Navigation from "../components/header";
import Fraq from "../components/faq";
import Cards from "../components/cards";
import Footer from "../components/footer";

export default function index() {
  return (
    <>
      <Head />
      <Navigation />
      <Fraq />
      <Cards />
      <Footer />
    </>
  );
}
