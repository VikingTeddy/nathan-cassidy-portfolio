/* =====================================================================
   EDIT THIS FILE TO UPDATE YOUR PORTFOLIO
   Everything on the site is generated from the data below.
   - Add a project: copy a block inside `projects`, paste it at the TOP of
     the list (newest first), change the text, save, commit and push.
   - Render redeploys automatically after each push to GitHub.
   - Keep any confidential client details out of this file.
   ===================================================================== */

window.PORTFOLIO = {
  lastUpdated: "2026-11-24",

  person: {
    name: "Nathan Cassidy",
    first: "Nathan",
    last: "Cassidy",
    role: "Gameplay Programmer & Designer",
    location: "London, UK",
    email: "nathanjustincassidy@gmail.com",
    linkedin: "https://www.linkedin.com/in/nathan-cassidy-05390b349/",
    github: "", // e.g. "https://github.com/yourusername" (leave blank to hide)
    cv: "assets/Nathan_Cassidy_CV.pdf",
    photo: "assets/photo.jpg", // drop your photo in /assets with this name
    intro:
      "Second-year BSc Computer Games Development student at the University of Westminster. I build games in Unity and C#, and I care most about game feel: how movement, weight and feedback combine to make a game satisfying to control.",
    about: [
      "I'm a Computer Games Development student at the University of Westminster, working towards a career as a gameplay programmer and designer.",
      "Most of my work is in Unity and C# on team projects, where I've handled gameplay programming, testing and 2D art. I'm currently building an interactive 3D datacentre experience in Unity and learning Unreal Engine on my Game Engine Architecture module.",
      "Alongside my studies I've worked in client-facing and document-production roles, which taught me to communicate clearly, hit deadlines and keep a team's work organised."
    ]
  },

  skills: {
    primary: ["Unity", "C#", "Gameplay Programming", "Game Design"],
    secondary: [
      "Git & Version Control",
      "Python",
      "Java",
      "Lua",
      "2D Art",
      "QA & Testing",
      "Project Management",
      "Team Collaboration"
    ],
    learning: ["Unreal Engine", "Machine Learning", "Solidity"]
  },

  projects: [
    {
      id: "ai-datacentre",
      title: "Interactive AI Datacentre",
      status: "In progress",
      type: "Unity · Group Project · Year 2",
      year: "2026",
      summary:
        "An interactive 3D diorama of an AI datacentre that players walk through and explore, built in Unity as a Year 2 group project.",
      description: [
        "A first-person interactive experience set inside a detailed AI datacentre. The environment was modelled in Blender by a teammate, and I'm building the Unity side that turns it into something you can explore.",
        "The team agreed on a professional, portfolio-ready look rather than a stylised one, and the project is being developed with a view to reuse beyond coursework."
      ],
      role: [
        "Player controller and movement",
        "Menus and UI flow",
        "Interactive doors",
        "Material and asset integration in Unity"
      ],
      tags: ["Unity", "C#", "3D", "Blender pipeline", "Interaction Design"],
      media: null,
      links: []
    },
    {
      id: "moon-miner",
      title: "Moon Miner",
      status: "Completed",
      type: "Unity · Group Project · Year 1",
      year: "2025",
      summary:
        "A 2D retro sci-fi sandbox platformer set on a hostile mining moon. Explore, mine, build a base and upgrade your gear to repair your rocket and escape.",
      description: [
        "Moon Miner is a 2D side-scrolling sandbox survival game set on Vanth VI, a scarred lunar mining moon. You play a stranded maintenance worker who must mine resources, build and defend a base, and upgrade a suit to survive alien threats while repairing a damaged ship.",
        "Inspired by Terraria and Minecraft, the game follows a full development cycle from pre-production and design documentation through to a playable MVP, with task tracking in Trello and version control in Git."
      ],
      role: [
        "Programmer: gameplay mechanics and system stability",
        "Artist: retro sci-fi visual style, environments and assets",
        "Unit and integration testing, bug tracking and polish"
      ],
      tags: ["Unity", "C#", "Git", "2D Art", "Systems Design", "QA Testing"],
      media: null,
      links: []
    },
    {
      id: "neon-ascent",
      title: "Neon Ascent",
      status: "Completed",
      type: "Unity · Group Project · Year 1",
      year: "2025",
      summary:
        "A cyberpunk endless runner: fast, score-chasing and set against a neon city skyline.",
      description: [
        "Neon Ascent is a 2D cyberpunk endless runner built in Unity. You run and jump across procedurally spawned rooftops, collect pickups and avoid drone enemies while chasing a high score.",
        "The game features parallax scrolling backgrounds, animated player movement, collectibles, enemy drones, and a score and lives system."
      ],
      role: [
        "Gameplay programming in C#, focused on movement and game feel",
        "Version control with Git across the team",
        "Playtesting and iteration through to a complete playable build"
      ],
      tags: ["Unity", "C#", "Git", "Gameplay Programming", "2D Platformer"],
      media: "assets/neon-ascent.gif",
      links: []
    },
    {
      id: "scc-emergency-sim",
      title: "Students as Co-Creators: Emergency Vehicle Simulation",
      status: "Completed",
      type: "Unity · VR · Co-creation Project",
      year: "2026",
      summary:
        "A VR driving simulator built by Computer Games Development students with a Senior Lecturer and the Immersive Development Lab.",
      description: [
        "Players take the role of an Emergency Care Assistant in the fictional town of Axton Heath, answering emergency calls, collecting patients and driving them to hospital against the clock while avoiding traffic.",
        "The project uses a physical Logitech driving controller and VR display options, and doubles as a template for complex interactive 3D and VR group projects."
      ],
      role: [],
      tags: ["Unity", "VR", "Physical Controllers", "Software Architecture"],
      media: null,
      links: [{ label: "Project site", url: "https://scc-site-i62y.onrender.com/" }]
    }
  ],

  experience: [
    {
      title: "Project Management Intern",
      org: "Innova Wireless",
      meta: "Hybrid",
      dates: "Sep 2025 – Present",
      bullets: [
        "Project-managed production of a client proposal for a 5G private wireless engagement in the US transit sector (client confidential under NDA)",
        "Coordinated input from senior contributors and owned document structure, revisions and version control through to the final issued revision",
        "Turned specialist material into clear, client-ready prose and delivered to a fixed external deadline"
      ]
    },
    {
      title: "Customer Assistant",
      org: "Booths",
      meta: "Garstang, England",
      dates: "Nov 2023 – Aug 2024",
      bullets: [
        "Worked front-of-house in a busy retail environment, handling customer queries, transactions and stock",
        "Held responsibility for till accuracy and shift handovers",
        "Built reliability and time-keeping habits alongside study"
      ]
    }
  ],

  education: [
    {
      title: "BSc Computer Games Development",
      org: "University of Westminster, London",
      dates: "2025 – Present",
      bullets: [
        "Year 2 modules: Advanced C# Scripting & Game Architecture, 3D Interactive Media Development, Game Engine Architecture, Practical Machine Learning",
        "Year 1 projects: Moon Miner and Neon Ascent (Unity, C#, Git)"
      ]
    },
    {
      title: "A-Levels",
      org: "Sociology · Philosophy · Classical Civilisation",
      dates: "2020",
      bullets: []
    },
    {
      title: "GCSEs",
      org: "Eight subjects including English Language, Mathematics and Combined Science",
      dates: "2018",
      bullets: []
    }
  ],

  achievements: [
    {
      title: "Westminster Award: Bronze",
      detail: "University of Westminster employability award, completed 2026",
      url: "https://openbadgefactory.com/obv3/credentials/e0a54274591061582ec89e7c645e0afe7d13a8e7"
    },
    {
      title: "CareerSet CV review: 79/100",
      detail: "Top 30% of CVs analysed",
      url: "https://careerset.com/share-report/NDY3NTk0LHdlc3RtaW5zdGVy"
    },
    {
      title: "Blockchain Basics",
      detail: "University at Buffalo via Coursera",
      url: ""
    },
    {
      title: "Trinity College London: Grade 3 Guitar",
      detail: "Plus ABRSM Grades 1 (Distinction) and 2 (Merit)",
      url: ""
    }
  ]
};
