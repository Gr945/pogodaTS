

export const fetchAddSityBack = async (obj :any) => {
const res = await fetch("http://localhost:2224/sity", {
  method: "POST",
  credentials: "include",
  headers: { "Content-Type": "Application/json" },
  body: JSON.stringify({ objSity:obj }),
})
const data = res.json()
return data
};
