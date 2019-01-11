const quotes = [
  {
    quote: "Clear alcohols are for rich women on diets.",
    image: 'ron.png'
  },
  {
    quote: "Crying: acceptable at funerals and the Grand Canyon.",
    image: 'ron.png'
  },
  {
    quote: "I call this turf 'n' turf. It's a 16 oz T-bone and a 24 oz porterhouse. Also, whiskey and a cigar. I am going to consume all of this at the same time because I am a free American.",
    image: 'ron.png'
  },
  {
    quote: "Under my tutelage, you will grow from boys to men. From men into gladiators. And from gladiators into Swansons.",
    image: 'ron.png'
  },
  {
    quote: "I'm a simple man. I like pretty, dark-haired women, and breakfast food.",
    image: 'ron.png'
  },
  {
    quote: "Never half-ass two things. Whole-ass one thing.",
    image: 'ron.png'
  },
  {
    quote: "[On bowling] Straight down the middle. No hook, no spin, no fuss. Anything more and this becomes figure skating.",
    image: 'ron.png'
  },
  {
    quote: "I don't want to paint with a broad brush here, but every single contractor in the world is a miserable, incompetent thief.",
    image: 'ron.png'
  },
  {
    quote: "Fishing relaxes me. It's like yoga, except I still get to kill something.",
    image: 'ron.png'
  },
  {
    quote: "No home is complete without a proper toolbox. Here's April and Andy's: A hammer, a half eaten pretzel, a baseball card, some cartridge that says Sonic and Hedgehog, a scissor half, a flashlight filled with jellybeans.",
    image: 'ron.png'
  },
  {
    quote: "Just give me all the bacon and eggs you have. Wait...wait. I worry what you just heard was: Give me a lot of bacon and eggs. What I said was: Give me all the bacon and eggs you have. Do you understand?",
    image: 'ron.png'
  },
  {
    quote: "When people get a little too chummy with me I like to call them by the wrong name to let them know I don't really care about them.",
    image: 'ron.png'
  },
  {
    quote: "There's only one thing I hate more than lying: skim milk. Which is water that's lying about being milk.",
    image: 'ron.png'
  },
  {
    quote: "The government is a greedy piglet that suckles on a taxpayer's teat until they have sore, chapped nipples.",
    image: 'ron.png'
  },
  {
    quote: "The less I know about other people's affairs, the happier I am. I'm not interested in caring about people. I once worked with a guy for three years and never learned his name. Best friend I ever had. We still never talk sometimes.",
    image: 'ron.png'
  },
  {
    quote: "When I eat, it is the food that is scared.",
    image: 'ron.png'
  },
  {
    quote: "My only official recommendations are US Army-issued mustache trimmers, Morton's Salt, and the C.R. Lawrence Fein two inch axe-style scraper oscillating knife blade.",
    image: 'ron.png'
  },
  {
    quote: "Are you going to tell a man that he can't fart in his own car?",
    image: 'ron.png'
  },
  {
    quote: "Turkey can never beat cow.",
    image: 'ron.png'
  },
  {
    quote: "It's always a good idea to demonstrate to your coworkers that you are capable of withstanding a tremendous amount of pain.",
    image: 'ron.png'
  },
  {
    quote: "There are three acceptable haircuts: high and tight, crew cut, buzz cut.",
    image: 'ron.png'
  },
  {
    quote: "Capitalism: God's way of determining who is smart and who is poor.",
    image: 'ron.png'
  },
  {
    quote: "Any dog under fifty pounds is a cat and cats are useless.",
    image: 'ron.png'
  },
  {
    quote: "Fish, for sport only, not for meat. Fish meat is practically a vegetable.",
    image: 'ron.png'
  },
  {
    quote: "There is only one bad word: taxes.",
    image: 'ron.png'
  },
  {
    quote: "History began July 4th, 1776. Anything before that was a mistake.",
    image: 'ron.png'
  },
  {
    quote: "Cultivating a manly musk puts opponent on notice.",
    image: 'ron.png'
  },
  {
    quote: "Give a man a fish and feed him for a day. Don't teach a man to fish... and feed yourself. He's a grown man. And fishing's not that hard.",
    image: 'ron.png'
  },
  {
    quote: "Child labor laws are ruining this country.",
    image: 'ron.png'
  },
  {
    quote: "Great job, everyone. The reception will be held in each of our individual houses, alone.",
    image: 'ron.png'
  },
  {
    quote: "America: The only country that matters. If you want to experience other 'cultures,' use an atlas or a ham radio.",
    image: 'ron.png'
  },
  {
    quote: "The key to burning an ex-wife effigy is to dip it in paraffin wax and then toss the flaming bottle of isopropyl alcohol from a safe distance. Do not stand too close when you light an ex-wife effigy.",
    image: 'ron.png'
  },
  {
    quote: "There are only three ways to motivate people: money, fear, and hunger.",
    image: 'ron.png'
  },
  {
    quote: "Shorts over six inches are capri pants, shorts under six inches are European.",
    image: 'ron.png'
  },
  {
    quote: "Friends: one to three is sufficient.",
    image: 'ron.png'
  },
  {
    quote: "Breakfast food can serve many purposes.",
    image: 'ron.png'
  },
  {
    quote: "Honor: if you need it defined, you don't have it.",
    image: 'ron.png'
  },
  {
    quote: "One rage every three months is permitted. Try not to hurt anyone who doesn't deserve it.",
    image: 'ron.png'
  },
  {
    quote: "Strippers do nothing for me...but I will take a free breakfast buffet anytime, anyplace.",
    image: 'ron.png'
  },
  {
    quote: "I like saying 'No,' it lowers their enthusiasm.",
    image: 'ron.png'
  },
  {
    quote: "You had me at meat tornado.",
    image: 'ron.png'
  },
  {
    quote: "There must be a mistake, you've accidentally given me the food that my food eats.",
    image: 'ron.png'
  },
  {
    quote: "Son, there is no wrong way to consume alcohol.",
    image: 'ron.png'
  },
  {
    quote: "Keep your tears in your eyes where they belong.",
    image: 'ron.png'
  },
  {
    quote: "I've cried twice in my life. Once when I was seven and hit by a school bus. And then again when I heard that Li'l Sebastian has passed.",
    image: 'ron.png'
  },
  {
    quote: "I hate everything.",
    image: 'ron.png'
  },
  {
    quote: "I love nothing.",
    image: 'ron.png'
  },
  {
    quote: "I love riddles!",
    image: 'ron.png'
  },
  {
    quote: "Don't waste energy moving unless necessary.",
    image: 'ron.png'
  },
  {
    quote: "I'll take that steak to go. Please and thank you.",
    image: 'ron.png'
  },
  {
    quote: "Creativity is for people with glasses who like to lie.",
    image: 'ron.png'
  },
  {
    quote: "Children are terrible artists and artists are crooks.",
    image: 'ron.png'
  },
  {
    quote: "Tom put all my records into this rectangle!",
    image: 'ron.png'
  },
  {
    quote: "I believe luck is a concept invented by the weak to explain their failures.",
    image: 'ron.png'
  },
  {
    quote: "What's cholesterol?",
    image: 'ron.png'
  },
  {
    quote: "People who buy things are suckers.",
    image: 'ron.png'
  },
  {
    quote: "I'm going to get 12 eggs and part of a dead animal. Dealer's choice. Please and thank you.",
    image: 'ron.png'
  },
  {
    quote: "What the f*ck is a German muffin?!?",
    image: 'ron.png'
  },
  {
    quote: "I wanna punch you in the face so bad right now.",
    image: 'ron.png'
  },
  {
    quote: 'You shut your mouth, you have all the strengths.',
    image: 'knope.png'
  },
  {
    quote: 'You know my code: hoes before bros. Uteruses before duderuses...Ovaries before brovaries.',
    image: 'knope.png'
  },
  {
    quote: "I'm going to be direct and honest with you. I would like a glass of red wine and I'll take the cheapest one you have because I can't tell the difference.",
    image: 'knope.png'
  },
  {
    quote: 'Relationships are like SCUBA diving. If you come up too fast you get the bends. And the reasons why I know this is because I was dating a guy once and we were SCUBA diving and I told him that I loved him underwater and he shot up really fast and got the bends.',
    image: 'knope.png'
  },
  {
    quote: "We need to remember what's important in life: friends, waffles, work. Or waffles, friends, work. Doesn't matter, but work is third.",
    image: 'knope.png'
  },
  {
    quote: "I'm a feminist, okay? I would never ever go to a strip club. I've gone on record that if I had to have a stripper's name, it would be Equality.",
    image: 'knope.png'
  },
  {
    quote: "You should ask her on horseback. No, you should ask her in a hot air balloon. No, she should be on a hot air balloon and you should ride up on horseback. Oh, wait. She's in the balloon; you ride up on horseback. You point to the sky. Up there, skywriting. Marry me, Ann.",
    image: 'knope.png'
  },
  {
    quote: "I am big enough to admit that I am often inspired by myself.",
    image: 'knope.png'
  },
  {
    quote: "I'm cried out but I want to cry more so I'm rehydrating.",
    image: 'knope.png'
  },
  {
    quote: "Oh Ann, you beautiful rule-breaking moth.",
    image: 'knope.png'
  },
  {
    quote: 'Ann, you beautiful spinster, I will find you love.',
    image: 'knope.png'
  },
  {
    quote: 'Ann, you beautiful tropical fish.',
    image: 'knope.png'
  },
  {
    quote: 'Ann, you poetic and noble land-mermaid.',
    image: 'knope.png'
  },
  {
    quote: "I'm gonna get drunk and then I'm gonna order a three course meal where each course is made of dessert.",
    image: 'knope.png'
  },
  {
    quote: 'If you look inside your bags you will find a few things. A bouquet of hand crocheted flower pens, a mosaic portrait of each of you made from the crushed bottles of your favorite diet soda and a personalized 5,000-word essay of why you are all so awesome.',
    image: 'knope.png'
  },
  {
    quote: "The library is the worst group of people ever assembled in history. They're mean, conniving, rude, and extremely well-read, which makes them dangerous.",
    image: 'knope.png'
  },
  {
    quote: 'I stand behind my decision to avoid salad and other disgusting things.',
    image: 'knope.png'
  },
  {
    quote: "I mean, that's why people respect Hillary Clinton so much, because nobody takes a punch like her. She's the strongest, smartest punching bag in the world.",
    image: 'knope.png'
  },
  {
    quote: 'Why would anyone ever eat anything besides breakfast food?',
    image: 'knope.png'
  },
  {
    quote: "One person's 'annoying' is another person's 'inspiring and heroic'.",
    image: 'knope.png'
  },
  {
    quote: "I ate a brownie once. At a party in college. It was intense. It was kind of indescribable, actually. I felt like I was floating. Turns out there wasn't any pot in the brownie. It was just an insanely good brownie.",
    image: 'knope.png'
  },
  {
    quote: 'Sophisticated with a hint of slutty.',
    image: 'knope.png'
  },
  {
    quote: "Calzones are pointless. They're just pizza that's harder to eat. No one likes them.",
    image: 'knope.png'
  },
  {
    quote: 'Slowing down is not really my jam.',
    image: 'knope.png'
  },
  {
    quote: "Winning is every girl's dream.",
    image: 'knope.png'
  },
  {
    quote: 'Some people object to powerful depictions of awesome ladies.',
    image: 'knope.png'
  },
  {
    quote: "What I hear when I'm being yelled at is people caring loudly at me.",
    image: 'knope.png'
  },
  {
    quote: 'Ann, beautiful, talented, brilliant, powerful musk ox.',
    image: 'knope.png'
  },
  {
    quote: 'Guys love it when you can show them you’re better than they are at something they love.',
    image: 'knope.png'
  },
  {
    quote: 'I’m a goddess, a glorious female warrior.',
    image: 'knope.png'
  },
  {
    quote: 'Good, I hate paperwork. I hardly ever do it in my bed on a Saturday night listening to old Spice Girls CDs.',
    image: 'knope.png'
  },
  {
    quote: "Ain't no party like a Leslie Knope party, 'cause a Leslie Knope party is 30 parties.",
    image: 'knope.png'
  },
  {
    quote: 'Tom Haverford is a selfish, sleazy, self-promoting, good-hearted, secretly kind and wonderful tiny, little person.',
    image: 'knope.png'
  },
  {
    quote: "Oh! You know what's always sexy? Fingerless gloves.",
    image: 'knope.png'
  },
  {
    quote: 'I need you to text me every 30 seconds saying that everything is gonna be okay.',
    image: 'knope.png'
  },
  {
    quote: "We're all just calm and happy people together enjoying ourselves on earth.",
    image: 'knope.png'
  },
  {
    quote: 'Look, am I proud of it? Yes, because Eagleton sucks. Is it the classiest move? Yes, because Eagleton sucks. Would I do it again? Yes, because Eagleton sucks.',
    image: 'knope.png'
  },
  {
    quote: 'I took your idea and I made it better.',
    image: 'knope.png'
  },
  {
    quote: 'No one achieves anything alone.',
    image: 'knope.png'
  },
  {
    quote: 'Math is worthless in real life.',
    image: 'knope.png'
  },
  {
    quote: 'I am super chill all the time.',
    image: 'knope.png'
  },
  {
    quote: "Hey, Leslie. It's Leslie. Hang in there. I love you. Bye.",
    image: 'knope.png'
  },
  {
    quote: "If I seem too passionate, it's because I care. If I come off too strong, it's because I feel strongly. And if I push too hard, it's because things aren't moving fast enough.",
    image: 'knope.png'
  },
  {
    quote: "I'm ready.",
    image: 'knope.png'
  },
  {
    quote: "There's nothing we can't do if we work hard, never sleep, and shirk all other responsibilities in our lives.",
    image: 'knope.png'
  },
  {
    quote: "No matter what I do, literally nothing bad can happen to me. I'm like a white male US senator.",
    image: 'knope.png'
  },
  {
    quote: 'I would like to be president some day, so, no, I have not smoked marijuana.',
    image: 'knope.png'
  },
  {
    quote: "Time is money; Money is power; Power is pizza; Pizza is knowledge. Let's go!",
    image: 'april.png'
  },
  {
    quote: "I really only listen to, like, German death reggae, Halloween sound effects from the 1950s, and Bette Midler. Obviously.",
    image: 'april.png'
  },
  {
    quote: "I'll have a glass of your most expensive red wine mixed with a glass of your cheapest white wine served in a dog bowl. Silly straws all around, please.",
    image: 'april.png'
  },
  {
    quote: "Horizons are dumb. Never broaden your horizons.",
    image: 'april.png'
  },
  {
    quote: "I declare everything you are saying is stupid.",
    image: 'april.png'
  },
  {
    quote: "The air is so fresh. It’s disgusting.",
    image: 'april.png'
  },
  {
    quote: "Ugh. I hate talking to people about things.",
    image: 'april.png'
  },
  {
    quote: "We have a couple of house rules, though. You can't use the front door. You have to climb in through the back window. No personal phone conversations. If you ever speak to me in Spanish, please use the formal 'usted.' And no electricity after 6:00 PM. \nA couple more rules: if you ever watch a sad movie, you have to wear mascara so we can see whether or not you've been crying. There's no noise allowed on Mondays. And no TV after breakfast.",
    image: 'april.png'
  }
]
