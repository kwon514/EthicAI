# EthicAI #

![EthicAI Logo](./markdown/logo_trim.png)

EthicAI is an interactive educational platform designed to make learning Artificial Intelligence (AI) ethics fun and easily accessible for university students. EthicAI offers modules-based learning, where students explore the core ethical principles behind AI use. Each module dives into real-world scenarios of AI misuse, supplemented with interactive demos.

Access EthicAI here: [https://ethicai.co.nz/](https://ethicai.co.nz/)

### Our Team 😎

***
We are a passionate team of final-year computer science students with diverse skills, including content research, UI design and web development.

* Georgia Purkiss - Front End Developer and UI/UX Designer
* Kevin Wong - Frontend Developer and Backend Developer
* Matthew Kwok - Frontend Developer and UI/UX Designer
* Gali Mortimer-Webster - Content Writer and Frontend Developer
* Harlean Hansra - Frontend Developer

### Project Management Tool 🛠️ ###

***
Our team used [Jira](https://ethicai.atlassian.net/jira/software/projects/EAI/boards/1/timeline?shared=&atlOrigin=eyJpIjoiMmMxMDViYmQ4MGUxNGRlNjgwZjgzNGRiOGIyM2VlNmQiLCJwIjoiaiJ9) and [Trello](https://trello.com/b/Ydes48Ob/ethicai) as our primary project management tool. For all other project-related files, such as API specifications and meeting notes, we used [Google Drive](https://drive.google.com).

Our Jira Gantt Chart/Timeline is shown below:
![Jira Project Timeline](./markdown/jira-timeline.png)

### Technologies  👨‍💻

***

#### Front End ####

Name | Version
------------- | -------------
[HTML](https://html.spec.whatwg.org/multipage/) | v5.0
[CSS](https://www.w3.org/Style/CSS/) | v3.0
[Typescript](https://www.typescriptlang.org/) | v4.5.5
[Vue.js](https://vuejs.org/) | v3.3.4
[PrimeVue](https://primevue.org/) | v3.34.0
[Bootstrap](https://getbootstrap.com/) | v5.3.1
[TailwindCSS](https://tailwindcss.com/) | v3.3.3

#### Back End ####

Name | Version
------------- | -------------
[Node.js](https://nodejs.org/en) | v18.18.2
[Python](https://www.python.org/) | v3.11
[AWS Lambda](https://aws.amazon.com/lambda/) |

#### Hosting ####

Name | Version
------------- | -------------
[AWS S3 Bucket](https://aws.amazon.com/s3/) |
[AWS CloudFront](https://aws.amazon.com/cloudfront/) |

This is a list of the main technologies used in the project. For a full list of dependencies, please refer to the `package.json` file in the project directory.

### Installation 📖

***
Clone the repository in a terminal, ensuring you have [Git](https://git-scm.com/) and [Node.js](https://nodejs.org/en/) installed.

```bash
git clone https://github.com/uoa-compsci399-s2-2023/capstone-project-team-28
cd project/ethicai-spa
npm install
```

To run the project locally, run the following command in the terminal (in the `project/ethicai-spa` directory):

```bash
npm run serve
```

To build the project, run the following command in the terminal (in the `project/ethicai-spa` directory):

```bash
npm run build
```

\
The AWS Lambda functions used in the project are located in the `project/aws-lambda-functions` directory. They are actively deployed on AWS Lambda and are not required to run the project locally.

These functions cannot be run locally due to the nature of AWS Lambda (needs the appropriate security roles, permissions, etc.), as well as environmental variables that are not defined in the project.

### Usage Examples 🔍

***
Access EthicAI via [https://ethicai.co.nz/](https://ethicai.co.nz/).

* This page serves as EthicAI's landing, introducing users to our website:
![EthicAI Home Page](./markdown/home.png)

* Users can choose any module to begin their AI ethics learning journey:
![EthicAI All Modules Page](./markdown/all-modules.png)

* Users can easily navigate modules, swiftly accessing specific sections:
![EthicAI Module Overview Page](./markdown/module-overview.png)

* Interactive demo where users have to distinguish between human vs. generated arts:
![EthicAI interactive demo page](./markdown/dall-e-demo.png)

* Interactive demo where users have to distinguish between real vs deep fake audio:
![EthicAI interactive demo page](./markdown/deepfakes-demo.png)

* Users have the opportunity to assess their learning progress through an interactive quiz:
![EthicAI quiz start page](./markdown/quiz-start.png)
![EthicAI quiz page](./markdown/quiz-example.png)

* A curated collection of diverse external AI ethics resources tailored for both general and academic audiences:
![EthicAI resources page](./markdown/resources.png)

### Future Plans 🚀

***

* **Reward System**\
We're exploring the possibility of introducing a reward system. This system aims to incentivize users and enrich their learning journey. Users can earn points and badges upon completing modules and answering questions correctly.
* **Expanded Modules**\
We're considering the addition of new modules geared towards software developers. One potential topic is GitHub CoPilot, delving into its features and addressing common misuses.
* **UI Enhancement**\
A sleeker, more user-friendly interface might be on the horizon. We're contemplating UI improvements to create a visually appealing and consistent experience.
* **Diverse User Profiles**\
Instructors may gain access to insightful analytics, offering valuable data on student engagement. We are also considering introducing community discussion to EthicAI to foster engagement between users.
* **Interactive Upgrades**\
Potential enhancements include custom animations and engaging visual feedback, enhancing the interactive learning experience.

### Acknowledgements 😊

***
A sincere thank you to Danielle Lottridge and Thomas Lacombe, our esteemed clients, for their invaluable contributions in shaping EthicAI with their insights and feedback.
