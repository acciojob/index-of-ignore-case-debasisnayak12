function indexOfIgnoreCase(s1, s2) {
  // write your code here
	if(s1.length === 0 || s2.length === 0){
		return -1;
	}
	let s1lower = s1.toLowerCase();
	let s2lower = s2.toLowerCase();

	let index = s1lower.indexOf(s2lower)
	return index;
	  
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
