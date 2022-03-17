https://github.com/MestreALMO/jest-test2

Continuation...

create /src/test/setup.ts

in jest.config.js uncomment setupFilesAfterEnv and add setup.ts to it, so we can have access to more options of test

this way we can use actions like toBeInTheDocument instead of being limited to toBeTruthy

elements that start with getBy search for only one element, getAll finds all elements

the elements that start with query instead of getBy don't fail if element is not found

when we are doing multiple test in the same component we use describe, in the begining of each test we have "it" or "test"
