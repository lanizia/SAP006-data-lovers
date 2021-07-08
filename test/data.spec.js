import {
  groupedAthletes,
  getAthletes,
  getAthletesByName,
  groupByTeamsAthletes,
  sortBy,
  groupBySportName,
  getWomanAthletes, 
  getMedalsofWoman
} from '../src/data.js';
const athletes = [{
    "name": "Giovanni Abagnale",
    "gender": "M",
    "height": "198",
    "weight": "90",
    "sport": "Rowing",
    "team": "Italy",
    "noc": "ITA",
    "age": 21,
    "event": "Rowing Men's Coxless Pairs",
    "medal": "Bronze"
  },
  {
    "name": "Patimat Abakarova",
    "gender": "F",
    "height": "165",
    "weight": "49",
    "sport": "Taekwondo",
    "team": "Azerbaijan",
    "noc": "AZE",
    "age": 21,
    "event": "Taekwondo Women's Flyweight",
    "medal": "Bronze"
  },
  {
    "name": "Luc Abalo",
    "gender": "M",
    "height": "182",
    "weight": "86",
    "sport": "Handball",
    "team": "France",
    "noc": "FRA",
    "age": 31,
    "event": "Handball Men's Handball",
    "medal": "Silver"
  },
  {
    "name": "Saeid Morad Abdevali",
    "gender": "M",
    "height": "170",
    "weight": "80",
    "sport": "Wrestling",
    "team": "Iran",
    "noc": "IRI",
    "age": 26,
    "event": "Wrestling Men's Middleweight, Greco-Roman",
    "medal": "Bronze"
  },
  {
    "name": "Denis Mikhaylovich Ablyazin",
    "gender": "M",
    "height": "161",
    "weight": "62",
    "sport": "Gymnastics",
    "team": "Russia",
    "noc": "RUS",
    "age": 24,
    "event": "Gymnastics Men's Team All-Around",
    "medal": "Silver"
  },
  {
    "name": "Denis Mikhaylovich Ablyazin",
    "gender": "M",
    "height": "161",
    "weight": "62",
    "sport": "Gymnastics",
    "team": "Russia",
    "noc": "RUS",
    "age": 24,
    "event": "Gymnastics Men's Horse Vault",
    "medal": "Silver"
  },
  {
    "name": "Denis Mikhaylovich Ablyazin",
    "gender": "M",
    "height": "161",
    "weight": "62",
    "sport": "Gymnastics",
    "team": "Russia",
    "noc": "RUS",
    "age": 24,
    "event": "Gymnastics Men's Rings",
    "medal": "Bronze"
  },
  {
    "name": "Matthew \"Matt\" Abood",
    "gender": "M",
    "height": "197",
    "weight": "92",
    "sport": "Swimming",
    "team": "Australia",
    "noc": "AUS",
    "age": 30,
    "event": "Swimming Men's 4 x 100 metres Freestyle Relay",
    "medal": "Bronze"
  },
];

describe("groupedAthletes", () => {
  it('is a function', () => {
    expect(typeof groupedAthletes).toEqual('function');
  })
  it('should return only one object for each athlete with a unique list that includes all sports', () => {
    expect(groupedAthletes(athletes)).toEqual([{
        "name": "Giovanni Abagnale",
        "gender": "M",
        "height": "198",
        "weight": "90",
        "sport": "Rowing",
        "team": "Italy",
        "noc": "ITA",
        "age": 21,
        "events": ["Rowing Men's Coxless Pairs", ],
        "medal": "Bronze"
      },
      {
        "name": "Patimat Abakarova",
        "gender": "F",
        "height": "165",
        "weight": "49",
        "sport": "Taekwondo",
        "team": "Azerbaijan",
        "noc": "AZE",
        "age": 21,
        "events": ["Taekwondo Women's Flyweight", ],
        "medal": "Bronze"
      },
      {
        "name": "Luc Abalo",
        "gender": "M",
        "height": "182",
        "weight": "86",
        "sport": "Handball",
        "team": "France",
        "noc": "FRA",
        "age": 31,
        "events": ["Handball Men's Handball", ],
        "medal": "Silver"
      },
      {
        "name": "Saeid Morad Abdevali",
        "gender": "M",
        "height": "170",
        "weight": "80",
        "sport": "Wrestling",
        "team": "Iran",
        "noc": "IRI",
        "age": 26,
        "events": ["Wrestling Men's Middleweight, Greco-Roman", ],
        "medal": "Bronze"
      },
      {
        "name": "Denis Mikhaylovich Ablyazin",
        "gender": "M",
        "height": "161",
        "weight": "62",
        "sport": "Gymnastics",
        "team": "Russia",
        "noc": "RUS",
        "age": 24,
        "events": ["Gymnastics Men's Team All-Around", "Gymnastics Men's Horse Vault", "Gymnastics Men's Rings", ],
        "medal": "Silver"
      },
      {
        "name": "Matthew \"Matt\" Abood",
        "gender": "M",
        "height": "197",
        "weight": "92",
        "sport": "Swimming",
        "team": "Australia",
        "noc": "AUS",
        "age": 30,
        "events": ["Swimming Men's 4 x 100 metres Freestyle Relay", ],
        "medal": "Bronze"
      }
    ])
  })
});

