const { auth, db } = require("../../config");
const { ref, onValue, set } = require("firebase/database");
const { signInWithEmailAndPassword } = require("firebase/auth");
const { StatusCodes } = require("http-status-codes");

const getData = async (req, res) => {
  const user = await signInWithEmailAndPassword(
    auth,
    "het@gmail.com",
    "hetislegend"
  );
  set(ref(db, "UsersData/HHeFtnU2LTXWVTBsKqgjwHbJ1pz2/Relay"), {
    value: 1,
  });

  res.status(StatusCodes.OK).json({ msg: "data updated" });
};
const getData1 = async (req, res) => {
  const user = await signInWithEmailAndPassword(
    auth,
    "het@gmail.com",
    "hetislegend"
  );
  set(ref(db, "UsersData/HHeFtnU2LTXWVTBsKqgjwHbJ1pz2/Relay"), {
    value: 0,
  });

  res.status(StatusCodes.OK).json({ msg: "data updated" });
};

const getData2 = async (req, res) => {
    const user = await signInWithEmailAndPassword(
        auth,
        "het@gmail.com",
        "hetislegend"
      );
  const hello = ref(
    db,
    "UsersData/" + "HHeFtnU2LTXWVTBsKqgjwHbJ1pz2/" + "readings/humidity/"
  );
  onValue(hello, (snapshot) => {
    const data = snapshot.val();
    const newPosts = Object.keys(data).map((key) => ({
      id: key,
      ...data[key],
    }));
    res.status(StatusCodes.OK).json({data})
  });
  
};
const getData3 = async (req, res) => {
    const user = await signInWithEmailAndPassword(
        auth,
        "het@gmail.com",
        "hetislegend"
      );
  const hello = ref(
    db,
    "UsersData/" + "HHeFtnU2LTXWVTBsKqgjwHbJ1pz2/" + "readings/temperature/"
  );
  onValue(hello, (snapshot) => {
    const data = snapshot.val();
    const newPosts = Object.keys(data).map((key) => ({
      id: key,
      ...data[key],
    }));
    res.status(StatusCodes.OK).json({data})
  });
  
};

module.exports = {
  getData,
  getData1,
  getData2,
  getData3
};
