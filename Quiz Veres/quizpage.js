const questions = [
  {
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    correct: 1
  },
  {
    question: "Capital of Japan?",
    options: ["Seoul", "Tokyo", "Kyoto", "Beijing"],
    correct: 1
  }
];
let correct=0;
  let curIndex=0;

 function loadquestion(){
       
        if(curIndex>0){
            let q1 = questions[curIndex-1];
            let sel = document.querySelector('input[name="answer"]:checked');
            
            if(sel){
                console.log(sel.value);
                if(sel.value==q1.correct){
                    correct++;
                }
            }
        }

        if(curIndex>=questions.length){
            document.getElementById('questionn').textContent = "Quiz is Over!!!";
            document.getElementById('Result').textContent="Result: "+correct+"/"+questions.length;
            let optHide = document.querySelectorAll('label');
            for(let i=0;i<optHide.length;i++){
                optHide[i].style.display="none";
            }
            return;
        }
        let q = questions[curIndex];

        let quest = q.question;

        document.getElementById('questionn').textContent = quest;
        let opt = document.getElementsByClassName('option');
        let optionSel = document.getElementsByClassName('option-btn')
        q.options.forEach(function(opts,i){
            opt[i].textContent = opts;
                optionSel[i].checked = false;
        })
            curIndex++;
         
 }
  loadquestion();