export function setupCounter(element) {
  let counter = 0
  const setCounter = (count) => {
    counter = count
    element.innerHTML = `count is ${counter}`
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
}

export function doFunction() {
  guessnum = searchnum;
    console.log(guessnum)
    guess = document.getElementsByTagName("input")[0].value;
    guesses++;
    document.getElementById("printGuesses").innerHTML = "You have made " + guesses + " guesses.";
    let hints = document.getElementById("hints");
    let hint = document.createElement("p");
hints.append(hint);
if (items.mythics.ad[guessnum] == 1 && items.mythics.ad[itemnum]) {
    hint.innerText += " ad🟩";
} else if (items.mythics.ad[guessnum] == 1) {
  hint.innerText += " ad🟥";
}
if (items.mythics.ap[guessnum] == 1 && items.mythics.ap[itemnum]) {
  hint.innerText += " ap🟩"; 
  } else if (items.mythics.ap[guessnum] == 1) {
  hint.innerText += " ap🟥";
  }
  if (items.mythics.hp[guessnum] == 1 && items.mythics.hp[itemnum]) {
    hint.innerText += " hp🟩"; 
    } else if (items.mythics.hp[guessnum] == 1) {
    hint.innerText += " hp🟥";
    }
    if (items.mythics.ah[guessnum] == 1 && items.mythics.ah[itemnum]) {
      hint.innerText += " ah🟩"; 
      } else if (items.mythics.ah[guessnum] == 1) {
      hint.innerText += " ah🟥";
      }
    if (items.mythics.armor[guessnum] == 1 && items.mythics.armor[itemnum]) {
      hint.innerText += " armor🟩"; 
      } else if (items.mythics.armor[guessnum] == 1) {
      hint.innerText += " armor🟥";
      }
      if (items.mythics.mr[guessnum] == 1 && items.mythics.mr[itemnum]) {
        hint.innerText += " mr🟩"; 
        } else if (items.mythics.mr[guessnum] == 1) {
        hint.innerText += " mr🟥";
        }
      
    console.log("Your guess: " + guess);
    console.log("guesses = " + guesses)
    if (guess.toLowerCase() === answer.toLowerCase()) {
        alert("You won!\nThe item was: " + answer + "\nYou did it in " + guesses + " guesses.");
    }
}

export function searchItem(name, num) {
  searchnum = num;
    document.getElementById("myInput").value = name;
}


export function myFunction() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName('li');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}