import {
  SkillCategory,
  ExperienceItem,
  ProjectItem,
  TestCase,
  BugReport,
  ApiCase,
  ProofBitsProjectDetails
} from '../types';

export const PERSONAL_PROFILE = {
  name: "Praveen Kumar P",
  role: "Manual QA Tester",
  experience: "1.5 Years",
  location: "Chennai,India",
  headline: "Detail-oriented Manual QA Tester with 1.5 years of professional experience in functional, regression, API, and integration testing across web and client applications.",
  emailPlaceholder: "Praveenkumarp2342001@gmail.com",
  linkedinPlaceholder: "https://www.linkedin.com/in/praveen-kumar-p-4535b52a6/",
  githubPlaceholder: ""https://github.com/Praveenkumar2342001?tab=repositories",",
  actualUserEmail: "praveenkumarp2342001@gmail.com",
};

export const ABOUT_ME = {
  summary:
    "Manual QA Tester with 1.5 years of hands-on professional experience ensuring software stability, functional accuracy, and user experience consistency. Experienced in requirement analysis, test scenario preparation, test case execution, defect tracking, and sprint-based validation across multi-tier web applications.",
  testingExperience:
    "Over 1.5 years of structured software testing lifecycle (STLC) practice executing functional, smoke, sanity, regression, integration, and UI testing. Proven track record in uncovering high-severity functional bugs, validating edge cases, verifying backend REST API responses using Postman, and querying relational databases with SQL to audit data integrity.",
  agileExperience:
    "Active participant in Agile/Scrum ceremonies, including sprint planning, daily stand-up meetings, sprint review, backlog refinement, and sprint retrospectives. Collaborated closely with product owners, business analysts, and software developers to clarify acceptance criteria and facilitate timely bug fixes."
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Testing Core",
    categoryKey: "testing",
    description: "Core test design and execution practices across application layers",
    skills: [
      "Manual Testing",
      "Functional Testing",
      "Regression Testing",
      "Smoke Testing",
      "Sanity Testing",
      "Integration Testing",
      "UI Testing",
      "Test Case Design",
      "Defect Reporting"
    ]
  },
  {
    title: "API Testing",
    categoryKey: "api",
    description: "RESTful endpoint inspection and payload validation",
    skills: [
      "Postman",
      "API Testing",
      "HTTP Methods (GET, POST, PUT, DELETE)",
      "Status Code Validation",
      "JSON Response Verification",
      "Negative API Testing",
      "Request Headers & Query Params"
    ]
  },
  {
    title: "Bug Tracking & Management",
    categoryKey: "bugTracking",
    description: "Defect lifecycle management, logging, and triage",
    skills: [
      "Jira",
      "Defect Reporting",
      "Bug Lifecycle Management",
      "Severity & Priority Assessment",
      "Steps to Reproduce Documentation",
      "Defect Re-testing & Closure"
    ]
  },
  {
    title: "Database",
    categoryKey: "database",
    description: "Back-end data verification and query execution",
    skills: [
      "SQL",
      "Data Validation & Verification",
      "SELECT, JOIN & WHERE Queries",
      "CRUD Operations Check",
      "Backend Consistency Testing"
    ]
  },
  {
    title: "Tools & Utilities",
    categoryKey: "tools",
    description: "Software test execution and inspection toolset",
    skills: [
      "Jira",
      "Postman",
      "Chrome DevTools (Console & Network tab)",
      "SQL Query Clients",
      "Spreadsheets (Test Case Documentation)"
    ]
  },
  {
    title: "Methodologies & Process",
    categoryKey: "methodologies",
    description: "Structured delivery frameworks and quality practices",
    skills: [
      "Agile/Scrum",
      "Sprint Planning & Retrospectives",
      "Daily Stand-up Meetings",
      "Software Testing Life Cycle (STLC)",
      "Software Development Life Cycle (SDLC)",
      "Requirement Traceability Matrix (RTM)"
    ]
  }
];

