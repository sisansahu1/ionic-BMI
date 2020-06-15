const calculatebtn = document.getElementById("calc-btn");
const resetbtn = document.getElementById("reset-btn");
const personHeight = document.getElementById("person-height");
const personWeight = document.getElementById("person-weight");
const resultArea = document.getElementById('result');

const resetBMI = () =>{
    personHeight.value='';
    personWeight.value='';
}
const calculateBMI = () => {
  height = +personHeight.value;
  weight = +personWeight.value;
  const bmi = weight / (height* height);
  console.log(bmi);

  const resultElement = document.createElement('ion-card');
  resultElement.innerHTML =`
  <ion-card-content>
  <h2>${bmi}</h2>
  </ion-card-content>`

  resultArea.innerHTML='';
  resultArea.appendChild(resultElement);

  if(isNaN(bmi))
  {
      alert('Enter a number');
      return;
  }
};

calculatebtn.addEventListener('click', calculateBMI);
resetbtn.addEventListener('click',resetBMI);