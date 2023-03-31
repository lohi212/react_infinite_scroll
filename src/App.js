import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { getNumbers } from "./utils";

function App() {
  const [numbers, setNumbers] = useState([]);
  const [isLoding, setIsLoading] = useState(false);

  useEffect(() => {
    getNumbersOnScroll();
  }, []);

  const getNumbersOnScroll = () => {
    setIsLoading(true);
    setTimeout(() => {
      const newNumbers = getNumbers(1, 10);
      setNumbers([...numbers, ...newNumbers]);
      setIsLoading(false);
    }, 2000);
  };

  const handleScroll = (e) => {
    const { scrollHeight, scrollTop, clientHeight } = e.target;
    console.log(
      {
        scrollHeight,
        scrollTop,
        clientHeight,
      },
      scrollHeight - scrollTop
    );
    // when scrolled to bottom, get numbers
    if (scrollHeight - scrollTop === clientHeight) {
      getNumbersOnScroll();
    }
    // when scrolled to 90%
    // if (0.9 * (scrollHeight - scrollTop) === clientHeight) {
    //   getNumbersOnScroll();
    // }
  };

  return (
    <div className="root-container" onScroll={handleScroll}>
      {numbers.map((ele) => (
        <div key={ele} className="item">
          Item {ele}
        </div>
      ))}
      {isLoding && <>Loading...</>}
    </div>
  );
}

export default App;
