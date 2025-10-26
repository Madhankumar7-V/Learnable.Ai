// Learnable.ai — Gamified Learning Platform
// Subject/Grade/Unit-tagged question bank (expanded for full coverage)
const QUESTIONS = [
  // Class 6 Math — Number Systems & Basic Operations
  { id: 'm6_q1', grade: 6, subject: 'Math', unit: 'Number Systems', q: 'What is the place value of 7 in 7,532?', opts: ['7','70','700','7000'], answer: 3, difficulty: 'easy', xp: 10 },
  { id: 'm6_q2', grade: 6, subject: 'Math', unit: 'HCF & LCM', q: 'LCM of 4 and 6 is?', opts: ['8','10','12','14'], answer: 2, difficulty: 'easy', xp: 10, hint: 'List multiples: 4→4,8,12; 6→6,12', explain: '12 is the smallest common multiple of 4 and 6.' },
  { id: 'm6_q3', grade: 6, subject: 'Math', unit: 'Number Systems', q: 'What is the face value of 5 in 5,432?', opts: ['5','50','500','5000'], answer: 0, difficulty: 'easy', xp: 10 },
  { id: 'm6_q4', grade: 6, subject: 'Math', unit: 'HCF & LCM', q: 'HCF of 12 and 18 is?', opts: ['6','12','18','36'], answer: 0, difficulty: 'easy', xp: 10 },
  { id: 'm6_q5', grade: 6, subject: 'Math', unit: 'Number Systems', q: 'Which is the smallest 4-digit number?', opts: ['1000','1001','999','9999'], answer: 0, difficulty: 'easy', xp: 10 },
  { id: 'm6_q6', grade: 6, subject: 'Math', unit: 'Basic Operations', q: '15 + 27 = ?', opts: ['32','42','52','62'], answer: 1, difficulty: 'easy', xp: 10 },
  { id: 'm6_q7', grade: 6, subject: 'Math', unit: 'Basic Operations', q: '45 - 18 = ?', opts: ['27','37','47','57'], answer: 0, difficulty: 'easy', xp: 10 },
  { id: 'm6_q8', grade: 6, subject: 'Math', unit: 'Basic Operations', q: '8 × 7 = ?', opts: ['56','54','58','52'], answer: 0, difficulty: 'easy', xp: 10 },
  { id: 'm6_q9', grade: 6, subject: 'Math', unit: 'Basic Operations', q: '63 ÷ 9 = ?', opts: ['6','7','8','9'], answer: 1, difficulty: 'easy', xp: 10 },
  { id: 'm6_q10', grade: 6, subject: 'Math', unit: 'Fractions', q: 'What is 1/2 of 20?', opts: ['10','5','15','25'], answer: 0, difficulty: 'easy', xp: 10 },
  // Class 7 Math — Integers & Fractions
  { id: 'm7_q1', grade: 7, subject: 'Math', unit: 'Integers', q: '(-3) + 7 = ?', opts: ['-10','4','10','-4'], answer: 1, difficulty: 'easy', xp: 10 },
  { id: 'm7_q2', grade: 7, subject: 'Math', unit: 'Fractions', q: '2/3 of 9 is?', opts: ['3','4','5','6'], answer: 3, difficulty: 'easy', xp: 10 },
  { id: 'm7_q3', grade: 7, subject: 'Math', unit: 'Integers', q: '(-5) - (-3) = ?', opts: ['-8','-2','2','8'], answer: 1, difficulty: 'easy', xp: 10 },
  { id: 'm7_q4', grade: 7, subject: 'Math', unit: 'Fractions', q: '3/4 + 1/4 = ?', opts: ['1','1/2','3/8','4/8'], answer: 0, difficulty: 'easy', xp: 10 },
  { id: 'm7_q5', grade: 7, subject: 'Math', unit: 'Integers', q: '(-2) × 4 = ?', opts: ['-8','8','-6','6'], answer: 0, difficulty: 'easy', xp: 10 },
  { id: 'm7_q6', grade: 7, subject: 'Math', unit: 'Fractions', q: '5/6 - 1/6 = ?', opts: ['4/6','2/3','1/3','1/6'], answer: 1, difficulty: 'easy', xp: 10 },
  { id: 'm7_q7', grade: 7, subject: 'Math', unit: 'Integers', q: '(-12) ÷ 3 = ?', opts: ['-4','4','-9','9'], answer: 0, difficulty: 'easy', xp: 10 },
  { id: 'm7_q8', grade: 7, subject: 'Math', unit: 'Fractions', q: '2/5 × 3/4 = ?', opts: ['6/20','5/9','3/10','6/9'], answer: 0, difficulty: 'medium', xp: 15 },
  { id: 'm7_q9', grade: 7, subject: 'Math', unit: 'Integers', q: 'Which is greater: -8 or -3?', opts: ['-8','-3','Equal','Cannot compare'], answer: 1, difficulty: 'easy', xp: 10 },
  { id: 'm7_q10', grade: 7, subject: 'Math', unit: 'Fractions', q: 'Convert 0.75 to fraction', opts: ['3/4','1/4','2/3','4/5'], answer: 0, difficulty: 'easy', xp: 10 },
  // Class 8 Math — Exponents & Algebra
  { id: 'm8_q1', grade: 8, subject: 'Math', unit: 'Exponents', q: 'Simplify: 2^3 × 2^2', opts: ['2^5','2^6','2^4','2^3'], answer: 0, difficulty: 'medium', xp: 15, hint: 'a^m × a^n = a^(m+n)', explain: '2^3 × 2^2 = 2^(3+2) = 2^5.' },
  { id: 'm8_q2', grade: 8, subject: 'Math', unit: 'Linear Equations', q: 'Solve: x + 7 = 12', opts: ['4','5','6','7'], answer: 1, difficulty: 'easy', xp: 10 },
  { id: 'm8_q3', grade: 8, subject: 'Math', unit: 'Exponents', q: 'Simplify: 3^4 ÷ 3^2', opts: ['3^2','3^6','3^8','3^1'], answer: 0, difficulty: 'medium', xp: 15 },
  { id: 'm8_q4', grade: 8, subject: 'Math', unit: 'Linear Equations', q: 'Solve: 2x - 5 = 11', opts: ['8','6','7','9'], answer: 0, difficulty: 'medium', xp: 15 },
  { id: 'm8_q5', grade: 8, subject: 'Math', unit: 'Algebra', q: 'Expand: (x + 2)(x + 3)', opts: ['x² + 5x + 6','x² + 6x + 5','x² + 5x + 5','x² + 6x + 6'], answer: 0, difficulty: 'medium', xp: 15 },
  { id: 'm8_q6', grade: 8, subject: 'Math', unit: 'Algebra', q: 'Factorize: x² - 9', opts: ['(x-3)(x+3)','(x-3)(x-3)','(x+3)(x+3)','(x-9)(x+1)'], answer: 0, difficulty: 'medium', xp: 15 },
  { id: 'm8_q7', grade: 8, subject: 'Math', unit: 'Geometry', q: 'Sum of angles in a quadrilateral is', opts: ['180°','270°','360°','450°'], answer: 2, difficulty: 'easy', xp: 10 },
  { id: 'm8_q8', grade: 8, subject: 'Math', unit: 'Geometry', q: 'Area of rectangle = length × ?', opts: ['width','height','breadth','All of the above'], answer: 3, difficulty: 'easy', xp: 10 },
  { id: 'm8_q9', grade: 8, subject: 'Math', unit: 'Statistics', q: 'Mean of 2, 4, 6, 8 is', opts: ['4','5','6','7'], answer: 1, difficulty: 'easy', xp: 10 },
  { id: 'm8_q10', grade: 8, subject: 'Math', unit: 'Statistics', q: 'Mode of 1, 2, 2, 3, 4 is', opts: ['1','2','3','4'], answer: 1, difficulty: 'easy', xp: 10 },
  // Class 9 Math — Linear Equations & Geometry
  { id: 'm9_q1', grade: 9, subject: 'Math', unit: 'Linear Equations', q: 'Slope of y = 3x + 2 is', opts: ['2','3','-3','1/3'], answer: 1, difficulty: 'medium', xp: 15 },
  { id: 'm9_q2', grade: 9, subject: 'Math', unit: 'Triangles', q: 'Sum of angles in a triangle is', opts: ['90°','180°','270°','360°'], answer: 1, difficulty: 'easy', xp: 10 },
  { id: 'm9_q3', grade: 9, subject: 'Math', unit: 'Linear Equations', q: 'Y-intercept of y = 2x + 5 is', opts: ['2','5','-5','-2'], answer: 1, difficulty: 'medium', xp: 15 },
  { id: 'm9_q4', grade: 9, subject: 'Math', unit: 'Triangles', q: 'Pythagorean theorem: a² + b² = ?', opts: ['c²','2c','c','c/2'], answer: 0, difficulty: 'medium', xp: 15 },
  { id: 'm9_q5', grade: 9, subject: 'Math', unit: 'Geometry', q: 'Area of circle = π × ?', opts: ['r','r²','2r','d'], answer: 1, difficulty: 'medium', xp: 15 },
  { id: 'm9_q6', grade: 9, subject: 'Math', unit: 'Geometry', q: 'Circumference of circle = 2π × ?', opts: ['r','r²','d','d²'], answer: 0, difficulty: 'medium', xp: 15 },
  { id: 'm9_q7', grade: 9, subject: 'Math', unit: 'Statistics', q: 'Median of 1, 3, 5, 7, 9 is', opts: ['3','5','7','4'], answer: 1, difficulty: 'easy', xp: 10 },
  { id: 'm9_q8', grade: 9, subject: 'Math', unit: 'Statistics', q: 'Range of 2, 5, 8, 11, 14 is', opts: ['12','10','8','6'], answer: 0, difficulty: 'easy', xp: 10 },
  { id: 'm9_q9', grade: 9, subject: 'Math', unit: 'Probability', q: 'Probability of getting head in coin toss', opts: ['0.5','0.25','0.75','1'], answer: 0, difficulty: 'easy', xp: 10 },
  { id: 'm9_q10', grade: 9, subject: 'Math', unit: 'Probability', q: 'Probability of getting 6 on dice', opts: ['1/6','1/3','1/2','1'], answer: 0, difficulty: 'easy', xp: 10 },
  // Class 10 Math — Quadratics & Trigonometry
  { id: 'm10_q1', grade: 10, subject: 'Math', unit: 'Quadratic Equations', q: 'Discriminant of ax^2+bx+c is', opts: ['b^2-4ac','b^2+4ac','2ab','a^2-b^2'], answer: 0, difficulty: 'medium', xp: 15 },
  { id: 'm10_q2', grade: 10, subject: 'Math', unit: 'Trigonometry', q: 'sin(90°) =', opts: ['0','1','-1','1/2'], answer: 1, difficulty: 'easy', xp: 10, hint: 'Unit circle at 90°', explain: 'sin(90°)=1 by definition on the unit circle.' },
  { id: 'm10_q3', grade: 10, subject: 'Math', unit: 'Quadratic Equations', q: 'Roots of x² - 5x + 6 = 0 are', opts: ['2,3','1,6','-2,-3','-1,-6'], answer: 0, difficulty: 'medium', xp: 15 },
  { id: 'm10_q4', grade: 10, subject: 'Math', unit: 'Trigonometry', q: 'cos(0°) =', opts: ['0','1','-1','1/2'], answer: 1, difficulty: 'easy', xp: 10 },
  { id: 'm10_q5', grade: 10, subject: 'Math', unit: 'Trigonometry', q: 'tan(45°) =', opts: ['0','1','-1','1/2'], answer: 1, difficulty: 'easy', xp: 10 },
  { id: 'm10_q6', grade: 10, subject: 'Math', unit: 'Arithmetic Progressions', q: 'Common difference in 2, 5, 8, 11...', opts: ['2','3','5','8'], answer: 1, difficulty: 'easy', xp: 10 },
  { id: 'm10_q7', grade: 10, subject: 'Math', unit: 'Arithmetic Progressions', q: 'nth term of AP: a + (n-1)d', opts: ['True','False','Sometimes','Never'], answer: 0, difficulty: 'medium', xp: 15 },
  { id: 'm10_q8', grade: 10, subject: 'Math', unit: 'Coordinate Geometry', q: 'Distance between (0,0) and (3,4)', opts: ['5','7','12','25'], answer: 0, difficulty: 'medium', xp: 15 },
  { id: 'm10_q9', grade: 10, subject: 'Math', unit: 'Coordinate Geometry', q: 'Midpoint of (2,4) and (6,8)', opts: ['(4,6)','(3,5)','(5,7)','(6,4)'], answer: 0, difficulty: 'medium', xp: 15 },
  { id: 'm10_q10', grade: 10, subject: 'Math', unit: 'Surface Areas', q: 'Surface area of cube with side 2cm', opts: ['24 cm²','12 cm²','8 cm²','16 cm²'], answer: 0, difficulty: 'medium', xp: 15 },
  // Class 11 Math — Functions & Sets
  { id: 'm11_q1', grade: 11, subject: 'Math', unit: 'Sets & Relations', q: 'If A={1,2}, B={a,b}, then |A×B| is', opts: ['2','3','4','6'], answer: 2, difficulty: 'medium', xp: 15 },
  { id: 'm11_q2', grade: 11, subject: 'Math', unit: 'Functions', q: 'Domain of f(x)=1/x is', opts: ['R','R−{0}','R+','Z'], answer: 1, difficulty: 'medium', xp: 15 },
  { id: 'm11_q3', grade: 11, subject: 'Math', unit: 'Sets & Relations', q: 'A ∪ A = ?', opts: ['A','A²','∅','U'], answer: 0, difficulty: 'medium', xp: 15 },
  { id: 'm11_q4', grade: 11, subject: 'Math', unit: 'Functions', q: 'Range of f(x) = x² is', opts: ['R','R+','R-','[0,∞)'], answer: 3, difficulty: 'medium', xp: 15 },
  { id: 'm11_q5', grade: 11, subject: 'Math', unit: 'Trigonometry', q: 'sin²θ + cos²θ = ?', opts: ['0','1','2','sin(2θ)'], answer: 1, difficulty: 'medium', xp: 15 },
  { id: 'm11_q6', grade: 11, subject: 'Math', unit: 'Trigonometry', q: 'sin(2θ) = ?', opts: ['2sinθ','2sinθcosθ','sin²θ','cos²θ'], answer: 1, difficulty: 'medium', xp: 15 },
  { id: 'm11_q7', grade: 11, subject: 'Math', unit: 'Permutations', q: '5! = ?', opts: ['120','60','24','720'], answer: 0, difficulty: 'medium', xp: 15 },
  { id: 'm11_q8', grade: 11, subject: 'Math', unit: 'Combinations', q: 'C(5,2) = ?', opts: ['10','20','5','15'], answer: 0, difficulty: 'medium', xp: 15 },
  { id: 'm11_q9', grade: 11, subject: 'Math', unit: 'Binomial Theorem', q: 'Coefficient of x² in (1+x)⁵', opts: ['5','10','15','20'], answer: 1, difficulty: 'medium', xp: 15 },
  { id: 'm11_q10', grade: 11, subject: 'Math', unit: 'Sequences', q: 'Sum of first n natural numbers', opts: ['n(n+1)/2','n(n-1)/2','n²','2n'], answer: 0, difficulty: 'medium', xp: 15 },
  // Class 12 Math — Calculus & Probability
  { id: 'm12_q1', grade: 12, subject: 'Math', unit: 'Differentiation', q: 'd/dx (x^2) =', opts: ['x','2x','x^3','2'], answer: 1, difficulty: 'easy', xp: 10 },
  { id: 'm12_q2', grade: 12, subject: 'Math', unit: 'Probability', q: 'If P(A)=0.6, P(Ā)=', opts: ['0.6','0.3','0.4','0.2'], answer: 2, difficulty: 'easy', xp: 10 },
  { id: 'm12_q3', grade: 12, subject: 'Math', unit: 'Differentiation', q: 'd/dx (sin x) =', opts: ['cos x','-cos x','sin x','-sin x'], answer: 0, difficulty: 'medium', xp: 15 },
  { id: 'm12_q4', grade: 12, subject: 'Math', unit: 'Integration', q: '∫x dx =', opts: ['x²/2','x²','2x','x/2'], answer: 0, difficulty: 'medium', xp: 15 },
  { id: 'm12_q5', grade: 12, subject: 'Math', unit: 'Integration', q: '∫1 dx =', opts: ['x','x²','2x','0'], answer: 0, difficulty: 'easy', xp: 10 },
  { id: 'm12_q6', grade: 12, subject: 'Math', unit: 'Probability', q: 'P(A∩B) = P(A) × P(B) when', opts: ['Always','Never','A and B independent','A and B dependent'], answer: 2, difficulty: 'medium', xp: 15 },
  { id: 'm12_q7', grade: 12, subject: 'Math', unit: 'Vectors', q: 'Dot product of î and ĵ is', opts: ['0','1','-1','2'], answer: 0, difficulty: 'medium', xp: 15 },
  { id: 'm12_q8', grade: 12, subject: 'Math', unit: 'Vectors', q: 'Cross product of î and ĵ is', opts: ['k̂','-k̂','0','1'], answer: 0, difficulty: 'medium', xp: 15 },
  { id: 'm12_q9', grade: 12, subject: 'Math', unit: '3D Geometry', q: 'Distance between (0,0,0) and (1,1,1)', opts: ['√3','3','1','√2'], answer: 0, difficulty: 'medium', xp: 15 },
  { id: 'm12_q10', grade: 12, subject: 'Math', unit: 'Linear Programming', q: 'Objective function is', opts: ['Maximized','Minimized','Both','Neither'], answer: 2, difficulty: 'medium', xp: 15 },

  // Science (expanded across grades; Physics/Chemistry/Bio basics)
  { id: 's6_q1', grade: 6, subject: 'Science', unit: 'Plants', q: 'Plants prepare food by', opts: ['Respiration','Photosynthesis','Digestion','Transpiration'], answer: 1, difficulty: 'easy', xp: 10 },
  { id: 's6_q2', grade: 6, subject: 'Science', unit: 'Plants', q: 'Which part of plant makes food?', opts: ['Root','Stem','Leaf','Flower'], answer: 2, difficulty: 'easy', xp: 10 },
  { id: 's6_q3', grade: 6, subject: 'Science', unit: 'Animals', q: 'Which animal is herbivore?', opts: ['Lion','Tiger','Cow','Eagle'], answer: 2, difficulty: 'easy', xp: 10 },
  { id: 's6_q4', grade: 6, subject: 'Science', unit: 'Body', q: 'How many bones in adult human?', opts: ['206','306','106','406'], answer: 0, difficulty: 'easy', xp: 10 },
  { id: 's6_q5', grade: 6, subject: 'Science', unit: 'Materials', q: 'Which is a conductor?', opts: ['Wood','Plastic','Copper','Rubber'], answer: 2, difficulty: 'easy', xp: 10 },
  { id: 's7_q1', grade: 7, subject: 'Science', unit: 'Force & Motion', q: 'SI unit of force is', opts: ['Joule','Watt','Newton','Pascal'], answer: 2, difficulty: 'easy', xp: 10 },
  { id: 's7_q2', grade: 7, subject: 'Science', unit: 'Force & Motion', q: 'Speed = Distance ÷ ?', opts: ['Time','Mass','Force','Energy'], answer: 0, difficulty: 'easy', xp: 10 },
  { id: 's7_q3', grade: 7, subject: 'Science', unit: 'Heat', q: 'Heat flows from', opts: ['Cold to Hot','Hot to Cold','Both ways','No flow'], answer: 1, difficulty: 'easy', xp: 10 },
  { id: 's7_q4', grade: 7, subject: 'Science', unit: 'Light', q: 'Light travels in', opts: ['Curved lines','Straight lines','Zigzag','Circles'], answer: 1, difficulty: 'easy', xp: 10 },
  { id: 's7_q5', grade: 7, subject: 'Science', unit: 'Electricity', q: 'Current flows through', opts: ['Insulators','Conductors','Both','Neither'], answer: 1, difficulty: 'easy', xp: 10 },
  { id: 's8_q1', grade: 8, subject: 'Science', unit: 'Acids & Bases', q: 'Acids turn blue litmus to', opts: ['Blue','Green','Red','Yellow'], answer: 2, difficulty: 'easy', xp: 10 },
  { id: 's8_q2', grade: 8, subject: 'Science', unit: 'Acids & Bases', q: 'pH of neutral solution is', opts: ['0','7','14','10'], answer: 1, difficulty: 'easy', xp: 10 },
  { id: 's8_q3', grade: 8, subject: 'Science', unit: 'Metals', q: 'Which metal is liquid at room temperature?', opts: ['Iron','Mercury','Gold','Silver'], answer: 1, difficulty: 'easy', xp: 10 },
  { id: 's8_q4', grade: 8, subject: 'Science', unit: 'Combustion', q: 'Fire needs which gas?', opts: ['Nitrogen','Oxygen','Carbon dioxide','Hydrogen'], answer: 1, difficulty: 'easy', xp: 10 },
  { id: 's8_q5', grade: 8, subject: 'Science', unit: 'Sound', q: 'Sound travels fastest in', opts: ['Air','Water','Steel','Vacuum'], answer: 2, difficulty: 'easy', xp: 10 },
  { id: 's9_q1', grade: 9, subject: 'Science', unit: 'Motion', q: 'Acceleration formula is', opts: ['v/t','(v-u)/t','u/t','s/t'], answer: 1, difficulty: 'medium', xp: 15 },
  { id: 's9_q2', grade: 9, subject: 'Science', unit: 'Motion', q: 'Unit of acceleration is', opts: ['m/s','m/s²','m²/s','s/m'], answer: 1, difficulty: 'medium', xp: 15 },
  { id: 's9_q3', grade: 9, subject: 'Science', unit: 'Gravity', q: 'Value of g on Earth is', opts: ['9.8 m/s²','8.9 m/s²','10 m/s²','9.8 m/s'], answer: 0, difficulty: 'medium', xp: 15 },
  { id: 's9_q4', grade: 9, subject: 'Science', unit: 'Work', q: 'Work = Force × ?', opts: ['Distance','Time','Mass','Speed'], answer: 0, difficulty: 'medium', xp: 15 },
  { id: 's9_q5', grade: 9, subject: 'Science', unit: 'Energy', q: 'Unit of energy is', opts: ['Joule','Watt','Newton','Pascal'], answer: 0, difficulty: 'medium', xp: 15 },
  { id: 's10_q1', grade: 10, subject: 'Science', unit: 'Electricity', q: 'Ohm\'s law: V =', opts: ['IR','I/R','R/I','VI'], answer: 0, difficulty: 'medium', xp: 15 },
  { id: 's10_q2', grade: 10, subject: 'Science', unit: 'Electricity', q: 'Unit of electric current is', opts: ['Volt','Ampere','Ohm','Watt'], answer: 1, difficulty: 'medium', xp: 15 },
  { id: 's10_q3', grade: 10, subject: 'Science', unit: 'Light', q: 'Speed of light is', opts: ['3×10⁸ m/s','3×10⁶ m/s','3×10⁴ m/s','3×10² m/s'], answer: 0, difficulty: 'medium', xp: 15 },
  { id: 's10_q4', grade: 10, subject: 'Science', unit: 'Reflection', q: 'Angle of incidence = Angle of ?', opts: ['Reflection','Refraction','Diffraction','Dispersion'], answer: 0, difficulty: 'medium', xp: 15 },
  { id: 's10_q5', grade: 10, subject: 'Science', unit: 'Human Eye', q: 'Retina contains', opts: ['Rods and Cones','Lens','Cornea','Iris'], answer: 0, difficulty: 'medium', xp: 15 },
  { id: 's11_q1', grade: 11, subject: 'Science', unit: 'Mole Concept', q: 'Avogadro number is ~', opts: ['6.02×10²³','3.14','9.8','1.6×10⁻¹⁹'], answer: 0, difficulty: 'medium', xp: 15 },
  { id: 's11_q2', grade: 11, subject: 'Science', unit: 'Atomic Structure', q: 'Electron has charge', opts: ['Positive','Negative','Neutral','Variable'], answer: 1, difficulty: 'medium', xp: 15 },
  { id: 's11_q3', grade: 11, subject: 'Science', unit: 'Chemical Bonding', q: 'Ionic bond forms between', opts: ['Metals','Non-metals','Metal and Non-metal','Same elements'], answer: 2, difficulty: 'medium', xp: 15 },
  { id: 's11_q4', grade: 11, subject: 'Science', unit: 'Thermodynamics', q: 'First law of thermodynamics is about', opts: ['Energy conservation','Entropy','Temperature','Pressure'], answer: 0, difficulty: 'medium', xp: 15 },
  { id: 's11_q5', grade: 11, subject: 'Science', unit: 'Organic Chemistry', q: 'Methane has how many carbon atoms?', opts: ['1','2','3','4'], answer: 0, difficulty: 'medium', xp: 15 },
  { id: 's12_q1', grade: 12, subject: 'Science', unit: 'Genetics', q: 'DNA stands for', opts: ['Ribonucleic Acid','Deoxyribonucleic Acid','Dinucleic Acid','None'], answer: 1, difficulty: 'easy', xp: 10 },
  { id: 's12_q2', grade: 12, subject: 'Science', unit: 'Genetics', q: 'DNA bases are', opts: ['A,T,G,C','A,U,G,C','A,T,G,U','T,U,G,C'], answer: 0, difficulty: 'medium', xp: 15 },
  { id: 's12_q3', grade: 12, subject: 'Science', unit: 'Evolution', q: 'Theory of evolution by', opts: ['Darwin','Newton','Einstein','Pasteur'], answer: 0, difficulty: 'medium', xp: 15 },
  { id: 's12_q4', grade: 12, subject: 'Science', unit: 'Biotechnology', q: 'PCR stands for', opts: ['Polymerase Chain Reaction','Protein Chain Reaction','Polymer Chain Reaction','None'], answer: 0, difficulty: 'medium', xp: 15 },
  { id: 's12_q5', grade: 12, subject: 'Science', unit: 'Ecology', q: 'Primary producers are', opts: ['Herbivores','Carnivores','Plants','Decomposers'], answer: 2, difficulty: 'medium', xp: 15 },

  // English (expanded Grammar/Literature basics)
  { id: 'e6_q1', grade: 6, subject: 'English', unit: 'Parts of Speech', q: 'Choose the noun: The cat sleeps.', opts: ['Choose','cat','sleeps','.'], answer: 1, difficulty: 'easy', xp: 10 },
  { id: 'e6_q2', grade: 6, subject: 'English', unit: 'Parts of Speech', q: 'Identify the verb: Birds fly high.', opts: ['Birds','fly','high','.'], answer: 1, difficulty: 'easy', xp: 10 },
  { id: 'e6_q3', grade: 6, subject: 'English', unit: 'Grammar', q: 'Choose correct article: ___ apple', opts: ['A','An','The','No article'], answer: 1, difficulty: 'easy', xp: 10 },
  { id: 'e6_q4', grade: 6, subject: 'English', unit: 'Grammar', q: 'Plural of "child" is', opts: ['childs','children','childes','child'], answer: 1, difficulty: 'easy', xp: 10 },
  { id: 'e6_q5', grade: 6, subject: 'English', unit: 'Vocabulary', q: 'Synonym of "happy"', opts: ['Sad','Joyful','Angry','Afraid'], answer: 1, difficulty: 'easy', xp: 10 },
  { id: 'e7_q1', grade: 7, subject: 'English', unit: 'Tenses', q: 'Present tense of "went"', opts: ['go','goes','going','gone'], answer: 0, difficulty: 'easy', xp: 10 },
  { id: 'e7_q2', grade: 7, subject: 'English', unit: 'Tenses', q: 'Past tense of "run"', opts: ['runs','running','ran','runned'], answer: 2, difficulty: 'easy', xp: 10 },
  { id: 'e7_q3', grade: 7, subject: 'English', unit: 'Grammar', q: 'Which is a pronoun?', opts: ['Beautiful','Quickly','She','Running'], answer: 2, difficulty: 'easy', xp: 10 },
  { id: 'e7_q4', grade: 7, subject: 'English', unit: 'Grammar', q: 'Which is an adjective?', opts: ['Quickly','Beautiful','Running','She'], answer: 1, difficulty: 'easy', xp: 10 },
  { id: 'e7_q5', grade: 7, subject: 'English', unit: 'Vocabulary', q: 'Antonym of "big"', opts: ['Large','Small','Huge','Giant'], answer: 1, difficulty: 'easy', xp: 10 },
  { id: 'e8_q1', grade: 8, subject: 'English', unit: 'Voice', q: 'Active voice: The cat caught the mouse.', opts: ['The mouse was caught by the cat.','The mouse is caught by the cat.','The mouse caught the cat.','The cat was caught by the mouse.'], answer: 0, difficulty: 'medium', xp: 15 },
  { id: 'e8_q2', grade: 8, subject: 'English', unit: 'Voice', q: 'Passive voice: They built the house.', opts: ['The house was built by them.','The house is built by them.','The house built them.','They were built by the house.'], answer: 0, difficulty: 'medium', xp: 15 },
  { id: 'e8_q3', grade: 8, subject: 'English', unit: 'Grammar', q: 'Which is a conjunction?', opts: ['And','Beautiful','Quickly','Running'], answer: 0, difficulty: 'easy', xp: 10 },
  { id: 'e8_q4', grade: 8, subject: 'English', unit: 'Grammar', q: 'Which is an adverb?', opts: ['Beautiful','Quickly','Running','She'], answer: 1, difficulty: 'easy', xp: 10 },
  { id: 'e8_q5', grade: 8, subject: 'English', unit: 'Vocabulary', q: 'Meaning of "enormous"', opts: ['Small','Tiny','Huge','Medium'], answer: 2, difficulty: 'medium', xp: 15 },
  { id: 'e9_q1', grade: 9, subject: 'English', unit: 'Literature', q: 'Who wrote "Romeo and Juliet"?', opts: ['Shakespeare','Dickens','Tolstoy','Hemingway'], answer: 0, difficulty: 'medium', xp: 15 },
  { id: 'e9_q2', grade: 9, subject: 'English', unit: 'Literature', q: 'Genre of "Romeo and Juliet"', opts: ['Comedy','Tragedy','Drama','Mystery'], answer: 1, difficulty: 'medium', xp: 15 },
  { id: 'e9_q3', grade: 9, subject: 'English', unit: 'Grammar', q: 'Which is a preposition?', opts: ['In','Beautiful','Quickly','Running'], answer: 0, difficulty: 'easy', xp: 10 },
  { id: 'e9_q4', grade: 9, subject: 'English', unit: 'Grammar', q: 'Which is an interjection?', opts: ['Oh','Beautiful','Quickly','Running'], answer: 0, difficulty: 'easy', xp: 10 },
  { id: 'e9_q5', grade: 9, subject: 'English', unit: 'Vocabulary', q: 'Meaning of "meticulous"', opts: ['Careless','Careful','Quick','Slow'], answer: 1, difficulty: 'medium', xp: 15 },
  { id: 'e10_q1', grade: 10, subject: 'English', unit: 'Voice Change', q: 'Passive of: She wrote a letter.', opts: ['A letter is written by her.','A letter was written by her.','A letter has written by her.','A letter were written by her.'], answer: 1, difficulty: 'medium', xp: 15 },
  { id: 'e10_q2', grade: 10, subject: 'English', unit: 'Voice Change', q: 'Active of: The book was read by him.', opts: ['He read the book.','He reads the book.','He is reading the book.','He will read the book.'], answer: 0, difficulty: 'medium', xp: 15 },
  { id: 'e10_q3', grade: 10, subject: 'English', unit: 'Grammar', q: 'Which is a gerund?', opts: ['Running','Beautiful','Quickly','She'], answer: 0, difficulty: 'medium', xp: 15 },
  { id: 'e10_q4', grade: 10, subject: 'English', unit: 'Grammar', q: 'Which is an infinitive?', opts: ['To run','Beautiful','Quickly','Running'], answer: 0, difficulty: 'medium', xp: 15 },
  { id: 'e10_q5', grade: 10, subject: 'English', unit: 'Vocabulary', q: 'Meaning of "ubiquitous"', opts: ['Rare','Common','Everywhere','Nowhere'], answer: 2, difficulty: 'medium', xp: 15 },

  // History/Social Science (expanded)
  { id: 'h6_q1', grade: 6, subject: 'History', unit: 'Ancient India', q: 'Which river is called the cradle of Indian civilization?', opts: ['Ganga','Yamuna','Indus','Brahmaputra'], answer: 2, difficulty: 'easy', xp: 10 },
  { id: 'h6_q2', grade: 6, subject: 'History', unit: 'Ancient India', q: 'Harappan civilization was discovered in which year?', opts: ['1921','1931','1941','1951'], answer: 0, difficulty: 'easy', xp: 10 },
  { id: 'h6_q3', grade: 6, subject: 'History', unit: 'Medieval India', q: 'Who built the Red Fort?', opts: ['Akbar','Shah Jahan','Aurangzeb','Jahangir'], answer: 1, difficulty: 'easy', xp: 10 },
  { id: 'h7_q1', grade: 7, subject: 'History', unit: 'Medieval India', q: 'First Battle of Panipat was fought in', opts: ['1526','1536','1546','1556'], answer: 0, difficulty: 'easy', xp: 10 },
  { id: 'h7_q2', grade: 7, subject: 'History', unit: 'Medieval India', q: 'Who was the first Mughal Emperor?', opts: ['Akbar','Babur','Humayun','Jahangir'], answer: 1, difficulty: 'easy', xp: 10 },
  { id: 'h7_q3', grade: 7, subject: 'History', unit: 'Medieval India', q: 'Taj Mahal was built by', opts: ['Akbar','Shah Jahan','Aurangzeb','Jahangir'], answer: 1, difficulty: 'easy', xp: 10 },
  { id: 'h8_q1', grade: 8, subject: 'History', unit: 'Ancient India', q: 'Who founded the Maurya Empire?', opts: ['Ashoka','Chanakya','Chandragupta Maurya','Bindusara'], answer: 2, difficulty: 'easy', xp: 10 },
  { id: 'h8_q2', grade: 8, subject: 'History', unit: 'Ancient India', q: 'Ashoka belonged to which dynasty?', opts: ['Gupta','Maurya','Kushan','Pallava'], answer: 1, difficulty: 'easy', xp: 10 },
  { id: 'h8_q3', grade: 8, subject: 'History', unit: 'Medieval India', q: 'Battle of Plassey was fought in', opts: ['1757','1857','1947','1764'], answer: 0, difficulty: 'easy', xp: 10 },
  { id: 'h9_q1', grade: 9, subject: 'History', unit: 'Modern India', q: 'Who wrote the Indian Constitution?', opts: ['Dr. B.R. Ambedkar','Mahatma Gandhi','Jawaharlal Nehru','Sardar Patel'], answer: 0, difficulty: 'easy', xp: 10 },
  { id: 'h9_q2', grade: 9, subject: 'History', unit: 'Modern India', q: 'Quit India Movement started in', opts: ['1942','1947','1930','1920'], answer: 0, difficulty: 'easy', xp: 10 },
  { id: 'h9_q3', grade: 9, subject: 'History', unit: 'Modern India', q: 'Dandi March was led by', opts: ['Jawaharlal Nehru','Mahatma Gandhi','Subhash Chandra Bose','Bhagat Singh'], answer: 1, difficulty: 'easy', xp: 10 },
  { id: 'h10_q1', grade: 10, subject: 'History', unit: 'Nationalism in India', q: 'Year of Indian independence?', opts: ['1857','1905','1947','1950'], answer: 2, difficulty: 'easy', xp: 10 },
  { id: 'h10_q2', grade: 10, subject: 'History', unit: 'Nationalism in India', q: 'Partition of Bengal happened in', opts: ['1905','1915','1925','1935'], answer: 0, difficulty: 'easy', xp: 10 },
  { id: 'h10_q3', grade: 10, subject: 'History', unit: 'Nationalism in India', q: 'Jallianwala Bagh massacre happened in', opts: ['1919','1929','1939','1949'], answer: 0, difficulty: 'easy', xp: 10 },

  // Computer Science/IT (expanded)
  { id: 'cs6_q1', grade: 6, subject: 'Computer Science', unit: 'Computer Basics', q: 'CPU stands for', opts: ['Central Processing Unit','Control Processing Unit','Central Program Unit','Computer Personal Unit'], answer: 0, difficulty: 'easy', xp: 10 },
  { id: 'cs6_q2', grade: 6, subject: 'Computer Science', unit: 'Computer Basics', q: 'RAM stands for', opts: ['Random Access Memory','Read Access Memory','Rapid Access Memory','Real Access Memory'], answer: 0, difficulty: 'easy', xp: 10 },
  { id: 'cs6_q3', grade: 6, subject: 'Computer Science', unit: 'Computer Basics', q: 'Which is an input device?', opts: ['Monitor','Printer','Keyboard','Speaker'], answer: 2, difficulty: 'easy', xp: 10 },
  { id: 'cs7_q1', grade: 7, subject: 'Computer Science', unit: 'Software', q: 'Which is system software?', opts: ['Word','Excel','Windows','PowerPoint'], answer: 2, difficulty: 'easy', xp: 10 },
  { id: 'cs7_q2', grade: 7, subject: 'Computer Science', unit: 'Software', q: 'Which is application software?', opts: ['Windows','Linux','MS Word','DOS'], answer: 2, difficulty: 'easy', xp: 10 },
  { id: 'cs7_q3', grade: 7, subject: 'Computer Science', unit: 'Internet', q: 'WWW stands for', opts: ['World Wide Web','World Web Wide','Wide World Web','Web World Wide'], answer: 0, difficulty: 'easy', xp: 10 },
  { id: 'cs8_q1', grade: 8, subject: 'Computer Science', unit: 'Programming', q: 'Which is not a programming language?', opts: ['Python','HTML','Java','C++'], answer: 1, difficulty: 'easy', xp: 10 },
  { id: 'cs8_q2', grade: 8, subject: 'Computer Science', unit: 'Programming', q: 'Binary of 5 is', opts: ['101','100','111','110'], answer: 0, difficulty: 'easy', xp: 10 },
  { id: 'cs8_q3', grade: 8, subject: 'Computer Science', unit: 'Programming', q: 'Which is a high-level language?', opts: ['Assembly','Machine Code','Python','Binary'], answer: 2, difficulty: 'easy', xp: 10 },
  { id: 'cs9_q1', grade: 9, subject: 'Computer Science', unit: 'Data Structures', q: 'Which is a linear data structure?', opts: ['Tree','Graph','Array','Heap'], answer: 2, difficulty: 'medium', xp: 15 },
  { id: 'cs9_q2', grade: 9, subject: 'Computer Science', unit: 'Data Structures', q: 'LIFO principle is used in', opts: ['Queue','Stack','Array','List'], answer: 1, difficulty: 'medium', xp: 15 },
  { id: 'cs9_q3', grade: 9, subject: 'Computer Science', unit: 'Algorithms', q: 'Which is a sorting algorithm?', opts: ['Binary Search','Linear Search','Bubble Sort','Depth First Search'], answer: 2, difficulty: 'medium', xp: 15 },
  { id: 'cs10_q1', grade: 10, subject: 'Computer Science', unit: 'Algorithms', q: 'Time complexity of linear search', opts: ['O(n)','O(log n)','O(n²)','O(1)'], answer: 0, difficulty: 'medium', xp: 15 },
  { id: 'cs10_q2', grade: 10, subject: 'Computer Science', unit: 'Algorithms', q: 'Time complexity of bubble sort', opts: ['O(n)','O(log n)','O(n²)','O(1)'], answer: 2, difficulty: 'medium', xp: 15 },
  { id: 'cs10_q3', grade: 10, subject: 'Computer Science', unit: 'Database', q: 'SQL stands for', opts: ['Structured Query Language','Simple Query Language','Standard Query Language','System Query Language'], answer: 0, difficulty: 'medium', xp: 15 },
  { id: 'cs11_q1', grade: 11, subject: 'Computer Science', unit: 'Algorithms', q: 'Time complexity of binary search', opts: ['O(n)','O(n log n)','O(log n)','O(1)'], answer: 2, difficulty: 'medium', xp: 15 },
  { id: 'cs11_q2', grade: 11, subject: 'Computer Science', unit: 'Algorithms', q: 'Which is a divide and conquer algorithm?', opts: ['Linear Search','Bubble Sort','Merge Sort','Selection Sort'], answer: 2, difficulty: 'medium', xp: 15 },
  { id: 'cs11_q3', grade: 11, subject: 'Computer Science', unit: 'Data Structures', q: 'Which is a non-linear data structure?', opts: ['Array','Linked List','Tree','Stack'], answer: 2, difficulty: 'medium', xp: 15 },
  { id: 'cs12_q1', grade: 12, subject: 'Computer Science', unit: 'AI', q: 'AI stands for', opts: ['Artificial Intelligence','Automated Intelligence','Advanced Intelligence','Applied Intelligence'], answer: 0, difficulty: 'medium', xp: 15 },
  { id: 'cs12_q2', grade: 12, subject: 'Computer Science', unit: 'AI', q: 'Machine Learning is a subset of', opts: ['AI','Data Science','Statistics','Mathematics'], answer: 0, difficulty: 'medium', xp: 15 },
  { id: 'cs12_q3', grade: 12, subject: 'Computer Science', unit: 'Networking', q: 'HTTP stands for', opts: ['HyperText Transfer Protocol','High Transfer Text Protocol','Hyper Transfer Text Protocol','High Text Transfer Protocol'], answer: 0, difficulty: 'medium', xp: 15 }
];

