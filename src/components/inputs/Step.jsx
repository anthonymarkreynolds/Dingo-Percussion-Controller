import { useState } from "react";

const Step = ({ offset }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <div
      onClick={() => setToggle(!toggle)}
      className={`step ${toggle && "selected"} ${offset && "offset"}`}
    ></div>
  );
};

export default Step;
