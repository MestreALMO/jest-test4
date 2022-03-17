https://github.com/MestreALMO/jest-test1

Continuation...

jest does not understand react by default, we need to install components that will allow it

yarn add @swc/core @swc/jest -D

swc is a tool that makes code translation, as babel does

we need to say how jest will interpret react.

in jest.config.ts uncomment the line: transform: undefined,

substitute value of undefined

install librarys :

yarn add @testing-library/react @testing-library/jest-dom @testing-library/user-event -D

now we can import react components inside tests

in package.json, scripts, test will be: "jest --watchAll"
