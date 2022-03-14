import {Form, Row, Col, Button} from "react-bootstrap";
import {ChangeEvent, useCallback, useState} from "react";
import format from "date-fns/format";
import parse from "date-fns/parse";
import {IReminder, ReminderFormState} from "../../types";
import {useModalContext} from "../../contexts/ModalContext";

const DAY_FORMAT = 'yyyy-MM-dd';
const TIME_FORMAT = 'HH:mm';
const TEXT_SIZE_LIMIT = 30;
const DEFAULT_COLOR = '#CD5C5C';

const fromDateNumberToInputText = (date: number): string =>
    date ? format(new Date(date), DAY_FORMAT) : ''

const fromDateNumberToTimeText = (date: number): string =>
    date ? format(new Date(date), 'HH:mm') : ''

const fromInputStringToDate = (day: string, time: string): Date =>
    parse(`${day} ${time}`, `${DAY_FORMAT} ${TIME_FORMAT}`, new Date())

const ReminderForm = ({reminder, isLoading, errorMessage, onSubmit}: {
    reminder: IReminder,
    isLoading: boolean,
    errorMessage?: string,
    onSubmit: (p: IReminder) => void
}) => {
    const {openDeleteModal} = useModalContext();
    const [isNameInvalid, setIsNameInvalid] = useState<boolean>();
    const [formState, setFormState] = useState<ReminderFormState>({
        date: fromDateNumberToInputText(reminder.date),
        time: fromDateNumberToTimeText(reminder.date),
        text: reminder.text,
        color: reminder.color || DEFAULT_COLOR
    });

    const handleInputChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name as string;

        setFormState(prev => ({
            ...prev,
            [name]: value
        }));
    }, []);

    const resetErrors = () => {
        setIsNameInvalid(false);
    }

    const handleSubmit = useCallback(() => {
        if (isNameInvalid) {
            resetErrors();
        }
        const {text, date, time, color} = formState;
        const isValid = text && (text.length <= TEXT_SIZE_LIMIT);
        setIsNameInvalid(!isValid);
        if (isValid) {
            onSubmit({
                text,
                color,
                date: fromInputStringToDate(date, time).getTime()
            } as IReminder);
        }

    }, [formState]);

    const handleDelete = useCallback(() => {
        if (reminder.id) {
            openDeleteModal(reminder.id)
        }
    }, [reminder, openDeleteModal]);


    return (
        <Form>
            <Row className="mb-3">
                <Col>
                    <Form.Control
                        required
                        name="text"
                        type="text"
                        isInvalid={isNameInvalid}
                        placeholder="Text"
                        value={formState.text}
                        onChange={handleInputChange}
                    />
                    <Form.Control.Feedback type="invalid">
                        Text should not be empty nor have more than 30 chars.
                    </Form.Control.Feedback>
                </Col>
            </Row>
            <Row className="mb-3">
                <Col>
                    <Form.Control
                        name="date"
                        type="date"
                        value={formState.date}
                        onChange={handleInputChange}
                    />
                </Col>
                <Col>
                    <Form.Control
                        name="time"
                        type="time"
                        value={formState.time}
                        onChange={handleInputChange}
                    />
                </Col>
                <Col>
                    <Form.Control
                        name="color"
                        type="color"
                        value={formState.color}
                        onChange={handleInputChange}
                    />
                </Col>
            </Row>
            {errorMessage ? (
                <Row className="mb-3">
                    <Form.Text>
                        {errorMessage}
                    </Form.Text>
                </Row>
            ) : null}
            <Row>
                <Col>
                    <Button
                        variant="primary"
                        onClick={handleSubmit}
                        disabled={isLoading}
                    >
                        {isLoading ? 'Saving...' : 'Save'}
                    </Button>

                    {!!reminder.id && (
                        <Button
                            className="m-1"
                            variant="danger"
                            onClick={handleDelete}
                            disabled={isLoading}
                        >
                            {isLoading ? 'Deleting...' : 'Delete'}
                        </Button>
                    )}
                </Col>
            </Row>
        </Form>
    )
}

export default ReminderForm;