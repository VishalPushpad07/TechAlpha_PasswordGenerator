document.getElementById('generate').addEventListener('click', function() {
  var length = document.getElementById('length').value;
  var includeNumbers = document.getElementById('includeNumbers').checked;
  var includeSymbols = document.getElementById('includeSymbols').checked;
  
  var password = generatePassword(length, includeNumbers, includeSymbols);
  
  document.getElementById('password').textContent = password;
});

function generatePassword(length, includeNumbers, includeSymbols) {
  var charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var password = '';
  
  if (includeNumbers) {
    charset += '0123456789';
  }
  
  if (includeSymbols) {
    charset += '!@#$%^&*()-_=+';
  }
  
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }
  
  return password;
}
