import { Link } from "react-router-dom";
import { EMBLEM } from "../assets/emblem";

export default function Logo({ dark = false, size = "h-9" }) {
  return (
    <Link to="/" className="spin-hover flex items-center gap-2.5 shrink-0">
      <img
        src={EMBLEM}
        alt="Potesia"
        className={size + " w-auto"}
        style={dark ? {} : { filter: "invert(1)" }}
      />
      <span className={"text-lg font-semibold tracking-tight " + (dark ? "text-white" : "text-zinc-900")}>
        Potesia
      </span>
    </Link>
  );
}
