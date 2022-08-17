import { context } from "@actions/github";
import * as core from "@actions/core";
import * as utils from "./utils";
import { SQinfo } from "./SQinfo";
import {
  Message,
  Header,
  Divider,
  Section,
  Button
} from "slack-block-builder";

function main() {
  // Validate inputs to action
  const slackBotToken = core.getInput('slackToken', { required: true });
  const slackCahnnelID = core.getInput('channelID', { required: true });
  if (!slackBotToken && !slackCahnnelID) {
    throw new Error("Either the slack bot token or the slack channel ID has not been supplied with a proper input value!");
  }

  // Creating the SQinfo object
  const sq_qg_info: SQinfo = {
    title: context.payload.check_run.output.title,
    details_url: context.payload.check_run.details_url,
    conclusion: context.payload.check_run.conclusion,
    sq_qg_summary: context.payload.check_run.output.summary
  };

  // Generate Slack message payload
  const slackMsgPayload = createSlackMessagePayload(sq_qg_info);

  // Set action output
  core.setOutput("slack-msg-payload", slackMsgPayload);
}

export function createSlackMessagePayload(info: SQinfo): Object {
  if (!(info.conclusion === "success" || info.conclusion === "failure")) {
    throw new Error("Something went wrong! SonarQube Code Analysis did not pass or fail.");
  }

  const msgTitle = info.title.split(" ").map((word) => {
    return word[0].toUpperCase() + word.substring(1);
  }).join(" ");

  return Message().blocks(
    Header({ text: `${msgTitle}` }),
    Divider(),
    info.conclusion === "success"
      ? Section({ text: "*SonarQube Quality Gate Results:*" }).accessory(
          Button({ text: ":white_check_mark: Passed", url: `${info.details_url}`, value: "qg_results", actionId: "button-action" }))
      : Section({ text: `*SonarQube Quality Gate Results:*\n${utils.getFailedCoverageMsg(info.sq_qg_summary, info.details_url)}` }).accessory(
        Button({ text: ":x: Failed", url: `${info.details_url}`, value: "qg_results", actionId: "button-action" })),
    Divider(),
    Header({ text: `${utils.getIssuesTitle(info.sq_qg_summary)}` }),
    Section({ text: `${utils.getBugInfo(
        info.sq_qg_summary
      )}\n${utils.getVulnerabilitiesInfo(
        info.sq_qg_summary
      )}\n${utils.getSecurityInfo(
        info.sq_qg_summary
      )}\n${utils.getCodeSmellInfo(info.sq_qg_summary)}` }),
    Header({ text: `${utils.getCoverageDuplicationTitle(info.sq_qg_summary)}` }),
    Section({ text: `${utils.getCoverageInfo(
        info.sq_qg_summary
      )}\n${utils.getDuplicationInfo(info.sq_qg_summary)}` })
  ).buildToObject();
}

try {
  main();
} catch (error: any) {
  core.error(error);
  core.setFailed(error.message);
}
