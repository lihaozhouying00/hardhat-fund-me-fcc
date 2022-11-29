var networkConfig = {
    5: {
        name: "goerli",
        ethUsdPriceFeed: "0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e",
    },
    137: {
        name: "poligon",
        ethUsdPriceFeed: "0xF9680D99D6C9589e2a93a78A04A279e509205945",
    },
}

console.log(networkConfig[5])
//效果一样，并不是一开始理解的，如同其他语言的[0]为第一个元素
console.log(networkConfig["5"])
