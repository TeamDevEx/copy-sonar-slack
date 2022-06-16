import passed from "./responses/passedSummary";
import passed2 from "./responses/passed2Summary";
import passed3 from "./responses/passed3Summary";
import failed from "./responses/failedSummary";
import * as utils from "../src/utils";

test('replacing all <, >, and & in passed string', () => {
    const expectedVal = "[![Quality Gate passed](https://raw.githubusercontent.com/SonarSource/sonarqube-static-resources/master/v86/checks/QualityGateBadge/passed.svg 'Quality Gate passed')](https://sonarqube.cloudapps.telus.com/dashboard?id=unicorn-run-frontend&amppullRequest=112)\n\n\n## Additional information\n\n*The following metrics might not affect the Quality Gate status but improving*  \n*them will improve your project code quality and security.*\n\n### 0 Issues\n\n[![Bug](https://raw.githubusercontent.com/SonarSource/sonarqube-static-resources/master/v86/common/bug.svg 'Bug')](https://sonarqube.cloudapps.telus.com/project/issues?id=unicorn-run-frontend&amppullRequest=112&ampresolved=false&amptypes=BUG) [![A](https://raw.githubusercontent.com/SonarSource/sonarqube-static-resources/master/v86/checks/RatingBadge/A.svg 'A')](https://sonarqube.cloudapps.telus.com/project/issues?id=unicorn-run-frontend&amppullRequest=112&ampresolved=false&amptypes=BUG) [0 Bugs](https://sonarqube.cloudapps.telus.com/project/issues?id=unicorn-run-frontend&amppullRequest=112&ampresolved=false&amptypes=BUG)  \n[![Vulnerability](https://raw.githubusercontent.com/SonarSource/sonarqube-static-resources/master/v86/common/vulnerability.svg 'Vulnerability')](https://sonarqube.cloudapps.telus.com/project/issues?id=unicorn-run-frontend&amppullRequest=112&ampresolved=false&amptypes=VULNERABILITY) [![A](https://raw.githubusercontent.com/SonarSource/sonarqube-static-resources/master/v86/checks/RatingBadge/A.svg 'A')](https://sonarqube.cloudapps.telus.com/project/issues?id=unicorn-run-frontend&amppullRequest=112&ampresolved=false&amptypes=VULNERABILITY) [0 Vulnerabilities](https://sonarqube.cloudapps.telus.com/project/issues?id=unicorn-run-frontend&amppullRequest=112&ampresolved=false&amptypes=VULNERABILITY)  \n[![Security Hotspot](https://raw.githubusercontent.com/SonarSource/sonarqube-static-resources/master/v86/common/security_hotspot.svg 'Security Hotspot')](https://sonarqube.cloudapps.telus.com/security_hotspots?id=unicorn-run-frontend&amppullRequest=112) [![A](https://raw.githubusercontent.com/SonarSource/sonarqube-static-resources/master/v86/checks/RatingBadge/A.svg 'A')](https://sonarqube.cloudapps.telus.com/security_hotspots?id=unicorn-run-frontend&amppullRequest=112) [0 Security Hotspots](https://sonarqube.cloudapps.telus.com/security_hotspots?id=unicorn-run-frontend&amppullRequest=112)  \n[![Code Smell](https://raw.githubusercontent.com/SonarSource/sonarqube-static-resources/master/v86/common/code_smell.svg 'Code Smell')](https://sonarqube.cloudapps.telus.com/project/issues?id=unicorn-run-frontend&amppullRequest=112&ampresolved=false&amptypes=CODE_SMELL) [![A](https://raw.githubusercontent.com/SonarSource/sonarqube-static-resources/master/v86/checks/RatingBadge/A.svg 'A')](https://sonarqube.cloudapps.telus.com/project/issues?id=unicorn-run-frontend&amppullRequest=112&ampresolved=false&amptypes=CODE_SMELL) [0 Code Smells](https://sonarqube.cloudapps.telus.com/project/issues?id=unicorn-run-frontend&amppullRequest=112&ampresolved=false&amptypes=CODE_SMELL)\n\n### Coverage and Duplications\n\n[![No Coverage information](https://raw.githubusercontent.com/SonarSource/sonarqube-static-resources/master/v86/checks/CoverageChart/NoCoverageInfo.svg 'No Coverage information')](https://sonarqube.cloudapps.telus.com/component_measures?id=unicorn-run-frontend&amppullRequest=112) No Coverage information  \n[![No Duplication information](https://raw.githubusercontent.com/SonarSource/sonarqube-static-resources/master/v86/checks/Duplications/NoDuplicationInfo.svg 'No Duplication information')](https://sonarqube.cloudapps.telus.com/component_measures?id=unicorn-run-frontend&amppullRequest=112&ampmetric=duplicated_lines_density&ampview=list) No Duplication information (0.0% Estimated after merge)\n\n";
    expect(utils.makeSlackCompatible(passed)).toBe(expectedVal);
});

