import React from "react";
import ReactDOM from "react-dom/client";

// const heading1 = React.createElement(
//   "h1",
//   { id: "title", key: "h1" },
//   "Heading 1 from Parcel"
// );
// const heading2 = React.createElement(
//   "h2",
//   { id: "title", key: "h2" },
//   "Heading 2"
// );
// const container = React.createElement("div", { id: "container" }, [
//   heading1,
//   heading2,
// ]);

const Title = () => (
  <h1 id="title" key="h1">
    Namaste React
  </h1>
);
// Component Composition
const HeaderComponent = () => {
  return (
    <div>
      <Title />
      <h1>H1 Tag</h1>
      <h2>h2 tag</h2>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
// Passing a react element inside root
root.render(<HeaderComponent />);
