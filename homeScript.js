 // Popup window code
 function newPopup(url) {
    popupWindow = window.open(
      url,'popUpWindow','height=300,width=400,left=10,top=10,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no,status=yes')
  }
//replace with example question(s)
  setTimeout(function() { newPopup('quizScreen.html'); }, 10000);