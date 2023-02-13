require("../task-manager/src/db/mongoose");
const Task = require("../task-manager/src/model/task");

Task.findByIdAndDelete("63ea3cbad5ba567362ffb306")
  .then(() => {
    return Task.countDocuments({ completed: false });
  })
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });

const deleteTaskAndCount = async (id) => {
  const task = await Task.findByIdAndDelete(id);

  const count = await Task.countDocuments({ completed: false });

  return count;
};

deleteTaskAndCount("63ea4425d5ba567362ffb311")
  .then((count) => {
    console.log(count);
  })
  .catch((err) => {
    console.log(err);
  });