const STUDENT_KEY = 'learnable_events_queue';
const PROGRESS_KEY = 'learnable_student_progress';

// Debug: Log questions data
console.log('Total questions loaded:', QUESTIONS.length);
console.log('Sample questions:', QUESTIONS.slice(0, 3));

// Gamification System
const ACHIEVEMENTS = {
  firstQuiz: { name: 'First Steps', description: 'Complete your first quiz', icon: '👶', xp: 50 },
  perfectScore: { name: 'Perfectionist', description: 'Get 100% on a quiz', icon: '💯', xp: 100 },
  speedDemon: { name: 'Speed Demon', description: 'Complete a quiz in under 2 minutes', icon: '⚡', xp: 75 },
  streak5: { name: 'On Fire', description: 'Get 5 questions correct in a row', icon: '🔥', xp: 60 },
  levelUp: { name: 'Level Up', description: 'Reach level 5', icon: '⬆️', xp: 200 },
  mathMaster: { name: 'Math Master', description: 'Complete 10 quizzes', icon: '🧮', xp: 300 }
};

// UI refs
const studentIdInput = document.getElementById('studentId');
const subjectSelect = document.getElementById('subjectSelect');
const gradeSelect = document.getElementById('gradeSelect');
// Unit selection removed - quiz will use grade and subject only
const startBtn = document.getElementById('startBtn');
const syncBtn = document.getElementById('syncBtn');
const setupCard = document.getElementById('setupCard');
const gameCard = document.getElementById('gameCard');
const questionArea = document.getElementById('questionArea');
const optionsArea = document.getElementById('optionsArea');
const feedback = document.getElementById('feedback');
const explanationEl = document.getElementById('explanation');
const scoreView = document.getElementById('scoreView');
const levelView = document.getElementById('levelView');
const streakView = document.getElementById('streakView');
const xpView = document.getElementById('xpView');
const progressView = document.getElementById('progressView');
const accuracyView = document.getElementById('accuracyView');
const progressFill = document.getElementById('progressFill');
const nextBtn = document.getElementById('nextBtn');
const finishBtn = document.getElementById('finishBtn');
const hintBtn = document.getElementById('hintBtn');
const resultCard = document.getElementById('resultCard');
const resultText = document.getElementById('resultText');
const badgeText = document.getElementById('badgeText');
const finalScore = document.getElementById('finalScore');
const finalAccuracy = document.getElementById('finalAccuracy');
const timeTaken = document.getElementById('timeTaken');
const xpEarned = document.getElementById('xpEarned');
const retryBtn = document.getElementById('retryBtn');
const newQuizBtn = document.getElementById('newQuizBtn');
const downloadCertBtn = document.getElementById('downloadCertBtn');
const achievementNotification = document.getElementById('achievementNotification');
const achievementText = document.getElementById('achievementText');

