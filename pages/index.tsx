import Head from "next/head";

import Code from "../components/Code";
import Documentation from "../components/Documentation";
import Footer from "../components/Footer";
import Header from "../components/Header";


export default function Docs() {
  return (
    <div className="bg-background">
      <Head>
        <title>Conso - A programming language by Converso Empire</title>
        <meta property="og:title" content="Conso - A programming language by Converso Empire" key="title" />
        <meta property="og:type" content="website" key="type" />
        <meta property="og:url" content="https://conso.js.org" key="url" />
        <meta property="og:description" content="Conso is dynamically typed programming language, written in Typescript. Created by Converso Empire." key="description" />
        <meta name="description" content="Conso is dynamically typed programming language, written in Typescript. Created by Converso Empire." />
        <meta property="og:site_name" content="Conso Documentation" key="siteName" />
      </Head>
      <Header />
      <Code />
      <Documentation />
      <Footer />
    </div>
  );
}

