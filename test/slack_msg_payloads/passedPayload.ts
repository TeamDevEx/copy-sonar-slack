const passedPayload: Object = {
	blocks: [
		{
			type: "header",
			text: {
				type: "plain_text",
				text: "Quality Gate passed",
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
				text: "*SonarQube Quality Gate Results:*",
			},
			accessory: {
				type: "button",
				text: {
					type: "plain_text",
					text: ":white_check_mark: Passed",
					emoji: true,
				},
				value: "qg_results",
				url: "https://sonarqube.cloudapps.telus.com/dashboard?id=unicorn-run-frontend&pullRequest=112",
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
				text: "0 Issues",
				emoji: true,
			},
		},
		{
			type: "section",
			text: {
				type: "mrkdwn",
				text: "<https://sonarqube.cloudapps.telus.com/project/issues?id=unicorn-run-frontend&amppullRequest=112&ampresolved=false&amptypes=BUG|:sq-bug:> <https://sonarqube.cloudapps.telus.com/project/issues?id=unicorn-run-frontend&amppullRequest=112&ampresolved=false&amptypes=BUG|:sq-a:> <https://sonarqube.cloudapps.telus.com/project/issues?id=unicorn-run-frontend&amppullRequest=112&ampresolved=false&amptypes=BUG|0 Bugs>\n<https://sonarqube.cloudapps.telus.com/project/issues?id=unicorn-run-frontend&amppullRequest=112&ampresolved=false&amptypes=VULNERABILITY|:sq-v-lock:> <https://sonarqube.cloudapps.telus.com/project/issues?id=unicorn-run-frontend&amppullRequest=112&ampresolved=false&amptypes=VULNERABILITY|:sq-a:> <https://sonarqube.cloudapps.telus.com/project/issues?id=unicorn-run-frontend&amppullRequest=112&ampresolved=false&amptypes=VULNERABILITY|0 Vulnerabilities>\n<https://sonarqube.cloudapps.telus.com/security_hotspots?id=unicorn-run-frontend&amppullRequest=112|:sq-s-lock:> <https://sonarqube.cloudapps.telus.com/security_hotspots?id=unicorn-run-frontend&amppullRequest=112|:sq-a:> <https://sonarqube.cloudapps.telus.com/security_hotspots?id=unicorn-run-frontend&amppullRequest=112|0 Security Hotspots>\n<https://sonarqube.cloudapps.telus.com/project/issues?id=unicorn-run-frontend&amppullRequest=112&ampresolved=false&amptypes=CODE_SMELL|:sq-code-smell:> <https://sonarqube.cloudapps.telus.com/project/issues?id=unicorn-run-frontend&amppullRequest=112&ampresolved=false&amptypes=CODE_SMELL|:sq-a:> <https://sonarqube.cloudapps.telus.com/project/issues?id=unicorn-run-frontend&amppullRequest=112&ampresolved=false&amptypes=CODE_SMELL|0 Code Smells>",
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
				text: "<https://sonarqube.cloudapps.telus.com/component_measures?id=unicorn-run-frontend&amppullRequest=112|No Coverage information>\n<https://sonarqube.cloudapps.telus.com/component_measures?id=unicorn-run-frontend&amppullRequest=112&ampmetric=duplicated_lines_density&ampview=list|No Duplication information (0.0% Estimated after merge)>",
			},
		}
	]
};

export default passedPayload;