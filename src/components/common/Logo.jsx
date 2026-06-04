import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to="/">
      <div className="text-3xl font-bold text-white cursor-pointer">
        Elite<span className="text-primary">Sync</span>
      </div>
    </Link>
  );
}
