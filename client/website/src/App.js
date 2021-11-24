import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { SITE_PAGES } from "./constants/links";

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
import Donate from "./pages/Donate";
import Custom404 from "./pages/Custom404";

function App() {
    return (
        <Router>
            {/* Switch gurantees that a URL can match to only one route */}
            <Switch>
                {/* Home Page */}
                <Route exact path={["/home", SITE_PAGES.HOME]}>
                    <PageLayout>
                        <Home />
                    </PageLayout>
                </Route>
                {/* Conferences Page */}
                <Route exact path={SITE_PAGES.CONFERENCES}>
                    <PageLayout>
                        <Conferences />
                    </PageLayout>
                </Route>
                {/* About Us Page */}
                <Route exact path={SITE_PAGES.ABOUT_US}>
                    <PageLayout>
                        <AboutUs />
                    </PageLayout>
                </Route>
                {/* Contact Us Page */}
                <Route exact path={SITE_PAGES.CONTACT_US}>
                    <PageLayout>
                        <ContactUs />
                    </PageLayout>
                </Route>

                {/* Join Us Page */}
                <Route exact path={SITE_PAGES.JOIN_US}>
                    <PageLayout>
                        <JoinUs />
                    </PageLayout>
                </Route>

                {/* Volunteer Page */}
                <Route exact path={SITE_PAGES.VOLUNTEER}>
                    <PageLayout>
                        <Volunteer />
                    </PageLayout>
                </Route>

                {/* Donate Page */}
                <Route exact path={SITE_PAGES.DONATE}>
                    <PageLayout>
                        <Donate />
                    </PageLayout>
                </Route>

                {/* ------ Resource Pages -------- */}

                {/* Landing Page */}
                <Route exact path={SITE_PAGES.RESOURCES_LANDING}>
                    <PageLayout hideFooter="true">
                        <ResourcesNavBar>
                            <LandingPage />
                        </ResourcesNavBar>
                    </PageLayout>
                </Route>
                {/* Newsletters */}
                <Route exact path={SITE_PAGES.RESOURCES_NEWSLETTERS}>
                    <PageLayout>
                        <ResourcesNavBar>
                            <Newsletters />
                        </ResourcesNavBar>
                    </PageLayout>
                </Route>
                {/* E-Publications */}
                <Route exact path={SITE_PAGES.RESOURCES_EPUBS}>
                    <PageLayout>
                        <ResourcesNavBar>
                            <EPublications />
                        </ResourcesNavBar>
                    </PageLayout>
                </Route>
                {/* Buddhist Culture */}
                <Route exact path={SITE_PAGES.RESOURCES_BUDDHIST_CULTURE}>
                    <PageLayout>
                        <ResourcesNavBar>
                            <BuddhistCulture />
                        </ResourcesNavBar>
                    </PageLayout>
                </Route>
                {/* Ordination Issue */}
                <Route exact path={SITE_PAGES.RESOURCES_ORDINATION_ISSUE}>
                    <PageLayout>
                        <ResourcesNavBar>
                            <OrdinationIssue />
                        </ResourcesNavBar>
                    </PageLayout>
                </Route>

                {/* ------ Resource Pages -------- */}

                {/* Any other URL is automatically matched to 404 Page */}
                <Route path="/">
                    <PageLayout>
                        <Custom404 />
                    </PageLayout>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
