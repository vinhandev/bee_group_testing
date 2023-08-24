export function generateRandomData(count:number) {
  const data = [];

  for (let i = 0; i < count; i++) {
    const id = Math.floor(Math.random() * 10000)
      .toString()
      .padStart(4, "0");
    const names = [
      "Andrew Taylor",
      "Emma Johnson",
      "Michael Smith",
      "Olivia Davis",
      "William Brown",
    ];
    const name = names[Math.floor(Math.random() * names.length)];
    const balance = Math.floor(Math.random() * 5000) + 500;
    const emails = [
      "nami@gmail.com",
      "andrew@example.com",
      "emma@example.com",
      "michael@example.com",
      "olivia@example.com",
    ];
    const email = emails[Math.floor(Math.random() * emails.length)];
    const registerAt = new Date();
    const active = Math.random() < 0.5; // 50% chance of being active

    data.push({
      id: id,
      name: name,
      balance: balance,
      email: email,
      registerAt: registerAt,
      active: active,
    });
  }

  return data;
}
