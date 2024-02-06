import React from "react";
import Weather from "./Weather";
import classes from "./Weather.module.css";

const App = () => {
  return (
    <div>
      <h1 className={classes.heade}>Weather Forecast App</h1>
      <Weather />
    </div>
  );
};

export default App;