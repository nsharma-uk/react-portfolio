import { ContactForm } from "./components/ContactForm";
import NavBar from "./components/NavBar";
import { Footer } from "./components/Footer";
import { About } from "./components/About";
export const App = () => {
  return (
    <>
      <NavBar />
      <About />
      <ContactForm />
      <Footer />
    </>
  );
};

export default App;
