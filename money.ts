export class Money extends Number {
    public constructor(public readonly amount: Number) {
        super(amount)

        if (this.amount === 0) {
            throw new Error('error Money without amount is invalid')
        }

        if (this.amount < 0) {
            throw new Error('error Money amount cannot be negative')
        }

        if (this.amount > Number.MAX_SAFE_INTEGER) {
            throw new Error('error money cannot exceed MAX_SAFE_INTEGER')
        }
    }

    public toString(): string {
        return this.amount.toLocaleString(
            'en-GB',
            {
                style: 'currency',
                currency: 'GBP',
            },
        )
    }
}
