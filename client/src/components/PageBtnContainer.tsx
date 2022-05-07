import { useGlobalContext } from "../store/context";
import { HiChevronDoubleRight } from "react-icons/hi";
const PageBtnContainer = () => {
  const { numOfPages, page, changePage } = useGlobalContext();

  function nextPage() {
    let newPage = page + 1;
    if (newPage > numOfPages) {
      newPage = 1;
    }
    changePage(newPage);
  }
  function prevPage() {
    let newPage = page - 1;
    if (newPage < 1) {
      newPage = numOfPages;
    }
    changePage(newPage);
  }

  const pages = Array.from({ length: numOfPages }, (_, index) => {
    return index + 1;
  });

  return (
    <section className="flex flex-wrap items-center justify-end h-24 gap-4 mt-4">
      <button
        className="transition-all duration-200 shadow-md prev-btn hover:bg-mainColor100 hover:text-mainColorDark"
        onClick={prevPage}
      >
        prev
      </button>

      <div className="rounded-sm bg-mainBlackLight">
        {pages.map((pageNumber) => (
          <button
            type="button"
            className={`${
              pageNumber === page && "bg-mainBlack text-white"
            }  border-transparent w-11 h-9 text-xl font-bold text-white transition-all duration-200 rounded-sm`}
            key={pageNumber}
            onClick={() => changePage(pageNumber)}
          >
            {pageNumber}
          </button>
        ))}
      </div>
      <button
        className="transition-all duration-300 shadow-md next-btn hover:bg-mainColor100 hover:text-mainColorDark"
        onClick={nextPage}
      >
        next
        <HiChevronDoubleRight />
      </button>
    </section>
  );
};
export default PageBtnContainer;
