const express = require("express");
const app = express();
const port = 8000;
 
const { faker } = require('@faker-js/faker');

// we can create a function to return a random / fake "Product"
const createProduct = () => {
    const newFake = {
        name: faker.commerce.productName(),
        price: "$" + faker.commerce.price(),
        department: faker.commerce.department()
    };
    return newFake;
};
    
const newFakeProduct = createProduct();
console.log(newFakeProduct);

const createUser = () =>{
    const newUser ={
        userId: faker.string.uuid(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
    }
    return newUser;
}
const user = createUser();
const createCompany = () =>{
    newCompany ={
        companyId: faker.string.uuid(),
        companyName: faker.company.name(),
        companyAddress: faker.location.country(),
        companyCiry: faker.location.city(),
        companyState: faker.location.state(),
        companyStreet: faker.location.street(),
        companyZipCode: faker.location.zipCode()

    }
    return newCompany;
}


const company = createCompany();

app.get("/api/users/new", (req, res) => {
    res.json({ user})
});

app.get("/api/companies/new", (req, res) => {
    res.json({ company });
});


app.get("/api/user/company", (req, res) => {
        res.json({ user , company });
        
});   
app.get("/api", (req, res) => {
    res.json({ message: "hello" });
});     
app.listen( port, () => console.log(`Listening on port: ${port}`) );