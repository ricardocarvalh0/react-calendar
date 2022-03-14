import {Button, ButtonProps, Modal} from "react-bootstrap";
import React from "react";

type ModalAction = ButtonProps & {
    label: string;
}

interface Props {
    title?: string;
    show: boolean;
    handleClose: () => void;
    actions?: ModalAction[]
}

const AppModal: React.FC<Props> = ({children, title, show, handleClose, actions}) => {
    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header role="header" closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body role="body">
                {children}
            </Modal.Body>
            {actions?.length ? (
                <Modal.Footer role="footer">
                    {actions.map(({variant, disabled, label, onClick}) =>
                        <Button
                            key={label}
                            disabled={disabled}
                            variant={variant}
                            onClick={onClick}
                        >
                            {label}
                        </Button>
                    )}
                </Modal.Footer>
            ) : null}
        </Modal>
    )
};

export default AppModal;