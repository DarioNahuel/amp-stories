import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
    background-color: #342A40;
    bottom: 0;
    padding: 16px;
    position: absolute;
    font-family: sans-serif;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
`;

const Title = styled.div`
    color: #fff;
    font-size: 34px;
    margin-bottom: 15px;
    font-weight: bold;
    display: flex;
    justify-content: space-between;
`;

const Rating = styled.span`
    font-size: 14px;
    align-self: center;
`;

const Content = styled.div`
    color: #fff;
    font-size: 18px;
    line-height: 125%;
`;

const GenreWrapper = styled.div`
    margin-bottom: 15px;
`;

const Genre = styled.span`
    color: white;
    border: 1px solid white;
    border-radius: 1em;
    padding: 5px 10px;
    font-size: 16px;
    margin-right: 10px;
`;


const Recap = (props) => {

    const {
        title,
        body,
        genres,
        rating,
    } = props;

    return (
        <amp-story-grid-layer template="vertical">
            <Wrapper>
                <Title>
                    {title}
                    <Rating>IMDb RATING: {rating}</Rating>
                </Title>
                <GenreWrapper>
                    {genres.map(genre => (<Genre>{genre}</Genre>))}
                </GenreWrapper>
                <Content>
                    {body}
                </Content>
            </Wrapper>
        </amp-story-grid-layer>
    );

};

Recap.propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    genres: PropTypes.array,
    rating: PropTypes.string,
};

export default Recap;