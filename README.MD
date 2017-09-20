# GraphQL Playground

## Summary
This is a playground project to check how powerful GraphQL is.

[Restcountries](https://restcountries.eu/) is used as a datasource.

## Prerequisites

The following npm global packets have to be installed:
* node
* typescript
* tslint
* concurrently
* nodemon

## Running

1. Install all needed node modules (`npm install`)
2. Run (`npm start`)
3. Open <http://localhost:8080/graphql> in browser
## Usage
GraphiQL (Web Interface) will provide autocompletion. Current schema:
`{
   country(name: string) {
     name
     capital
     region
     timezones
     currencies {
       name
       code
       symbol
     }
     languages
     regionalBlocs {
       name
       acronym
     }
     neighbors {
       ...
     }
   }
 }`
 
`neighbors` property has the same schema as country, therefore the same properties can be queried.
 
 ### Sample query
`query {
   country(name: "poland") {
     name
     capital
     regionalBlocs {
       name
     }
     neighbors {
       name
       currencies {
         code
       }
       regionalBlocs {
         name
       }
       neighbors {
         regionalBlocs {
           name
         }
       }
     }
   }
 }`
 
 `neighbors` can be queried recursively, but have in mind that behind GraphQL there is a rest service which is queried each time country information is needed. Therefore it is not recommended to use to high level of recursion.