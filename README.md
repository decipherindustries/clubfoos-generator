clubfoos-generator
==================

Installation
------------
1. Install the Node.js runtime: https://nodejs.org 
2. In a terminal window, run: `npm install -g cf-generator`

Usage
-----
To generate a CSV file with UUIDs, run the following command in terminal: `clubfoos-generate-uuid [OPTIONS]`. 
The tool supports the following options:

```
Usage:
  clubfoos-generate-uuid [OPTIONS]

Options:
  -f, --from [NUMBER]    Number to start generating codes from (Default is 1)
  -n, --number [NUMBER]  Number of codes to generate, starting at <from>  (Default is 10)
  -p, --prefix [STRING]  Prefix for each code (Default is cf)
  -o, --outfile [STRING] Filename write the CSV to (Default is codes.csv)
  -h, --help             Display help and usage details
```

Example: to generate a list of 400 UUIDs, starting at 1 you would issue the following command:
`clubfoos-generate-uuid --from 1 --number 400 --outfile UUIDs.csv`

