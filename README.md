# fetchLichessTest

1. A JavaScript file that does some scouting on Lichess.
1. Intended as part of a larger project. This is the proof of concept for the API access. 
1. This uses url parameters and the request header to grab JSON data for up to 20 games rated games of a player.
1. The data is parsed into an array of games. Each item is a JSON of a game. The script ends by reporting the number of games found, and any errors (since the JSON can be arrived corrupted)
1. The script can be run with the terminal command: node fetch.js
