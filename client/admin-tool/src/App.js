import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import { SITE_PAGES } from "./constants/links";
import PageLayout from "./components/PageLayout";
import NewsEventsSlider from "./pages/Home/NewsEventsSlider";
import HomeIntro from "./pages/Home/Introduction";
import BranchesChapters from "./pages/Home/BranchesChapters";
import HomeAddSection from "./pages/Home/AddSection";
import Newsletters from "./pages/Resources/Newsletters";
import EPublications from "./pages/Resources/EPublications";
import BuddhistCulture from "./pages/Resources/BuddhistCulture";
import OrdinationIssue from "./pages/Resources/OrdinationIssue";
import AboutEditSections from "./pages/About/EditSections";
import ExecCommittee from "./pages/About/ExecCommittee";
import Login from "./pages/Accounts/Login";
import Register from "./pages/Accounts/Register";
import ResetPassword from "./pages/Accounts/ResetPassword";
import ForgotPassword from "./pages/Accounts/ForgotPassword";
import Conferences from "./pages/Conferences";

function App() {
    return (
        <Router>
            {/* Switch gurantees that a URL can match to only one route */}

            <Switch>
                {/* Accounts */}
                <Route exact path={SITE_PAGES.ACCOUNTS_LOGIN}>
                    <Login />
                </Route>
                <Route exact path={SITE_PAGES.ACCOUNTS_REGISTER}>
                    <Register />
                </Route>
                <Route exact path={SITE_PAGES.ACCOUNTS_FORGOT_PASSWORD}>
                    <ForgotPassword />
                </Route>
                <Route exact path={SITE_PAGES.ACCOUNTS_RESET_PASSWORD}>
                    <ResetPassword />
                </Route>

                <Route>
                    <PageLayout>
                        <Switch>
                            {/* Home Page */}
                            <Route exact path={SITE_PAGES.HOME_NEWS_AND_EVENTS_SLIDER}>
                                <NewsEventsSlider />
                            </Route>
                            <Route exact path={SITE_PAGES.HOME_INTRODUCTION}>
                                <HomeIntro />
                            </Route>
                            <Route exact path={SITE_PAGES.HOME_BRANCHES_CHAPTERS}>
                                <BranchesChapters />
                            </Route>
                            <Route exact path={SITE_PAGES.HOME_ADD_SECTION}>
                                <HomeAddSection />
                            </Route>

                            {/* Conferences Page */}
                            <Route exact path={SITE_PAGES.CONFERENCES}>
                                <Conferences />
                            </Route>

                            {/* Resources Page */}
                            <Route exact path={SITE_PAGES.RESOURCE_NEWSLETTERS}>
                                <Newsletters />
                            </Route>
                            <Route exact path={SITE_PAGES.RESOURCE_EPUBS}>
                                <EPublications />
                            </Route>
                            <Route exact path={SITE_PAGES.RESOURCE_BUDDHIST_CULTURE}>
                                <BuddhistCulture />
                            </Route>
                            <Route exact path={SITE_PAGES.RESOURCE_ORDINATION_ISSUE}>
                                <OrdinationIssue />
                            </Route>

                            {/* About Us Page */}
                            <Route exact path={SITE_PAGES.ABOUT_EDIT_SECTION}>
                                <AboutEditSections />
                            </Route>
                            <Route exact path={SITE_PAGES.ABOUT_EXEC_COMMITTEE}>
                                <ExecCommittee />
                            </Route>
                        </Switch>
                    </PageLayout>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
