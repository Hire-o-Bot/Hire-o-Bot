## Title: Hire-o-Bot-Automating Recruiting Workflow to Hire Candidates

### Type
Development
### Product 
A complete system for recruiters


### Executive Summary
This project provides a solution based on AI for automating recruiting workflow in
the software industry and related fields. Manually screening the resumes and interviewing
candidates is a time-consuming and repetitive task for a recruiter, where interviewing a single
candidate can take up to 23 hours. Our solution can help to automate the hiring workflow while
increasing the performance and reducing the interviewer bias in the selection process. In the
main workflow, the intelligent screening software screens candidates’ resumes for the applied
position through an AI-based engine to identify top candidates. The next part of the system is a
pre-employment test where each test is standardized for a position. Based on resumes and tests,
the AI engine recommends the top candidates. At this point, a recruiter can verify the selected
candidates and accept/reject them for the next stages or they can let the system decide. After
selection, the AI system schedules the interview with candidates depending on available slots.
Candidates are sent an email for an interview and the interview is confirmed once the candidate
accepts the time slot. AI system interviews the candidate based on several evaluation metrics including technical skills, experience, confidence, problem-solving skills, etc. Different
questions are asked to evaluate technical, behavioral and psychometric skills. The system judges
both the technical and soft skills while reducing the bias. The results and chosen candidates are
then listed for the recruiter with optional reasoning. Another component of the AI system is to
help candidates in improving their interview skills. This works on the same principle but is a
mock interview system and will advise candidates on how to improve the interview that they
have given.

### Overview
- ML enabled automated hiring process.
- Candidate Filtering using Resume Parsing (NLP)
- Analysis of video interview:
-   Soft Skills Analysis (CVIP) 
-   Technical Skills Assessment (NLP)

### Problem Statement 
Our aim is to build an intelligent solution that will automate the hiring process by filtering out worthy candidates and assessing their technical and communication abilities.


### Scope 
- Video Interview (Using CVIP & NLP)
-   Soft skills analysis - Confidence Attribute
-   Technical skills assessment - Relevance to the correct answer
- Resume parsing
-   Using tokenization and stop word filtering
-   PDF input
- Questionnaire Tests 

## Objectives
- Screening Resumes and taking out most relevant resumes. Taking out the most relevant
resumes is done by NLP models.
- Conducting tests for judging the technical skills of candidates. These tests are designed
currently for just developer posts (We are not dealing with other posts i.e management,
HR, etc.)
- Non-technical tests like pymetric.
- Conducting video interviews of candidates in real-time. Our goal is to conduct
interviews such that our AI asks questions and rate the answer of the candidate on a
relevancy scale. In the meantime also observe the soft skills of the candidate.
