import React, { useState } from "react";
import { render } from "react-dom";
import "babel-polyfill";
import ReactEmbedGist from "react-embed-gist";

import { Tabs, Tab, Form } from "react-bootstrap";

import "./main.scss";
import { ExampleRibbon } from "./ExampleRibbon";
import { LgkLogo } from "./LgkLogo";

import Ribbon from "../../src/ReactBootstrapRibbon";
import RibbonGroup from "../../src/ReactBootstrapRibbonGroup";
import RibbonGroupItem from "../../src/ReactBootstrapRibbonGroupItem";
import RibbonButton from "../../src/ReactBootstrapRibbonButton";

function App() {
    const [dark, setDark] = useState(false);
    const [showExampleCode, setShowExampleCode] = useState(false);
    const cssEmbed = document.getElementById("css-embed");
    const lgkPillBtn = document.querySelector(".lgk-pill-btn");

    const switchDark = () => {
        const _dark = !dark;
        setDark(_dark);

        cssEmbed.href = `public/${_dark === true ? "dark" : "main"}.css`;

        if (lgkPillBtn) {
            lgkPillBtn.classList.toggle("black");
        }
    };

    return (
        <main>
            <header className="jumbotron jumbotron-fluid bg-success mb-0">
                <div className="container text-center">
                    <h1 className="">
                        <span className="icon-lgk-menu-thick" />
                    </h1>
                    <h1 className="d-none d-md-block display-3 font-weight-bold">React Bootstrap Ribbon</h1>
                    <h1 className="d-md-none font-weight-bold">React Bootstrap Ribbon</h1>
                    <p className="lead font-weight-bolder">A ribbon menu inspired by Microsoft for React using Bootstrap</p>
                    <h1><LgkLogo /></h1>
                </div>
            </header>

            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <div class="navbar-nav mr-auto">
                        <a href="https://github.com/lgkonline/react-bootstrap-ribbon" target="_blank" rel="noopener noreferrer" className="nav-item nav-link">
                            This project on <span className="icon-github ml-1" /> GitHub
                        </a>
                        <a href="https://www.npmjs.com/package/react-bootstrap-ribbon" target="_blank" rel="noopener noreferrer" className="nav-item nav-link">
                            <span className="icon-npm" /> NPM
                        </a>
                        <a href="https://www.behance.net/gallery/49987941/React-Bootstrap-Ribbon" target="_blank" rel="noopener noreferrer" className="nav-item nav-link">
                            <span className="icon-behance2" /> Behance
                        </a>
                    </div>
                    <div class="navbar-nav">
                        <a href="https://lgk.io" target="_blank" rel="noopener noreferrer" className="nav-item nav-link">
                            My other projects
                        </a>
                        <a href="https://twitter.com/lgkonline" target="_blank" rel="noopener noreferrer" className="nav-item nav-link">
                            <span className="icon-twitter" /> Twitter
                        </a>
                    </div>
                </div>
            </nav>

            <section className="docs-first-section pt-4 pb-5">
                <div className="container">
                    <article>
                        <p>
                            The ribbon will fit perfectly in your Bootstrap theme. Checkout how it will look with a dark theme:
                        </p>
                        <Form.Switch
                            id="switch-dark"
                            className="mb-3"
                            label="Switch to a dark theme 😎"
                            value={dark}
                            onChange={switchDark}
                        />
                        <p>
                            Do you like the dark theme? You can find it and many other themes on Colorganize: <a href="https://colorganize.com/webTheme/2" target="_blank" rel="noopener noreferrer">https://colorganize.com/webTheme/2</a>
                        </p>
                    </article>

                    <h2 className="mt-4 mb-3">Simple ribbon</h2>
                    <p>
                        <a href="#" onClick={e => { e.preventDefault(); setShowExampleCode(!showExampleCode); }}>Show example code</a>
                    </p>
                    {showExampleCode &&
                        <div className="card mb-3">
                            <div className="card-header">
                                {"ExampleRibbon.js"}
                                <button type="button" className="close" aria-label="Close" onClick={() => setShowExampleCode(false)}>
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>

                            <ReactEmbedGist gist="lgkonline/e22c4ffc1f9846ada186883f76ba793e" titleClass="d-none" file="ExampleRibbon.js" />
                        </div>
                    }

                    <ExampleRibbon />


                    <h2 className="mt-4 mb-3">Tabbed ribbons</h2>

                    <p>
                        Use multiple ribbons and them into Bootstraps Tab components. You can do this with <a href="https://react-bootstrap.netlify.com/components/tabs/" target="_blank" rel="noopener noreferrer">react-bootstrap</a>
                        {" "}or <a href="https://reactstrap.github.io/components/tabs/" target="_blank" rel="noopener noreferrer">reactstrap</a>.
                    </p>

                    <Tabs defaultActiveKey={0} transition={false} id="example-tabbed-ribbon">
                        <Tab eventKey={0} title="Start">
                            <ExampleRibbon />
                        </Tab>

                        <Tab eventKey={1} title="Second tab">
                            <Ribbon>
                                <RibbonGroup title="Send">
                                    <RibbonGroupItem>
                                        <RibbonButton>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="1em"
                                                height="1em"
                                                fill="currentColor"
                                                className="bi bi-box-arrow-up"
                                                viewBox="0 0 16 16"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M4.646 4.354a.5.5 0 00.708 0L8 1.707l2.646 2.647a.5.5 0 00.708-.708l-3-3a.5.5 0 00-.708 0l-3 3a.5.5 0 000 .708z"
                                                    clipRule="evenodd"
                                                ></path>
                                                <path
                                                    fillRule="evenodd"
                                                    d="M8 11.5a.5.5 0 00.5-.5V2a.5.5 0 00-1 0v9a.5.5 0 00.5.5z"
                                                    clipRule="evenodd"
                                                ></path>
                                                <path
                                                    fillRule="evenodd"
                                                    d="M2.5 14A1.5 1.5 0 004 15.5h8a1.5 1.5 0 001.5-1.5V7A1.5 1.5 0 0012 5.5h-1.5a.5.5 0 000 1H12a.5.5 0 01.5.5v7a.5.5 0 01-.5.5H4a.5.5 0 01-.5-.5V7a.5.5 0 01.5-.5h1.5a.5.5 0 000-1H4A1.5 1.5 0 002.5 7v7z"
                                                    clipRule="evenodd"
                                                ></path>
                                            </svg>
                                            <div>Share</div>
                                        </RibbonButton>
                                    </RibbonGroupItem>

                                    <RibbonGroupItem>
                                        <RibbonButton>
                                            <svg
                                                xmlns='http://www.w3.org/2000/svg'
                                                width='1em'
                                                height='1em'
                                                fill='currentColor'
                                                className='bi bi-envelope'
                                                viewBox='0 0 16 16'
                                            >
                                                <path
                                                    fillRule='evenodd'
                                                    d='M14 3H2a1 1 0 00-1 1v8a1 1 0 001 1h12a1 1 0 001-1V4a1 1 0 00-1-1zM2 2a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2H2z'
                                                    clipRule='evenodd'
                                                ></path>
                                                <path
                                                    fillRule='evenodd'
                                                    d='M.071 4.243a.5.5 0 01.686-.172L8 8.417l7.243-4.346a.5.5 0 01.514.858L8 9.583.243 4.93a.5.5 0 01-.172-.686z'
                                                    clipRule='evenodd'
                                                ></path>
                                                <path d='M6.752 8.932l.432-.252-.504-.864-.432.252.504.864zm-6 3.5l6-3.5-.504-.864-6 3.5.504.864zm8.496-3.5l-.432-.252.504-.864.432.252-.504.864zm6 3.5l-6-3.5.504-.864 6 3.5-.504.864z'></path>
                                            </svg>
                                            <div>Email</div>
                                        </RibbonButton>
                                    </RibbonGroupItem>
                                </RibbonGroup>

                                <RibbonGroup title="Release for">
                                    <RibbonGroupItem colClass="col-12">
                                        <RibbonButton>
                                            <svg
                                                xmlns='http://www.w3.org/2000/svg'
                                                width='1em'
                                                height='1em'
                                                fill='currentColor'
                                                className='bi bi-lock'
                                                viewBox='0 0 16 16'
                                            >
                                                <path
                                                    fillRule='evenodd'
                                                    d='M11.5 8h-7a1 1 0 00-1 1v5a1 1 0 001 1h7a1 1 0 001-1V9a1 1 0 00-1-1zm-7-1a2 2 0 00-2 2v5a2 2 0 002 2h7a2 2 0 002-2V9a2 2 0 00-2-2h-7zm0-3a3.5 3.5 0 117 0v3h-1V4a2.5 2.5 0 00-5 0v3h-1V4z'
                                                    clipRule='evenodd'
                                                ></path>
                                            </svg>
                                            <div>Close releasing</div>
                                        </RibbonButton>
                                    </RibbonGroupItem>
                                </RibbonGroup>
                            </Ribbon>
                        </Tab>
                    </Tabs>
                </div>
            </section>

            <section>
                <div className="container">
                    <article>
                        <h1 className="display-4 mt-5 mb-3">Getting started</h1>

                        <h2 className="mt-4 mb-3">Install with NPM</h2>
                        <p>This is the recommended method. This way you'll always get the latest version.</p>

                        <p>
                            <code>npm install --save react-bootstrap-ribbon</code>
                        </p>

                        <h2 className="mt-4 mb-3">Download the latest release</h2>
                        <a
                            href="https://github.com/lgkonline/react-bootstrap-ribbon/releases/latest"
                            className="btn btn-outline-success"
                            target="_blank"
                            rel="noopener noreferrer"
                        >Get the latest release</a>
                    </article>

                    <article>
                        <h1 className="display-4 mt-5 mb-3">Usage</h1>

                        <ReactEmbedGist gist="lgkonline/e22c4ffc1f9846ada186883f76ba793e" titleClass="d-none" file="App.js" />
                    </article>
                </div>
            </section>

            <footer className="bg-light mt-5 py-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            &copy; {new Date().getFullYear()} by LGK – Made with 🧡in Germany
                        </div>

                        <div className="col text-center">
                            <h4>
                                <a href="https://lgk.io" id="lgk-link" target="_blank" rel="noopener noreferrer"><LgkLogo /></a>
                            </h4>
                        </div>

                        <div className="col text-right">
                            <a href="https://lgk.io/site/contact" target="_blank" rel="noopener noreferrer">Contact</a>{" – "}
                            <a href="https://lgk.io/site/imprint" target="_blank" rel="noopener noreferrer">Imprint</a>
                        </div>
                    </div>
                </div>
            </footer>
        </main>
    );
}

render(<App />, document.getElementById("app"));