describe('getAthletes', () => {
  it('is a function', () => {
    expect(typeof getAthletes).toBe('function');
  })
});

describe('getAthletesByName', () => {
  it('is a function', () => {
    expect(typeof getAthletesByName).toBe('function');
  })
});

it('should return athlete when inform partial name', () => {
  expect(getAthletesByName(athletes, "giova")).toEqual([{
    "name": "Giovanni Abagnale",
    "gender": "M",
    "height": "198",
    "weight": "90",
    "sport": "Rowing",
    "team": "Italy",
    "noc": "ITA",
    "age": 21,
    "events": ["Rowing Men's Coxless Pairs", ],
    "medal": "Bronze"
  }]);
});

it('should return athlete when inform name with capital letters', () => {
  expect(getAthletesByName(athletes, "LUC ABALO")).toEqual([{
    "name": "Luc Abalo",
    "gender": "M",
    "height": "182",
    "weight": "86",
    "sport": "Handball",
    "team": "France",
    "noc": "FRA",
    "age": 31,
    "events": ["Handball Men's Handball", ],
    "medal": "Silver"
  }]);
});


describe('groupBySportName', () => {
  it('is a function', () => {
    expect(typeof groupBySportName).toBe('function');
  })
});

it('should return an object that contains a list of sports as a property and for each property return a string array with the events of each sport.', () => {
  expect(groupBySportName(athletes, "sports")).toEqual({"Gymnastics": ["Gymnastics Men's Team All-Around", "Gymnastics Men's Horse Vault", "Gymnastics Men's Rings"], "Handball": ["Handball Men's Handball"], "Rowing": ["Rowing Men's Coxless Pairs"], "Swimming": ["Swimming Men's 4 x 100 metres Freestyle Relay"], "Taekwondo": ["Taekwondo Women's Flyweight"], "Wrestling": ["Wrestling Men's Middleweight, Greco-Roman"]});
});

describe('groupByTeamsAthletes', () => {
  it('is a function', () => {
    expect(typeof groupByTeamsAthletes).toBe('function');
  })
});

it('should return an object that contains a list of teams as a property and for each property return a string array with the names of each athlete', () => {
  expect(groupByTeamsAthletes(athletes, "team")).toEqual({"Italy": ["Giovanni Abagnale"], "Azerbaijan": ["Patimat Abakarova"], "France": ["Luc Abalo"], "Iran": ["Saeid Morad Abdevali"], "Russia": ["Denis Mikhaylovich Ablyazin"], "Australia": ["Matthew \"Matt\" Abood"]});
});


const teams = ["Italy", "Azerbaijan", "France", "Iran", "Russia", "Australia"]

describe('sortBy', () => {
  it('is a function', () => {
    expect(typeof sortBy).toBe('function');
  })
});

it('should returns a sort asc list of non-repeating teams, when a list with repeated teams is entered', () => {
  expect(sortBy(teams, "asc")).toEqual(["Australia", "Azerbaijan", "France", "Iran", "Italy", "Russia"]);
});
it('should returns a sort desc list of non-repeating teams, when a list with repeated teams is entered', () => {
  expect(sortBy(teams, "desc")).toEqual(["Russia", "Italy", "Iran", "France", "Azerbaijan", "Australia"]);
});

  describe('getWomanAthletes',() =>{
    it('is a function', () =>{
      expect(typeof getWomanAthletes).toBe('function');
    })});
    it('should return the number of percentage of female athlete non-repeted that won medals', () => {
      expect(getWomanAthletes (athletes, "gender")).toEqual(16);
    });

  describe('getMedalsofWoman', () => {
    it('is a function', () => {
      expect(typeof getMedalsofWoman).toBe('function');
    })});
    it('should return the total number of medals that female athletes won', () => {
      expect(getMedalsofWoman (athletes, "gender")).toEqual(1);
    });