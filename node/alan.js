let yaricap = process.argv.slice(2)

// yaricapile alan hesaplayan fonksiyon tanimlandi
function alanHesapla(yaricap) {
    let alan = 3.14 * yaricap * yaricap
    console.log('yaricapi ' + yaricap + ' olan dairenin alani: ' + alan)
}

console.log(yaricap)

// fonksiyon cagrilarak parametre olarak disardan alinan deger tanimlandi
alanHesapla(yaricap)