import { myFunction } from './counter.js'
import { doFunction } from './counter.js'
import { searchItem } from './counter.js'
  import items from './itemslist.json'
  window.myFunction = myFunction
  window.doFunction = doFunction
  window.searchItem = searchItem
  
  
//let boots = items.data.filter(item => item.tags.indexOf('boots') > 0);
let purchasableitems = [];
for (const [key, value] of Object.entries(items.data)) {
    //console.log(`${key}: ${value.name}`);
    console.log(value)
    if (value.gold.purchasable == 1) {
        purchasableitems.push(value);
    }
}
console.log(purchasableitems)
  
  let olditems = {
      mythics: {
          int: [0,1,2,3,4,5,6],
          name: ["Goredrinker","Duskblade","Liandrys","Prowlers","Jak'Sho","Heartsteel","Evenshroud"],
          cost: [3300,3100,3200,3100,3200,],
          ad: [1,1,0,1,0,0,0],
          ap: [0,0,1,0,0,0,0],
          hp: [1,0,0,0,1,1,1],
          ah: [1,1,1,1,1,1,1],
          armor: [0,0,0,0,1,0,1],
          mr: [0,0,0,0,1,0,1],
      }
  };
  let list = document.getElementById("myUL");
  let searchnum = 0;
  for (const [key, value] of Object.entries(purchasableitems)) {

      let li = document.createElement("li");
      let a = document.createElement("a");
      
      a.innerText = value.name;
      a.setAttribute('onclick','searchItem("' + value.name + '",' + 0 + ',' + searchnum + ');')
      list.appendChild(li);
      li.appendChild(a);
    }
  
  
  
  
  let guesses = 0;
  let guessnum = 0;
  let guess = "";
  let itemnum = Math.round(Math.random() * 192);
  let answer = purchasableitems[itemnum];
  
  console.log(answer)
  
  document.getElementById("answertags").innerText = answer.tags
  document.getElementById("answergold").innerText = answer.gold.total
  document.getElementById("answertext").innerText = answer.name