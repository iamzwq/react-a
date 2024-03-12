import { Outlet, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

export default function AnimatedOutlet() {
  const location = useLocation();
  return (
    <TransitionGroup>
      <CSSTransition
        key={location.pathname}
        in={true}
        classNames="fade"
        timeout={500}
        mountOnEnter
        unmountOnExi
      >
        <Outlet />
      </CSSTransition>
    </TransitionGroup>
  );
}
