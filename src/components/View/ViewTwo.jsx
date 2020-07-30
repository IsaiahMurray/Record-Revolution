import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import styled from 'styled-components';

const Row = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
`;

const Column = style.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`;

const Background = styled.div`
    background: linear-gradient(to bottom, white, #e1e6e2);
`;

const Wrapper = styled.div`
    display: block;
    margin: auto;
    padding: 2em;
`;

const useStyles = maekstyles({
    card: {
        maxHeight: 450,
        maxWidth: 345,
    }
})

const ViewTwo = () => {

    return(
        <Background>
            <Row>
                <Column>
                    <Wrapper>

                    </Wrapper>
                </Column>
            </Row>
        </Background>
    )
}

export default ViewTwo
;