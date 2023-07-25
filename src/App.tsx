import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Services from './pages/Services/Services';
import WorkWithUs from './pages/WorkWithUs/WorkWithUs';
import GiftCards from './pages/GiftCards/GiftCards';
import Offers from './pages/Offers/Offers';
import Login from './pages/Login/Login';
import Contact from './pages/Contact/Contact';
import BlogSingle from './pages/Blog/BlogSingle';
import BookService from './pages/BookService/BookService';
import Quote from './pages/Quote/Quote';
import ForgetPassword from './pages/ForgetPassword/ForgetPassword';
import Register from './pages/Register/Register';
import Careers from './pages/Careers/Careers';
import BookingProvider from './context/Provider';

function App() {
  
  return (
    <BookingProvider>
      <Router>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} exact />
          <Route path="/services" component={Services} exact />
          <Route path="/work-with-us" component={WorkWithUs} exact />
          <Route path="/gift-cards" component={GiftCards} exact />
          <Route path="/offers" component={Offers} exact />
          <Route path="/login" component={Login} exact />
          <Route path="/contact" component={Contact} exact />
          <Route path="/blog-single" component={BlogSingle} exact />
          <Route path="/Careers" component={Careers} exact />
          <Route path="/book-service" component={BookService} exact />
          <Route path="/quote" component={Quote} exact />
          <Route path="/forgot-password" component={ForgetPassword} exact />
          <Route path="/register" component={Register} exact />
          <Redirect to="/" />
        </Switch>
      </Router>
      </BookingProvider>
  );
}

export default App;
