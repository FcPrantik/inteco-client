import React from 'react';
import {Container, Row} from "react-bootstrap";
import useServices from '../../hooks/useServices';
import ServicesDetail from "../ServicesDetail/ServicesDetail";

const Services = () => {
    
    const [services] = useServices();

    return (
        <>
            <Container fluid={true} className="service-bg text-center p-5" style={{marginTop: '100px'}}>
                <Container>
                    <h6 className="service-title">Our Services</h6>
                    <h3 className="mb-5">What We Offer</h3>
                    <Row>
                        {
                            services.map(service  => <ServicesDetail 
                                service={service} 
                                key={service._id}
                                > 
                                </ServicesDetail>)
                        }
                    </Row>
                </Container>
            </Container>

        </>
    );
};

export default Services;