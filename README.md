# milkShopApp: A small application for an online milk store

## Tech Stack and Getting Started

1. Backend: .NET webAPI + C# + Sqlite + Entity Framework

- cd backend/milkShop.Api
- dotnet restore
- dotnet run to run the app locally at <http://localhost:5072/>
  
2. Frontend: Vite + TypeScript

- cd client
- npm i  
- npm run dev to run at <http://localhost:5173/>

## Requirments done

- all products that are in storage on landing page
- a search bar where they can search based on name
- a filter function that can filter out different types of milk; whole milk, oat milk, pea milk, almond milk, rice milk, coconut milk, soy milk, walnut milk, macadamia milk, hemp milk, cashew milk
- pagination

## To be done

The customer should be able to click on a card and be redirected to the product and following info to be displayed:

- a slider, or an number input, to choose how much liter they want to order
- an order button: when clicked it should be clear that the order is done and the storage should be updated
- make the app responsive: desktop, mobile, ipad

## Nice to have

- a cart: maybe the customer wants many different types of products.
- a checkout page could be useful!
- app deployment
- tests (I used Swagger to test the functionality of the server)
