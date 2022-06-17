import { 
	Message,
	Header,
	Divider,
	Section,
	Button 
} from "slack-block-builder";

const passedPayload = Message().blocks(
    Header({ text: "Quality Gate passed" }),
    Divider(),
    Section({ text: "*SonarQube Quality Gate Results:*" }).accessory(
        Button({ text: ":white_check_mark: Passed", url: "https://sonarqube.cloudapps.telus.com/dashboard?id=unicorn-run-frontend&pullRequest=112", value: "qg_results", actionId: "button-action" })),
    Header({ text: "Additional Information" }),
    Divider(),
    Section({ text: "_The following metrics might not affect the Quality Gate status but improving  them will improve your project code quality and security._" }),
    Header({ text: "0 Issues" }),
    Section({ text: "<https://sonarqube.cloudapps.telus.com/project/issues?id=unicorn-run-frontend&pullRequest=112&resolved=false&types=BUG|:sq-bug:> <https://sonarqube.cloudapps.telus.com/project/issues?id=unicorn-run-frontend&pullRequest=112&resolved=false&types=BUG|:sq-a:> <https://sonarqube.cloudapps.telus.com/project/issues?id=unicorn-run-frontend&pullRequest=112&resolved=false&types=BUG|0 Bugs>\n<https://sonarqube.cloudapps.telus.com/project/issues?id=unicorn-run-frontend&pullRequest=112&resolved=false&types=VULNERABILITY|:sq-v-lock:> <https://sonarqube.cloudapps.telus.com/project/issues?id=unicorn-run-frontend&pullRequest=112&resolved=false&types=VULNERABILITY|:sq-a:> <https://sonarqube.cloudapps.telus.com/project/issues?id=unicorn-run-frontend&pullRequest=112&resolved=false&types=VULNERABILITY|0 Vulnerabilities>\n<https://sonarqube.cloudapps.telus.com/security_hotspots?id=unicorn-run-frontend&pullRequest=112|:sq-s-lock:> <https://sonarqube.cloudapps.telus.com/security_hotspots?id=unicorn-run-frontend&pullRequest=112|:sq-a:> <https://sonarqube.cloudapps.telus.com/security_hotspots?id=unicorn-run-frontend&pullRequest=112|0 Security Hotspots>\n<https://sonarqube.cloudapps.telus.com/project/issues?id=unicorn-run-frontend&pullRequest=112&resolved=false&types=CODE_SMELL|:sq-code-smell:> <https://sonarqube.cloudapps.telus.com/project/issues?id=unicorn-run-frontend&pullRequest=112&resolved=false&types=CODE_SMELL|:sq-a:> <https://sonarqube.cloudapps.telus.com/project/issues?id=unicorn-run-frontend&pullRequest=112&resolved=false&types=CODE_SMELL|0 Code Smells>" }),
    Header({ text: "Coverage and Duplications" }),
    Section({ text: "<https://sonarqube.cloudapps.telus.com/component_measures?id=unicorn-run-frontend&pullRequest=112|No Coverage information>\n<https://sonarqube.cloudapps.telus.com/component_measures?id=unicorn-run-frontend&pullRequest=112&metric=duplicated_lines_density&view=list|No Duplication information (0.0% Estimated after merge)>" })
).buildToObject();

export default passedPayload;