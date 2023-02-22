import { useEffect, useRef, useState } from "react";
import Filter from "./components/Filter";
import Header from "./components/Header";
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
      <div className="w-full flex justify-center">
        <div
          className="container-custom inline-block max-w-7xl"
          style={{ marginTop: height + "px" }}
        >
          <div className="relative">
            <div className="h-24 bg-white shadow-md px-5 pb-5 pt-8 border-l-4 border-dark-cyan rounded">
              <div className="w-10 h-10 bg-black absolute inset-0 -top-[20%] left-[10%]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
