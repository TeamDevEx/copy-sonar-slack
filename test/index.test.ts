import passed from "./responses/passedSummary";
import passed2 from "./responses/passed2Summary";
import passed3 from "./responses/passed3Summary";
import failed from "./responses/failedSummary";
import failedPayload from "./slack_msg_payloads/failedPayload";
import passedPayload from "./slack_msg_payloads/passedPayload";
import passed2Payload from "./slack_msg_payloads/passed2Payload";
import passed3Payload from "./slack_msg_payloads/passed3Payload";
import { createSlackMessagePayload } from "../src/index";

test('slack message payload generation for failed quality gate', () => {
    const slackPayload = createSlackMessagePayload('Quality Gate failed', 'https://sonarqube.cloudapps.telus.com/dashboard?id=wireless-subscription-gql&pullRequest=141', 'failure', failed);
    expect(JSON.stringify(slackPayload)).toBe(JSON.stringify(failedPayload));
});

test('slack message payload generation for passed quality gate', () => {
    const slackPayload = createSlackMessagePayload('Quality Gate passed', 'https://sonarqube.cloudapps.telus.com/dashboard?id=unicorn-run-frontend&pullRequest=112', 'success', passed);
    expect(JSON.stringify(slackPayload)).toBe(JSON.stringify(passedPayload));
});

test('slack message payload generation for passed2 quality gate', () => {
    const slackPayload = createSlackMessagePayload('Quality Gate passed', 'https://sonarqube.cloudapps.telus.com/dashboard?id=wireless-subscription-gql&pullRequest=165', 'success', passed2);
    expect(JSON.stringify(slackPayload)).toBe(JSON.stringify(passed2Payload));
});

test('slack message payload generation for passed3 quality gate', () => {
    const slackPayload = createSlackMessagePayload('Quality Gate passed', 'https://sonarqube.cloudapps.telus.com/dashboard?id=wireless-subscription-gql&pullRequest=161', 'success', passed3);
    expect(JSON.stringify(slackPayload)).toBe(JSON.stringify(passed3Payload));
});
