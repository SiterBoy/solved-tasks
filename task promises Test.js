let a = new Promise((resolve,reject) => {
  setTimeout(() => {
    resolve(fetch('https://jsonplaceholder.typicode.com/users'))
  }, 5000)
  
}).then(result => result.json())
.then(data => data)

let b = new Promise ((resolve, reject) => 
  resolve (fetch('https://jsonplaceholder.typicode.com/todos/1'))
).then(result => result.json())
.then(data => data)


Promise.all([a,b]).then(data => console.log(data))
