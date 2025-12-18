export default function MyProjects() {
    const projects = [
        {
            title: "Summer Project",
            description: "Node.js backend project with APIs and server logic.",
            link: "https://github.com/officerkiruha/Summer-Project"
        },
        {
            title: "Products Project",
            description: "React app for managing products with styled components.",
            link: "https://github.com/officerkiruha/Products"
        },
        {
            title: "Rating-Projects Project",
            description: "Node.js project for rating and ranking items with DB integration.",
            link: "https://github.com/officerkiruha/NodeJSPRSummer"
        },
        {
            title: "To-Do-List Project",
            description: "Simple but powerful to-do list app built with React.",
            link: "https://github.com/officerkiruha/ToDoList2"
        }
    ];

    return (
        <div>
            <h1>My Projects</h1>
            <div className="project-grid">
                {projects.map((project, index) => (
                    <a key={index} href={project.link} target="_blank" rel="noopener noreferrer" className="project-card">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <div className="btn">View on GitHub</div>
                    </a>
                ))}
            </div>
        </div>
    );
}