// Game State
let quizQuestions = [];
let currentIndex = 0;
let score = 0;
let correctCount = 0;
let currentStreak = 0;
let maxStreak = 0;
let totalXP = 0;
let currentLevel = 1;
let studentId = '';
let quizStartTime = 0;
let questionStartTime = 0;
let totalTime = 0;
let studentProgress = {};

// Utility Functions
// Cache for better performance
const questionCache = new Map();

function pickQuestions(n = 8, subject = 'Math', grade = 6) {
  const cacheKey = `${subject}-${grade}`;
  
  // Check cache first
  if (questionCache.has(cacheKey)) {
    const cached = questionCache.get(cacheKey);
    return shuffleArray(cached).slice(0, n);
  }
  
  // Build filtered questions array
  let filteredQuestions = [];
  
  // First try: subject and grade match
  filteredQuestions = QUESTIONS.filter(q => 
    q.subject === subject && q.grade === Number(grade)
  );
  
  // Second try: subject only
  if (filteredQuestions.length === 0 && subject) {
    filteredQuestions = QUESTIONS.filter(q => q.subject === subject);
  }
  
  // Third try: any questions
  if (filteredQuestions.length === 0) {
    filteredQuestions = QUESTIONS.slice();
  }
  
  // Cache the result
  questionCache.set(cacheKey, filteredQuestions);
  
  // Shuffle and return requested number
  const shuffled = shuffleArray(filteredQuestions);
  const selected = shuffled.slice(0, n);
  
  // Generate supplemental questions if needed
  if (selected.length < n) {
    const needed = n - selected.length;
    const supplements = generateSupplementalQuestions(subject, Number(grade), needed);
    selected.push(...supplements);
  }
  
  return selected;
}

