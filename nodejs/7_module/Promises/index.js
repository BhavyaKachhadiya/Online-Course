let myPromises = new Promise((resolve, reject) =>{
    const a =4;
    const b = 4;

    setTimeout(() =>{
        if(a==b)
        {
            resolve("Value are equal");
        }
        else
        {
            reject("Value are not equal");
        }
    });
})

myPromises.then((message) =>{
    console.log(message);
}).catch((err) =>{
    console.log(err);
});