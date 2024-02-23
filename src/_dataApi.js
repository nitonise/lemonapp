let availableTimes = [ "17:00", "18:00", "19:00", "20:00", "21:00", "22:00" ];

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const fetchData = async date => {
    await wait(2000);
    return availableTimes;
};

const submit = async (formData) => {
    const random = Math.random();
    try {
        await wait(2000);
        if (random < 0.5) {
            throw new Error("Something went wrong");
        }
        availableTimes = availableTimes.filter(t => t === formData.time);
        return true;
    } catch (error) {
        return false;
    }
};

export { fetchData, submit };
