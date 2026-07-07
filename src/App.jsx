import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import Settings from "./pages/Setting";
import AppTheme from "./component/AppTheme";
import StoryReader from "./pages/StoryReader";
import NotFound from "./component/ui/NotFound";
import Footer from "./component/Footer";
function App() {
  return (
    <AppTheme>
      <Navbar />

      <Routes>
        <Route path="/story/:slug" element={<StoryReader />} />
        <Route path="/" element={<Home />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer/>
    </AppTheme>
  );
}
export default App;
