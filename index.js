/* =========================
   1–100 GROUP DISCUSSION
========================= */

const TOPICS = [

    { t:"Impact of Social Media on Students", c:"Group Discussion" },
    { t:"Online Learning vs Offline Learning", c:"Group Discussion" },
    { t:"Should Mobile Phones Be Allowed in Classrooms?", c:"Group Discussion" },
    { t:"Role of AI in Daily Life", c:"Group Discussion" },
    { t:"Climate Change Awareness", c:"Group Discussion" },
    { t:"Importance of Teamwork", c:"Group Discussion" },
    { t:"Work From Home Culture", c:"Group Discussion" },
    { t:"Is Technology Making Us Lazy?", c:"Group Discussion" },
    { t:"Future of Electric Vehicles", c:"Group Discussion" },
    { t:"Gaming Addiction Among Youth", c:"Group Discussion" },
    
    { t:"Digital Payments in India", c:"Group Discussion" },
    { t:"Advantages of Smart Cities", c:"Group Discussion" },
    { t:"Importance of Mental Health", c:"Group Discussion" },
    { t:"Should Attendance Be Mandatory?", c:"Group Discussion" },
    { t:"Space Exploration Benefits", c:"Group Discussion" },
    { t:"Women Empowerment in India", c:"Group Discussion" },
    { t:"Internet Privacy Concerns", c:"Group Discussion" },
    { t:"Importance of Time Management", c:"Group Discussion" },
    { t:"Impact of OTT Platforms", c:"Group Discussion" },
    { t:"Future of Cryptocurrency", c:"Group Discussion" },
    
    { t:"Role of Youth in Nation Building", c:"Group Discussion" },
    { t:"Artificial Intelligence in Education", c:"Group Discussion" },
    { t:"Fast Food Culture", c:"Group Discussion" },
    { t:"Importance of Reading Books", c:"Group Discussion" },
    { t:"Should Exams Be Removed?", c:"Group Discussion" },
    { t:"Importance of Financial Literacy", c:"Group Discussion" },
    { t:"Cybersecurity Awareness", c:"Group Discussion" },
    { t:"Advantages of Cloud Computing", c:"Group Discussion" },
    { t:"Remote Jobs and Future Careers", c:"Group Discussion" },
    { t:"Role of Communication Skills", c:"Group Discussion" },
    
    { t:"Impact of Social Media Influencers", c:"Group Discussion" },
    { t:"Digital India Mission", c:"Group Discussion" },
    { t:"Can Machines Replace Humans?", c:"Group Discussion" },
    { t:"Future of Robotics", c:"Group Discussion" },
    { t:"Importance of Discipline", c:"Group Discussion" },
    { t:"Role of Sports in Student Life", c:"Group Discussion" },
    { t:"Importance of Coding Skills", c:"Group Discussion" },
    { t:"AI vs Human Creativity", c:"Group Discussion" },
    { t:"Environmental Pollution", c:"Group Discussion" },
    { t:"Importance of Leadership", c:"Group Discussion" },
    
    { t:"Startup Culture in India", c:"Group Discussion" },
    { t:"Should College Uniform Be Mandatory?", c:"Group Discussion" },
    { t:"Effects of Video Games", c:"Group Discussion" },
    { t:"Impact of Technology on Jobs", c:"Group Discussion" },
    { t:"Can Social Media Build Careers?", c:"Group Discussion" },
    { t:"Importance of Public Speaking", c:"Group Discussion" },
    { t:"Future of Online Shopping", c:"Group Discussion" },
    { t:"Importance of Innovation", c:"Group Discussion" },
    { t:"Ethics in Artificial Intelligence", c:"Group Discussion" },
    { t:"Importance of Networking", c:"Group Discussion" },
    
    { t:"Impact of Automation on Employment", c:"Group Discussion" },
    { t:"Future of Digital Education", c:"Group Discussion" },
    { t:"Role of Teachers in Modern Education", c:"Group Discussion" },
    { t:"Benefits of Meditation", c:"Group Discussion" },
    { t:"Importance of Self Confidence", c:"Group Discussion" },
    { t:"Social Media and Fake News", c:"Group Discussion" },
    { t:"Role of Startups in Economy", c:"Group Discussion" },
    { t:"Importance of Internships", c:"Group Discussion" },
    { t:"Future of Space Tourism", c:"Group Discussion" },
    { t:"Can AI Become Dangerous?", c:"Group Discussion" },
    
    { t:"Benefits of Team Projects", c:"Group Discussion" },
    { t:"Importance of Cyber Hygiene", c:"Group Discussion" },
    { t:"Impact of Reels on Youth", c:"Group Discussion" },
    { t:"Future of Smart Homes", c:"Group Discussion" },
    { t:"Role of Internet in Education", c:"Group Discussion" },
    { t:"Can Technology Reduce Crime?", c:"Group Discussion" },
    { t:"Benefits of Exercise", c:"Group Discussion" },
    { t:"Importance of Problem Solving", c:"Group Discussion" },
    { t:"Should Coding Be Mandatory?", c:"Group Discussion" },
    { t:"Future of Cashless Economy", c:"Group Discussion" },
    
    { t:"Impact of Globalization", c:"Group Discussion" },
    { t:"Can Humans Live on Mars?", c:"Group Discussion" },
    { t:"Role of Ethics in Technology", c:"Group Discussion" },
    { t:"Advantages of Hybrid Work", c:"Group Discussion" },
    { t:"Future of AI Assistants", c:"Group Discussion" },
    { t:"Importance of Creativity", c:"Group Discussion" },
    { t:"Can Technology Improve Healthcare?", c:"Group Discussion" },
    { t:"Role of Discipline in Success", c:"Group Discussion" },
    { t:"Future of Autonomous Vehicles", c:"Group Discussion" },
    { t:"Benefits of Volunteering", c:"Group Discussion" },
    
    { t:"Importance of Communication in Teams", c:"Group Discussion" },
    { t:"Social Media and Relationships", c:"Group Discussion" },
    { t:"Can AI Replace Doctors?", c:"Group Discussion" },
    { t:"Future of Green Energy", c:"Group Discussion" },
    { t:"Importance of Decision Making", c:"Group Discussion" },
    { t:"Role of Data in Modern Business", c:"Group Discussion" },
    { t:"Advantages of Open Source Software", c:"Group Discussion" },
    { t:"Can Robots Replace Teachers?", c:"Group Discussion" },
    { t:"Future of Biotechnology", c:"Group Discussion" },
    { t:"Importance of Adaptability", c:"Group Discussion" },
    
    { t:"Should Students Learn Finance?", c:"Group Discussion" },
    { t:"Role of Youth in Technology", c:"Group Discussion" },
    { t:"Future of Human Computer Interaction", c:"Group Discussion" },
    { t:"Importance of Emotional Intelligence", c:"Group Discussion" },
    { t:"Can AI Replace Artists?", c:"Group Discussion" },
    { t:"Role of Social Responsibility", c:"Group Discussion" },
    { t:"Future of 6G Technology", c:"Group Discussion" },
    { t:"Importance of Innovation in Business", c:"Group Discussion" },
    { t:"Technology and Human Dependency", c:"Group Discussion" },
    { t:"Impact of Smartphones on Society", c:"Group Discussion" },



    { t:"Should AI Replace Human Jobs?", c:"Debate" },
{ t:"Is Social Media Harmful?", c:"Debate" },
{ t:"Should Coding Be Mandatory in Schools?", c:"Debate" },
{ t:"Online Classes Are Better Than Offline Classes", c:"Debate" },
{ t:"Can Technology Destroy Human Creativity?", c:"Debate" },
{ t:"Should College Attendance Be Optional?", c:"Debate" },
{ t:"Is Remote Work Better Than Office Work?", c:"Debate" },
{ t:"Should Exams Be Abolished?", c:"Debate" },
{ t:"Can Robots Replace Humans?", c:"Debate" },
{ t:"Is Privacy Dead in Digital Age?", c:"Debate" },

{ t:"Should Mobile Phones Be Banned in Schools?", c:"Debate" },
{ t:"Is AI Dangerous for Humanity?", c:"Debate" },
{ t:"Can Cryptocurrency Replace Cash?", c:"Debate" },
{ t:"Should Space Exploration Continue?", c:"Debate" },
{ t:"Are Video Games Beneficial?", c:"Debate" },
{ t:"Should Social Media Have Age Restrictions?", c:"Debate" },
{ t:"Can Machines Think Like Humans?", c:"Debate" },
{ t:"Should Students Focus Only on Marks?", c:"Debate" },
{ t:"Is Technology Making People Less Social?", c:"Debate" },
{ t:"Should Internet Access Be a Basic Right?", c:"Debate" },



{ t:"Importance of Active Listening", c:"Communication" },
{ t:"How to Speak Confidently", c:"Communication" },
{ t:"Body Language in Communication", c:"Communication" },
{ t:"How to Handle Stage Fear", c:"Communication" },
{ t:"Importance of Eye Contact", c:"Communication" },
{ t:"Professional Email Etiquette", c:"Communication" },
{ t:"How to Improve Vocabulary", c:"Communication" },
{ t:"Speaking Clearly Under Pressure", c:"Communication" },
{ t:"How to Give Presentations", c:"Communication" },
{ t:"Power of Storytelling", c:"Communication" },

{ t:"Communication in Teamwork", c:"Communication" },
{ t:"Importance of Public Speaking", c:"Communication" },
{ t:"How to Start a Conversation", c:"Communication" },
{ t:"Role of Confidence in Speaking", c:"Communication" },
{ t:"How to Handle Interviews", c:"Communication" },
{ t:"Importance of Tone of Voice", c:"Communication" },
{ t:"Verbal vs Non Verbal Communication", c:"Communication" },
{ t:"How to Become a Better Listener", c:"Communication" },
{ t:"Importance of Clear Communication", c:"Communication" },
{ t:"How to Speak Without Fear", c:"Communication" },

{ t:"Communication Skills for Leaders", c:"Communication" },
{ t:"Importance of Positive Language", c:"Communication" },
{ t:"How to Improve Fluency", c:"Communication" },
{ t:"Handling Difficult Questions", c:"Communication" },
{ t:"Importance of Feedback", c:"Communication" },
{ t:"How to Speak Professionally", c:"Communication" },
{ t:"Communication During Conflict", c:"Communication" },
{ t:"Importance of Facial Expressions", c:"Communication" },
{ t:"How to Communicate Ideas Clearly", c:"Communication" },
{ t:"Role of Communication in Success", c:"Communication" },

{ t:"How to Overcome Hesitation", c:"Communication" },
{ t:"Importance of Group Discussions", c:"Communication" },
{ t:"Communication in Workplace", c:"Communication" },
{ t:"How to Build Speaking Confidence", c:"Communication" },
{ t:"Importance of Presentation Skills", c:"Communication" },
{ t:"How to Speak More Naturally", c:"Communication" },
{ t:"Importance of First Impression", c:"Communication" },
{ t:"Communication Barriers", c:"Communication" },
{ t:"How to Talk With Strangers", c:"Communication" },
{ t:"Role of Listening in Relationships", c:"Communication" },

{ t:"How to Improve Pronunciation", c:"Communication" },
{ t:"Communication in Online Meetings", c:"Communication" },
{ t:"Importance of Respectful Communication", c:"Communication" },
{ t:"How to Control Nervousness", c:"Communication" },
{ t:"Effective Communication in College", c:"Communication" },
{ t:"Importance of Assertive Communication", c:"Communication" },
{ t:"How to Engage an Audience", c:"Communication" },
{ t:"Communication and Emotional Intelligence", c:"Communication" },
{ t:"How to Become a Better Speaker", c:"Communication" },
{ t:"Importance of Listening Carefully", c:"Communication" },

{ t:"How to Speak in Public Effectively", c:"Communication" },
{ t:"Importance of Communication in Leadership", c:"Communication" },
{ t:"How to Answer Unexpected Questions", c:"Communication" },
{ t:"Communication in Professional Life", c:"Communication" },
{ t:"Importance of Confidence During Speech", c:"Communication" },
{ t:"How to Speak Persuasively", c:"Communication" },
{ t:"Communication and Team Coordination", c:"Communication" },
{ t:"Importance of Clarity in Speech", c:"Communication" },
{ t:"How to Express Opinions Respectfully", c:"Communication" },
{ t:"Communication for Career Growth", c:"Communication" },

{ t:"Importance of Communication in Interviews", c:"Communication" },
{ t:"How to Build Better Conversations", c:"Communication" },
{ t:"Communication and Leadership Skills", c:"Communication" },
{ t:"How to Improve Stage Presence", c:"Communication" },
{ t:"Importance of Positive Body Language", c:"Communication" },
{ t:"Communication in Daily Life", c:"Communication" },
{ t:"How to Reduce Speaking Anxiety", c:"Communication" },
{ t:"Importance of Communication in Teams", c:"Communication" },
{ t:"How to Deliver Effective Speeches", c:"Communication" },
{ t:"Communication Skills for Students", c:"Communication" },

{ t:"Importance of Communication in Business", c:"Communication" },
{ t:"How to Improve Interpersonal Skills", c:"Communication" },
{ t:"Communication and Self Confidence", c:"Communication" },
{ t:"How to Speak More Clearly", c:"Communication" },
{ t:"Importance of Listening Before Speaking", c:"Communication" },
{ t:"Communication During Presentations", c:"Communication" },
{ t:"How to Explain Complex Ideas Simply", c:"Communication" },
{ t:"Importance of Communication in Relationships", c:"Communication" },
{ t:"How to Become an Effective Communicator", c:"Communication" },
{ t:"Communication and Personality Development", c:"Communication" },




{ t:"Describe Your Dream Job", c:"Impromptu" },
{ t:"A Lesson You Learned From Failure", c:"Impromptu" },
{ t:"If You Could Travel Anywhere", c:"Impromptu" },
{ t:"Your Favorite Teacher", c:"Impromptu" },
{ t:"A Memorable Childhood Moment", c:"Impromptu" },
{ t:"Describe Your Ideal Day", c:"Impromptu" },
{ t:"The Most Important Skill", c:"Impromptu" },
{ t:"A Book That Changed You", c:"Impromptu" },
{ t:"What Success Means to You", c:"Impromptu" },
{ t:"Your Biggest Motivation", c:"Impromptu" },

{ t:"The Importance of Friendship", c:"Impromptu" },
{ t:"A Person You Admire", c:"Impromptu" },
{ t:"What Makes a Good Leader?", c:"Impromptu" },
{ t:"The Value of Time", c:"Impromptu" },
{ t:"A Goal You Want to Achieve", c:"Impromptu" },
{ t:"Your Favorite Movie", c:"Impromptu" },
{ t:"What Happiness Means to You", c:"Impromptu" },
{ t:"Describe Your Favorite Place", c:"Impromptu" },
{ t:"The Importance of Discipline", c:"Impromptu" },
{ t:"A Skill Everyone Should Learn", c:"Impromptu" },

{ t:"Your Biggest Fear", c:"Impromptu" },
{ t:"How Technology Changed Life", c:"Impromptu" },
{ t:"The Importance of Education", c:"Impromptu" },
{ t:"Your Favorite Festival", c:"Impromptu" },
{ t:"What Inspires You?", c:"Impromptu" },
{ t:"A Challenge You Overcame", c:"Impromptu" },
{ t:"Your Favorite Hobby", c:"Impromptu" },
{ t:"The Meaning of True Success", c:"Impromptu" },
{ t:"Why Teamwork Matters", c:"Impromptu" },
{ t:"A Place You Want to Visit", c:"Impromptu" },

{ t:"Your Favorite Food", c:"Impromptu" },
{ t:"The Power of Positive Thinking", c:"Impromptu" },
{ t:"A Teacher Who Inspired You", c:"Impromptu" },
{ t:"Importance of Self Confidence", c:"Impromptu" },
{ t:"Your Favorite Childhood Memory", c:"Impromptu" },
{ t:"What Makes Life Meaningful?", c:"Impromptu" },
{ t:"Describe Your Best Friend", c:"Impromptu" },
{ t:"The Importance of Communication", c:"Impromptu" },
{ t:"A Funny Incident in Your Life", c:"Impromptu" },
{ t:"How to Handle Failure", c:"Impromptu" },

{ t:"Your Dream Vacation", c:"Impromptu" },
{ t:"The Role of Technology in Education", c:"Impromptu" },
{ t:"A Moment That Changed You", c:"Impromptu" },
{ t:"Your Favorite Subject", c:"Impromptu" },
{ t:"The Importance of Hard Work", c:"Impromptu" },
{ t:"What Makes a Person Successful?", c:"Impromptu" },
{ t:"The Best Advice You Ever Received", c:"Impromptu" },
{ t:"A Person Who Motivates You", c:"Impromptu" },
{ t:"Importance of Public Speaking", c:"Impromptu" },
{ t:"The Value of Honesty", c:"Impromptu" },

{ t:"A Life Without Internet", c:"Impromptu" },
{ t:"How to Stay Motivated", c:"Impromptu" },
{ t:"Your Favorite Sport", c:"Impromptu" },
{ t:"The Importance of Patience", c:"Impromptu" },
{ t:"A Time You Felt Proud", c:"Impromptu" },
{ t:"What Makes a Good Friend?", c:"Impromptu" },
{ t:"The Impact of Social Media", c:"Impromptu" },
{ t:"A Skill You Want to Master", c:"Impromptu" },
{ t:"Importance of Creativity", c:"Impromptu" },
{ t:"Your Role Model", c:"Impromptu" },

{ t:"How to Manage Stress", c:"Impromptu" },
{ t:"The Importance of Kindness", c:"Impromptu" },
{ t:"Describe Your College Life", c:"Impromptu" },
{ t:"A Goal for Your Future", c:"Impromptu" },
{ t:"Importance of Time Management", c:"Impromptu" },
{ t:"What Does Leadership Mean?", c:"Impromptu" },
{ t:"The Best Day of Your Life", c:"Impromptu" },
{ t:"Why Reading Books Matters", c:"Impromptu" },
{ t:"Your Favorite Season", c:"Impromptu" },
{ t:"The Importance of Discipline in Student Life", c:"Impromptu" },

{ t:"How Music Affects Life", c:"Impromptu" },
{ t:"A Technology You Cannot Live Without", c:"Impromptu" },
{ t:"The Importance of Listening", c:"Impromptu" },
{ t:"What Makes You Happy?", c:"Impromptu" },
{ t:"A Historical Person You Admire", c:"Impromptu" },
{ t:"The Value of Respect", c:"Impromptu" },
{ t:"Describe Your Daily Routine", c:"Impromptu" },
{ t:"How to Build Confidence", c:"Impromptu" },
{ t:"Importance of Family", c:"Impromptu" },
{ t:"The Power of Small Habits", c:"Impromptu" },

{ t:"What Freedom Means to You", c:"Impromptu" },
{ t:"A Time You Helped Someone", c:"Impromptu" },
{ t:"The Importance of Health", c:"Impromptu" },
{ t:"What Makes a Great Team?", c:"Impromptu" },
{ t:"A Dream You Want to Achieve", c:"Impromptu" },
{ t:"The Importance of Responsibility", c:"Impromptu" },
{ t:"Your Favorite App", c:"Impromptu" },
{ t:"How to Stay Positive", c:"Impromptu" },
{ t:"The Importance of Decision Making", c:"Impromptu" },
{ t:"Describe an Inspirational Moment", c:"Impromptu" },

{ t:"The Importance of Learning New Skills", c:"Impromptu" },
{ t:"What Makes a Good Student?", c:"Impromptu" },
{ t:"A Problem Society Should Solve", c:"Impromptu" },
{ t:"The Importance of Adaptability", c:"Impromptu" },
{ t:"Describe Your Future Self", c:"Impromptu" },
{ t:"How Technology Will Shape the Future", c:"Impromptu" },
{ t:"The Importance of Gratitude", c:"Impromptu" },
{ t:"A Life Lesson Everyone Should Learn", c:"Impromptu" },
{ t:"What Makes You Unique?", c:"Impromptu" },
{ t:"The Importance of Never Giving Up", c:"Impromptu" },




{ t:"Qualities of a Good Leader", c:"Leadership" },
{ t:"Importance of Discipline", c:"Leadership" },
{ t:"How to Stay Motivated", c:"Leadership" },
{ t:"Learning From Failure", c:"Leadership" },
{ t:"Importance of Hard Work", c:"Leadership" },
{ t:"How Leaders Inspire Teams", c:"Leadership" },
{ t:"The Power of Positive Thinking", c:"Leadership" },
{ t:"Importance of Goal Setting", c:"Leadership" },
{ t:"How to Build Self Confidence", c:"Leadership" },
{ t:"Managing Stress Effectively", c:"Leadership" },

{ t:"Importance of Teamwork", c:"Leadership" },
{ t:"How to Handle Challenges", c:"Leadership" },
{ t:"The Role of Responsibility", c:"Leadership" },
{ t:"How to Become a Better Leader", c:"Leadership" },
{ t:"Importance of Consistency", c:"Leadership" },
{ t:"How to Overcome Fear", c:"Leadership" },
{ t:"The Importance of Patience", c:"Leadership" },
{ t:"What Makes a Person Successful?", c:"Leadership" },
{ t:"The Value of Determination", c:"Leadership" },
{ t:"How to Stay Focused on Goals", c:"Leadership" },

{ t:"Leadership in Student Life", c:"Leadership" },
{ t:"Importance of Decision Making", c:"Leadership" },
{ t:"How to Develop Leadership Skills", c:"Leadership" },
{ t:"The Importance of Self Belief", c:"Leadership" },
{ t:"How to Motivate Others", c:"Leadership" },
{ t:"The Role of Communication in Leadership", c:"Leadership" },
{ t:"Importance of Adaptability", c:"Leadership" },
{ t:"How to Handle Pressure", c:"Leadership" },
{ t:"The Importance of Emotional Intelligence", c:"Leadership" },
{ t:"Why Failure Leads to Success", c:"Leadership" },

{ t:"How to Build Good Habits", c:"Leadership" },
{ t:"The Importance of Taking Initiative", c:"Leadership" },
{ t:"How to Manage Time Effectively", c:"Leadership" },
{ t:"The Role of Confidence in Leadership", c:"Leadership" },
{ t:"How to Stay Positive During Difficult Times", c:"Leadership" },
{ t:"Importance of Personal Growth", c:"Leadership" },
{ t:"How to Improve Productivity", c:"Leadership" },
{ t:"The Importance of Courage", c:"Leadership" },
{ t:"How to Inspire People Around You", c:"Leadership" },
{ t:"The Role of Accountability", c:"Leadership" },

{ t:"How to Turn Weakness Into Strength", c:"Leadership" },
{ t:"Importance of Lifelong Learning", c:"Leadership" },
{ t:"The Value of Persistence", c:"Leadership" },
{ t:"How Leaders Solve Problems", c:"Leadership" },
{ t:"Importance of Integrity", c:"Leadership" },
{ t:"How to Build Mental Strength", c:"Leadership" },
{ t:"The Importance of Respect", c:"Leadership" },
{ t:"How to Develop a Winning Mindset", c:"Leadership" },
{ t:"The Role of Creativity in Leadership", c:"Leadership" },
{ t:"How to Build Trust in Teams", c:"Leadership" },

{ t:"Importance of Self Discipline", c:"Leadership" },
{ t:"How to Handle Criticism", c:"Leadership" },
{ t:"The Importance of Taking Risks", c:"Leadership" },
{ t:"How to Balance Work and Life", c:"Leadership" },
{ t:"The Role of Vision in Leadership", c:"Leadership" },
{ t:"How to Build Confidence After Failure", c:"Leadership" },
{ t:"Importance of Strategic Thinking", c:"Leadership" },
{ t:"How to Stay Calm Under Pressure", c:"Leadership" },
{ t:"The Importance of Accountability in Teams", c:"Leadership" },
{ t:"How to Improve Decision Making Skills", c:"Leadership" },

{ t:"The Importance of Passion", c:"Leadership" },
{ t:"How to Encourage Team Collaboration", c:"Leadership" },
{ t:"The Role of Motivation in Success", c:"Leadership" },
{ t:"How to Build Leadership Presence", c:"Leadership" },
{ t:"Importance of Optimism", c:"Leadership" },
{ t:"How to Stay Consistent With Goals", c:"Leadership" },
{ t:"The Role of Discipline in Achievement", c:"Leadership" },
{ t:"How Leaders Build Strong Teams", c:"Leadership" },
{ t:"Importance of Self Awareness", c:"Leadership" },
{ t:"How to Improve Problem Solving Skills", c:"Leadership" },

{ t:"The Importance of Encouraging Others", c:"Leadership" },
{ t:"How to Build Resilience", c:"Leadership" },
{ t:"The Role of Confidence in Public Speaking", c:"Leadership" },
{ t:"How to Become More Responsible", c:"Leadership" },
{ t:"Importance of Staying Motivated", c:"Leadership" },
{ t:"How to Improve Leadership Communication", c:"Leadership" },
{ t:"The Importance of Goal Oriented Thinking", c:"Leadership" },
{ t:"How Leaders Handle Failure", c:"Leadership" },
{ t:"Importance of Collaboration", c:"Leadership" },
{ t:"How to Build a Positive Attitude", c:"Leadership" },

{ t:"The Role of Leadership in Society", c:"Leadership" },
{ t:"How to Develop Self Motivation", c:"Leadership" },
{ t:"Importance of Courageous Decisions", c:"Leadership" },
{ t:"How to Build Better Team Relationships", c:"Leadership" },
{ t:"The Importance of Persistence During Hard Times", c:"Leadership" },
{ t:"How to Inspire Confidence in Others", c:"Leadership" },
{ t:"The Role of Responsibility in Success", c:"Leadership" },
{ t:"How to Improve Leadership Mindset", c:"Leadership" },
{ t:"Importance of Learning From Mistakes", c:"Leadership" },
{ t:"How to Stay Determined", c:"Leadership" },

{ t:"The Importance of Strong Work Ethics", c:"Leadership" },
{ t:"How to Lead by Example", c:"Leadership" },
{ t:"The Role of Motivation in Team Success", c:"Leadership" },
{ t:"How to Build Leadership Confidence", c:"Leadership" },
{ t:"Importance of Visionary Thinking", c:"Leadership" },
{ t:"How to Handle Team Conflicts", c:"Leadership" },
{ t:"The Importance of Self Improvement", c:"Leadership" },
{ t:"How Leaders Create Opportunities", c:"Leadership" },
{ t:"Importance of Staying Focused", c:"Leadership" },
{ t:"How to Achieve Long Term Success", c:"Leadership" },




{ t:"Why Algorithm Efficiency Matters", c:"BTech CSE" },
{ t:"Object Oriented Programming Concepts", c:"BTech CSE" },
{ t:"Operating System Scheduling", c:"BTech CSE" },
{ t:"DBMS Normalization", c:"BTech CSE" },
{ t:"TCP vs UDP", c:"BTech CSE" },
{ t:"What is Cloud Computing?", c:"BTech CSE" },
{ t:"Cybersecurity Threats", c:"BTech CSE" },
{ t:"Machine Learning Basics", c:"BTech CSE" },
{ t:"How Blockchain Works", c:"BTech CSE" },
{ t:"Artificial Intelligence Applications", c:"BTech CSE" },

{ t:"Difference Between Stack and Queue", c:"BTech CSE" },
{ t:"Monolithic vs Microservices", c:"BTech CSE" },
{ t:"Big O Notation", c:"BTech CSE" },
{ t:"Data Structures in Real Life", c:"BTech CSE" },
{ t:"Importance of Version Control", c:"BTech CSE" },
{ t:"SQL vs NoSQL", c:"BTech CSE" },
{ t:"REST API Basics", c:"BTech CSE" },
{ t:"Future of Quantum Computing", c:"BTech CSE" },
{ t:"Importance of Clean Code", c:"BTech CSE" },
{ t:"Software Development Life Cycle", c:"BTech CSE" },

{ t:"Importance of Computer Networks", c:"BTech CSE" },
{ t:"Compiler Design Basics", c:"BTech CSE" },
{ t:"How Search Engines Work", c:"BTech CSE" },
{ t:"Importance of Cyber Hygiene", c:"BTech CSE" },
{ t:"Cloud vs Traditional Servers", c:"BTech CSE" },
{ t:"Role of AI in Healthcare", c:"BTech CSE" },
{ t:"How Operating Systems Manage Memory", c:"BTech CSE" },
{ t:"Difference Between Process and Thread", c:"BTech CSE" },
{ t:"Importance of Database Indexing", c:"BTech CSE" },
{ t:"Applications of Data Mining", c:"BTech CSE" },

{ t:"How DNS Works", c:"BTech CSE" },
{ t:"Importance of Data Security", c:"BTech CSE" },
{ t:"Introduction to Ethical Hacking", c:"BTech CSE" },
{ t:"Role of APIs in Modern Apps", c:"BTech CSE" },
{ t:"Virtualization in Cloud Computing", c:"BTech CSE" },
{ t:"How Recommendation Systems Work", c:"BTech CSE" },
{ t:"Difference Between HTTP and HTTPS", c:"BTech CSE" },
{ t:"Importance of UI and UX Design", c:"BTech CSE" },
{ t:"Introduction to Internet of Things", c:"BTech CSE" },
{ t:"How Encryption Protects Data", c:"BTech CSE" },

{ t:"Agile vs Waterfall Model", c:"BTech CSE" },
{ t:"Importance of Software Testing", c:"BTech CSE" },
{ t:"Role of DevOps in Software Development", c:"BTech CSE" },
{ t:"How Social Media Algorithms Work", c:"BTech CSE" },
{ t:"Basics of Data Analytics", c:"BTech CSE" },
{ t:"Future of Artificial Intelligence", c:"BTech CSE" },
{ t:"Importance of Problem Solving in Programming", c:"BTech CSE" },
{ t:"Applications of Computer Vision", c:"BTech CSE" },
{ t:"Difference Between RAM and ROM", c:"BTech CSE" },
{ t:"How Firewalls Protect Networks", c:"BTech CSE" },

{ t:"Introduction to Neural Networks", c:"BTech CSE" },
{ t:"Role of Automation in Technology", c:"BTech CSE" },
{ t:"Importance of Open Source Software", c:"BTech CSE" },
{ t:"How GPS Technology Works", c:"BTech CSE" },
{ t:"Future of Robotics", c:"BTech CSE" },
{ t:"Applications of Augmented Reality", c:"BTech CSE" },
{ t:"Difference Between AI and ML", c:"BTech CSE" },
{ t:"Importance of Linux in Servers", c:"BTech CSE" },
{ t:"How Digital Payments Work", c:"BTech CSE" },
{ t:"Role of Data Structures in Coding", c:"BTech CSE" },

{ t:"Introduction to Full Stack Development", c:"BTech CSE" },
{ t:"Importance of Communication for Engineers", c:"BTech CSE" },
{ t:"Basics of Computer Architecture", c:"BTech CSE" },
{ t:"Applications of Blockchain Beyond Cryptocurrency", c:"BTech CSE" },
{ t:"How Chatbots Work", c:"BTech CSE" },
{ t:"Importance of API Security", c:"BTech CSE" },
{ t:"How Load Balancers Work", c:"BTech CSE" },
{ t:"Difference Between Frontend and Backend", c:"BTech CSE" },
{ t:"Importance of Data Backup", c:"BTech CSE" },
{ t:"Role of AI in Cybersecurity", c:"BTech CSE" },

{ t:"Introduction to Edge Computing", c:"BTech CSE" },
{ t:"Applications of Big Data", c:"BTech CSE" },
{ t:"How E Commerce Websites Work", c:"BTech CSE" },
{ t:"Importance of Software Documentation", c:"BTech CSE" },
{ t:"Role of Sensors in IoT", c:"BTech CSE" },
{ t:"How Voice Assistants Work", c:"BTech CSE" },
{ t:"Difference Between IPv4 and IPv6", c:"BTech CSE" },
{ t:"Importance of Coding Standards", c:"BTech CSE" },
{ t:"Future of Human Computer Interaction", c:"BTech CSE" },
{ t:"How CAPTCHA Works", c:"BTech CSE" },

{ t:"Role of Databases in Applications", c:"BTech CSE" },
{ t:"Introduction to Mobile App Development", c:"BTech CSE" },
{ t:"Importance of Cloud Security", c:"BTech CSE" },
{ t:"How Search Algorithms Work", c:"BTech CSE" },
{ t:"Applications of Natural Language Processing", c:"BTech CSE" },
{ t:"Difference Between LAN and WAN", c:"BTech CSE" },
{ t:"Importance of Time Complexity", c:"BTech CSE" },
{ t:"How Recommendation Engines Work", c:"BTech CSE" },
{ t:"Role of AI in Self Driving Cars", c:"BTech CSE" },
{ t:"Introduction to Data Visualization", c:"BTech CSE" },

{ t:"Importance of Continuous Learning in Tech", c:"BTech CSE" },
{ t:"How Cloud Storage Works", c:"BTech CSE" },
{ t:"Difference Between Authentication and Authorization", c:"BTech CSE" },
{ t:"Role of GitHub in Development", c:"BTech CSE" },
{ t:"Applications of Quantum Computing", c:"BTech CSE" },
{ t:"How Spam Filters Work", c:"BTech CSE" },
{ t:"Importance of Cyber Ethics", c:"BTech CSE" },
{ t:"Future of 6G Networks", c:"BTech CSE" },
{ t:"How Streaming Platforms Work", c:"BTech CSE" },
{ t:"Importance of Innovation in Technology", c:"BTech CSE" }


    ];
  
  const PREP_TIME = 60;
  const SPEAK_TIME = 120;
  const FILLER_WORDS = ['um','uh','like','you know','basically','literally','right','so','actually','kind of','sort of','i mean','well','anyway','okay','hmm'];
  
  let state = {
    screen: 'start',
    topic: null,
    spinning: false,
    prepTimer: null,
    speakTimer: null,
    prepLeft: PREP_TIME,
    speakLeft: SPEAK_TIME,
    transcript: '',
    interimTranscript: '',
    recognition: null,
    recognitionActive: false,
    history: [],
    speakStart: null,
  };
  
  // -- WHEEL --
  const canvas = document.getElementById('wheelCanvas');
  const ctx = canvas.getContext('2d');
  const SEGMENTS = 12;
  const COLORS = ['#1a2235','#111827','#1a2235','#111827','#1a2235','#111827','#1a2235','#111827','#1a2235','#111827','#1a2235','#111827'];
  const ACCENT_COLORS = ['#5ee7aa','#3dcf90','#2ab878','#5ee7aa','#3dcf90','#2ab878','#5ee7aa','#3dcf90','#2ab878','#5ee7aa','#3dcf90','#2ab878'];
  let wheelAngle = 0;
  let wheelVelocity = 0;
  let wheelAnimFrame = null;
  let wheelTopics = [];
  
  function getWheelTopics() {
    const shuffled = [...TOPICS].sort(() => Math.random()-0.5);
    return shuffled.slice(0, SEGMENTS);
  }
  
  function drawWheel(angle) {
    const cx = 160, cy = 160, r = 150;
    ctx.clearRect(0, 0, 320, 320);
    const arc = (Math.PI * 2) / SEGMENTS;
  
    for (let i = 0; i < SEGMENTS; i++) {
      const start = angle + i * arc;
      const end = start + arc;
  
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.arc(cx, cy, r, start, end);
      ctx.closePath();
      ctx.fillStyle = COLORS[i];
      ctx.fill();
      ctx.strokeStyle = 'rgba(94,231,170,0.15)';
      ctx.lineWidth = 1;
      ctx.stroke();
  
      // Arc highlight
      ctx.beginPath();
      ctx.arc(cx, cy, r - 2, start + 0.04, end - 0.04);
      ctx.strokeStyle = ACCENT_COLORS[i];
      ctx.lineWidth = 2;
      ctx.stroke();
  
      // Text
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(start + arc / 2);
      ctx.textAlign = 'right';
      ctx.fillStyle = '#8a8fa8';
      ctx.font = '500 9px Syne, sans-serif';
      const label = wheelTopics[i] ? wheelTopics[i].t.substring(0, 18) : '';
      ctx.fillText(label, r - 10, 3);
      ctx.restore();
    }
  
    // Center circle
    ctx.beginPath();
    ctx.arc(cx, cy, 28, 0, Math.PI * 2);
    ctx.fillStyle = '#0a0b0f';
    ctx.fill();
    ctx.strokeStyle = 'rgba(94,231,170,0.3)';
    ctx.lineWidth = 1.5;
    ctx.stroke();
  }
  
  function spinWheel() {
    if (state.spinning) return;
    state.spinning = true;
    wheelTopics = getWheelTopics();
    document.getElementById('btnSpin').disabled = true;
    document.getElementById('btnStart').disabled = true;
    document.getElementById('topicText').textContent = 'Spinning...';
    document.getElementById('topicText').style.color = 'var(--text2)';
    document.getElementById('topicCategory').textContent = '—';
    canvas.classList.add('spinning');
  
    const spinCount = 5 + Math.random() * 5;
    wheelVelocity = spinCount * 0.08;
    const targetAngle = wheelAngle + spinCount * Math.PI * 2;
    const startAngle = wheelAngle;
    const duration = 3500 + Math.random() * 1500;
    const startTime = performance.now();
  
    function ease(t) {
      // ease out quint
      return 1 - Math.pow(1-t, 5);
    }
  
    function animate(now) {
      const elapsed = now - startTime;
      const t = Math.min(elapsed / duration, 1);
      wheelAngle = startAngle + (targetAngle - startAngle) * ease(t);
      drawWheel(wheelAngle);
  
      if (t < 1) {
        wheelAnimFrame = requestAnimationFrame(animate);
      } else {
        wheelAngle = targetAngle;
        drawWheel(wheelAngle);
        canvas.classList.remove('spinning');
        state.spinning = false;
  
        // Determine which segment is at top (needle at -90deg from center)
        const arc = (Math.PI * 2) / SEGMENTS;
        const normalAngle = ((wheelAngle % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2);
        const topAngle = (Math.PI * 1.5 - normalAngle + Math.PI * 2) % (Math.PI * 2);
        const selectedIdx = Math.floor(topAngle / arc) % SEGMENTS;
        const selected = wheelTopics[selectedIdx] || wheelTopics[0];
        state.topic = selected;
  
        // Show topic with animation
        const tEl = document.getElementById('topicText');
        tEl.style.opacity = 0;
        setTimeout(() => {
          tEl.textContent = selected.t;
          tEl.style.color = 'var(--accent)';
          tEl.style.opacity = 1;
          tEl.classList.add('topic-pop');
          document.getElementById('topicCategory').textContent = selected.c;
          document.getElementById('btnSpin').disabled = false;
          document.getElementById('btnStart').disabled = false;
        }, 100);
      }
    }
    requestAnimationFrame(animate);
  }
  
  // -- PHASE BAR --
  function setPhase(n) {
    ['ps1','ps2','ps3'].forEach((id, i) => {
      const el = document.getElementById(id);
      el.className = 'phase-step';
      if (i < n) el.classList.add('done');
      if (i === n - 1) { el.classList.remove('done'); el.classList.add('active'); }
    });
  }
  
  function showScreen(id) {
    ['screen-start','screen-prep','screen-speak','screen-done'].forEach(s => {
      document.getElementById(s).classList.remove('active');
    });
    document.getElementById(id).classList.add('active');
  }
  
  // -- PREP --
  function startPrep() {
    if (!state.topic) return;
    document.getElementById('prepTopicDisplay').textContent = state.topic.t;
    setPhase(1);
    showScreen('screen-prep');
    state.prepLeft = PREP_TIME;
    updatePrepTimer();
    state.prepTimer = setInterval(() => {
      state.prepLeft--;
      updatePrepTimer();
      if (state.prepLeft <= 0) {
        clearInterval(state.prepTimer);
        startSpeaking();
      }
    }, 1000);
  }
  
  function updatePrepTimer() {
    const m = Math.floor(state.prepLeft / 60);
    const s = state.prepLeft % 60;
    document.getElementById('prepTimerDisplay').textContent = `${m}:${s.toString().padStart(2,'0')}`;
    const circumference = 534;
    const progress = state.prepLeft / PREP_TIME;
    const offset = circumference * (1 - progress);
    const ring = document.getElementById('prepRing');
    ring.style.strokeDashoffset = offset;
    ring.style.stroke = state.prepLeft <= 10 ? 'var(--red)' : 'var(--accent)';
  }
  
  function skipPrep() {
    clearInterval(state.prepTimer);
    startSpeaking();
  }
  
  // -- SPEAK --
  function startSpeaking() {
    document.getElementById('speakTopicDisplay').textContent = state.topic.t;
    setPhase(2);
    showScreen('screen-speak');
    state.transcript = '';
    state.interimTranscript = '';
    state.speakLeft = SPEAK_TIME;
    state.speakStart = Date.now();
    updateSpeakTimer();
    updateTranscriptLive();
    initSpeechRecognition();
  
    state.speakTimer = setInterval(() => {
      state.speakLeft--;
      updateSpeakTimer();
      if (state.speakLeft <= 0) {
        clearInterval(state.speakTimer);
        finishSpeaking();
      }
    }, 1000);
  }
  
  function updateSpeakTimer() {
    const m = Math.floor(state.speakLeft / 60);
    const s = state.speakLeft % 60;
    document.getElementById('speakTimerDisplay').textContent = `${m}:${s.toString().padStart(2,'0')}`;
    const circumference = 408;
    const progress = state.speakLeft / SPEAK_TIME;
    const offset = circumference * (1 - progress);
    const ring = document.getElementById('speakRing');
    ring.style.strokeDashoffset = offset;
    ring.style.stroke = state.speakLeft <= 20 ? 'var(--red)' : state.speakLeft <= 40 ? 'var(--warn)' : 'var(--accent)';
  }
  
  function initSpeechRecognition() {
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SR) {
      document.getElementById('noMicWarn').style.display = 'block';
      document.getElementById('waveform').classList.add('paused');
      return;
    }
  
    const rec = new SR();
    rec.continuous = true;
    rec.interimResults = true;
    rec.lang = 'en-US';
    state.recognition = rec;
  
    rec.onresult = (e) => {
      let interim = '';
      for (let i = e.resultIndex; i < e.results.length; i++) {
        const t = e.results[i][0].transcript;
        if (e.results[i].isFinal) {
          state.transcript += t + ' ';
        } else {
          interim += t;
        }
      }
      state.interimTranscript = interim;
      updateTranscriptLive();
    };
  
    rec.onerror = (e) => {
      if (e.error === 'not-allowed' || e.error === 'audio-capture') {
        document.getElementById('noMicWarn').style.display = 'block';
        document.getElementById('waveform').classList.add('paused');
      }
    };
  
    rec.onend = () => {
      if (state.speakLeft > 0 && state.recognitionActive) {
        try { rec.start(); } catch(e) {}
      }
    };
  
    state.recognitionActive = true;
    try { rec.start(); } catch(e) {}
  }
  
  function updateTranscriptLive() {
    const el = document.getElementById('transcriptLive');
    const full = state.transcript + (state.interimTranscript ? `<span class="interim">${state.interimTranscript}</span>` : '');
    if (full.trim()) {
      el.innerHTML = full;
      document.getElementById('transcriptPlaceholder') && (document.getElementById('transcriptPlaceholder').style.display = 'none');
      el.scrollTop = el.scrollHeight;
    }
  }
  
  function stopSpeaking() {
    clearInterval(state.speakTimer);
    finishSpeaking();
  }
  
  function finishSpeaking() {
    state.recognitionActive = false;
    if (state.recognition) {
      try { state.recognition.stop(); } catch(e) {}
      state.recognition = null;
    }
    showResults();
  }
  
  // -- RESULTS --
  function analyzeText(text) {
    const words = text.trim().split(/\s+/).filter(w => w.length > 0);
    const wordCount = words.length;
    const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0).length;
    const elapsed = Math.max(1, (SPEAK_TIME - state.speakLeft));
    const wpm = Math.round(wordCount / (elapsed / 60));
  
    const fillerCount = words.filter(w =>
      FILLER_WORDS.some(f => w.toLowerCase().replace(/[^a-z ]/g,'').includes(f))
    ).length;
  
    let score = 70;
    if (wordCount > 100) score += 10;
    if (wordCount > 200) score += 10;
    if (wpm >= 100 && wpm <= 160) score += 5;
    if (fillerCount < 5) score += 5;
    if (sentences > 5) score += 5;
    score = Math.min(100, score);
  
    return { wordCount, wpm, fillerCount, sentences, score };
  }
  
  function generateFeedback(stats, text) {
    const items = [];
  
    if (stats.wordCount < 50) {
      items.push({icon:'⚠️', text:'Your response was quite brief. Aim to develop your points further with examples and explanations.'});
    } else if (stats.wordCount >= 200) {
      items.push({icon:'✅', text:`Great content volume! ${stats.wordCount} words shows confident coverage of the topic.`});
    } else {
      items.push({icon:'✅', text:`Good effort with ${stats.wordCount} words. Try to expand on specific examples next time.`});
    }
  
    if (stats.wpm < 80) {
      items.push({icon:'💡', text:'Your pace was a bit slow. Aim for 110–150 WPM for natural conversational speech.'});
    } else if (stats.wpm > 180) {
      items.push({icon:'⚠️', text:`Your speed (${stats.wpm} WPM) was high. Slow down slightly — listeners need time to absorb your points.`});
    } else {
      items.push({icon:'✅', text:`Your speaking pace (${stats.wpm} WPM) is in the natural range. Keep it up!`});
    }
  
    if (stats.fillerCount > 8) {
      items.push({icon:'⚠️', text:`${stats.fillerCount} filler words detected (um, uh, like, etc.). Practice replacing them with a brief pause.`});
    } else if (stats.fillerCount <= 2) {
      items.push({icon:'✅', text:'Excellent filler word control! Your speech sounded clean and polished.'});
    } else {
      items.push({icon:'💡', text:`${stats.fillerCount} filler words found. Awareness is the first step — work on replacing them with pauses.`});
    }
  
    if (stats.sentences < 4 && stats.wordCount > 30) {
      items.push({icon:'💡', text:'Try using shorter, clearer sentences. Break long ideas into digestible chunks.'});
    } else if (stats.sentences >= 8) {
      items.push({icon:'✅', text:'Good sentence variety helps your audience follow along. Well structured!'});
    }
  
    // Structure check
    const lowerText = text.toLowerCase();
    const hasStructure = ['first','second','third','finally','in conclusion','to summarize','for example','for instance','such as'].some(w => lowerText.includes(w));
    if (hasStructure) {
      items.push({icon:'✅', text:'You used structural language (first, for example, in conclusion…) — great for clarity!'});
    } else if (stats.wordCount > 60) {
      items.push({icon:'💡', text:'Try using signpost words (firstly, however, in conclusion) to make your structure clear to listeners.'});
    }
  
    return items;
  }
  
  function showResults() {
    setPhase(3);
    const text = state.transcript.trim();
    const stats = analyzeText(text);
  
    document.getElementById('doneTopicDisplay').textContent = state.topic.t;
    document.getElementById('overallScore').textContent = `${stats.score}/100`;
  
    const finalEl = document.getElementById('transcriptFinal');
    if (text) {
      finalEl.textContent = text;
    } else {
      finalEl.innerHTML = '<span class="transcript-placeholder">No speech was captured. Make sure microphone access is granted.</span>';
    }
  
    document.getElementById('statWords').textContent = stats.wordCount;
    document.getElementById('statWPM').textContent = stats.wpm;
    document.getElementById('statFiller').textContent = stats.fillerCount;
    document.getElementById('statSentences').textContent = stats.sentences;
  
    const feedback = generateFeedback(stats, text);
    const feedbackList = document.getElementById('feedbackList');
    feedbackList.innerHTML = '';
    feedback.forEach(f => {
      const div = document.createElement('div');
      div.className = 'feedback-item';
      div.innerHTML = `<span class="feedback-icon">${f.icon}</span><span>${f.text}</span>`;
      feedbackList.appendChild(div);
    });
  
    // Add to history
    state.history.unshift({
      topic: state.topic.t,
      category: state.topic.c,
      score: stats.score,
      words: stats.wordCount,
      time: new Date().toLocaleTimeString([], {hour:'2-digit',minute:'2-digit'}),
    });
    updateHistory();
  
    showScreen('screen-done');
  
    // Trigger AI feedback (AI.js listens for this)
    if (typeof window.runAIFeedback === 'function') {
      window.runAIFeedback({
        topic: state.topic,
        transcript: text,
        stats: stats,
        prepTime: PREP_TIME,
        speakTime: SPEAK_TIME - state.speakLeft,
      });
    }
  }
  
  function updateHistory() {
    const list = document.getElementById('historyList');
    document.getElementById('sessionCount').textContent = `${state.history.length} session${state.history.length !== 1 ? 's' : ''}`;
    if (state.history.length === 0) {
      list.innerHTML = '<div class="empty-history">No sessions yet. Spin to get started!</div>';
      return;
    }
    list.innerHTML = '';
    state.history.forEach(h => {
      const dotClass = h.score >= 80 ? 'dot-green' : h.score >= 60 ? 'dot-yellow' : 'dot-red';
      const div = document.createElement('div');
      div.className = 'history-item';
      div.innerHTML = `
        <div class="dot ${dotClass}"></div>
        <div class="history-topic">${h.topic}</div>
        <div class="history-score">${h.score}/100</div>
        <div class="history-time">${h.time}</div>
      `;
      list.appendChild(div);
    });
  }
  
  function resetToStart() {
    state.topic = null;
    document.getElementById('topicText').textContent = 'Spin to get a topic';
    document.getElementById('topicText').style.color = 'var(--text2)';
    document.getElementById('topicCategory').textContent = '—';
    document.getElementById('btnStart').disabled = true;
    document.getElementById('noMicWarn').style.display = 'none';
    const badge = document.getElementById('aiStatusBadge');
    if (badge) { badge.className = 'ai-status-badge ai-status-loading'; badge.innerHTML = '<span class="ai-spinner"></span> Analyzing...'; }
    const loading = document.getElementById('aiLoadingState');
    const content = document.getElementById('aiFeedbackContent');
    const error = document.getElementById('aiErrorState');
    if (loading) loading.style.display = 'block';
    if (content) { content.style.display = 'none'; content.innerHTML = ''; }
    if (error) error.style.display = 'none';
    wheelTopics = getWheelTopics();
    setPhase(0);
    showScreen('screen-start');
  }
  
  function copyTranscript() {
    const text = state.transcript.trim();
    if (!text) return;
    navigator.clipboard.writeText(text).then(() => {
      const btn = event.target;
      const orig = btn.textContent;
      btn.textContent = '✓ Copied!';
      setTimeout(() => btn.textContent = orig, 1800);
    }).catch(() => {
      alert('Could not copy. Please select and copy the text manually.');
    });
  }
  
  // -- INIT --
  wheelTopics = getWheelTopics();
  drawWheel(0);
  updateHistory();
  setPhase(0);
  