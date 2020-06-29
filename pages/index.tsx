import { NextPage } from 'next';
import Link from 'next/link';
import { Footer, GitHubCorner } from '@tano/common';

const Home: NextPage = () => (
  <div>
    <section id="hero-home" className="hero is-primary is-fullheight has-gradient">
      <GitHubCorner href="https://github.com/ntadej/Vremenar" />

      <div className="hero-body">
        <div className="container">
          <div className="columns is-vcentered">
            <div className="column is-5">
              <div className="logo-huge"></div>
            </div>
            <div className="column has-text-centered-mobile">
              <h1>
                {/* {{site.description}} */}
              </h1>

              <a href="https://github.com/ntadej/Vremenar" className="button is-large is-primary is-inverted">Follow development on GitHub</a>

              <p></p>

              <div className="tabs has-text-centered-mobile">
                <ul>
                  <li>
                    No stable version yet
                  </li>
                  <li>
                    <Link href="/license">
                      <a>License</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-foot">
        <nav className="tabs">
          <div className="hero-foot-container">
            <ul>
              <li><a href="#features" className="smooth-scroll"><i className="fa fa-angle-down"></i>&nbsp;Scroll down to learn more (soon!)&nbsp;<i className="fa fa-angle-down"></i></a></li>
            </ul>
          </div>
        </nav>
      </div>
    </section>

    <Footer />
  </div>
);

export default Home;
