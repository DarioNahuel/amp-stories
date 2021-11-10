import PropTypes from 'prop-types';
import styled from 'styled-components';

const Content = styled.h1`
    color: ${({ textColor }) => textColor};
    text-align: ${({ position }) => position};
    font-family: sans-serif;
    border: 1px solid ${({ textColor }) => textColor};
`;

const Title = (props) => {

    const {
        color,
        position,
        title,
    } = props;

    return (
        <amp-story-grid-layer template="thirds">
          <div grid-area="upper-third"
            animate-in="fade-in"
            animate-in-delay="0.5s"
            animate-in-duration="0.5s"
          >
            <Content position={position} textColor={color}>{title}</Content>
          </div>
        </amp-story-grid-layer>
    );

}

Title.propTypes = {
    color: PropTypes.string,
    position: PropTypes.string,
    title: PropTypes.string.isRequired,
};

Title.defaultProps = {
    color: 'white',
    position: 'center',
};

export default Title;