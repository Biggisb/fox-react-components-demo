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

function App() {
    return (

        <div className="App">
            <fox-app-bar></fox-app-bar>
            <div className="content-wrapper">
                <fox-back-layer></fox-back-layer>
                <fox-front-layer large>
                    <fox-content-layer>
                        <div slot="body" className="h-100 p-3">
                            <h4>FOX Select </h4>
                            <fox-select>
                                <fox-list-item>1</fox-list-item>
                                <fox-list-item>2</fox-list-item>
                                <fox-list-item>3</fox-list-item>
                                <fox-list-item>4</fox-list-item>
                                <fox-list-item>5</fox-list-item>
                            </fox-select>

                            <h4>FOX list </h4>
                            <fox-list>
                                <fox-list-item>1</fox-list-item>
                                <fox-list-item>2</fox-list-item>
                                <fox-list-item>3</fox-list-item>
                                <fox-list-item>4</fox-list-item>
                                <fox-list-item>5</fox-list-item>
                            </fox-list>

                            <h4>FOX textfield </h4>
                            <fox-textfield label="My textfield"></fox-textfield>

                            <h4>FOX checkbox </h4>
                            <fox-checkbox></fox-checkbox>
                            <fox-checkbox checked></fox-checkbox>

                            <h4>FOX button </h4>
                            <fox-button> Ich bin ein Button</fox-button>
                            <fox-button outlined> Ich bin ein Button</fox-button>
                        </div>
                    </fox-content-layer>
                </fox-front-layer>
            </div>
        </div>
    );
}

export default App;
