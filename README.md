# FJORDS by LibraFX
## End User Feedback Management System


##Description
----
Modal/Overlay system designed to allow users to quickly take in a high level overview of a product, access reviews of other users, and offer personalized feedback. Created using React, Express, Node, Styled Components, and Material UI. Compiled using Webpack and Babel following the AirBnB style preset for ESLint. Has not yet been optimized for scalability but has passed all preliminary tests for interacting with massive stores of instanced data using Mongoose.


## Related Projects

  - https://github.com/LibraFX/size-carousel
  - https://github.com/LibraFX/related-items
  - https://github.com/Bjorklundsamm/FjordsProject

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

- Fork repo and pull latest version to local machine or hosted instance.
- Navigate to the root directory of the repo.
- Run the following commands **BEFORE** initializing produce _(Administrative or Super-user rights may be required)_
```sh
npm install
npm run db:setup
```
- Now run the following commands to initialize your instance(currently configured to localhost:3003):
```sh
npm start
npm run watch
```
On successfull start expect message: `Service running on PORT#`
On failure please inspect the message beginning at line: `UNABLE TO START:`

## Requirements

- Node v6.13.0+ 
- Mongo DB v4.1+
- NVM / NPM

## Development

### Schema
```json
  Product
    {
      product_id: INT
      product_url: VARCHAR
      product_reviews: [collection]
    }
  Reviews
    {
      review_id: INT
      author: TEXT
      email: VARCHAR
      review_header: TEXT
      review_body: TEXT
      review_properties: [collection]
      createdAt: DATE
     }
  Review Properties
     {
       rating: FLOAT
       recommended: BOOLEAN
       size: TEXT
       fit: TEXT
       usage: {collection}
     }
      
```

### API Requests

-GET `/api/product:id/reviews`

**Success Status Code:** `200`

**Returns:** Expect JSON with the following keys.
```json
  {
    product_id: INT
    reviews: [collection]
  }
```

-POST `api/product:id/reviews`






