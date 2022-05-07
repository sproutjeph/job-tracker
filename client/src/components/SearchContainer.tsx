import React from "react";
import { useGlobalContext } from "../store/context";
import FormRow from "./FormRow";
import FormRowSelect from "./FormRowSelect";

const SearchContainer = () => {
  const {
    isLoading,
    search,
    searchStatus,
    statusOptions,
    searchType,
    sort,
    sortOptions,
    jobTypeOptions,
    clearFilters,
    handleChange,
  } = useGlobalContext();

  const handleSearch = (e: any) => {
    if (isLoading) {
      return;
    }

    handleChange({ name: e.target.name, value: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    clearFilters();
  };
  return (
    <section>
      <form className="w-full max-w-full bg-white p-[2rem] my-[3rem] mx-auto shadow-md border-t-4  rounded-md">
        <h4 className="mb-4 text-2xl tracking-wider text-gray-700 capitalize">
          search form
        </h4>
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
          {/* search position */}

          <FormRow
            type="text"
            name="search"
            value={search}
            handleChange={handleSearch}
          />
          {/* search by status */}
          <FormRowSelect
            labelText="status"
            name="searchStatus"
            value={searchStatus}
            handleChange={handleSearch}
            list={["all", ...statusOptions]}
          />
          {/* search by type */}
          <FormRowSelect
            labelText="type"
            name="searchType"
            value={searchType}
            handleChange={handleSearch}
            list={["all", ...jobTypeOptions]}
          />
          {/* sort */}
          <FormRowSelect
            name="sort"
            value={sort}
            handleChange={handleSearch}
            list={sortOptions}
          />
          <button
            className=" text-red-800 bg-red-200 border-transparent rounded-sm tracking-wide py-[0.37rem] px-[0.75rem] shadow-sm transition-all duration-300 capitalize inline-block h-[30px] mt-4 hover:bg-red-800 hover:text-white"
            disabled={isLoading}
            onClick={handleSubmit}
          >
            clear filters
          </button>
        </div>
      </form>
    </section>
  );
};
export default SearchContainer;
