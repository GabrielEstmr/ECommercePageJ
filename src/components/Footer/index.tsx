import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import { Footer } from './styles';

import FacebookLogo from './assets/facebook-logo.svg';
import InstagramLogo from './assets/instagram-logo.svg';
import LinkedInLogo from './assets/linkedin-logo.svg';
import CompanyLogo from './assets/company-footer-logo.svg';



interface InputGroupProps {
    themeColor: string;
}

const FooterPage: React.FC<InputGroupProps> = ({ themeColor }) => (


    <Footer themeColor={themeColor}>
        <Container fluid="md">
            <Row>
                <Col>
                    <div className={'container-content-left'}>
                        <img src={CompanyLogo}></img>
                    </div>
                </Col>
                <Col>
                    <div className={'container-content-right'}>
                        <img src={FacebookLogo}></img>
                        <img src={InstagramLogo}></img>
                        <img src={LinkedInLogo}></img>
                    </div>
                </Col>
            </Row>
        </Container>
    </Footer>


);

export default FooterPage;





