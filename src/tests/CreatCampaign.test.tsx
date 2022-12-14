import { render, screen, fireEvent } from '@testing-library/react'
import CreatCampaigns from "../components/createCampaigns/CreatCampaigns";

test("Component Attributes", () => {
  render(<CreatCampaigns setOpenModal={async function name(params:any) {
    
  }} />);
  const buttonElement = screen.getByText("Cancel");
  const buttonCreate = screen.getByText("Create");
  const labelCreate=screen.getByText("Create New Campaign")
  const labelSelect=screen.getByText("Select Devices")
  const labelAddCampa=screen.getByText("Add Campaign Title")
  const labelAddDecr=screen.getByText("Add Campaign Description")
  expect(buttonElement).toHaveAttribute;
  expect(buttonCreate).toHaveAttribute;
  expect(labelCreate).toHaveAttribute;
  expect(labelSelect).toHaveAttribute;
  expect(labelAddCampa).toHaveAttribute;
  expect(labelAddDecr).toHaveAttribute;
});

test("form element  roles in the component", () => {
  render(<CreatCampaigns setOpenModal={async function name(params:any) {
    const closeControl = screen.getByRole('button', { name: /remove/i })
    const subControl = screen.getByRole('button', { name: /Create/i })
    const input= screen.getByRole('textbox',{name:/Title/i}) 
    const checkbox=screen.getByRole('Checkbox',{name:/Retail/i})
    fireEvent.click(input)
    fireEvent.click(checkbox)
    fireEvent.click(closeControl)
  }} />);})