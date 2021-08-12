

export const fetchAddSitySaga = async (name :string) => {

  const apiKey = '89e0cc6640d31329f7d5167f2f66d81d'
const res = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${apiKey}`)
const data = res.json()

return data
};
