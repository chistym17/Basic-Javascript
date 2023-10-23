function matchFinder(string1,string2)
{
if(typeof(string1)!='string' || typeof(string2)!='string')
return 'invalid input.inputs have to be string'

else
{
if(string1.includes(string2))return true

return false

}

}

