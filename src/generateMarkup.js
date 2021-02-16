const renderCards = data => {
    const managers = data.manager.map(function(obj) {
        let managerCard = `
        <div class="card" style="width: 18rem;">
            <h2>${obj.name}</h2>
            <h4>Manager<h4>
            <p>ID: ${obj.id}</p>
            <p>Email: <a href="mailto:${obj.email}">${obj.email}</a></p>
            <p>Office Number: ${obj.office}</p>
        </div>
        `
        return managerCard;
    });

    const engineers = data.engineer.map(function(obj) {
        let engineerCard = `
        <div class="card" style="width: 18rem;">
            <h2>${obj.name}</h2>
            <h4>Engineer<h4>
            <p>ID: ${obj.id}</p>
            <p>Email: <a href="mailto:${obj.email}">${obj.email}</a></p>
            <p> Github: <a href="https://github.com/${obj.github}" target="_blank">${obj.github}</a></p>
        </div>
        `
        return engineerCard;
    });

    const interns = data.intern.map(function(obj) {
        let internCard = `
        <div class="card" style="width: 18rem;">
            <h2>${obj.name}</h2>
            <h4>Intern<h4>
            <p>ID: ${obj.id}</p>
            <p>Email: <a href="mailto:${obj.email}">${obj.email}</a></p>
            <p> School: ${obj.school}</p>
        </div>
        `
        return internCard;
    });

    return [managers, engineers, interns];
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
        </head>        
        <body>
            <header>
                <h1 class="text-center">My Team</h1>
            </header>
            ${mu}
        </body>
        </html>    
        `
}

module.exports = renderMarkup;