import React, {useEffect, useMemo, useState} from 'react';

interface Props {
}

const AppContext = React.createContext<| {
    selectedMonth: Date | null,
    setSelectedMonth: (d: Date) => void
}
    | undefined>(undefined);

function AppContextProvider(props: Props) {
    const [selectedMonth, setSelectedMonth] = useState<Date | null>(null);
    const [selectedDay, setSelectedDay] = useState<Date | null>(null);

    useEffect(() => {
        setSelectedMonth(new Date());
    }, []);

    const value = useMemo(
        () => ({
            selectedMonth,
            setSelectedMonth
        }),
        [
            selectedDay,
            selectedMonth,
            setSelectedDay,
            setSelectedMonth,
        ]
    );
    return <AppContext.Provider value={value} {...props} />;
}

function useAppContext() {
    const context = React.useContext(AppContext);
    if (context === undefined) {
        throw new Error('useAppContext must be used within a AppContextProvider');
    }
    const {
        selectedMonth,
        setSelectedMonth,
    } = context;

    return {
        selectedMonth,
        setSelectedMonth,
    };
}

export {AppContextProvider, useAppContext};