export const PROFESSIONAL_EXPERIENCES: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "Manual QA Tester",
    companyPlaceholder: "Negits Solution",
    period: "[JUNE, 2025] – Present (1.5 Years Total QA Experience)",
    location: "India [City / Work-From-Home]",
    summary:
      "Responsible for end-to-end manual testing of enterprise web applications within an active Agile/Scrum delivery environment. Partnered with developers, product owners, and business analysts to deliver bug-free sprint increments.",
    responsibilities: [
      "Analyzed Business Requirement Specifications (BRS) and User Stories to derive comprehensive test scenarios and detailed test cases.",
      "Executed Smoke, Sanity, Functional, and Regression testing across cross-browser environments (Chrome, Firefox, Edge, Safari).",
      "Identified, documented, and reported functional defects in Jira with unambiguous steps to reproduce, console logs, and environment metadata.",
      "Performed API testing using Postman for endpoints involving GET, POST, PUT, and DELETE methods, verifying status codes and JSON payloads.",
      "Validated backend data changes using SQL queries to ensure frontend actions accurately updated the database tables.",
      "Collaborated in daily Scrum stand-ups, sprint planning sessions, defect triage reviews, and sprint retrospectives."
    ],
    testingTypes: [
      "Functional Testing",
      "Regression Testing",
      "Smoke & Sanity Testing",
      "Integration Testing",
      "API Testing",
      "UI Testing"
    ],
    toolsUsed: ["Jira", "Postman", "SQL", "Chrome DevTools", "Agile/Scrum"]
  }
];

