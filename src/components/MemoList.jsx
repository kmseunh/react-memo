import styled from 'styled-components';

const MemoListContainer = styled.div`
    width: 600px;
    margin: 0 auto;
`;

const MemoListItem = styled.div`
    margin: 10px 0;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    transition: transform 0.2s ease-in-out;
    list-style-type: none;

    &:hover {
        transform: scale(1.02);
    }
`;

const MemoTitle = styled.h3`
    font-weight: bold;
    margin-bottom: 5px;
`;

const MemoContent = styled.p`
    margin-bottom: 10px;
    color: #555;
`;

const MemoButton = styled.button`
    padding: 6px 12px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-right: 5px;

    &:last-child {
        margin-right: 0;
    }
`;

const MemoList = ({ memos, onEditMemo, onDeleteMemo }) => (
    <MemoListContainer>
        {memos.map((memo) => (
            <MemoListItem key={memo.id}>
                <MemoTitle>{memo.title}</MemoTitle>
                <MemoContent>{memo.content}</MemoContent>
                <MemoButton onClick={() => onEditMemo(memo)}>Edit</MemoButton>
                <MemoButton onClick={() => onDeleteMemo(memo.id)}>
                    Delete
                </MemoButton>
            </MemoListItem>
        ))}
    </MemoListContainer>
);

export default MemoList;
