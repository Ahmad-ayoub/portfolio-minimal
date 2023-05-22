import React from "react";
import MyComponent from "../components/MyComponent";

const Home = () => {
  return (
    <div>
      <h1>Welcome to my website!</h1>
      <MyComponent title="Hello" description="This is my custom component" />
      {/* Other components or HTML elements */}
    </div>
  );
};

export default Home;
