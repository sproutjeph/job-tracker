import { IconType } from "react-icons";

interface IProps {
  count: number;
  title: string;
  Icon: IconType;
  color: string;
  bcg: string;
}
const StatItem = ({ count, title, Icon, color, bcg }: IProps) => {
  return (
    <article
      className={` p-8 bg-white rounded-sm border-b-4 border-[${color}]`}
    >
      <header className="flex items-center justify-between">
        <span className={`text-[${color}] block text-5xl `}>{count}</span>
        <span
          className={`w-[70px] h-[60px] bg-[${bcg}] rounded-sm flex items-center justify-center`}
        >
          <Icon className={`text-[${color}] text-2xl`} />
        </span>
      </header>
      <h5 className="m-0 mt-2 tracking-wider text-left capitalize">{title}</h5>
    </article>
  );
};
export default StatItem;
