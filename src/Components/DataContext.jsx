import React, { useEffect, useState } from "react";
import { LoremIpsum } from "react-lorem-ipsum";

const DataContext = React.createContext({});

const ContextProvider = ({ children }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const sampleContent = {
      title: "Sample Title",
      desc: <LoremIpsum p={1} />,
    };
    console.log("fetching");
    const fetchData = async () => {
      const response = await fetch("http://127.0.0.1:3000/");
      const pictures = await response.json();
      setData({ pics: pictures, content: sampleContent });
    };
    fetchData();
  }, []);

  const { Provider } = DataContext;
  return <Provider value={data}>{children}</Provider>;
};

export { ContextProvider, DataContext };
