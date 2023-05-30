export function searchItem(name) {
  window. scrollTo(0, 0);
  document.getElementById("myInput").value = name;
  submit();
}

export function revealItem() {
  return document.getElementById("name").innerHTML;
}

export function submit() {
  document.getElementById("main").classList.remove('flex');
    let guess = document.getElementsByTagName("input")[0].value;
    document.getElementById("myInput").value = "";
    Search();
let guesses = 0;
if (document.getElementById("printGuesses").innerHTML.length > 24) {
 guesses = (parseInt(document.getElementById("printGuesses").innerHTML.charAt((document.getElementById("printGuesses").innerHTML.indexOf("made")+6)))) + 10*(parseInt(document.getElementById("printGuesses").innerHTML.charAt((document.getElementById("printGuesses").innerHTML.indexOf("made")+5))))
} else {
  guesses = document.getElementById("printGuesses").innerHTML.charAt((document.getElementById("printGuesses").innerHTML.indexOf("made")+5))
}
       if (document.getElementById("printGuesses").innerHTML == "") {
         guesses = 1;
      document.getElementById("printGuesses").innerHTML = "You have made " + guesses + " guess.";
    } else {
      guesses++;
      document.getElementById("printGuesses").innerHTML = "You have made " + guesses + " guesses.";
    }
    let hints = document.getElementById("hints");
    let hint = document.createElement("p");
    let img = document.createElement("img");
hints.append(hint);
if (guesses == 1) {
hint.innerText += document.getElementById("cost").innerHTML;
} else if (guesses == 2) {
  hint.innerText += document.getElementById("tags").innerHTML;
} else if (guesses == 3) {
  hint.innerText += document.getElementById("description").innerHTML;
} else if (guesses == 4) {
  hint.innerText += document.getElementById("passive").innerHTML;
} else if (guesses == 5) {
  hint.innerText += "The first letter is " + "'" + document.getElementById("name").innerHTML.charAt(0) + "'";
} else if (guesses == 6) {
  img.src = 'https://ddragon.leagueoflegends.com/cdn/13.9.1/img/item/' + document.getElementById("image").innerHTML;
  img.style.size = "50px";
  img.id = "imgHint"
  img.style.filter = "blur(20Px)";
  hint.appendChild(img);
} else if (guesses > 6) {
  document.getElementById("imgHint").style.filter = "blur(" + (guesses*(-5)+50) + "Px)";
}
      
    console.log("Your guess: " + guess);
    console.log("guesses = " + guesses)
    if (guess.toLowerCase() === (document.getElementById("name").innerHTML).toLowerCase()) {
        //alert("You won!\nThe item was: " + document.getElementById("name").innerHTML + "\nYou did it in " + guesses + " guesses.");
        document.getElementById("wintitle").innerHTML = "You won!";
        document.getElementById("wintext").innerHTML = "The item was " + document.getElementById("name").innerHTML + "\nYou did it in " + guesses + " guesses.";
        document.getElementById("main").classList.add('flex');

        while (hints.firstChild) {
          hints.removeChild(hints.lastChild);
        }
document.getElementById("printGuesses").innerHTML = "";
guesses = 0;
setup();
    }
}

export function Search() {
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
    if (txtValue.toUpperCase().indexOf(filter) == 0) {
      li[i].style.display = "";
      li[i].classList.add("active");
    } else {
      li[i].style.display = "none";
      li[i].classList.remove("active");
    }
  }
}
export const createList = (items) => {
  if (document.getElementById("myUL").innerHTML.trim() == "") {
  let list = document.getElementById("myUL");
  for (const [key, value] of Object.entries(items)) {
    let li = document.createElement("li");
    let a = document.createElement("a");
    
    a.innerText = value.name;
    a.setAttribute(
      "onclick",
      'searchItem("' + value.name + '");'
    );
    a.style.background = "url('https://ddragon.leagueoflegends.com/cdn/13.9.1/img/item/" + value.image.full + "')no-repeat right top"
    a.style.backgroundSize = "52px";
    li.classList.add("active");
    list.appendChild(li);
    li.appendChild(a);
  }
}
};



export const setup = async () => {
  const res = await fetch("https://ddragon.leagueoflegends.com/cdn/13.9.1/data/en_US/item.json");
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
if (document.getElementById("myInput").classList.contains("active")) {
} else {
  document.getElementById("myInput").classList.add("active");
  document.getElementById("myInput").addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      Search();
      for(let i = 0; i<document.getElementById("myUL").children.length; i++) {
        if(document.getElementById("myInput").value != purchasableitems[i].name) {
          document.getElementById("myInput").value = (document.getElementById("myUL").querySelector(".active").innerText)
        }
      }
      submit();
    }
  });
}
  
  
  
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
  document.getElementById("image").innerHTML = answer.image.full;
  
};