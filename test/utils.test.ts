import passed from "./responses/passedSummary";
import passed2 from "./responses/passed2Summary";
import passed3 from "./responses/passed3Summary";
import failed from "./responses/failedSummary";
import * as utils from "../src/utils";

describe("makeSlackCompatible", () => {
    it("should replace &, <, and > in a successful quality gate summary with &amp, &lt, and &gt respectively when the string has them", () => {
        const expectedVal = `[![Quality Gate passed](https://raw.githubusercontent.com/SonarSource/sonarqube-static-resources/master/v86/checks/QualityGateBadge/passed.svg 'Quality Gate passed')](https://sonarqube.cloudapps.telus.com/dashboard?id=unicorn-run-frontend&amppullRequest=112)


## Additional information

*The following metrics might not affect the Quality Gate status but improving*  
*them will improve your project code quality and security.*

### 0 Issues

[![Bug](https://raw.githubusercontent.com/SonarSource/sonarqube-static-resources/master/v86/common/bug.svg 'Bug')](https://sonarqube.cloudapps.telus.com/project/issues?id=unicorn-run-frontend&amppullRequest=112&ampresolved=false&amptypes=BUG) [![A](https://raw.githubusercontent.com/SonarSource/sonarqube-static-resources/master/v86/checks/RatingBadge/A.svg 'A')](https://sonarqube.cloudapps.telus.com/project/issues?id=unicorn-run-frontend&amppullRequest=112&ampresolved=false&amptypes=BUG) [0 Bugs](https://sonarqube.cloudapps.telus.com/project/issues?id=unicorn-run-frontend&amppullRequest=112&ampresolved=false&amptypes=BUG)  
[![Vulnerability](https://raw.githubusercontent.com/SonarSource/sonarqube-static-resources/master/v86/common/vulnerability.svg 'Vulnerability')](https://sonarqube.cloudapps.telus.com/project/issues?id=unicorn-run-frontend&amppullRequest=112&ampresolved=false&amptypes=VULNERABILITY) [![A](https://raw.githubusercontent.com/SonarSource/sonarqube-static-resources/master/v86/checks/RatingBadge/A.svg 'A')](https://sonarqube.cloudapps.telus.com/project/issues?id=unicorn-run-frontend&amppullRequest=112&ampresolved=false&amptypes=VULNERABILITY) [0 Vulnerabilities](https://sonarqube.cloudapps.telus.com/project/issues?id=unicorn-run-frontend&amppullRequest=112&ampresolved=false&amptypes=VULNERABILITY)  
[![Security Hotspot](https://raw.githubusercontent.com/SonarSource/sonarqube-static-resources/master/v86/common/security_hotspot.svg 'Security Hotspot')](https://sonarqube.cloudapps.telus.com/security_hotspots?id=unicorn-run-frontend&amppullRequest=112) [![A](https://raw.githubusercontent.com/SonarSource/sonarqube-static-resources/master/v86/checks/RatingBadge/A.svg 'A')](https://sonarqube.cloudapps.telus.com/security_hotspots?id=unicorn-run-frontend&amppullRequest=112) [0 Security Hotspots](https://sonarqube.cloudapps.telus.com/security_hotspots?id=unicorn-run-frontend&amppullRequest=112)  
[![Code Smell](https://raw.githubusercontent.com/SonarSource/sonarqube-static-resources/master/v86/common/code_smell.svg 'Code Smell')](https://sonarqube.cloudapps.telus.com/project/issues?id=unicorn-run-frontend&amppullRequest=112&ampresolved=false&amptypes=CODE_SMELL) [![A](https://raw.githubusercontent.com/SonarSource/sonarqube-static-resources/master/v86/checks/RatingBadge/A.svg 'A')](https://sonarqube.cloudapps.telus.com/project/issues?id=unicorn-run-frontend&amppullRequest=112&ampresolved=false&amptypes=CODE_SMELL) [0 Code Smells](https://sonarqube.cloudapps.telus.com/project/issues?id=unicorn-run-frontend&amppullRequest=112&ampresolved=false&amptypes=CODE_SMELL)

### Coverage and Duplications

[![No Coverage information](https://raw.githubusercontent.com/SonarSource/sonarqube-static-resources/master/v86/checks/CoverageChart/NoCoverageInfo.svg 'No Coverage information')](https://sonarqube.cloudapps.telus.com/component_measures?id=unicorn-run-frontend&amppullRequest=112) No Coverage information  
[![No Duplication information](https://raw.githubusercontent.com/SonarSource/sonarqube-static-resources/master/v86/checks/Duplications/NoDuplicationInfo.svg 'No Duplication information')](https://sonarqube.cloudapps.telus.com/component_measures?id=unicorn-run-frontend&amppullRequest=112&ampmetric=duplicated_lines_density&ampview=list) No Duplication information (0.0% Estimated after merge)\n\n`;
        expect(utils.makeSlackCompatible(passed)).toBe(expectedVal);
    });

    it("should replace &, <, and > in a failed quality gate summary with &amp, &lt, and &gt respectively when the string has them", () => {
        const expectedVal = `[![Quality Gate failed](https://raw.githubusercontent.com/SonarSource/sonarqube-static-resources/master/v86/checks/QualityGateBadge/failed.svg 'Quality Gate failed')](https://sonarqube.cloudapps.telus.com/dashboard?id=wireless-subscription-gql&amppullRequest=141)

[![Failed condition](https://raw.githubusercontent.com/SonarSource/sonarqube-static-resources/master/v86/checks/FailedConditionIcon.svg 'Failed condition')](https://sonarqube.cloudapps.telus.com/dashboard?id=wireless-subscription-gql&amppullRequest=141) [![0.0%](https://raw.githubusercontent.com/SonarSource/sonarqube-static-resources/master/v86/checks/CoverageChart/0.svg '0.0%')](https://sonarqube.cloudapps.telus.com/dashboard?id=wireless-subscription-gql&amppullRequest=141) 0.0% Coverage on New Code (is less than 80%)  

[See analysis details on SonarQube](https://sonarqube.cloudapps.telus.com/dashboard?id=wireless-subscription-gql&amppullRequest=141)

## Additional information

*The following metrics might not affect the Quality Gate status but improving*  
*them will improve your project code quality and security.*

### 1 Issue

[![Bug](https://raw.githubusercontent.com/SonarSource/sonarqube-static-resources/master/v86/common/bug.svg 'Bug')](https://sonarqube.cloudapps.telus.com/project/issues?id=wireless-subscription-gql&amppullRequest=141&ampresolved=false&amptypes=BUG) [![A](https://raw.githubusercontent.com/SonarSource/sonarqube-static-resources/master/v86/checks/RatingBadge/A.svg 'A')](https://sonarqube.cloudapps.telus.com/project/issues?id=wireless-subscription-gql&amppullRequest=141&ampresolved=false&amptypes=BUG) [0 Bugs](https://sonarqube.cloudapps.telus.com/project/issues?id=wireless-subscription-gql&amppullRequest=141&ampresolved=false&amptypes=BUG)  
[![Vulnerability](https://raw.githubusercontent.com/SonarSource/sonarqube-static-resources/master/v86/common/vulnerability.svg 'Vulnerability')](https://sonarqube.cloudapps.telus.com/project/issues?id=wireless-subscription-gql&amppullRequest=141&ampresolved=false&amptypes=VULNERABILITY) [![A](https://raw.githubusercontent.com/SonarSource/sonarqube-static-resources/master/v86/checks/RatingBadge/A.svg 'A')](https://sonarqube.cloudapps.telus.com/project/issues?id=wireless-subscription-gql&amppullRequest=141&ampresolved=false&amptypes=VULNERABILITY) [0 Vulnerabilities](https://sonarqube.cloudapps.telus.com/project/issues?id=wireless-subscription-gql&amppullRequest=141&ampresolved=false&amptypes=VULNERABILITY)  
[![Security Hotspot](https://raw.githubusercontent.com/SonarSource/sonarqube-static-resources/master/v86/common/security_hotspot.svg 'Security Hotspot')](https://sonarqube.cloudapps.telus.com/security_hotspots?id=wireless-subscription-gql&amppullRequest=141) [![A](https://raw.githubusercontent.com/SonarSource/sonarqube-static-resources/master/v86/checks/RatingBadge/A.svg 'A')](https://sonarqube.cloudapps.telus.com/security_hotspots?id=wireless-subscription-gql&amppullRequest=141) [0 Security Hotspots](https://sonarqube.cloudapps.telus.com/security_hotspots?id=wireless-subscription-gql&amppullRequest=141)  
[![Code Smell](https://raw.githubusercontent.com/SonarSource/sonarqube-static-resources/master/v86/common/code_smell.svg 'Code Smell')](https://sonarqube.cloudapps.telus.com/project/issues?id=wireless-subscription-gql&amppullRequest=141&ampresolved=false&amptypes=CODE_SMELL) [![A](https://raw.githubusercontent.com/SonarSource/sonarqube-static-resources/master/v86/checks/RatingBadge/A.svg 'A')](https://sonarqube.cloudapps.telus.com/project/issues?id=wireless-subscription-gql&amppullRequest=141&ampresolved=false&amptypes=CODE_SMELL) [1 Code Smell](https://sonarqube.cloudapps.telus.com/project/issues?id=wireless-subscription-gql&amppullRequest=141&ampresolved=false&amptypes=CODE_SMELL)

### Coverage and Duplications

[![0.0%](https://raw.githubusercontent.com/SonarSource/sonarqube-static-resources/master/v86/checks/CoverageChart/0.svg '0.0%')](https://sonarqube.cloudapps.telus.com/component_measures?id=wireless-subscription-gql&amppullRequest=141&ampmetric=new_coverage&ampview=list) [0.0% Coverage](https://sonarqube.cloudapps.telus.com/component_measures?id=wireless-subscription-gql&amppullRequest=141&ampmetric=new_coverage&ampview=list) (15.2% Estimated after merge)  
[![0.0%](https://raw.githubusercontent.com/SonarSource/sonarqube-static-resources/master/v86/checks/Duplications/3.svg '0.0%')](https://sonarqube.cloudapps.telus.com/component_measures?id=wireless-subscription-gql&amppullRequest=141&ampmetric=new_duplicated_lines_density&ampview=list) [0.0% Duplication](https://sonarqube.cloudapps.telus.com/component_measures?id=wireless-subscription-gql&amppullRequest=141&ampmetric=new_duplicated_lines_density&ampview=list) (0.0% Estimated after merge)\n\n`;
        expect(utils.makeSlackCompatible(failed)).toBe(expectedVal);
    });
});

