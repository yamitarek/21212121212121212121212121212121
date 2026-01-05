// Fetch the text file
fetch('lines.txt')
  .then(response => {
    if (!response.ok) {
      throw new Error("Failed to load lines file");
    }
    return response.text();
  })
  .then(data => {
    // Split by newline (\n) to get each line
    const lines = data
       .split(/\r?\n/)
       .filter(line => line.trim().length > 0);

    if (lines.length === 0) {
        throw new Error("No lines found in text file!");
    }

    // Pick a random line
    const randomIndex = Math.floor(Math.random() * lines.length);
    const selectedLine = lines[randomIndex];

    // Display
    document.getElementById('lineDisplay').textContent = selectedLine;
  })
  .catch(err => {
    console.error(err);
    document.getElementById('lineDisplay').textContent =
      "Oops — couldn't load the lines!";
  });
