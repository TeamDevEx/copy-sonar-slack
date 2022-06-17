import passed from "./responses/passedSummary";
import passed2 from "./responses/passed2Summary";
import passed3 from "./responses/passed3Summary";
import failed from "./responses/failedSummary";
import failedPayload from "./slack_msg_payloads/failedPayload";
import passedPayload from "./slack_msg_payloads/passedPayload";
import passed2Payload from "./slack_msg_payloads/passed2Payload";
import passed3Payload from "./slack_msg_payloads/passed3Payload";
import { createSlackMessagePayload } from "../src/index";

describe("createSlackMessagePayload", () => {
    it('should return a Slack message payload resembling failed quality gate when given a failed quality gate summary', () => {
        const slackPayload = createSlackMessagePayload('Quality Gate failed', 'https://sonarqube.cloudapps.telus.com/dashboard?id=wireless-subscription-gql&pullRequest=141', 'failure', failed);
        expect(slackPayload).toStrictEqual(failedPayload);
    });
    
    it('should return a Slack message payload resembling a successful quality gate when given a successful quality gate summary', () => {
        const slackPayload = createSlackMessagePayload('Quality Gate passed', 'https://sonarqube.cloudapps.telus.com/dashboard?id=unicorn-run-frontend&pullRequest=112', 'success', passed);
        expect(slackPayload).toStrictEqual(passedPayload);
    });
    
    it('should return a Slack message payload resembling a successful quality gate when given a successful quality gate summary (different coverage and duplication structure)', () => {
        const slackPayload = createSlackMessagePayload('Quality Gate passed', 'https://sonarqube.cloudapps.telus.com/dashboard?id=wireless-subscription-gql&pullRequest=165', 'success', passed2);
        expect(slackPayload).toStrictEqual(passed2Payload);
    });
    
    it('should return a Slack message payload resembling a successful quality gate when given a successful quality gate summary (another different coverage and duplication structure)', () => {
        const slackPayload = createSlackMessagePayload('Quality Gate passed', 'https://sonarqube.cloudapps.telus.com/dashboard?id=wireless-subscription-gql&pullRequest=161', 'success', passed3);
        expect(slackPayload).toStrictEqual(passed3Payload);
    });
});
