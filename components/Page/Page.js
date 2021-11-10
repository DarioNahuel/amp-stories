import PropTypes from 'prop-types';

const Page = (props) => {

    const {
        children,
        id,
    } = props;

    return (
        <amp-story-page id={id} auto-advance-after="6s">
            {children}
        </amp-story-page>
    );

};

Page.propTypes = {
    children: PropTypes.node.isRequired,
    id: PropTypes.string.isRequired,
};

export default Page;