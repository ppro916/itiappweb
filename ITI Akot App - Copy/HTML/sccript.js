const quizData = [
    {
      question: 'Q.What comes under machine safety ?',
      options: ['Dont wear a ring, watch, chain', 'Dont walk under suspended load', 'Stop the machine before changing the speed', 'Dont try to stop a running machine in with hands'],
      answer: 'Stop the machine before changing the speed',
    },
    {
      question: 'Q.Which grinding machine is used for sharpning of cutters?',
      options: ['Surface grinder', 'Tool and Cutteer grinder', 'Pedestal grinder', 'Cylinder grinding'],
      answer: 'Tool and Cutter grinder',
    },
    {
      question: 'Q.Which material is used to make the base of tool and cutter grinding machine ?',
      options: ['Grey cast iron', 'Low carbon steel', 'Tool steel', 'Bronze'],
      answer: 'Grey cast iron',
    },
    {
      question: 'Q.Which part mounted directly on the top of base in tool cutter grinder ?',
      options: ['Column', 'Saddle', 'Table', 'Wheel'],
      answer: 'Saddle',
    },
    {
      question: 'Q.Where is tooth rest fitted in tool and cutter grinder ?',
      options: [
        'Tooth rest attachment',
        'In between centres',
        'Tail stock',
        'Column',
      ],
      answer: 'Tooth rest attachment',
    },
    {
      question: 'Q.Which is the shape of grinding wheel used for sharpening milling cutter and reamer ?',
      options: ['Disc', 'Straight cup', 'Flaring cup', 'Dish'],
      answer: 'Flaring cup',
    },
    {
      question: 'Q.What is the use of work holding device ?',
      options: [
        'Keep the work piece in a safe distance',
        'Keep the cutter in a safe distance',
        'Keep the work piece in position',
        'Keep the cutter in position',
      ],
      answer: 'Keep the work piece in position',
    },
    {
      question: 'Q.How many number of swivelling movement is provided with universal vice ?',
      options: ['2', '3', '4', '6'],
      answer: '3',
    },
    {
      question: 'Q.Which tool is used to form the radius on grinding wheel for radius grinding attachment ?',
      options: [
        'H.S.S single point wheel',
        'Brazed single point tool',
        'Diamond stick',
        'H.C.S tool',
      ],
      answer: 'Diamond stick',
    },
    {
      question: 'Q.What is the use of a mandrel ?',
      options: ['For guide the grinding wheel', 'For hold the hollow cutters', 'For Support the wheel head', 'For guide the table'],
      answer: 'For hold the hollow cutters',
    },
    {
        question: 'Q.What is the angular setting limit of an angular sine vice used in tool and cutter grinder ?',
        options: [
          'Upto 27*',
          'Upto 55*',
          'Upto 80*',
          'Upto 120*',
        ],
        answer: 'Upto 55*',
      },
      {
        question: 'Q.Which attachment is used for grinding face mill up to 400mm dia ?',
        options: [
          'Universal vice',
          'Motor drive arrangement',
          'Face mill grinding attachment',
          'Angular sine vice',
        ],
        answer: 'Face mill grinding attachment',
      },
      {
        question: 'Q.What is use of radius wheel turning attachment in tool and cutter grinder ?',
        options: [
          'Dress the wheel to the required radius up to 25mm',
          'Turn the work piece to any required shape',
          'Turn the work piece to radius up to 12mm',
          'Dress the wheel to any required shape',
        ],
        answer: 'Dress the wheel to the required radius up to 25mm',
      },
      {
        question: 'Q.Which grinding machine is used for re-sharpening of single point tools, chisel, punches and drills ?',
        options: [
          'Surface grinder Machinist-Semester 3 Module',
          'Single Purpose tool cutter grinder',
          'Cylindrical grinder',
          'Universal tool and cutter grinder',
        ],
        answer: 'Single Purpose tool cutter grinder',
      },
      {
        question: 'Q.What is the maximum swivelling angle of wheel head on a tool cutter grind machine ?',
        options: [
          '360*',
          '120*',
          '90*',
          '47*',
        ],
        answer: '360*',
      },
      {
        question: 'Q.Which part of the tool and cutter grinding machine on that wheel head is being mounted ?',
        options: [
          'Base',
          'Saddle',
          'Column',
          'Bed',
        ],
        answer: 'Column',
      },
      
      {
        question: 'Q.What is the remedy to remove the block and shining face of grinding wheel ?',
        options: [
          'Changing of wheel',
          'Turning of wheel',
          'Dressing of wheel',
          'Balancing of wheel',
        ],
        answer: 'Dressing of wheel',
      },
      
      {
        question: 'Q.Why center gauge is provided on tool and cutter grinding ?',
        options: [
          'For centering the wheel spindle and cutter edges',
          'For align the table to the spindle axis',
          'For reduce the wheel speed',
          'For fast metal removal',
        ],
        answer: 'For centering the wheel spindle and cutter edges',
      },
      
      {
        question: 'Q.Which part is used to support each individual tooth of cutter in correct position on tool and cutter grinder ?',
        options: [
          'Compound rest',
          'Steady rest',
          'Tool rest',
          'Tooth rest',
        ],
        answer: 'Tooth rest',
      },
      


      {
        question: 'Q.What hippened if tool little clearance is provided on miling cutter?',
        options: [
          'Chattering produced',
          'No heat produced',
          'Good surface finish',
          'Bad surface finish',
        ],
        answer: 'Bad surface finish',
      },

      {
        question: 'Q.What is the recommended range of secondary clearance angle on milling cutter?',
        options: [
          '1°to 3°',
          '4° to 70',
          '8° to 12°',
          '15°to 25',
        ],
        answer: '15°to 25',
      },

      {
        question: 'Q.What is the recommended range of clearance angle for H.s.S cutter while miling cast iron?',
        options: [
          '28°to 37°',
          '15°to 25°  ',
          '4°to 7°',
          '1°to 5°',
        ],
        answer: '4°to 7°',
      },

      {
        question: 'Q.Which work holding device is used on tool and cutter grinder for grinding the periphery and bevelled edges on it? ?',
        options: [
          'Face mill grinding attachment',
          'Taper turning attachment',
          'Slotting attachment',
          'Grinding attachment',
        ],
        answer: 'Face mill grinding attachment',
      },

      {
        question: 'Q.Which attachment is designed for holding work to any desired compound angle? ?',
        options: [
          'Universal vice',
          'Angular sine vice',
          'Positive indexing attachment',
          'Motor drive arrangement',
        ],
        answer: 'Universal vice',
      },

      {
        question: 'Q.Which grinding attachment is specially designed for enable the work up toa length of 750 mm?',
        options: [
          'RH and LH extensiOn tail stock',
          'Universal vice',
          'Positive indexing attachment',
          'Tap relieving sharpening attachment',
        ],
        answer: 'RH and LH extensiOn tail stock',
      },

      {
        question: 'Q.Which attachment is designed for grinding the land of a tap?',
        options: [
          'Radius wheel turning attachment',
          'Angular sine vice',
          'Tap relieving and Sharpening attachment',
          'Milling attachment',
        ],
        answer: 'Tap relieving and Sharpening attachment',
      },

      {
        question: 'Q.Which attachment is used for precision grinding of angular parts?',
        options: [
          'Motor drive attachment',
          'Posiive indexing attachment',
          'Universal vice',
          'Angular sine vice',
        ],
        answer: 'Angular sine vice',
      },

      {
        question: 'Q.Which letter used for represent for datum for indicating geometrical tolerance?',
        options: [
          'G',
          'M',
          'B',
          'A',
        ],
        answer: 'A',
      },

      {
        question: 'Q.What is,the pitch of spindle screw in depth micrometer?',
        options: [
          '0.5 mm',
          '0.01 mm',
          '0.02 mm',
          '0.05 mm',
        ],
        answer: '0.05 mm',
      },

      {
        question: 'Q.Which typeof micrometer does not require zero error correction?',
        options: [
          'Tube Micrometer',
          'Ball Micrometer',
          'Stick Micrometer',
          'Digital Micrometer',
        ],
        answer: 'Digital Micrometer',
      },

      {
        question: 'Q.What is used to measure different holes accurately with bore dial gauge?',
        options: [
          'Graduations on the dial',
          'Inter changeable measuring rods',
          'Sliding plunger',
          'Centering shoes',
        ],
        answer: 'Graduations on the dial',
      },

      {
        question: 'Q.Which type of micrometer designed to measurement of longer intprnal length?',
        options: [
          'Extarnal Micrometer',
          'Outside Micrometer',
          'Inside Micrometer',
          'Stick Micrometer',
        ],
        answer: 'Stick Micrometer',
      },

      {
        question: 'Q.What is the range of sizes in feeler gauges as per lS 3179?',
        options: [
          '0.01 to 0.05 mm',
          '0.02 to 1.00 mm',
          '0.2 to 1.00 mm',
          '1.5 to 2.0 mm',
        ],
        answer: '0.2 to 1.00 mm',
      },

      {
        question: 'Q.How much tolerance is maintained to make gauges comparing job tolerance?',
        options: [
          'One-Tenth',
          'One-Fifth',
          'One-Hundredth',
          'One- Eight',
        ],
        answer: 'One-Tenth',
      },

      

      {
        question: 'What is the use of telescopic gauge?',
        options: [
          'To measure deptn of holes',
          'To measure slot depth Machinist',
          'To measure size of hole slots and recesses',
          'To measure counter bore depth',
        ],
        answer: 'To measure size of hole slots and recesses',
      },

     /* {
        question: 'Q.What is the definition of "GD and T ?',
        options: [
          'Geometrical Deviations and Tolerances',
          'M',
          'B',
          'Geometrical Drawing and Tolerances',
        ],
        answer: 'Dress the wheel to the required radius up to 25mm',
      },*/

      {
        question: 'Q.What is the accuracy of depth micrometer?',
        options: [
          '0.5 mm',
          '0.01 mm',
          '0.02 mm',
          '0.05 mm',
        ],
        answer: '0.01 mm',
      },

      {
        question: 'Q.What is the use of thread ring gauge?',
        options: [
          'Check the internal thread',
          'Check the external thread',
          'Check thethread length',
          'Check the internal diameter',
        ],
        answer: 'Check the external thread',
      },

      /*{
        question: 'Q.What is the size of angle ?',
        options: [
          '27°8 9"',
          '26°8 9"',
          '27°8 5"',
          '27°9 9"',
        ],
        answer: 'Dress the wheel to the required radius up to 25mm',
      },*/

      {
        question: 'Q.Q.What is the use of screw thread micrometer ?',
        options: [
          'Square',
          'Wedge',
          'Rectangle',
          'Cylinder',
        ],
        answer: 'Wedge',
      },

      {
        question: 'Q.What is shape of angle guage ?',
        options: [
          'Measure major diameter',
          'Measure pitch diameter',
          'Measure minor diameter',
          'Measure thickness of threads',
        ],
        answer: 'Measure pitch diameter',
      },

     /* {
        question: 'Q.What is the type of gauge ?',
        options: [
          'Ring gauge',
          'Double ended plug gauge',
          'Thread plug gauge',
          'Progressive plug gauge',
        ],
        answer: 'Dress the wheel to the required radius up to 25mm',
      },*/

      {
        question: 'Q.Which type of group the squarness comes under in geometrical tolerance?',
        options: [
          'Location',
          'Form',
          'Datum line',
          'Attitude',
        ],
        answer: 'Attitude',
      },

      {
        question: 'Q.How to identify and indicate the geometrical tolerance ?',
        options: [
          'Numbers',
          'Alphabets',
          'Decimals',
          'Symbols',
        ],
        answer: 'Symbols',
      },

      {
        question: 'Q.What is the uise of depth micrometer??',
        options: [
          'Check the width of slots',
          'Check the depth of blind holes',
          'Check the dia of holes',
          'Check the diameter of thin rods',
        ],
        answer: 'Check the depth of blind holes',
      },

      {
        question: 'Q.How to set the zero before taking the measurement in micrometer??',
        options: [
          'Use micrometer',
          'Use vernier micrometer',
          'Setting rings and Slip gauge',
          'Angle gauges',
        ],
        answer: 'Setting rings and Slip gauge',
      },

      {
        question: 'Q.How many sets available in telescopic gauge ?',
        options: [
          '8',
          '10',
          '6',
          '5',
        ],
        answer: '6',
      },

      {
        question: 'Q.What are the sizes available in telescopic gauges as per Mitutoyo series 1557 ?',
        options: [
          '12 mm to 130 mm',
          '20 mm to 175 mm',
          '5 mm to 120 mm',
          '8 mm to 150 mm',
        ],
        answer: '8 mm to 150 mm',
      },

      {
        question: 'Q.How many the numbers of pieces in degree series in a standard set are available ?',
        options: [
          '5',
          '6',
          '8',
          '10',
        ],
        answer: '5',
      },

      {
        question: 'Q.What is use of feeler gauge ?',
        options: [
          'Adjusting the parts for play',
          'Checking gap between mating parts',
          'Checking radius fjobs',
          'Checkin of holes',
        ],
        answer: 'Checking gap between mating parts',
      },

      {
        question: 'Q.Which type of group the straightness comes under in geometricaltolerance ?',
        options: [
          'Location',
          'Form',
          'Datum line',
          'Attituide',
        ],
        answer: 'Form',
      },

      {
        question: 'Q.What is the use of tooth rest ?',
        options: [
          'Keep the work piece in a safe distance',
          'Keep the cutter in a safe distance',
          'Keep the work piece in position',
          'Keep the cutter teeth in position',
        ],
        answer: 'Keep the cutter teeth in position',
      },

      {
        question: 'Q.Which grinding machine is used for re-sharpening of milling cutters teeth?',
        options: [
          'Surface grinder',
          'Single purpose tool cutter grinder',
          'Cylindrical grinder',
          'Universal tool and cutter grinder',
        ],
        answer: 'Universal tool and cutter grinder',
      },

      {
        question: 'Q.Which type of group the concentricit/comes under in geometrical tolerance?',
        options: [
          'Location',
          'Form',
          'Datum line',
          'Attitude',
        ],
        answer: 'Dress the wheel to the required radius up to 25mm',
      },

      {
        question: 'Q.How many hole circles are there are in positive indexing attachment?',
        options: [
          '5',
          '7',
          '12',
          '8',
        ],
        answer: 'Dress the wheel to the required radius up to 25mm',
      },

      {
        question: 'Q.Which blade is used to support teeth of small end mil cutters while re-sharpening on tool & cutter grinder?',
        options: [
          'Bent blade',
          'Radiused end blade',
          'Offset blade',
          'Straight blade',
        ],
        answer: 'Bent blade',
      },

      {
        question: 'Q.Which tooth rest holder is used to support straight teeth of reamers & slot drills on tool &cutter grinder?',
        options: [
          'Universal tooth rest holder',
          'Spring tooth rest holder',
          'Fixed tooth rest holder',
          'None of above',
        ],
        answer: 'Spring tooth rest holder',
      },



  ];






  /*'For centering the wheel spindle each individual tooth of cutter in correct position on tool and cutter grinding',*/














  
  const quizContainer = document.getElementById('quiz');
  const resultContainer = document.getElementById('result');
  const submitButton = document.getElementById('submit');
  const retryButton = document.getElementById('retry');
  const showAnswerButton = document.getElementById('showAnswer');
  
  let currentQuestion = 0;
  let score = 0;
  let incorrectAnswers = [];
  
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  
  function displayQuestion() {
    const questionData = quizData[currentQuestion];
  
    const questionElement = document.createElement('div');
    questionElement.className = 'question';
    questionElement.innerHTML = questionData.question;
  
    const optionsElement = document.createElement('div');
    optionsElement.className = 'options';
  
    const shuffledOptions = [...questionData.options];
    shuffleArray(shuffledOptions);
  
    for (let i = 0; i < shuffledOptions.length; i++) {
      const option = document.createElement('label');
      option.className = 'option';
  
      const radio = document.createElement('input');
      radio.type = 'radio';
      radio.name = 'quiz';
      radio.value = shuffledOptions[i];
  
      const optionText = document.createTextNode(shuffledOptions[i]);
  
      option.appendChild(radio);
      option.appendChild(optionText);
      optionsElement.appendChild(option);
    }
  
    quizContainer.innerHTML = '';
    quizContainer.appendChild(questionElement);
    quizContainer.appendChild(optionsElement);
  }
  
  function checkAnswer() {
    const selectedOption = document.querySelector('input[name="quiz"]:checked');
    if (selectedOption) {
      const answer = selectedOption.value;
      if (answer === quizData[currentQuestion].answer) {
        score++;
      } else {
        incorrectAnswers.push({
          question: quizData[currentQuestion].question,
          incorrectAnswer: answer,
          correctAnswer: quizData[currentQuestion].answer,
        });
      }
      currentQuestion++;
      selectedOption.checked = false;
      if (currentQuestion < quizData.length) {
        displayQuestion();
      } else {
        displayResult();
      }
    }
  }
  
  function displayResult() {
    quizContainer.style.display = 'none';
    submitButton.style.display = 'none';
    retryButton.style.display = 'inline-block';
    showAnswerButton.style.display = 'inline-block';
    resultContainer.innerHTML = `You scored ${score} out of ${quizData.length}!`;
  }
  
  function retryQuiz() {
    currentQuestion = 0;
    score = 0;
    incorrectAnswers = [];
    quizContainer.style.display = 'block';
    submitButton.style.display = 'inline-block';
    retryButton.style.display = 'none';
    showAnswerButton.style.display = 'none';
    resultContainer.innerHTML = '';
    displayQuestion();
  }
  
  function showAnswer() {
    quizContainer.style.display = 'none';
    submitButton.style.display = 'none';
    retryButton.style.display = 'inline-block';
    showAnswerButton.style.display = 'none';
  
    let incorrectAnswersHtml = '';
    for (let i = 0; i < incorrectAnswers.length; i++) {
      incorrectAnswersHtml += `
        <p>
          <strong>Question:</strong> ${incorrectAnswers[i].question}<br>
          <strong>Your Answer:</strong> ${incorrectAnswers[i].incorrectAnswer}<br>
          <strong>Correct Answer:</strong> ${incorrectAnswers[i].correctAnswer}
        </p>
      `;
    }
  
    resultContainer.innerHTML = `
      <p>You scored ${score} out of ${quizData.length}!</p>
      <p>Incorrect Answers:</p>
      ${incorrectAnswersHtml}
    `;
  }
  
  submitButton.addEventListener('click', checkAnswer);
  retryButton.addEventListener('click', retryQuiz);
  showAnswerButton.addEventListener('click', showAnswer);
  
  displayQuestion();
  
  
  
  
  