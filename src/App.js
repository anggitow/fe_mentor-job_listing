import { useEffect, useRef, useState } from "react";
import Filter from "./components/Filter";
import Header from "./components/Header";
import List from "./components/List";
import { useFilterStore } from "./store/storeFilter";

function App() {
  const { filter } = useFilterStore();
  const [height, setHeight] = useState(0);

  const refHeader = useRef(null);
  const refFilter = useRef(null);

  useEffect(() => {
    document.title = "Static Job Listings";

    const heightHeader = refHeader.current.clientHeight;
    const heightFilter = refFilter.current.clientHeight;
    const marginAddition = filter.length === 0 ? 40 : 0;

    setHeight(heightHeader + heightFilter + marginAddition);
  }, [filter]);

  return (
    <div className="font-league-spartan text-desaturated-cyan bg-light-cyan-body text-[15px] min-h-screen">
      <Header reference={refHeader} />
      <Filter reference={refFilter} />
      <List height={height} />
    </div>
  );
}

export default App;