// Optimized shuffle function
function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Pre-defined question templates for better performance
const QUESTION_TEMPLATES = {
  Math: [
    { q: 'What is 5 + 3?', opts: ['7', '8', '9', '6'], answer: 1 },
    { q: 'What is 10 - 4?', opts: ['5', '6', '7', '8'], answer: 1 },
    { q: 'What is 3 × 4?', opts: ['11', '12', '13', '14'], answer: 1 },
    { q: 'What is 15 ÷ 3?', opts: ['4', '5', '6', '7'], answer: 1 },
    { q: 'What is 2²?', opts: ['3', '4', '5', '6'], answer: 1 }
  ],
  Science: [
    { q: 'Photosynthesis occurs in', opts: ['Chloroplast', 'Mitochondria', 'Nucleus', 'Ribosome'], answer: 0 },
    { q: 'SI unit of force is', opts: ['Newton', 'Joule', 'Watt', 'Pascal'], answer: 0 },
    { q: 'Boiling point of water is', opts: ['100°C', '0°C', '50°C', '212°C'], answer: 0 },
    { q: 'Gas used in respiration is', opts: ['Oxygen', 'Carbon Dioxide', 'Nitrogen', 'Hydrogen'], answer: 0 },
    { q: 'Chemical symbol for Gold is', opts: ['Au', 'Ag', 'Go', 'Gd'], answer: 0 }
  ],
  English: [
    { q: 'Identify the verb: Birds fly high.', opts: ['Birds', 'fly', 'high', '.'], answer: 1 },
    { q: 'Choose correct article: ___ apple', opts: ['A', 'An', 'The', 'No article'], answer: 1 },
    { q: 'Synonym of happy is', opts: ['Sad', 'Joyful', 'Angry', 'Afraid'], answer: 1 },
    { q: 'Which word is a noun?', opts: ['Quickly', 'Beautiful', 'House', 'Running'], answer: 2 },
    { q: 'Past tense of "go" is', opts: ['Went', 'Gone', 'Going', 'Goes'], answer: 0 }
  ],
  History: [
    { q: 'Year of Indian independence', opts: ['1947', '1950', '1905', '1857'], answer: 0 },
    { q: 'First Mughal Emperor was', opts: ['Akbar', 'Aurangzeb', 'Babur', 'Shah Jahan'], answer: 2 },
    { q: 'Who wrote Indian Constitution?', opts: ['Dr. B.R. Ambedkar', 'Mahatma Gandhi', 'Jawaharlal Nehru', 'Sardar Patel'], answer: 0 },
    { q: 'Battle of Plassey was in', opts: ['1757', '1857', '1947', '1764'], answer: 0 },
    { q: 'Capital of Maurya Empire was', opts: ['Pataliputra', 'Taxila', 'Ujjain', 'Magadha'], answer: 0 }
  ],
  'Computer Science': [
    { q: 'CPU stands for', opts: ['Central Processing Unit', 'Control Processing Unit', 'Central Program Unit', 'Computer Personal Unit'], answer: 0 },
    { q: 'HTTP is a', opts: ['Protocol', 'Language', 'Database', 'Hardware'], answer: 0 },
    { q: 'Binary of 5 is', opts: ['101', '100', '111', '110'], answer: 0 },
    { q: 'RAM stands for', opts: ['Random Access Memory', 'Read Access Memory', 'Rapid Access Memory', 'Real Access Memory'], answer: 0 },
    { q: 'Which is not a programming language?', opts: ['Python', 'HTML', 'Java', 'C++'], answer: 1 }
  ]
};

