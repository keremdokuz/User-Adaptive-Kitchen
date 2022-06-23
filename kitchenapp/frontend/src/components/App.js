import { render } from "react-dom";
import React, { Component } from "react";

export default class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            steps: {"1": "nothing", "2": "runningWater", "3": "chopping", "4": "microwave" },
            currentStep: 1,
            totalSteps: 4,

        }
        this.nextStep = this.nextStep.bind(this);
        this.previousStep = this.previousStep.bind(this);
        this.reset = this.reset.bind(this);
        this.refresh = this.refresh.bind(this);
        this.waitForNextStep = this.waitForNextStep.bind(this);

        document.addEventListener('DOMContentLoaded', function() {
           this.refresh();
           this.waitForNextStep();
           }.bind(this));
    }

    refresh() {
        document.getElementById("Step" + this.state.currentStep).style.fontSize = "xx-large";
        document.getElementById("hidden" + this.state.currentStep).style.display = "block";
        if(this.state.currentStep < this.state.totalSteps) {
            let audio = this.state.steps[this.state.currentStep];
            console.log(audio);
        }

    }

    reset() {
        document.getElementById("Step" + this.state.currentStep).style.fontSize = "large";
        document.getElementById("hidden" + this.state.currentStep).style.display = "none";
    }

    nextStep() {
        if(this.state.currentStep < this.state.totalSteps){
            this.reset();
            this.state.currentStep++;
            this.refresh();
        }
    }

    previousStep() {
        if(this.state.currentStep > 1) {
            this.reset();
            this.state.currentStep--;
            this.refresh();
        }
    }

    async waitForNextStep() {
        while (true) {
            console.log("Current class label", classLabel);
            console.log("Current step:", this.state.steps[this.state.currentStep]);
            if (classLabel === this.state.steps[this.state.currentStep + 1]) {
                console.log("Next step");
                this.nextStep();
            }
            await new Promise(r => setTimeout(r, 500));
        }
    }
    render()  {
        return <div>
                <center><h1>HOW TO COOK THIS DISH</h1></center>

                <p id="Step1" class = "nothing">Step 1: Turn on stove
                <br></br>
                <div id ="hidden1" class = "hidden"></div>
                </p>

                <p id="Step2" class = "runningWater">Step 2: Put water in pot and start boiling
                <br></br>
                <div id ="hidden2" class = "hidden">Add some salt too.</div>
                </p>

                <p id="Step3" class = "chopping">Step 3: Chop vegetables and put them into pot
                <br></br>
                <div id ="hidden3" class = "hidden">Tomatoes work especially well.<br></br>Cucumbers too.</div>
                </p>

                <p id="Step4" class = "microwave">Step 4: Heat up last night's leftovers in microwave
                <br></br>
                <div id ="hidden4" class = "hidden">One to two minutes.</div>
                </p>

                <br></br>
                <button id="left" onClick = {this.previousStep}><center>Go Back</center></button>
                <button id="right" onClick = {this.nextStep}><center>Next Step</center></button>
                <br></br>
            </div>
    }

}

const appDiv = document.getElementById("app");
render(<App />, appDiv);
