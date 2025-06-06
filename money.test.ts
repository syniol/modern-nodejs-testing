import assert from 'node:assert'
import { suite, test, TestContext, before, beforeEach } from 'node:test'
import { Money } from './money'

suite('Money',  () => {
    beforeEach(() => {
        console.log('Before Each Hook for suit')
    })

    test('When money amount is correct',  async (t: TestContext) => {
        t.before(() => {
            console.log('Before Hook inside the test')
        })

        t.after(() => {
            console.log('After Hook inside the test')
        })

        await t.test('should not throw any error', () => {
            let err: Error = undefined

            try {
                new Money(1)
            } catch (e) {
                e = err
            }

            t.assert.strictEqual(err, undefined)
        })

        await t.test('should stringify', (tc) => {
            const sut = new Money(1)

            console.log(sut.toString())
        })
    })

    test('When money amount is below zero', async (t: TestContext) => {
        await t.test('should throw an error', () => {
            try {
                new Money(-12)

            } catch (e) {
                assert.ok(e instanceof Error)
            }
        })

        await t.test('should throw an error s', () => {
            try {
                new Money(-12)

            } catch (e) {
                assert.ok(e instanceof Error)
            }
        })

        await t.test('should throw an error1111', () => {
            try {
                new Money(-12)

            } catch (e) {
                assert.ok(e instanceof Error)
            }
        })
    })

    test.skip('When money amount is above zero', (t: TestContext) => {
        t.test('should throw an error', () => {
            try {
                new Money(Number.MAX_SAFE_INTEGER + 1)
            } catch (e) {
                assert.ok(e instanceof Error)
            }
        })
    })
})
