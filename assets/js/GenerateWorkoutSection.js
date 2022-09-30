'use strict';
import * as Push from '../ExerciseGroups/push.js';
import * as Pull from '../ExerciseGroups/pull.js';
import * as Legs from '../ExerciseGroups/legs.js';



// Toggle display of tables in Generate Workout section
const pushWorkoutBtn = document.getElementById("pushBtn");
const pushTable = document.getElementById("push-table-wrapper");

const pullWorkoutBtn = document.getElementById("pullBtn");
const pullTable = document.getElementById("pull-table-wrapper");

const legsWorkoutBtn = document.getElementById("legsBtn");
const legsTable = document.getElementById("legs-table-wrapper");

const toggleTableDisplay = (tableElement) => {
    tableElement.style.display === 'block' ?
        tableElement.style.display = 'none' :
        tableElement.style.display = 'block';
}
pushWorkoutBtn.addEventListener("click", () => {
    toggleTableDisplay(pushTable);
});
pullWorkoutBtn.addEventListener("click", () => {
    toggleTableDisplay(pullTable);
});
legsWorkoutBtn.addEventListener("click", () => {
    toggleTableDisplay(legsTable);
});



//Generate Random workout and update value in each table.


//PUSH
const generatePushWorkout = () => {

    const shuffledArrayOfChestExercises = _.shuffle(Push.pushExercises.chest);
    const shuffledArrayOfTricepExercises = _.shuffle(Push.pushExercises.triceps);

    let randomChestExercise1 = shuffledArrayOfChestExercises[0].exerciseName;
    let randomChestExercise2 = shuffledArrayOfChestExercises[1].exerciseName;
    let randomChestExercise3 = shuffledArrayOfChestExercises[2].exerciseName;

    let randomTricepExercise1 = shuffledArrayOfTricepExercises[0].exerciseName;
    let randomTricepExercise2 = shuffledArrayOfTricepExercises[1].exerciseName;
    let randomTricepExercise3 = shuffledArrayOfTricepExercises[2].exerciseName;


    //Assign randomized exercises to td's in table
    document.getElementById('rCE1').innerText = randomChestExercise1;
    document.getElementById('rCE2').innerText = randomChestExercise2;
    document.getElementById('rCE3').innerText = randomChestExercise3;
    document.getElementById('rTE1').innerText = randomTricepExercise1;
    document.getElementById('rTE2').innerText = randomTricepExercise2;
    document.getElementById('rTE3').innerText = randomTricepExercise3;
}

pushWorkoutBtn.addEventListener("click", () => {
    generatePushWorkout();
});

//PULL
const generatePullWorkout = () => {

    const shuffledArrayOfBackExercises = _.shuffle(Pull.pullExercises.back);
    const shuffledArrayOfBicepExercises = _.shuffle(Pull.pullExercises.biceps);

    let randomBackExercise1 = shuffledArrayOfBackExercises[0].exerciseName;
    let randomBackExercise2 = shuffledArrayOfBackExercises[1].exerciseName;
    let randomBackExercise3 = shuffledArrayOfBackExercises[2].exerciseName;

    let randomBicepExercise1 = shuffledArrayOfBicepExercises[0].exerciseName;
    let randomBicepExercise2 = shuffledArrayOfBicepExercises[1].exerciseName;
    let randomBicepExercise3 = shuffledArrayOfBicepExercises[2].exerciseName;


    //Assign randomized exercises to td's in table
    document.getElementById('rBackE1').innerText = randomBackExercise1;
    document.getElementById('rBackE2').innerText = randomBackExercise2;
    document.getElementById('rBackE3').innerText = randomBackExercise3;
    document.getElementById('rBicepE1').innerText = randomBicepExercise1;
    document.getElementById('rBicepE2').innerText = randomBicepExercise2;
    document.getElementById('rBicepE3').innerText = randomBicepExercise3;
}

pullWorkoutBtn.addEventListener("click", () => {
    generatePullWorkout();
});


//LEGS
const generateLegsWorkout = () => {

    const shuffledArrayOfLegExercises = _.shuffle(Legs.legExercises.legs);

    let randomLegExercise1 = shuffledArrayOfLegExercises[0].exerciseName;
    let randomLegExercise2 = shuffledArrayOfLegExercises[1].exerciseName;
    let randomLegExercise3 = shuffledArrayOfLegExercises[2].exerciseName;
    let randomLegExercise4 = shuffledArrayOfLegExercises[3].exerciseName;
    let randomLegExercise5 = shuffledArrayOfLegExercises[4].exerciseName;

    //Assign randomized exercises to td's in table
    document.getElementById('rLE1').innerText = randomLegExercise1;
    document.getElementById('rLE2').innerText = randomLegExercise2;
    document.getElementById('rLE3').innerText = randomLegExercise3;
    document.getElementById('rLE4').innerText = randomLegExercise4;
    document.getElementById('rLE5').innerText = randomLegExercise5;
}

legsWorkoutBtn.addEventListener("click", () => {
    generateLegsWorkout();
});