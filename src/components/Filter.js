import remove from "src/assets/icon-remove.svg";
import { useFilterStore } from "src/store/storeFilter";

const Filter = ({ reference }) => {
  const { filter, setFilter } = useFilterStore();

  const handleClickClear = () => {
    setFilter([]);
  };

  const handleClickRemove = (e) => {
    const valueClicked = e.currentTarget.id;
    // const index = filter.indexOf(valueClicked);

    let newFilter = filter.filter(function (item) {
      return item !== valueClicked;
    });

    setFilter(newFilter);
  };

  return (
    <div
      className={`w-full fixed top-[115px] z-20 ${
        filter.length === 0 && "hidden"
      }`}
      ref={reference}
    >
      <div className="container-custom max-w-7xl">
        <div className="w-full bg-white shadow-md rounded px-4 py-5 sm:px-8 md:px-10 flex font-semibold">
          <div className="w-4/5 flex flex-wrap gap-2">
            {filter.map((value, index) => {
              return (
                <div className="leading-tight flex" key={index}>
                  <span className="bg-light-cyan px-2 py-1 rounded-l">
                    {value}
                  </span>
                  <div
                    className="bg-dark-cyan hover:bg-darkest-cyan px-2 items-center flex rounded-r cursor-pointer transition-all duration-200"
                    id={value}
                    onClick={handleClickRemove}
                  >
                    <img src={remove} alt="remove" />
                  </div>
                </div>
              );
            })}
          </div>
          <p
            className="group flex items-center leading-3 justify-end transition-all duration-300 ease-in-out w-1/5 text-end cursor-pointer"
            onClick={handleClickClear}
          >
            <span className="bg-left-bottom bg-gradient-to-r from-desaturated-cyan to-desaturated-cyan bg-[length:0%_1px] bg-no-repeat group-hover:bg-[length:100%_1px] transition-all duration-500 ease-out">
              Clear
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Filter;
