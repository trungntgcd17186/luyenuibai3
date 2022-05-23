import { Button, Col, Row } from 'antd';
import 'antd/dist/antd.css';
import './App.css';
import AcbBank from './assets/images/AcbBank.png';
import AppleStore from './assets/images/AppleStore.svg';
import ArrowRightIcon from './assets/images/ArrowRightIcon.svg';
import BankIcon from './assets/images/BankIcon.svg';
import Banner from './assets/images/Banner.png';
import CardBankIcon from './assets/images/CardBankIcon.svg';
import DownIcon from './assets/images/DownIcon.svg';
import FeaturesBackground from './assets/images/FeaturesBackground.png';
import FeaturesContent1 from './assets/images/FeaturesContent1.png';
import FeaturesContent2 from './assets/images/FeaturesContent2.png';
import FeaturesContent3 from './assets/images/FeaturesContent3.png';
import FeaturesContent4 from './assets/images/FeaturesContent4.png';
import FooterLine from './assets/images/FooterLine.svg';
import GooglePlay from './assets/images/GooglePlay.svg';
import Gucci from './assets/images/Gucci.png';
import HeaderBackground from './assets/images/HeaderBackground.png';
import Image3Steps from './assets/images/Image3Steps.svg';
import Line from './assets/images/Line.svg';
import Logo from './assets/images/Logo.svg';
import LogoFooter from './assets/images/LogoFooter.svg';
import LogoSocial1 from './assets/images/LogoSocial1.svg';
import LogoSocial2 from './assets/images/LogoSocial2.svg';
import LogoSocial3 from './assets/images/LogoSocial3.svg';
import LogoSocial4 from './assets/images/LogoSocial4.svg';
import LogoSocial5 from './assets/images/LogoSocial5.svg';
import LogoSocial6 from './assets/images/LogoSocial6.svg';
import Nike from './assets/images/Nike.png';
import Phone from './assets/images/Phone.png';
import PlayIcon from './assets/images/PlayIcon.svg';
import Puma from './assets/images/Puma.png';
import ReasonsItem1 from './assets/images/ReasonsItem1.png';
import ReasonsItem2 from './assets/images/ReasonsItem2.png';
import ReasonsItem3 from './assets/images/ReasonsItem3.png';
import ShinhanBank from './assets/images/ShinhanBank.png';
import Support from './assets/images/Support.png';
import SupportIconBackground from './assets/images/SupportIconBackground.png';
import TpBank from './assets/images/TpBank.png';
import UserIcon from './assets/images/UserIcon.svg';

