const generalHospitalFamalies = [
{first: 'Sonny', last: 'Corinthos', status: 'alive', children: true },
{first: 'Michael', last: 'Corinthos-Quartermaine', status: 'alive', children: true },
{first: 'Carly', last: 'Corinthos', status: 'alive', children: true },
{first: 'Willow', last: 'Tait', status: 'alive', children: false },
{first: 'Nina', last: 'Reeves', status: 'alive', children: true },
{first: 'Harmony', last: 'Miller', status: 'alive', children: false },
{first: 'Valentine', last: 'Cassadine', status: 'alive', children: true },
{first: 'Victor', last: 'Cassadine', status: 'alive', children: true },
{first: 'Nikalis', last: 'Cassadine', status: 'alive', children: true },
{first: 'Ava', last: 'Jerome', status: 'alive', children: true },
{first: 'Harrison', last: 'Chase', status: 'alive', children: false },
{first: 'Curtis', last: 'Ashford', status: 'alive', children: true },
{first: 'Drew', last: 'Cain', status: 'alive', children: true },
{first: 'Spencer', last: 'Cassadine', status: 'alive', children: false },
{first: 'Laura', last: 'Collins', status: 'alive', children: true },
{first: 'Brando', last: 'Corbin', status: 'alive', children: true },
{first: 'Alexis', last: 'Davis', status: 'alive', children: true },
{first: 'Anna', last: 'Devane', status: 'alive', children: true },
{first: 'Dante', last: 'Falconeri', status: 'alive', children: true },
{first: 'Hamilton', last: 'Finn', status: 'alive', children: true },
{first: 'Austin', last: 'Gatlin-Holt', status: 'alive', children: false },
{first: 'Sasha', last: 'Gilmore', status: 'alive', children: true },
{first: 'Josslyn', last: 'Jacks', status: 'alive', children: false },
{first: 'Maxie', last: 'Jones', status: 'alive', children: true },
{first: 'Samantha', last: 'McCall', status: 'alive', children: true },
{first: 'Esme', last: 'Prince', status: 'alive', children: false },
{first: 'Brook Lynn', last: 'Quartermaine', status: 'alive', children: false },
{first: 'Elizabeth', last: 'Webber-Baldwin', status: 'alive', children: true },
{first: 'Portia', last: 'Robinson', status: 'alive', children: true },


]

//filter individuals by who has children

const parents = generalHospitalFamalies.filter(parent=> parent.children == true)
console.table(parents)

// filter individuals who are Cassadines
const cassadine = generalHospitalFamalies.filter(evilfamily=> evilfamily.last == 'Cassadine')
console.table(cassadine)

//Return a list of names
const fullNames = generalHospitalFamalies.map(fullname=> `${fullname.first} ${fullname.last}`)
console.log(fullNames)