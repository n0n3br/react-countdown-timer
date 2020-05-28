import React from "react";

export default () => {
  return (
    <nav className="navbar is-info">
      <div className="navbar-brand">
        <span className="navbar-item">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="24"
            height="24"
            viewBox="0 0 172 172"
            style={{ fill: "#000000", marginRight: "10px" }}
          >
            <g
              fill="none"
              fill-rule="nonzero"
              stroke="none"
              stroke-width="1"
              stroke-linecap="butt"
              stroke-linejoin="miter"
              stroke-miterlimit="10"
              stroke-dasharray=""
              stroke-dashoffset="0"
              font-family="none"
              font-weight="none"
              font-size="none"
              text-anchor="none"
              style={{ mixBlendMode: "normal" }}
            >
              <path d="M0,172v-172h172v172z" fill="none" />
              <g fill="#ffffff">
                <path d="M64.5,7.16667v14.33333h43v-14.33333zM86,28.66667c-35.67175,0 -64.5,28.82825 -64.5,64.5c0,35.67175 28.82825,64.5 64.5,64.5c35.67175,0 64.5,-28.82825 64.5,-64.5c0,-15.75645 -5.63678,-30.17088 -14.99121,-41.3623l10.77799,-12.83561l-10.97396,-9.22428l-10.23209,12.16374c-10.84517,-8.27469 -24.35909,-13.24154 -39.08073,-13.24154zM86,43c28.02559,0 50.16667,22.14108 50.16667,50.16667c0,28.02559 -22.14108,50.16667 -50.16667,50.16667c-28.02558,0 -50.16667,-22.14108 -50.16667,-50.16667c0,-28.02558 22.14108,-50.16667 50.16667,-50.16667zM78.83333,57.33333v23.44564c-4.42692,2.55587 -7.15763,7.27594 -7.16667,12.3877c0,7.91608 6.41725,14.33333 14.33333,14.33333c7.91608,0 14.33333,-6.41725 14.33333,-14.33333c-0.00405,-5.11676 -2.73542,-9.84332 -7.16667,-12.40169v-23.43164z" />
              </g>
            </g>
          </svg>
          <span class="subtitle has-text-white">Countdown Timer</span>
        </span>
      </div>
    </nav>
  );
};
