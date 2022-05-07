const Loading = ({ center }: { center?: string }) => {
  return (
    <div
      className={`${
        center ? "my-0 mx-auto" : ""
      } w-24 h-24 border-4 border-gray-400 border-solid border-t-mainColor animate-spin rounded-full`}
    ></div>
  );
};
export default Loading;