export const PROOFBITS_PROJECT_DATA: ProofBitsProjectDetails = {
  id: "proofbits",
  name: "ProofBits",
  domain: "Healthcare / Digital Health",
  projectType: "Online Medical Certificate Generation Platform",
  role: "Manual QA Tester",
  platforms: [
    "Admin Web Application",
    "Pharmacist Web Application",
    "Mobile Application (Android APK)"
  ],
  testingTypes: [
    "Manual Testing",
    "API Testing",
    "Mobile Testing",
    "Functional Testing",
    "Regression Testing",
    "Smoke & Sanity"
  ],
  tools: ["Jira", "Postman"],
  methodology: "Agile / Scrum",
  overview: [
    "ProofBits is an online medical certificate generation platform designed to support digital medical certificate-related workflows.",
    "The product consists of web applications used by Administrators and Pharmacists, along with an Android mobile application.",
    "As a Manual QA Tester, I performed functional testing across the web and mobile applications and API testing to validate application functionality and data behavior."
  ],
  platformsTested: [
    {
      name: "Admin Web Application",
      badge: "Web Portal",
      description: "Central administrative application for managing system master data, supervising user permissions, validating certificate lifecycle states, and auditing generated digital medical records.",
      focusAreas: [
        "Admin user authentication & role-based dashboard access",
        "Clinic, doctor, and practitioner onboarding approval workflows",
        "Medical certificate issuance logs, cancellation, and audit trail verification",
        "Master data configuration and template validation"
      ]
    },
    {
      name: "Pharmacist Web Application",
      badge: "Web Portal",
      description: "Specialized web portal tailored for licensed pharmacists to inspect, verify, and validate authenticity of digital medical certificates presented by patients.",
      focusAreas: [
        "Certificate lookup and verification by certificate ID / QR code",
        "Patient identity, prescription details, and doctor authorization checks",
        "Verification status updates (Approved, Dispensed, Flagged)",
        "Pharmacist session timeout and cross-browser UI consistency"
      ]
    },
    {
      name: "Mobile Application (Android APK)",
      badge: "Android App",
      description: "Patient and practitioner mobile application for initiating medical certificate requests, uploading diagnostic support files, tracking status, and storing digital certificates.",
      focusAreas: [
        "Android APK manual installation, launch, and permission handling",
        "Patient certificate request submission and field validation",
        "Navigation flow, back-button handling, and responsiveness across screen sizes",
        "User workflow testing and validation of status updates in real time"
      ]
    }
  ],
  responsibilities: [
    "Analyze functional requirements and application workflows to identify test scenarios and test conditions.",
    "Design and execute functional test cases covering positive, negative, validation, boundary, and business-rule scenarios.",
    "Perform end-to-end testing across Admin, Pharmacist, and Mobile application workflows.",
    "Perform regression testing to ensure that new changes do not impact existing functionality.",
    "Perform smoke and sanity testing for application builds and releases.",
    "Perform API testing to validate API requests, responses, HTTP status codes, response data, and functional behavior.",
    "Perform manual testing of the Android mobile application (APK), including UI, navigation, validation, usability, and functional workflows.",
    "Validate consistency between application UI and API responses where applicable.",
    "Identify, document, and track defects using Jira with clear reproduction steps, expected result, actual result, severity, priority, and supporting evidence.",
    "Retest resolved defects and perform regression testing to verify fixes.",
    "Collaborate with developers and stakeholders during defect analysis and resolution.",
    "Prepare and maintain test scenarios, test cases, test execution results, and defect reports."
  ],
  testingAreas: [
    {
      title: "Functional Testing",
      description: "Comprehensive verification of business rules and end-to-end clinical certificate flows",
      items: [
        "Functional testing",
        "Positive and negative testing",
        "Business-rule validation",
        "End-to-end workflow testing",
        "Form and field validation",
        "Regression testing",
        "Smoke testing",
        "Sanity testing"
      ]
    },
    {
      title: "Web Application Testing",
      description: "Verification of Admin and Pharmacist web portals across core user journeys",
      items: [
        "Admin Web Application",
        "Pharmacist Web Application",
        "UI testing",
        "Navigation testing",
        "Workflow validation",
        "Form validation",
        "Cross-browser testing where applicable"
      ]
    },
    {
      title: "Mobile Application Testing",
      description: "Manual testing of Android mobile APK builds and user interface interactions",
      items: [
        "Android APK testing",
        "Functional testing",
        "UI testing",
        "Navigation testing",
        "Form and field validation",
        "User workflow testing",
        "Device and screen-size validation where applicable"
      ]
    }
  ],
  apiTesting: [
    "API request validation",
    "API response validation",
    "HTTP status code validation",
    "Request parameter validation",
    "Response data verification",
    "Positive and negative API scenarios",
    "UI and API data validation where applicable"
  ],
  defectManagement: [
    "Defect identification",
    "Jira defect reporting",
    "Severity and priority assignment",
    "Clear reproduction steps",
    "Expected vs Actual Result documentation",
    "Screenshot and evidence attachment",
    "Defect retesting",
    "Regression testing",
    "Defect lifecycle tracking"
  ],
  toolsAndMethodology: {
    tools: [
      {
        name: "Jira",
        purpose: "Defect reporting, tracking bug lifecycles, severity & priority classification, test execution tracking, and defect retesting sign-offs."
      },
      {
        name: "Postman",
        purpose: "API request/response validation, positive & negative test execution, HTTP status code checks, and payload verification."
      }
    ],
    methodology: {
      name: "Agile / Scrum",
      details: [
        "Active participation in Sprint Planning and backlog grooming to define test conditions.",
        "Daily Stand-up updates highlighting QA execution status and defect blockers.",
        "Defect triage collaboration with developers and product owners.",
        "Sprint Demo and release sanity sign-offs."
      ]
    }
  }
};

export const PROJECTS: ProjectItem[] = [
  {
    id: "proofbits",
    name: "ProofBits",
    domain: "Healthcare / Digital Health",
    projectType: "Online Medical Certificate Generation Platform",
    role: "Manual QA Tester",
    platforms: [
      "Admin Web Application",
      "Pharmacist Web Application",
      "Mobile Application (Android APK)"
    ],
    responsibilities: PROOFBITS_PROJECT_DATA.responsibilities,
    testingTypes: [
      "Manual Testing",
      "API Testing",
      "Mobile Testing",
      "Functional Testing",
      "Regression Testing",
      "Smoke & Sanity"
    ],
    tools: ["Jira", "Postman"],
    methodology: "Agile / Scrum",
    keyModules: [
      "Admin Web Portal",
      "Pharmacist Verification Portal",
      "Android APK Mobile App",
      "Medical Certificate Generation Workflow",
      "REST API Endpoint Validation"
    ],
    deliverables: [
      "Functional Test Scenarios & Test Cases Document",
      "Jira Defect Reports with Clear Repro Steps",
      "Postman API Test Request Collections",
      "Mobile APK Smoke & Sanity Execution Sign-offs"
    ]
  }
];

