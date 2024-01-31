let tableList = JSON.parse(localStorage.getItem("projects"));
let tbody = document.getElementById("tbody");
console.log(tableList);
function render() {
  let myProject = tableList.map(function (projects, index) {
    return `
            <tr>
                <td>${index + 1}</td>
                <td>${projects.projectName}</td>
                <td>${projects.imgUrl}</td>
                <td>${projects.link}</td>
                <td>${projects.tags}</td>
                <td>
                    <button type="button" class="btn btn-danger">Delete</button>
                    <button type="button" class="btn btn-success">Update</button>
                </td>
            </tr>
        `;
  });

tbody.innerHTML = myProject.join("");
}
render();
//

function handleDelete (id) {
    let newlistjob = listJob.filter(function (job) {
        return job.id != id;
    });
    localStorage.setItem("jobs", JSON.stringify(newlistjob));
    render1();
}
