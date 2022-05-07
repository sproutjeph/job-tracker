import logo from "../assets/images/logo1.svg";
interface IProps {
  className?: string;
}
const Logo = ({ className }: IProps) => {
  return <img className={className} src={logo} alt="jobfiy" />;
};
export default Logo;
