const INFO = {
	main: {
		title: "Abhinav's Personal Website",
		name: "Abhinav Jain",
		email: "a252jain@uwaterloo.ca",
		logo: "../logo.jpg",
	},

	socials: {
		github: "https://github.com/AbhiJ2706",
		linkedin: "https://linkedin.com/in/abhij2706",
		email: "a252jain@uwaterloo.ca"
	},

	homepage: {
		title: "Hi, I'm Abhinav 👋",
		description:
			"I'm a software developer with a passion for AI and ML! As a 4th year CS student at the University of Waterloo, I have gained SWE and AI/ML development experience alike through co-op, extracurriculars, and side projects. I love learning and I strive to explore new technologies while deepening my knowledge.",
	},

	about: {
		title: "Passionate about exploring and understanding new technologies.",
		description:
			"I've worked on a variety of projects over the years in various areas such as AI, ML, Data Science, Robotics, Computer Vision, Web Development, Mobile Development, and more! Most of my projects are open source, and I'm always experimenting with new frameworks and programming techniques.",
	},

	projects: [
		{
			title: "Workout Timer",
			description:
				"A programmable timer for your iPhone!",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/swift/swift.png",
			linkText: "View Source",
			link: "https://github.com/AbhiJ2706/workout-timer",
			progressText: "In progress",
			color: "white"
		},

		{
			title: "ANN in Python",
			description:
				"An implementation of an ANN in Python, using only NumPy. Multiple versions starting with a beginner version. Adding various optimizations to speed up computation.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
			linkText: "View Source",
			link: "https://github.com/AbhiJ2706/numpy_ann",
			progressText: "In progress",
			color: "white"
		},

		{
			title: "ML Workshop series",
			description:
				"Series of workshops on machine learning, including instruction on the basic libraries needed to get started in Python, and an end-to-end guide on the basics of modeling.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
			linkText: "View Source",
			link: "https://github.com/AbhiJ2706/ds-workshops",
			progressText: "In progress",
			color: "white"
		},

		{
			title: "Snake Game Reinforcement Learning",
			description:
				"Reinforcement learning model that uses Q-learning to learn how to play the popular snake game!",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
			linkText: "View Source",
			link: "https://github.com/AbhiJ2706/snake_game_reinforcement_learning",
			progressText: "Complete",
			color: "green"
		},

		{
			title: "Compiler + MIPS Emulator",
			description:
				"Built a compiler for a subset of C++ which generates MIPS, for the Waterloo CS 241 course! Also built a MIPS emulator which can run code generated by the compiler and assembler I wrote.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/cpp/cpp.png",
			linkText: "View Source",
			link: "https://github.com/AbhiJ2706/mips-emulator",
			progressText: "Complete",
			color: "red"
		},

		{
			title: "PiggyBank",
			description:
				"A winning project of Enghack 2021, Piggybank is an innovative new banking system for kids which teaches them to save and invest their money!",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
			linkText: "View DevPost",
			link: "https://devpost.com/software/piggy-bank-qulyxt",
			progressText: "Complete",
			color: "pink"
		},

		{
			title: "Stock Prediction",
			description:
				"Neural network built using LSTM that predicts stock trends! Takes price trends, volume trends, and on-balance volume into account. Predictions are not to be trusted.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
			linkText: "View Source",
			link: "https://github.com/AbhiJ2706/predict-stocks-django-server-AI",
			progressText: "Complete",
			color: "yellow"
		},

		{
			title: "Computer Vision",
			description:
				"CV system which finds the distance and angle to a target in real-time, using OpenCV. Made to run on a Raspberry Pi. Used in a project for the UN and on an FRC competition robot.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
			linkText: "View Source",
			link: "https://github.com/AbhiJ2706/mvs_vision_demo",
			progressText: "Complete",
			color: "#49cbff"
		},

		{
			title: "Digit Generator",
			description:
				"Gain-Adversarial Neural Network which generates pictures of handwritten digits from noise!",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
			linkText: "View Source",
			link: "https://colab.research.google.com/github/AbhiJ2706/generate-images-AI/blob/master/Part_2_generate_handwritten_digits_from_noise_(1).ipynb",
			progressText: "Complete",
			color: "purple"
		},

		{
			title: "C++ Cache",
			description:
				"C++ representation of a direct-mapped, set-associative, and fully-associative cache used in a memory hierarchy. Built with an object-oriented design!",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/cpp/cpp.png",
			linkText: "View Source",
			link: "https://github.com/AbhiJ2706/cpp-cache",
			progressText: "Complete",
			color: "#49cbff"
		},

		{
			title: "Robot Code",
			description:
				"During my time on FRC Team 2706, I worked on programming various control systems on our team's robot. Also worked on vision, design, and fabrication.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/java/java.png",
			linkText: "View Source",
			link: "https://github.com/FRC2706",
			progressText: "Complete",
			color: "purple"
		},

		{
			title: "This is not a newspaper",
			description:
				"My first hackathon project, a new, satisfying way of aggregating and displaying news!",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
			linkText: "View DevPost",
			link: "https://devpost.com/software/this-is-not-a-newspaper?ref_content=user-portfolio&ref_feature=in_progress",
			progressText: "Complete",
			color: "#49cbff"
		},
	],

	work: [
		{
			title: "Amazon",
			subtitle: "Software Development Engineering Intern",
			duration: "May 2024- present",
			logo: "https://www.cdnlogo.com/logos/q/51/amazon.svg",
			long: "Analyzing customer insights to improve recommendations!"
		},
		{
			title: "Qualcomm",
			subtitle: "AI Performance Analysis Intern",
			duration: "Aug. 2023- Dec. 2023",
			logo: "https://www.cdnlogo.com/logos/q/51/qualcomm.svg",
			long: "I developed robust, scalable performance analysis pipelines for embedded CNN-based image processing algorithms. I also designed data structures for handling and querying large volumes of software and hardware profiling data."
		},
		{
			title: "Qualcomm",
			subtitle: "Snapdragon AI Processor Intern",
			duration: "Jan. 2023- Aug. 2023",
			logo: "https://www.cdnlogo.com/logos/q/51/qualcomm.svg",
			long: "I developed features for an embedded framework accelerating AI-based image processing. I integrated features into production code and wrote tests to ensure thread-safety and scalability. I also explored and executed various performance optimizations, and spearheaded development of an ELT pipeline for automated performance measurement."
		},
		{
			title: "Cisco Systems",
			subtitle: "DevOps and Analytics Intern",
			duration: "May. 2022- Aug. 2022",
			logo: "https://www.cdnlogo.com/logos/c/79/cisco.svg",
			long: "I Developed a code reviewer recommendation system using collaborative filtering for Cisco's analytics suite. To do this, I tested a variety of feature engineering tactics and implementations of collaborative filtering. I also performed architecture optimizations on CNBot, Cisco's NLP-based chatbot for customer service."
		},
		{
			title: "Cisco Systems",
			subtitle: "SRv6 Testing Team Intern",
			duration: "May. 2021- Aug. 2021",
			logo: "https://www.cdnlogo.com/logos/c/79/cisco.svg",
			long: "I Developed a deep learning pipeline for detecting anomalies in router telemetry data. I tested a variety of ML and DL algorithms, weighing different factors such as accuracy, configurability, performance drift over time, and more. I also wrote data extraction functions for performance measurement testing, wrote unit tests and built network topologies for router testing."
		},
	],

	extracurriculars: [
		{
			title: "University of Waterloo",
			subtitle: "Undergraduate Research Assistant",
			duration: "Jan. 2024- Present",
			logo: "uw",
			long: "Implementing, benchmarking, and optimizing LLM encoding on Apple hardware using Swift and CoreML."
		},
		{
			title: "WAT.ai",
			subtitle: "Software Developer",
			duration: "Oct. 2023- Present",
			logo: "watai",
			long: "Designing a deep reinforcement learning model to trade stocks based on price predictions and sentiment analysis."
		},
		{
			title: "Waterloo Data Science Club",
			subtitle: "VP of Data Analysis/Reading Group Lead",
			duration: "Jan. 2023- Aug. 2023",
			logo: "uwdsc",
			long: "Led a team of 20+ developers producing data analysis content for Medium and Instagram. Hosted presentations on various papers in AI and ML. Broke down papers and explained them in an easy-to-digest fashion for AI/ML novices."
		},
		{
			title: "TOHacks",
			subtitle: "Developer",
			duration: "Aug. 2021- Jan. 2023",
			logo: "tohacks",
			long: "Worked on development of the TOHacks 2022 website. Performed administrative tasks during the hackathon."
		},
	]
};

export default INFO;