describe("getFailedCoverageMsg", () => {
    it('should return a string about the coverage on new code when given a failed quality gate summary', () => {
        const expectedVal = "0.0% Coverage on New Code (is less than 80%)";
        expect(utils.getFailedCoverageMsg(failed)).toBe(expectedVal);
    });
    
    it('should return an empty string when given a successful quality gate summary', () => {
        expect(utils.getFailedCoverageMsg(passed)).toBe("");
    });
});

describe("getAdditionalInfoBody", () => {
    it('should return a disclaimer string about the status of the quality gate given a successful quality gate summary', () => {
        const expectedVal = "The following metrics might not affect the Quality Gate status but improving  them will improve your project code quality and security.";
        expect(utils.getAdditionalInfoBody(passed)).toBe(expectedVal);
    });

    it('should return a disclaimer string about the status of the quality gate given a failed quality gate summary', () => {
        const expectedVal = "The following metrics might not affect the Quality Gate status but improving  them will improve your project code quality and security.";
        expect(utils.getAdditionalInfoBody(failed)).toBe(expectedVal);
    });
});

describe("getIssuesTitle", () => {
    it('should return a string stating the number of issues (0) in the project when given a successful quality gate summary', () => {
        expect(utils.getIssuesTitle(passed)).toBe("0 Issues");
    });
    
    it('should return a string stating the number of issues (>0) in the project when given a failed quality gate summary', () => {
        expect(utils.getIssuesTitle(failed)).toBe("1 Issue");
    });
});

