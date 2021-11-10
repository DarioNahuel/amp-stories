import PropTypes from 'prop-types';

const Image = (props) => {

    const {
        src,
        width,
        height,
        layout,
    } = props;

    return (
        <amp-img
            src={src}
            width={width}
            height={height}
            layout={layout}
        />
    );

};

Image.propTypes = {
    src: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
    layout: PropTypes.string.isRequired,
};

export default Image;