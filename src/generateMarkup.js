const renderCards = data => {
    const managers = data.manager.map(function(obj) {
        return `
        <div class="card mr-3 shadow">
        <div class="card-header bg-primary text-light">
            <h2 class="card-title">${obj.name}</h2>
            <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>Manager</h3>
        </div>
        <div class="card-body bg-light">
            <ul class="list-group">
                <li class="list-group-item">ID: ${obj.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${obj.email}">${obj.email}</a></li>
                <li class="list-group-item">Office number: ${obj.office}</li>
            </ul>
        </div>
    </div>`
    }).join('');

    const engineers = data.engineer.map(function(obj) {
        return `
        <div class="card mr-3 shadow">
            <div class="card-header bg-primary text-light">
                <h2 class="card-title">${obj.name}</h2>
                <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>Engineer</h3>
            </div>
            <div class="card-body bg-light">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${obj.id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${obj.email}">${obj.email}</a></li>
                    <li class="list-group-item">GitHub: <a href="https://github.com/${obj.github}" target="_blank" rel="noopener noreferrer">${obj.github}</a></li>
                </ul>
            </div>
        </div>`
    }).join('');

    const interns = data.intern.map(function(obj) {
        return `
        <div class="card mr-3 shadow">
        <div class="card-header bg-primary text-light">
            <h2 class="card-title">${obj.name}</h2>
            <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>Intern</h3>
        </div>
        <div class="card-body bg-light">
            <ul class="list-group">
                <li class="list-group-item">ID: ${obj.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${obj.email}">${obj.email}</a></li>
                <li class="list-group-item">School: ${obj.school}</li>
            </ul>
        </div>
    </div>`
    }).join('');

    return managers.concat(engineers).concat(interns);
}

const renderMarkup = (data) => {
    console.log(data);
    const mu =  renderCards(data);
    console.log(mu);
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Team Profile Generator</title>
            <link rel="preconnect" href="https://fonts.gstatic.com">
            <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap" rel="stylesheet">
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
            integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
            <script src="https://kit.fontawesome.com/c502137733.js"></script>
        </head>        
        <body>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 jumbotron mb-3 bg-danger">
                    <h1 class="text-center">My Team</h1>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-12 d-flex justify-content-center">
                    ${mu}
                </div>
            </div>
        </div>
        </body>
        </html>    
        `
}

module.exports = renderMarkup;