import passed from "./responses/passedSummary";
import passed2 from "./responses/passed2Summary";
import passed3 from "./responses/passed3Summary";
import failed from "./responses/failedSummary";
import failedPayload from "./slack_msg_payloads/failedPayload";
import passedPayload from "./slack_msg_payloads/passedPayload";
import passed2Payload from "./slack_msg_payloads/passed2Payload";
import passed3Payload from "./slack_msg_payloads/passed3Payload";
import { createSlackMessagePayload } from "../src/index";
import { SQinfo } from "../src/SQinfo";

describe("createSlackMessagePayload", () => {
    it('should return a Slack message payload resembling failed quality gate when given a failed quality gate summary', () => {
        const sq_qg_info: SQinfo = {
            title: 'Quality Gate failed',
            details_url: 'https://sonarqube.cloudapps.telus.com/dashboard?id=wireless-subscription-gql&pullRequest=141',
            conclusion: 'failure',
            sq_qg_summary: failed
        }
        const slackPayload = createSlackMessagePayload(sq_qg_info);
        expect(slackPayload).toStrictEqual(failedPayload);
    });
    
    it('should return a Slack message payload resembling a successful quality gate when given a successful quality gate summary', () => {
        const sq_qg_info: SQinfo = {
            title: 'Quality Gate passed',
            details_url: 'https://sonarqube.cloudapps.telus.com/dashboard?id=unicorn-run-frontend&pullRequest=112',
            conclusion: 'success',
            sq_qg_summary: passed
        }
        const slackPayload = createSlackMessagePayload(sq_qg_info);
        expect(slackPayload).toStrictEqual(passedPayload);
    });
    
    it('should return a Slack message payload resembling a successful quality gate when given a successful quality gate summary (different coverage and duplication structure)', () => {
        const sq_qg_info: SQinfo = {
            title: 'Quality Gate passed',
            details_url: 'https://sonarqube.cloudapps.telus.com/dashboard?id=wireless-subscription-gql&pullRequest=165',
            conclusion: 'success',
            sq_qg_summary: passed2
        }
        const slackPayload = createSlackMessagePayload(sq_qg_info);
        expect(slackPayload).toStrictEqual(passed2Payload);
    });
    
    it('should return a Slack message payload resembling a successful quality gate when given a successful quality gate summary (another different coverage and duplication structure)', () => {
        const sq_qg_info: SQinfo = {
            title: 'Quality Gate passed',
            details_url: 'https://sonarqube.cloudapps.telus.com/dashboard?id=wireless-subscription-gql&pullRequest=161',
            conclusion: 'success',
            sq_qg_summary: passed3
        }
        const slackPayload = createSlackMessagePayload(sq_qg_info);
        expect(slackPayload).toStrictEqual(passed3Payload);
    });
});