test('replacing all <, >, and & in failed string', () => {
    const expectedVal = "[![Quality Gate failed](https://raw.githubusercontent.com/SonarSource/sonarqube-static-resources/master/v86/checks/QualityGateBadge/failed.svg 'Quality Gate failed')](https://sonarqube.cloudapps.telus.com/dashboard?id=wireless-subscription-gql&amppullRequest=141)\n\n[![Failed condition](https://raw.githubusercontent.com/SonarSource/sonarqube-static-resources/master/v86/checks/FailedConditionIcon.svg 'Failed condition')](https://sonarqube.cloudapps.telus.com/dashboard?id=wireless-subscription-gql&amppullRequest=141) [![0.0%](https://raw.githubusercontent.com/SonarSource/sonarqube-static-resources/master/v86/checks/CoverageChart/0.svg '0.0%')](https://sonarqube.cloudapps.telus.com/dashboard?id=wireless-subscription-gql&amppullRequest=141) 0.0% Coverage on New Code (is less than 80%)  \n\n[See analysis details on SonarQube](https://sonarqube.cloudapps.telus.com/dashboard?id=wireless-subscription-gql&amppullRequest=141)\n\n## Additional information\n\n*The following metrics might not affect the Quality Gate status but improving*  \n*them will improve your project code quality and security.*\n\n### 1 Issue\n\n[![Bug](https://raw.githubusercontent.com/SonarSource/sonarqube-static-resources/master/v86/common/bug.svg 'Bug')](https://sonarqube.cloudapps.telus.com/project/issues?id=wireless-subscription-gql&amppullRequest=141&ampresolved=false&amptypes=BUG) [![A](https://raw.githubusercontent.com/SonarSource/sonarqube-static-resources/master/v86/checks/RatingBadge/A.svg 'A')](https://sonarqube.cloudapps.telus.com/project/issues?id=wireless-subscription-gql&amppullRequest=141&ampresolved=false&amptypes=BUG) [0 Bugs](https://sonarqube.cloudapps.telus.com/project/issues?id=wireless-subscription-gql&amppullRequest=141&ampresolved=false&amptypes=BUG)  \n[![Vulnerability](https://raw.githubusercontent.com/SonarSource/sonarqube-static-resources/master/v86/common/vulnerability.svg 'Vulnerability')](https://sonarqube.cloudapps.telus.com/project/issues?id=wireless-subscription-gql&amppullRequest=141&ampresolved=false&amptypes=VULNERABILITY) [![A](https://raw.githubusercontent.com/SonarSource/sonarqube-static-resources/master/v86/checks/RatingBadge/A.svg 'A')](https://sonarqube.cloudapps.telus.com/project/issues?id=wireless-subscription-gql&amppullRequest=141&ampresolved=false&amptypes=VULNERABILITY) [0 Vulnerabilities](https://sonarqube.cloudapps.telus.com/project/issues?id=wireless-subscription-gql&amppullRequest=141&ampresolved=false&amptypes=VULNERABILITY)  \n[![Security Hotspot](https://raw.githubusercontent.com/SonarSource/sonarqube-static-resources/master/v86/common/security_hotspot.svg 'Security Hotspot')](https://sonarqube.cloudapps.telus.com/security_hotspots?id=wireless-subscription-gql&amppullRequest=141) [![A](https://raw.githubusercontent.com/SonarSource/sonarqube-static-resources/master/v86/checks/RatingBadge/A.svg 'A')](https://sonarqube.cloudapps.telus.com/security_hotspots?id=wireless-subscription-gql&amppullRequest=141) [0 Security Hotspots](https://sonarqube.cloudapps.telus.com/security_hotspots?id=wireless-subscription-gql&amppullRequest=141)  \n[![Code Smell](https://raw.githubusercontent.com/SonarSource/sonarqube-static-resources/master/v86/common/code_smell.svg 'Code Smell')](https://sonarqube.cloudapps.telus.com/project/issues?id=wireless-subscription-gql&amppullRequest=141&ampresolved=false&amptypes=CODE_SMELL) [![A](https://raw.githubusercontent.com/SonarSource/sonarqube-static-resources/master/v86/checks/RatingBadge/A.svg 'A')](https://sonarqube.cloudapps.telus.com/project/issues?id=wireless-subscription-gql&amppullRequest=141&ampresolved=false&amptypes=CODE_SMELL) [1 Code Smell](https://sonarqube.cloudapps.telus.com/project/issues?id=wireless-subscription-gql&amppullRequest=141&ampresolved=false&amptypes=CODE_SMELL)\n\n### Coverage and Duplications\n\n[![0.0%](https://raw.githubusercontent.com/SonarSource/sonarqube-static-resources/master/v86/checks/CoverageChart/0.svg '0.0%')](https://sonarqube.cloudapps.telus.com/component_measures?id=wireless-subscription-gql&amppullRequest=141&ampmetric=new_coverage&ampview=list) [0.0% Coverage](https://sonarqube.cloudapps.telus.com/component_measures?id=wireless-subscription-gql&amppullRequest=141&ampmetric=new_coverage&ampview=list) (15.2% Estimated after merge)  \n[![0.0%](https://raw.githubusercontent.com/SonarSource/sonarqube-static-resources/master/v86/checks/Duplications/3.svg '0.0%')](https://sonarqube.cloudapps.telus.com/component_measures?id=wireless-subscription-gql&amppullRequest=141&ampmetric=new_duplicated_lines_density&ampview=list) [0.0% Duplication](https://sonarqube.cloudapps.telus.com/component_measures?id=wireless-subscription-gql&amppullRequest=141&ampmetric=new_duplicated_lines_density&ampview=list) (0.0% Estimated after merge)\n\n";
    expect(utils.makeSlackCompatible(failed)).toBe(expectedVal);
});