export const TEST_CASES: TestCase[] = [
  {
    id: "TC-AUTH-001",
    scenario: "Verify successful user login with valid registered credentials",
    module: "User Authentication",
    testType: "Positive",
    preconditions: "User is registered in the database with active status and verified email.",
    steps: [
      "Navigate to the login URL (/login).",
      "Enter a registered valid email address in the Email field.",
      "Enter the matching valid password in the Password field.",
      "Click the 'Sign In' button."
    ],
    expectedResult: "User is successfully authenticated, session cookie is created, and user is redirected to the dashboard (/dashboard) with their name displayed in the header.",
    priority: "High",
    status: "Passed"
  },
  {
    id: "TC-AUTH-002",
    scenario: "Verify error message when entering an invalid password for an existing account",
    module: "User Authentication",
    testType: "Negative",
    preconditions: "User account exists with active status.",
    steps: [
      "Navigate to the login URL (/login).",
      "Enter the valid registered email address.",
      "Enter an incorrect password string (e.g., 'WrongPass123!').",
      "Click the 'Sign In' button."
    ],
    expectedResult: "System prevents login, retains email in input, clears password field, and displays standard error alert: 'Invalid email or password'. User is not redirected.",
    priority: "High",
    status: "Passed"
  },
  {
    id: "TC-CART-003",
    scenario: "Verify stock validation when attempting to add an out-of-stock product to cart",
    module: "Shopping Cart",
    testType: "Boundary",
    preconditions: "Product item has stock inventory count equal to 0 in database.",
    steps: [
      "Navigate to the product details page of an out-of-stock item.",
      "Observe the status of the 'Add to Cart' button and stock badge.",
      "Attempt to click the button or inspect form payload submit."
    ],
    expectedResult: "Product displays 'Out of Stock' badge; 'Add to Cart' button is disabled; clicking does not trigger API call or increment cart item counter.",
    priority: "Medium",
    status: "Passed"
  },
  {
    id: "TC-PROMO-004",
    scenario: "Verify discount calculation when applying a valid percentage promo code",
    module: "Cart & Checkout",
    testType: "Positive",
    preconditions: "Cart contains eligible items with subtotal >= minimum required threshold ($50.00). Active promo code 'SAVE15' exists for 15% discount.",
    steps: [
      "Navigate to the Cart review screen.",
      "Enter promo code 'SAVE15' into the coupon input field.",
      "Click the 'Apply' button.",
      "Verify the calculated discount row, taxes, and updated grand total."
    ],
    expectedResult: "Discount row displays -15% of subtotal; success notification appears: 'Coupon SAVE15 applied'; Grand Total recalculates correctly (Subtotal - Discount + Tax).",
    priority: "High",
    status: "Passed"
  },
  {
    id: "TC-SEC-005",
    scenario: "Verify system behavior when session token expires during checkout completion",
    module: "Checkout & Security",
    testType: "Security",
    preconditions: "User proceeds to final checkout step; auth token timestamp is modified or expired via test environment cookie manipulation.",
    steps: [
      "Fill in shipping and payment details on the checkout page.",
      "Simulate token expiration (clear auth token or wait for timeout).",
      "Click 'Place Order' button."
    ],
    expectedResult: "Order is NOT processed; user payment is NOT charged; user is redirected to Login page with notification 'Your session has expired. Please sign in to complete your purchase.' Cart items remain saved.",
    priority: "High",
    status: "Failed"
  },
  {
    id: "TC-API-006",
    scenario: "Verify user profile REST API endpoint returns 200 OK and valid schema for authenticated request",
    module: "User Profile API",
    testType: "Positive",
    preconditions: "Valid Bearer Authorization token obtained via /api/auth/login.",
    steps: [
      "Open Postman collection.",
      "Select GET request: {{baseUrl}}/api/v1/user/profile.",
      "Attach 'Authorization: Bearer <valid_token>' in header.",
      "Click Send and inspect response status, headers, and body."
    ],
    expectedResult: "HTTP Status is 200 OK; response body contains JSON object with keys (userId, email, firstName, lastName, role); response time is under 400ms.",
    priority: "Medium",
    status: "Passed"
  },
  {
    id: "TC-TRANS-007",
    scenario: "Verify transaction rollback and cart restoration when user cancels payment on gateway screen",
    module: "Payment Gateway",
    testType: "Positive",
    preconditions: "Order initiated with payment gateway redirection URL generated.",
    steps: [
      "Redirect to external mock payment gateway sandbox.",
      "Click 'Cancel and Return to Merchant' link on gateway screen.",
      "Wait for callback redirection to merchant portal."
    ],
    expectedResult: "User is returned to Cart or Checkout summary; transaction status in DB is marked 'CANCELLED'; no funds captured; cart items are retained for user convenience.",
    priority: "High",
    status: "Blocked"
  },
  {
    id: "TC-SRCH-008",
    scenario: "Verify search input sanitization against SQL injection strings and special characters",
    module: "Product Catalog",
    testType: "Negative",
    preconditions: "Search bar accessible on homepage and catalog header.",
    steps: [
      "Navigate to the home page search bar.",
      "Enter string: ' OR '1'='1; DROP TABLE products; --",
      "Press Enter or click Search icon."
    ],
    expectedResult: "System treats payload as a literal string search without throwing 500 server error; displays 'No products found for [string]'; database records remain untouched.",
    priority: "High",
    status: "Passed"
  }
];

