 //Never used
 
 // Popup window code
 function newPopup(url) {
    popupWindow = window.open(
      url,'popUpWindow','height=300,width=400,left=10,top=10,resizable=no,scrollbars=no,toolbar=no,menubar=no,location=no,directories=no,status=no')
  }
//replace with example question(s)
  setTimeout(function() { newPopup('quizScreen.html'); }, 10000);