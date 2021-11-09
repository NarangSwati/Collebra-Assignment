### Setup for Tests 

## Prerequisite

* Nodejs installed (https://nodejs.org/en/download/), version 16.13.0 and above

* yarn installed (https://yarnpkg.com/lang/en/docs/install/)


* git clone this repo to your local

## Setup

* Install dependencies

```
  yarn install
```

* Test config file

```
  testconfigs/config.json 
```

## Run to test your setup and config

This will run the LoginLogout script as dry run
```
$ yarn run dry
```

### Common error after dry run:

* Webapp low on resources resulting in high response time & test failing to find elements 

## Running Tests for a specific scenario
```
$ yarn run Login&Logout 
$ yarn run registernewuser 
$ yarn run add2cart 
```
## Allure Report
* Report is generated on the completion of test
  
## Tagging specs
  
* tags via feature file scenario 