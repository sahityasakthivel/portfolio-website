import s1 from "./simulation.png"
import s2 from "./cinema.png"
import s3 from "./gfc.png"
import s4 from "./tfl.png"
import s5 from "./fun.png"

const Projects_Data = [
    {
        s_no:"0",
        s_name:"Predator Prey Simulation",
        s_desc:"Used to simulate various weathter conditions and infections in order to see the effect of the stability on wildlife population. ",
        s_img: s1, 
        s_time: "Python",
        s_readmore: ["Worked in a pair in order to create this application.", "Each animal is given a colour and can breed and catch infection stimulating the behaviour of animals in the wildlife. ", "Users can change weather probability, breeding probability and litter size to see how this would effect the population", "The animals and hunter’s percentages of finding prey are determined by the weather where if it is sunny, they have a higher chance of finding prey and a lower chance of finding prey if it is foggy. Grass is also influenced by the weather and will die if certain conditions are not met.", "All animals can move, eat, breed & die from old age, disease, or lack of food. Plants can grow & die from lack of sunlight, water, or old age. Both animals & plants have a growth rate based on their age so their food value when other animals eat them increases." ]

       
    },
    {
        s_no:"1",
        s_name:"Cinema Booking System",
        s_desc:"Used to simulate a real world cinema booking system where users can book tickets to movies currently playing.",
        s_img: s2, 
        s_time: "Java",
        s_readmore: ["This program loads the screens and the movies it plays at different times from a csv file." ,"Movies are also displayed from a csv file which contains the name of the movie and the price per ticket. It then displays the movies based on the time.", "The users can switch through screens and select a movie they want to watch and the seat they would like to sit in.", "The seats are colour coded based on availability where red is booked, yellow is pending and green is available. A seat will be pending if the user hasn't pressed the confirm button.", "Once the confirm button is pressed, a ticket is loaded which contains information about the price, and the seat they have selected.", "They can refresh the screen by pressing the refresh button which checks the current time and determines which movie should be displayed.( It ensures it doesn't display a movie which has already started or finished)" ]

        
    },

    {
        s_no:"2",
        s_name:"Greggor Financial Companion",
        s_desc:"Financial tracking application where users can track and monitor their spendings and set goals to improve their spending habits.",
        s_img: s3, 
        s_time: "Python, Django Framework, JavaScript",
        s_readmore: ["Worked in a team of 8 to create a website that allows a user to track their financial expenses.","Utilised a Trello board and GitHub to monitor our team’s progress.", "Worked on backend by creating different models, adding different functionalities to the system, and connecting different parts of the system together.", "Also worked on frontend to make the website more visually appealing." ,"Users can input their spendings and can also categorise those expenses. They can set a target for their spending to ensure they stay on track.",  "There is also a gamification element, where users compete with their friends by meeting as many targets as possible, which motivates the user to save money where possible." ]

        
    },

    {
        s_no:"3",
        s_name:"Crowding in London Underground",
        s_desc:"Application to inform users of crowding in London ube stations during all times of the day.",
        s_img: s4, 
        s_time: "JavaScript, HTML",
        s_readmore: ["Users can filter through various tube stations and days in order to identify the best times to travel.", "Utilised a TFL API through an asynchronous AJAX call."]

    
    },

    {
        s_no:"4",
        s_name:"Lexer, Parser and Compiler for FUN language",
        s_desc:"Lexer, Parser and Compiler for the typed language called FUN that targets the LLVM-IR.",
        s_img: s5, 
        s_time: "Scala, LLVM-IR",
        s_readmore: ["FUN Language is a self defined typed language.", "Created a lexer that reads the input program and creates tokens.", "Created a parser that uses these tokens in order to generate an abstract sytax tree.", "Created a compiler that uses the AST to generate machine code."]

    
    },

   

] 
 
export default Projects_Data;