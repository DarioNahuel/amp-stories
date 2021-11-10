import PropTypes from 'prop-types';

const Story = (props) => {

    const {
        children,
        title = 'Stories'
    } = props;

    return (
        <amp-story
            standalone=""
            title={title}
            publisher="AMP Project"
            publisher-logo-src="https://pbs.twimg.com/profile_images/1362090966824411136/oeY9dW3n_400x400.jpg"
            poster-portrait-src="https://pbs.twimg.com/profile_images/1362090966824411136/oeY9dW3n_400x400.jpg"
            poster-square-src="https://amp.dev/static/samples/img/story_dog2_square.jpg"
            poster-landscape-src="https://amp.dev/static/samples/img/story_dog2_landscape.jpg"
        >
            {children}
        </amp-story>
    );

};

Story.propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string,
}

export default Story;