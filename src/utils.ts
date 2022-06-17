export function getFailedCoverageMsg(str: string): string {
    const res = str.match(/(\d+\.\d+)% Coverage on New Code \(is less than \d+%\)/g);
    if (res === null) { return ""; }
    return res[0];
}

export function getAdditionalInfoBody(str: string): string {
    const body = str.match(/The.*\n.*/g);
    if (body === null) { return ""; }
    return body[0].replace(/\*/g, '').replace('\n', '');
}

export function getIssuesTitle(str: string): string {
    const issuesHeader = str.match(/\d+ Issue(s*)/g);
    if (issuesHeader === null) { return ""; }
    return issuesHeader[0];
}

export function getGrades(str: string): string[] {
    // [0]: Bugs, [1]: Vulnerabilities, [2]: Security Hotspots, [3]: Code Smells
    const grades = str.match(/'\w'/g)?.map(grade => {
        return grade.replace("'", '').replace("'", '').toLowerCase();
    });
    if (grades === undefined || grades.length != 4) { throw new Error('There was an issue finding the grades of all the issues!'); }
    return grades;
}

export function getBugInfo(str: string): string {
    const bugInfo = str.match(/\[\d+ Bug(s*)\].*BUG\)/g);
    if (bugInfo === null) { return ""; }
    const numOfBugs = bugInfo[0].match(/\d+ Bug(s*)/g)![0];
    const bugLink = bugInfo[0].match(/https.*types=BUG/g)![0];
    const grade = getGrades(str)[0];
    return `<${bugLink}|:sq-bug:> <${bugLink}|:sq-${grade}:> <${bugLink}|${numOfBugs}>`;
}

export function getVulnerabilitiesInfo(str: string): string {
    const vInfo = str.match(/\[\d+ V.*\].*VULNERABILITY\)/g);
    if (vInfo === null) { return ""; }
    const num = vInfo[0].match(/\d+ (Vulnerability|Vulnerabilities)/g)![0];
    const vLink = vInfo[0].match(/https.*types=VULNERABILITY/g)![0];
    const grade = getGrades(str)[1];
    return `<${vLink}|:sq-v-lock:> <${vLink}|:sq-${grade}:> <${vLink}|${num}>`;
}

export function getSecurityInfo(str: string): string {
    const securityInfo = str.match(/\[\d+ Security Hotspot(s*)\].*/g);
    if (securityInfo === null) { return ""; }
    const num = securityInfo[0].match(/\d+ Security Hotspot(s*)/g)![0];
    const securityLink = securityInfo[0].match(/\(.*\)/g)![0].replace('(', '').replace(')', '');
    const grade = getGrades(str)[2];
    return `<${securityLink}|:sq-s-lock:> <${securityLink}|:sq-${grade}:> <${securityLink}|${num}>`;
}

export function getCodeSmellInfo(str: string): string {
    const codeSmellInfo = str.match(/\[\d+ Code Smell(s*)\].*SMELL\)/g);
    if (codeSmellInfo === null) { return ""; }
    const num = codeSmellInfo[0].match(/\d+ Code Smell(s*)/g)![0];
    const link = codeSmellInfo[0].match(/https.*types=CODE_SMELL/g)![0];
    const grade = getGrades(str)[3];
    return `<${link}|:sq-code-smell:> <${link}|:sq-${grade}:> <${link}|${num}>`;
}

export function getCoverageDuplicationTitle(str: string): string {
    const title = str.match(/Coverage and Duplication(s*)/g);
    if (title === null) { return ""; }
    return title[0];
}

export function getCoverageInfo(str: string): string {
    const info = str.match(/(\(https:\/\/sonarqube\.cloudapps\.telus\.com\/component_measures|\[\d+\.\d+% Coverage\]).*/g);
    if (info === null) { return ""; }
    const covInfo = info[0].replace(/\].*view=list\) /g, ' ').replace('  ', '').replace('[', '');
    const link = covInfo.match(/\(.*\) /g)![0].replace(' ', '').replace('(', '').replace(')', '');
    const msg = covInfo.match(/(No|\d+\.\d+%).*/g)![0];
    return `<${link}|${msg}>`
}

export function getDuplicationInfo(str: string): string {
    const info = str.match(/\(https:\/\/sonarqube\.cloudapps\.telus\.com(.*)metric=(.*)duplicated_lines_density.*\)/g);
    if (info === null) { return ""; }
    const duplicationInfo = info[0].replace(/\].*view=list\) /g, ' ').replace('  ', '').replace('[', '');
    const link = duplicationInfo.match(/\(.*\) /g)![0].replace(' ', '').replace('(', '').replace(')', '');
    const msg = duplicationInfo.match(/(No|\d+\.\d+%).*/g)![0];
    return `<${link}|${msg}>`
}