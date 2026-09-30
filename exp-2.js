const fs = require('fs');

// CREATE
fs.writeFile('student.txt', 'Name: Arav\nCourse: B.Tech CSE', (err) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log('File created successfully.');

    // READ
    fs.readFile('student.txt', 'utf8', (err, data) => {
        if (err) {
            console.log(err);
            return;
        }

        console.log('File contents:');
        console.log(data);

        // UPDATE
        fs.appendFile('student.txt', '\nSemester: 3', (err) => {
            if (err) {
                console.log(err);
                return;
            }

            console.log('File updated successfully.');

            // READ UPDATED FILE
            fs.readFile('student.txt', 'utf8', (err, data) => {
                if (err) {
                    console.log(err);
                    return;
                }

                console.log('Updated file contents:');
                console.log(data);

                // DELETE
                fs.unlink('student.txt', (err) => {
                    if (err) {
                        console.log(err);
                        return;
                    }

                    console.log('File deleted successfully.');
                });
            });
        });
    });
});