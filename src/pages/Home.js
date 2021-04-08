import Card from '../components/Card'
import SearchBar from '../components/SearchBar'
const Home = () => {
    return (
        <div>
        <div className="bg-clip">
            <SearchBar/>
        <video autoPlay loop src="https://storage.googleapis.com/air-port-codes/videos/lax-big.mp4"/>
        </div>
        <div className="main">
            <Card title="About">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel nulla rutrum, maximus massa vitae, vulputate nisl. Morbi semper diam et nisl tincidunt, vitae molestie diam tempor. Duis venenatis orci sed ligula varius, semper tempus libero ullamcorper. Morbi velit elit, dapibus ut venenatis sit amet, ultrices sed mauris. Mauris sit amet libero augue. Aenean lacinia, ligula id sodales varius, neque nibh egestas nibh, nec imperdiet sapien nisl eu leo. Praesent at porta orci. Nam est dolor, fermentum a consectetur nec, aliquet auctor nisl. Nam iaculis, quam quis ullamcorper sagittis, mauris arcu vestibulum tortor, sed aliquet purus mauris vel elit. Quisque facilisis eget felis vel auctor. Curabitur commodo fermentum quam vitae posuere. Vivamus vitae velit egestas, pretium est quis, efficitur diam. Quisque eu bibendum diam, et facilisis risus.
            </Card>
            <Card title="Why do we use it?">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.

            </Card>
            <Card title="Where can I get some?">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.

            </Card>
        </div>
        </div>
    )
}

export default Home