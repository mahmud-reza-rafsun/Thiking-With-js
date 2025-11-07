// ---------data setup block---------------

const USER_COUNT = 50000;
let usersA = [];
let usersB = [];

const createUser = (id) => ({ id: `user${id}`, name: `${id}` });

for (let i = 0; i < USER_COUNT; i++) {
  usersA.push(createUser(i));
  usersB.push(createUser(i + 25000));
}

// console.log(usersA);
// console.log(usersB);

const commonFriendsSlow = (userA, userB) => {
  const startTime = performance.now();
  const commonFriends = [];
  usersA.forEach((userA) => {
    usersB.forEach((userB) => {
      if (userA === userB) {
        commonFriends.push(userA);
      }

      const endTime = performance.now();

      return {
        data: commonFriends.length,
        timeTookToFinish: endTime - startTime,
      };
    });
  });
};

// console.log(commonFriendsSlow(usersA, usersB));

const commonFriendsFast = (userA, userB) => {
  const startTime = performance.now();

  const commonFriends = [];

  const idListA = new Set(userA.map((user) => user.id));

  usersB.forEach((userB) => {
    if (idListA.has(userB.id)) {
      commonFriends.push(userB);
    }
  });

  const endTime = performance.now();

  return {
    data: commonFriends.length,
    timeTookToFinish: endTime - startTime,
  };
};

console.log(commonFriendsFast(usersA, usersB));
