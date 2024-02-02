import './App.css';
import { Container, Row, Col, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { IoTimeOutline, } from "react-icons/io5";
import { FaPhoneAlt, FaFacebookF, FaInstagram, FaTwitter, FaStar } from "react-icons/fa";
import { IoLogoGoogleplus } from "react-icons/io";
import { FaMap, FaWifi } from "react-icons/fa";
import { RiHome2Line } from "react-icons/ri";
import { FaRegStar, FaLocationArrow } from "react-icons/fa";
import { GiCoffeeCup, GiBathtub, GiWashingMachine } from "react-icons/gi";
import { TbAirConditioning } from "react-icons/tb";
import { PiCookingPotFill } from "react-icons/pi";
import { BsPlug } from "react-icons/bs";
import { GiLockers } from "react-icons/gi";
import { MdOutlineEmail } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import { useState } from 'react';
import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';








function App() {
  return (

    <div>
      {/* header section**************** */}
      <Container>
        <Row>
          <Col xl lg={4} className='my-2'>
            <img src={require('./image/logo.png')} ></img>
          </Col>
          <Col className='my-3 d-none m-end d-lg-block'>
            <a className=' h_text me-4 text-'><IoTimeOutline></IoTimeOutline><span>09:00AM — 05:00PM</span></a>
            <a className='me-4'><FaPhoneAlt></FaPhoneAlt><span>+1 323-913-4688</span></a>
            <button>Book now</button>

          </Col>
        </Row>

      </Container>
      {/*    end header**************** */}

      {/* bg gry+++++++++++++++++++++++++++ */}
      <div className='bg_gry'>
        <Container>
          <Row>
            <Col xs={6}>
              <Navbar expand="lg">
                <Container>
                  <Navbar.Brand href="#home"></Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" className='ms-auto' />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                      <Nav.Link href="#home">Home</Nav.Link>
                      <Nav.Link href="#link">About </Nav.Link>
                      <NavDropdown title="room" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                          Another action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">
                          Separated link
                        </NavDropdown.Item>
                      </NavDropdown>
                      <Nav.Link href="#link">Blog</Nav.Link>
                      <Nav.Link href="#link">Contacts </Nav.Link>
                      <Nav.Link href="#link">Pages </Nav.Link>



                    </Nav>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
            </Col>
            <Col  >
              <div className='d-flex pir '>
                <p className='me-auto'></p>
                <p><FaFacebookF></FaFacebookF></p>
                <p><FaTwitter ></FaTwitter ></p>
                <p><FaInstagram ></FaInstagram></p>
                <p><IoLogoGoogleplus></IoLogoGoogleplus></p>

              </div>


            </Col>

          </Row>
        </Container>
        </div>
        {/* end gry section************** */}

                    {/* slider section********** */}
      <Carousel>
        <Carousel.Item>
          <img src={require('./image/1.jpg')} className='img'></img>
          <Carousel.Caption>
            <p>Serving travelers on a budget</p>
            <h3>We provide comfortable</h3>
            <h3>accommodation for you</h3>
            <button className='btn'> Book Now</button>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={require('./image/2.jpg')} className='img'></img>

          <Carousel.Caption>
            <p>Serving travelers on a budget</p>
            <h3>We provide comfortable</h3>
            <h3>accommodation for you</h3>
            <button className='btn'> Book Now</button>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={require('./image/3.jpg')} className='img'></img>

          <Carousel.Caption>
            <p>Serving travelers on a budge</p>
            <h3>We provide comfortable</h3>

            <h3>accommodation for you</h3>
            <button className='btn'> Book Now</button>


          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      {/* end slider section */}
          {/* map saction */}
      
      <div className='spacer'>

          

        <Container>
          <Row>
            <Col xs={12} sm={6} lg={4} className="">
              <div className='info'>
                <p><FaMap></FaMap></p>
                <li>MAP & DIRACTION</li>
                <div className='hr'></div>
                <ul>Our hostel is located in the downtown and not too far from airport and bus station so it is quite easy to find us wherever you come from.</ul>


              </div>
            </Col>
            <Col xs={12} sm={6} lg={4} className=''>
              <div className='info'>
                <p><RiHome2Line></RiHome2Line></p>
                <li>MAP & DIRACTION</li>
                <div className='hr'></div>
                <ul>Our hostel is located in the downtown and not too far from airport and bus station so it is quite easy to find us wherever you come from.</ul>


              </div>
            </Col>
            <Col xs={12} sm={6} lg={4} className=''>
              <div className='info'>
                <p><FaRegStar></FaRegStar></p>
                <li>MAP & DIRACTION</li>
                <div className='hr'></div>
                <ul>Our hostel is located in the downtown and not too far from airport and bus station so it is quite easy to find us wherever you come from.</ul>


              </div>
            </Col>

          </Row>
        </Container>
        {/* end map section */}


      </div>
      {/* BEST CITY HOSTEL ********** */}

      <Container>
        <Row>
          <Col xs={12} lg={6} >
            <img style={{ width: "100%" }} src={require('./image/4.jpg')}></img>
          </Col>
          <Col xs={12} lg={6} >
            <div className='two py-5 ms-5'>
              <h2>BEST CITY HOSTEL</h2>
              <p>Our hostel was founded in 2008 to provide travelers on a budget from all over the world with affordable yet highly comfortable accommodation that they could enjoy.</p>
              <div className='d-flex home'>
                <p> Home</p>
                <p> About</p>
                <p> Blog</p>
              </div>

              <button className='btn1 ms-5'>booK now</button>
              <button className='btn2 ms-5'>booK now</button>


            </div>
          </Col>

        </Row>
      </Container>
      {/*  end  BEST CITY HOSTEL */}


      {/* our  center name */}
      <Container>
        <Row>
          <Col lg={12}>
            <div className='gallery justify-content-center align-content-center d-flex'>
              <h2>OUR GALLERY</h2>
            </div>
          </Col>
          <Col className='d-none d-sm-block'>
            <div className='si justify-content-center align-content-center d-flex'>
              <a>ALL</a><span>|</span>
              <a>BEDROOM</a><span>|</span>
              <a>LIVING ROOM</a><span>|</span>
              <a>DINING ROOM</a><span>|</span>


            </div>

          </Col>
        </Row>

      </Container>
      {/*  end center name */}

      {/* gallry view */}
      <Container>

        <div class="row">
          <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
            <img src={require('./image/5.jpg')}
              class="w-100 shadow-1-strong rounded mb-4"
              alt="Boat on Calm Water"
            />

            <img src={require('./image/6.jpg')}
              class="w-100 shadow-1-strong rounded mb-4"
              alt="Wintry Mountain Landscape"
            />
          </div>

          <div class="col-lg-4 mb-4 mb-lg-0">
            <img
              src={require('./image/7.jpg')}
              class="w-100 shadow-1-strong rounded mb-4"
              alt="Mountains in the Clouds"
            />


          </div>

          <div class="col-lg-4 mb-4 mb-lg-0">
            <img src={require('./image/9.jpg')}
              class="w-100 shadow-1-strong rounded mb-4"
              alt="Waves at Sea"
            />

            <img src={require('./image/10.jpg')}
              class="w-100 shadow-1-strong rounded mb-4"
              alt="Yosemite National Park"
            />
          </div>
        </div>

      </Container>
      {/*  end gallery view */}
      <div className='spacer'>
        {/*  center name */}
        <Container>
          <Col lg={12}>
            <div className='gallery justify-content-center align-content-center d-flex'>
              <h2>OUR TEAM</h2>
            </div>
          </Col>
        </Container>
        {/* end center */}
      </div>
      {/*  user pic info */}
      <Container>
        <Row>
          <Col className='col-xs-12 col-sm-6  col-md-4 col-lg-3'>
            <div className='single'>
              <div className='single_img'>
                <img src={require('./image/t-1.jpg')}></img>
              </div>
              <p> SAME ROBINSOR</p>
              <li>FOUNDER</li>
              <ul>+1 323-913-4688</ul>


            </div>
          </Col>
          <Col className='col-xs-12 col-sm-6  col-md-4 col-lg-3'>
            <div className='single'>
              <div className='single_img'>
                <img src={require('./image/t3.jpg')}></img>
              </div>
              <p> SAME ROBINSOR</p>
              <li>FOUNDER</li>
              <ul>+1 323-913-4688</ul>
            </div>
          </Col>
          <Col className='col-xs-12 col-sm-6  col-md-4 col-lg-3'>
            <div className='single'>
              <div className='single_img'>
                <img src={require('./image/t4.jpg')}></img>
              </div>
              <p> SAME ROBINSOR</p>
              <li>FOUNDER</li>
              <ul>+1 323-913-4688</ul>
            </div>
          </Col>
          <Col className='col-xs-12 col-sm-6  col-md-4 col-lg-3'>
            <div className='single'>
              <div className='single_img'>
                <img src={require('./image/t5.jpg')}></img>
              </div>
              <p> SAME ROBINSOR</p>
              <li>FOUNDER</li>
              <ul>+1 323-913-4688</ul>
            </div>
          </Col>

        </Row>
      </Container>
      {/* end user pic info */}
      <div className='spacer'>

        {/* center */}
        <Container>
          <Row>
            <Col lg={12} className=''>
              <div className='gallery justify-content-center align-content-center d-flex'>
                <h2>WHAT WE OFFER</h2>
              </div>
            </Col>
          </Row>
        </Container>
        {/* end center */}
      </div>
      {/*  coffee img */}
      <Container>
        <Row>
          <Col className='col-xs-12 col-sm-6  col-md-4 col-lg-3'>
            <div className='icon'>
              <div className='icon_img'>
                <p><GiCoffeeCup></GiCoffeeCup></p>
              </div>
              <h3> TEA & COFFEE</h3>
              <li>You can always have some hot coffee & tea in our kitchen,
                available to all our clients.</li>
            </div>
          </Col>
          <Col className='col-xs-12 col-sm-6  col-md-4 col-lg-3'>
            <div className='icon'>
              <div className='icon_img'>
                <p><GiBathtub ></GiBathtub ></p>
              </div>
              <h3>HOT SHOWER</h3>
              <li>Visit Hostel is famous for clean and hot showers that you can have at any time of the day.</li>
            </div>
          </Col>
          <Col className='col-xs-12 col-sm-6  col-md-4 col-lg-3'>
            <div className='icon'>
              <div className='icon_img'>
                <p><TbAirConditioning ></TbAirConditioning ></p>
              </div>
              <h3> AIR CONDITION</h3>
              <li>All rooms at our hostel are equipped with reliable air conditioner systems.
              </li>
            </div>

          </Col>
          <Col className='col-xs-12 col-sm-6  col-md-4 col-lg-3'>
            <div className='icon'>
              <div className='icon_img'>
                <p><GiWashingMachine ></GiWashingMachine ></p>
              </div>
              <h3> WASHING MACHINE </h3>
              <li>Need to quickly wash your clothes? Our laundry is always at your service.</li>
            </div>
          </Col>

        </Row>
      </Container>
      <Container>
        <Row>
          <Col className='col-xs-12 col-sm-6  col-md-4 col-lg-3'>
            <div className='icon'>
              <div className='icon_img'>
                <p><FaWifi ></FaWifi ></p>
              </div>
              <h3> FREE WI-FI USE</h3>
              <li>Our hostel is equipped with free high-speed Wi-Fi that is available 24/7 in all rooms.</li>
            </div>
          </Col>
          <Col className='col-xs-12 col-sm-6  col-md-4 col-lg-3'>
            <div className='icon'>
              <div className='icon_img'>
                <p><PiCookingPotFill ></PiCookingPotFill ></p>
              </div>
              <h3>KITCHAN SHOW</h3>
              <li>Our kitchen provides a wide range of daily fresh and tasty meals to our clients.</li>
            </div>
          </Col>
          <Col className='col-xs-12 col-sm-6  col-md-4 col-lg-3'>
            <div className='icon'>
              <div className='icon_img'>
                <p><BsPlug ></BsPlug ></p>
              </div>
              <h3> IRINING PLUGINS</h3>
              <li>Use our ironing services to quickly made your clothes look splendid after laundry.</li>
            </div>

          </Col>
          <Col className='col-xs-12 col-sm-6  col-md-4 col-lg-3'>
            <div className='icon'>
              <div className='icon_img'>
                <p><GiLockers ></GiLockers ></p>
              </div>
              <h3>LOOKERS  AVAILABLE</h3>
              <li>If you carry any valuable items, feel free to store them in our hostel’s lockers.</li>
            </div>
          </Col>

        </Row>
      </Container>
      {/* end coffee */}
      <div className='spacer'>

        {/* our rooms */}
        <Container>
          <Row>
            <Col lg={12} className=''>
              <div className='gallery justify-content-center align-content-center d-flex'>
                <h2>OUR ROOM</h2>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
        <Row className='row-revrse'>
          <Col className='get1 col-xs-12 col-md-6'>
            {/* over----------------------------------------;;; */}
            <div className='over'>
              <img src={require('./image/11.jpg')} className='w-100' ></img>
            </div>
          </Col>
          <Col className='get col-xs-12 col-md-6 '>
            <div className='starr'>
              <h3>DOUBLE ROOM(PRIVETE)</h3>
              <div className=' d-flex star'>
                <p><FaStar ></FaStar ></p>
                <p><FaStar ></FaStar ></p>
                <p><FaStar ></FaStar ></p>
                <p><FaStar ></FaStar ></p>
                <a>4 COUSTMER REVIEW</a>


              </div>
              <li>Double room is one of the most popular choices at Visit Hostel. It includes one double bed with comfortable mattresses and bed linen, WC, and a TV set.</li>
              <button className='btn3'>MORE INFO</button>

            </div>
          </Col>

        </Row>
      </Container>
      <div className='spacer2'></div>

      <Container>
        <Row>
          <Col className='get1  col-xs-12 col-md-6 '>
            {/* over************************************ */}
            <div className='over'>
              <img src={require('./image/5.jpg')} className='w-100'></img>
            </div>
          </Col>
          <Col className='get col-xs-12 col-md-6 '>
            <div className='starr'>
              <h3>DOUBLE ROOM(PRIVETE)</h3>
              <div className=' d-flex star'>
                <p><FaStar ></FaStar ></p>
                <p><FaStar ></FaStar ></p>
                <p><FaStar ></FaStar ></p>
                <p><FaStar ></FaStar ></p>
                <a>4 COUSTMER REVIEW</a>


              </div>
              <li>Double room is one of the most popular choices at Visit Hostel. It includes one double bed with comfortable mattresses and bed linen, WC, and a TV set.</li>
              <button className='btn3'>MORE INFO</button>

            </div>
          </Col>

        </Row>
      </Container>
      <div className='bgtube'>
        <div className='spacer'>
          <Container>
            <Row>
              <Col lg={12} className=''>
                <div className=' spacer2 gallery justify-content-center align-content-center d-flex'>
                  <h2>WHAT PEOPLE SAY</h2>
                </div>
              </Col>
            </Row>
          </Container>
          <Container>
            <Row>
              <Col className='col-xs-12 col-sm-6 col-lg-4'>
                <div className='men'>
                  <div className='men_img'>
                    <img src={require('./image/u1.jpg')}></img>
                  </div>
                  <p>I had a fantastic experience at this hostel; I was very impressed with the receptionists and housekeeping staff. Laureen was especially helpful during checking out after a busy week.</p>
                  <h5>JANE WOOD</h5>

                </div>
              </Col>
              <Col xs={12} sm={6} lg={4}>
                <div className='men'>
                  <div className='men_img'>
                    <img src={require('./image/u2.jpg')}></img>
                  </div>
                  <p>The staff was wonderful! We had a very fun time in the city. I can't say enough nice things about the staff. They were all very pleasant and accommodating. We look forward to coming back here again.</p>
                  <h5>JANE WOOD</h5>

                </div>
              </Col>
              <Col xs={12} sm={6} lg={4} className='col-md-align-item-center' >
                <div className='men'>
                  <div className='men_img'>
                    <img src={require('./image/u1.jpg')}></img>
                  </div>
                  <p>I had a fantastic experience at this hostel; I was very impressed with the receptionists and housekeeping staff. Laureen was especially helpful during checking out after a busy week.</p>
                  <h5>JANE WOOD</h5>

                </div>
              </Col>

            </Row>
          </Container>




        </div>

      </div>
      <div className='spacer'>
        <Container>
          <Row>
            <Col lg={12} className=''>
              <div className='gallery justify-content-center align-content-center d-flex'>
                <h2>MORE THAN 10 YEARS OF FOLLOWING THE DREAM</h2>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
        <Row>
          <Col xs={12} sm={6} lg={4}>
            <div className='think'>
              <h1>12</h1>
              <h2>AWARDS</h2>

            </div>
          </Col>
          <Col xs={12} sm={6} lg={4}>
            <div className='think'>
              <h1>62</h1>
              <h2>AWARDS</h2>
            </div>
          </Col>
          <Col xs={12} sm={6} lg={4}>
            <div className='think'>
              <h1>1K</h1>
              <h2>AWARDS</h2>
            </div>
          </Col>

        </Row>
      </Container>
      <div className='spacer'>
        <Container>
          <Row>
            <Col lg={12} className=''>
              <div className='gallery justify-content-center align-content-center d-flex'>
                <h2>GALLERY</h2>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      
    <Container>
      <Row>
        <Col>
        <OwlCarousel className='owl-theme' autoplay={1000} loop margin={10}  nav={false} items={4}>
    <div class='item'>
      <div>
        <img src={ require('./image/g1.jpg')}></img>
        </div>
    </div>
    <div class='item'>
    <div>
        <img src={ require('./image/g2.jpg')}></img>
        </div>
    </div>
    <div class='item'>
    <div>
        <img src={ require('./image/g3.jpg')}></img>
        </div>
    </div>
    <div class='item'>
    <div>
        <img src={ require('./image/g4.jpg')}></img>
        </div>
    </div>
    <div class='item'>
    <div>
        <img src={ require('./image/g5.jpg')}></img>
        </div>
    </div>
    <div class='item'>
    <div>
        <img src={ require('./image/g1.jpg')}></img>
        </div>
    </div>
    <div class='item'>
    <div>
        <img src={ require('./image/g2.jpg')}></img>
        </div>
    </div>
    <div class='item'>
    <div>
        <img src={ require('./image/g3.jpg')}></img>
        </div>
    </div>
    <div class='item'>
    <div>
        <img src={ require('./image/g4.jpg')}></img>
        </div>
    </div>
</OwlCarousel>
        
        
        </Col>
      </Row>
    </Container>
 

      <div className='spacer2'></div>
      <div className='footer_c '>
        <Container >
          <Row>
            <Col className='col-xs-12 col-sm-6 col-md-4  d-sm-d-flex'>
              <div className='fot fote'>
                <h2>CONTACT US</h2>
                <p><FaPhoneAlt></FaPhoneAlt> <span>+323 913 4688</span></p>
                <p><MdOutlineEmail></MdOutlineEmail> <span>info@ demoilnk.com</span></p>
                <p><FaLocationArrow ></FaLocationArrow > <span>4730 Crystal Springs Dr, Los Angeles, 90027</span></p>
              </div>
            </Col>
            <Col className='col-xs-12 col-sm-6 col-md-4'>
              <div className='fot'>
                <div className='post_info'>
                <h2>POPULAR NEWS</h2>
                <a>Hostel or Hotel: What to Choosethat cold and Why</a>
                <li>MAY 04,2023</li>
                <a>our gaide for travelers on a badget</a>
                <li>MAY 04,2023</li>
                </div>
             </div>
            </Col>
            <Col className='col-xs-12 col-sm-6 col-md-4'>
              <div className='fot'>
                <h2 className='mso'>QUICK LINKS</h2>
                <div className='two_sec d-flex'>
                  <div className='p-1'>
                    <p><a><GoDotFill></GoDotFill></a>about us</p>
                    <p><a><GoDotFill></GoDotFill></a>our rooms</p>
                    <p><a><GoDotFill></GoDotFill></a>our team</p>
                  </div>
                  <div className='p-2'>
                    <p><a><GoDotFill></GoDotFill></a>blog</p>
                    <p><a><GoDotFill></GoDotFill></a>gallery</p>
                  </div>

                </div>
                <div className=''>
                <button className='btn4'>MORE INFO</button>
              


                </div>

              </div>
            </Col>

          </Row>
        </Container>

      </div>





    </div>

  );
}

export default App;
