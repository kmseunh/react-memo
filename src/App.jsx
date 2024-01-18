import styled from 'styled-components';
import MemoFormModal from './components/MemoFormModal';
import MemoList from './components/MemoList';
import useMemoStore from './store';
import { useState } from 'react';

const AppContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 20px;
    border: 2px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const AppHeader = styled.h1`
    text-align: center;
    margin-bottom: 20px;
`;

const AddMemoButton = styled.button`
    display: block;
    margin: 10px auto;
    padding: 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
`;

const MemoApp = () => {
    const { memos, addMemo, updateMemo, deleteMemo } = useMemoStore();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedMemo, setSelectedMemo] = useState(null);

    const handleOpenAddMemoModal = () => {
        setIsModalOpen(true);
        setSelectedMemo(null);
    };

    const handleOpenEditMemoModal = (memo) => {
        setIsModalOpen(true);
        setSelectedMemo(memo);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleMemoSubmit = (formData) => {
        if (selectedMemo) {
            updateMemo(selectedMemo.id, formData);
        } else {
            addMemo({
                id: Date.now(),
                ...formData,
            });
        }
    };

    const handleDeleteMemo = (id) => {
        deleteMemo(id);
    };

    return (
        <AppContainer>
            <AppHeader>Memo App</AppHeader>

            <AddMemoButton onClick={handleOpenAddMemoModal}>
                Add Memo
            </AddMemoButton>

            <MemoList
                memos={memos}
                onEditMemo={handleOpenEditMemoModal}
                onDeleteMemo={handleDeleteMemo}
            />

            <MemoFormModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                onSubmit={handleMemoSubmit}
                initialData={selectedMemo}
            />
        </AppContainer>
    );
};

export default MemoApp;
