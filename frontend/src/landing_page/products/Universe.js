import React from "react";

function Universe() {
  return (
    <div className="container p-5">
      <div className="row text-center p-5">
        <h1 className="fs-2">The Zerodha Universe</h1>
        <p className="mt-3">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 mt-5">
          <img
            src="media/images/smallcaseLogo.png"
            alt="universe_img"
            style={{ width: "60%" }}
          />
          <p
            className="fw-medium mt-3 "
            style={{ fontSize: "0.75rem", color: "#9b9b9b" }}
          >
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4 mt-5">
          <img
            src="media/images/streakLogo.png"
            alt="universe_img"
            style={{ width: "45%" }}
          />
          <p
            className="fw-medium mt-3 "
            style={{ fontSize: "0.75rem", color: "#9b9b9b" }}
          >
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>
        <div className="col-4 mt-5">
          <img
            src="media/images/sensibullLogo.svg"
            alt="universe_img"
            style={{ width: "70%" }}
            className="p-2"
          />
          <p
            className="fw-medium mt-3 "
            style={{ fontSize: "0.75rem", color: "#9b9b9b" }}
          >
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>
        <div className="col-4 mt-5">
          <img
            src="media/images/zerodhaFundhouse.png"
            alt="universe_img"
            style={{ width: "60%" }}
          />
          <p
            className="fw-medium mt-3 "
            style={{ fontSize: "0.75rem", color: "#9b9b9b" }}
          >
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>
        <div className="col-4 mt-5">
          <img
            src="media/images/goldenpiLogo.png"
            alt="universe_img"
            style={{ width: "50%" }}
          />
          <p
            className="fw-medium mt-3 "
            style={{ fontSize: "0.75rem", color: "#9b9b9b" }}
          >
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-4 mt-5">
          <img
            src="media/images/dittoLogo.png"
            alt="universe_img"
            style={{ width: "40%" }}
          />
          <p
            className="fw-medium mt-3 "
            style={{ fontSize: "0.75rem", color: "#9b9b9b" }}
          >
            Personalized advice on life and health insurance. No spam and no
            mis-selling.
          </p>
        </div>
        <button className='btn btn-primary p-2 fs-5 mt-5' style={{width: "20%", margin: "0 auto"}}>Sign up for free</button>
      </div>
    </div>
  );
}

export default Universe;
