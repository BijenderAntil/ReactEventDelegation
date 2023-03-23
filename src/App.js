import * as React from "react";
const data = [1, 2, 3];
export default function App() {
  const [state, setState] = React.useState(data);
  const [count, setCount] = React.useState({});
  const handleMenu = (e) => {};
  const handleBodyClick = (e) => {
    if (e.target.dataset.id == "selectMenu") {
      const value = e.target.value;
      setCount({
        ...count,
        [value]: count[value] ? parseInt(count[value]) + 1 : 1
      });
    } else {
      const value = "outside";
      setCount({
        ...count,
        [value]: count[value] ? parseInt(count[value]) + 1 : 1
      });
    }
  };

  //console.log(count);
  return (
    <div className="App" onClick={handleBodyClick}>
      <select name="selectMenu" onChange={handleMenu} data-id="selectMenu">
        {state.length > 0 &&
          state.map((r) => {
            return (
              <option value={r} key={r} data-id="selectMenu">
                {r}
              </option>
            );
          })}
      </select>
      <h2>Event Delegation Handle in React Js</h2>
      <ul style={{listStyle:"none"}}>
        {Object.values(count).length > 0 &&
          Object.entries(count).map(([r, k]) => {
            console.log(k);
            return (
              <li key={k}>
                Total count of {r} is: {k}
              </li>
            );
          })}
      </ul>
    </div>
  );
}
