import React from 'react'
import '../src/Navbar.css'
import { FcAndroidOs } from "react-icons/fc";
import { FaStar } from "react-icons/fa";
function NavBar(props) {
    return (

        < div className=''>
            <nav className="navbar navbar-expand-lg  ">
                < div className="container ">

                    <h1> <a className=" mx-5 Font size: fs-3 text-decoration-underline" style={{ color: 'green' }} href="/">{props.title}</a></h1>

                    <div className="collapse navbar-collapse mx-5  " id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active my-5 mx-3" aria-current="page" href="/">Home</a>
                            </li>
                            <button className="nav-link active  mx-3" href='/'> Services</button>
                            <button className="nav-link active mx-3 ">Contact</button>
                            <button className="nav-link active mx-3">About</button>
                        </ul>
                    </div>
                    <div className=" h-auto d-inline-block  " style={{ position: 'absolute', top: '55px', left: '850px' }} href="/">
                        <button className="  bg-light  rounded btn-sm fw-bolder border border-light " type='button' href="/" ><FcAndroidOs color='red' size={42} />Download Mobile App</button>
                    </div>
                    <div className="h-50 d-inline-block  " style={{ width: 280, position: 'relative', top: '25px' }} href="/" >
                        <button className="rounded btn-lg border border-light text-light fw-bolder shadow-lg p-2 mb-5   " style={{ background: 'green' }} type='button' href="/">Get Started For Free</button>
                    </div>
                </div>
            </nav>
            <div className=' h-100 d-inline-block ' style={{ position: 'relative', left: '0px', top: '50px' }}>
                <div style={{ position: 'relative', right: '0px', top: '25px', left: '-130px' }}>
                    <FaStar size={25} />
                </div>
                <a className="text-decoration-none text-dark text-xl-start" href='/'> Tested by Top Ayurvedic Doctors</a>
            </div>

            <p className=' text-decoration-none fw-bolder text-dark  fs-1 ' style={{ width: '550px', position: 'relative', left: '490px', top: '50px' }} href='/'>
                Discover {props.title}: <br />
            </p>
            <p className=' text-decoration-none fw-bolder text-dark fs-1 ' style={{ width: '700px', position: 'relative', left: '445px', top: '15px' }} href='/'>
                Solutions to cure your <br />

            </p>
            <p className=' text-decoration-none fw-bolder text-dark fs-1 ' style={{ width: '550px', position: 'relative', left: '520px', top: '-20px' }} href='/'>
                disease naturally<br />
            </p>

            <p className='text-decoration-none fw-bold text-dark ' style={{ width: '550px', position: 'relative', left: '520px', top: '-25px' }} href='/'>
                Seamlessly access ancient wisdom with our advanced software,<br />
                recommending perfect herbs and forumulas for you unique needs,<br />
                preferences, and body constitution.
            </p>
            
            <form class="d-flex change" role="search">
                        <input class="form-control me-2 " type="search" placeholder="Search  Type your health problem in detail it's free" aria-label="Search" style={{width: '100%'}} />
                <button class="btn btn-outline-success " type="submit">Find Solutions</button>
            </form>

        </div>

    )
}

export default NavBar
