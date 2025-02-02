# Number Classification API

This project is a NestJS-based API that classifies a given number by calculating its mathematical properties and returning a fun fact sourced from the Numbers API ([numbersapi.com](http://numbersapi.com)).

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Running Locally](#running-locally)
- [API Endpoints](#api-endpoints)
- [Deployment on Vercel](#deployment-on-vercel)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Number Classification:** Determines if a number is prime, perfect, Armstrong, and whether it is odd or even.
- **Digit Sum:** Calculates the sum of the digits of the given number.
- **Fun Fact:** Retrieves an interesting mathematical fact from the Numbers API.
- **Input Validation:** Ensures only valid integers are processed.
- **CORS Enabled:** Configured to support cross-origin requests.
- **Serverless Deployment Ready:** Configured for easy deployment on Vercel.

## Technologies

- [NestJS](https://nestjs.com/) – A progressive Node.js framework for building efficient and scalable server-side applications.
- [TypeScript](https://www.typescriptlang.org/) – A strongly typed programming language that builds on JavaScript.
- [Axios / @nestjs/axios](https://docs.nestjs.com/techniques/http-module) – For making HTTP requests to external APIs.
- [Render](https://render.com/) – A platform for deploying serverless applications.
- [class-validator](https://github.com/typestack/class-validator) & [class-transformer](https://github.com/typestack/class-transformer) – For request validation.

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/mannypulator/psychic-octo-palm-tree.git
   cd psychic-octo-palm-tree
   ```
2. **Install Dependencies**
   ```bash
   npm install
   ```
3. **Run Locally**
   ```bash
   npm run start:dev
   ```
4. **Test API**
   `http://localhost:3000/api/classify-number?number=371`

   Success Response:
   ```json

      {
        "number": 371,
        "is_prime": false,
        "is_perfect": false,
        "properties": ["armstrong", "odd"],
        "digit_sum": 11,
        "fun_fact": "371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371"
      }

   ```

   Error Response:
   ```json
      {
        "number": "invalid_value",
        "error": true
      }

   ```
