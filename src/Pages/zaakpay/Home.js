import Main from "./mainsection";
import Head from "./navbar";
import Fourth from "./Fourthsection";
import Final from "./Finalsection";
import New from "./new";
import Footer from "./footer";
import Threed from "./Threed";

function Home() {
  return (
    <div>
      <Head />
      <Main />
      <Fourth />
      <Threed />
      <Final />
      <New />
      <Footer />
    </div>
  );
}

export default Home;
