import { 
	Message,
	Header,
	Divider,
	Section,
	Button 
} from "slack-block-builder";

const failedPayload = Message().blocks(
    Header({ text: "Quality Gate failed" }),
    Divider(),
    Section({ text: "0.0% Coverage on New Code (is less than 80%)" }).accessory(
        Button({ text: ":x: Failed", url: "https://sonarqube.cloudapps.telus.com/dashboard?id=wireless-subscription-gql&pullRequest=141", value: "qg_results", actionId: "button-action" })),
    Header({ text: "Additional Information" }),
    Divider(),
    Section({ text: "_The following metrics might not affect the Quality Gate status but improving  them will improve your project code quality and security._" }),
    Header({ text: "1 Issue" }),
    Section({ text: "<https://sonarqube.cloudapps.telus.com/project/issues?id=wireless-subscription-gql&pullRequest=141&resolved=false&types=BUG|:sq-bug:> <https://sonarqube.cloudapps.telus.com/project/issues?id=wireless-subscription-gql&pullRequest=141&resolved=false&types=BUG|:sq-a:> <https://sonarqube.cloudapps.telus.com/project/issues?id=wireless-subscription-gql&pullRequest=141&resolved=false&types=BUG|0 Bugs>\n<https://sonarqube.cloudapps.telus.com/project/issues?id=wireless-subscription-gql&pullRequest=141&resolved=false&types=VULNERABILITY|:sq-v-lock:> <https://sonarqube.cloudapps.telus.com/project/issues?id=wireless-subscription-gql&pullRequest=141&resolved=false&types=VULNERABILITY|:sq-a:> <https://sonarqube.cloudapps.telus.com/project/issues?id=wireless-subscription-gql&pullRequest=141&resolved=false&types=VULNERABILITY|0 Vulnerabilities>\n<https://sonarqube.cloudapps.telus.com/security_hotspots?id=wireless-subscription-gql&pullRequest=141|:sq-s-lock:> <https://sonarqube.cloudapps.telus.com/security_hotspots?id=wireless-subscription-gql&pullRequest=141|:sq-a:> <https://sonarqube.cloudapps.telus.com/security_hotspots?id=wireless-subscription-gql&pullRequest=141|0 Security Hotspots>\n<https://sonarqube.cloudapps.telus.com/project/issues?id=wireless-subscription-gql&pullRequest=141&resolved=false&types=CODE_SMELL|:sq-code-smell:> <https://sonarqube.cloudapps.telus.com/project/issues?id=wireless-subscription-gql&pullRequest=141&resolved=false&types=CODE_SMELL|:sq-a:> <https://sonarqube.cloudapps.telus.com/project/issues?id=wireless-subscription-gql&pullRequest=141&resolved=false&types=CODE_SMELL|1 Code Smell>" }),
    Header({ text: "Coverage and Duplications" }),
    Section({ text: "<https://sonarqube.cloudapps.telus.com/component_measures?id=wireless-subscription-gql&pullRequest=141&metric=new_coverage&view=list|0.0% Coverage (15.2% Estimated after merge)>\n<https://sonarqube.cloudapps.telus.com/component_measures?id=wireless-subscription-gql&pullRequest=141&metric=new_duplicated_lines_density&view=list|0.0% Duplication (0.0% Estimated after merge)>" })
).buildToObject();

export default failedPayload;