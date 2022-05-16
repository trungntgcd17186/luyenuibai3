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
import ReasonsItem1 from './assets/images/ReasonsItem1.svg';
import ReasonsItem2 from './assets/images/ReasonsItem2.svg';
import ReasonsItem3 from './assets/images/ReasonsItem3.svg';
import Image3Steps from './assets/images/Image3Steps.svg';
import UserIcon from './assets/images/UserIcon.svg';
import BankIcon from './assets/images/BankIcon.svg';
import CardBankIcon from './assets/images/CardBankIcon.svg';
import FeaturesContent1 from './assets/images/FeaturesContent1.svg';
import FeaturesContent2 from './assets/images/FeaturesContent2.svg';
import FeaturesContent3 from './assets/images/FeaturesContent3.svg';
import FeaturesContent4 from './assets/images/FeaturesContent4.svg';

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
            <div className='nav-item'>About</div>
            <div className='nav-item'>Features</div>
            <div className='nav-item'>Download</div>
            <div className='nav-item'>Support</div>
            <div className='nav-item'>
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
            <div className='sign-in-btn'>Sign In</div>
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
              <div className='flex' style={{ alignItems: 'center' }}>
                <img src={PlayIcon} alt='icon' />
                <div className='play-btn-title'>Take a trip</div>
              </div>
              <img style={{ marginLeft: '24px' }} src={Line} alt='icon' />
              <Button className='get-started-btn'>
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

        <img className='footer-image' src={HeaderBackground} alt='icon' />
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
            <img src={ReasonsItem2} alt='icon' />
            <div className='reasons-item-title'>Free Transactions</div>
            <p className='reasons-item-description'>
              Every transactions in Peyme is free. You don’t worry about fees.
              Our profits base your satisfied and ads
            </p>
          </div>
          <div className='reasons-item'>
            <img src={ReasonsItem3} alt='icon' />
            <div className='reasons-item-title'>Private and secure </div>
            <p className='reasons-item-description'>
              None of your personcal data is ever collected or stored in our
              Peyme. Your history transaction just you see
            </p>
          </div>
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

      <div style={{ padding: '60px 108px' }}>
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

        <Row style={{ marginTop: '60px' }}>
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
    </div>
  );
}

export default App;
