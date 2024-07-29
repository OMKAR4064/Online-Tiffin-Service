import { Button, Card, Col, Row } from "react-bootstrap";
import "../../styles/HeaderStyle.css";
import "../../styles/HomeStyle.css";
import { Link } from "react-router-dom";

export function AboutUs() {
    return (
        <div className="aboutUs">
            <div className="mt-5 mb-3">
                <h1 className="text-center">Know About Us</h1>
            </div>

            <Row className="mb-5">
                <Col xs={12} md={6}>
                    <Card>
                        <Card.Img src='https://www.shutterstock.com/image-vector/illustration-famous-indian-monument-landmark-600nw-1360934009.jpg' alt="Loading" />
                    </Card>
                </Col>
                <Col xs={12} md={6} className="d-flex align-items-center">
                    <div>
                        <p className="text-wrap">
                            Since 1890, Dressed in white outfit and traditional Gandhi Cap, Mumbai Army of 5,000 Dabbawalas fulfilling the hunger of almost 200,000 Mumbaikar with home-cooked food that is lug between home and office daily. For more than a century our team have been part of this grime-ridden metropolis-of-dreams.
                        </p>
                        <p className="text-wrap">
                            About 125 years back, a Parsi banker wanted to have home cooked food in office and gave this responsibility to the first ever Dabbawala. Many people liked the idea and the demand for Dabba delivery soared. It was all informal and individual effort in the beginning, but visionary Mahadeo Havaji Bachche saw the opportunity and started the lunch delivery service in its present team-delivery format with 100 Dabbawalas.
                        </p>
                        <p className="text-wrap">
                            As the city grew, the demand for Dabba delivery grew too. The coding system created by our forefather is still prominent in 21st century. Initially it was simple colour coding but now since Mumbai is widely spread metro with 3 local train routes, our coding has also evolved into alpha numeric characters.
                        </p>
                    </div>
                </Col>
            </Row>

            <div className="text-center mb-5">
                <h1>Mumbai Dabbawala</h1>
                <h1>All About The Developer</h1>
            </div>

            <Row className="justify-content-center">
                <Col sm={6} lg={4} xl={3} className="mb-4">
                    <Card>
                        <Card.Img variant="top" src={`https://media.licdn.com/dms/image/D4D03AQGnPFAQaEy1Gg/profile-displayphoto-shrink_800_800/0/1708326336162?e=1721865600&v=beta&t=MNdYPiK0Tp3N0xqrQ4Nw8jAhBMcqgNhzeAI1QL_qZs8`} alt="Image Loading" />
                        <Card.Body>
                            <div className="d-flex justify-content-between">
                                <Link to="#" className="yellow-text">LinkedIn</Link>
                                <Link to="#" className="yellow-text">Portfolio</Link>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={6} lg={4} xl={3} className="mb-4">
                    <Card>
                        <Card.Img variant="top" src={`https://media.licdn.com/dms/image/D4D03AQGnPFAQaEy1Gg/profile-displayphoto-shrink_800_800/0/1708326336162?e=1721865600&v=beta&t=MNdYPiK0Tp3N0xqrQ4Nw8jAhBMcqgNhzeAI1QL_qZs8`} alt="Image Loading" />
                        <Card.Body>
                            <div className="d-flex justify-content-between">
                                <Link to="#" className="yellow-text">LinkedIn</Link>
                                <Link to="#" className="yellow-text">Portfolio</Link>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}