test('getting failed coverage message from failure string', () => {
    const expectedVal = "0.0% Coverage on New Code (is less than 80%)";
    expect(utils.getFailedCoverageMsg(failed)).toBe(expectedVal);
});

test('getting failed coverage message from passed string', () => {
    expect(utils.getFailedCoverageMsg(passed)).toBe("");
});

test('finding the additional information message', () => {
    const expectedVal = "The following metrics might not affect the Quality Gate status but improving  them will improve your project code quality and security.";
    expect(utils.getAdditionalInfoBody(passed)).toBe(expectedVal);
});

test('getting issues header with passed string', () => {
    expect(utils.getIssuesTitle(passed)).toBe("0 Issues");
});

test('getting issues header with failed string', () => {
    expect(utils.getIssuesTitle(failed)).toBe("1 Issue");
});

test('getting issue grades from passed string', () => {
    const expected = ["a", "a", "a", "a"];
    expect(utils.getGrades(passed)).toStrictEqual(expected);
});

test('getting issue grades from failed string', () => {
    const expected = ["a", "a", "a", "a"];
    expect(utils.getGrades(failed)).toStrictEqual(expected);
});

test('constructing markdown string for bug issue', () => {
    const expectedMarkdown = "<https://sonarqube.cloudapps.telus.com/project/issues?id=unicorn-run-frontend&pullRequest=112&resolved=false&types=BUG|:sq-bug:> <https://sonarqube.cloudapps.telus.com/project/issues?id=unicorn-run-frontend&pullRequest=112&resolved=false&types=BUG|:sq-a:> <https://sonarqube.cloudapps.telus.com/project/issues?id=unicorn-run-frontend&pullRequest=112&resolved=false&types=BUG|0 Bugs>";
    expect(utils.getBugInfo(passed)).toBe(expectedMarkdown);
});

test('constructing markdown string for vulnerability issue section', () => {
    const expectedMarkdown = "<https://sonarqube.cloudapps.telus.com/project/issues?id=wireless-subscription-gql&pullRequest=141&resolved=false&types=VULNERABILITY|:sq-v-lock:> <https://sonarqube.cloudapps.telus.com/project/issues?id=wireless-subscription-gql&pullRequest=141&resolved=false&types=VULNERABILITY|:sq-a:> <https://sonarqube.cloudapps.telus.com/project/issues?id=wireless-subscription-gql&pullRequest=141&resolved=false&types=VULNERABILITY|0 Vulnerabilities>";
    expect(utils.getVulnerabilitiesInfo(failed)).toBe(expectedMarkdown);
});

