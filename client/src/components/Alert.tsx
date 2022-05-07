import { useGlobalContext } from "../store/context";

const Alert = () => {
  const { alertText, alertType } = useGlobalContext();
  let classString: string = "success";
  if (alertType === "danger") {
    classString = "bg-red-200 text-red-700";
  }
  if (alertType === "success") {
    classString = "bg-mainBlack text-[#fff]";
  }
  return (
    <div
      className={`py-[0.375rem] px-[0.75rem] mb-[1rem] border-transparent rounded-sm text-center tracking-wider  text-sm ${classString}`}
    >
      {alertText}
    </div>
  );
};
export default Alert;
