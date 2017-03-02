exports.addTask = function(req, res){
var taskName = req.body.taskName;
  // This will print in your terminal when a POST is made
  console.log(taskName); 

  data.tasks.push(taskName); // Add to current data

  // Lets send our task name back so our browser knows it worked out!
  res.send(taskName);
}