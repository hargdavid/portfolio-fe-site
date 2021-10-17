/** @jsxRuntime classic **/
/** @jsx jsx */
import { jsx } from "theme-ui";
import Hero from "../src/components/Hero/Hero";
import { startPage } from "../__data__/startPage";

const StartPage = () => {
  const {
    hero: { title, subTitle, img },
  } = startPage;
  return (
    <header>
      <Hero title={title} subTitle={subTitle} image={img}></Hero>
    </header>
  );
};

export default StartPage;
