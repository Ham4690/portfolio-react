import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Footer />
        {/* <Header />
        <Main />
        <Footer /> */}
      </React.Fragment>
    );
  }
}

export default App;
