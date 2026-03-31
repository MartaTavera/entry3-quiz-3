// ─── JESSIE EXAM QUESTIONS: SECTION A & B ──────────────────────────────────

export const questions = [

  // ── Section A – Non-calculator (Jessie) ───────────────────────────────────

  {
    id: "A1", sec: "A", marks: 2, type: "number",
    text: "Milo wants to make his house safer.\n\nLast year 127 houses in his town had security cameras.\n\nThis year 205 houses have security cameras.\n\nHow many more houses have security cameras this year than last year?",
    workingBox: true,
    hint: "Subtract last year's amount from this year's amount.",
    answer: 78, displayAnswer: "78 houses",
    suffix: "houses",
    explanation: "205 − 127 = 78 more houses this year.",
  },

  {
    id: "A2", sec: "A", marks: 2, type: "yesno",
    text: "There are 126 houses in a street.\n\nThere are alarm systems in 1/3 of these houses.\n\nMilo thinks that 41 houses have an alarm system.\n\nIs he correct?\n\nShow why you think this.",
    workingBox: true,
    hint: "Calculate 1/3 of 126 and compare to 41.",
    answer: "No", displayAnswer: "No",
    explanation: "1/3 of 126 = 42 houses, not 41. So Milo is incorrect.",
  },

  {
    id: "A3", sec: "A", marks: 3, type: "twonumber",
    text: "Milo buys an alarm system for his house.\n\nThe system costs £362.\n\nMilo pays £32 each month for the system.\n\nThe final payment is a different amount.\n\nWhat is the greatest number of monthly payments of £32 that Milo needs to pay?\n\nHow much does Milo pay in the final payment?",
    workingBox: true,
    hint: "Divide £362 by £32. The whole number is the monthly payments; the remainder (in pence converted) is the final payment.",
    labels: ["monthly payments", "final payment £"],
    answer: [11, 10], displayAnswer: "11 monthly payments, £10 final payment",
    explanation: "£362 ÷ £32 = 11 remainder £10. So 11 full payments of £32 and a final payment of £10.",
  },

  {
    id: "A4", sec: "A", marks: 2, type: "number",
    text: "Milo buys insurance.\n\nHe pays £27 each month.\n\nHow much does Milo pay in total for 12 months of insurance?",
    workingBox: true,
    hint: "Multiply £27 by 12.",
    answer: 324, displayAnswer: "£324",
    suffix: "£",
    explanation: "£27 × 12 = £324",
  },

  // ── Section B – Calculator (Jessie) ────────────────────────────────────────

  {
    id: "B1", sec: "B", marks: 2, type: "text",
    image: "B_Q1.png", imgSrc: "images/B_Q1.png",
    text: "Jessie puts alarm systems in houses.\n\nThe clock shows the time she starts work in the morning.\n\nWhat time does Jessie start work?\n\nUse correct time format.",
    hint: "Read the hour and minute hands on the clock.",
    answer: null,
    check: v => /^(0?[0-9]|1[0-2]):[0-5][0-9](\s?(am|pm))?$/i.test(v.trim()),
    displayAnswer: "09:30 (or 9:30 am)",
    explanation: "Read the clock: hour hand points between 9 and 10, minute hand points at 6 (30 minutes).",
  },

  {
    id: "B2", sec: "B", marks: 1, type: "choice",
    image: "B_Q2.png", imgSrc: "images/B_Q2.png",
    text: "Jessie is looking at a house.\n\nIn which direction is Jessie looking?",
    hint: "Use the compass arrow marked 'North' to help.",
    options: ["North", "North east", "South", "North west", "East", "South east", "West", "South west"],
    answer: "South east", displayAnswer: "South east",
    explanation: "The arrow from Jessie to the house points southeast.",
  },

  {
    id: "B3", sec: "B", marks: 1, type: "text",
    image: "B_Q3.png", imgSrc: "images/B_Q3.png",
    text: "The diagram shows how to switch off the electricity in the house.\n\nJessie turns the handle to switch off the electricity.\n\nWhat fraction does Jessie turn the handle?",
    hint: "Look at how far the handle moves from ON to OFF as a fraction of a full turn.",
    answer: null,
    check: v => /^\d+\/\d+$/.test(v.trim()),
    displayAnswer: "1/4",
    explanation: "The handle rotates 1/4 of a complete circle from ON to OFF.",
  },

  {
    id: "B4", sec: "B", marks: 1, type: "choice",
    image: "B_Q4.png", imgSrc: "images/B_Q4.png",
    text: "Jessie chooses a control panel for the alarm system.\n\nThe panels have different shapes.\n\nWhich shape has exactly 2 right angles?",
    hint: "Count the right angles (90° corners) in each shape.",
    options: ["A", "B", "C", "D"],
    answer: "C", displayAnswer: "C",
    explanation: "Shape C (the trapezoid) has exactly 2 right angles.",
  },

  {
    id: "B5", sec: "B", marks: 1, type: "number",
    image: "B_Q5.png", imgSrc: "images/B_Q5.png",
    text: "Jessie measures the width of the panel.\n\nWhat is the width of the panel to the nearest cm?",
    hint: "Read where the arrow points on the ruler, then round to the nearest centimetre.",
    answer: 32, displayAnswer: "32 cm",
    suffix: "cm",
    explanation: "The arrow points to approximately 32 cm on the ruler.",
  },

  {
    id: "B6", sec: "B", marks: 1, type: "choice",
    text: "Jessie has lunch at quarter to two in the afternoon.\n\nWhich clock shows quarter to two in the afternoon?",
    hint: "Quarter to two pm in 24-hour time is 13:45.",
    options: ["01:45", "02:45", "13:15", "13:45", "14:15", "02:15"],
    answer: "13:45", displayAnswer: "13:45",
    explanation: "Quarter to two in the afternoon = 1:45 pm = 13:45 in 24-hour format.",
  },

  {
    id: "B7", sec: "B", marks: 2, type: "yesno",
    image: "B_Q7.png", imgSrc: "images/B_Q7.png",
    text: "Jessie has 2 cans of drink and 1 bottle of drink.\n\nDo 2 cans have more drink than 1 bottle?\n\nShow why you think this.",
    workingBox: true,
    hint: "Calculate the total volume in 2 cans, compare to 1 litre (1000 ml).",
    answer: "No", displayAnswer: "No",
    explanation: "2 cans = 440 ml + 440 ml = 880 ml. 1 bottle = 1000 ml. 880 ml < 1000 ml, so no.",
  },

  {
    id: "B8", sec: "B", marks: 1, type: "number",
    text: "Jessie puts garden lights at these distances from the house.\n\n5 m    17 m    29 m\n\nThe distances follow a pattern.\n\nWhat is the next distance in the pattern?",
    hint: "What number is added each time?",
    answer: 41, displayAnswer: "41 m",
    suffix: "m",
    explanation: "+12 each time: 5 + 12 = 17, 17 + 12 = 29, 29 + 12 = 41.",
  },

  {
    id: "B9", sec: "B", marks: 3, type: "number",
    text: "Jessie gets £29.70 for each hour she works.\n\nShe works for 6 hours on Monday.\n\nHow much does Jessie get in total on Monday?\n\nUse correct money format.",
    workingBox: true,
    hint: "Multiply £29.70 by 6 hours.",
    answer: 178.20, displayAnswer: "£178.20",
    suffix: "£",
    check: v => Math.abs(parseFloat(v.replace(/^£/, "")) - 178.20) < 0.01,
    explanation: "£29.70 × 6 = £178.20",
  },

  {
    id: "B10a", sec: "B", marks: 1, type: "number",
    text: "Round £29.70 to the nearest pound.",
    hint: "Look at the pence: 70p is more than 50p, so round up.",
    answer: 30, displayAnswer: "£30",
    suffix: "£",
    explanation: "£29.70 has 70p, which is ≥ 50p, so round up to £30.",
  },

  {
    id: "B10b", sec: "B", marks: 1, type: "text",
    text: "Use the rounded number to check your answer to question B9.",
    hint: "Multiply the rounded value (£30) by 6 and see if it's close to your answer.",
    answer: null,
    displayAnswer: "£30 × 6 = £180 (which is close to £178.20)",
    explanation: "Using £30 × 6 = £180 provides an approximate check of the exact answer £178.20.",
  },

  {
    id: "B11", sec: "B", marks: 2, type: "yesno",
    text: "Jessie put these alarm systems in houses.\n\nLast year: 134 alarm systems\nThis year: 193 alarm systems\n\nJessie thinks she put more than 340 alarm systems in houses in total.\n\nIs she correct?\n\nShow why you think this.",
    workingBox: true,
    hint: "Add 134 and 193, then compare to 340.",
    answer: "No", displayAnswer: "No",
    explanation: "134 + 193 = 327, which is less than 340. So Jessie is not correct.",
  },

  {
    id: "B12", sec: "B", marks: 1, type: "text",
    text: "Jessie gets these ratings from some customers.\n\nRating:  3.75    4.25    4.0    4.5    3.5\n\nWhich rating has the highest value?",
    hint: "Compare the decimal values: 3.75, 4.25, 4.0, 4.5, 3.5.",
    answer: null,
    check: v => /4\.5/.test(v.trim()),
    displayAnswer: "4.5",
    explanation: "4.5 is the largest of all the ratings listed.",
  },

  {
    id: "B13", sec: "B", marks: 3, type: "text",
    text: "Jessie has this information about the number of good ratings:\n\nOctober: 16\nNovember: 8\nDecember: 14\n\nShe wants to show this information on a line graph.\n\nComplete the line graph.",
    hint: "Plot the three points (October 16, November 8, December 14) and draw lines connecting them.",
    answer: null,
    displayAnswer: "Points plotted at Oct 16, Nov 8, Dec 14 with lines connecting them.",
    explanation: "Mark each point on the graph and join them with straight lines to show the trend.",
  },

  {
    id: "B14", sec: "B", marks: 1, type: "text",
    text: "The list shows the numbers of customers in the last five years.\n\n197    214    219    204    206\n\nPut these numbers in order starting with the greatest.",
    hint: "Arrange from largest to smallest.",
    answer: null,
    check: v => /219\s*,?\s*214\s*,?\s*206\s*,?\s*204\s*,?\s*197/.test(v.replace(/\s+/g, " ").trim()),
    displayAnswer: "219, 214, 206, 204, 197",
    explanation: "Ordered from greatest to least: 219 > 214 > 206 > 204 > 197.",
  },

  {
    id: "B15", sec: "B", marks: 3, type: "yesno",
    image: "B_Q15.png", imgSrc: "images/B_Q15.png",
    text: "The chart shows the number of customers in the first six months of this year.\n\nJessie thinks that the total number of customers in February and March was 50.\n\nIs Jessie correct?\n\nShow why you think this.",
    workingBox: true,
    hint: "Read the bar heights for February and March from the chart, add them, and compare to 50.",
    answer: "No", displayAnswer: "No",
    explanation: "From the chart: February ≈ 22, March ≈ 26. Total ≈ 48, not 50. Jessie is incorrect.",
  },

  {
    id: "B16", sec: "B", marks: 2, type: "table",
    text: "Jessie counts the type of alarm systems she puts in over a month.\n\nbasic     premium     standard     basic\nbasic     basic       standard     basic\nstandard  standard    premium      basic\nbasic     standard    standard     premium\n\nComplete the frequency table for the results.",
    hint: "Count how many times each type appears in the list.",
    tableData: {
      headers: ["Type of alarm system", "Frequency"],
      rows: [
        { label: "basic", value: null, given: false },
        { label: "premium", value: null, given: false },
        { label: "standard", value: null, given: false },
      ],
    },
    answer: { basic: 9, premium: 3, standard: 8 },
    displayAnswer: "basic: 9, premium: 3, standard: 8",
    explanation: "Count the tally: basic appears 9 times, premium 3 times, standard 8 times.",
  },

];