test('constructing markdown string for security hotspots issue section', () => {
    const expectedMarkdown = "<https://sonarqube.cloudapps.telus.com/security_hotspots?id=unicorn-run-frontend&pullRequest=112|:sq-s-lock:> <https://sonarqube.cloudapps.telus.com/security_hotspots?id=unicorn-run-frontend&pullRequest=112|:sq-a:> <https://sonarqube.cloudapps.telus.com/security_hotspots?id=unicorn-run-frontend&pullRequest=112|0 Security Hotspots>";
    expect(utils.getSecurityInfo(passed)).toBe(expectedMarkdown);
});

test('constructing markdown string for code smell issue section', () => {
    const expectedMarkdown = "<https://sonarqube.cloudapps.telus.com/project/issues?id=wireless-subscription-gql&pullRequest=141&resolved=false&types=CODE_SMELL|:sq-code-smell:> <https://sonarqube.cloudapps.telus.com/project/issues?id=wireless-subscription-gql&pullRequest=141&resolved=false&types=CODE_SMELL|:sq-a:> <https://sonarqube.cloudapps.telus.com/project/issues?id=wireless-subscription-gql&pullRequest=141&resolved=false&types=CODE_SMELL|1 Code Smell>";
    expect(utils.getCodeSmellInfo(failed)).toBe(expectedMarkdown);
});

test('getting coverage and duplication section title', () => {
    expect(utils.getCoverageDuplicationTitle(passed)).toBe("Coverage and Duplications");
});

test('getting coverage and duplication section title again', () => {
    expect(utils.getCoverageDuplicationTitle(failed)).toBe("Coverage and Duplications");
});

test('getting coverage information: failed scenario', () => {
    const expectedText = "<https://sonarqube.cloudapps.telus.com/component_measures?id=wireless-subscription-gql&pullRequest=141&metric=new_coverage&view=list|0.0% Coverage (15.2% Estimated after merge)>";
    expect(utils.getCoverageInfo(failed)).toBe(expectedText);
});

test('getting coverage information: passed scenario', () => {
    const expectedText = "<https://sonarqube.cloudapps.telus.com/component_measures?id=unicorn-run-frontend&pullRequest=112|No Coverage information>";
    expect(utils.getCoverageInfo(passed)).toBe(expectedText);
});

test('getting coverage information: passed2 scenario', () => {
    const expectedText = "<https://sonarqube.cloudapps.telus.com/component_measures?id=wireless-subscription-gql&pullRequest=165&metric=coverage&view=list|No Coverage information (14.7% Estimated after merge)>";
    expect(utils.getCoverageInfo(passed2)).toBe(expectedText);
});

test('getting coverage information: passed3 scenario', () => {
    const expectedText = "<https://sonarqube.cloudapps.telus.com/component_measures?id=wireless-subscription-gql&pullRequest=161&metric=new_coverage&view=list|0.0% Coverage (14.7% Estimated after merge)>";
    expect(utils.getCoverageInfo(passed3)).toBe(expectedText);
});

test('getting duplication information: failed scenario', () => {
    const expectedText = "<https://sonarqube.cloudapps.telus.com/component_measures?id=wireless-subscription-gql&pullRequest=141&metric=new_duplicated_lines_density&view=list|0.0% Duplication (0.0% Estimated after merge)>";
    expect(utils.getDuplicationInfo(failed)).toBe(expectedText);
});

test('getting duplication information: passed scenario', () => {
    const expectedText = "<https://sonarqube.cloudapps.telus.com/component_measures?id=unicorn-run-frontend&pullRequest=112&metric=duplicated_lines_density&view=list|No Duplication information (0.0% Estimated after merge)>";
    expect(utils.getDuplicationInfo(passed)).toBe(expectedText);
});

test('getting duplication information: passed2 scenario', () => {
    const expectedText = "<https://sonarqube.cloudapps.telus.com/component_measures?id=wireless-subscription-gql&pullRequest=165&metric=duplicated_lines_density&view=list|No Duplication information (0.0% Estimated after merge)>";
    expect(utils.getDuplicationInfo(passed2)).toBe(expectedText);
});

test('getting duplication information: passed3 scenario', () => {
    const expectedText = "<https://sonarqube.cloudapps.telus.com/component_measures?id=wireless-subscription-gql&pullRequest=161&metric=new_duplicated_lines_density&view=list|0.0% Duplication (0.0% Estimated after merge)>";
    expect(utils.getDuplicationInfo(passed3)).toBe(expectedText);
});
