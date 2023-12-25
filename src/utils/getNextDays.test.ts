import { getNextDays } from "./getNextDays";

describe("getNextDays", () => {
    test("should be return the next five days", () => {
        const nextDays = getNextDays();
        expect(nextDays).toHaveLength(5);
    });
});
