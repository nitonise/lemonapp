import { initializeTimes, updateTimes } from "./Main";


test.skip("initializeTimes function", () => {
    const actual = initializeTimes(new Date());
    expect(actual.length).toBeGreaterThan(0);
});

describe("updateTimes function", () => {
    test.skip("change state", () => {
        const state = ["01:00", "02:00"];
        const action = { type: "01:00" };
        const actual = updateTimes(state, action);
        expect(actual.length).toBe(1);
        expect(actual[0]).toEqual("02:00");
    });

    test.skip("keep state", () => {
        const state = ["01:00", "02:00"];
        const action = { type: "" };
        const actual = updateTimes(state, action);
        expect(actual.length).toBe(2);
        expect(actual).toEqual(state);
    });
});
