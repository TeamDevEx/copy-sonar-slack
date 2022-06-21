# Sonarqube Slack Integration :handshake:

This action posts a Slack message in a specific channel to provide information about the SonarQube Quality Gate results when a scan is completed on a pull request. The information generated by the Quality Gate check will be posted into Slack with all of the appropriate links to point to the various parts of the SonarQube scan that was done.

## Prerequisites :construction:

1. The SonarQube project associated with your GitHub repository needs to have the ability to report your Quality Gate status to GitHub pull requests and branches. To do so, set the following project settings at **Project Settings -> General Settings -> DevOps Platform Integration**:
    - `Configuration name`: The configuration name that corresponds to your GitHub instance.
    - `Repository identifier`: The path of your repository URL.
2. A workflow under `.github/workflows` that does a static code analysis using SonarQube. An example can be found [HERE](https://github.com/telus/cdo-eptoolshelper-pali/tree/main/Actions/examples/sonarqube) based on your project language. Another example can be found [HERE](https://github.com/telus/unicorn-run-frontend/blob/main/.github/workflows/code-analysis.yaml) which includes linting and generating your test results before performing static code analysis in the same workflow.

## How it works? :gear:

> **_Note:_** This action assumes that a check run event has occured. Please only use this action with a workflow file that is similar to the one given below as an example.

Upon a SonarQube scan of your project (done through a workflow, examples given above), a Quality Gate is created to show the results of your static code analysis. If all of the above prerequisites are met and a SonarQube scan has completed for a pull request, SonarQube will send the Quality Gate summary to GitHub where it will appear in the conversation and checks sections of the PR. This entire process is considered a check and the TELUS GitHub SonarQube bot (sonarqube-telus-swe-np) makes the Quality Gate information available under the conversation and checks sections of the PR. Once this check is completed, the workflow below will make sure that the check was created by the TELUS GitHub SonarQube bot, and if it was, it will run this action. GitHub's checks API will make all of the details related to the check run (payload) available through GitHub's context. This action then uses GitHub's context to access the payload (an example structure can be found [HERE](https://docs.github.com/en/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#check_run)) which contains the summary of the SonarQube Quality Gate in GitHub markdown. Since GitHub's markdown and Slack's markdown are not the same, the action takes the summary and extracts all of the needed information (using a bunch of regex commands) to contruct the same message that was posted under the checks section of the PR using [Slack's block builder](https://www.blockbuilder.dev/#/?id=start). 

## How to use this action? :compass:

### Inputs :inbox_tray:
- `slackToken`: A token to allow the use of your Slack Bot. This input should be a action secret in your repository (referenced as `${{ secrets.SLACK-BOT-TOKEN-NAME }}`).
- `channelID`: ID of the Slack channel to post the SonarQube Quality Gate results to.

### Outputs :outbox_tray:
- `slack-msg-payload`: A Slack message object (formatted using the slack-block-builder package) containing the results of the Quality Gate.

### Usage :memo:
To use this action, create a separate workflow YAML file under `.github/workflows` that has the content shown below. Replace the placeholder value for `channelID` to one that fits your use case and change `SLACK_BOT_TOKEN` to the name of your repository secret that stores your Slack bot token. The names and IDs of the workflow, job, and/or steps can be changed to your liking. 

``` yaml
name: SonarQube Slack Integration
on:
  check_run:
    type: ['completed']

jobs: 
    sonarqube-slack-integration:
      name: SonarQube Slack Integration
      if: github.event.check_run.app.name == 'sonarqube-telus-swe-np'
      runs-on: ubuntu-latest
        steps:
        - name: Run SonarQube Slack Integration
          uses: telus/cdo-actions-sonarqube-slack-integration@v1
          with:
            slackToken: ${{ secrets.SLACK_BOT_TOKEN }}
            channelID: '<channelID>'
```