# Yellow Pages

This is a "Yellow Pages" web application.

## Search
The search feature consists of a form with a single input field that allows searching for people by their name, age, phone number, or any combination thereof.  
Search is only a single input field, the application parses the input entered by its users.  
John 33 should return all the people who are called John and are 33 years old, while 099373927 Smith should attempt to find a person with the supplied phone number whose name contains "Smith".  
Should the search yield no results, the app presents the message: No results, please review your search or try a different one

If the search did yield results, they are presented to the user. Each result shown must include the following:

* Name
* Age
* Phone
* Address
* Portrait picture (png)

# Local Development Setup

###### For local development please be sure  to have ports 3000 and 3001 available

## Prerequisites
- Node.js (20x or later)
- nvm (0.39x or later)
- npm (10x or later)

## Setup

1. Clone repo from GitHub at https://github.com/flavio-rocha/yellow-pages
2. Navigate to *yellow-pages* directory
3. Run *npm i* command (this will install package concurrently)
   3.1 Run (or trigger) script *npm run install:all*
4. In browser navigate to http://localhost:3001/

That's all !!!
