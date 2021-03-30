import React, { useEffect, useState } from 'react';
import { ReactComponent as DeviceSVG } from './assets/img/devices.svg';
import { ReactComponent as AppStoreSVG } from './assets/img/appStore.svg';
import { ReactComponent as GooglePlaySVG } from './assets/img/googlePlay.svg';
import { Col, Row } from "react-bootstrap";
import './App.css';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

function App() {
  const { height, width } = useWindowDimensions();

  const text = "Practice Perfect Pitch. Learn to Read Music.";

  const handleClick = (source) => {
    alert(source);
    if (source === "ios") {
      
    } else {

    }
  }

  const policyClick = (link) => {
    if (link === "terms") {
      window.location.href = "https://tonalityapp.net/terms-of-service.html"
    } else if (link === "privacy") {
      window.location.href = "https://tonalityapp.net/privacy-policy.html"
    } else {
      window.location.href = "https://tonalityapp.net/acceptable-use-policy.html"
    }
  }

  return (
    <div className="App" style={{
        background: 'linear-gradient(170deg, #f2a19f, #FEC3A6 90%)',
        height,
      }}
    >       
      <header className="App-header">
        <h1>
          Tonality
        </h1>
        <header className="Main-content">
        <DeviceSVG style={{height: height/2, maxHeight: height < 900 ? 300 : undefined, maxWidth: width/2}}/>
        <div className="Text-content">
          <h4 style={{textAlign: 'center', marginBottom: 50}}>
            {text}
          </h4>
          <AppStoreSVG style={{maxWidth: width/2, cursor : 'pointer'}} onClick={() => handleClick("ios")}/>
          <GooglePlaySVG style={{height: 40, marginBottom: 20, maxWidth: 140, cursor : 'pointer'}} onClick={() => handleClick("android")}/>
                  <Row>
          <Col xs={4} md={4}>
            <h6 style={{textAlign: 'center', cursor : 'pointer'}} onClick={() => policyClick("terms")}>
              Terms of use
            </h6>
          </Col>
          <Col xs={4} md={4}>
            <h6 style={{textAlign: 'center', cursor : 'pointer'}} onClick={() => policyClick("privacy")}>
              Privacy Policy
            </h6>
          </Col>
          <Col xs={4} md={4}>
            <h6 style={{textAlign: 'center', cursor : 'pointer'}} onClick={() => policyClick("acceptable")}>
              Acceptable Use
            </h6>
          </Col>
        </Row>
        </div>
        </header>
      </header>        
    </div>
  );
}

export default App;
