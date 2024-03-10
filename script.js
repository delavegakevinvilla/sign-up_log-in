function signup(){
  event.preventDefault();

  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  var confirm = document.getElementById('confirm').value;

  var user = {
      username: username,
      password: password,
      confrim: confirm
  };

  if(confirm != password){
      alert("Password does not math!");
  }else{
      var json = JSON.stringify(user);
      localStorage.setItem(username, json);
      localStorage.setItem(password, json);
      localStorage.setItem(confirm, json);
      console.log('user added');
      alert("Account Successfully Created!");
      window.location.href = "login.html";
  }

  document.getElementById('form').reset();
  
}


function login(){
  event.preventDefault();

  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  var user = localStorage.getItem(username);
  var data = JSON.parse(user);
  console.log(data);

  if(user == null){
      alert("Incorrect username or password.");
  }else if(username == data.username && password == data.password){
      alert("Log in Successfully!");
      window.location.href = "Home.html";
  }
  
}