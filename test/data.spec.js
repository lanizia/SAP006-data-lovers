import { showAthletes, filterByName } from '../src/data.js';
const atletas =[
  {name: "Giovanni Abagnale", sport: "Rowing", team: "Italy"},
  {name: "Patimat Abakarova", sport: "Taekwondo", team: "Azerbaijan"},
  {name: "Luc Abalo", sport: "Handball", team: "France"}
]

describe('showAthletes', () => {
  it('is a function', () => {
    expect(typeof showAthletes).toBe('function');
  })});

describe('filterByName', () => {
  it('is a function', () => {
    expect(typeof filterByName).toBe('function');
  });

  it('should return athlete when inform partial name', () => {
    expect(filterByName(atletas, "giova")).toEqual([{
      name: "Giovanni Abagnale", sport: "Rowing", team: "Italy"
    }]);
  });

  it('should return athlete when inform name with capital letters', () => {
    expect(filterByName(atletas, "LUC ABALO")).toEqual([{name: "Luc Abalo", sport: "Handball", team: "France"}]);
  });
});
