 const slideTexts = [
    "✨ Challenge yourself every day!",
    "🎓 Learn while playing with QuizVerse!",
    "🏆 Compete and climb the leaderboard!",
    "📊 Track your progress and improve!"
  ];

  let curSlide=0;

  const slideElement = document.getElementById('textslide');

  setInterval(()=>{
    if(curSlide>=(slideTexts.length-1)){
      curSlide=0;
    }
    curSlide = curSlide+1;
    slideElement.textContent=slideTexts[curSlide];
  },3000);

  let pop = document.getElementById('popbtn');
  let popup = document.getElementById('popup')
  pop.addEventListener("click",()=>{
   if(popup.style.display==="none"){
    popup.style.display='block';
   }else{
     popup.style.display='none';
   }
  });

  
const events = [
  {
    id: 1,
    title: "JavaScript Quiz Challenge",
    date: "2025-08-10",
    description: "A quiz on JavaScript fundamentals and logic building."
  },
  {
    id: 2,
    title: "Cybersecurity Awareness Quiz",
    date: "2025-08-15",
    description: "Test your knowledge about digital threats and safety."
  },
  {
    id:3,
    title: "Galaxy",
    date:"2025-08-20",
    description:"Know More about Galaxy by this quiz"
  },
  
];

const students =[
{
  id:1,
  name:"Dhruv"
},

];
function loadEvents() {
  const eventList = document.getElementById("event-list");
  events.forEach(event => {
    const eventCard = document.createElement("div");
    eventCard.innerHTML = `
      <h3>${event.title}</h3>
      <p><strong>Date:</strong> ${event.date}</p>
      <p>${event.description}</p>
      <hr>
    `;
    eventList.appendChild(eventCard);
  });
}
function loadStudent(){
  const studentlist = document.getElementById('student-list');
  students.forEach(student=>{
    const studentcard = document.createElement("div");
    studentcard.innerHTML=`
    <h3>${student.name}</h3
    <hr>
    `;
    studentlist.appendChild(studentcard);
  });
} 
window.addEventListener("DOMContentLoaded", () => {
  loadEvents();
  loadStudent();
});
