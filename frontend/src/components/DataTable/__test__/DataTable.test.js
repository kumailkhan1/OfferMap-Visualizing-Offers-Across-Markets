import { render, screen } from '@testing-library/react';
import DataTable from '../index';

it("should display loader when the data is loading", async () => {
    render(<DataTable loading={true} setLoading={() => { }} />)
    const Loader = screen.getByRole('progressbar');
    await expect(Loader).toBeInTheDocument();
})

it("should not display loader when the data has done loading", async () => {
    render(<DataTable loading={false} setLoading={() => { }} />)
    const Loader = screen.queryByRole('progressbar');
    await expect(Loader).not.toBeInTheDocument();
})

it("should display the values of Gametype,country and company filter as ALL initially", async () => {
    render(<DataTable loading={true} setLoading={() => { }} />);
    const filterBoxesInput = screen.getAllByRole('combobox');
    filterBoxesInput.forEach((el) => {
        expect(el.value).toBe('ALL');
    })

})

it("should display no values of FROM and TO dates initially", async () => {
    render(<DataTable loading={true} setLoading={() => { }} />);
    const datePlaceholderInputs = screen.getAllByPlaceholderText('mm/dd/yyyy');
    datePlaceholderInputs.forEach((el) => {
        expect(el.value).toBe('')
    })

})