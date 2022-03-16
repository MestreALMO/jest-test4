yarn create react-app . --template typescript
yarn add jest ts-node -D

yarn jest --init
√ Would you like to use Jest when running "test" script in "package.json"? ... yes

√ Would you like to use Typescript for the configuration file? ... yes

√ Choose the test environment that will be used for testing » jsdom (browser-like)

√ Do you want Jest to add coverage reports? ... no

√ Which provider should be used to instrument code for coverage? » v8

√ Automatically clear mock calls, instances and results before every test? ... yes

yarn add @types/jest -D

create file to test => test.test.tsx
yarn test
