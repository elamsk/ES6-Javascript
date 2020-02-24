// when u promise a activity we can have a guratance of fullfillment.
// Promise is async with gurtance response .there is no timelinit a

function asyncFunc() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          const result = Math.random();
          result > 0.5 ? resolve(result) : reject('Oppps....I cannot calculate')
        }, 1)
    });
}

for (let i=0; i<10; i++) {
	asyncFunc()
    	.then(result => console.log('Result is: ' + result))
    	.catch(result => console.log('Error: ' + result))
}