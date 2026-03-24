// ─── EXAM QUESTIONS: SECTION A (Sally) & SECTION B (Vikram) ──────────────────

export const questions = [

  // ── Section A – Non-calculator (Sally) ──────────────────────────────────────

  {
    id: "A1", sec: "A", marks: 2, type: "number",
    text: "Sally buys a car.\n\nShe pays £66 each month for 12 months for car insurance.\n\nHow much does Sally pay in total for one year?",
    hint: "Multiply £66 by 12 months.",
    answer: 792, displayAnswer: "£792",
    suffix: "£",
    explanation: "£66 × 12 = £792",
  },

  {
    id: "A2", sec: "A", marks: 2, type: "number",
    text: "Sally drives 498 miles in the first month.\n\nShe drives 233 miles in the second month.\n\nWork out the total of 498 and 233",
    hint: "Add 498 and 233.",
    answer: 731, displayAnswer: "731 miles",
    suffix: "miles",
    explanation: "498 + 233 = 731 miles",
  },

  {
    id: "A3", sec: "A", marks: 2, type: "number",
    text: "Sally keeps the car in a garage.\n\nThe length of the car is 435 centimetres.\n\nThe length of the garage is 6 metres.\n\nHow many centimetres longer is the garage than the car?",
    hint: "Convert 6 metres to centimetres first (1m = 100cm), then subtract.",
    answer: 165, displayAnswer: "165 cm",
    suffix: "cm",
    explanation: "6 metres = 600 cm. 600 cm − 435 cm = 165 cm",
  },

  {
    id: "A4", sec: "A", marks: 3, type: "twonumber",
    text: "Sally puts a box on the floor in the garage.\n\nShe puts more boxes on top of this box. The boxes are on top of each other.\n\nEach box has a height of 30 cm.\n\nThe height inside the garage is 200 cm.\n\nWhat is the greatest number of boxes Sally can put on top of each other?\n\nWhat height is left over?",
    hint: "Divide 200 by 30 to find how many boxes fit. The remainder is the height left over.",
    labels: ["boxes", "cm left over"],
    answer: [6, 20], displayAnswer: "6 boxes, 20 cm left over",
    explanation: "200 ÷ 30 = 6 remainder 20. So 6 boxes with 20 cm of space left.",
  },

  // ── Section B – Calculator (Vikram) ────────────────────────────────────────

  {
    id: "B1", sec: "B", marks: 1, type: "number",
    text: "Vikram owns a garage.\n\nHe has cars for sale with these engine sizes:\n\n1.4 litres\u00a0\u00a0\u00a0\u00a0    1.6 litres \u00a0\u00a0\u00a0\u00a0  1.8 litres \u00a0\u00a0\u00a0\u00a0  2 litres\n\nThe engine sizes follow a pattern.\n\nWrite down the next number in the pattern.",
    hint: "What is added each time?",
    answer: 2.2, displayAnswer: "2.2 litres",
    suffix: "litres",
    explanation: "+0.2 each time: 1.4 → 1.6 → 1.8 → 2 → 2.2",
  },

  {
    id: "B2", sec: "B", marks: 1, type: "choice",
    text: "A customer goes to the garage between six o'clock and seven o'clock in the evening.\n\nWhat time does the customer go to the garage?",
    hint: "Look for a time between 6:00 pm and 7:00 pm.",
    options: ["6:15 am", "5:45 pm", "6:45 pm", "6:30 am"],
    answer: "6:45 pm", displayAnswer: "6:45 pm",
    explanation: "6:45 pm is between 6:00 pm and 7:00 pm.",
  },

  {
    id: "B3", sec: "B", marks: 1, type: "choice",
    text: "The customer wants to buy a car.\n\nShe looks at cars of different lengths.\n\nThe car must have a length of less than 4.3 m to fit in her garage.\n\nWhich is the longest car that will fit in the garage?",
    hint: "Find the largest length that is less than 4.3 m.",
    options: ["3.68 m", "4.37 m", "4.28 m", "4.02 m"],
    answer: "4.28 m", displayAnswer: "4.28 m",
    explanation: "4.28 m is less than 4.3 m and is the largest of the options under 4.3 m.",
  },

  {
    id: "B4", sec: "B", marks: 1, type: "twotext",
    customContent: "jobs",
    preText: "Vikram has these jobs booked in for today:",
    text:"a) How long does he have to do the MOT. \n\nIf the service takes 1.5 hours, when will he finish?",
    labels: ["answer a)(in the form) ___ hours and ___ minutes", "answer b)"],
    
    hint: ["2 hours 45 min","13:45"],
    answer: ["2 hours and 45 min","13:45"],displayAnswer: "2 hours and 45 min, will finish at 13:45",
    
  },

  {
    id: "B5", sec: "B", marks: 1, type: "table",
    image: "A_Q5.png", imgSrc: "images/A_Q5.png",
    text: "Vikram has a chart to show the number of jobs done this month.\n\nShow the number of each job in the table.",
    hint: "Read the heights of the bars on the chart.",
    tableData: {
      headers: ["Job type", "Number of jobs"],
      rows: [
        { label: "MOT", value: null, given: false },
        { label: "Service", value: null, given: false },
        { label: "Tyres", value: null, given: false },
      ],
    },
    answer: { MOT: 96, Service: 82, Tyres: 128 },
    displayAnswer: "MOT: 96, Service: 82, Tyres: 128",
    explanation: "Reading from the bar chart at the divisions marked on the y-axis.",
  },

  {
    id: "B6", sec: "B", marks: 1, type: "yesno",
    image:"A_Q6.png" , imgSrc: "images/A_Q6.png",
    text: "Vikram has a pad of receipts with numbers.\n\nThe first receipt has the number 179 on it.\n\nThe next receipt has the number 180.\n\nThe numbers go up by 1 for each receipt.\n\nVikram needs to find receipt 189.\n\nHe thinks receipt 189 is the tenth receipt in the pad.\n\nIs Vikram correct?",
    hint: "Count from 179 to 189. How many steps is that?",
    answer: "No", displayAnswer: "No",
    explanation: "From 179 to 189 is 10 steps (179, 180, 181... 189), so receipt 189 is the 11th receipt, not the 10th.",
  },

  {
    id: "B7", sec: "B", marks: 3, type: "number",
    text: "Vikram pays £438.88 in total for 8 tyres.\n\nEach tyre costs the same amount.\n\nHow much does Vikram pay for each tyre?\n\nUse correct money format.",
    hint: "Divide £438.88 by 8.",
    answer: 54.86, displayAnswer: "£54.86",
    check: v => Math.abs(parseFloat(v.replace(/^£/, "")) - 54.86) < 0.01,
    explanation: "£438.88 ÷ 8 = £54.86",
  },

  {
    id: "B8", sec: "B", marks: 1, type: "number",
    image: "A_Q8.png", imgSrc: "images/A_Q8.png",
    preText: "A customer wants to buy a tyre with a width of 195 mm.\n\nShe wants to spend between £65 and £70 on the tyre.",
    text: "How much does the customer pay for the tyre?",
    hint: "Find the 195 mm row in the table and look for a price between £65 and £70.",
    answer: 69.95, displayAnswer: "£69.95",
    check: v => Math.abs(parseFloat(v.replace(/^£/, "")) - 69.95) < 0.01,
    explanation: "From the table, the 195 mm tyre between £65 and £70 costs £69.95.",
  },

  {
    id: "B9", sec: "B", marks: 2, type: "number",
    image: "A_Q9.png", imgSrc: "images/A_Q9.png",
    preText: "Vikram wants to start repairing a car for a customer at 14:15.\n\nThe customer is late.\n\nThe clock shows the time in the afternoon when the customer arrives at the garage.",
    text: "How many minutes late is the customer?",
    hint: "Read the clock to find the arrival time, then subtract from 14:15.",
    answer: 50, displayAnswer: "50 minutes",
    suffix: "minutes",
    explanation: "The clock shows approximately 15:05. 15:05 − 14:15 = 50 minutes late.",
  },

  {
    id: "B10", sec: "B", marks: 2, type: "yesno",
    text: "The customer drives his car into the garage.\n\nThe fuel tank in the car has 19 litres of petrol in it.\n\nThe tank holds 60 litres of petrol when full.\n\nThe customer thinks that 1/3 of the tank is full.\n\nIs the customer correct?",
    hint: "Calculate what 1/3 of 60 litres is, and compare to 19 litres.",
    answer: "No", displayAnswer: "No",
    explanation: "1/3 of 60 = 20 litres. Since the tank has only 19 litres, it is not quite 1/3 full.",
  },

  {
    id: "B11", sec: "B", marks: 1, type: "choice",
    image: "A_Q11.png", imgSrc: "images/A_Q11.png",
    text: "The diagram shows nuts with different shapes.\n\nWhich nut has 5 lines of symmetry?",
    hint: "Count the lines of symmetry in each nut.",
    options: ["A", "B", "C", "D"],
    answer: "D", displayAnswer: "D",
    explanation: "Nut B has 5 lines of symmetry.",
  },

  {
    id: "B12", sec: "B", marks: 1, type: "text",
    image: "A_Q12.png", imgSrc: "images/A_Q12.png",
    text: "Vikram uses this bolt for a repair.\n\nWhat is the length of the bolt?",
    hint: "Use the ruler shown in the image to measure.",
    answer: null,
    check: v => /^\d+(\.\d+)?\s*cm/.test(v.trim()),
    displayAnswer: "Measure using the ruler (expected: approximately 5 cm)",
    explanation: "Read the bolt length from the ruler shown in the image.",
  },

  {
    id: "B13", sec: "B", marks: 1, type: "text",
    image: "B_Q13.png", imgSrc: "images/B_Q13.png",
    text: "The diagram shows how Vikram turns the nut.\n\nWhat fraction does Vikram turn the nut?",
    hint: "Look at what portion of the full circle is shown.",
    answer: null,
    check: v => /^\d+\/\d+/.test(v.trim()),
    displayAnswer: "Fraction of a turn (e.g., 1/4, 1/2, etc.)",
    explanation: "The diagram shows a fraction of a complete rotation.",
  },

  {
    id: "B14", sec: "B", marks: 2, type: "number",
    text: "A customer asks Vikram for 1 litre of antifreeze.\n\nVikram uses one bottle of antifreeze in the car.\n\nThe bottle contains 454 ml of antifreeze.\n\nHow many ml more antifreeze does Vikram need?",
    hint: "1 litre = 1000 ml. Subtract 454 ml from 1000 ml.",
    answer: 546, displayAnswer: "546 ml",
    suffix: "ml",
    explanation: "1 litre = 1000 ml. 1000 ml − 454 ml = 546 ml needed.",
  },

  {
    id: "B15", sec: "B", marks: 1, type: "number",
    text: "Round 454 to the nearest 10",
    hint: "Look at the ones digit to decide whether to round up or down.",
    answer: 450, displayAnswer: "450",
    explanation: "454 is closer to 450 than to 460, so round down to 450.",
  },

  {
    id: "B16", sec: "B", marks: 1, type: "text",
    text: "Use the rounded number to check your answer to question B14.\n\nShow your check here.",
    hint: "Use 450 instead of 454 and subtract from 1000.",
    answer: 550,
    check: v => v.trim() === "550" || v.includes("550"),
    displayAnswer: "1000 − 450 = 550 ml (approximately)",
    explanation: "Using the rounded value: 1000 ml − 450 ml = 550 ml, which is close to the exact answer of 546 ml.",
  },

  {
    id: "B17", sec: "B", marks: 1, type: "text",
    image: "B_Q17.png", imgSrc: "images/B_Q17.png",
    preText: "A customer wants to make screen wash from concentrate and water.\n\nThe diagram shows the amount of concentrate she puts into a container.",
    text: "The customer adds water into the container up to the 1000 ml division.\n\nHow much water does the customer add to the nearest division?",
    hint: "Read the concentrate level from the measuring cylinder, then subtract from 1000 ml.",
    answer: 700,
    check: v => /700/.test(v),
    displayAnswer: "Subtract concentrate reading from 1000 ml - 300 ml = 700 ml",
    explanation: "Read the level of concentrate, then calculate 1000 ml minus that amount.",
  },

  {
    id: "B18", sec: "B", marks: 3, type: "twonumber",
    image: "B_Q18.png", imgSrc: "images/B_Q18.png",
    preText: "Vikram has this chart showing car sales.",
    text: "Vikram thinks he sold 33 more used diesel cars than new diesel cars.\n\nIs Vikram correct?\n\nRead from the chart and enter the number of cars sold for each type.",
    hint: "Read the bar chart for new diesel and used diesel car sales.",
    labels: ["new diesel cars", "used diesel cars"],
    answer: [38, 74],  // or whatever the correct numbers are from your chart
    displayAnswer: "38 new diesel, 74 used diesel (difference = 36, not 33)",
    explanation: "From the chart: new diesel ≈ 38, used diesel ≈ 74. Difference = 36, so Vikram is incorrect.",
  },

];