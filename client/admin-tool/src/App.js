import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import "./App.css";

import { SITE_PAGES } from "./constants/links";
import PrivateRoute from "./components/PrivateRoute";
import PageLayout from "./components/PageLayout";
import NewsEventsSlider from "./pages/Home/NewsEventsSlider";
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
                                <PrivateRoute>
                                    <NewsEventsSlider />
                                </PrivateRoute>
                            </Route>
                            <Route exact path={SITE_PAGES.HOME_BRANCHES_CHAPTERS}>
                                <PrivateRoute>
                                    <BranchesChapters />
                                </PrivateRoute>
                            </Route>
                            <Route exact path={SITE_PAGES.HOME_ADD_SECTION}>
                                <PrivateRoute>
                                    <HomeAddSection />
                                </PrivateRoute>
                            </Route>

                            {/* Conferences Page */}
                            <Route exact path={SITE_PAGES.CONFERENCES}>
                                <PrivateRoute>
                                    <Conferences />
                                </PrivateRoute>
                            </Route>

                            {/* Resources Page */}
                            <Route exact path={SITE_PAGES.RESOURCE_NEWSLETTERS}>
                                <PrivateRoute>        
                                    <Newsletters />
                                </PrivateRoute>
                            </Route>
                            <Route exact path={SITE_PAGES.RESOURCE_EPUBS}>
                                <PrivateRoute>
                                    <EPublications />
                                </PrivateRoute>
                            </Route>
                            <Route exact path={SITE_PAGES.RESOURCE_BUDDHIST_CULTURE}>
                                <PrivateRoute>
                                    <BuddhistCulture />
                                </PrivateRoute>
                            </Route>
                            <Route exact path={SITE_PAGES.RESOURCE_ORDINATION_ISSUE}>
                                <PrivateRoute>
                                    <OrdinationIssue />
                                </PrivateRoute>
                            </Route>

                            {/* About Us Page */}
                            <Route exact path={SITE_PAGES.ABOUT_EDIT_SECTION}>
                                <PrivateRoute>
                                    <AboutEditSections />
                                </PrivateRoute>
                            </Route>
                            <Route exact path={SITE_PAGES.ABOUT_EXEC_COMMITTEE}>
                                <PrivateRoute>
                                    <ExecCommittee />
                                </PrivateRoute>
                            </Route>
                            <Redirect path="*" to={SITE_PAGES.ACCOUNTS_LOGIN} />
                        </Switch>
                    </PageLayout>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
