import {addMonths, subMonths} from "date-fns";
import format from "date-fns/format";
import {useAppContext} from "../../contexts/AppContext";
import {Button, Col, Row} from "react-bootstrap";

const CalendarControls = () => {
    const {selectedMonth, setSelectedMonth} = useAppContext();
    if (!selectedMonth) {
        return null;
    }
    return (
        <Row className="align-items-center w-75">
            <Col>
                <Button
                    variant="outline-primary"
                    className="m-2"
                    onClick={() => {
                        setSelectedMonth(subMonths(selectedMonth, 1));
                    }}
                >
                    {'<'}
                </Button>
                <Button
                    // size="sm"
                    variant="outline-primary"
                    onClick={() => {
                        setSelectedMonth(addMonths(selectedMonth, 1));
                    }}
                >
                    {'>'}
                </Button>
            </Col>
            <Col className="justify-content-center align-items-center">
                <h4 className="mt-2">{format(selectedMonth, 'MMMM yyyy')}</h4>
            </Col>
        </Row>
    )
};

export default CalendarControls;