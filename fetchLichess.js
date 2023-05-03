const params = {
    max: 20,
    rated: true,
    pgnInJson: true,
    perfType: 'blitz,rapid,classical'

}

const username = 'waynebeam';
const url = `https://lichess.org/api/games/user/${username}?` + new URLSearchParams(params);


async function getGames() {
    const res = await fetch(url,
        {
            method: 'GET',
            headers: { Accept: 'application/x-ndjson' },

        }
    );
    if (!res.ok) {
        console.log('busted');
        return;
    }

    const data = await res.body;
    const decoder = new TextDecoder();
    let games = [];
    let errors = 0;
    for await (const chunk of data) {
        const game = decoder.decode(chunk);
        try {
            games.push(JSON.parse(game));
        }
        catch (error) {
            errors++;
        }
    }

    console.log(`Got ${games.length} games with ${errors} errors`);

}

getGames();