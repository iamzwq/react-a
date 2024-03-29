import { Outlet, useLocation } from "react-router-dom";
import { domAnimation, LazyMotion, m } from "framer-motion";

export default function TransitionContent() {
  const location = useLocation();
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        key={location.key}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.5 }}
      >
        <Outlet />
      </m.div>
    </LazyMotion>
  );
}
