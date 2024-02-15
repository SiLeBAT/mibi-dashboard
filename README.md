# mibi-dashboard

## How To
- Download from https://github.com/SiLeBAT/mibi-dashboard (Use the green code button and download as zip if you don't have Git installed)
- Optional: Unzip in appropriate directory
- Open a PowerShell/Terminal/Command prompt & change into the code directory
- Type: "npm install" and press return (NOTE: Node needs to be installed on your machine, and on your path)
- Open the file index.js in a text editor (e.g. Notepad)
- Change the entries marked
- Back in the PowerShell/Terminal/Command prompt type: "npm start"
- Open the browser at "localhost:3003"

## Alternative running in win environment
- Install the dashboard in the local C:\Programme\User or C:\Program Files\User folder as described above.
- In the dashboard folder parallel to the package.json file create a Batch file e.g. rundashboard.bat
- Add the command "npm run start" to the Batch file
- On the win desktop create a link (Verknüpfung) to the Batch file, add a key shortcut to the link if you like
- A double click or using the key shortcut a terminal window opens and starts the dashboard, takes a couple of seconds
- Open the browser at "localhost:3003"
- Closing the terminal window stops running the dashboard.
