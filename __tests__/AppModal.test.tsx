import React from 'react';
import {render, screen} from "@testing-library/react";
import AppModal from "../components/common/AppModal";

const title = "modaltitle"

test('renders without footer', () => {
    render(<AppModal title={title} show handleClose={() => {}} />);
    expect(screen.getByRole('header')).toBeInTheDocument()
    expect(screen.getByRole('body')).toBeInTheDocument()
})

test('renders empty title if no title is passed', () => {
    render(<AppModal show={true} handleClose={() => {}} />);
    const byRole = screen.getByRole('header');
    expect(byRole).toBeInTheDocument()
    expect(byRole.innerText).toBeUndefined()
})

test('renders title if title is passed', () => {
    render(<AppModal title={title} show={true} handleClose={() => {}} />);
    const byRole = screen.getByRole('header');
    expect(byRole).toBeInTheDocument()
    expect(screen.getByText(title)).toHaveTextContent("modaltitle")
})

test('renders actions in the footer', () => {
    render(
        <AppModal
            title={title}
            show
            handleClose={() => {}}
            actions={[{ variant: 'secondary', label: 'cancel'}]}
        />
    );
    expect(screen.getByRole('footer')).toBeInTheDocument()
    expect(screen.getByText('cancel')).toBeInTheDocument()
})