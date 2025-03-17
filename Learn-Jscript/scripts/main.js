const myHeading = document.querySelector("h1");
/*
Everything in between is a comment.
*/
// myHeading.textContent = "SALAM YA 3ALAM!";

// This is a comment



function setUserName() {
    

    if (!localStorage.getItem("name")) {
      const myName = prompt("Please enter your name.");
      localStorage.setItem("name", myName);
      myHeading.textContent = `Salam  ${myName}`;   
     } else {
      const storedName = localStorage.getItem("name");
      myHeading.textContent = `Salamo, ${storedName}`;
    }

  }

  let myButton = document.querySelector("button");

  myButton.addEventListener("click", () => {
    setUserName();
  });

  

  

  