# Life Hacker

![Project Image](https://github.com/SusieCodes/lifehacker/blob/main/src/images/lifehackerdashboard.png)

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
npm install
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

3. To login, use email address 'taylor@email.com' to see full functionality using dummy data from the database OR register as a new user to create all your own content

---

### Local API using JSON server

Create database.json file inside of the src directory and paste the following JSON.

```JSON
{
  "users": [
    {
      "name": "Taylor",
      "email": "taylor@email.com",
      "image": "https://res.cloudinary.com/dllowdq2w/image/upload/v1635608386/taylor_c9zfvb.png",
      "phone": "425-555-1212",
      "address": "123 Othello Dr",
      "city": "Anytown",
      "stateProvince": "TN",
      "zipCode": "91514",
      "country": "USA",
      "bday": "1986-05-05",
      "timestamp": 1635611882958,
      "id": 1
    }
  ],
  "connections": [
    {
      "id": 1,
      "userId": 1,
      "name": "Helen Stanley",
      "image": "https://res.cloudinary.com/dllowdq2w/image/upload/v1635558439/helen_nccuaj.png",
      "email": "helen@myob.com",
      "phone": "604-555-1212",
      "address": "123 Whalley Blvd",
      "city": "Surrey",
      "stateProvince": "BC",
      "zipCode": "V3C 4X4",
      "country": "Canada",
      "work": "Costco",
      "relationship": "Sister",
      "bday": "1976-12-01",
      "family": "Spouse: Jack, Daughter: Olivia",
      "pets": "Dog: JoJo (Bday Oct 1)",
      "howWeMet": "When she was born",
      "giftIdeas": "Gloves or nutribullet",
      "faveDrink": "White wine - Moscato",
      "faveDessert": "Tiramisu",
      "notes": "She found a job",
      "zodiac": "Sagittarius",
      "personality": "INFP",
      "enneagram": "6",
      "timestamp": 1635090847411
    },
    {
      "id": 2,
      "userId": 1,
      "name": "Ruth Jones",
      "image": "https://res.cloudinary.com/dllowdq2w/image/upload/v1635561557/ruth_uzc42l.png",
      "email": "ruth@myob.com",
      "phone": "604-555-1212",
      "address": "123 Columbia Valley Rd",
      "city": "New York City",
      "stateProvince": "NY",
      "zipCode": "10001",
      "country": "USA",
      "work": "Engineer",
      "relationship": "Friend",
      "bday": "1996-01-05",
      "family": "Spouse: Jim",
      "pets": "Dog: Jupiter (Bday is June 21)",
      "howWeMet": "Neighbors in NYC",
      "giftIdeas": "Games, books",
      "faveDrink": "Red wine - Shiraz",
      "faveDessert": "Cookies",
      "notes": "Doesn't like eating in restaurants",
      "zodiac": "Capricorn",
      "personality": "INFP",
      "enneagram": "5",
      "timestamp": 1635090847411
    },
    {
      "id": 3,
      "userId": 1,
      "name": "Ashley Smith",
      "image": "https://res.cloudinary.com/dllowdq2w/image/upload/v1635555772/nyla_pwyqbs.png",
      "email": "ashley@myob.com",
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
      "pets": "Dog: Ollie (Bday Nov 1)",
      "howWeMet": "Through Lisa",
      "giftIdeas": "Gerber daisies, peppermint schnapps",
      "faveDrink": "Red wine - Shiraz",
      "faveDessert": "Brownies",
      "notes": "Started new job in November",
      "zodiac": "Cancer",
      "personality": "INFP",
      "enneagram": "1",
      "timestamp": 1635090847411
    },
    {
      "userId": 1,
      "name": "Nancy Matthews",
      "image": "https://res.cloudinary.com/dllowdq2w/image/upload/v1635557485/nancy_wfh93t.png",
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
      "pets": "Dog: Twigge (Bday is June 15)",
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
      "image": "https://res.cloudinary.com/dllowdq2w/image/upload/v1635555498/jennifer_jnbkdh.png",
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
      "pets": "Dog: Buddy (Bday Oct 3)",
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
      "image": "https://res.cloudinary.com/dllowdq2w/image/upload/v1635557380/becky_eeragz.png",
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
      "pets": "Dog: Odie (Bday Jan 5)",
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
      "image": "https://res.cloudinary.com/dllowdq2w/image/upload/v1635558854/diana_etucym.png",
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
      "pets": "Cat: Chaos (Bday March 21)",
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
      "image": "https://res.cloudinary.com/dllowdq2w/image/upload/v1635561567/mary_eqnxwb.png",
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
      "pets": "Dog: Bubba (Bday Feb 1)",
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
      "image": "https://res.cloudinary.com/dllowdq2w/image/upload/v1635561557/priscilla_age1hf.png",
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
      "pets": "Cat: Ollie (Bday May 21)",
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
      "id": 10,
      "userId": 1,
      "name": "Wendy Morris",
      "image": "https://res.cloudinary.com/dllowdq2w/image/upload/v1635548970/wendy_fampug.png",
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
      "pets": "Cat: Lucy - bday is Aug 15",
      "howWeMet": "Neighbors in CA",
      "giftIdeas": "Gardening supplies",
      "faveDrink": "Orange juice",
      "faveDessert": "Cheesecake",
      "notes": "Diabetic - no sugar, has a great garden",
      "zodiac": "Aries",
      "personality": "INTJ",
      "enneagram": "7",
      "timestamp": 1635090847411
    },
    {
      "id": 11,
      "userId": 1,
      "name": "Lisa Jackson",
      "image": "https://res.cloudinary.com/dllowdq2w/image/upload/v1635555845/lisa_m6r8lq.png",
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
      "pets": "Bird: Mitzy - bday April 5",
      "howWeMet": "School",
      "giftIdeas": "Vintage records",
      "faveDrink": "Diet Coke",
      "faveDessert": "Chocolate cupcakes",
      "notes": "Collects spoons from global travel",
      "zodiac": "Taurus",
      "personality": "INFP",
      "enneagram": "1",
      "timestamp": 1635090847411
    }
  ],
  "todos": [
    {
      "id": 1,
      "title": "Finish Capstone",
      "byWhen": "2021-11-07",
      "isCompleted": false,
      "userId": 1
    },
    {
      "title": "Update My Resume",
      "byWhen": "2021-11-05",
      "isCompleted": false,
      "userId": 1,
      "id": 2
    },
    {
      "id": 3,
      "title": "Post Project on LinkedIn",
      "byWhen": "2021-11-15",
      "isCompleted": false,
      "userId": 1
    },
    {
      "id": 4,
      "title": "Drop Off Donations",
      "byWhen": "2021-10-27",
      "isCompleted": false,
      "userId": 1
    },
    {
      "id": 5,
      "title": "Take Package to USPS",
      "byWhen": "2021-11-06",
      "isCompleted": false,
      "userId": 1
    },
    {
      "id": 6,
      "title": "Clean out garage",
      "byWhen": "2021-11-01",
      "isCompleted": false,
      "userId": 1
    },
    {
      "title": "Do Laundry",
      "byWhen": "2021-11-07",
      "isCompleted": false,
      "userId": 1,
      "id": 7
    },
    {
      "title": "Buy Wendy A Gift",
      "byWhen": "2021-11-04",
      "isCompleted": false,
      "userId": 1,
      "id": 9
    },
    {
      "title": "Update Budget",
      "byWhen": "2021-10-30",
      "isCompleted": false,
      "userId": 1,
      "id": 10
    }
  ],
  "activities": [
    {
      "name": "Doctor Appointment",
      "date": "2021-11-05",
      "time": "12:00",
      "address": "123 Maple St",
      "city": "San Jose, CA",
      "zipcode": "97029",
      "notes": "Bring test results",
      "userId": 1,
      "id": 1
    },
    {
      "id": 2,
      "name": "Book Club",
      "date": "2021-11-07",
      "time": "20:00",
      "address": "123 Jackson St",
      "city": "Brooklyn, NY",
      "zipcode": "10001",
      "notes": "Read 3 chapters",
      "userId": 1
    },
    {
      "id": 3,
      "name": "Volunteer At Mission",
      "date": "2021-09-25",
      "time": "13:00",
      "address": "639 Lafayette St",
      "city": "New York, NY",
      "zipcode": "17203",
      "notes": "Wear comfy shoes",
      "userId": 1
    },
    {
      "id": 4,
      "name": "Frank's Birthday",
      "date": "2021-09-03",
      "time": "12:00",
      "address": "123 Dutch Rd",
      "city": "San Diego, CA",
      "zipcode": "97715",
      "notes": "Post on FB",
      "userId": 1
    },
    {
      "id": 6,
      "name": "Hiking With Friends",
      "date": "2021-11-13",
      "time": "11:30",
      "address": "High Creek Falls",
      "city": "San Jose, CA",
      "zipcode": "37064",
      "notes": "Pack light",
      "userId": 1
    },
    {
      "id": 7,
      "name": "Dinner with Ashley",
      "date": "2021-10-31",
      "time": "18:15",
      "address": "823 Main Street",
      "city": "San Francisco, CA",
      "zipcode": "96114",
      "notes": "Bring flowers",
      "userId": 1
    },
    {
      "id": 8,
      "name": "Parent Teacher Night",
      "date": "2021-11-04",
      "time": "18:00",
      "address": "Central High School",
      "city": "Seattle, WA",
      "zipcode": "94126",
      "notes": "Bring paper/pen",
      "userId": 1
    },
    {
      "id": 10,
      "name": "Pearl Jam Concert",
      "date": "2021-11-25",
      "time": "21:00",
      "address": "123 Main St",
      "city": "Nashville, TN",
      "zipcode": "37064",
      "notes": "Bring earplugs",
      "userId": 1
    }
  ],
  "notes": [
    {
      "title": "Pull Trash Can In",
      "text": "Neighbors garage code is 1234",
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
      "title": "Screenshot By Selection",
      "text": "CMD + Shift + 4",
      "dayTime": 1635125849624,
      "userId": 1,
      "id": 4
    },
    {
      "id": 7,
      "title": "TSA Pre ✔",
      "text": "My KTN number is 123456789",
      "dayTime": 1635515155785,
      "userId": 1
    }
  ],
  "journals": [
    {
      "title": "Creating Apps In React Is Super Interesting",
      "post": "My sister helped me come up with a brilliant idea for my capstone and I'm excited to write up my proposal",
      "dayTime": 1634274000000,
      "userId": 1,
      "id": 1
    },
    {
      "title": "Today Was A Great Day For Getting Stuff Done!",
      "post": "The sun was shining and my pup and I hung out on the back patio and soaked in the sun",
      "dayTime": 1633237200000,
      "userId": 1,
      "id": 2
    },
    {
      "title": "Life Is So Good!",
      "post": "Super stoked to get working on my project today... the next 2 weeks will be all grind baby!",
      "dayTime": 1634533200000,
      "userId": 1,
      "id": 3
    },
    {
      "title": "I Love Ice Cream",
      "post": "Cupcake ipsum dolor sit amet cotton candy brownie. Sweet roll lemon drops apple pie sesame snaps brownie. Jelly beans sweet roll cake gummies cake I love candy.",
      "dayTime": 1635518060102,
      "userId": 1,
      "id": 4
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
    },
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
