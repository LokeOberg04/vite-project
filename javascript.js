function searchItem(name) {
  document.getElementById("myInput").value = name;
}

function doFunction() {
    guess = document.getElementsByTagName("input")[0].value;
    let guesses = document.getElementById("printGuesses").innerHTML.charAt((document.getElementById("printGuesses").innerHTML.indexOf("made")+5))
       if (document.getElementById("printGuesses").innerHTML == "") {
      document.getElementById("printGuesses").innerHTML = "You have made " + 1 + " guess.";
      guesses = 1;
    } else {
      guesses++;
    document.getElementById("printGuesses").innerHTML = "You have made " + guesses + " guesses.";
    }
    let hints = document.getElementById("hints");
    let hint = document.createElement("p");
hints.append(hint);
if (guesses == 1) {
hint.innerText += document.getElementById("cost").innerHTML;
} else if (guesses == 2) {
  hint.innerText += document.getElementById("tags").innerHTML;
} else if (guesses == 3) {
  hint.innerText += document.getElementById("description").innerHTML;
} else if (guesses == 4) {
  hint.innerText += document.getElementById("passive").innerHTML;
} 
      
    console.log("Your guess: " + guess);
    console.log("guesses = " + guesses)
    if (guess.toLowerCase() === (document.getElementById("name").innerHTML).toLowerCase()) {
        alert("You won!\nThe item was: " + document.getElementById("name").innerHTML + "\nYou did it in " + guesses + " guesses.");
    }
}

function myFunction() {
  // Declare variables
  let input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName("li");

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
const createList = (items) => {
  let list = document.getElementById("myUL");
  let searchnum = 0;
  for (const [key, value] of Object.entries(items)) {
    let li = document.createElement("li");
    let a = document.createElement("a");
    
    a.innerText = value.name;
    a.setAttribute(
      "onclick",
      'searchItem("' + value.name + '");'
    );
    list.appendChild(li);
    li.appendChild(a);
  }
};



const setup = async () => {
  const res = await fetch("/itemslist.json");
  const data = await res.json();
  
  let purchasableitems = [];
  
  for (const [key, value] of Object.entries(data.data)) {
    //console.log(value)
    if (value.gold.purchasable == 1) {
      purchasableitems.push(value);
    }
  }

  //  return purchasableitems;
  
  createList(purchasableitems)
  
  
  
  let guesses = 0;
  let guessnum = 0;
  let guess = "";
  let itemnum = Math.round(Math.random() * 192);
  let answer = purchasableitems[itemnum];
  let passive = "";
  for(let i = answer.description.indexOf("<passive>")+9; i<answer.description.indexOf("</passive>")-1;i++) {
 passive += answer.description.charAt(i);
  }
  
  document.getElementById("name").innerHTML = answer.name;
  document.getElementById("tags").innerHTML = "tags: " + answer.tags;
  document.getElementById("passive").innerHTML = "passive: " + passive;
  document.getElementById("description").innerHTML = "description: " + answer.plaintext;
  document.getElementById("cost").innerHTML = "cost: " + answer.gold.total;

  console.log(answer);
};

setup();