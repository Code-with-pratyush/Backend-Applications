//creating a backend for hosiptal kidney avilaiblity
import express from "express";
const app = express();
const PORT = 3000;

//object
const users = [
  {
    name: "Pratyush",
    isKidney: [
      {
        isHealthy: false,
      },
    ],
  },
];
app.use(express.json());
//get the details of number of heal
app.get("/", (req, res) => {
  const getKidney = users[0].isKidney;
  const numberOfKidneys = getKidney.length;
  const HealtyKidneys = getKidney.filter((kidney) => {
    kidney.isHealthy;
  }).length;
  const UnhealhthyKidneys = numberOfKidneys - HealtyKidneys;
  res.send({
    numberOfKidneys,
    HealtyKidneys,
    UnhealhthyKidneys,
  });
});
app.post("/", (req, res) => {
  const Healthy = req.body.isHealthy;
  users[0].isKidney.push({
    isHealthy: Healthy,
  });
  res.send({
    msg: "Done",
  });
});
app.put("/", (req, res) => {
  for (let i = 0; i < users[0].isKidney.length; i++) {
    users[0].isKidney.isHealthy = true;
  }
  res.json({});
});

app.delete("/", (req, res) => {
  if (AtLeatOneUnheathlyKidney()) {
    const newKidneys = [];
    for (let i = 0; i < users[0].isKidney.length; i++) {
      if (users[0].isKidney[i].isHealthy) {
        newKidneys.push({
          isHealthy: true,
        });
      }
    }
  } else {
    res.status(411).json({
      msg: "You have no Bad Kidneys",
    });
  }
  users[0].isKidney = newKidneys;
  res.send({ msg: "done" });
});
function AtLeatOneUnheathlyKidney() {
  let AtLeatOneUnheathlyKidney = false;
  for (let i = 0; i < users[0].isKidney.length; i++) {
    if (!users[0].isKidney[i].isHealthy) {
      AtLeatOneUnheathlyKidney = true;
    }
  }
  return AtLeatOneUnheathlyKidney;
}
app.listen(PORT, () => {
  console.log(`Server Listening on http://localhost:${PORT}/`);
});
