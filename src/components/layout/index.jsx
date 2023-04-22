import React from "react";
import Footer from "./Footer";
import Header from "./Header";

export default function MainLayout(props) {
  const { children, className } = props;
  return (
    <React.Fragment>
      <Header />
      <main className="site" id="page">
        <div className={`main ${className || ""}`}>{children}</div>
      </main>
      <Footer />
    </React.Fragment>
  );
}