function generateSupplementalQuestions(subject, grade, count) {
  const created = [];
  const templates = QUESTION_TEMPLATES[subject] || QUESTION_TEMPLATES.Math;
  
  for (let i = 0; i < count; i++) {
    const uid = `${subject?.toLowerCase()?.replace(/\s+/g,'_')||'gen'}_${grade}_${Date.now()}_${i}`;
    const template = templates[i % templates.length];
    
    created.push({
      id: uid,
      grade,
      subject: subject || 'General',
      unit: 'Practice',
      q: template.q,
      opts: [...template.opts],
      answer: template.answer,
      difficulty: 'easy',
      xp: 10
    });
  }
  
  return created;
}

function saveEvent(event) {
  // Save to local storage (for offline support)
  const raw = localStorage.getItem(STUDENT_KEY);
  const arr = raw ? JSON.parse(raw) : [];
  arr.push(event);
  localStorage.setItem(STUDENT_KEY, JSON.stringify(arr));
  
  // Also save to Firebase for shared access
  if (window.pushEventsToFirebase) {
    window.pushEventsToFirebase([event]).catch(err => {
      console.warn('Failed to save to Firebase:', err);
      // Data is still saved locally, so the app continues to work
    });
  }
}

function loadStudentProgress() {
  const raw = localStorage.getItem(PROGRESS_KEY);
  return raw ? JSON.parse(raw) : {};
}

