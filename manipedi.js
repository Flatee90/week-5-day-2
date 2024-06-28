function mynailscheduler(){
    let name; 
    let appointment; 
    let style;
    name = prompt("Who is the lucky mommy?");
    appointment = prompt("What day would you like to book?");
    style = prompt("Mani, pedi, both?");
    mynailsHeader.innerHTML = `someone booked a nail spa for you!`
    mynailsParagraph.innerHTML = `Hi ${name}, you have a secret admire whom wanted to reveal themselves to you with a gift of ${gifts}. ${signed} wanted you to know that they deeply care about you and on this day while making a declaration of their affection for you. Happy Valentine's Day from ${signed} and My Cupid!`;
    
  }
    myanils.onclick = mynailscheduler