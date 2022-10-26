import React from 'react';
import Header from '../../components/header/header';
import Banner from '../../sections/banner';
import About from '../../sections/about';
import Services from '../../sections/services';
import Team from '../../sections/team';
import Footer from '../../sections/footer';

const Page = () => {
  return (
      <div>
        <Header/>
        <Banner />
        <About />
        <Services/>
        <Team/>
        <Footer/>
      </div>
  );
};

export default Page;