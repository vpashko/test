import { addPair } from "./handlers/addPair.js";
import { sortByKey } from "./handlers/sortByKey.js";
import { sortByValue } from "./handlers/sortByValue.js";
import { toggleSelect } from "./handlers/toggleSelect.js";
import { deleteSelected } from "./handlers/deleteSelected.js";
import { showXML } from "./handlers/showXML.js";
import { copyXML } from "./handlers/copyXML.js";
import { hideXML } from "./handlers/hideXML.js";

document.getElementById('addPairButton').addEventListener('click', addPair);

document.getElementById('sortByKeyButton').addEventListener('click', sortByKey);

document.getElementById('sortByValueButton').addEventListener('click', sortByValue);

document.getElementById('pairList').addEventListener('click', toggleSelect);

document.getElementById('deleteSelectedButton').addEventListener('click', deleteSelected);

document.getElementById('showXMLButton').addEventListener('click', showXML);

document.getElementById('copyXMLButton').addEventListener('click', copyXML);

document.getElementById('hideXMLButton').addEventListener('click', hideXML);

