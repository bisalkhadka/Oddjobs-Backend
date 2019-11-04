const assert = require('assert');
const { Given, When, Then } = require('cucumber');

function isItMonday(today){
    return 'Nope';
}

Given('today is Tuesday', function () {
    // Write code here that turns the phrase above into concrete actions
    this.today = 'Tuesday';
  });

  When('I ask whether it\'s Monday yet', function () {
    // Write code here that turns the phrase above into concrete actions
    this.actualAnswer = isItMonday(this.today);
  });

  Then('I should be told {string}', function (string) {
    // Write code here that turns the phrase above into concrete actions
    assert.equal(this.actualAnswer, string);
  });