function saveStudentProgress() {
  localStorage.setItem(PROGRESS_KEY, JSON.stringify(studentProgress));
  
  // Also save to Firebase for shared access
  if (window.pushStudentProgressToFirebase && studentId) {
    window.pushStudentProgressToFirebase(studentId, studentProgress[studentId] || {}).catch(err => {
      console.warn('Failed to save student progress to Firebase:', err);
    });
  }
}

function calculateLevel(xp) {
  return Math.floor(xp / 100) + 1;
}

function getXPForNextLevel(currentLevel) {
  return currentLevel * 100;
}

function showAchievement(achievement) {
  achievementText.textContent = `${achievement.icon} ${achievement.name}: ${achievement.description}`;
  achievementNotification.style.display = 'block';
  achievementNotification.style.animation = 'slideIn 0.5s ease';
  
  setTimeout(() => {
    achievementNotification.style.animation = 'slideOut 0.5s ease';
    setTimeout(() => {
      achievementNotification.style.display = 'none';
    }, 500);
  }, 3000);
}

function checkAchievements() {
  const achievements = studentProgress[studentId]?.achievements || [];
  
  // First Quiz Achievement
  if (!achievements.includes('firstQuiz')) {
    showAchievement(ACHIEVEMENTS.firstQuiz);
    achievements.push('firstQuiz');
    totalXP += ACHIEVEMENTS.firstQuiz.xp;
  }
  
  // Perfect Score Achievement
  if (correctCount === quizQuestions.length && !achievements.includes('perfectScore')) {
    showAchievement(ACHIEVEMENTS.perfectScore);
    achievements.push('perfectScore');
    totalXP += ACHIEVEMENTS.perfectScore.xp;
  }
  
  // Speed Demon Achievement
  if (totalTime < 120 && !achievements.includes('speedDemon')) {
    showAchievement(ACHIEVEMENTS.speedDemon);
    achievements.push('speedDemon');
    totalXP += ACHIEVEMENTS.speedDemon.xp;
  }
  
  // Streak Achievement
  if (maxStreak >= 5 && !achievements.includes('streak5')) {
    showAchievement(ACHIEVEMENTS.streak5);
    achievements.push('streak5');
    totalXP += ACHIEVEMENTS.streak5.xp;
  }
  
  // Level Up Achievement
  if (currentLevel >= 5 && !achievements.includes('levelUp')) {
    showAchievement(ACHIEVEMENTS.levelUp);
    achievements.push('levelUp');
    totalXP += ACHIEVEMENTS.levelUp.xp;
  }
  
  // Math Master Achievement
  const quizCount = studentProgress[studentId]?.quizCount || 0;
  if (quizCount >= 10 && !achievements.includes('mathMaster')) {
    showAchievement(ACHIEVEMENTS.mathMaster);
    achievements.push('mathMaster');
    totalXP += ACHIEVEMENTS.mathMaster.xp;
  }
  
  // Update achievements
  if (!studentProgress[studentId]) {
    studentProgress[studentId] = {};
  }
  studentProgress[studentId].achievements = achievements;
}