export const BUG_REPORTS: BugReport[] = [
  {
    id: "JIRA-104",
    summary: "Checkout 'Place Order' button remains disabled after applying a valid discount coupon",
    module: "Cart & Checkout",
    severity: "Critical",
    priority: "High",
    environment: "Staging (Build v2.4.1), Chrome v128 on Windows 11, Screen 1920x1080",
    stepsToReproduce: [
      "Log in as an authenticated customer with active payment method saved.",
      "Add any in-stock item (Price > $50) to the shopping cart.",
      "Proceed to Cart screen and enter valid promo code 'SAVE15'.",
      "Click 'Apply' button (Coupon applies successfully, total recalculates).",
      "Click 'Proceed to Checkout' and navigate to final payment review.",
      "Observe the state of the 'Place Order' button."
    ],
    expectedResult: "The 'Place Order' button should be enabled and clickable once shipping and payment options are satisfied.",
    actualResult: "The 'Place Order' button remains permanently in disabled state (opacity 0.5, pointer-events: none) due to unhandled coupon state flag in the checkout form validator.",
    status: "Open",
    reporter: "Manual QA Tester",
    assignee: "Frontend Lead / Dev Team"
  },
  {
    id: "JIRA-118",
    summary: "User session token is not invalidated on active secondary browser tabs after password reset",
    module: "Authentication & Security",
    severity: "Major",
    priority: "High",
    environment: "QA Test Bed (Build v2.3.9), Firefox v130 on macOS Sonoma",
    stepsToReproduce: [
      "Open the application in Tab 1 and log in successfully with valid credentials.",
      "Open Tab 2 in the same browser session and navigate to 'Account Security' settings.",
      "Perform a password reset in Tab 2 with a new strong password.",
      "Switch back to Tab 1 without refreshing.",
      "Attempt to view private account profile or trigger an authenticated API request."
    ],
    expectedResult: "The previous session token in Tab 1 should be invalidated upon password change; any subsequent action should redirect to Login with 'Session Expired'.",
    actualResult: "Tab 1 remains active and continues to accept authenticated API requests until manual page refresh, posing an account hijack risk on shared devices.",
    status: "In Progress",
    reporter: "Manual QA Tester",
    assignee: "Backend Auth Team"
  },
  {
    id: "JIRA-092",
    summary: "Category filter dropdown overlaps product listing grid on tablet viewport (768px - 1024px)",
    module: "Product Catalog / UI",
    severity: "Minor",
    priority: "Medium",
    environment: "QA Staging (Build v2.4.0), iPad Air 5th Gen (Safari iOS 17.5) & Chrome DevTools Tablet Simulation",
    stepsToReproduce: [
      "Open product catalog listing page on a tablet device or resize browser viewport to 768px width.",
      "Click the 'Filters' button to expand multi-select category options.",
      "Scroll vertically down the product list."
    ],
    expectedResult: "The filter menu should appear either as a modal drawer overlay or push content down cleanly with appropriate z-index and backdrop.",
    actualResult: "Filter dropdown opens with static positioning without z-index layer, causing filter checkboxes to awkwardly overlap product price tags and card images.",
    status: "In Review",
    reporter: "Manual QA Tester",
    assignee: "UI/UX Developer"
  },
  {
    id: "JIRA-077",
    summary: "Order details API returns HTTP 500 Internal Server Error instead of 404 Not Found for non-existent order ID",
    module: "Order Management API",
    severity: "Major",
    priority: "Medium",
    environment: "Dev API Gateway (v1.8.0), Postman v11.10.0, Linux staging container",
    stepsToReproduce: [
      "Open Postman and configure GET request to {{baseUrl}}/api/v1/orders/999999999.",
      "Attach valid user authorization bearer token.",
      "Send request with non-existent order numeric ID."
    ],
    expectedResult: "Server should catch null record lookup gracefully and return HTTP 404 Not Found with JSON error body: {\"status\": 404, \"message\": \"Order not found\"}.",
    actualResult: "Server crashes unhandled in order controller and returns HTTP 500 Internal Server Error with raw unformatted stack trace exposed in response body.",
    status: "Closed",
    reporter: "Manual QA Tester",
    assignee: "Backend Services Team"
  }
];

