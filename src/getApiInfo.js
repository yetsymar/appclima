

const getApiInfo = async (city)=>{
 
    const data = await ( await fetch(`http://api.weatherapi.com/v1/current.json?key=0ed430068d864b2cb19144419232605 &q=${city || 'Buenos aires'}&aqi=''`)).json()
    return data                      

};
export default getApiInfo;