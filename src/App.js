import React from "react";
import Accordion from "./Component/Accordion";
import Search from "./Component/Search";
import { useState } from "react";
import Dropdown from "./Component/Dropdown";
// import Dropdown from 'react-dropdown';
import "react-dropdown/style.css";
import Translate from "./Component/Translate";

const items = [
  {
    title: "What is React?",
    content: "Prakash told me React is a front end javascript framework",
  },
  {
    title: "Why use React?",
    content: "React is a favorite JS library among students at UPSHOT",
  },
  {
    title: "How do you use React?",
    content: "any one can use React by creating components",
  },
];

const options = [
  {
    label: "The Color Red",
    value: "red",
  },
  {
    label: "The Color Green",
    value: "green",
  },
  {
    label: "A Shade of Blue",
    value: "blue",
  },
];
// export default () => {
//   const [selected, setSelected] = useState(options[0]);
//   return (
//     // <div>UPSHOT Technologies</div>
//     <div>
//       {" "}
//       <br />
//       {/* <Search /> */}
//       <br />
//       <Translate />
//       <br />
//       <Dropdown
//         selected={selected}
//         onSelectedChange={setSelected}
//         options={options}
//       />
//     </div>
//   );
// };
export default () => {
  return (
    //<div>UPSHOT Technologies</div>
    <div>
      <Translate/>
      <Search />
      <Accordion items={items} />
    </div>
  );
};