describe("getGrades", () => {
    // [0]: Bugs, [1]: Vulnerabilities, [2]: Security Hotspots, [3]: Code Smells
    it('should return the grades of the four types of sonarqube issues (bugs, vulnerabilities, security hotspots, and code smells) when given successful quality gate summary', () => {
        const expected = ["a", "a", "a", "a"];
        expect(utils.getGrades(passed)).toStrictEqual(expected);
    });
    
    it('should return the grades of the four types of sonarqube issues (bugs, vulnerabilities, security hotspots, and code smells) when given failed quality gate summary', () => {
        const expected = ["a", "a", "a", "a"];
        expect(utils.getGrades(failed)).toStrictEqual(expected);
    });
});

describe("getBugInfo", () => {
    it('should create Slack markdown for bugs that looks identical to UI when given successful quality gate summary', () => {
        const expectedMarkdown = "<https://sonarqube.cloudapps.telus.com/project/issues?id=unicorn-run-frontend&pullRequest=112&resolved=false&types=BUG|:sq-bug:> <https://sonarqube.cloudapps.telus.com/project/issues?id=unicorn-run-frontend&pullRequest=112&resolved=false&types=BUG|:sq-a:> <https://sonarqube.cloudapps.telus.com/project/issues?id=unicorn-run-frontend&pullRequest=112&resolved=false&types=BUG|0 Bugs>";
        expect(utils.getBugInfo(passed)).toBe(expectedMarkdown);
    });

    it('should create Slack markdown for bugs that looks identical to UI when given failed quality gate summary', () => {
        const expectedMarkdown = "<https://sonarqube.cloudapps.telus.com/project/issues?id=wireless-subscription-gql&pullRequest=141&resolved=false&types=BUG|:sq-bug:> <https://sonarqube.cloudapps.telus.com/project/issues?id=wireless-subscription-gql&pullRequest=141&resolved=false&types=BUG|:sq-a:> <https://sonarqube.cloudapps.telus.com/project/issues?id=wireless-subscription-gql&pullRequest=141&resolved=false&types=BUG|0 Bugs>";
        expect(utils.getBugInfo(failed)).toBe(expectedMarkdown);
    });
});

