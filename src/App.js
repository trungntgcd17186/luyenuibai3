import 'antd/dist/antd.css';
import './App.css';
import { Row, Col, Button } from 'antd';
import Logo from './assets/images/Logo.svg';
import DownIcon from './assets/images/DownIcon.svg';
import Banner from './assets/images/Banner.svg';
import Line from './assets/images/Line.svg';
import PlayIcon from './assets/images/PlayIcon.svg';
import ArrowRightIcon from './assets/images/ArrowRightIcon.svg';
import Footer from './assets/images/Footer.svg';

function App() {
  return (
    <div className='App'>
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

      <img className='footer-image' src={Footer} alt='icon'></img>
    </div>
  );
}

export default App;
