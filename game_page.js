p1=localStorage.getItem("P1");
p2=localStorage.getItem("P2");

p1_score=0;
p2_score=0;

document.getElementById("p1_name").innerHTML=p1+" : ";
document.getElementById("p2_name").innerHTML=p2+" : ";

document.getElementById("p1_score").innerHTML=p1_score;
document.getElementById("p2_score").innerHTML=p2_score;


document.getElementById("p_q").innerHTML="Question Turn: " + p1;
document.getElementById("p_a").innerHTML="Guessing Turn: " + p2;

real_answer=0;

function send(){
   get_num1=document.getElementById("number1").value;
   get_num2=document.getElementById("number2").value;

   document.getElementById("number1").value="";
   document.getElementById("number2").value="";
   
   real_answer=parseInt(get_num1)*parseInt(get_num2);

   console.log(get_num1, get_num2);

   question_word="<h4 id='hint'> Q. " + get_num1+ " x " + get_num2 + " </h4>";
   input= "<br> Answer : <input type='number' id='input_c'>";
   check_btn="<br> <br> <button class='btn btn-info' onclick='check()'> CHECK ANS </button>"
   row= question_word + input + check_btn;

   document.getElementById("output").innerHTML=row;
}
q_player="P1";
a_player="P2";
function check(){
   ans=document.getElementById("input_c").value;
   ans=Number(ans);
   console.log(ans);
   if(ans==real_answer){
      if(a_player=="P1"){
         p1_score=p1_score+1;
         document.getElementById("p1_score").innerHTML=p1_score;
      }
      else{
         p2_score=p2_score+1;
         document.getElementById("p2_score").innerHTML=p2_score;   
      }
   }
   if(a_player=="P1"){ 
      document.getElementById("p_q").innerHTML="Question Turn: " + p1;
      document.getElementById("p_a").innerHTML="Guessing Turn: " + p2;
      q_player="P1";
      a_player="P2";
   }
   else{ 
      document.getElementById("p_q").innerHTML="Question Turn: " + p2;
      document.getElementById("p_a").innerHTML="Guessing Turn: " + p1;
      a_player="P1";
      q_player="P2"; 

   }
   document.getElementById("output").innerHTML="";
}
