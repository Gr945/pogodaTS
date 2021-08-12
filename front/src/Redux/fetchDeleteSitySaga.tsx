export const fetchDeleteSitySaga = async (id:string) => {
  const res = await fetch("http://localhost:2224/sity", {
    method: "DELETE",
    credentials: "include",
    headers: { "Content-Type": "Application/json" },
    body: JSON.stringify({id}),
  })
  const data = res.json()
  return data
  };
