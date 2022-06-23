# Crypto-tracker

This project utilizes the Coin Gecko API. If you would like to checkout their documentation you may do so [here](https://www.coingecko.com/en/api/documentation). This project was actualized as a learning project and not for profit. Copyright of the data available is of course owned by Coin Gecko.

!Disclaimer! the data in this SPA should NOT be used for financial decisions. Please refer to commercial pages with live updated prices for all financial decisions.

## Deployed app

If you wish to browse the finished web app you may do so [here](https://edwardabboud.github.io/)

### Description

This SPA will allow the user to browse through thousands of cryptocurrencies and their prices. The prices are updated as soon as the user lands on the page. The user is able to see a nav bar and a list of coins. From here we can navigate to the different routes of the page, star some coins, search the page, filter the displayed results, go to the next page of the results, change the theme to light/dark, change the general currency to eur/usd and/or finally click on a coin-row and enter the more details page.

the second page will allow the user to view their starred coins or as it is called here 'Watch List'. The results are shown in the order they were starred in (first is first, last is last). From here the user is also able to navigate the different routes through the navbar or click on the coin for more information. At any point where the user can see a star they are able to add those to their Watch List, which will stay true after the page is refreshed.

The third page also displays the functional navbar with a list of the 7 most trendy coins of the last 24hrs. This will allow users to stay updated with the latest coin trends and learn more by clicking the coins.

Finally we have a converter page where the user is able to convert any of the 30 top coins (by market cap) to any of the highest used currencies around the world. The converter works both ways allowing the user to know how much their coin is worth as well as how much their currency is worth in a selected coin.

All results of this page are fetched as soon as the user has landed or interacted with the page. No data is stored locally to prevent prices from freezing.

## Screenshot

![Screenshot](../screenshots/SS1.png)
![Screenshot](SS2.png)
![Screenshot](https://github.com/EdwardAbboud/react-crypto-tracker/tree/main/public/screenshots/SS3.png "screenshot of app")
![Screenshot](https://github.com/EdwardAbboud/react-crypto-tracker/tree/main/public/screenshots/SS4.png "screenshot of app")
![Screenshot](https://github.com/EdwardAbboud/react-crypto-tracker/tree/main/public/screenshots/SS5.png "screenshot of app")

## Folder Structure

This app was initiated using the 'create-react-app' command and thus will generally follow that structure with a few minor changes such as:

- assets --> containing icons
- components --> mostly contains static and simple components needed for the different views
- contexts --> contexts needed for data distribution
- css --> all styling of components and pages
- data --> static data
- hooks --> custom hooks
- routes --> all the different pages that the router lands on
- utils --> contains page utilities
- views --> compilation of what the user can see and it's functionality

finally App.js will be the main Router
