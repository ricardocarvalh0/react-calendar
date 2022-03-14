import React, {useCallback, useMemo, useState} from 'react';
import {IReminder} from "../types";

interface Props {
}

const ModalContext = React.createContext<| {
    selectedDay: Date | null,
    setSelectedDay: (d: Date) => void,
    selectedReminder: IReminder | null,
    selectedReminderId: string | number,
    showCreateModal: boolean,
    showEditModal: boolean,
    showDeleteModal: boolean,
    showSummaryModal: boolean,
    openCreateModal: (day: Date) => void,
    closeCreateModal: () => void,
    openEditModal: (reminder: IReminder) => void,
    closeEditModal: () => void
    openDeleteModal: (reminderId: string | number) => void,
    closeDeleteModal: () => void,
    openSummaryModal: (day: Date) => void,
    closeSummaryModal: () => void
}
    | undefined>(undefined);

function ModalContextProvider(props: Props) {
    const [selectedDay, setSelectedDay] = useState<Date | null>(null);
    const [selectedReminder, setSelectedReminder] = useState<IReminder | null>(null);
    const [selectedReminderId, setSelectedReminderId] = useState<string | number>('');

    const [showCreateModal, setShowCreateModal] = useState<boolean>(false);
    const [showEditModal, setShowEditModal] = useState<boolean>(false);
    const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
    const [showSummaryModal, setShowSummaryModal] = useState<boolean>(false);

    const openCreateModal = useCallback((day: Date) => {
        setSelectedDay(day);
        setShowCreateModal(true);
    }, []);

    const closeCreateModal = useCallback(() => {
        setSelectedDay(null);
        setShowCreateModal(false);
    }, []);

    const openEditModal = useCallback((reminder: IReminder) => {
        if (reminder) {
            setSelectedReminder(reminder);
            setShowEditModal(true);
        }
    }, []);

    const closeEditModal = useCallback(() => {
        setSelectedReminder(null);
        setShowEditModal(false);
    }, []);

    const openDeleteModal = useCallback((reminderId: number | string) => {
        if (reminderId) {
            setSelectedReminderId(reminderId);
            setShowDeleteModal(true);
        }
    }, []);

    const closeDeleteModal = useCallback(() => {
        setSelectedReminderId('');
        setShowDeleteModal(false);
    }, []);

    const openSummaryModal = useCallback((day: Date) => {
        if (day) {
            setSelectedDay(day);
            setShowSummaryModal(true);
        }
    }, []);

    const closeSummaryModal = useCallback(() => {
        setSelectedDay(null);
        setShowSummaryModal(false);
    }, []);

    const value = useMemo(
        () => ({
            selectedDay,
            setSelectedDay,
            selectedReminder,
            selectedReminderId,
            showCreateModal,
            openCreateModal,
            closeCreateModal,
            showEditModal,
            openEditModal,
            closeEditModal,
            showDeleteModal,
            openDeleteModal,
            closeDeleteModal,
            showSummaryModal,
            openSummaryModal,
            closeSummaryModal
        }),
        [
            openCreateModal,
            selectedDay,
            setSelectedDay,
            selectedReminder,
            selectedReminderId,
            showCreateModal,
            closeCreateModal,
            openEditModal,
            showEditModal,
            closeEditModal,
            showDeleteModal,
            openDeleteModal,
            closeDeleteModal,
            showSummaryModal,
            openSummaryModal,
            closeSummaryModal
        ]
    );
    return <ModalContext.Provider value={value} {...props} />;
}

function useModalContext() {
    const context = React.useContext(ModalContext);
    if (context === undefined) {
        throw new Error('useModalContext must be used within a ModalContextProvider');
    }
    const {
        selectedDay,
        setSelectedDay,
        selectedReminder,
        selectedReminderId,
        openCreateModal,
        showCreateModal,
        closeCreateModal,
        openEditModal,
        showEditModal,
        closeEditModal,
        showDeleteModal,
        openDeleteModal,
        closeDeleteModal,
        showSummaryModal,
        openSummaryModal,
        closeSummaryModal
    } = context;

    return {
        selectedDay,
        setSelectedDay,
        selectedReminder,
        selectedReminderId,
        openCreateModal,
        showCreateModal,
        closeCreateModal,
        openEditModal,
        showEditModal,
        closeEditModal,
        showDeleteModal,
        openDeleteModal,
        closeDeleteModal,
        showSummaryModal,
        openSummaryModal,
        closeSummaryModal
    };
}

export {ModalContextProvider, useModalContext};
