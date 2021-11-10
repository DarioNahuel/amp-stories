export const config = { amp: true }

export const Home = () => {

  return (
    <>
      <amp-story-player id="player" layout="fixed" width="360" height="600">
        <a href='/video'></a>
        <a href='/image'></a>
      </amp-story-player>
    </>
  )
}

export default Home;