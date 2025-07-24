import React from "react";

function Footer() {
  return (
    <footer style={{backgroundColor: "rgb(250, 250, 250"}}>
      <div className="container border-top pt-5">
        <div className="row">
          <div className="col">
            <img
              src="media/images/logo.svg"
              style={{ width: "50%" }}
              alt="logo image"
              className="mb-3"
            />
            <p className="text-muted mb-0" style={{fontSize: "13px"}}>
              &copy; 2010 - 2025, Zerodha Broking Ltd. <br />
              All rights reserved.
            </p>
            <br />
            <a href="" className="pe-4 fs-5 text-muted"><i className="fa-brands fa-x-twitter"></i></a>
            <a href="" className="pe-4 fs-5 text-muted"><i className="fa-brands fa-square-facebook"></i></a>
            <a href="" className="pe-4 fs-5 text-muted"><i className="fa-brands fa-instagram"></i></a>
            <a href="" className="pe-4 fs-5 text-muted"><i className="fa-brands fa-linkedin-in"></i></a>
            <hr />
            <a href="" className="pe-4 fs-5 text-muted"><i className="fa-brands fa-youtube"></i></a>
            <a href="" className="pe-4 fs-5 text-muted"><i className="fa-brands fa-whatsapp"></i></a>
            <a href="" className="pe-4 fs-5 text-muted"><i className="fa-brands fa-telegram"></i></a>
          </div>
          <div className="col">
            <p style={{color: "#424242"}} className="fs-5 fw-medium">Company</p>
            <a href="" className="footer_links">About</a>
            <br />
            <a href="" className="footer_links">Products</a>
            <br />
            <a href="" className="footer_links">Pricing</a>
            <br />
            <a href="" className="footer_links">Referral programme</a>
            <br />
            <a href="" className="footer_links">Careers</a>
            <br />
            <a href="" className="footer_links">Zerodha.tech</a>
            <br />
            <a href="" className="footer_links">Open source</a>
            <br />
            <a href="" className="footer_links">Press & media</a>
            <br />
            <a href="" className="footer_links">Zerodha Cares (CSR)</a>
            <br />
          </div>
          <div className="col">
            <p style={{color: "#424242"}} className="fs-5 fw-medium">Support</p>
            <a href="" className="footer_links ">Contact us</a>
            <br />
            <a href="" className="footer_links">Support portal</a>
            <br />
            <a href="" className="footer_links">Z-Connect blog</a>
            <br />
            <a href="" className="footer_links">List of charges</a>
            <br />
            <a href="" className="footer_links">Downloads & resources</a>
            <br />
            <a href="" className="footer_links">Videos</a>
            <br />
            <a href="" className="footer_links">Market overview</a>
            <br />
            <a href="" className="footer_links">How to file a complaint?</a>
            <br />
            <a href="" className="footer_links">Status of your complaints</a>
            <br />
            <a href="" className="footer_links">Account</a>
            <br />
            <a href="" className="footer_links">Open an account</a>
            <br />
          </div>
          <div className="col">
            <p style={{color: "#424242"}} className="fs-5 fw-medium">Account</p>
            <a href="" className="footer_links">Open an account</a>
            <br />
            <a href="" className="footer_links">Fund transfer</a>
            <br />
          </div>
        </div>

        <div className="mt-5 text-muted" style={{ fontSize: "13px"}}>
          <p style={{color: "#9b9b9b"}}>
            Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration
            no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha
            Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity
            Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001
            – SEBI Registration no.: INZ000038238 Registered Address: Zerodha
            Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence
            Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka,
            India. For any complaints pertaining to securities broking please
            write to complaints@zerodha.com, for DP related to dp@zerodha.com.
            Please ensure you carefully read the Risk Disclosure Document as
            prescribed by SEBI | ICF
          </p>

          <p style={{color: "#9b9b9b"}}>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances
          </p>

          <p style={{color: "#9b9b9b"}}>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>

          <p style={{color: "#9b9b9b"}}>
            Attention investors: 1) Stock brokers can accept securities as
            margins from clients only by way of pledge in the depository system
            w.e.f September 01, 2020. 2) Update your e-mail and phone number
            with your stock broker / depository participant and receive OTP
            directly from depository on your e-mail and/or mobile number to
            create pledge. 3) Check your securities / MF / bonds in the
            consolidated account statement issued by NSDL/CDSL every month.
          </p>

          <p style={{color: "#9b9b9b"}}>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of Zerodha and offering such services, please
            create a ticket here.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