describe("getVulnerabilitiesInfo", () => {
    it('should create Slack markdown for vulnerabilities that looks identical to UI when given failed quality gate summary', () => {
        const expectedMarkdown = "<https://sonarqube.cloudapps.telus.com/project/issues?id=wireless-subscription-gql&pullRequest=141&resolved=false&types=VULNERABILITY|:sq-v-lock:> <https://sonarqube.cloudapps.telus.com/project/issues?id=wireless-subscription-gql&pullRequest=141&resolved=false&types=VULNERABILITY|:sq-a:> <https://sonarqube.cloudapps.telus.com/project/issues?id=wireless-subscription-gql&pullRequest=141&resolved=false&types=VULNERABILITY|0 Vulnerabilities>";
        expect(utils.getVulnerabilitiesInfo(failed)).toBe(expectedMarkdown);
    });

    it('should create Slack markdown for vulnerabilities that looks identical to UI when given successful quality gate summary', () => {
        const expectedMarkdown = "<https://sonarqube.cloudapps.telus.com/project/issues?id=wireless-subscription-gql&pullRequest=165&resolved=false&types=VULNERABILITY|:sq-v-lock:> <https://sonarqube.cloudapps.telus.com/project/issues?id=wireless-subscription-gql&pullRequest=165&resolved=false&types=VULNERABILITY|:sq-a:> <https://sonarqube.cloudapps.telus.com/project/issues?id=wireless-subscription-gql&pullRequest=165&resolved=false&types=VULNERABILITY|0 Vulnerabilities>";
        expect(utils.getVulnerabilitiesInfo(passed2)).toBe(expectedMarkdown);
    });
});

describe("getSecurityInfo", () => {
    it('should create Slack markdown for security hotspots that looks identical to UI when given successful quality gate summary', () => {
        const expectedMarkdown = "<https://sonarqube.cloudapps.telus.com/security_hotspots?id=wireless-subscription-gql&pullRequest=161|:sq-s-lock:> <https://sonarqube.cloudapps.telus.com/security_hotspots?id=wireless-subscription-gql&pullRequest=161|:sq-a:> <https://sonarqube.cloudapps.telus.com/security_hotspots?id=wireless-subscription-gql&pullRequest=161|0 Security Hotspots>";
        expect(utils.getSecurityInfo(passed3)).toBe(expectedMarkdown);
    });

    it('should create Slack markdown for security hotspots that looks identical to UI when given failed quality gate summary', () => {
        const expectedMarkdown = "<https://sonarqube.cloudapps.telus.com/security_hotspots?id=wireless-subscription-gql&pullRequest=141|:sq-s-lock:> <https://sonarqube.cloudapps.telus.com/security_hotspots?id=wireless-subscription-gql&pullRequest=141|:sq-a:> <https://sonarqube.cloudapps.telus.com/security_hotspots?id=wireless-subscription-gql&pullRequest=141|0 Security Hotspots>";
        expect(utils.getSecurityInfo(failed)).toBe(expectedMarkdown);
    });
});

describe("getCodeSmellInfo", () => {
    it('should create Slack markdown for code smells that looks identical to UI when given failed quality gate summary', () => {
        const expectedMarkdown = "<https://sonarqube.cloudapps.telus.com/project/issues?id=wireless-subscription-gql&pullRequest=141&resolved=false&types=CODE_SMELL|:sq-code-smell:> <https://sonarqube.cloudapps.telus.com/project/issues?id=wireless-subscription-gql&pullRequest=141&resolved=false&types=CODE_SMELL|:sq-a:> <https://sonarqube.cloudapps.telus.com/project/issues?id=wireless-subscription-gql&pullRequest=141&resolved=false&types=CODE_SMELL|1 Code Smell>";
        expect(utils.getCodeSmellInfo(failed)).toBe(expectedMarkdown);
    });

    it('should create Slack markdown for code smells that looks identical to UI when given successful quality gate summary', () => {
        const expectedMarkdown = "<https://sonarqube.cloudapps.telus.com/project/issues?id=unicorn-run-frontend&pullRequest=112&resolved=false&types=CODE_SMELL|:sq-code-smell:> <https://sonarqube.cloudapps.telus.com/project/issues?id=unicorn-run-frontend&pullRequest=112&resolved=false&types=CODE_SMELL|:sq-a:> <https://sonarqube.cloudapps.telus.com/project/issues?id=unicorn-run-frontend&pullRequest=112&resolved=false&types=CODE_SMELL|0 Code Smells>";
        expect(utils.getCodeSmellInfo(passed)).toBe(expectedMarkdown);
    });
});

