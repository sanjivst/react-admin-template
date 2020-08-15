import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { CContainer } from "@coreui/react";

// routes config
import routes from "../routes";

const TheContent = () => {
  return (
    <main className="c-main">
      <CContainer fluid>
        <Redirect from="/" to="/dashboard" />
      </CContainer>
    </main>
  );
};

export default React.memo(TheContent);
