

export const fetchDounloadSitysSaga = async () => {
const res = await fetch(`http://localhost:2224/sity`)
const data = res.json()
return data
};
