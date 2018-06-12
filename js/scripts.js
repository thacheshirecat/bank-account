//business logic
function Account(name, balance)
{
  this.name = name;
  this.balance = balance;
}
var newAccount;
Account.prototype.manageFunds = function(addDeposit, addWithdrawel)
{
  newAccount.balance += (addDeposit - addWithdrawel);
  return (newAccount.balance);
}


//user interface logic
$(document).ready(function()
{

  $("#new-account-div").submit(function(event)
  {
    event.preventDefault();
    var userName = $("input#user-name").val();
    var initialBalance = parseInt($("input#initial-deposit").val());

    newAccount = new Account(userName, initialBalance);

    $("#user").text(userName);
    $("#user-balance").text(initialBalance);

    $("input#user-withdraw").val(0)
    $("input#user-deposit").val(0)

    $("#new-account-div").hide();
    $("#account-info").show();
    $("#current-balance").show();
  })

  $("#account-info").submit(function(event)
  {
    event.preventDefault();
    debugger;
    var addDeposit = parseInt($("input#user-deposit").val());
    var addWithdrawel = parseInt($("input#user-withdraw").val());
    newAccount.manageFunds(addDeposit, addWithdrawel);
    $("#user-balance").text(newAccount.balance);
    // $("input#user-withdraw").val(0)
    // $("input#user-deposit").val(0)
  });

});
