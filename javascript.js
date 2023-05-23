import { doFunction } from './counter.js'
import { myFunction } from './counter.js'
import { searchItem } from './counter.js'
import { revealItem } from './counter.js'
import { setup } from './counter.js'
  window.revealItem = revealItem
  window.myFunction = myFunction
  window.doFunction = doFunction
  window.searchItem = searchItem

setup();
