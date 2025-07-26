import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Hero() {
    const navigate = useNavigate();
    const [ email, setEmail ] = useState("");

    let handleChange = (e) => {
        setEmail(e.target.value);
    } 

    const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:4000/verify",
        {
          email,
        }
      );
      let success = data.exist;
      if (success) {
        navigate("/login");
      } else {
        navigate("/signup");
      }
    } catch (error) {
      console.log(error);
    }
  };

    return ( 
        <div className='container p-5'>
            <div className='row text-center p-5'> 
                <h3>Open a free demat and trading account online</h3>
                <h5 className='mt-3' style={{opacity: "0.7", zIndex: "0"}}>Start investing brokerage free and join a community of 1.6+ crore investors and traders</h5>
            </div>
            <div className='row px-3'>
                <div className='col-1'></div>
                <div className='col-6 p-5'>
                    <img src='./media/images/account_open.svg' alt='Account open'/>
                </div> 
                <div className='col-5 py-5 mt-5'>
                    <h3 className='fs-4'>Signup now</h3>
                    <h6 className='fw-normal mt-3' style={{color: "#9B9B9B"}}>Or track your existing application</h6>
                    <div className='border mt-3' style={{width: "80%"}}>
                        <div className='row p-2'>
                            {/* <div className='col-3 border-end d-flex align-items-center justify-content-center'>
                                <img src='./media/images/india-flag.svg' alt='Indian Flag'/>
                                <span className=''>&nbsp;+91</span>
                            </div> */}
                            <div className='col-9'>
                                <input
                                type='email'
                                placeholder='Enter your Email'
                                value={email}
                                onChange={handleChange}
                                className='form-control border-0 shadow-none user-input'
                                />
                            </div>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <button type='submit' className='btn btn-primary p-2 fs-5 mt-4' style={{width: "50%", borderRadius: "2px", backgroundColor: "#387ed1"}}>Sign up</button> 
                    </form>
                    <p className='text-muted mt-4' style={{fontSize: "12px"}}>By proceeding, you agree to the Zerodha <a href='#' className='text-decoration-none'>terms</a> & <a href='#' className='text-decoration-none'>privacy policy</a></p>
                </div>
            </div>
        </div>
     );
}

export default Hero;