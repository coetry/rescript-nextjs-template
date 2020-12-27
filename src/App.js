

import * as React from "react";
import * as MainLayout from "./layouts/MainLayout.js";
import * as Router from "next/router";

function $$default(props) {
  var router = Router.useRouter();
  var content = React.createElement(props.Component, props.pageProps);
  var match = router.route;
  if (match === "/examples") {
    return React.createElement(MainLayout.make, {
                children: null
              }, React.createElement("h1", {
                    className: "font-bold"
                  }, "Examples Section"), React.createElement("div", undefined, content));
  } else {
    return React.createElement(MainLayout.make, {
                children: content
              });
  }
}

export {
  $$default ,
  $$default as default,
  
}
/* react Not a pure module */
