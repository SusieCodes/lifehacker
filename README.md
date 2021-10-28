# Life Hacker

![Project Image](https://github.com/SusieCodes/lifehacker/blob/main/src/images/LifeHackerdashboard.png)

> Everything you need to keep up with your friends in a Nutshell!

---

### Table of Contents

- [Description](#description)
- [Technologies](#technologies)
- [How To Use](#how-to-use)
- [License](#license)
- [Author Info](#author-info)

---

## Description

Life Hacker is a React App built for users to plan their activities, post journal entries, make a grocery list, create digital sticky notes as reminders, post journal entries, and it centers around a robust contact list that lets you keep track of important information about the people y ou care about so you never forget significant dates and information. I used different shades of blue so the user will feel calm, trusting, and serene while using this web-based app.

---

#### Technologies

- React.js
- CSS
- dbdiagram
- Figma
- Canva
- Git/Github
- Postman

---

## How To Use

### Installations

Run commands inside of LifeHacker Directory.

```
npm install npm@latest -g
```

```
npm install
```

```
npm install react-icons --save
```

```
npm install @mui/material @emotion/react @emotion/styled
```

---

### Starting the webpage

1. Clone the repo

   ```
   git clone git@github.com:SusieCodes/lifehacker.git
   ```

2. Run this command inside of the Life Hacker API directory

   ```
   json-server -p 8088 -w database.json
   ```

   ```
   npm start
   ```

---

### Local API using JSON server

Create database.json file inside of the src directory and paste the following JSON.

```JSON
{
  "users": [
    {
      "name": "Taylor",
      "email": "user@email.com",
      "image": "default.png",
      "id": 1
    }
  ],
  "connections": [
    {
      "userId": 1,
      "name": "Helen Stanley",
      "image": "helen.svg",
      "email": "helen@myob.com",
      "phone": "604-555-1212",
      "address": "123 Whalley Blvd",
      "city": "Surrey",
      "stateProvince": "BC",
      "zipCode": "V3C 4X4",
      "country": "Canada",
      "work": "The Mission",
      "relationship": "Sister",
      "bday": "1976-12-01",
      "family": "Spouse: Jack, Daughter: Olivia",
      "pets": "Dog: Jada - bday Oct 1",
      "howWeMet": "When she was born",
      "giftIdeas": "Gloves, nutribullet",
      "faveDrink": "White wine - Moscato",
      "faveDessert": "Tiramisu",
      "notes": "She is looking for a customer service rep job working remote - keep an eye out for openings",
      "zodiac": "Sagittarius",
      "personality": "INFP",
      "enneagram": "6",
      "timestamp": 1635090847411,
      "id":
    },
    {
      "userId": 1,
      "name": "Ruth Jones",
      "image": "default.png",
      "email": "ruth@myob.com",
      "phone": "604-555-1212",
      "address": "123 Columbia Valley Rd",
      "city": "New York City",
      "stateProvince": "NY",
      "zipCode": "10001",
      "country": "USA",
      "work": "Engineer",
      "relationship": "Friend",
      "bday": "1954-01-05",
      "family": "Spouse: Jim",
      "pets": "Dog: Jupiter - bday is June 21",
      "howWeMet": "Neighbors in NYC",
      "giftIdeas": "Games, books",
      "faveDrink": "Red wine - Shiraz",
      "faveDessert": "Cookies",
      "notes": "Doesn't like eating in restaurants",
      "zodiac": "Capricorn",
      "personality": "INFP",
      "enneagram": "5",
      "timestamp": 1635090847411,
      "id": 2
    },
    {
      "userId": 1,
      "name": "Nyla Smith",
      "image": "default.png",
      "email": "nyla@myob.com",
      "phone": "778-555-1212",
      "address": "123 Liberty Ave",
      "city": "Vancouver",
      "stateProvince": "BC",
      "zipCode": "V3C 4X3",
      "country": "Canada",
      "work": "Domestic Goddess",
      "relationship": "Friend",
      "bday": "1979-07-29",
      "family": "Spouse: Mike, Daughters: Emma & Sammy",
      "pets": "Dog: Ollie - bday Nov 1",
      "howWeMet": "Through Lisa",
      "giftIdeas": "Candles, sewing supplies",
      "faveDrink": "Red wine - Shiraz",
      "faveDessert": "Brownies",
      "notes": "Started new job in November",
      "zodiac": "Cancer",
      "personality": "INFP",
      "enneagram": "1",
      "timestamp": 1635090847411,
      "id": 3
    },
    {
      "userId": 1,
      "name": "Nancy Matthews",
      "image": "default.png",
      "email": "nancy@myob.com",
      "phone": "604-555-1212",
      "address": "123 General Rd",
      "city": "Nashville",
      "stateProvince": "TN",
      "zipCode": "37064",
      "country": "USA",
      "work": "Healer",
      "relationship": "Friend",
      "bday": "1981-04-05",
      "family": "Spouse: Mason",
      "pets": "Dog: Twigge - bday is June 15",
      "howWeMet": "Neighbors in LV",
      "giftIdeas": "Incense, crystals",
      "faveDrink": "Apple juice",
      "faveDessert": "Cheesecake",
      "notes": "Makes awesome perogies",
      "zodiac": "Scorpio",
      "personality": "INFP",
      "enneagram": "4",
      "timestamp": 1635090847411,
      "id": 4
    },
    {
      "userId": 1,
      "name": "Jennifer Smith",
      "image": "default.png",
      "email": "jenn@myob.com",
      "phone": "615-555-1212",
      "address": "123 Whalley Blvd",
      "city": "Surrey",
      "stateProvince": "BC",
      "zipCode": "T37 4M1",
      "country": "Canada",
      "work": "The Urban Chef",
      "relationship": "Co-Worker",
      "bday": "1989-01-01",
      "family": "Spouse: Jack",
      "pets": "Dog: Buddy - bday Oct 31",
      "howWeMet": "At work at Costco",
      "giftIdeas": "Kitchenware, chocolate",
      "faveDrink": "Iced Tea",
      "faveDessert": "Bananas Foster",
      "notes": "Likes deluxe nuts before dinner",
      "zodiac": "Virgo",
      "personality": "INFP",
      "enneagram": "5",
      "timestamp": 1635090847411,
      "id": 5
    },
    {
      "userId": 1,
      "name": "Aunty Becky",
      "image": "default.png",
      "email": "becky@myob.com",
      "phone": "615-555-1212",
      "address": "123 Old Town Ave",
      "city": "Vancouver",
      "stateProvince": "BC",
      "zipCode": "V3C 2X4",
      "country": "Canada",
      "work": "Domestic Engineer",
      "relationship": "Friend",
      "bday": "1976-10-17",
      "family": "Spouse: Tim, Daughters: Kylie & Lyla",
      "pets": "Dog: Odie - bday Jan 5",
      "howWeMet": "Book Club",
      "giftIdeas": "Candles, craft supplies",
      "faveDrink": "Chocolate milk",
      "faveDessert": "Chocolate cupcakes",
      "notes": "Likes to bring snacks",
      "zodiac": "Libra",
      "personality": "INFP",
      "enneagram": "8",
      "timestamp": 1635090847411,
      "id": 6
    },
    {
      "userId": 1,
      "name": "Diana Spencer",
      "image": "default.png",
      "email": "diana@myob.com",
      "phone": "818-555-1212",
      "address": "123 Mayberry Rd",
      "city": "New York City",
      "stateProvince": "NY",
      "zipCode": "10001",
      "country": "USA",
      "work": "Architect",
      "relationship": "Friend",
      "bday": "1994-01-28",
      "family": "Spouse: Mark",
      "pets": "Dog: Chaos - bday is March 21",
      "howWeMet": "Neighbors in CA",
      "giftIdeas": "Games, books",
      "faveDrink": "Apple juice",
      "faveDessert": "Cookies",
      "notes": "Allergic to seafood",
      "zodiac": "Capricorn",
      "personality": "ENSP",
      "enneagram": "5",
      "timestamp": 1635090847411,
      "id": 7
    },
    {
      "userId": 1,
      "name": "Mary Johnson",
      "image": "default.png",
      "email": "mary@myob.com",
      "phone": "405-555-1212",
      "address": "123 George Blvd",
      "city": "Burnaby",
      "stateProvince": "BC",
      "zipCode": "V3C 4X4",
      "country": "Canada",
      "work": "Manager at Home Depot",
      "relationship": "Friend",
      "bday": "1988-06-01",
      "family": "Spouse: Jason, Son: Jack",
      "pets": "Dog: Bubba - bday Feb 31",
      "howWeMet": "Volunteering at the shelter",
      "giftIdeas": "Puzzles, art supplies",
      "faveDrink": "White wine - Pinot Grigio",
      "faveDessert": "Baked Alaska",
      "notes": "Doesnt like to drive at night",
      "zodiac": "Sagittarius",
      "personality": "ENFP",
      "enneagram": "2",
      "timestamp": 1635090847411,
      "id": 8
    },
    {
      "userId": 1,
      "name": "Priscilla Jenkins",
      "image": "default.png",
      "email": "priscilla@myob.com",
      "phone": "480-555-1212",
      "address": "123 Liverpool Ave",
      "city": "Port Coquitlam",
      "stateProvince": "BC",
      "zipCode": "37067",
      "country": "Canada",
      "work": "Domestic Goddess",
      "relationship": "Friend",
      "bday": "1993-07-31",
      "family": "Spouse: Mike, Daughters: Sophie & Lucy",
      "pets": "Dog: Ollie - bday Oct 31",
      "howWeMet": " School",
      "giftIdeas": "Sewing supplies",
      "faveDrink": "Red wine - Shiraz",
      "faveDessert": "Brownies",
      "notes": "Gluten Free",
      "zodiac": "Cancer",
      "personality": "INTP",
      "enneagram": "3",
      "timestamp": 1635090847411,
      "id": 9
    },
    {
      "userId": 1,
      "name": "Wendy Morris",
      "image": "default.png",
      "email": "wendy@myob.com",
      "phone": "615-555-1212",
      "address": "123 Holiday Rd",
      "city": "Lewisville",
      "stateProvince": "UT",
      "zipCode": "77094",
      "country": "USA",
      "work": "Production Manager",
      "relationship": "Cousin",
      "bday": "1954-11-05",
      "family": "Daughter: Mackenzie",
      "pets": "Dog: Lucy - bday is Aug 15",
      "howWeMet": "Neighbors in CA",
      "giftIdeas": "Gardening supplies",
      "faveDrink": "Orange juice",
      "faveDessert": "Cheesecake",
      "notes": "Diabetic - no sugar, has a great garden",
      "zodiac": "Aries",
      "personality": "INFP",
      "enneagram": "7",
      "timestamp": 1635090847411,
      "id": 10
    },
    {
      "userId": 1,
      "name": "Lisa Jackson",
      "image": "default.png",
      "email": "lisa@myob.com",
      "phone": "818-555-1212",
      "address": "123 Old Town Ave",
      "city": "San Francisco",
      "stateProvince": "CA",
      "zipCode": "90210",
      "country": "USA",
      "work": "Software Engineer",
      "relationship": "Friend",
      "bday": "1986-08-02",
      "family": "Spouse: Derek, Kids: Simon & Megan",
      "pets": "Dog: Mitzy - bday April 5",
      "howWeMet": "School",
      "giftIdeas": "Vintage records",
      "faveDrink": "Diet Coke",
      "faveDessert": "Chocolate cupcakes",
      "notes": "Collects spoons from travel",
      "zodiac": "Taurus",
      "personality": "INFP",
      "enneagram": "5",
      "timestamp": 1635090847411,
      "id": 11
    }
  ],
  "activities": [
    {
      "name": "Drs Appointment",
      "date": "2021-11-05",
      "address": "123 Maple St",
      "city": "Nashville, TN",
      "zipcode": "37029",
      "notes": "Bring test results",
      "userId": 1,
      "id": 1
    },
    {
      "name": "Book Club",
      "date": "2021-12-05",
      "address": "123 Jackson St",
      "city": "Nashville, TN",
      "zipcode": "37064",
      "notes": "She will be arriving on Sunday",
      "userId": 1,
      "id": 2
    },
    {
      "name": "Volunteer At Mission",
      "date": "2021-09-25",
      "address": "639 Lafayette St",
      "city": "Nashville, TN",
      "zipcode": "37203",
      "notes": "Wear comfy shoes",
      "userId": 1,
      "id": 3
    },
    {
      "name": "Franks Birthday",
      "date": "2021-09-03",
      "address": "123 Dutch Rd",
      "city": "Nashville, TN",
      "zipcode": "37064",
      "notes": "Post on FB",
      "userId": 1,
      "id": 4
    },
    {
      "name": "Grandma's Birthday",
      "date": "2021-09-08",
      "address": "123 Oak St",
      "city": "Nashville, TN",
      "zipcode": "37064",
      "notes": "Bring gift and snacks",
      "userId": 1,
      "id": 5
    },
    {
      "name": "Hiking With Friends",
      "date": "2021-11-15",
      "address": "Falls Creek Falls",
      "city": "Nashville, TN",
      "zipcode": "37064",
      "notes": "Pack light",
      "userId": 1,
      "id": 6
    },
    {
      "name": "Dinner Downtown with Ashley",
      "date": "2021-11-04",
      "address": "823 Main Street",
      "city": "Franklin, TN",
      "zipcode": "37064",
      "notes": "Bring flowers",
      "userId": 1,
      "id": 7
    },
    {
      "name": "Parent Teacher Night",
      "date": "2021-11-04",
      "address": "Central High School",
      "city": "Franklin",
      "zipcode": "37027",
      "notes": "Ask about enrichment",
      "userId": 1,
      "id": 8
    }
  ],
  "todos": [
    {
      "title": "Finish MVP for Capstone",
      "byWhen": "2021-11-01",
      "isCompleted": false,
      "userId": 1,
      "id": 1
    },
    {
      "title": "Update My Resume",
      "byWhen": "2021-11-05",
      "isCompleted": false,
      "userId": 1,
      "id": 2
    },
    {
      "title": "Post Project on LinkedIn",
      "byWhen": "2021-11-10",
      "isCompleted": false,
      "userId": 1,
      "id": 3
    },
    {
      "title": "Drop Donations Off",
      "byWhen": "2021-10-26",
      "isCompleted": false,
      "userId": 1,
      "id": 4
    },
    {
      "title": "Take package to USPS",
      "byWhen": "2021-11-06",
      "isCompleted": false,
      "userId": 1,
      "id": 5
    },
    {
      "title": "Clean out garage",
      "byWhen": "2021-10-29",
      "isCompleted": false,
      "userId": 1,
      "id": 6
    },
    {
      "title": "Do Laundry",
      "byWhen": "2021-11-07",
      "isCompleted": false,
      "userId": 1,
      "id": 7
    },
    {
      "title": "Finish capstone",
      "byWhen": "2021-11-06",
      "isCompleted": false,
      "userId": 1,
      "id": 8
    }
  ],
  "groceries": [
    {
      "text": "taco shells",
      "userId": 1,
      "id": 1
    },
    {
      "text": "guacamole",
      "userId": 1,
      "id": 2
    },
    {
      "text": "shredded cheese",
      "userId": 1,
      "id": 3
    }
    {
      "text": "ground beef",
      "userId": 1,
      "id": 4
    },
    {
      "text": "sour cream",
      "userId": 1,
      "id": 5
    },
    {
      "text": "queso",
      "userId": 1,
      "id": 6
    }
  ],
  "notes": [
    {
      "title": "Pull Trash Can In",
      "text": "neighbors garage code is 1234",
      "dayTime": 1634354755599,
      "userId": 1,
      "id": 1
    },
    {
      "title": "Wifi Password",
      "text": "YahRight1234",
      "dayTime": 1634354755599,
      "userId": 1,
      "id": 2
    },
    {
      "title": "Favorite Pink",
      "text": "Hex Code #EED5D2",
      "dayTime": 1634354755599,
      "userId": 1,
      "id": 3
    },
    {
      "title": "Selected Screenshot",
      "text": "CMD + Shift + 4",
      "dayTime": 1635125849624,
      "userId": 1,
      "id": 4
    }
  ],
  "journals": [
    {
      "title": "Today was pretty cool",
      "post": "My sister helped me come up with a brilliant idea for my capstone and I'm excited to write up my proposal",
      "dayTime": 1634354755599,
      "userId": 1,
      "id": 1
    },
    {
      "title": "Had a great day!",
      "post": "The sun was shining and my pup and I hung out on the back patio and soaked in the sun",
      "dayTime": 1634354755599,
      "userId": 1,
      "id": 2
    },
    {
      "title": "Life Is Good",
      "post": "Super stoked to get working on my project today... the next 2 weeks will be all grind baby!",
      "dayTime": 1634354755599,
      "userId": 1,
      "id": 3
    }
  ]
}
```

![ERD Image](https://github.com/SusieCodes/lifehacker/blob/main/src/images/LifeHackerERD.png)

[Back To The Top](#lifehacker)

---

## License

MIT License

Copyright (c) 2021 Nashville Software School

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

[Back To The Top](#lifehacker)

---

## Created by Susie Stanley

#### If you have any questions about this project, please reach out via Linkedin and I would be more than happy to address any queries or comments

- LinkedIn - [Susie Stanley](https://www.linkedin.com/in/susie-stanley/)
- GitHub - [@SusieCodes](https://github.com/SusieCodes)

[Back To The Top](#lifehacker)

---
