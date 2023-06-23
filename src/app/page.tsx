import AboutHeader from "./components/about-header/about-header";
import AboutMe from "./components/about/about-me";
import Blog from "./components/blog/blog";
import Footer from "./components/footer/footer";
import Header from "./components/header/Header";
import Talk from "./components/lets-talk/talk";
import Projects from "./components/projects/projects";

export default function Home() {
  return (
    <main>
      <Header />
      <AboutHeader />
      <Projects />
      <AboutMe />
      <Blog />
      <Talk />
      <Footer />
    </main>
  )
}
