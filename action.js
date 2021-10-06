"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __importDefault(require("@actions/core"));
var github_1 = __importDefault(require("@actions/github"));
var isPullRequest = function () {
    return github_1.default.context.payload.pull_request === undefined;
};
try {
    // `who-to-greet` input defined in action metadata file
    var nameToGreet = core_1.default.getInput('who-to-greet');
    console.log("Hello " + nameToGreet + "!");
    var time = (new Date()).toTimeString();
    core_1.default.setOutput("time", time);
    // Get the JSON webhook payload for the event that triggered the workflow
    var payload = JSON.stringify(github_1.default.context.payload, undefined, 2);
    console.log("The event payload: " + payload);
    console.log("is pull request " + isPullRequest());
}
catch (error) {
    core_1.default.setFailed(error);
}
