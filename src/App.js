import 'antd/dist/antd.css';
import './App.css';
import { Row, Col, Button } from 'antd';
import Logo from './assets/images/Logo.svg';
import DownIcon from './assets/images/DownIcon.svg';
import Banner from './assets/images/Banner.svg';
import Line from './assets/images/Line.svg';
import PlayIcon from './assets/images/PlayIcon.svg';
import ArrowRightIcon from './assets/images/ArrowRightIcon.svg';
import HeaderBackground from './assets/images/HeaderBackground.png';
import ReasonsItem1 from './assets/images/ReasonsItem1.png';
import ReasonsItem2 from './assets/images/ReasonsItem2.png';
import ReasonsItem3 from './assets/images/ReasonsItem3.png';
import ReasonsBackground from './assets/images/ReasonsBackground.png';
import Image3Steps from './assets/images/Image3Steps.svg';
import UserIcon from './assets/images/UserIcon.svg';
import BankIcon from './assets/images/BankIcon.svg';
import CardBankIcon from './assets/images/CardBankIcon.svg';
import FeaturesContent1 from './assets/images/FeaturesContent1.svg';
import FeaturesContent2 from './assets/images/FeaturesContent2.svg';
import FeaturesContent3 from './assets/images/FeaturesContent3.svg';
import FeaturesContent4 from './assets/images/FeaturesContent4.svg';
import FeaturesBackground from './assets/images/FeaturesBackground.png';
import Phone from './assets/images/Phone.png';
import AppleStore from './assets/images/AppleStore.svg';
import GooglePlay from './assets/images/GooglePlay.svg';
import Support from './assets/images/Support.png';
import SupportIconBackground from './assets/images/SupportIconBackground.png';
import BrandPartners from './assets/images/BrandPartners.png';
import LogoFooter from './assets/images/LogoFooter.svg';
import FooterLine from './assets/images/FooterLine.svg';
import LogoSocial1 from './assets/images/LogoSocial1.svg';
import LogoSocial2 from './assets/images/LogoSocial2.svg';
import LogoSocial3 from './assets/images/LogoSocial3.svg';
import LogoSocial4 from './assets/images/LogoSocial4.svg';
import LogoSocial5 from './assets/images/LogoSocial5.svg';
import LogoSocial6 from './assets/images/LogoSocial6.svg';

