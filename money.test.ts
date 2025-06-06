import { ok, throws } from 'node:assert'
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
                t.assert.ok(e instanceof Error)
            }
        })
    })

    test('When money amount is above maximum safe integer', async (t: TestContext) => {
        await t.test('should throw an error', () => {
            try {
                new Money(Number.MAX_SAFE_INTEGER + 1)
            } catch (e) {
                t.assert.ok(e instanceof Error)
            }
        })
    })

    test('When money amount is above maximum safe integer', () => {
        throws(() => new Money(Number.MAX_SAFE_INTEGER + 1), (err) => {
            ok(err instanceof Error)

            return true
        })

        throws(() => new Money(Number.MAX_SAFE_INTEGER + 1), Error('error money cannot exceed MAX_SAFE_INTEGER'))

        try {
            new Money(Number.MAX_SAFE_INTEGER + 1)
        } catch (e) {
            ok(e instanceof Error)
        }
    })
})
