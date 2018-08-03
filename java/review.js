// Instructions:
      // Using the given arrays, complete the questions below!

      // Rows of Students
      var studentsRow1 = ["Rachelle", "Jacob", "Jerome", "Greg", "Matt", "Walt"];
      var studentsRow2 = ["Jeremiah", "Luis", "Nathan", "Analben"];
      var studentsRow3 = ["Aisha", "Stephen", "John"];

      // Entire Class
      var entireClass = [studentsRow1, studentsRow2, studentsRow3];


      // How do we print out every single student in Row 1?
      for (var i = 0; i < entireClass.length; i++) {
        console.log(studentsRow1[i]);
      }

      // How do we print out every student in Row 2 whose first name begins with J?
      for (var j = 0 ; j < studentsRow2.length; j++) { 
          if (studentsRow2[j].charAt(0)==="J");  {
            console.log(studentsRow2[j]);
          }
      }

      // Using the entireClass array, how do we access the second student in row 3?


      // Using the entireClass array, how do we access the third student in row 2?