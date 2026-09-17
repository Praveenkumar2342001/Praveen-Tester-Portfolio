export type Priority = 'High' | 'Medium' | 'Low';
export type TestStatus = 'Passed' | 'Failed' | 'Blocked';
export type BugSeverity = 'Critical' | 'Major' | 'Minor';
export type BugStatus = 'Open' | 'In Progress' | 'In Review' | 'Closed';
export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

export interface SkillCategory {
  title: string;
  categoryKey: 'testing' | 'api' | 'bugTracking' | 'database' | 'tools' | 'methodologies';
  description: string;
  skills: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  companyPlaceholder: string;
  period: string;
  location: string;
  summary: string;
  responsibilities: string[];
  testingTypes: string[];
  toolsUsed: string[];
}

export interface ProjectItem {
  id: string;
  name: string;
  domain: string;
  projectType?: string;
  role: string;
  platforms?: string[];
  responsibilities: string[];
  testingTypes: string[];
  tools: string[];
  methodology?: string;
  keyModules: string[];
  deliverables?: string[];
}

export interface ProofBitsPlatform {
  name: string;
  badge: string;
  description: string;
  focusAreas: string[];
}

export interface ProofBitsProjectDetails {
  id: string;
  name: string;
  domain: string;
  projectType: string;
  role: string;
  platforms: string[];
  testingTypes: string[];
  tools: string[];
  methodology: string;
  overview: string[];
  platformsTested: ProofBitsPlatform[];
  responsibilities: string[];
  testingAreas: {
    title: string;
    description: string;
    items: string[];
  }[];
  apiTesting: string[];
  defectManagement: string[];
  toolsAndMethodology: {
    tools: { name: string; purpose: string }[];
    methodology: { name: string; details: string[] };
  };
}

export interface TestCase {
  id: string;
  scenario: string;
  module: string;
  testType: 'Positive' | 'Negative' | 'Boundary' | 'Security';
  preconditions: string;
  steps: string[];
  expectedResult: string;
  priority: Priority;
  status: TestStatus;
}

export interface BugReport {
  id: string;
  summary: string;
  module: string;
  severity: BugSeverity;
  priority: Priority;
  environment: string;
  stepsToReproduce: string[];
  expectedResult: string;
  actualResult: string;
  status: BugStatus;
  reporter?: string;
  assignee?: string;
}

export interface ApiCase {
  id: string;
  method: HttpMethod;
  endpoint: string;
  title: string;
  category: 'Positive' | 'Negative';
  description: string;
  headers: Record<string, string>;
  requestBody?: string | null;
  responseStatus: number;
  responseStatusText: string;
  responseBody: string;
  validations: string[];
}