function App() {
  return (
    <div className='App'>
      <div className='header-container'>
        <Row className='flex' style={{ padding: '36px 44px 0px 44px' }}>
          <Col xl={1} />
          <Col xl={3}>
            <img src={Logo} alt='logo' />
          </Col>
          <Col xl={6} />
          <Col className='nav-container' xl={9}>
            <div className='nav-item cursor'>About</div>
            <div className='nav-item cursor'>Features</div>
            <div className='nav-item cursor'>Download</div>
            <div className='nav-item cursor'>Support</div>
            <div className='nav-item cursor'>
              Partners
              <img
                style={{ marginLeft: '9px', marginTop: '3px' }}
                src={DownIcon}
                alt='icon'
              />
            </div>
          </Col>
          <Col xl={1} />
          <Col xl={3} className='sign-in-sign-up-container'>
            <div className='sign-in-btn cursor'>Sign In</div>
            <Button className='sign-up-btn'>Sign Up</Button>
          </Col>
          <Col xl={1}></Col>
        </Row>

        <Row className='sign-up-content-container'>
          <Col xl={1} />
          <Col xl={10} style={{ paddingBottom: '50px' }}>
            <div>
              <div className='sign-up-heading'>
                Monitor Balance Control Smart Life
              </div>
              <p className='sign-up-description'>
                When the life too much things you need more than you have. Let’s
                Peyme help your life to easier with smart payment
              </p>
            </div>
            <div
              className='flex'
              style={{ alignItems: 'center', marginTop: '56px' }}
            >
              <div
                className='flex z-index-999'
                style={{ alignItems: 'center' }}
              >
                <img className='cursor' src={PlayIcon} alt='icon' />
                <div className='play-btn-title cursor'>Take a trip</div>
              </div>
              <img style={{ marginLeft: '24px' }} src={Line} alt='icon' />
              <Button className='get-started-btn z-index-999'>
                Get Started
                <img src={ArrowRightIcon} alt='icon' />
              </Button>
            </div>
          </Col>
          <Col xl={2} />
          <Col xl={10} style={{ marginLeft: '40px' }}>
            <img className='sign-up-banner-image' src={Banner} alt='banner' />
          </Col>
          <Col xl={1} />
        </Row>

        <img className='header-background' src={HeaderBackground} alt='icon' />
      </div>
      <div className='reasons-container'>
        <Row
          style={{
            width: '45%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <div className='reasons-heading'>Why you choose us?</div>
          <p className='reasons-description'>
            When the life too much things you need more than you have. Let Peyme
            help your life to easier with smart payment system
          </p>
        </Row>
        <Row className='reasons-items-container'>
          <div className='reasons-item'>
            <img src={ReasonsItem1} alt='icon' />
            <div className='reasons-item-title'>Purchase One Touch</div>
            <p className='reasons-item-description'>
              Get a quick overview of all your transactions in our easy-to-use
              Peyme in one touch
            </p>
          </div>
          <div className='reasons-item'>
            <img style={{ marginTop: '20px' }} src={ReasonsItem2} alt='icon' />
            <div className='reasons-item-title'>Free Transactions</div>
            <p className='reasons-item-description'>
              Every transactions in Peyme is free. You don’t worry about fees.
              Our profits base your satisfied and ads
            </p>
          </div>
          <div className='reasons-item'>
            <img style={{ marginTop: '20px' }} src={ReasonsItem3} alt='icon' />
            <div className='reasons-item-title'>Private and secure </div>
            <p className='reasons-item-description'>
              None of your personcal data is ever collected or stored in our
              Peyme. Your history transaction just you see
            </p>
          </div>
          <img
            className='reasons-background'
            src={ReasonsBackground}
            alt='background'
          />
        </Row>
      </div>
      <Row className='steps-container'>
        <Col xl={12}>
          <img src={Image3Steps} alt='content' />
        </Col>
        <Col xl={2} />
        <Col xl={10}>
          <div className='steps-heading'>Start Now With 3 Steps</div>
          <p className='steps-description'>
            Besome a Peyme customer in the easiest way just simple, fast and
            accurate steps. It won’t take your time to experience{' '}
          </p>
          <div className='steps-content'>
            <div style={{ width: '20%' }}>
              <img src={UserIcon} alt='icon' />
            </div>
            <div style={{ width: '80%' }}>
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
            <div style={{ width: '20%' }}>
              <img src={BankIcon} alt='icon' />
            </div>
            <div style={{ width: '80%' }}>
              <div className='steps-content-title'>Step 2: Link Your Cards</div>
              <p className='steps-content-description'>
                Link your preferred credit, debit or prepaid cards to your Payme
                account.
              </p>
            </div>
          </div>

          <div className='steps-content'>
            <div style={{ width: '20%' }}>
              <img src={CardBankIcon} alt='icon' />
            </div>
            <div style={{ width: '80%' }}>
              <div className='steps-content-title'>Step 3: All Done</div>
              <p className='steps-content-description'>
                Thats all done. Now you can explore any apps, any webs that are
                ours partnets to transfer with them
              </p>
            </div>
          </div>
        </Col>
      </Row>

      <div style={{ padding: '60px 108px' }} className='abc'>
        <div
          className='features-container'
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <div className='features-heading'>Features Just Peyme Has</div>
          <p className='features-description'>
            When the life too much things you need more than you have. Let’s
            Peyme help your life to easier with smart payment system
          </p>
        </div>

        <Row style={{ marginTop: '60px', position: 'relative' }}>
          <img
            className='features-background'
            src={FeaturesBackground}
            alt='background'
          />
          <Col xl={11} className='features-content'>
            <div className='flex'>
              <div>
                <img src={FeaturesContent1} alt='icon' />
              </div>
              <div style={{ marginTop: '28px' }}>
                <div className='features-content-title'>2s to Complete</div>
                <p className='features-content-description'>
                  With the Transaction Cloud Technology, send and receive money
                  break timing wall
                </p>
              </div>
            </div>
          </Col>
          <Col xl={2}></Col>
          <Col xl={11} className='features-content'>
            <div className='flex'>
              <div>
                <img src={FeaturesContent2} alt='icon' />
              </div>
              <div style={{ marginTop: '28px' }}>
                <div className='features-content-title'>No Hidden Fees</div>
                <p className='features-content-description'>
                  Don’t worry about generated fees. Any transaction will clearly
                  analysis and daily reports
                </p>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xl={11} className='features-content'>
            <div className='flex'>
              <div>
                <img src={FeaturesContent3} alt='icon' />
              </div>
              <div style={{ marginTop: '28px' }}>
                <div className='features-content-title'>Smart Combine</div>
                <p className='features-content-description'>
                  Auto linking your banking account to purchase everything you
                  want, don’t need to put all money in one place
                </p>
              </div>
            </div>
          </Col>
          <Col xl={2}></Col>
          <Col xl={11} className='features-content'>
            <div className='flex'>
              <div>
                <img src={FeaturesContent4} alt='icon' />
              </div>
              <div style={{ marginTop: '28px' }}>
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
      <Row style={{ padding: '100px 108px 60px 108px' }}>
        <Col
          xl={12}
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <div className='download-heading'>Use Peyme In Mobile</div>
          <p className='download-description'>
            We already support in multiple flatform to provide the best
            experiences, allow you to control the flow of currency with no more
            efforts. Let’s make the world easy to life{' '}
          </p>
          <div className='flex' style={{ marginTop: '40px' }}>
            <Button className='apple-store-btn'>
              <img src={AppleStore} alt='icon' /> Apple Store
            </Button>
            <Button className='google-play-btn'>
              <img src={GooglePlay} alt='icon' />
              Google Play
            </Button>
          </div>
        </Col>
        <Col xl={12}>
          <img src={Phone} alt='phone' />
        </Col>
      </Row>

      <Row style={{ padding: '67px 0px 107px 0px' }}>
        <Col xl={12}>
          <img src={Support} alt='banner' />
        </Col>
        <Col
          xl={12}
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <div style={{ width: '50%', position: 'relative' }}>
            <div className='support-heading'>Support</div>
            <div className='support-title'>
              Getting started for your benefits
            </div>
            <p className='support-description'>
              From signing up for an account to choosing a payment solution –
              Everyone have an supporter to solves any problems within 24 hours
            </p>
            <Button className='support-btn'>Sign Up Now</Button>
            <img
              style={{
                width: '228px',
                height: '66px',
                position: 'absolute',
                bottom: '-20%',
                right: '-30%',
              }}
              src={SupportIconBackground}
              alt='icon'
            />
          </div>
        </Col>
      </Row>

      <Row style={{ padding: '0px 108px 100px 108px' }}>
        <Col
          xl={24}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <div className='partners-content-container'>
            <div className='partners-heading'>Partners</div>
            <div className='partners-title'>
              Powering payments for partners around the world
            </div>
            <p className='partners-description'>
              Our partners create innovative platforms for merchants that trust
              Payme to process their payments.
            </p>
          </div>
          <img
            style={{ marginTop: '37px' }}
            src={BrandPartners}
            alt='brandLogo'
          />
        </Col>
      </Row>

      <Row
        style={{
          padding: '46px 108px',
          backgroundColor: '#0D2C7B',
        }}
      >
        <Col xl={24} style={{ display: 'flex', paddingBottom: '72px' }}>
          <Col xl={6} className='footer-category-container'>
            <div className='footer-category-title'>Product</div>
            <div className='footer-category-item cursor'>Desktop Wallet</div>
            <div className='footer-category-item cursor'>Mobile Wallet</div>
            <div className='footer-category-item cursor'>
              Trezor Hardware Wallet
            </div>
            <div className='footer-category-item cursor'>
              Exodus Crypto Apps
            </div>
          </Col>
          <Col xl={6}>
            <div className='footer-category-title'>Support</div>
            <div className='footer-category-item cursor'>Support</div>
            <div className='footer-category-item cursor'>Knowledge base</div>
            <div className='footer-category-item cursor'>Legal Inquiries</div>
            <div className='footer-category-item cursor'>Status</div>
            <div className='footer-category-item cursor'>Videos</div>
            <div className='footer-category-item cursor'>Blog</div>
          </Col>
          <Col xl={6}>
            <div className='footer-category-title'>Company</div>
            <div className='footer-category-item cursor'>About us</div>
            <div className='footer-category-item cursor'>Investors</div>
            <div className='footer-category-item cursor'>Careers</div>
            <div className='footer-category-item cursor'>Contact Us</div>
            <div className='footer-category-item cursor'>Brand guidelines</div>
          </Col>
          <Col xl={6}>
            <div className='footer-category-title'>Subscribe to Peyme</div>
            <div className='footer-category-item'>
              Sign up to receive our newsletter with updates about your wallet.
            </div>
            <Button className='footer-sign-up-btn'>Sign Up</Button>
          </Col>
        </Col>

        <Col xl={24} style={{ display: 'flex' }}>
          <Col
            xl={12}
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <img src={LogoFooter} alt='icon' />
            <img
              style={{ marginLeft: '36px', marginRight: '36px' }}
              src={FooterLine}
              alt='icon'
            />
            <div className='footer-company-copyright'>
              Copyright © 2021 Peyme Movement, Inc. <br />
              Peyme was co-founded by Thanh Thien and Thanh Long.
            </div>
          </Col>
          <Col xl={12} style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <div className='footer-social-contact-container'>
              <img className='cursor' width={20} src={LogoSocial1} alt='icon' />
              <img className='cursor' width={20} src={LogoSocial2} alt='icon' />
              <img className='cursor' width={20} src={LogoSocial3} alt='icon' />
              <img className='cursor' width={20} src={LogoSocial4} alt='icon' />
              <img className='cursor' width={20} src={LogoSocial5} alt='icon' />
              <img className='cursor' width={10} src={LogoSocial6} alt='icon' />
            </div>
          </Col>
        </Col>
      </Row>
    </div>
  );
}

export default App;
