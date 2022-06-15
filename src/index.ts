import { context } from '@actions/github';
import * as core from '@actions/core';
import * as utils from "./utils";

function main() {
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
                    text: `${context.payload.check_run.output.title}`,
                    emoji: true,
                },
            },
        ],
    };
    slack_payload.blocks.push(divider);

    // Getting summary markdown of quality gate results and making it Slack compatible
    let sq_qg_summary: string = utils.makeSlackCompatible(context.payload.check_run.output.summary);

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
            url: `${context.payload.check_run.details_url}`,
            action_id: "button-action",
        },
    };
    if (context.payload.check_run.conclusion === "success") {
        qg_status_link.text.text = "*SonarQube Quality Gate Results:*"
        qg_status_link.accessory.text.text = ":white_check_mark: Passed";
    } else if (context.payload.check_run.conclusion === "failure") {
        const failedCovMsg = utils.getFailedCoverageMsg(sq_qg_summary);
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
    additionalInfoBody.text.text = '_' + utils.getAdditionalInfoBody(sq_qg_summary) + '_';
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
    issuesHeader.text.text = utils.getIssuesTitle(sq_qg_summary);
    slack_payload.blocks.push(issuesHeader);

    const issuesBody = {
        type: "section",
        text: {
            type: "mrkdwn",
            text: `${utils.getBugInfo(sq_qg_summary)}\n${utils.getVulnerabilitiesInfo(sq_qg_summary)}\n${utils.getSecurityInfo(sq_qg_summary)}\n${utils.getCodeSmellInfo(sq_qg_summary)}`,
        },
    };
    slack_payload.blocks.push(issuesBody);

    core.info(JSON.stringify(slack_payload));
    core.setOutput("slack-msg-payload", slack_payload);
}

try {
    main();
} catch(error: any) {
    core.error(error);
    core.setFailed(error.message);
}
