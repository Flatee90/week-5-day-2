function mommyhair(){
    let name;
    let guest;
    name = prompt("What is your name?");
    guest = prompt("A mommy you want to treat?");
    mommyHeader.innerHTML = `You're Invited....`;
  mommyhairParagraph.innerHTML = `Hi ${guest}! ${name} would like to invite you to treat you to a day of pampering!  `;
    
  }
    mommyhair.onclick = mommyhair