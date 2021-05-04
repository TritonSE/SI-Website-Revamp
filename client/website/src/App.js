import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import {SITE_PAGES} from "./constants/links";

import PageLayout from "./components/Main/PageLayout";
import ResourcesNavBar from "./components/Main/ResourcesNavBar";
import Home from "./pages/Home";
import Conferences from "./pages/Conferences";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import LandingPage from "./pages/Resources/LandingPage";
import Newsletters from "./pages/Resources/Newsletters";
import EPublications from "./pages/Resources/EPublications";
import BuddhistCulture from "./pages/Resources/BuddhistCulture";
import OrdinationIssue from "./pages/Resources/OrdinationIssue";
import JoinUs from "./pages/JoinUs";
import Volunteer from "./pages/Volunteer";
import Custom404 from "./pages/Custom404";

function App() {
  return (
      <Router>
        {/* Switch gurantees that a URL can match to only one route */}
          <PageLayout>
            <Switch>
               {/* Home Page */}
               <Route exact path={["/home", SITE_PAGES.HOME]}>
                <Home />
              </Route>
               {/* Conferences Page */}
               <Route exact path={SITE_PAGES.CONFERENCES}>
                <Conferences />
              </Route>
               {/* About Us Page */}
               <Route exact path={SITE_PAGES.ABOUT_US}>
                <AboutUs />
              </Route>
               {/* Contact Us Page */}
               <Route exact path={SITE_PAGES.CONTACT_US}>
                <ContactUs />
              </Route>

               {/* Join Us Page */}
               <Route exact path={SITE_PAGES.JOIN_US}>
                <JoinUs />
              </Route>

               {/* Volunteer Page */}
               <Route exact path={SITE_PAGES.VOLUNTEER}>
                <Volunteer />
              </Route>

              {/* ------ Resource Pages -------- */}

               {/* Landing Page */}
               <Route exact path={SITE_PAGES.RESOURCES_LANDING}>
                 <ResourcesNavBar>
                   <LandingPage />
                 </ResourcesNavBar>
              </Route>
              {/* Newsletters */}
              <Route exact path={SITE_PAGES.RESOURCES_NEWSLETTERS}>
                <ResourcesNavBar>
                   <Newsletters />
                </ResourcesNavBar>
              </Route>
              {/* E-Publications */}
              <Route exact path={SITE_PAGES.RESOURCES_EPUBS}>
                <ResourcesNavBar>
                  <EPublications />
                </ResourcesNavBar>
              </Route>
              {/* Buddhist Culture */}
              <Route exact path={SITE_PAGES.RESOURCES_BUDDHIST_CULTURE}>
                <ResourcesNavBar>
                  <BuddhistCulture />
                </ResourcesNavBar>
              </Route>
              {/* Ordination Issue */}
              <Route exact path={SITE_PAGES.RESOURCES_ORDINATION_ISSUE}>
                <ResourcesNavBar>
                  <OrdinationIssue />
                </ResourcesNavBar>
              </Route>

               {/* ------ Resource Pages -------- */}

              {/* Any other URL is automatically matched to 404 Page */}
              <Route path="/">
                <Custom404 />
              </Route>

            </Switch>
          </PageLayout>
      </Router>
  );
}

export default App;
