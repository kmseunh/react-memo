import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';

const ModalContainer = styled(Modal)`
    width: 600px;
    height: 350px;
    margin: 0 auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    background-color: #fff;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Label = styled.label`
    margin-bottom: 10px;
    font-weight: bold;
`;

const Input = styled.input`
    width: 80%; /* 입력창의 크기를 조절할 수 있습니다. */
    padding: 8px;
    margin-top: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
`;

const TextArea = styled.textarea`
    width: 80%; /* 텍스트 에어리어의 크기를 조절할 수 있습니다. */
    padding: 8px;
    margin-top: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
`;

const Button = styled.button`
    padding: 10px 16px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
`;

const MemoFormModal = ({ isOpen, onClose, onSubmit, initialData }) => {
    const [formData, setFormData] = useState(
        () => initialData || { title: '', content: '' }
    );

    useEffect(() => {
        setFormData(initialData || { title: '', content: '' });
    }, [initialData]);

    const handleSubmit = () => {
        onSubmit(formData);
        setFormData({ title: '', content: '' });
        onClose();
    };

    return (
        <ModalContainer
            isOpen={isOpen}
            onRequestClose={onClose}
            contentLabel='Memo Form'
        >
            <Label>
                Title:
                <Input
                    type='text'
                    value={formData.title}
                    onChange={(e) =>
                        setFormData({ ...formData, title: e.target.value })
                    }
                />
            </Label>
            <Label>
                Content:
                <TextArea
                    value={formData.content}
                    onChange={(e) =>
                        setFormData({ ...formData, content: e.target.value })
                    }
                />
            </Label>
            <Button onClick={handleSubmit}>Submit</Button>
        </ModalContainer>
    );
};

export default MemoFormModal;
