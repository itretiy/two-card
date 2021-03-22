## Features roadmap

- Room and History panels
- Room has "Deal Cards", "Add Player" and "Remove Player" buttons
- History contains past card draw details such as room name and winner name (or None if no winner)

## Implementation notes

<p>The original task could have been implemented with a plain react with a few components using local state and a few model/service files but I've intentionally chosen more close to a real-word approach and structure:</p>

- `components` holds common presentational components
- `config` contains common configuration
- `features` aka modules split by self-containing folders with theirs related redux ducks and components (History module which wasn't an original requirement just was added in order to represent that)
- `services` in real-world would contain async api services, but in our case gameService is used to mimic that communication (Note that for simplicity reasons gameService does not return promises)
- `models` is probably the only major exception to the rules of the common redux app structure: we need them since we don't have any server-side communication and thus some stateful logic is placed there
- `store` and the rest are usual redux app structure folders

## Tech stack

- **Typescript** intentionally didn't rewrite the entire repo with create-react-app typescript template, but instead manually added TS and had to update outdated deps to fix some issues
- **React / Redux** as mentioned above to be close to the real-world example
- **@reduxjs/toolkit** usually I go with a manual react / redux store/middleware setup plus typesafe-actions if TS is used but here it chosen for simplicity reasons to speed up development
- **styled-components** with configured theme (see `config/theme`)
- **eslint / prettier** are configured and automatically run on a pre-commit hook on staged files

## Useful scripts

- `npm start` runs the dev server http://localhost:3000
- `npm test` runs jest test runner in interactive mode https://create-react-app.dev/docs/running-tests/
