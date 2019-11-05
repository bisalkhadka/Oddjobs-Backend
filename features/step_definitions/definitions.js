const { Given, When, Then } = require('cucumber');
const assert = require('assert');
const { driver } = require('../support/web_driver');

Given(/^Browse to web site "([^"]*)"$/, async function(url) {
    await driver.get(url);
});

When(/^user input Email "([^"]*)"$/, async function (Email) {

    await driver.sleep(1000);
    return driver.findElement({ id : "Email"}).sendKeys(Email);
});

When(/^user input Password "([^"]*)"$/, async function (Password) {
await driver.sleep(1000);
return driver.findElement({ id: "Password"}).sendKeys(Password);
});

Then(/^click Login button$/, async function () {

    return driver.findElement({id: "btnlogin"}).click();
});

When(/^user input Firstname "([^"]*)"$/, async function (Firstname) {

    await driver.sleep(1000);
    return driver.findElement({ id: "Firstname" }).sendKeys(Firstname);
});

When(/^user input Username "([^"]*)"$/, async function (Username) {

    await driver.sleep(1000);
    return driver.findElement({ id: "Username" }).sendKeys(Username);
});

When(/^user input Address "([^"]*)"$/, async function (Address) {
    await driver.sleep(1000);
    return driver.findElement({ id: "Address" }).sendKeys(Address);
});

When(/^user input Lastname "([^"]*)"$/, async function (Lastname) {

    await driver.sleep(1000);
    return driver.findElement({ id: "Lastname" }).sendKeys(Lastname);
});

When(/^user input Phone "([^"]*)"$/, async function (Phone) {

    await driver.sleep(1000);
    return driver.findElement({ id: "Phone" }).sendKeys(Phone);
});

When(/^user input Confpassword "([^"]*)"$/, async function (Confpassword) {

    await driver.sleep(1000);
    return driver.findElement({ id: "Confpassword" }).sendKeys(Confpassword);
});

Then(/^click register button$/, async function () {

    return driver.findElement({ id: "register" }).click();
});

When(/^user input Education "([^"]*)"$/, async function (Education) {

    await driver.sleep(1000);
    return driver.findElement({ id: "Education" }).sendKeys(Education);
});

When(/^user input Qualification "([^"]*)"$/, async function (Qualification) {

    await driver.sleep(1000);
    return driver.findElement({ id: "Qualification" }).sendKeys(Qualification);
});

When(/^user input Experience "([^"]*)"$/, async function (Experience) {

    await driver.sleep(1000);
    return driver.findElement({ id: "Experience" }).sendKeys(Experience);
});

Then(/^click Submit button$/, async function () {

    return driver.findElement({ id: "Submit" }).click();
});

When(/^user input Name "([^"]*)"$/, async function (Name) {
    await driver.sleep(1000);
    return driver.findElement({ id: "Name" }).sendKeys(Name);
    
});

When(/^user input Message "([^"]*)"$/, async function (Message) {

    await driver.sleep(1000);
    return driver.findElement({ id: "Message" }).sendKeys(Message);
});

When(/^user input Title "([^"]*)"$/, async function (Title) {

    await driver.sleep(1000);
    return driver.findElement({ id: "Title" }).sendKeys(Title);
});

When(/^user input Description "([^"]*)"$/, async function (Description) {

    await driver.sleep(1000);
    return driver.findElement({ id: "Description" }).sendKeys(Description);
});

When(/^user input Latitude "([^"]*)"$/, async function (Latitude) {

    await driver.sleep(1000);
    return driver.findElement({ id: "Latitude" }).sendKeys(Latitude);
    
});

When(/^user input Category "([^"]*)"$/, async function (Category) {

    await driver.sleep(1000);
    return driver.findElement({ id: "Category" }).sendKeys(Category);
});

When(/^user input Type "([^"]*)"$/, async function (Type) {
    await driver.sleep(1000);
    return driver.findElement({ id: "Type" }).sendKeys(Type);
});

When(/^user input fileToUpload "([^"]*)"$/, async function (filetoUpload) {

    await driver.sleep(1000);
    return driver.findElement({ id: "filetoUpload" }).sendKeys(filetoUpload);
});

When(/^user input Location "([^"]*)"$/, async function (Location) {

    await driver.sleep(1000);
    return driver.findElement({ id: "Location" }).sendKeys(Location);
});

When(/^user input Longitude "([^"]*)"$/, async function (Longitude) {

    await driver.sleep(1000);
    return driver.findElement({ id: "Longitude" }).sendKeys(Longitude);
});

When(/^user input JobDt "([^"]*)"$/, async function (JobDt) {

    await driver.sleep(1000);
    return driver.findElement({ id: "JobDt" }).sendKeys(JobDt);
});









