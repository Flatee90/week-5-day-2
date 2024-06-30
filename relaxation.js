function massagescheduler(){
    let name; 
    let book; 
    name = prompt("What is your name?");
    massage = promprt("Would you like to book a message?");
    myrelaxationHeader.innerHTML = `Hi ${name}, Wants to show yo some appreciation for being the best mommy! `;
    myrelaxationParagraph.innerHTML = `Be on the look out for your ${massage} and 90 minutes of relxation!`
    
  }
  myrelaxationButton.onclick = massageschedulerCreate