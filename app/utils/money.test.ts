import { formatMoney } from "./money"

describe('money util', () => {
    it('should format number into money formatted string', () => {
        expect(formatMoney(500000)).toEqual('500,000')
    })
})