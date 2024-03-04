import React, { useState } from "react";
import { Button } from "react-bootstrap";

enum Holiday {
    NewYear = "🎆",
    ValentinesDay = "💘",
    Halloween = "🎃",
    Christmas = "🎄",
    IndependenceDay = "🎇"
}

const holidaysByYear = [
    Holiday.NewYear,
    Holiday.ValentinesDay,
    Holiday.IndependenceDay,
    Holiday.Halloween,
    Holiday.Christmas
];

const holidaysByAlphabet = [
    Holiday.Christmas,
    Holiday.Halloween,
    Holiday.IndependenceDay,
    Holiday.NewYear,
    Holiday.ValentinesDay
];

export function CycleHoliday(): JSX.Element {
    const [currentHoliday, setCurrentHoliday] = useState(Holiday.NewYear);

    const nextHolidayByYear = () => {
        const currentIndex = holidaysByYear.indexOf(currentHoliday);
        const nextIndex = (currentIndex + 1) % holidaysByYear.length;
        setCurrentHoliday(holidaysByYear[nextIndex]);
    };

    const nextHolidayByAlphabet = () => {
        const currentIndex = holidaysByAlphabet.indexOf(currentHoliday);
        const nextIndex = (currentIndex + 1) % holidaysByAlphabet.length;
        setCurrentHoliday(holidaysByAlphabet[nextIndex]);
    };

    return (
        <div>
            <div>Holiday: {currentHoliday}</div>
            <Button onClick={nextHolidayByAlphabet}>Advance by Alphabet</Button>
            <Button onClick={nextHolidayByYear}>Advance by Year</Button>
        </div>
    );
}
