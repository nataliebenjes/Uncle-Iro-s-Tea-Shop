import React from "react";
import Header from "./Header";
import TeaControl from "./TeaControl";

function App(){
  return ( 
    <React.Fragment>
      <Header />
      <TeaControl />
    </React.Fragment>
  );
}

export default App;



//syntactic sugar makes it so we don't have to write "React.createElement"

//React.Fragment creates html that isn't wrapped in a div
