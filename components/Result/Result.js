import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    font-family: fantasy;
    flex-direction: column;
`;

const Title = styled.div`
    background-color: #185ADB;
    padding: 10px;
    font-size: 20px;
    margin-bottom: 20px;
    color: white;
`;

const Content = styled.div`
    display: flex;
    justify-content: center;
`;

const ResultText = styled.span`
    margin: 0 40px;
    font-size: 80px;
    font-weight: bold;
    color: white;
`;

const Result = (props) => {

    const {
        home_media_url,
        away_media_url,
        score,
        title,
    } = props;

    return (
        <amp-story-grid-layer template="thirds">
            <div grid-area="lower-third">
            <Wrapper>
                <Title>{title}</Title>
                <Content>
                    <amp-img width="100" height="100" src={home_media_url} />
                    <ResultText>{score}</ResultText>
                    <amp-img width="100" height="100" src={away_media_url} />
                </Content>
            </Wrapper>
            </div>
        </amp-story-grid-layer>
    );

};

Result.propTypes = {
    home_media_url: PropTypes.string.isRequired,
    away_media_url: PropTypes.string.isRequired,
    score: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

export default Result;