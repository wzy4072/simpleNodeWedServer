
// 1 初探 async 

async function HiAsync() {
    return "hi";
}

async function HelloAsync() {
    return Promise.resolve('hello')
}

console.log(HiAsync)
console.log(HiAsync())
console.log(HelloAsync)
console.log(HelloAsync())