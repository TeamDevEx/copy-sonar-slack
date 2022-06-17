const failedPayload: Object = {
	blocks: [
		{
			type: "header",
			text: {
				type: "plain_text",
				text: "Quality Gate failed",
				emoji: true,
			},
		},
		{
			type: "divider",
		},
		{
			type: "section",
			text: {
				type: "mrkdwn",
				text: "0.0% Coverage on New Code (is less than 80%)",
			},
			accessory: {
				type: "button",
				text: {
					type: "plain_text",
					text: ":x: Failed",
					emoji: true,
				},
				value: "qg_results",
				url: "https://sonarqube.cloudapps.telus.com/dashboard?id=wireless-subscription-gql&pullRequest=141",
				action_id: "button-action",
			},
		},
		{
			type: "header",
			text: {
				type: "plain_text",
				text: "Additional Information",
				emoji: true,
			},
		},
		{
			type: "divider",
		},
		{
			type: "section",
			text: {
				type: "mrkdwn",
				text: "_The following metrics might not affect the Quality Gate status but improving  them will improve your project code quality and security._",
			},
		},
		{
			type: "header",
			text: {
				type: "plain_text",
				text: "1 Issue",
				emoji: true,
			},
		},
		{
			type: "section",
			text: {
				type: "mrkdwn",
				text: "<https://sonarqube.cloudapps.telus.com/project/issues?id=wireless-subscription-gql&amppullRequest=141&ampresolved=false&amptypes=BUG|:sq-bug:> <https://sonarqube.cloudapps.telus.com/project/issues?id=wireless-subscription-gql&amppullRequest=141&ampresolved=false&amptypes=BUG|:sq-a:> <https://sonarqube.cloudapps.telus.com/project/issues?id=wireless-subscription-gql&amppullRequest=141&ampresolved=false&amptypes=BUG|0 Bugs>\n<https://sonarqube.cloudapps.telus.com/project/issues?id=wireless-subscription-gql&amppullRequest=141&ampresolved=false&amptypes=VULNERABILITY|:sq-v-lock:> <https://sonarqube.cloudapps.telus.com/project/issues?id=wireless-subscription-gql&amppullRequest=141&ampresolved=false&amptypes=VULNERABILITY|:sq-a:> <https://sonarqube.cloudapps.telus.com/project/issues?id=wireless-subscription-gql&amppullRequest=141&ampresolved=false&amptypes=VULNERABILITY|0 Vulnerabilities>\n<https://sonarqube.cloudapps.telus.com/security_hotspots?id=wireless-subscription-gql&amppullRequest=141|:sq-s-lock:> <https://sonarqube.cloudapps.telus.com/security_hotspots?id=wireless-subscription-gql&amppullRequest=141|:sq-a:> <https://sonarqube.cloudapps.telus.com/security_hotspots?id=wireless-subscription-gql&amppullRequest=141|0 Security Hotspots>\n<https://sonarqube.cloudapps.telus.com/project/issues?id=wireless-subscription-gql&amppullRequest=141&ampresolved=false&amptypes=CODE_SMELL|:sq-code-smell:> <https://sonarqube.cloudapps.telus.com/project/issues?id=wireless-subscription-gql&amppullRequest=141&ampresolved=false&amptypes=CODE_SMELL|:sq-a:> <https://sonarqube.cloudapps.telus.com/project/issues?id=wireless-subscription-gql&amppullRequest=141&ampresolved=false&amptypes=CODE_SMELL|1 Code Smell>",
			},
		},
		{
			type: "header",
			text: {
				type: "plain_text",
				text: "Coverage and Duplications",
				emoji: true,
			},
		},
		{
			type: "section",
			text: {
				type: "mrkdwn",
				text: "<https://sonarqube.cloudapps.telus.com/component_measures?id=wireless-subscription-gql&amppullRequest=141&ampmetric=new_coverage&ampview=list|0.0% Coverage (15.2% Estimated after merge)>\n<https://sonarqube.cloudapps.telus.com/component_measures?id=wireless-subscription-gql&amppullRequest=141&ampmetric=new_duplicated_lines_density&ampview=list|0.0% Duplication (0.0% Estimated after merge)>",
			},
		}
	]
};

export default failedPayload;