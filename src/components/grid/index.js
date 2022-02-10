import React, {Fragment} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import PageContainer from "../scroll";
import Portfolio from "../portfolio";

const Grid = ({portfolios,  fullWidth}) => {

    
    return (
        <Fragment>
            <PageContainer classes={'bg-grey mb-100'}>
                <Container fluid='fullWidth' className='fullWidth'>
                    <h4 className='portfolioHeader ml-20 mb-20'>Portfolio</h4>
                    <Row className={'row-7 portfolio-column-three masonry-grid'}>
                        {portfolios.map(portfolio => (
                            <Col key={portfolio.id} md={6} lg={4} className={'mb-15'}>
                                <Portfolio
                                    id={portfolio.id}
                                    variant={'column'}
                                    title={portfolio.title}
                                    category={portfolio.category}
                                    thumb={portfolio.thumb}
                                />
                            </Col>
                        ))}
                    </Row>
                </Container>
            </PageContainer>

        </Fragment>
    );
};

export default Grid;