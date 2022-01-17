

// Get XMLHttpRequest

// let a = 200;

// let xmlhttp = new XMLHttpRequest();

// xmlhttp.onreadystatechange = function(){
//   if(this.readyState == 4 && this.status == 200){
//     a = this.response;
//     console.log(a);
//   }
// }

// xmlhttp.open('GET', 'http://getpost.itgid.info/index2.php?auth=7859d9d42a8834141d529577207c9596&action=2&name=Anton', false)
// xmlhttp.send();


//Get Fetch

// fetch('http://getpost.itgid.info/index2.php?auth=7859d9d42a8834141d529577207c9596&action=2&name=Anton')
// .then(response => response.text())
// .then(result => console.log(result))

//POST Fetch

fetch('http://getpost.itgid.info/index2.php?auth=7859d9d42a8834141d529577207c9596&action=2&name=Anton', {
  method:'POST',
  headers:{
    'Content-Type':'application/x-www-form-urlencoded'
  },
  body:'auth=7859d9d42a8834141d529577207c9596&action=2&name=Anton'
})
.then(response => response.text())
.then(text => console.log(text))
 