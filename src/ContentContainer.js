import React from "react";
import TdList from "./TdList";
import Counter from "./Counter";

const ContentContainer = () => {
  const HOC = (Component) => {
    const WithVisible = ({ visible, ...rest }) => {
      if (!visible) return null;
      return <Component {...rest} />;
    };
    return WithVisible;
  };

  const HOCCounter = HOC(Counter);
  const HOCTdList = HOC(TdList);

  return (
    <div>
      <HOCCounter visible={true} />
      <br />
      <HOCTdList visible={true} />
    </div>
  );
};
export default ContentContainer;