function App() {
  return (
    <div className='App'>
      {/* Header Section */}
      <div className='header-container container'>
        <Row>
          <Col xl={3}>
            <img src={Logo} alt='logo' />
          </Col>
          <Col xl={6} />
          <Col xl={9}>
            <div className='nav-container'>
              <div className='nav-item cursor'>About</div>
              <div className='nav-item cursor'>Features</div>
              <div className='nav-item cursor'>Download</div>
              <div className='nav-item cursor'>Support</div>
              <div className='nav-item cursor'>
                Partners
                <img className='arrow-down-icon' src={DownIcon} alt='icon' />
              </div>
            </div>
          </Col>

          <Col xl={3} offset={2}>
            <div className='sign-in-sign-up-container'>
              <div className='sign-in-btn cursor'>Sign In</div>
              <Button className='sign-up-btn'>Sign Up</Button>
            </div>
          </Col>
        </Row>

        <Row>
          <Col xl={10}>
            <div className='header-main-content-left'>
              <div>
                <div className='sign-up-heading'>
                  Monitor Balance Control Smart Life
                </div>
                <p className='sign-up-description'>
                  When the life too much things you need more than you have.
                  Let’s Peyme help your life to easier with smart payment
                </p>
              </div>
              <div className='header-content-btn-container'>
                <div className='header-content-take-a-trip-btn-container'>
                  <img className='cursor' src={PlayIcon} alt='icon' />
                  <div className='play-btn-title cursor'>Take a trip</div>
                </div>
                <img className='line-icon' src={Line} alt='icon' />
                <Button className='get-started-btn z-index-999'>
                  Get Started
                  <img src={ArrowRightIcon} alt='icon' />
                </Button>
              </div>
            </div>
          </Col>

          <Col xl={10} offset={4}>
            <div className='sign-up-banner-image-container'>
              <img className='sign-up-banner-image' src={Banner} alt='banner' />
            </div>
          </Col>
        </Row>

        <img className='header-background' src={HeaderBackground} alt='icon' />
      </div>
      {/* Reasons Section */}
      <div className='reasons-container container'>
        <Row>
          <div className='pey-me-heading-container'>
            <div className='reasons-heading'>Why you choose us?</div>
            <p className='reasons-description'>
              When the life too much things you need more than you have. Let
              Peyme help your life to easier with smart payment system
            </p>
          </div>
        </Row>
        <Row>
          <div className='reasons-items-container'>
            <div className='background-container'></div>
            <div className='reasons-item'>
              <img
                className='reasons-item-image'
                src={ReasonsItem1}
                alt='icon'
              />
              <div className='reasons-item-title'>Purchase One Touch</div>
              <p className='reasons-item-description'>
                Get a quick overview of all your transactions in our easy-to-use
                <br />
                Peyme in one touch
              </p>
            </div>
            <div className='reasons-item'>
              <img
                className='reasons-item-image'
                src={ReasonsItem2}
                alt='icon'
              />
              <div className='reasons-item-title'>Free Transactions</div>
              <p className='reasons-item-description'>
                Every transactions in Peyme is free. <br /> You don’t worry
                about fees. Our <br /> profits base your satisfied and ads
              </p>
            </div>
            <div className='reasons-item'>
              <img
                className='reasons-item-image'
                src={ReasonsItem3}
                alt='icon'
              />
              <div className='reasons-item-title'>Private and secure </div>
              <p className='reasons-item-description'>
                None of your personcal data is ever collected or stored in our
                Peyme. Your history transaction just you see
              </p>
            </div>
          </div>
        </Row>
      </div>
      <div className='container padding-top-bottom-100'>
        <Row>
          <Col xl={12}>
            <img src={Image3Steps} alt='content' />
          </Col>

          <Col xl={10} offset={2}>
            <div className='steps-heading'>Start Now With 3 Steps</div>
            <p className='steps-description'>
              Besome a Peyme customer in the easiest way just simple, fast and
              accurate steps. It won’t take your time to experience{' '}
            </p>
            <div className='steps-content'>
              <div className='steps-item-icon-container'>
                <img src={UserIcon} alt='icon' />
              </div>
              <div className='steps-item-content-container'>
                <div className='steps-content-title'>
                  Step 1: Create Your Account
                </div>
                <p className='steps-content-description'>
                  Signing up for your own Peyme account is easy and free. Just
                  connection with phone or gmail instandly
                </p>
              </div>
            </div>

            <div className='steps-content'>
              <div className='steps-item-icon-container'>
                <img src={BankIcon} alt='icon' />
              </div>
              <div className='steps-item-content-container'>
                <div className='steps-content-title'>
                  Step 2: Link Your Cards
                </div>
                <p className='steps-content-description'>
                  Link your preferred credit, debit or prepaid cards to your
                  Payme account.
                </p>
              </div>
            </div>

            <div className='steps-content'>
              <div className='steps-item-icon-container'>
                <img src={CardBankIcon} alt='icon' />
              </div>
              <div className='steps-item-content-container'>
                <div className='steps-content-title'>Step 3: All Done</div>
                <p className='steps-content-description'>
                  Thats all done. Now you can explore any apps, any webs that
                  are ours partnets to transfer with them
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </div>

      <div className='container padding-top-bottom-60'>
        <Row>
          <div className='pey-me-heading-container'>
            <div className='features-heading'>Features Just Peyme Has</div>
            <p className='features-description'>
              When the life too much things you need more than you have. Let’s
              Peyme help your life to easier with smart payment system
            </p>
          </div>

          <div className='features-background-container'>
            <img
              className='features-background'
              src={FeaturesBackground}
              alt='background'
            />
            <Col xl={11}>
              <div className='features-content'>
                <div>
                  <img
                    className='features-image'
                    src={FeaturesContent1}
                    alt='icon'
                  />
                </div>
                <div className='features-card-content-container'>
                  <div className='features-content-title'>2s to Complete</div>
                  <p className='features-content-description'>
                    With the Transaction Cloud Technology, send and receive
                    money break timing wall
                  </p>
                </div>
              </div>
            </Col>

            <Col xl={11} offset={2}>
              <div className='features-content'>
                <div>
                  <img
                    className='features-image'
                    src={FeaturesContent2}
                    alt='icon'
                  />
                </div>
                <div className='features-card-content-container'>
                  <div className='features-content-title'>No Hidden Fees</div>
                  <p className='features-content-description'>
                    Don’t worry about generated fees. Any transaction will
                    clearly analysis and daily reports
                  </p>
                </div>
              </div>
            </Col>
          </div>

          <Col xl={11}>
            <div className='features-content'>
              <div>
                <img
                  className='features-image'
                  src={FeaturesContent3}
                  alt='icon'
                />
              </div>
              <div className='features-card-content-container'>
                <div className='features-content-title'>Smart Combine</div>
                <p className='features-content-description'>
                  Auto linking your banking account to purchase everything you
                  want, don’t need to put all money in one place
                </p>
              </div>
            </div>
          </Col>

          <Col xl={11} offset={2}>
            <div className='features-content'>
              <div>
                <img
                  className='features-image'
                  src={FeaturesContent4}
                  alt='icon'
                />
              </div>
              <div className='features-card-content-container'>
                <div className='features-content-title'>Perfect Protection</div>
                <p className='features-content-description'>
                  Monitor transaction process help you prevent the tricks.
                  Provide multiple protection methods
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </div>

      <div className='container padding-top-bottom-60'>
        <Row align='middle'>
          <Col xl={9}>
            <div className='download-heading'>Use Peyme In Mobile</div>
            <p className='download-description'>
              We already support in multiple flatform to provide the best
              experiences, allow you to control the flow of currency with no
              more efforts. Let’s make the world easy to life
            </p>
            <div className='download-applestore-googleplay-btn-container'>
              <Button className='apple-store-btn'>
                <img src={AppleStore} alt='icon' /> Apple Store
              </Button>
              <Button className='google-play-btn'>
                <img src={GooglePlay} alt='icon' />
                Google Play
              </Button>
            </div>
          </Col>
          <Col xl={11} offset={4}>
            <img src={Phone} alt='phone' />
          </Col>
        </Row>
      </div>

      <div className='container padding-top-bottom-60'>
        <Row>
          <Col xl={12}>
            <img src={Support} alt='banner' />
          </Col>
          <Col xl={10} offset={1}>
            <div className='support-content-container'>
              <div className='support-heading'>Support</div>
              <div className='support-title'>
                Getting started for your benefits
              </div>
              <p className='support-description'>
                From signing up for an account to choosing a payment solution –
                Everyone have an supporter to solves any problems within 24
                hours
              </p>
              <Button className='support-btn'>Sign Up Now</Button>
              <img
                className='support-icon-background'
                src={SupportIconBackground}
                alt='icon'
              />
            </div>
          </Col>
        </Row>
      </div>

      <div className='container padding-bottom-100'>
        <Row justify='center' align='middle'>
          <Col xl={24}>
            <div className='partners-content-container'>
              <div className='partners-content-wrapper'>
                <div className='partners-heading'>Partners</div>
                <div className='partners-title'>
                  Powering payments for partners around the world
                </div>
                <p className='partners-description'>
                  Our partners create innovative platforms for merchants that
                  trust Payme to process their payments.
                </p>
              </div>
            </div>

            <div className='brand-partners-logo-container'>
              <img src={ShinhanBank} alt='brandLogo' />
              <img src={TpBank} alt='brandLogo' />
              <img src={AcbBank} alt='brandLogo' />
              <img src={Gucci} alt='brandLogo' />
              <img src={Nike} alt='brandLogo' />
              <img src={Puma} alt='brandLogo' />
            </div>
          </Col>
        </Row>
      </div>
      <div className='footer-container'>
        <Row>
          <Col xl={6}>
            <h4 className='footer-category-title'>Product</h4>
            <ul className='footer-ul-container'>
              <li className='footer-category-item'>
                <a href='/#'>Desktop Wallet</a>
              </li>
              <li className='footer-category-item'>
                <a href='/#'>Mobile Wallet</a>
              </li>
              <li className='footer-category-item'>
                <a href='/#'>Trezor Hardware Wallet</a>
              </li>
              <li className='footer-category-item'>
                <a href='/#'>Exodus Crypto Apps</a>
              </li>
            </ul>
          </Col>
          <Col xl={6}>
            <h4 className='footer-category-title'>Support</h4>
            <ul className='footer-ul-container'>
              <li className='footer-category-item'>
                <a href='/#'>Knowledge base</a>
              </li>
              <li className='footer-category-item'>
                <a href='/#'>Legal Inquiries</a>
              </li>
              <li className='footer-category-item'>
                <a href='/#'>Status</a>
              </li>
              <li className='footer-category-item'>
                <a href='/#'>Videos</a>
              </li>
              <li className='footer-category-item'>
                <a href='/#'>Blog</a>
              </li>
            </ul>
          </Col>
          <Col xl={6}>
            <h4 className='footer-category-title'>Company</h4>
            <ul className='footer-ul-container'>
              <li className='footer-category-item'>
                <a href='/#'>About us</a>
              </li>
              <li className='footer-category-item'>
                <a href='/#'>Investors</a>
              </li>
              <li className='footer-category-item'>
                <a href='/#'>Careers</a>
              </li>
              <li className='footer-category-item'>
                <a href='/#'>Contact Us</a>
              </li>
              <li className='footer-category-item'>
                <a href='/#'>Brand guidelines</a>
              </li>
            </ul>
          </Col>
          <Col xl={6}>
            <h4 className='footer-category-title'>Subscribe to Peyme</h4>
            <ul className='footer-ul-container'>
              <li className='footer-category-item'>
                <a href='/#'>
                  Sign up to receive our newsletter with updates about your
                  wallet.
                </a>
              </li>
            </ul>

            <Button className='footer-sign-up-btn'>Sign Up</Button>
          </Col>

          <Col xl={12}>
            <div className='logo-footer-container'>
              <img src={LogoFooter} alt='icon' />
              <img className='footer-line-icon' src={FooterLine} alt='icon' />
              <div className='footer-company-copyright'>
                Copyright © 2021 Peyme Movement, Inc. <br />
                Peyme was co-founded by Thanh Thien and Thanh Long.
              </div>
            </div>
          </Col>
          <Col xl={12}>
            <div className='footer-social-contact-container'>
              <div className='footer-social-contact-wrapper'>
                <a href='/#'>
                  <img width={20} src={LogoSocial1} alt='icon' />
                </a>

                <a href='/#'>
                  <img width={20} src={LogoSocial2} alt='icon' />
                </a>

                <a href='/#'>
                  <img width={20} src={LogoSocial3} alt='icon' />
                </a>

                <a href='/#'>
                  <img width={20} src={LogoSocial4} alt='icon' />
                </a>

                <a href='/#'>
                  <img width={20} src={LogoSocial5} alt='icon' />
                </a>

                <a href='/#'>
                  <img width={10} src={LogoSocial6} alt='icon' />
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default App;
