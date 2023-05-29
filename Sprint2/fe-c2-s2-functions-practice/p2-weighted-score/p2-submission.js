

function calculateTotalWeightedScore(assignmentMarks , projectMarks , quizMarks , midTermMarks , finalExamMarks) {
    let assignmentWeight =10;
    let projectWeight=35;
    let quizWeight = 10;
    let midTermWeight= 15;
    let finalExamWeight=30;

    let assignmentWeightScore = (assignmentWeight/100) * assignmentMarks;
    let projectWeightScore = (projectWeight/100) * projectMarks;
    let quizWeightScore = (quizWeight/100) * quizMarks;
    let midTermWeightScore = (midTermWeight/100) * midTermMarks;
    let finalExamWeightScore = (finalExamWeight/100) * finalExamMarks;

    let overAllWeightedScore = assignmentWeightScore + projectWeightScore + quizWeightScore + midTermWeightScore + finalExamWeightScore;

    console.log(`Assignment type      Weighted Score`)
    console.log(`Assignments      ${assignmentWeightScore}`);
    console.log(`Projects         ${projectWeightScore}`);
    console.log(`Quizs            ${quizWeightScore}`);
    console.log(`MidTerms         ${midTermWeightScore}`);
    console.log(`FinalExam        ${finalExamWeightScore}`);

    console.log(`The Total Weighted Score    ${overAllWeightedScore}%`);
}

calculateTotalWeightedScore(97,82,60,75,80);