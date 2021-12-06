class Project {
    name: string;
    dependencies: Project[];
    dependents: Project[];
    built: boolean;
    constructor() {
        this.dependencies = [];
        this.dependents = [];
        this.built = false;
    }
}

const buildOrder = (projects: Array<string>, dependencies: Array<[string, string]>): Array<string> => {
    const projObjs: Record<string, Project> = {};
    projects.forEach(p => {
        const proj = new Project();
        proj.name = p;
        projObjs[p] = proj;
    });
    for (let i = 0; i < dependencies.length; i++) {
        const dep = dependencies[i];
        const from = dep[0];
        const to = dep[1];
        projObjs[from].dependents.push(projObjs[to]);
        projObjs[to].dependencies.push(projObjs[from]);
    }
    const res = new Array<string>();
    let loopCount = 0;
    while(res.length < projects.length && loopCount < projects.length) {
        for (let p of projects) {
            if (projObjs[p].built) continue;
            let allDependenciesDone = true;
            for (let dependency of projObjs[p].dependencies) {
                if (!dependency.built) {
                    allDependenciesDone = false;
                }
            }
            if (allDependenciesDone) {
                projObjs[p].built = true;
                res.push(p);
            }
        }
        loopCount++;
    }
    if (loopCount === projects.length) {
        return null;
    }
    return res;
}

console.log(buildOrder(
    ["a","b","c","d","e","f"],
    [
        ["a","d"],
        ["f","b"],
        ["b","d"],
        ["f","a"],
        ["d","c"]
    ])
);

console.log(buildOrder(
    ["a","b","c","d","e","f"],
    [
        ["a","b"],
        ["b","c"],
        ["c","d"],
        ["d","e"],
        ["e","f"]
    ])
);

console.log(buildOrder(
    ["a","b",],
    [
        ["a","b"],
        ["b","a"]
    ])
);