import React from 'react'
import '../style/style.css';
import carousel1img1 from '../img/carousel/carousel1img1.png'
import carousel1img2 from '../img/carousel/carousel1img2.png'
import carousel2img1 from '../img/carousel/carousel2img1.png'
import carousel3img1 from '../img/carousel/carousel3img1.png'
import feedback from '../img/help/customer-service.png'
import support from '../img/help/compliant.png'
import reg from '../img/card/student_registration.png'
import management from '../img/card/management.png'
import attendance from '../img/card/attendance.png'
import examresult from '../img/card/exam-results.png'
import notice from '../img/card/notice.png'
import exam from '../img/card/exam.png'
import computer from '../img/carousel2nd/computer.png'
import bba from '../img/carousel2nd/bba.jpg'
import bhm from '../img/carousel2nd/bhm.png'
import '../style/footer.css'
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <>
            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="0" className="active"
                        aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="2"
                        aria-label="Slide 3"></button>
                </div>

                <div className="carousel-inner">

                    <div className="carousel-item active">
                        <div className="carousel1">
                            <div className="carouselImg">
                                <img src={carousel1img1} alt="" className="img-fluid" width="150" />
                            </div>
                            <div className="carouselMid">
                                <p className="firstHead">
                                    Navigate the corridors of knowledge with ease.
                                </p>
                            </div>
                            <div className="carouselEnd">
                                <img src={carousel1img2} alt="" className="img-fluid" width="140" />
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <div className="carousel2">
                            <div className="carouselImg">
                                <img src={carousel2img1} alt="" className="img-fluid" width="150" />
                            </div>
                            <div className="carouselMid">
                                <p className="firstHead">
                                    Navigate the Journey with Our College Management System!
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <div className="carousel3">
                            <div className="carouselImg">
                                <img src={carousel3img1} alt="" className="img-fluid" width="150" />
                            </div>
                            <div className="carouselMid">
                                <p className="firstHead">
                                    Empowering Education, Elevating Futures
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying"
                    data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying"
                    data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>

            </div>

            {/* <!-- Carousel endss here  -->
            <!-- Cards starts here --> */}

            <div className="homeCards1" id="service">

                <div className="card">
                    <div className="card-body card1">
                        <div className="card-in">
                            <h2>Student Registration</h2>
                            <p>Start Your Journey by Registering Yourself</p>
                            <Link to={"/regStudent"}>
                                <button type="button" className="btn btn-outline-light">Apply Now</button>
                            </Link>
                        </div>
                        <div className="card-img">
                            <img src={reg} style={{ width: "86px" }} className="img-fluid" alt="" />
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className="card-body card2">
                        <div className="card-in">
                            <h2>College Panel</h2>
                            <p>Manage Administrative works</p>
                            <Link to={"/loginTeacher"}>
                                <button type="button" className="btn btn-outline-light">Open</button>
                            </Link>
                        </div>
                        <div className="card-img">
                            <img src={management} style={{ width: "86px" }} className="img-fluid" alt="" />
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className="card-body card3">
                        <div className="card-in">
                            <h2>Exam Portal</h2>
                            <p style={{marginBottom: "55px"}}>Best Of Luck...</p>
                            <Link to={"/error404"}>
                                <button type="button" className="btn btn-outline-light">Coming Soon</button>
                            </Link>
                        </div>
                        <div className="card-img" id='#examPortal'>
                            <img src={exam} style={{ width: "86px" }} className="img-fluid" alt="" />
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Cards ends here -->

            <!-- Card Explore Starts here  --> */}

            <div className="outer-explore">
                <div className="explore">
                    <h1>Get More From Your College</h1>
                    <div className="wrapper-Explore">
                        {/* <i id="left-Explore" className="fa-solid fa-angle-left"></i> */}
                        <ul className="carousel-Explore">
                            <li className="card-Explore ce-1">

                                <div className="card-Explore-inner">
                                    <h2>Attendance</h2>
                                    <p>Check Your Attendance... You Must Present for atleast 75% of Your Classes</p>
                                    <Link to="/loginStudent">
                                        <button type="button" className="btn btn-outline-dark">Check Now</button>
                                    </Link>
                                </div>
                                <div className="card-Explore-img">
                                    <img src={attendance} alt="" style={{width: "150px"}} className="img-fluid" width="" />
                                </div>
                            </li>
                            <li className="card-Explore ce-2">

                                <div className="card-Explore-inner">
                                    <h2>Notice</h2>
                                    <p>Get All the Academic Notices in One Place... Feel Free to Check it</p>
                                    <div className="noticeBtn">

                                        <Link to="/BcaNoticeView">
                                            <button type="button" style={{ marginRight: "10px" }} className="btn btn-outline-dark">BCA</button>
                                        </Link>
                                        <Link to="/BbaNoticeView">
                                            <button type="button" style={{ marginRight: "10px" }} className="btn btn-outline-dark">BBA</button>
                                        </Link>
                                        <Link to="/BhmNoticeView">
                                            <button type="button" style={{ marginRight: "10px" }} className="btn btn-outline-dark">BHM</button>
                                        </Link>
                                    </div>
                                </div>
                                <div className="card-Explore-img">
                                    <img src={notice} alt="" style={{width: "150px"}} className="img-fluid" width="" />
                                </div>
                            </li>
                            <li className="card-Explore ce-3">

                                <div className="card-Explore-inner">
                                    <h2>Result</h2>
                                    <p>We are Excited to Show Your Academic Efforts... Go and Check Now</p>
                                    <Link to="/loginStudent">
                                        <button type="button" className="btn btn-outline-dark">Check Now</button>
                                    </Link>
                                </div>
                                <div className="card-Explore-img">
                                    <img src={examresult} alt="" style={{width: "150px"}} className="img-fluid" width="" />
                                </div>
                            </li>
                        </ul>
                        {/* <i id="right-Explore" className="fa-solid fa-angle-right"></i> */}
                    </div>
                </div>
            </div>

            {/* <!-- Card Explore Ends here  -->

            <!-- Card Explore Calculator starts here  --> */}
            <div className="courseCarouselHolder">
                <div className="outerCourse">
                    <div id="courseCarousel" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators carousel-indicators2nd">
                            <button type="button" data-bs-target="#courseCarousel" data-bs-slide-to="0" className="active"
                                aria-current="true" aria-label="Course 1"></button>
                            <button type="button" data-bs-target="#courseCarousel" data-bs-slide-to="1" aria-label="Course 2"></button>
                            <button type="button" data-bs-target="#courseCarousel" data-bs-slide-to="2" aria-label="Course 3"></button>
                        </div>

                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="carouselCourse">
                                    <div className="carouselImg">
                                        <img src={computer} alt="Course 1 Image" className="img-fluid" width="150" />
                                    </div>
                                    <div className="carouselMid">
                                        <h3 className="courseTitle">Bachelor of Computer Applications</h3>
                                        <p className="courseDescription">Learn the fundamentals of computer science and programming.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="carousel-item">
                                <div className="carouselCourse">
                                    <div className="carouselImg">
                                        <img src={bba} alt="Course 2 Image" className="img-fluid" width="150" />
                                    </div>
                                    <div className="carouselMid">
                                        <h3 className="courseTitle">Bachelor of Business Administration</h3>
                                        <p className="courseDescription">Learn about the management of a business, company or organisation.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="carousel-item">
                                <div className="carouselCourse">
                                    <div className="carouselImg">
                                        <img src={bhm} alt="Course 3 Image" className="img-fluid" width="150" />
                                    </div>
                                    <div className="carouselMid">
                                        <h3 className="courseTitle">Bachelor of Hotel Management</h3>
                                        <p className="courseDescription">Learn about curriculum includes nutrition, hotel accountancy, facility planning, and food safety.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>





            {/* <!-- Card Explore Calculator ends here  --> */}
            <div className="outer-explore-calculator" id="helpdiv">
                <div className="explore-calculator explore-calculator2" id="calculatorPart">
                    <div className="helpindex">
                        <Link to={"/error404"}>
                            <img src={feedback} alt="" className="img-fluid" width="80px" />
                            Give Your Feedback
                        </Link>
                    </div>
                    <div className="helpindex">
                        <Link to={"/error404"}>
                            <img src={support} alt="" className="img-fluid" width="80px" />
                            Customer Support
                        </Link>
                    </div>
                </div>
            </div>

            {/* <!-- <div className="demo"></div> --> */}
            <section className="footer">
                <div className="footer-row">
                    <div className="footer-col">
                        <h4>Info</h4>
                        <ul className="links">
                            <li><Link to={"/error404"}>About Us</Link></li>
                            <li><a href="#service">Service</a></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4>Explore</h4>
                        <ul className="links">
                            <li><Link to={"/regStudent"}>Student Registration</Link></li>
                            <li><Link to={"/loginStudent"}>Result</Link></li>
                            <li><Link to={"/loginStudent"}>Notices</Link></li>
                            <li><Link to={"/loginTeacher"}>Faculty Panel</Link></li>
                            <li><Link to={"/loginStudent"}>Attendance</Link></li>
                            <li><Link to={"/error404"}>Exam Portal</Link></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4>Legal</h4>
                        <ul className="links">
                            <li><a href="https://drive.google.com/file/d/19gLawBw_NhRuajT0fPd-Wf75CEinCU27/view?usp=sharing" target="_blank">Privacy Policy</a></li>
                            <li><a href="https://drive.google.com/file/d/1vIW9HygIRZwe5rgYFoWyooIGId0iEd09/view?usp=sharing" target="_blank">Terms & Conditions</a></li>
                            <li><a href="https://drive.google.com/file/d/1etsD7IiiAz9H525G03IgzWbtfG4WAQyc/view?usp=sharing" target="_blank">Disclaimer</a></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4>Contact Us</h4>
                        <p>
                            Reach us through our social media platforms, or Subscribe, our agent will reach through your email
                            to solve your problems.
                        </p>
                        <form action="#" style={{ flexDirection: "row" }}>
                            <input type="email" placeholder="Your email" required />
                            <button type="button" className="btn btn-outline-light">SUBSCRIBE</button>
                        </form>
                        <div className="icons">
                            <i className="fa-brands fa-whatsapp"></i>
                            <i className="fa-brands fa-facebook-f"></i>
                            <i className="fa-brands fa-instagram"></i>
                            <i className="fa-brands fa-linkedin"></i>
                        </div>
                    </div>
                </div>
                <a href="#carouselExampleAutoplaying">
                    <img src="" alt="" className="img-fluid backtotop" width="50" />
                </a>
            </section>
        </>
    )
}
