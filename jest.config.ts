import type { Config } from 'jest'
import nextJest from 'next/jest.js'
 
const createJestConfig = nextJest({
  dir: './',
})
 
const config: Config = {
  testEnvironment: 'jsdom',
  preset: 'ts-jest',
}
 
export default createJestConfig(config)
