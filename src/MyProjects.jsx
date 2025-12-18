export default function MyProjects() {
    return (
        <div>
            <h1>Welcome to my projects!</h1>
            <div className="grid">
                <div className="card project">
                    <h3>Summer Project</h3>
                    <a className="button" href="https://github.com/officerkiruha/Summer-Project" target="_blank">
                        GoToGit
                    </a>
                </div>

                <div className="card project">
                    <h3>Products Project</h3>
                    <a className="button" href="https://github.com/officerkiruha/Products" target="_blank">
                        GoToGit
                    </a>
                </div>

                <div className="card project">
                    <h3>Rating-Projects Project</h3>
                    <a className="button" href="https://github.com/officerkiruha/NodeJSPRSummer" target="_blank">
                        GoToGit
                    </a>
                </div>

                <div className="card project">
                    <h3>To-Do-List Project</h3>
                    <a className="button" href="https://github.com/officerkiruha/ToDoList2" target="_blank">
                        GoToGit
                    </a>
                </div>
            </div>
        </div>
    );
}
