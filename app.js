/* Put the ids in variables in js and then call them in the function */
const secondsHand = document.getElementById('seconds-hand')
const minutesHand = document.getElementById('minutes-hand')
const hoursHand = document.getElementById('hours-hand')

/* Alocate each id variable to real life time with the getTIme module. We create Objects in the function to allocate each time to teh id variable.*/
/* using the now variable to get the full time and using the method to get the seconds, minutes and hour. */

function getTime() {
    const now = new Date()
    const seconds = now.getSeconds()
    const minutes = now.getMinutes()
    const hours = now.getHours()

    /* We want to know how it should move in a circle, the radius is 360, you divide by 60 (the minutes in an hour), you get 6.  */
    const timeInterval = 6

    /* pick the div with the id and you want to rotate it using css in js you do the following: */
    secondsHand.style.transform = 'rotate(' + (seconds * timeInterval) + 'deg)'
    minutesHand.style.transform = 'rotate(' + (minutes * timeInterval + seconds / 10) + 'deg)'
    hoursHand.style.transform = 'rotate(' + (hours * 30 + minutes / 2) + 'deg)';







}

/* put function in set interval to get the time and have it check every 100 mila seconds */
setInterval(getTime, 100)