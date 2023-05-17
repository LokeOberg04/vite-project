import { doFunction } from './counter.js'
import { myFunction } from './counter.js'
import { searchItem } from './counter.js'
  window.myFunction = myFunction
  window.doFunction = doFunction
  window.searchItem = searchItem

const createList = (items) => {
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
    a.style.backgroundSize = "50px";
    li.classList.add("active");
    list.appendChild(li);
    li.appendChild(a);
  }
}
};



const setup = async () => {
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
      myFunction();
      for(let i = 0; i<document.getElementById("myUL").children.length; i++) {
        if(document.getElementById("myInput").value != purchasableitems[i].name) {
          searchItem(document.getElementById("myUL").querySelector(".active").innerText)
        }
      }
      doFunction();
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

  console.log(answer);
};

setup();
