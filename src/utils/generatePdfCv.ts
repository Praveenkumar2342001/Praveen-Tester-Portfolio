import { jsPDF } from 'jspdf';
import { PERSONAL_PROFILE } from '../data/portfolioData';

export function generateAndDownloadCvPdf(): void {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const pageWidth = 210;
  const pageHeight = 297;
  const leftMargin = 16;
  const rightMargin = 16;
  const contentWidth = pageWidth - leftMargin - rightMargin; // 178mm

  let currentY = 18;

  // Helper for section header with horizontal rule
  const drawSectionHeading = (title: string) => {
    // Check page overflow
    if (currentY > pageHeight - 30) {
      doc.addPage();
      currentY = 20;
    }

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.setTextColor(20, 20, 20);
    doc.text(title, leftMargin, currentY);
    currentY += 2;

    doc.setDrawColor(180, 180, 180);
    doc.setLineWidth(0.4);
    doc.line(leftMargin, currentY, leftMargin + contentWidth, currentY);
    currentY += 5;
  };

  // Helper to add bullet point text with word wrap
  const drawBullet = (text: string, indent = 4) => {
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9.5);
    doc.setTextColor(40, 40, 40);

    const bulletX = leftMargin + indent;
    const textX = bulletX + 4;
    const maxTextWidth = contentWidth - indent - 4;

    doc.text('•', bulletX, currentY);
    const lines = doc.splitTextToSize(text, maxTextWidth);

    for (let i = 0; i < lines.length; i++) {
      if (currentY > pageHeight - 15) {
        doc.addPage();
        currentY = 20;
      }
      doc.text(lines[i], textX, currentY);
      currentY += 4.5;
    }
    currentY += 1;
  };

  // Helper to add paragraph text
  const drawParagraph = (text: string, fontSize = 9.5) => {
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(fontSize);
    doc.setTextColor(40, 40, 40);

    const lines = doc.splitTextToSize(text, contentWidth);
    for (let i = 0; i < lines.length; i++) {
      if (currentY > pageHeight - 15) {
        doc.addPage();
        currentY = 20;
      }
      doc.text(lines[i], leftMargin, currentY);
      currentY += 4.5;
    }
  };

  // ==========================================
  // PAGE 1: HEADER
  // ==========================================
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(17);
  doc.setTextColor(15, 23, 42); // slate-900
  doc.text('PRAVEEN KUMAR P', pageWidth / 2, currentY, { align: 'center' });
  currentY += 6;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(5, 120, 85); // emerald-700
  doc.text('MANUAL QA TESTER', pageWidth / 2, currentY, { align: 'center' });
  currentY += 5.5;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9.5);
  doc.setTextColor(70, 70, 70);
  const contactLine = 'Chennai - 600118 | 9941488866 | Praveenkumarp2342001@gmail.com';
  doc.text(contactLine, pageWidth / 2, currentY, { align: 'center' });
  currentY += 8;

  // ==========================================
  // PROFESSIONAL SUMMARY
  // ==========================================
  drawSectionHeading('PROFESSIONAL SUMMARY');
  const summaryText =
    'Manual QA Tester with 1.5 years of experience in Agile/Scrum environments, with hands-on experience in web, API, and mobile testing. Skilled in test case design, functional and regression testing, defect reporting in Jira, API validation using Postman, and backend verification using SQL.';
  drawParagraph(summaryText);
  currentY += 4;

  // ==========================================
  // TECHNICAL SKILLS
  // ==========================================
  drawSectionHeading('TECHNICAL SKILLS');

  const skillsData: Array<{ category: string; skills: string }> = [
    {
      category: 'Testing',
      skills:
        'Manual Testing, Functional Testing, Regression Testing, Smoke Testing, Sanity Testing, Integration Testing, UI Testing, API Testing, Mobile Testing',
    },
    {
      category: 'API Testing',
      skills: 'Postman, GET, POST, PUT, DELETE, HTTP status codes, JSON payload validation',
    },
    {
      category: 'Database',
      skills: 'SQL, backend data validation',
    },
    {
      category: 'Defect Management',
      skills: 'Jira, defect reporting, reproduction steps, console logs, environment details',
    },
    {
      category: 'Tools',
      skills: 'Chrome DevTools, Jira, Postman, SQL',
    },
    {
      category: 'Methodology',
      skills: 'Agile / Scrum, Sprint Planning, Daily Stand-ups, Defect Triage, Sprint Retrospectives',
    },
    {
      category: 'Additional',
      skills: 'Selenium WebDriver, TestNG, POM, Maven, Eclipse, GitHub',
    },
  ];

  // Header row for Category / Skills
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(30, 30, 30);
  doc.text('Category', leftMargin, currentY);
  doc.text('Skills', leftMargin + 42, currentY);
  currentY += 4.5;

  doc.setDrawColor(220, 220, 220);
  doc.setLineWidth(0.2);
  doc.line(leftMargin, currentY - 1.5, leftMargin + contentWidth, currentY - 1.5);
  currentY += 1;

  skillsData.forEach((row) => {
    if (currentY > pageHeight - 20) {
      doc.addPage();
      currentY = 20;
    }

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.setTextColor(20, 20, 20);
    doc.text(row.category, leftMargin, currentY);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(50, 50, 50);

    const skillsLines = doc.splitTextToSize(row.skills, contentWidth - 44);
    for (let i = 0; i < skillsLines.length; i++) {
      doc.text(skillsLines[i], leftMargin + 42, currentY);
      currentY += 4.2;
    }
    currentY += 1.5;
  });

  currentY += 3;

  // ==========================================
  // PROFESSIONAL EXPERIENCE
  // ==========================================
  drawSectionHeading('PROFESSIONAL EXPERIENCE');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10.5);
  doc.setTextColor(15, 23, 42);
  doc.text('Negits Solution | Manual QA Tester', leftMargin, currentY);
  currentY += 4.5;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(100, 100, 100);
  doc.text('June 2025 – Present | Chennai, India / Work-From-Home', leftMargin, currentY);
  currentY += 5;

  const expBullets = [
    'Performed end-to-end manual testing of enterprise web applications within an Agile/Scrum delivery environment.',
    'Analyzed Business Requirement Specifications (BRS) and User Stories to derive comprehensive test scenarios and detailed test cases.',
    'Executed Smoke, Sanity, Functional, Regression, Integration, and UI testing across Chrome, Firefox, Edge, and Safari.',
    'Identified, documented, and reported functional defects in Jira with clear reproduction steps, console logs, and relevant environment details.',
    'Performed REST API testing using Postman for GET, POST, PUT, and DELETE endpoints, validating HTTP status codes and JSON response/request payloads.',
    'Validated backend data changes using SQL queries to confirm that frontend actions were correctly reflected in database tables.',
    'Collaborated with developers, product owners, and business analysts during daily Scrum stand-ups, sprint planning, defect triage, and sprint retrospectives.',
  ];

  expBullets.forEach((b) => drawBullet(b));
  currentY += 3;

  // ==========================================
  // PROJECT EXPERIENCE (PROOFBITS)
  // ==========================================
  drawSectionHeading('PROJECT EXPERIENCE');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(15, 23, 42);
  doc.text('ProofBits – Online Medical Certificate Generation Platform', leftMargin, currentY);
  currentY += 4.5;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(60, 60, 60);
  doc.text('Domain: ', leftMargin, currentY);
  doc.setFont('helvetica', 'normal');
  doc.text('Healthcare / Digital Health', leftMargin + 14, currentY);

  doc.setFont('helvetica', 'bold');
  doc.text('Role: ', leftMargin + 65, currentY);
  doc.setFont('helvetica', 'normal');
  doc.text('Manual QA Tester', leftMargin + 76, currentY);
  currentY += 4.5;

  drawParagraph(
    'ProofBits is an online medical certificate generation platform supporting digital medical certificate-related workflows across web and Android applications.'
  );
  currentY += 2;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(40, 40, 40);
  doc.text('Platforms: ', leftMargin, currentY);
  doc.setFont('helvetica', 'normal');
  doc.text('Admin Web | Pharmacist Web | Android Mobile App', leftMargin + 17, currentY);
  currentY += 7;

  // Page 2 break for clean division matching original CV
  doc.addPage();
  currentY = 20;

  // Continuation of ProofBits Project
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(40, 40, 40);
  doc.text('Testing: ', leftMargin, currentY);
  doc.setFont('helvetica', 'normal');
  doc.text('Manual Testing | API Testing | Mobile Testing', leftMargin + 14, currentY);
  currentY += 4.5;

  doc.setFont('helvetica', 'bold');
  doc.text('Tools: ', leftMargin, currentY);
  doc.setFont('helvetica', 'normal');
  doc.text('Jira | Postman', leftMargin + 12, currentY);

  doc.setFont('helvetica', 'bold');
  doc.text('Methodology: ', leftMargin + 45, currentY);
  doc.setFont('helvetica', 'normal');
  doc.text('Agile / Scrum', leftMargin + 67, currentY);
  currentY += 5.5;

  const projectBullets = [
    'Admin Web Application: Tested workflows related to supervision, onboarding approvals, certificate lifecycle logs, and audits.',
    'Pharmacist Web Application: Tested digital certificate verification, authorization, and dispensing workflows.',
    'Android Mobile Application (APK): Tested patient certificate requests, document attachments, and mobile UI workflows.',
  ];

  projectBullets.forEach((b) => drawBullet(b));
  currentY += 4;

  // ==========================================
  // SOFTWARE TESTING COURSE PROJECT
  // ==========================================
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10.5);
  doc.setTextColor(15, 23, 42);
  doc.text('Software Testing Course Project', leftMargin, currentY);
  currentY += 4.5;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(40, 40, 40);
  doc.text('Human Resource Management (HRM) System', leftMargin, currentY);
  currentY += 4.5;

  drawParagraph(
    'Software Testing Course Project – Human Resource Management (HRM) System. A comprehensive HR management solution covering People Information Management, Leave Management, Time Management, and Recruitment.'
  );
  currentY += 2;

  const hrmBullets = [
    'Created a basic Selenium WebDriver automation framework using Page Object Model (POM), TestNG, Maven, and data-driven testing.',
    'Executed automation test cases written in TestNG.',
  ];

  hrmBullets.forEach((b) => drawBullet(b));
  currentY += 4;

  // ==========================================
  // EDUCATION
  // ==========================================
  drawSectionHeading('EDUCATION');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(20, 20, 20);
  doc.text(
    'Meenakshi College of Engineering | Electronics & Communication Engineering',
    leftMargin,
    currentY
  );
  currentY += 4.5;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(70, 70, 70);
  doc.text('2018 – 2022 | CGPA: 7.76', leftMargin, currentY);
  currentY += 4.5;

  doc.text(
    'HSC: 65% | SSLC: 84% | St. Mary’s Matriculation Boys Higher Secondary School',
    leftMargin,
    currentY
  );
  currentY += 8;

  // ==========================================
  // CERTIFICATION
  // ==========================================
  drawSectionHeading('CERTIFICATION');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(20, 20, 20);
  doc.text('Software Testing Certification – Login360', leftMargin, currentY);
  currentY += 4.5;

  drawParagraph(
    'Completed Software Testing course covering Manual Testing and Automation Testing using Selenium WebDriver with Java, Maven, and TestNG Framework.'
  );

  // Save the PDF file
  const fileName = 'Praveen_Kumar_P_Manual_QA_Tester_CV.pdf';
  doc.save(fileName);
}
