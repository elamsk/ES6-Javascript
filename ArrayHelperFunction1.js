var companies = ['IBM', 'ISRO', 'SUN', 'SAP'];

function print(val)
{
    console.log(val);
}

// Callback method for each
companies.forEach(print);

console.log("--------------");


with(companies)
{
    forEach(print);
}