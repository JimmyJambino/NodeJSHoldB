// why don't we like for loops in Javascript
// overky verbose
// error prone
// not functional

const smartPhones = [
    {brand: "Samsung", price: 4500},
    {brand: "iPhone", price: 7200},
    {brand: "Sony Experia", price: 3800}
];

const discountedPhones = smartPhones.map(phone => {
    const discountPhone = {...phone};
    discountPhone.price -= 500;
    return discountPhone;
});

const dd = smartPhones.map(phone => {
    phone.price -= 500;
    return phone;
})

console.log(smartPhones)
console.log(dd)   

const filterPhone = smartPhones.filter(phone => phone.price < 4000)
console.log(filterPhone)

