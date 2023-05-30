import { submit } from './counter.js'
import { Search } from './counter.js'
import { searchItem } from './counter.js'
import { revealItem } from './counter.js'
import { setup } from './counter.js'
  window.revealItem = revealItem
  window.Search = Search
  window.submit = submit
  window.searchItem = searchItem

setup();
