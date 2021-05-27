import React from "react";

import Form from "../src/Components/Form/Form";
import "./App.css";

const handleSubmit = (values) => alert(JSON.stringify(values));
const initialValues = {};

const App = () => (
  <div className="App">
    <Form handleSubmit={handleSubmit} initialValues={initialValues} />
  </div>
);

export default App;
