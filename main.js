function check() {
    var c=0;
    var q1=document.quiz.question1.value;
    var q2=document.quiz.question2.value;
    var q3=document.quiz.question3.value;
    var q4=document.quiz.question4.value;
    var q5=document.quiz.question5.value;
    var q6=document.quiz.question6.value;
    var result=document.getElementById('result');
    var quiz=document.getElementById('quiz');
    
    if (q1=="A markup language") {c++}
    if (q2=="Scope") {c++}
    if (q3=="Global variable") {c++}
    if (q4=="Local") {c++}
    if (q5=="var,const,let") {c++}
    if (q6=="React") {c++}

    document.write(c);

    if (c<+3) {
    result.textContent='Your score is ${c}. not good.'
    } else {
     result.textContent='Your score is ${c}. good.'
    }
    
}