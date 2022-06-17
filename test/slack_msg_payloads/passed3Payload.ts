import { 
	Message,
	Header,
	Divider,
	Section,
	Button 
} from "slack-block-builder";

const passed3Payload = Message().blocks(
    Header({ text: "Quality Gate passed" }),
    Divider(),
    Section({ text: "*SonarQube Quality Gate Results:*" }).accessory(
        Button({ text: ":white_check_mark: Passed", url: "https://sonarqube.cloudapps.telus.com/dashboard?id=wireless-subscription-gql&pullRequest=161", value: "qg_results", actionId: "button-action" })),
    Header({ text: "Additional Information" }),
    Divider(),
    Section({ text: "_The following metrics might not affect the Quality Gate status but improving  them will improve your project code quality and security._" }),
    Header({ text: "0 Issues" }),
    Section({ text: "<https://sonarqube.cloudapps.telus.com/project/issues?id=wireless-subscription-gql&amppullRequest=161&ampresolved=false&amptypes=BUG|:sq-bug:> <https://sonarqube.cloudapps.telus.com/project/issues?id=wireless-subscription-gql&amppullRequest=161&ampresolved=false&amptypes=BUG|:sq-a:> <https://sonarqube.cloudapps.telus.com/project/issues?id=wireless-subscription-gql&amppullRequest=161&ampresolved=false&amptypes=BUG|0 Bugs>\n<https://sonarqube.cloudapps.telus.com/project/issues?id=wireless-subscription-gql&amppullRequest=161&ampresolved=false&amptypes=VULNERABILITY|:sq-v-lock:> <https://sonarqube.cloudapps.telus.com/project/issues?id=wireless-subscription-gql&amppullRequest=161&ampresolved=false&amptypes=VULNERABILITY|:sq-a:> <https://sonarqube.cloudapps.telus.com/project/issues?id=wireless-subscription-gql&amppullRequest=161&ampresolved=false&amptypes=VULNERABILITY|0 Vulnerabilities>\n<https://sonarqube.cloudapps.telus.com/security_hotspots?id=wireless-subscription-gql&amppullRequest=161|:sq-s-lock:> <https://sonarqube.cloudapps.telus.com/security_hotspots?id=wireless-subscription-gql&amppullRequest=161|:sq-a:> <https://sonarqube.cloudapps.telus.com/security_hotspots?id=wireless-subscription-gql&amppullRequest=161|0 Security Hotspots>\n<https://sonarqube.cloudapps.telus.com/project/issues?id=wireless-subscription-gql&amppullRequest=161&ampresolved=false&amptypes=CODE_SMELL|:sq-code-smell:> <https://sonarqube.cloudapps.telus.com/project/issues?id=wireless-subscription-gql&amppullRequest=161&ampresolved=false&amptypes=CODE_SMELL|:sq-a:> <https://sonarqube.cloudapps.telus.com/project/issues?id=wireless-subscription-gql&amppullRequest=161&ampresolved=false&amptypes=CODE_SMELL|0 Code Smells>" }),
    Header({ text: "Coverage and Duplications" }),
    Section({ text: "<https://sonarqube.cloudapps.telus.com/component_measures?id=wireless-subscription-gql&amppullRequest=161&ampmetric=new_coverage&ampview=list|0.0% Coverage (14.7% Estimated after merge)>\n<https://sonarqube.cloudapps.telus.com/component_measures?id=wireless-subscription-gql&amppullRequest=161&ampmetric=new_duplicated_lines_density&ampview=list|0.0% Duplication (0.0% Estimated after merge)>" })
).buildToObject();

export default passed3Payload;