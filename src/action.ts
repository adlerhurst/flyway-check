import * as core from '@actions/core'
import * as github from '@actions/github'

const isPullRequest = () => {
  return github.context.payload.pull_request === undefined
}

async function run(): Promise<void> {
  try {
    // `who-to-greet` input defined in action metadata file
    const nameToGreet = core.getInput('who-to-greet')
    console.log(`Hello ${nameToGreet}!`)
    const time = new Date().toTimeString()
    core.setOutput('time', time)
    // Get the JSON webhook payload for the event that triggered the workflow
    const payload = JSON.stringify(github.context.payload, undefined, 2)
    console.log(`The event payload: ${payload}`)

    console.log(`is pull request ${isPullRequest()}`)
  } catch (error: any) {
    core.setFailed(error.message)
  }
}

run()