describe("getCoverageDuplicationTitle", () => {
    it('should return the title for the coverage and duplication section when given successful quality gate summary', () => {
        expect(utils.getCoverageDuplicationTitle(passed)).toBe("Coverage and Duplications");
    });
    
    it('should return the title for the coverage and duplication section when given failed quality gate summary', () => {
        expect(utils.getCoverageDuplicationTitle(failed)).toBe("Coverage and Duplications");
    });
});

describe("getCoverageInfo", () => {
    it('should return Slack markdown that has the current coverage percentage and the after merge coverage percentage given a failed quality gate summary', () => {
        const expectedText = "<https://sonarqube.cloudapps.telus.com/component_measures?id=wireless-subscription-gql&pullRequest=141&metric=new_coverage&view=list|0.0% Coverage (15.2% Estimated after merge)>";
        expect(utils.getCoverageInfo(failed)).toBe(expectedText);
    });
    
    it('should return Slack markdown with no coverage information when given a one possible successful quality gate summary', () => {
        const expectedText = "<https://sonarqube.cloudapps.telus.com/component_measures?id=unicorn-run-frontend&pullRequest=112|No Coverage information>";
        expect(utils.getCoverageInfo(passed)).toBe(expectedText);
    });
    
    it('should return Slack markdown with no coverage information and a coverage percentage for after merge when given one possible successful quality gate summary', () => {
        const expectedText = "<https://sonarqube.cloudapps.telus.com/component_measures?id=wireless-subscription-gql&pullRequest=165&metric=coverage&view=list|No Coverage information (14.7% Estimated after merge)>";
        expect(utils.getCoverageInfo(passed2)).toBe(expectedText);
    });
    
    it('should return Slack markdown that has the current coverage percentage and the after merge coverage percentage given a possible successful quality gate summary', () => {
        const expectedText = "<https://sonarqube.cloudapps.telus.com/component_measures?id=wireless-subscription-gql&pullRequest=161&metric=new_coverage&view=list|0.0% Coverage (14.7% Estimated after merge)>";
        expect(utils.getCoverageInfo(passed3)).toBe(expectedText);
    });
});

describe("getDuplicationInfo", () => {
    it('should return Slack markdown that has the current duplication percentage and the after merge duplication percentage given a failed quality gate summary', () => {
        const expectedText = "<https://sonarqube.cloudapps.telus.com/component_measures?id=wireless-subscription-gql&pullRequest=141&metric=new_duplicated_lines_density&view=list|0.0% Duplication (0.0% Estimated after merge)>";
        expect(utils.getDuplicationInfo(failed)).toBe(expectedText);
    });
    
    it('should return Slack markdown with no duplication information and a duplication percentage for after merge when given one possible successful quality gate summary', () => {
        const expectedText = "<https://sonarqube.cloudapps.telus.com/component_measures?id=unicorn-run-frontend&pullRequest=112&metric=duplicated_lines_density&view=list|No Duplication information (0.0% Estimated after merge)>";
        expect(utils.getDuplicationInfo(passed)).toBe(expectedText);
    });
    
    it('should return Slack markdown with no duplication information and a duplication percentage for after merge when given another possible successful quality gate summary', () => {
        const expectedText = "<https://sonarqube.cloudapps.telus.com/component_measures?id=wireless-subscription-gql&pullRequest=165&metric=duplicated_lines_density&view=list|No Duplication information (0.0% Estimated after merge)>";
        expect(utils.getDuplicationInfo(passed2)).toBe(expectedText);
    });
    
    it('should return Slack markdown that has the current duplication percentage and the after merge duplication percentage given a successful quality gate summary', () => {
        const expectedText = "<https://sonarqube.cloudapps.telus.com/component_measures?id=wireless-subscription-gql&pullRequest=161&metric=new_duplicated_lines_density&view=list|0.0% Duplication (0.0% Estimated after merge)>";
        expect(utils.getDuplicationInfo(passed3)).toBe(expectedText);
    });
});
