//When clicking Add Todo
$("#addTodo").click(function(){
  //Show add form
  $("#formContainer").show();
});

//When clicking Add todo button
$("#newTodo").on("click",function(){
  //Confirm Todo name and description
  let todoName = $("#todoname").val();
  let $checkbox = $(`<div><input type="checkbox" name="todo"/> <span>${todoName}</span></div>`);
  // if todoname is empty or description is empty
  if(todoName === ""){
    // display warning
    $("input[name='todo_name']").css("border", "2px solid red");
  } else {
    // else append checkbox item to todo list with todo name
    $(".todoList").append($checkbox);
    //hide add form
    $("#formContainer").hide();
    $("#todoname").val("");
  }
});


//When clicking Remove todo
$("#removeTodo").click(function(){
  //Remove all todos that are checked
  $(":checked").next().remove();
  $(":checked").remove();
});
