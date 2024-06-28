function mynailscheduler(){
    let name; 
    let appointment; 
    let style;
    name = prompt("Who is the lucky mommy?");
    appointment = prompt("What day would you like to book?");
    style = prompt("Mani, pedi, both?");
    mynailsHeader.innerHTML = `someone booked a nail spa for you!`
    mynailsParagraph.innerHTML = `Hi ${name}, someone wants to treat you to a spa day for ${appointment} for ${style} we can't wait to see you!`;
    
  }
    mynails.onclick = mynailscheduler