const calculatebtn= document.querySelector('ion-button')
const personHeight = document.getElementById('person-height');
const personWeight = document.getElementById('person-weight');



const  calculateBMI = () =>{
    height = +personHeight.value;
    weight = +personWeight.value;
    const bmi = weight/(weight*height);
    console.log(bmi);
}

calculatebtn.addEventListener('click',calculateBMI)