

const Link = (props) => {

    const {
        title,
        url,
    } = props;

    return (
        <amp-story-page-outlink
            layout="nodisplay"
            theme="custom"
            cta-accent-element="background"
            cta-accent-color="#342A40"
        >
            <a href={url}>{title}</a>
        </amp-story-page-outlink>
    );

};

export default Link;