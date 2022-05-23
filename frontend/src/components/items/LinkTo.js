import { Link } from "react-router-dom";

const LinkTo = ({ url, value, fullWidth = false, alignRight = false }) => {
  return (
    <div className={`${alignRight ? "flex justify-end" : null}`}>
      <Link
        to={url}
        className={`${
          fullWidth ? "w-full" : null
        } py-2.5 px-4 inline-block bg-[#00ed64] text-white font-semibold tracking-wide cursor-pointer transition rounded-md overflow-hidden`}>
        {value}
      </Link>
    </div>
  );
};
export default LinkTo;
