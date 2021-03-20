import React, { useState, useEffect } from 'react';
import Logo from '../../../assets/eeql_logo.png'
import Download from '../../../assets/apple-brands.png'
import Introduction from '../../../assets/eeql-1-gif.gif'
import Endpoint from '../../../assets/eeql-2-gif.gif'
import Git from '../../../assets/github-brands.png'
import LI from '../../../assets/linkedin-brands.png'
import { AwesomeButton, AwesomeButtonProgress, AwesomeButtonSocial } from 'react-awesome-button';
import "react-awesome-button/dist/styles.css";
import './Landing.css';

const Landing = () => {
    return (
      <div className="landing-div">
        <br />
        <img className="logo" src={Logo} alt="eeQL" />
        <i><div className='subhead'>"A Reliable Endpoint Test Creation Suite"</div></i> 
        <br/>
        <div className="button-div">
          <AwesomeButtonSocial type="github" href="https://github.com/oslabs-beta/eeQL">SOURCE</AwesomeButtonSocial>
          <AwesomeButton type="secondary" ripple={true}>
            <a
              href="https://github.com/oslabs-beta/eeQL/releases/download/1.0/eeQL-1.0.0.dmg"
              style={{ textDecoration: "none", color: "black" }}
              download
            >
              <img src={Download} width="15px" style={{margin: '0px 5px 5px 0px'}} /> DOWNLOAD
            </a>
          </AwesomeButton>
        </div>
        <br />
        <div className="introduction-div">
          <img className="introduction-gif" src={Introduction} width="600px" />
          <div className="introduction-text">
            <i><h3 id='intro'>Seamless Integration</h3></i>
            <br/>
            <h5 id='intro'>Getting Started</h5>
            <p id='intro'>Import your file, select your desired local port and within moments you have access to an interface created to facilitate test driven development that requires no coding!</p>
            <p id='intro'><i>eeQL</i> will automatically create, display and locate testing files within your uploaded project to facilitate a <i>seamless, efficient UI</i> geared towards reliable test creation and supplementing developers within TDD environments.</p>
          </div>
        </div>
        <div className="endpoint-div">
          <img className="endpoint-gif" src={Endpoint} width="600px" />
          <div className="endpoint-text">
            <i><h3 id='endpoint'>REST/GraphQL Compatiability</h3></i>
            <br/>
            <h5 id='endpoint'>eeQL Test Builder Module</h5>
            <p id='endpoint'>Within the REST and GraphQL <i>Test Builder Module</i>, you're prompted with an option to upload your server file. This allows eeQL to accurately build test to fit the frameworks required in any project.</p>
            <p id='endpoint'>To properly access the necessary structures require for modeling and creating reliable GraphQL endpoint tests, <i>eeQL</i> prompts you to upload an additional schema file to accurately devise expected i/o's in test creation.</p>
          </div>
        </div>
        <div className="footer-div">
            <div className='footer-social'>
              <div id='social-div'>Ramtin Khoee <div id='social-icon'>
                <a href="https://github.com/Rahmteen"><img id='github-logo'src={Git} alt="Ramtin Khoee" style={{marginRight: '10px'}}/></a>
                <a href="https://linkedin.com/in/ramtinkhoee"><img id='github-logo'src={LI} alt="Ramtin Khoee"/></a>
                </div>
              </div>
              <div id='social-div'>Abu Fofanah <div id='social-icon'>
                <a href="https://github.com/bubakarrr"><img id='github-logo'src={Git} alt="Abu Fofanah" style={{marginRight: '10px'}}/></a>
                <a href="https://github.com/bubakarrr"><img id='github-logo'src={LI} alt="Abu Fofanah"/></a>
                </div>
              </div>
              <div id='social-div'>Kim Spicer <div id='social-icon'>
                <a href="https://github.com/justspicee"><img id='github-logo'src={Git} alt="Kim Spicer" style={{marginRight: '10px'}}/></a>
                <a href="https://github.com/justspicee"><img id='github-logo'src={LI} alt="Kim Spicer"/></a>
                </div>
              </div>
              <div id='social-div'>Jason Speare <div id='social-icon'>
                <a href="https://github.com/jcspeare"><img id='github-logo'src={Git} alt="Jason Speare" style={{marginRight: '10px'}}/></a>
                <a href="https://www.linkedin.com/in/jason-speare-12095383/"><img id='github-logo'src={LI} alt="Jason Speare"/></a>
                </div>
              </div>
            </div>
        </div>
      </div>
    );
}

export default Landing