function updateProgress() {
  const progress = (currentIndex / quizQuestions.length) * 100;
  progressFill.style.width = `${progress}%`;
  
  const accuracy = currentIndex > 0 ? Math.round((correctCount / currentIndex) * 100) : 0;
  
  scoreView.textContent = score;
  levelView.textContent = currentLevel;
  streakView.textContent = currentStreak;
  xpView.textContent = totalXP;
  progressView.textContent = `Question ${currentIndex + 1} of ${quizQuestions.length}`;
  accuracyView.textContent = `Accuracy: ${accuracy}%`;
}

function startQuiz() {
  studentId = (studentIdInput.value || '').trim();
  if (!studentId) { 
    alert('Please enter a Student ID (e.g., student01)'); 
    return; 
  }
  const selectedSubject = subjectSelect ? subjectSelect.value : 'Math';
  const selectedGrade = gradeSelect ? gradeSelect.value : '6';
  
  // Load student progress
  studentProgress = loadStudentProgress();
  if (!studentProgress[studentId]) {
    studentProgress[studentId] = {
      totalXP: 0,
      level: 1,
      quizCount: 0,
      achievements: []
    };
  }
  
  // Initialize game state with performance optimization
  console.log(`Starting quiz for: ${studentId}, Subject: ${selectedSubject}, Grade: ${selectedGrade}`);
  
  // Use requestAnimationFrame to prevent blocking the UI
  requestAnimationFrame(() => {
    quizQuestions = pickQuestions(10, selectedSubject, selectedGrade);
    
    console.log(`Selected ${quizQuestions.length} questions`);
    
    if (quizQuestions.length === 0) {
      alert('No questions available for this combination. Please try a different subject/grade.');
      return;
    }
    
    // Continue with quiz initialization
    initializeQuiz();
  });
}

function initializeQuiz() {
  currentIndex = 0;
  score = 0;
  correctCount = 0;
  currentStreak = 0;
  maxStreak = 0;
  totalXP = studentProgress[studentId].totalXP || 0;
  currentLevel = calculateLevel(totalXP);
  quizStartTime = Date.now();
  questionStartTime = Date.now();
  
  // Show game interface
  setupCard.hidden = true;
  gameCard.hidden = false;
  resultCard.hidden = true;
  
  updateProgress();
  renderQuestion();
}

function renderQuestion() {
  const q = quizQuestions[currentIndex];
  const questionNumber = currentIndex + 1;
  questionArea.innerHTML = `<span class="question-number">${questionNumber}</span>${q.q}`;
  optionsArea.innerHTML = '';
  feedback.textContent = '';
  feedback.className = '';
  explanationEl.textContent = '';
  nextBtn.hidden = true;
  finishBtn.hidden = true;
  questionStartTime = Date.now();

  q.opts.forEach((opt, i) => {
    const d = document.createElement('div');
    d.className = 'option';
    d.textContent = opt;
    d.onclick = () => onAnswer(i);
    optionsArea.appendChild(d);
  });
  
  updateProgress();
}

