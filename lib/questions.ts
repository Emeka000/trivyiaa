export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
  category: 'Personal Health' | 'Reproductive Health' | 'Mental Health' | 'Stress Management';
  difficulty: 'easy' | 'intermediate' | 'difficult';
}

export const healthQuestions: Question[] = [
  // PERSONAL HEALTH - EASY
  {
    id: 'ph_easy_1',
    question: 'How many glasses of water should adults drink daily?',
    options: ['4-6 glasses', '8-10 glasses', '12-14 glasses', '2-3 glasses'],
    correctAnswer: '8-10 glasses',
    explanation: 'Adults should aim for 8-10 glasses (64-80 ounces) of water daily to maintain proper hydration.',
    category: 'Personal Health',
    difficulty: 'easy'
  },
  {
    id: 'ph_easy_2',
    question: 'How many hours of sleep do adults need per night?',
    options: ['5-6 hours', '7-9 hours', '10-12 hours', '4-5 hours'],
    correctAnswer: '7-9 hours',
    explanation: 'Most adults need 7-9 hours of quality sleep per night for optimal health and cognitive function.',
    category: 'Personal Health',
    difficulty: 'easy'
  },
  {
    id: 'ph_easy_3',
    question: 'Which vitamin is produced when skin is exposed to sunlight?',
    options: ['Vitamin A', 'Vitamin C', 'Vitamin D', 'Vitamin E'],
    correctAnswer: 'Vitamin D',
    explanation: 'Vitamin D is synthesized in the skin when exposed to UVB radiation from sunlight.',
    category: 'Personal Health',
    difficulty: 'easy'
  },
  {
    id: 'ph_easy_4',
    question: 'What is the recommended daily intake of fruits and vegetables?',
    options: ['2 servings', '5 servings', '8 servings', '1 serving'],
    correctAnswer: '5 servings',
    explanation: 'Health experts recommend at least 5 servings of fruits and vegetables daily for optimal nutrition.',
    category: 'Personal Health',
    difficulty: 'easy'
  },
  {
    id: 'ph_easy_5',
    question: 'How often should you brush your teeth?',
    options: ['Once a day', 'Twice a day', 'Three times a day', 'Once a week'],
    correctAnswer: 'Twice a day',
    explanation: 'Brushing teeth twice daily helps remove plaque and prevent tooth decay and gum disease.',
    category: 'Personal Health',
    difficulty: 'easy'
  },
  {
    id: 'ph_easy_6',
    question: 'What is the normal resting heart rate for adults?',
    options: ['40-50 bpm', '60-100 bpm', '120-140 bpm', '150-180 bpm'],
    correctAnswer: '60-100 bpm',
    explanation: 'A normal resting heart rate for adults ranges from 60 to 100 beats per minute.',
    category: 'Personal Health',
    difficulty: 'easy'
  },
  {
    id: 'ph_easy_7',
    question: 'Which nutrient is the body\'s main source of energy?',
    options: ['Proteins', 'Fats', 'Carbohydrates', 'Vitamins'],
    correctAnswer: 'Carbohydrates',
    explanation: 'Carbohydrates are the body\'s preferred and most efficient source of energy.',
    category: 'Personal Health',
    difficulty: 'easy'
  },
  {
    id: 'ph_easy_8',
    question: 'How many minutes of moderate exercise should adults get weekly?',
    options: ['75 minutes', '150 minutes', '300 minutes', '30 minutes'],
    correctAnswer: '150 minutes',
    explanation: 'Adults should get at least 150 minutes of moderate-intensity exercise per week for health benefits.',
    category: 'Personal Health',
    difficulty: 'easy'
  },
  {
    id: 'ph_easy_9',
    question: 'What is the most important meal of the day?',
    options: ['Lunch', 'Dinner', 'Breakfast', 'Snack'],
    correctAnswer: 'Breakfast',
    explanation: 'Breakfast jumpstarts metabolism and provides energy for the day ahead.',
    category: 'Personal Health',
    difficulty: 'easy'
  },
  {
    id: 'ph_easy_10',
    question: 'How often should you wash your hands?',
    options: ['Once a day', 'Before meals only', 'Frequently throughout the day', 'Once a week'],
    correctAnswer: 'Frequently throughout the day',
    explanation: 'Regular handwashing is one of the most effective ways to prevent the spread of germs and illness.',
    category: 'Personal Health',
    difficulty: 'easy'
  },

  // PERSONAL HEALTH - INTERMEDIATE
  {
    id: 'ph_int_1',
    question: 'What is the recommended BMI range for healthy adults?',
    options: ['15.0-20.9', '18.5-24.9', '25.0-29.9', '30.0-34.9'],
    correctAnswer: '18.5-24.9',
    explanation: 'A BMI between 18.5 and 24.9 is considered the healthy weight range for most adults.',
    category: 'Personal Health',
    difficulty: 'intermediate'
  },
  {
    id: 'ph_int_2',
    question: 'Which type of cholesterol is considered "good" cholesterol?',
    options: ['LDL', 'HDL', 'VLDL', 'Triglycerides'],
    correctAnswer: 'HDL',
    explanation: 'HDL (High-Density Lipoprotein) is considered good cholesterol as it helps remove other forms of cholesterol from the bloodstream.',
    category: 'Personal Health',
    difficulty: 'intermediate'
  },
  {
    id: 'ph_int_3',
    question: 'What is the ideal blood pressure reading?',
    options: ['140/90 mmHg', '130/80 mmHg', '120/80 mmHg', '110/70 mmHg'],
    correctAnswer: '120/80 mmHg',
    explanation: 'Normal blood pressure is typically around 120/80 mmHg or lower for most adults.',
    category: 'Personal Health',
    difficulty: 'intermediate'
  },
  {
    id: 'ph_int_4',
    question: 'How many essential amino acids does the human body require?',
    options: ['6', '9', '12', '15'],
    correctAnswer: '9',
    explanation: 'The human body requires 9 essential amino acids that must be obtained from food.',
    category: 'Personal Health',
    difficulty: 'intermediate'
  },
  {
    id: 'ph_int_5',
    question: 'What percentage of the human body is water?',
    options: ['45-50%', '55-60%', '60-65%', '70-75%'],
    correctAnswer: '60-65%',
    explanation: 'The adult human body is approximately 60-65% water by weight.',
    category: 'Personal Health',
    difficulty: 'intermediate'
  },
  {
    id: 'ph_int_6',
    question: 'Which vitamin deficiency causes scurvy?',
    options: ['Vitamin A', 'Vitamin B12', 'Vitamin C', 'Vitamin D'],
    correctAnswer: 'Vitamin C',
    explanation: 'Scurvy is caused by severe vitamin C deficiency, leading to bleeding gums and skin problems.',
    category: 'Personal Health',
    difficulty: 'intermediate'
  },
  {
    id: 'ph_int_7',
    question: 'What is the recommended daily fiber intake for adults?',
    options: ['10-15 grams', '20-25 grams', '25-35 grams', '40-45 grams'],
    correctAnswer: '25-35 grams',
    explanation: 'Adults should consume 25-35 grams of dietary fiber daily for optimal digestive health.',
    category: 'Personal Health',
    difficulty: 'intermediate'
  },
  {
    id: 'ph_int_8',
    question: 'How long should you wait after eating before exercising?',
    options: ['Immediately', '30 minutes', '1-2 hours', '4-5 hours'],
    correctAnswer: '1-2 hours',
    explanation: 'Waiting 1-2 hours after eating allows for proper digestion and prevents discomfort during exercise.',
    category: 'Personal Health',
    difficulty: 'intermediate'
  },
  {
    id: 'ph_int_9',
    question: 'What is the maximum recommended daily sodium intake?',
    options: ['1,500 mg', '2,300 mg', '3,000 mg', '3,500 mg'],
    correctAnswer: '2,300 mg',
    explanation: 'The recommended daily sodium limit is 2,300 mg, with an ideal limit of 1,500 mg for some individuals.',
    category: 'Personal Health',
    difficulty: 'intermediate'
  },
  {
    id: 'ph_int_10',
    question: 'Which mineral is essential for healthy bones and teeth?',
    options: ['Iron', 'Zinc', 'Calcium', 'Magnesium'],
    correctAnswer: 'Calcium',
    explanation: 'Calcium is crucial for building and maintaining strong bones and teeth throughout life.',
    category: 'Personal Health',
    difficulty: 'intermediate'
  },

  // PERSONAL HEALTH - DIFFICULT
  {
    id: 'ph_diff_1',
    question: 'What is the glycemic index of pure glucose?',
    options: ['50', '75', '100', '125'],
    correctAnswer: '100',
    explanation: 'Pure glucose has a glycemic index of 100, which serves as the reference point for all other foods.',
    category: 'Personal Health',
    difficulty: 'difficult'
  },
  {
    id: 'ph_diff_2',
    question: 'Which hormone regulates blood sugar levels?',
    options: ['Cortisol', 'Insulin', 'Thyroxine', 'Adrenaline'],
    correctAnswer: 'Insulin',
    explanation: 'Insulin, produced by the pancreas, is the primary hormone that regulates blood glucose levels.',
    category: 'Personal Health',
    difficulty: 'difficult'
  },
  {
    id: 'ph_diff_3',
    question: 'What is the half-life of caffeine in the human body?',
    options: ['2-3 hours', '4-6 hours', '8-10 hours', '12-14 hours'],
    correctAnswer: '4-6 hours',
    explanation: 'Caffeine has a half-life of 4-6 hours, meaning it takes this long for half the caffeine to be eliminated from the body.',
    category: 'Personal Health',
    difficulty: 'difficult'
  },
  {
    id: 'ph_diff_4',
    question: 'Which phase of sleep is most important for muscle recovery?',
    options: ['REM sleep', 'Stage 1 NREM', 'Stage 2 NREM', 'Stage 3 NREM (Deep sleep)'],
    correctAnswer: 'Stage 3 NREM (Deep sleep)',
    explanation: 'Deep sleep (Stage 3 NREM) is when growth hormone is released and muscle repair occurs.',
    category: 'Personal Health',
    difficulty: 'difficult'
  },
  {
    id: 'ph_diff_5',
    question: 'What is the recommended omega-3 to omega-6 fatty acid ratio?',
    options: ['1:1', '1:4', '1:10', '1:20'],
    correctAnswer: '1:4',
    explanation: 'The ideal omega-3 to omega-6 ratio is approximately 1:4 or lower for optimal health.',
    category: 'Personal Health',
    difficulty: 'difficult'
  },
  {
    id: 'ph_diff_6',
    question: 'Which vitamin is synthesized by gut bacteria?',
    options: ['Vitamin B12', 'Vitamin K', 'Vitamin D', 'Vitamin A'],
    correctAnswer: 'Vitamin K',
    explanation: 'Vitamin K is synthesized by beneficial bacteria in the large intestine.',
    category: 'Personal Health',
    difficulty: 'difficult'
  },
  {
    id: 'ph_diff_7',
    question: 'What is the metabolic equivalent (MET) of vigorous exercise?',
    options: ['3-6 METs', '6-9 METs', '9-12 METs', '12+ METs'],
    correctAnswer: '6-9 METs',
    explanation: 'Vigorous exercise is defined as activities requiring 6 METs or more of energy expenditure.',
    category: 'Personal Health',
    difficulty: 'difficult'
  },
  {
    id: 'ph_diff_8',
    question: 'Which neurotransmitter is deficient in Parkinson\'s disease?',
    options: ['Serotonin', 'Dopamine', 'GABA', 'Acetylcholine'],
    correctAnswer: 'Dopamine',
    explanation: 'Parkinson\'s disease is characterized by the loss of dopamine-producing neurons in the brain.',
    category: 'Personal Health',
    difficulty: 'difficult'
  },
  {
    id: 'ph_diff_9',
    question: 'What is the normal pH range of human blood?',
    options: ['6.8-7.0', '7.0-7.2', '7.35-7.45', '7.5-7.7'],
    correctAnswer: '7.35-7.45',
    explanation: 'Human blood pH is tightly regulated between 7.35 and 7.45 for proper physiological function.',
    category: 'Personal Health',
    difficulty: 'difficult'
  },
  {
    id: 'ph_diff_10',
    question: 'Which enzyme breaks down alcohol in the liver?',
    options: ['Lipase', 'Amylase', 'Alcohol dehydrogenase', 'Pepsin'],
    correctAnswer: 'Alcohol dehydrogenase',
    explanation: 'Alcohol dehydrogenase is the primary enzyme responsible for metabolizing alcohol in the liver.',
    category: 'Personal Health',
    difficulty: 'difficult'
  },

  // REPRODUCTIVE HEALTH - EASY
  {
    id: 'rh_easy_1',
    question: 'How long does a typical menstrual cycle last?',
    options: ['21 days', '28 days', '35 days', '42 days'],
    correctAnswer: '28 days',
    explanation: 'The average menstrual cycle is 28 days, though normal cycles can range from 21-35 days.',
    category: 'Reproductive Health',
    difficulty: 'easy'
  },
  {
    id: 'rh_easy_2',
    question: 'What is the most effective form of birth control?',
    options: ['Condoms', 'Birth control pills', 'Abstinence', 'IUD'],
    correctAnswer: 'Abstinence',
    explanation: 'Abstinence from sexual activity is 100% effective in preventing pregnancy and STIs.',
    category: 'Reproductive Health',
    difficulty: 'easy'
  },
  {
    id: 'rh_easy_3',
    question: 'At what age should women start getting regular Pap smears?',
    options: ['18', '21', '25', '30'],
    correctAnswer: '21',
    explanation: 'Women should begin cervical cancer screening with Pap smears at age 21.',
    category: 'Reproductive Health',
    difficulty: 'easy'
  },
  {
    id: 'rh_easy_4',
    question: 'What does STI stand for?',
    options: ['Sexually Transmitted Infection', 'Simple Treatment Injection', 'Skin Tissue Inflammation', 'Serious Terminal Illness'],
    correctAnswer: 'Sexually Transmitted Infection',
    explanation: 'STI stands for Sexually Transmitted Infection, diseases passed through sexual contact.',
    category: 'Reproductive Health',
    difficulty: 'easy'
  },
  {
    id: 'rh_easy_5',
    question: 'How long does pregnancy typically last?',
    options: ['36 weeks', '40 weeks', '44 weeks', '48 weeks'],
    correctAnswer: '40 weeks',
    explanation: 'A full-term pregnancy typically lasts about 40 weeks from the last menstrual period.',
    category: 'Reproductive Health',
    difficulty: 'easy'
  },
  {
    id: 'rh_easy_6',
    question: 'What is the recommended age for boys to receive the HPV vaccine?',
    options: ['9-11 years', '11-12 years', '13-14 years', '15-16 years'],
    correctAnswer: '11-12 years',
    explanation: 'The HPV vaccine is recommended for boys at ages 11-12 for optimal protection.',
    category: 'Reproductive Health',
    difficulty: 'easy'
  },
  {
    id: 'rh_easy_7',
    question: 'Which contraceptive method also protects against STIs?',
    options: ['Birth control pills', 'IUD', 'Condoms', 'Diaphragm'],
    correctAnswer: 'Condoms',
    explanation: 'Condoms are the only contraceptive method that also provides protection against STIs.',
    category: 'Reproductive Health',
    difficulty: 'easy'
  },
  {
    id: 'rh_easy_8',
    question: 'What is ovulation?',
    options: ['The start of menstruation', 'Release of an egg from the ovary', 'End of the menstrual cycle', 'Fertilization of an egg'],
    correctAnswer: 'Release of an egg from the ovary',
    explanation: 'Ovulation is the release of a mature egg from the ovary, typically occurring mid-cycle.',
    category: 'Reproductive Health',
    difficulty: 'easy'
  },
  {
    id: 'rh_easy_9',
    question: 'How often should men perform testicular self-exams?',
    options: ['Daily', 'Weekly', 'Monthly', 'Yearly'],
    correctAnswer: 'Monthly',
    explanation: 'Men should perform testicular self-exams monthly to check for abnormalities.',
    category: 'Reproductive Health',
    difficulty: 'easy'
  },
  {
    id: 'rh_easy_10',
    question: 'What is the most common STI?',
    options: ['Chlamydia', 'Gonorrhea', 'HPV', 'Herpes'],
    correctAnswer: 'HPV',
    explanation: 'HPV (Human Papillomavirus) is the most common sexually transmitted infection.',
    category: 'Reproductive Health',
    difficulty: 'easy'
  },

  // REPRODUCTIVE HEALTH - INTERMEDIATE
  {
    id: 'rh_int_1',
    question: 'During which days of a 28-day cycle is a woman most fertile?',
    options: ['Days 1-5', 'Days 10-16', 'Days 17-22', 'Days 23-28'],
    correctAnswer: 'Days 10-16',
    explanation: 'The fertile window is typically days 10-16 of a 28-day cycle, with ovulation around day 14.',
    category: 'Reproductive Health',
    difficulty: 'intermediate'
  },
  {
    id: 'rh_int_2',
    question: 'What is the effectiveness rate of birth control pills when used correctly?',
    options: ['85%', '91%', '95%', '99%'],
    correctAnswer: '99%',
    explanation: 'When used correctly and consistently, birth control pills are about 99% effective.',
    category: 'Reproductive Health',
    difficulty: 'intermediate'
  },
  {
    id: 'rh_int_3',
    question: 'Which hormone triggers ovulation?',
    options: ['Estrogen', 'Progesterone', 'Luteinizing Hormone (LH)', 'Follicle Stimulating Hormone (FSH)'],
    correctAnswer: 'Luteinizing Hormone (LH)',
    explanation: 'The LH surge triggers ovulation, causing the mature follicle to release its egg.',
    category: 'Reproductive Health',
    difficulty: 'intermediate'
  },
  {
    id: 'rh_int_4',
    question: 'What is the window period for HIV testing?',
    options: ['1-2 weeks', '3-12 weeks', '4-6 months', '1 year'],
    correctAnswer: '3-12 weeks',
    explanation: 'The HIV window period is typically 3-12 weeks, during which tests may not detect the infection.',
    category: 'Reproductive Health',
    difficulty: 'intermediate'
  },
  {
    id: 'rh_int_5',
    question: 'What is endometriosis?',
    options: ['Ovarian cysts', 'Uterine tissue growing outside the uterus', 'Cervical cancer', 'Vaginal infection'],
    correctAnswer: 'Uterine tissue growing outside the uterus',
    explanation: 'Endometriosis occurs when endometrial tissue grows outside the uterus, causing pain and other symptoms.',
    category: 'Reproductive Health',
    difficulty: 'intermediate'
  },
  {
    id: 'rh_int_6',
    question: 'How long can sperm survive in the female reproductive tract?',
    options: ['12 hours', '24 hours', '3-5 days', '1 week'],
    correctAnswer: '3-5 days',
    explanation: 'Sperm can survive in the female reproductive tract for 3-5 days under optimal conditions.',
    category: 'Reproductive Health',
    difficulty: 'intermediate'
  },
  {
    id: 'rh_int_7',
    question: 'What is PCOS?',
    options: ['Pelvic Cancer Occurrence Syndrome', 'Polycystic Ovary Syndrome', 'Persistent Cervical Obstruction Syndrome', 'Primary Care Obstetric Service'],
    correctAnswer: 'Polycystic Ovary Syndrome',
    explanation: 'PCOS is a hormonal disorder affecting women of reproductive age, causing irregular periods and other symptoms.',
    category: 'Reproductive Health',
    difficulty: 'intermediate'
  },
  {
    id: 'rh_int_8',
    question: 'At what age does menopause typically begin?',
    options: ['35-40', '40-45', '45-50', '50-55'],
    correctAnswer: '50-55',
    explanation: 'Menopause typically begins around age 50-55, though it can vary significantly among women.',
    category: 'Reproductive Health',
    difficulty: 'intermediate'
  },
  {
    id: 'rh_int_9',
    question: 'Which STI can cause pelvic inflammatory disease (PID)?',
    options: ['Herpes', 'Chlamydia', 'HPV', 'Hepatitis B'],
    correctAnswer: 'Chlamydia',
    explanation: 'Untreated chlamydia and gonorrhea can lead to PID, a serious infection of female reproductive organs.',
    category: 'Reproductive Health',
    difficulty: 'intermediate'
  },
  {
    id: 'rh_int_10',
    question: 'What is the recommended frequency for mammograms?',
    options: ['Every 6 months', 'Annually starting at 40', 'Every 2 years starting at 50', 'Only when symptoms appear'],
    correctAnswer: 'Annually starting at 40',
    explanation: 'Most guidelines recommend annual mammograms starting at age 40 for breast cancer screening.',
    category: 'Reproductive Health',
    difficulty: 'intermediate'
  },

  // REPRODUCTIVE HEALTH - DIFFICULT
  {
    id: 'rh_diff_1',
    question: 'What is the primary cause of male infertility?',
    options: ['Low testosterone', 'Sperm disorders', 'Prostate problems', 'Genetic disorders'],
    correctAnswer: 'Sperm disorders',
    explanation: 'Sperm disorders (low count, poor motility, or abnormal shape) account for about 40% of infertility cases.',
    category: 'Reproductive Health',
    difficulty: 'difficult'
  },
  {
    id: 'rh_diff_2',
    question: 'Which phase of the menstrual cycle is dominated by progesterone?',
    options: ['Menstrual phase', 'Follicular phase', 'Ovulation', 'Luteal phase'],
    correctAnswer: 'Luteal phase',
    explanation: 'The luteal phase (post-ovulation) is characterized by high progesterone levels from the corpus luteum.',
    category: 'Reproductive Health',
    difficulty: 'difficult'
  },
  {
    id: 'rh_diff_3',
    question: 'What is the normal sperm concentration per milliliter?',
    options: ['5-10 million', '15-20 million', '20-30 million', '15 million or more'],
    correctAnswer: '15 million or more',
    explanation: 'Normal sperm concentration is 15 million or more sperm per milliliter of semen.',
    category: 'Reproductive Health',
    difficulty: 'difficult'
  },
  {
    id: 'rh_diff_4',
    question: 'Which hormone maintains the corpus luteum during early pregnancy?',
    options: ['Estrogen', 'Progesterone', 'hCG', 'FSH'],
    correctAnswer: 'hCG',
    explanation: 'Human chorionic gonadotropin (hCG) maintains the corpus luteum during early pregnancy.',
    category: 'Reproductive Health',
    difficulty: 'difficult'
  },
  {
    id: 'rh_diff_5',
    question: 'What is the most common cause of female infertility?',
    options: ['Endometriosis', 'Ovulation disorders', 'Tubal damage', 'Uterine problems'],
    correctAnswer: 'Ovulation disorders',
    explanation: 'Ovulation disorders account for approximately 25% of female infertility cases.',
    category: 'Reproductive Health',
    difficulty: 'difficult'
  },
  {
    id: 'rh_diff_6',
    question: 'Which cells produce testosterone in males?',
    options: ['Sertoli cells', 'Leydig cells', 'Germ cells', 'Prostate cells'],
    correctAnswer: 'Leydig cells',
    explanation: 'Leydig cells in the testes produce testosterone in response to luteinizing hormone.',
    category: 'Reproductive Health',
    difficulty: 'difficult'
  },
  {
    id: 'rh_diff_7',
    question: 'What is the success rate of IVF per cycle for women under 35?',
    options: ['20-25%', '30-35%', '40-45%', '50-55%'],
    correctAnswer: '40-45%',
    explanation: 'IVF success rates are highest for women under 35, with about 40-45% success per fresh cycle.',
    category: 'Reproductive Health',
    difficulty: 'difficult'
  },
  {
    id: 'rh_diff_8',
    question: 'Which HPV strains are most associated with cervical cancer?',
    options: ['HPV 6 and 11', 'HPV 16 and 18', 'HPV 31 and 33', 'HPV 45 and 52'],
    correctAnswer: 'HPV 16 and 18',
    explanation: 'HPV types 16 and 18 cause about 70% of cervical cancers and precancerous lesions.',
    category: 'Reproductive Health',
    difficulty: 'difficult'
  },
  {
    id: 'rh_diff_9',
    question: 'What is the half-life of hCG in blood?',
    options: ['12-24 hours', '24-36 hours', '36-48 hours', '48-72 hours'],
    correctAnswer: '24-36 hours',
    explanation: 'The half-life of hCG in blood is approximately 24-36 hours, important for monitoring pregnancy.',
    category: 'Reproductive Health',
    difficulty: 'difficult'
  },
  {
    id: 'rh_diff_10',
    question: 'Which technique is used for preimplantation genetic diagnosis?',
    options: ['Amniocentesis', 'Chorionic villus sampling', 'Blastocyst biopsy', 'Ultrasound'],
    correctAnswer: 'Blastocyst biopsy',
    explanation: 'PGD involves removing cells from a blastocyst (early embryo) for genetic testing before implantation.',
    category: 'Reproductive Health',
    difficulty: 'difficult'
  },

  // MENTAL HEALTH - EASY
  {
    id: 'mh_easy_1',
    question: 'What is a common symptom of depression?',
    options: ['Increased energy', 'Persistent sadness', 'Enhanced focus', 'Improved sleep'],
    correctAnswer: 'Persistent sadness',
    explanation: 'Persistent sadness or low mood is one of the key symptoms of depression.',
    category: 'Mental Health',
    difficulty: 'easy'
  },
  {
    id: 'mh_easy_2',
    question: 'Which activity can help improve mental health?',
    options: ['Isolation', 'Regular exercise', 'Excessive caffeine', 'Sleep deprivation'],
    correctAnswer: 'Regular exercise',
    explanation: 'Regular physical exercise releases endorphins and can significantly improve mental health.',
    category: 'Mental Health',
    difficulty: 'easy'
  },
  {
    id: 'mh_easy_3',
    question: 'What does anxiety typically involve?',
    options: ['Feeling calm', 'Excessive worry', 'Increased confidence', 'Perfect concentration'],
    correctAnswer: 'Excessive worry',
    explanation: 'Anxiety disorders are characterized by excessive worry, fear, or nervousness.',
    category: 'Mental Health',
    difficulty: 'easy'
  },
  {
    id: 'mh_easy_4',
    question: 'Who should you talk to if you\'re having mental health problems?',
    options: ['Only family', 'A mental health professional', 'No one', 'Only friends'],
    correctAnswer: 'A mental health professional',
    explanation: 'Mental health professionals are trained to provide appropriate support and treatment.',
    category: 'Mental Health',
    difficulty: 'easy'
  },
  {
    id: 'mh_easy_5',
    question: 'What is a healthy way to cope with stress?',
    options: ['Avoiding all problems', 'Deep breathing exercises', 'Excessive drinking', 'Complete isolation'],
    correctAnswer: 'Deep breathing exercises',
    explanation: 'Deep breathing exercises help activate the body\'s relaxation response and reduce stress.',
    category: 'Mental Health',
    difficulty: 'easy'
  },
  {
    id: 'mh_easy_6',
    question: 'How much sleep is recommended for mental health?',
    options: ['4-5 hours', '6-7 hours', '7-9 hours', '10-12 hours'],
    correctAnswer: '7-9 hours',
    explanation: 'Getting 7-9 hours of quality sleep is essential for maintaining good mental health.',
    category: 'Mental Health',
    difficulty: 'easy'
  },
  {
    id: 'mh_easy_7',
    question: 'What is meditation primarily used for?',
    options: ['Building muscle', 'Calming the mind', 'Losing weight', 'Improving vision'],
    correctAnswer: 'Calming the mind',
    explanation: 'Meditation is a practice focused on calming the mind and achieving mental clarity.',
    category: 'Mental Health',
    difficulty: 'easy'
  },
  {
    id: 'mh_easy_8',
    question: 'Which of these can trigger mental health issues?',
    options: ['Regular exercise', 'Chronic stress', 'Adequate sleep', 'Balanced nutrition'],
    correctAnswer: 'Chronic stress',
    explanation: 'Chronic stress can lead to various mental health problems including depression and anxiety.',
    category: 'Mental Health',
    difficulty: 'easy'
  },
  {
    id: 'mh_easy_9',
    question: 'What is self-care?',
    options: ['Being selfish', 'Taking care of your physical and mental health', 'Avoiding responsibilities', 'Spending money on luxuries'],
    correctAnswer: 'Taking care of your physical and mental health',
    explanation: 'Self-care involves activities and practices that promote your physical, mental, and emotional well-being.',
    category: 'Mental Health',
    difficulty: 'easy'
  },
  {
    id: 'mh_easy_10',
    question: 'What should you do if a friend seems depressed?',
    options: ['Ignore them', 'Tell them to get over it', 'Listen and encourage professional help', 'Avoid them completely'],
    correctAnswer: 'Listen and encourage professional help',
    explanation: 'Being supportive and encouraging professional help are important ways to help a friend with depression.',
    category: 'Mental Health',
    difficulty: 'easy'
  },

  // MENTAL HEALTH - INTERMEDIATE
  {
    id: 'mh_int_1',
    question: 'What neurotransmitter is often called the "happiness chemical"?',
    options: ['Dopamine', 'Serotonin', 'GABA', 'Norepinephrine'],
    correctAnswer: 'Serotonin',
    explanation: 'Serotonin regulates mood, happiness, and anxiety levels in the brain.',
    category: 'Mental Health',
    difficulty: 'intermediate'
  },
  {
    id: 'mh_int_2',
    question: 'What is cognitive behavioral therapy (CBT) primarily focused on?',
    options: ['Past childhood experiences', 'Changing negative thought patterns', 'Dream analysis', 'Medication management'],
    correctAnswer: 'Changing negative thought patterns',
    explanation: 'CBT focuses on identifying and changing negative thought patterns and behaviors.',
    category: 'Mental Health',
    difficulty: 'intermediate'
  },
  {
    id: 'mh_int_3',
    question: 'What percentage of people experience mental health issues in their lifetime?',
    options: ['10%', '25%', '50%', '75%'],
    correctAnswer: '50%',
    explanation: 'Approximately 50% of people will experience a mental health disorder at some point in their lives.',
    category: 'Mental Health',
    difficulty: 'intermediate'
  },
  {
    id: 'mh_int_4',
    question: 'What is the difference between sadness and depression?',
    options: ['There is no difference', 'Depression lasts longer and affects daily functioning', 'Sadness is more severe', 'Depression only affects teenagers'],
    correctAnswer: 'Depression lasts longer and affects daily functioning',
    explanation: 'Depression is more persistent, intense, and significantly impairs daily functioning compared to normal sadness.',
    category: 'Mental Health',
    difficulty: 'intermediate'
  },
  {
    id: 'mh_int_5',
    question: 'Which type of anxiety disorder involves fear of social situations?',
    options: ['Generalized anxiety disorder', 'Social anxiety disorder', 'Panic disorder', 'Specific phobia'],
    correctAnswer: 'Social anxiety disorder',
    explanation: 'Social anxiety disorder involves intense fear or anxiety in social or performance situations.',
    category: 'Mental Health',
    difficulty: 'intermediate'
  },
  {
    id: 'mh_int_6',
    question: 'What is mindfulness?',
    options: ['Thinking about the future', 'Being present and aware in the moment', 'Analyzing past mistakes', 'Planning daily activities'],
    correctAnswer: 'Being present and aware in the moment',
    explanation: 'Mindfulness is the practice of being fully present and aware of the current moment.',
    category: 'Mental Health',
    difficulty: 'intermediate'
  },
  {
    id: 'mh_int_7',
    question: 'What is the most common mental health disorder?',
    options: ['Depression', 'Anxiety disorders', 'Bipolar disorder', 'Schizophrenia'],
    correctAnswer: 'Anxiety disorders',
    explanation: 'Anxiety disorders are the most common mental health conditions, affecting millions of people.',
    category: 'Mental Health',
    difficulty: 'intermediate'
  },
  {
    id: 'mh_int_8',
    question: 'What does PTSD stand for?',
    options: ['Post-Traumatic Stress Disorder', 'Pre-Treatment Stress Diagnosis', 'Persistent Thought Suppression Disorder', 'Primary Trauma Support Disability'],
    correctAnswer: 'Post-Traumatic Stress Disorder',
    explanation: 'PTSD is a mental health condition triggered by experiencing or witnessing a traumatic event.',
    category: 'Mental Health',
    difficulty: 'intermediate'
  },
  {
    id: 'mh_int_9',
    question: 'Which demographic has the highest suicide risk?',
    options: ['Teenagers', 'Young adults', 'Middle-aged men', 'Elderly women'],
    correctAnswer: 'Middle-aged men',
    explanation: 'Middle-aged men (45-64) have historically shown the highest suicide rates in many countries.',
    category: 'Mental Health',
    difficulty: 'intermediate'
  },
  {
    id: 'mh_int_10',
    question: 'What is emotional regulation?',
    options: ['Suppressing all emotions', 'Managing and responding to emotions appropriately', 'Only expressing positive emotions', 'Avoiding emotional situations'],
    correctAnswer: 'Managing and responding to emotions appropriately',
    explanation: 'Emotional regulation involves the ability to manage and respond to emotional experiences in healthy ways.',
    category: 'Mental Health',
    difficulty: 'intermediate'
  },

  // MENTAL HEALTH - DIFFICULT
  {
    id: 'mh_diff_1',
    question: 'Which brain region is primarily associated with emotional processing?',
    options: ['Prefrontal cortex', 'Amygdala', 'Hippocampus', 'Cerebellum'],
    correctAnswer: 'Amygdala',
    explanation: 'The amygdala is the brain\'s primary center for processing emotions, particularly fear and anxiety.',
    category: 'Mental Health',
    difficulty: 'difficult'
  },
  {
    id: 'mh_diff_2',
    question: 'What is the therapeutic range for lithium in bipolar disorder treatment?',
    options: ['0.3-0.6 mEq/L', '0.6-1.2 mEq/L', '1.2-1.8 mEq/L', '1.8-2.4 mEq/L'],
    correctAnswer: '0.6-1.2 mEq/L',
    explanation: 'The therapeutic range for lithium is 0.6-1.2 mEq/L for maintenance treatment of bipolar disorder.',
    category: 'Mental Health',
    difficulty: 'difficult'
  },
  {
    id: 'mh_diff_3',
    question: 'Which neurotransmitter system is primarily targeted by SSRI medications?',
    options: ['Dopaminergic', 'GABAergic', 'Serotonergic', 'Cholinergic'],
    correctAnswer: 'Serotonergic',
    explanation: 'SSRIs (Selective Serotonin Reuptake Inhibitors) specifically target the serotonin neurotransmitter system.',
    category: 'Mental Health',
    difficulty: 'difficult'
  },
  {
    id: 'mh_diff_4',
    question: 'What is the prevalence of treatment-resistant depression?',
    options: ['10-15%', '20-30%', '30-40%', '40-50%'],
    correctAnswer: '30-40%',
    explanation: 'Approximately 30-40% of patients with major depression do not respond adequately to initial treatments.',
    category: 'Mental Health',
    difficulty: 'difficult'
  },
  {
    id: 'mh_diff_5',
    question: 'Which psychological theory explains learned helplessness?',
    options: ['Cognitive dissonance', 'Operant conditioning', 'Classical conditioning', 'Social learning theory'],
    correctAnswer: 'Operant conditioning',
    explanation: 'Learned helplessness is explained through operant conditioning principles, particularly negative reinforcement.',
    category: 'Mental Health',
    difficulty: 'difficult'
  },
  {
    id: 'mh_diff_6',
    question: 'What is the typical onset age for schizophrenia in males?',
    options: ['15-20 years', '20-25 years', '25-30 years', '30-35 years'],
    correctAnswer: '20-25 years',
    explanation: 'Schizophrenia typically manifests in males during their early twenties (20-25 years).',
    category: 'Mental Health',
    difficulty: 'difficult'
  },
  {
    id: 'mh_diff_7',
    question: 'Which brain wave pattern is associated with deep relaxation and meditation?',
    options: ['Alpha waves', 'Beta waves', 'Theta waves', 'Delta waves'],
    correctAnswer: 'Alpha waves',
    explanation: 'Alpha waves (8-13 Hz) are associated with relaxed awareness and meditative states.',
    category: 'Mental Health',
    difficulty: 'difficult'
  },
  {
    id: 'mh_diff_8',
    question: 'What is the mechanism of action of ketamine in treatment-resistant depression?',
    options: ['Serotonin reuptake inhibition', 'NMDA receptor antagonism', 'Dopamine receptor agonism', 'GABA receptor modulation'],
    correctAnswer: 'NMDA receptor antagonism',
    explanation: 'Ketamine works as an NMDA receptor antagonist, providing rapid antidepressant effects through glutamate modulation.',
    category: 'Mental Health',
    difficulty: 'difficult'
  },
  {
    id: 'mh_diff_9',
    question: 'Which genetic factor is most strongly associated with bipolar disorder risk?',
    options: ['COMT gene', 'DISC1 gene', 'CACNA1C gene', 'ANK3 gene'],
    correctAnswer: 'CACNA1C gene',
    explanation: 'The CACNA1C gene, which codes for calcium channels, shows strong association with bipolar disorder risk.',
    category: 'Mental Health',
    difficulty: 'difficult'
  },
  {
    id: 'mh_diff_10',
    question: 'What is the half-life of fluoxetine (Prozac)?',
    options: ['1-2 days', '4-6 days', '1-2 weeks', '2-4 weeks'],
    correctAnswer: '1-2 weeks',
    explanation: 'Fluoxetine has a long half-life of 1-2 weeks, which affects dosing and discontinuation strategies.',
    category: 'Mental Health',
    difficulty: 'difficult'
  },

  // STRESS MANAGEMENT - EASY
  {
    id: 'sm_easy_1',
    question: 'What is a simple breathing technique for stress relief?',
    options: ['Holding your breath', 'Deep, slow breathing', 'Rapid breathing', 'Mouth breathing only'],
    correctAnswer: 'Deep, slow breathing',
    explanation: 'Deep, slow breathing activates the parasympathetic nervous system and reduces stress.',
    category: 'Stress Management',
    difficulty: 'easy'
  },
  {
    id: 'sm_easy_2',
    question: 'Which activity is known to reduce stress hormones?',
    options: ['Watching TV all day', 'Regular exercise', 'Eating junk food', 'Staying up late'],
    correctAnswer: 'Regular exercise',
    explanation: 'Regular physical exercise helps reduce cortisol and other stress hormones while releasing endorphins.',
    category: 'Stress Management',
    difficulty: 'easy'
  },
  {
    id: 'sm_easy_3',
    question: 'What is progressive muscle relaxation?',
    options: ['Running faster each day', 'Tensing and relaxing muscle groups', 'Lifting heavier weights', 'Stretching only in the morning'],
    correctAnswer: 'Tensing and relaxing muscle groups',
    explanation: 'Progressive muscle relaxation involves systematically tensing and then relaxing different muscle groups.',
    category: 'Stress Management',
    difficulty: 'easy'
  },
  {
    id: 'sm_easy_4',
    question: 'How can social support help with stress?',
    options: ['It makes stress worse', 'It provides emotional comfort and practical help', 'It has no effect', 'It only helps children'],
    correctAnswer: 'It provides emotional comfort and practical help',
    explanation: 'Social support offers emotional comfort, practical assistance, and different perspectives on stressful situations.',
    category: 'Stress Management',
    difficulty: 'easy'
  },
  {
    id: 'sm_easy_5',
    question: 'What is a healthy way to manage work stress?',
    options: ['Working longer hours', 'Taking regular breaks', 'Skipping meals', 'Avoiding colleagues'],
    correctAnswer: 'Taking regular breaks',
    explanation: 'Taking regular breaks helps prevent burnout and maintains mental clarity and productivity.',
    category: 'Stress Management',
    difficulty: 'easy'
  },
  {
    id: 'sm_easy_6',
    question: 'Which of these foods can help reduce stress?',
    options: ['Sugary snacks', 'Dark chocolate', 'Energy drinks', 'Processed foods'],
    correctAnswer: 'Dark chocolate',
    explanation: 'Dark chocolate contains compounds that can help reduce stress hormones and improve mood.',
    category: 'Stress Management',
    difficulty: 'easy'
  },
  {
    id: 'sm_easy_7',
    question: 'What should you do when feeling overwhelmed?',
    options: ['Ignore the feeling', 'Take a step back and prioritize tasks', 'Add more tasks to your list', 'Work faster without breaks'],
    correctAnswer: 'Take a step back and prioritize tasks',
    explanation: 'When overwhelmed, stepping back to assess and prioritize helps regain control and reduces stress.',
    category: 'Stress Management',
    difficulty: 'easy'
  },
  {
    id: 'sm_easy_8',
    question: 'How does laughter help with stress?',
    options: ['It makes stress worse', 'It releases feel-good chemicals', 'It has no effect', 'It only works for some people'],
    correctAnswer: 'It releases feel-good chemicals',
    explanation: 'Laughter triggers the release of endorphins and reduces stress hormone levels.',
    category: 'Stress Management',
    difficulty: 'easy'
  },
  {
    id: 'sm_easy_9',
    question: 'What is time management\'s role in stress reduction?',
    options: ['It increases stress', 'It helps prevent overwhelm and deadline pressure', 'It has no impact', 'It only helps at work'],
    correctAnswer: 'It helps prevent overwhelm and deadline pressure',
    explanation: 'Good time management helps prevent the stress that comes from feeling overwhelmed or missing deadlines.',
    category: 'Stress Management',
    difficulty: 'easy'
  },
  {
    id: 'sm_easy_10',
    question: 'Which hobby can be particularly good for stress relief?',
    options: ['Competitive gaming', 'Gardening', 'Extreme sports', 'High-stakes gambling'],
    correctAnswer: 'Gardening',
    explanation: 'Gardening is a peaceful, mindful activity that connects you with nature and provides stress relief.',
    category: 'Stress Management',
    difficulty: 'easy'
  },

  // STRESS MANAGEMENT - INTERMEDIATE
  {
    id: 'sm_int_1',
    question: 'What is the fight-or-flight response?',
    options: ['A breathing technique', 'The body\'s stress response system', 'A type of exercise', 'A meditation practice'],
    correctAnswer: 'The body\'s stress response system',
    explanation: 'The fight-or-flight response is the body\'s automatic physiological reaction to perceived threats or stress.',
    category: 'Stress Management',
    difficulty: 'intermediate'
  },
  {
    id: 'sm_int_2',
    question: 'Which hormone is primarily released during stress?',
    options: ['Insulin', 'Cortisol', 'Growth hormone', 'Melatonin'],
    correctAnswer: 'Cortisol',
    explanation: 'Cortisol is the primary stress hormone released by the adrenal glands during stressful situations.',
    category: 'Stress Management',
    difficulty: 'intermediate'
  },
  {
    id: 'sm_int_3',
    question: 'What is adaptive vs. maladaptive stress?',
    options: ['There\'s no difference', 'Adaptive helps you cope, maladaptive is harmful', 'Adaptive is short-term, maladaptive is long-term', 'Both are equally harmful'],
    correctAnswer: 'Adaptive helps you cope, maladaptive is harmful',
    explanation: 'Adaptive stress responses help you cope effectively, while maladaptive responses can be harmful to health.',
    category: 'Stress Management',
    difficulty: 'intermediate'
  },
  {
    id: 'sm_int_4',
    question: 'What is the difference between acute and chronic stress?',
    options: ['No difference', 'Acute is short-term, chronic is long-term', 'Acute is physical, chronic is mental', 'Acute is worse than chronic'],
    correctAnswer: 'Acute is short-term, chronic is long-term',
    explanation: 'Acute stress is short-term and immediate, while chronic stress persists over extended periods.',
    category: 'Stress Management',
    difficulty: 'intermediate'
  },
  {
    id: 'sm_int_5',
    question: 'Which technique helps reframe negative thoughts?',
    options: ['Deep breathing', 'Cognitive restructuring', 'Progressive muscle relaxation', 'Time management'],
    correctAnswer: 'Cognitive restructuring',
    explanation: 'Cognitive restructuring is a technique that helps identify and change negative thought patterns.',
    category: 'Stress Management',
    difficulty: 'intermediate'
  },
  {
    id: 'sm_int_6',
    question: 'What is the recommended duration for meditation to reduce stress?',
    options: ['2-5 minutes', '10-20 minutes', '45-60 minutes', '2-3 hours'],
    correctAnswer: '10-20 minutes',
    explanation: 'Most research suggests 10-20 minutes of daily meditation can provide significant stress reduction benefits.',
    category: 'Stress Management',
    difficulty: 'intermediate'
  },
  {
    id: 'sm_int_7',
    question: 'What is emotional intelligence in relation to stress management?',
    options: ['IQ for emotions', 'The ability to understand and manage emotions', 'Being overly emotional', 'Suppressing all emotions'],
    correctAnswer: 'The ability to understand and manage emotions',
    explanation: 'Emotional intelligence involves recognizing, understanding, and managing your own emotions and those of others.',
    category: 'Stress Management',
    difficulty: 'intermediate'
  },
  {
    id: 'sm_int_8',
    question: 'Which coping strategy involves changing the stressful situation?',
    options: ['Problem-focused coping', 'Emotion-focused coping', 'Avoidance coping', 'Denial coping'],
    correctAnswer: 'Problem-focused coping',
    explanation: 'Problem-focused coping involves taking direct action to change or eliminate the source of stress.',
    category: 'Stress Management',
    difficulty: 'intermediate'
  },
  {
    id: 'sm_int_9',
    question: 'What role does sleep play in stress management?',
    options: ['No role', 'Sleep helps restore and regulate stress responses', 'Sleep increases stress', 'Only affects physical health'],
    correctAnswer: 'Sleep helps restore and regulate stress responses',
    explanation: 'Adequate sleep is crucial for emotional regulation and helps the body recover from stress.',
    category: 'Stress Management',
    difficulty: 'intermediate'
  },
  {
    id: 'sm_int_10',
    question: 'What is mindful stress reduction (MBSR)?',
    options: ['A medication', 'A structured program combining mindfulness and stress reduction', 'A type of therapy', 'A breathing technique'],
    correctAnswer: 'A structured program combining mindfulness and stress reduction',
    explanation: 'MBSR is an evidence-based program that uses mindfulness meditation to help people manage stress and pain.',
    category: 'Stress Management',
    difficulty: 'intermediate'
  },

  // STRESS MANAGEMENT - DIFFICULT
  {
    id: 'sm_diff_1',
    question: 'What is the HPA axis in stress response?',
    options: ['Heart-Pulse-Artery system', 'Hypothalamic-Pituitary-Adrenal axis', 'High-Performance-Anxiety system', 'Hormone-Processing-Activation axis'],
    correctAnswer: 'Hypothalamic-Pituitary-Adrenal axis',
    explanation: 'The HPA axis is a complex set of interactions between the hypothalamus, pituitary gland, and adrenal glands that regulates stress response.',
    category: 'Stress Management',
    difficulty: 'difficult'
  },
  {
    id: 'sm_diff_2',
    question: 'Which neurotransmitter system is primarily affected by chronic stress?',
    options: ['Dopaminergic', 'Serotonergic', 'GABAergic', 'All of the above'],
    correctAnswer: 'All of the above',
    explanation: 'Chronic stress affects multiple neurotransmitter systems including dopamine, serotonin, and GABA.',
    category: 'Stress Management',
    difficulty: 'difficult'
  },
  {
    id: 'sm_diff_3',
    question: 'What is allostatic load?',
    options: ['The body\'s stress capacity', 'Cumulative wear from chronic stress', 'A type of stress response', 'Genetic stress predisposition'],
    correctAnswer: 'Cumulative wear from chronic stress',
    explanation: 'Allostatic load refers to the cumulative physiological wear and tear on the body from chronic stress exposure.',
    category: 'Stress Management',
    difficulty: 'difficult'
  },
  {
    id: 'sm_diff_4',
    question: 'Which brain region shows decreased volume under chronic stress?',
    options: ['Amygdala', 'Hippocampus', 'Cerebellum', 'Brain stem'],
    correctAnswer: 'Hippocampus',
    explanation: 'Chronic stress and elevated cortisol levels can cause decreased hippocampal volume, affecting memory.',
    category: 'Stress Management',
    difficulty: 'difficult'
  },
  {
    id: 'sm_diff_5',
    question: 'What is the cortisol awakening response?',
    options: ['Cortisol surge upon waking', 'Evening cortisol peak', 'Stress-induced cortisol', 'Exercise-related cortisol'],
    correctAnswer: 'Cortisol surge upon waking',
    explanation: 'The cortisol awakening response is a natural surge in cortisol levels that occurs within 30-45 minutes of waking.',
    category: 'Stress Management',
    difficulty: 'difficult'
  },
  {
    id: 'sm_diff_6',
    question: 'Which genetic variant affects stress sensitivity?',
    options: ['COMT gene', '5-HTTLPR', 'APOE gene', 'BRCA1 gene'],
    correctAnswer: '5-HTTLPR',
    explanation: 'The 5-HTTLPR polymorphism in the serotonin transporter gene affects stress sensitivity and depression risk.',
    category: 'Stress Management',
    difficulty: 'difficult'
  },
  {
    id: 'sm_diff_7',
    question: 'What is the concept of stress inoculation?',
    options: ['Avoiding all stress', 'Gradual exposure to manageable stress', 'Eliminating stress responses', 'Genetic modification'],
    correctAnswer: 'Gradual exposure to manageable stress',
    explanation: 'Stress inoculation involves controlled exposure to mild stressors to build resilience and coping skills.',
    category: 'Stress Management',
    difficulty: 'difficult'
  },
  {
    id: 'sm_diff_8',
    question: 'Which biomarker is used to measure chronic stress?',
    options: ['Blood cortisol', 'Hair cortisol', 'Saliva cortisol', 'Urine cortisol'],
    correctAnswer: 'Hair cortisol',
    explanation: 'Hair cortisol provides a measure of chronic stress exposure over 2-3 months, unlike acute measures.',
    category: 'Stress Management',
    difficulty: 'difficult'
  },
  {
    id: 'sm_diff_9',
    question: 'What is the polyvagal theory?',
    options: ['Multiple stress responses', 'Autonomic nervous system hierarchy', 'Brain stress centers', 'Hormonal stress patterns'],
    correctAnswer: 'Autonomic nervous system hierarchy',
    explanation: 'Polyvagal theory describes the hierarchical organization of the autonomic nervous system and its role in stress and social behavior.',
    category: 'Stress Management',
    difficulty: 'difficult'
  },
  {
    id: 'sm_diff_10',
    question: 'Which inflammatory marker is elevated in chronic stress?',
    options: ['CRP', 'IL-6', 'TNF-α', 'All of the above'],
    correctAnswer: 'All of the above',
    explanation: 'Chronic stress elevates multiple inflammatory markers including CRP, IL-6, and TNF-α, contributing to health problems.',
    category: 'Stress Management',
    difficulty: 'difficult'
  }
];