import { 
	Message,
	Header,
	Divider,
	Section,
	Button 
} from "slack-block-builder";

const passed3Payload = Message().blocks(
    Header({ text: "Quality Gate Passed" }),
    Divider(),
    Section({ text: "*SonarQube Quality Gate Results:*" }).accessory(
        Button({ text: ":white_check_mark: Passed", url: "https://sonarqube.cloudapps.telus.com/dashboard?id=wireless-subscription-gql&pullRequest=161", value: "qg_results", actionId: "button-action" })),
    Divider(),
    Header({ text: "0 Issues" }),
    Section({ text: "<https://sonarqube.cloudapps.telus.com/project/issues?id=wireless-subscription-gql&pullRequest=161&resolved=false&types=BUG|:sq-bug:> <https://sonarqube.cloudapps.telus.com/project/issues?id=wireless-subscription-gql&pullRequest=161&resolved=false&types=BUG|:sq-a:> <https://sonarqube.cloudapps.telus.com/project/issues?id=wireless-subscription-gql&pullRequest=161&resolved=false&types=BUG|0 Bugs>\n<https://sonarqube.cloudapps.telus.com/project/issues?id=wireless-subscription-gql&pullRequest=161&resolved=false&types=VULNERABILITY|:sq-v-lock:> <https://sonarqube.cloudapps.telus.com/project/issues?id=wireless-subscription-gql&pullRequest=161&resolved=false&types=VULNERABILITY|:sq-a:> <https://sonarqube.cloudapps.telus.com/project/issues?id=wireless-subscription-gql&pullRequest=161&resolved=false&types=VULNERABILITY|0 Vulnerabilities>\n<https://sonarqube.cloudapps.telus.com/security_hotspots?id=wireless-subscription-gql&pullRequest=161|:sq-s-lock:> <https://sonarqube.cloudapps.telus.com/security_hotspots?id=wireless-subscription-gql&pullRequest=161|:sq-a:> <https://sonarqube.cloudapps.telus.com/security_hotspots?id=wireless-subscription-gql&pullRequest=161|0 Security Hotspots>\n<https://sonarqube.cloudapps.telus.com/project/issues?id=wireless-subscription-gql&pullRequest=161&resolved=false&types=CODE_SMELL|:sq-code-smell:> <https://sonarqube.cloudapps.telus.com/project/issues?id=wireless-subscription-gql&pullRequest=161&resolved=false&types=CODE_SMELL|:sq-a:> <https://sonarqube.cloudapps.telus.com/project/issues?id=wireless-subscription-gql&pullRequest=161&resolved=false&types=CODE_SMELL|0 Code Smells>" }),
    Header({ text: "Coverage and Duplications" }),
    Section({ text: "<https://sonarqube.cloudapps.telus.com/component_measures?id=wireless-subscription-gql&pullRequest=161&metric=new_coverage&view=list|0.0% Coverage (14.7% Estimated after merge)>\n<https://sonarqube.cloudapps.telus.com/component_measures?id=wireless-subscription-gql&pullRequest=161&metric=new_duplicated_lines_density&view=list|0.0% Duplication (0.0% Estimated after merge)>" })
).buildToObject();

export default passed3Payload;