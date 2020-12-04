import React from 'react';
import './App.scss';
import '@assecosolutions/fox-select';
import '@assecosolutions/fox-list';
import '@assecosolutions/fox-textfield';
import '@assecosolutions/fox-checkbox';
import '@assecosolutions/fox-button';
import '@assecosolutions/fox-app-bar';
import '@assecosolutions/fox-back-layer';
import '@assecosolutions/fox-content-layer';
import '@assecosolutions/fox-front-layer';
import reactifyWc from "reactify-wc";

function App() {


    function selected(e: Event) {
        console.log("hello world", e);
    }

    const FoxSelect = reactifyWc("fox-select") as any;
    const FoxAppBar = reactifyWc("fox-app-bar") as any;
    const FoxBackLayer = reactifyWc("fox-back-layer") as any;
    const FoxFrontLayer = reactifyWc("fox-front-layer") as any;
    const FoxContentLayer = reactifyWc("fox-content-layer") as any;
    const FoxListItem = reactifyWc("fox-list-item") as any;
    const FoxList = reactifyWc("fox-list") as any;
    const FoxTextfield = reactifyWc("fox-textfield") as any;
    const FoxCheckbox = reactifyWc("fox-checkbox") as any;
    const FoxButton = reactifyWc("fox-button") as any;

    return (

        <div className="App">

            <FoxAppBar></FoxAppBar>
            <div className="content-wrapper">
                <FoxBackLayer></FoxBackLayer>
                <FoxFrontLayer large>
                    <FoxContentLayer>
                        <div slot="body" className="h-100 p-3">
                            <h4>FOX Select </h4>

                            <FoxSelect on-selected={selected}>
                                <FoxListItem>1</FoxListItem>
                                <FoxListItem>2</FoxListItem>
                                <FoxListItem>3</FoxListItem>
                                <FoxListItem>4</FoxListItem>
                                <FoxListItem>5</FoxListItem>
                            </FoxSelect>

                            <h4>FOX list </h4>
                            <FoxList>
                                <FoxListItem>1</FoxListItem>
                                <FoxListItem>2</FoxListItem>
                                <FoxListItem>3</FoxListItem>
                                <FoxListItem>4</FoxListItem>
                                <FoxListItem>5</FoxListItem>
                            </FoxList>

                            <h4>FOX textfield </h4>
                            <div>
                                <FoxTextfield label="My textfield"></FoxTextfield>
                            </div>


                            <h4>FOX checkbox </h4>
                            <FoxCheckbox></FoxCheckbox>
                            <FoxCheckbox checked></FoxCheckbox>

                            <h4>FOX button </h4>
                            <FoxButton> Ich bin ein Button</FoxButton>
                            <FoxButton outlined> Ich bin ein Button</FoxButton>
                        </div>
                    </FoxContentLayer>
                </FoxFrontLayer>
            </div>
        </div>
    );

}

export default App;
