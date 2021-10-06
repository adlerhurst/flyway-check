import * as core from '@actions/core'
import * as github from '@actions/github'

const isPullRequest = () => {
  return github.context.payload.pull_request !== undefined
}

const checkoutRef = () => {
  // TODO: implement checkout
}

async function run(): Promise<void> {
  try {
    const token = core.getInput('token')
    const client = github.getOctokit(token)

    const trees = await client.request(
      `GET ${github.context.payload.repository?.trees_url}`
    )
    console.log(`The event payload: ${JSON.stringify(trees, undefined, 2)}`)
    // Get the JSON webhook payload for the event that triggered the workflow
    const payload = JSON.stringify(github.context.payload, undefined, 2)
    console.log(`The event payload: ${payload}`)
  } catch (error: any) {
    core.setFailed(error.message)
  }
}

run()
