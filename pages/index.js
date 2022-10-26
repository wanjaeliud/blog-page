import Head from 'next/head'
import Banner from '../sections/banner';
import Header from '../components/header/header';
// import {Alert} from 'theme-ui';
// import About from '../sections/about';
// import Services from '../sections/services';
// import Team from '../sections/team';
// import Footer from '../sections/footer';
import Page from './home/page';
import Login from './login/login';

export default function Home() {
  return (
      <div>
        <Head>
          <title>Responsive Travel Website</title>
          <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css" rel="stylesheet"/>

          <link rel="icon" href="/pro.ico" />
        </Head>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>

        <Page />
        {/*<Header/>*/}
        {/*<Banner />*/}
        {/*<About />*/}
        {/*<Services/>*/}
        {/*<Team/>*/}
        {/*<Footer/>*/}
      </div>
  )
}