function onAnswer(selected) {
  const q = quizQuestions[currentIndex];
  const optionNodes = [...optionsArea.children];
  const questionTime = Date.now() - questionStartTime;
  
  // Disable clicks
  optionNodes.forEach(n => n.onclick = null);

  if (selected === q.answer) {
    optionNodes[selected].classList.add('correct');
    feedback.textContent = '🎉 Correct! Well done!';
    feedback.className = 'feedback-correct';
    
    // Calculate score based on difficulty and speed
    let baseScore = q.xp;
    let speedBonus = 0;
    if (questionTime < 5000) speedBonus = Math.floor(baseScore * 0.5); // 50% bonus for quick answers
    else if (questionTime < 10000) speedBonus = Math.floor(baseScore * 0.25); // 25% bonus
    
    score += baseScore + speedBonus;
    correctCount += 1;
    currentStreak += 1;
    maxStreak = Math.max(maxStreak, currentStreak);
    totalXP += baseScore + speedBonus;
    
    // Level up check
    const newLevel = calculateLevel(totalXP);
    if (newLevel > currentLevel) {
      currentLevel = newLevel;
      showAchievement({ 
        name: 'Level Up!', 
        description: `You've reached level ${currentLevel}!`, 
        icon: '⬆️' 
      });
    }
  } else {
    optionNodes[selected].classList.add('wrong');
    optionNodes[q.answer].classList.add('correct');
    feedback.textContent = '❌ Incorrect. The correct answer is highlighted.';
    feedback.className = 'feedback-wrong';
    currentStreak = 0; // Reset streak
  }

  // Show explanation if available
  if (q.explain) {
    explanationEl.textContent = `Why: ${q.explain}`;
  }

  updateProgress();

  if (currentIndex < quizQuestions.length - 1) {
    nextBtn.hidden = false;
  } else {
    finishBtn.hidden = false;
  }
}
hintBtn && (hintBtn.onclick = () => {
  const q = quizQuestions[currentIndex];
  if (!q) return;
  const hint = q.hint || 'Think about the core concept in this unit.';
  alert('Hint: ' + hint);
});

nextBtn.onclick = () => {
  currentIndex++;
  renderQuestion();
};

finishBtn.onclick = () => {
  finishQuiz();
};

function finishQuiz() {
  totalTime = Math.round((Date.now() - quizStartTime) / 1000);
  const total = quizQuestions.length;
  const accuracy = Math.round((correctCount / total) * 100);
  const xpGained = totalXP - (studentProgress[studentId].totalXP || 0);
  
  // Save event locally
  const event = {
    studentId,
    lessonId: 'quiz',
    subject: (subjectSelect && subjectSelect.value) || (quizQuestions[0] && quizQuestions[0].subject) || 'General',
    grade: (gradeSelect && gradeSelect.value) || (quizQuestions[0] && quizQuestions[0].grade) || '',
    unit: 'Practice',
    score,
    correct: correctCount,
    total,
    accuracy,
    time: totalTime,
    streak: maxStreak,
    xpEarned: xpGained,
    level: currentLevel,
    ts: Date.now()
  };
  saveEvent(event);
  
  // Update student progress
  studentProgress[studentId].totalXP = totalXP;
  studentProgress[studentId].level = currentLevel;
  studentProgress[studentId].quizCount = (studentProgress[studentId].quizCount || 0) + 1;
  saveStudentProgress();
  
  // Check achievements
  checkAchievements();
  
  // Show results
  gameCard.hidden = true;
  resultCard.hidden = false;
  
  // Update result display
  finalScore.textContent = score;
  finalAccuracy.textContent = `${accuracy}%`;
  timeTaken.textContent = `${totalTime}s`;
  xpEarned.textContent = xpGained;
  
  // Generate result message
  let resultMessage = `Amazing work, ${studentId}! `;
  if (accuracy === 100) {
    resultMessage += "Perfect score! You're a math genius! 🌟";
  } else if (accuracy >= 80) {
    resultMessage += "Excellent performance! You're doing great! 🎯";
  } else if (accuracy >= 60) {
    resultMessage += "Good job! Keep practicing to improve! 💪";
  } else {
    resultMessage += "Nice try! Practice makes perfect! 📚";
  }
  
  resultText.textContent = resultMessage;
  
  // Badge logic
  if (accuracy === 100) {
    badgeText.textContent = "🏆 Perfect Score Badge Earned!";
  } else if (accuracy >= 80) {
    badgeText.textContent = "🥇 Excellent Performance Badge!";
  } else if (accuracy >= 60) {
    badgeText.textContent = "🥉 Good Effort Badge!";
  } else {
    badgeText.textContent = "📖 Keep Learning Badge!";
  }
}

// Button Event Handlers
startBtn.onclick = startQuiz;

retryBtn.onclick = () => {
  resultCard.hidden = true;
  startQuiz();
};

newQuizBtn.onclick = () => {
  resultCard.hidden = true;
  setupCard.hidden = false;
  studentIdInput.focus();
};

// Sync button behavior: try to push to Firebase if configured, else inform user
syncBtn.onclick = async () => {
  // if firebase configured and helper function exists, use it
  if (window.pushEventsToFirebase) {
    const raw = localStorage.getItem(STUDENT_KEY);
    const events = raw ? JSON.parse(raw) : [];
    if (events.length === 0) { 
      alert('No events queued locally.'); 
      return; 
    }
    try {
      await window.pushEventsToFirebase(events);
      // clear queue on success
      localStorage.removeItem(STUDENT_KEY);
      alert('Synced to Firebase successfully (events cleared locally).');
    } catch (e) {
      console.error(e);
      alert('Sync failed — will remain queued locally.');
    }
  } else {
    alert('No remote sync configured. Events are saved locally and can be viewed from dashboard.html on this device.');
  }
};

// Add CSS animations for achievement notifications
const style = document.createElement('style');
style.textContent = `
  @keyframes slideIn {
    from { transform: translateX(100%); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }
  @keyframes slideOut {
    from { transform: translateX(0); opacity: 1; }
    to { transform: translateX(100%); opacity: 0; }
  }
`;
document.head.appendChild(style);

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
  // Load and display student progress if returning user
  const savedProgress = loadStudentProgress();
  if (Object.keys(savedProgress).length > 0) {
    const lastStudent = Object.keys(savedProgress)[0];
    studentIdInput.value = lastStudent;
    studentIdInput.placeholder = `Welcome back, ${lastStudent}!`;
  }

  console.log('DOM elements found:', {
    subjectSelect: !!subjectSelect,
    gradeSelect: !!gradeSelect
  });
});

// Register service worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js').then(() => {
    console.log('SW registered');
  }).catch(err => console.warn('SW failed', err));
}

// Certificate download
downloadCertBtn && (downloadCertBtn.onclick = () => {
  const canvas = document.createElement('canvas');
  canvas.width = 1200; canvas.height = 800;
  const ctx = canvas.getContext('2d');
  // Background
  ctx.fillStyle = '#0a0a0f';
  ctx.fillRect(0,0,canvas.width,canvas.height);
  // Border
  ctx.strokeStyle = '#fbbf24';
  ctx.lineWidth = 8;
  ctx.strokeRect(30,30,canvas.width-60,canvas.height-60);
  // Title
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 48px Inter, Arial';
  ctx.textAlign = 'center';
  ctx.fillText('Certificate of Achievement', canvas.width/2, 140);
  // Subtitle
  ctx.font = '24px Inter, Arial';
  ctx.fillStyle = '#d1d5db';
  ctx.fillText('Awarded to', canvas.width/2, 220);
  // Name
  ctx.font = 'bold 56px Inter, Arial';
  ctx.fillStyle = '#8b5cf6';
  ctx.fillText(studentId || 'Student', canvas.width/2, 300);
  // Details
  const subject = (subjectSelect && subjectSelect.value) || (quizQuestions[0] && quizQuestions[0].subject) || 'General';
  const grade = (gradeSelect && gradeSelect.value) || (quizQuestions[0] && quizQuestions[0].grade) || '';
  const unit = 'Practice';
  ctx.font = '26px Inter, Arial';
  ctx.fillStyle = '#ffffff';
  ctx.fillText(`Subject: ${subject}  |  Grade: ${grade}  |  Unit: ${unit}`, canvas.width/2, 380);
  ctx.fillText(`Score: ${score}  |  Accuracy: ${finalAccuracy.textContent}  |  Level: ${currentLevel}`, canvas.width/2, 430);
  // Footer
  ctx.font = '20px Inter, Arial';
  ctx.fillStyle = '#d1d5db';
  const dateStr = new Date().toLocaleString();
  ctx.fillText(`Learnable.ai • ${dateStr}`, canvas.width/2, 560);
  // Seal
  ctx.beginPath();
  ctx.arc(canvas.width-180, canvas.height-160, 70, 0, Math.PI*2);
  ctx.fillStyle = '#fbbf24';
  ctx.fill();
  ctx.fillStyle = '#1f2937';
  ctx.font = 'bold 28px Inter, Arial';
  ctx.fillText('🏆', canvas.width-180, canvas.height-150);
  // Download
  const link = document.createElement('a');
  link.download = `certificate-${studentId || 'student'}.png`;
  link.href = canvas.toDataURL('image/png');
  link.click();
});
