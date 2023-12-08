const persiapan = () => {
    return new Promise((resolve ,reject)=>{
        setTimeout(function () {
            resolve("persiapan . . .");
        }, 3000);
    });
}

const rebusAir = () => {
    return new Promise((resolve)=>{
        setTimeout(function () {
            resolve("Merebus Air . . .");
        }, 4000);
    });
}

const masak = () => {
    return new Promise((resolve)=>{
        setTimeout(function () {
            resolve("masak mie . . .");
        }, 5000);
    });
}

const main = async () => {
    console.log(await persiapan());
    console.log(await rebusAir());
    console.log(await masak());
};

main();