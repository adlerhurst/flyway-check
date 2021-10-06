import * as core from '@actions/core'
import * as github from '@actions/github'

const isPullRequest = () => {
  return github.context.payload.pull_request !== undefined
}

const checkoutRef = () => {
  // TODO: implement checkout a
}

async function run(): Promise<void> {
  try {
    const token = core.getInput('tkn')
    const client = github.getOctokit(token)

    const trees = await client.request(
      `GET ${github.context.payload.repository?.trees_url}`
    )
    console.log(`The event payload: ${JSON.stringify(trees.data, undefined, 2)}`)
    // Get the JSON webhook payload for the event that triggered the workflow
    const payload = JSON.stringify(github.context.payload, undefined, 2)
    console.log(`The event payload: ${payload}`)
  } catch (error: any) {
    core.setFailed(`something happened: ${error.message}`)
  }
}

run()
