import { IconType } from "react-icons";

interface IProps {
  Icon: IconType;
  text: string;
}

const JobInfo = ({ Icon, text }: IProps) => {
  return (
    <div className="mt-2 flex items-center">
      <span className="text-[1rem] mr-4 flex items-center text-gray-400">
        <Icon />
      </span>
      <span className="capitalize tracking-wider">{text}</span>
    </div>
  );
};
export default JobInfo;
