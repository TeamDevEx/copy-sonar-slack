import { context } from '@actions/github';
import * as core from '@actions/core';
import * as utils from "./utils";
import { SQinfo } from './SQinfo';

function main() {
    // Creating the SQinfo object
    const sq_qg_info: SQinfo = {
        title: context.payload.check_run.output.title,
        details_url: context.payload.check_run.details_url,
        conclusion: context.payload.check_run.conclusion,
        sq_qg_summary: utils.makeSlackCompatible(context.payload.check_run.output.summary)
    }

    // Generate Slack message payload
    const slackMsgPayload = createSlackMessagePayload(sq_qg_info);

    // Set action output
    core.setOutput("slack-msg-payload", slackMsgPayload);
}

export function createSlackMessagePayload(info: SQinfo): Object {
    // Slack message payload
    const divider = {
        type: "divider",
    };
    const slack_payload: any = {
        blocks: [
            {
                type: "header",
                text: {
                    type: "plain_text",
                    text: `${info.title}`,
                    emoji: true,
                },
            },
        ],
    };
    slack_payload.blocks.push(divider);

    // Creating block for quality gate results
    const qg_status_link = {
        type: "section",
        text: {
            type: "mrkdwn",
            text: "",
        },
        accessory: {
            type: "button",
            text: {
                type: "plain_text",
                text: "",
                emoji: true,
            },
            value: "qg_results",
            url: `${info.details_url}`,
            action_id: "button-action",
        },
    };
    if (info.conclusion === "success") {
        qg_status_link.text.text = "*SonarQube Quality Gate Results:*"
        qg_status_link.accessory.text.text = ":white_check_mark: Passed";
    } else if (info.conclusion === "failure") {
        const failedCovMsg = utils.getFailedCoverageMsg(info.sq_qg_summary);
        qg_status_link.text.text = failedCovMsg;
        qg_status_link.accessory.text.text = ":x: Failed";
    } else {
        throw new Error("Something went wrong! SonarQube Code Analysis did not pass or fail.")
    }
    slack_payload.blocks.push(qg_status_link);

    // Creating the additional information section
    const additionalInfoHeader = {
        type: "header",
		text: {
			type: "plain_text",
			text: "Additional Information",
			emoji: true,
		},
    };
    slack_payload.blocks.push(additionalInfoHeader);
    slack_payload.blocks.push(divider);

    const additionalInfoBody = {
        type: "section",
        text: {
            type: "mrkdwn",
            text: "",
        },
    };
    additionalInfoBody.text.text = '_' + utils.getAdditionalInfoBody(info.sq_qg_summary) + '_';
    slack_payload.blocks.push(additionalInfoBody);

    // Creating the Issues section
    const issuesHeader = {
        type: "header",
        text: {
            type: "plain_text",
            text: "",
            emoji: true,
        },
    };
    issuesHeader.text.text = utils.getIssuesTitle(info.sq_qg_summary);
    slack_payload.blocks.push(issuesHeader);

    const issuesBody = {
        type: "section",
        text: {
            type: "mrkdwn",
            text: `${utils.getBugInfo(info.sq_qg_summary)}\n${utils.getVulnerabilitiesInfo(info.sq_qg_summary)}\n${utils.getSecurityInfo(info.sq_qg_summary)}\n${utils.getCodeSmellInfo(info.sq_qg_summary)}`,
        },
    };
    slack_payload.blocks.push(issuesBody);

    // Create Coverage and Duplications section 
    const covDupHeader = {
        type: "header",
        text: {
            type: "plain_text",
            text: "",
            emoji: true,
        },
    };
    covDupHeader.text.text = utils.getCoverageDuplicationTitle(info.sq_qg_summary);
    slack_payload.blocks.push(covDupHeader);

    const covDupBody = {
        type: "section",
        text: {
            type: "mrkdwn",
            text: `${utils.getCoverageInfo(info.sq_qg_summary)}\n${utils.getDuplicationInfo(info.sq_qg_summary)}`,
        },
    };
    slack_payload.blocks.push(covDupBody);

    return slack_payload;
}

try {
    main();
} catch(error: any) {
    core.error(error);
    core.setFailed(error.message);
}
