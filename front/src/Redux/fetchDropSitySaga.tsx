export const fetchDropSitySaga = async (card1Id:string,
  order1:number, card2Id:string, order2:number) => {
  const res = await fetch("http://localhost:2224/sity", {
    method: "PUT",
    credentials: "include",
    headers: { "Content-Type": "Application/json" },
    body: JSON.stringify({card1Id,
      order1, card2Id, order2}),
  })
  const data = res.json()
  return data
  };
