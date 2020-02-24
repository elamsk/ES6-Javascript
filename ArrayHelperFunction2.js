var companies = ['IBM', 'ISRO', 'SUN', 'SAP'];

function changeProperty(val)
{
    return val.toUpperCase();
}

// Map will be apply the callback method and send the array back 
var changed = companies.map(changeProperty);

console.log(changed);


