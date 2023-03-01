import ItemLanguage from "./ItemLanguage";
import { useDataStore } from "src/store/storeData";
import { useFilterStore } from "src/store/storeFilter";
import { getInitialData } from "src/utils/data";
import { useEffect } from "react";

const List = ({ height }) => {
  const initialData = getInitialData();
  const { filter, setFilter } = useFilterStore();
  const { data, setData } = useDataStore();

  useEffect(() => {
    setData(initialData);
  }, [filter]);

  const handleClick = (e) => {
    const filterClicked = e.target.innerText;
    const newFilter = [];

    if (filter.indexOf(filterClicked) === -1) {
      newFilter.push(...filter, filterClicked);
      setFilter(newFilter);
    }
  };

  return (
    <div className="w-full flex justify-center">
      <div
        className="container-custom inline-block max-w-7xl"
        style={{ marginTop: height + "px" }}
      >
        {data.map((item) => {
          return (
            <div className="relative mb-11 sm:mb-5" key={item.id}>
              <div
                className={`h-fit bg-white shadow-md px-5 pb-5 pt-8 sm:py-5 rounded ${
                  item.featured === true && "border-l-4 border-dark-cyan"
                }`}
              >
                <div className="flex flex-col sm:flex-row gap-2">
                  <img
                    src={`/logo/${item.logo}`}
                    alt={item.company}
                    className="w-12 h-12 sm:w-20 sm:h-20 absolute inset-0 -top-6 left-6 sm:static"
                  />
                  <div className="flex gap-2 flex-col sm:ml-4 w-2/3">
                    <div className="flex gap-2">
                      <p className="font-semibold mr-3">{item.company}</p>
                      {item.new && (
                        <div className="bg-dark-cyan text-white px-2.5 pt-[5px] rounded-full font-semibold -mt-1 text-[13px]">
                          NEW!
                        </div>
                      )}
                      {item.featured && (
                        <div className="bg-darkest-cyan text-white px-2.5 pt-[5px] rounded-full font-semibold -mt-1 text-[13px]">
                          FEATURED
                        </div>
                      )}
                    </div>
                    <p className="text-darkest-cyan font-bold">
                      {item.position}
                    </p>
                    <div>
                      <span className="font-medium">{item.postedAt}</span>
                      <span> • </span>
                      <span className="font-medium">{item.contract}</span>
                      <span> • </span>
                      <span className="font-medium">{item.location}</span>
                    </div>
                  </div>
                  <hr className="my-2 sm:hidden" />
                  <div className="w-full sm:flex sm:justify-end">
                    <div className="flex gap-2 flex-wrap items-start">
                      <ItemLanguage onClick={handleClick}>
                        {item.role}
                      </ItemLanguage>
                      <ItemLanguage onClick={handleClick}>
                        {item.level}
                      </ItemLanguage>
                      {item.languages.map((language, index) => {
                        return (
                          <ItemLanguage key={index} onClick={handleClick}>
                            {language}
                          </ItemLanguage>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default List;