export const API_TEST_CASES: ApiCase[] = [
  {
    id: "API-GET-01",
    method: "GET",
    endpoint: "/api/v1/products/item-84920",
    title: "Fetch product details by ID (Positive Test)",
    category: "Positive",
    description: "Verify that retrieving an existing, published product returns HTTP 200 with complete product schema.",
    headers: {
      "Accept": "application/json",
      "User-Agent": "PostmanRuntime/7.39.0"
    },
    requestBody: null,
    responseStatus: 200,
    responseStatusText: "OK",
    responseBody: JSON.stringify({
      status: "success",
      data: {
        id: "item-84920",
        sku: "PROD-TECH-409",
        name: "Wireless Noise-Cancelling Headphones",
        price: 149.99,
        stock: 24,
        currency: "USD",
        category: "Audio",
        isAvailable: true
      }
    }, null, 2),
    validations: [
      "Status code is 200 OK",
      "Response time is < 350ms",
      "Content-Type header contains application/json",
      "Body contains id, sku, price, and stock fields",
      "price is a valid positive number and stock >= 0"
    ]
  },
  {
    id: "API-POST-02",
    method: "POST",
    endpoint: "/api/v1/auth/login",
    title: "Authenticate user and issue JWT token (Positive Test)",
    category: "Positive",
    description: "Verify that valid login credentials return HTTP 200 with an access token, token expiration, and user object.",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    requestBody: JSON.stringify({
      email: "qa.tester.candidate@example.com",
      password: "SampleSecurePassword123!"
    }, null, 2),
    responseStatus: 200,
    responseStatusText: "OK",
    responseBody: JSON.stringify({
      status: "success",
      tokenType: "Bearer",
      accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1c3ItOTAxMiIsImlhdCI6MTcyNTk5MDAwMH0.signature_sample",
      expiresIn: 3600,
      user: {
        userId: "usr-9012",
        email: "qa.tester.candidate@example.com",
        role: "StandardUser"
      }
    }, null, 2),
    validations: [
      "Status code is 200 OK",
      "accessToken is a non-empty string",
      "tokenType equals 'Bearer'",
      "expiresIn equals 3600 seconds",
      "Password field is NOT reflected back in response"
    ]
  },
  {
    id: "API-POST-03",
    method: "POST",
    endpoint: "/api/v1/auth/login",
    title: "Login with missing password parameter (Negative Test)",
    category: "Negative",
    description: "Verify that submitting a request with missing required field returns HTTP 400 Bad Request with field validation errors.",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    requestBody: JSON.stringify({
      email: "qa.tester.candidate@example.com"
      // password omitted
    }, null, 2),
    responseStatus: 400,
    responseStatusText: "Bad Request",
    responseBody: JSON.stringify({
      status: "error",
      statusCode: 400,
      error: "ValidationFailed",
      message: "Required field 'password' is missing",
      fieldErrors: [
        {
          field: "password",
          rule: "required",
          message: "Password must be provided"
        }
      ]
    }, null, 2),
    validations: [
      "Status code is 400 Bad Request",
      "Error code 'ValidationFailed' is present",
      "fieldErrors array details missing 'password'",
      "Security: No internal stack trace exposed"
    ]
  },
  {
    id: "API-PUT-04",
    method: "PUT",
    endpoint: "/api/v1/user/profile",
    title: "Update user contact information (Positive Test)",
    category: "Positive",
    description: "Verify updating user profile information with Bearer authentication returns HTTP 200 and updated fields.",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer eyJhbGciOiJIUzI1Ni..."
    },
    requestBody: JSON.stringify({
      phone: "+91-9876543210",
      city: "Bangalore",
      country: "India",
      receiveNotifications: true
    }, null, 2),
    responseStatus: 200,
    responseStatusText: "OK",
    responseBody: JSON.stringify({
      status: "success",
      message: "Profile updated successfully",
      updatedAt: "2026-09-11T10:15:30Z",
      data: {
        userId: "usr-9012",
        phone: "+91-9876543210",
        city: "Bangalore",
        country: "India",
        receiveNotifications: true
      }
    }, null, 2),
    validations: [
      "Status code is 200 OK",
      "updatedAt timestamp reflects recent ISO string",
      "Phone and city values match submitted request body"
    ]
  },
  {
    id: "API-DELETE-05",
    method: "DELETE",
    endpoint: "/api/v1/cart/items/cart-item-552",
    title: "Remove item from cart (Positive Test)",
    category: "Positive",
    description: "Verify that deleting an item from active cart returns HTTP 204 No Content or HTTP 200 with updated cart subtotal.",
    headers: {
      "Authorization": "Bearer eyJhbGciOiJIUzI1Ni...",
      "Accept": "application/json"
    },
    requestBody: null,
    responseStatus: 200,
    responseStatusText: "OK",
    responseBody: JSON.stringify({
      status: "success",
      message: "Item cart-item-552 removed from cart",
      cart: {
        totalItems: 1,
        subtotal: 49.99,
        currency: "USD"
      }
    }, null, 2),
    validations: [
      "Status code is 200 OK",
      "cart.totalItems is decremented accurately",
      "subtotal is updated without deleted item price"
    ]
  },
  {
    id: "API-GET-06",
    method: "GET",
    endpoint: "/api/v1/orders/ORD-999999",
    title: "Request non-existent order ID (Negative Test)",
    category: "Negative",
    description: "Verify requesting a non-existent order returns HTTP 404 Not Found with clean message.",
    headers: {
      "Authorization": "Bearer eyJhbGciOiJIUzI1Ni...",
      "Accept": "application/json"
    },
    requestBody: null,
    responseStatus: 404,
    responseStatusText: "Not Found",
    responseBody: JSON.stringify({
      status: "fail",
      statusCode: 404,
      error: "ResourceNotFound",
      message: "Order with ID ORD-999999 does not exist"
    }, null, 2),
    validations: [
      "Status code is 404 Not Found",
      "Response payload contains user-friendly message",
      "Server does not return 500"
    ]
  }
];

