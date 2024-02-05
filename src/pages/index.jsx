import SEO from "../common/seo";
import HomeOne from "../components/homes/home";
import Wrapper from "../layout/wrapper";

const Home = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"wAIw The best AI-solutions for geoscience and upstream exploration"} />
      <HomeOne />
    </Wrapper>
  );
};

export default Home;
