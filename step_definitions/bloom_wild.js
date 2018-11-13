const {Given, Then, When} = require('cucumber');
const {client} = require('nightwatch-cucumber');
var url = "https://www.bloomandwild.com";

//selectors

const elements = {
  'occassions': 'div.bw-nav__bottom > ul > li:nth-child(3) > span > a',
  'birthday': 'div.bw-nav__bottom.ng-tns-c1-0.ng-star-inserted > ul > li:nth-child(3) > span > div > ul > li:nth-child(1) > span > a',
  'more_info': 'ngx-siema > div > div > div:nth-child(1) .d-inline-flex.align-items-center.justify-content-around > a',
  'send_bouquet': 'div.content__cta.bwRhythmTop.bwRhythm.text-center > button',
  'send': 'div > div > div:nth-child(1) .d-inline-flex.align-items-center.justify-content-around > .bwButton.primary.pointer',
  'product_order_form': 'div.product-order-form.bwRhythmContainer.ng-star-inserted',
  'change_product': 'div.order-progress__price > button',
  
};




Given(/^I am on the bloom and wild homepage$/, () => {
    return client
        .url(url)
        .pause(1000)
         }); 

When(/^I click on Occasions$/, () => {
    return client
        .click(elements.occassions)
        .pause(2000)
         }); 

Then(/^I select Birthday$/, () => {
    return client
    	.moveToElement(elements.birthday, 10, 10)
        .click(elements.birthday)
        .pause(3000)
         }); 

Then(/^I should be taken to the Birthday flowers listings$/, () => {
    return client
        .assert.urlContains('/send-flowers/tagonly/occasions-birthday')
         }); 

When(/^I click on More Info$/, () => {
    return client
        .click(elements.more_info)
        .pause(2000)
         }); 

Then(/^the product information is displayed$/, () => {
    return client
        .waitForElementVisible(elements.send_bouquet , 2000 , (function(result){
        	if (result.value === true){
        		console.log("****Product information successfully displayed****")
        	}

        	})

        	)
        
        }); 

Then(/^I click SEND on my chosen product$/, () => {
    return client
        .click(elements.send) 
        .pause(2000)
         }); 

Then(/^I am taken to the product order form$/, () => {
    return client
        client.expect.element(elements.product_order_form).to.be.present
        .pause(2000)
         }); 

When(/^I click to change the product I want$/, () => {
    return client
        .click(elements.change_product)
        .pause(2000)
         }); 

Then(/^the product order form is no longer displayed$/, () => {
    return client
      
      	client.expect.element(elements.product_order_form).to.not.be.present
        

        });
	

    





 

       


   



