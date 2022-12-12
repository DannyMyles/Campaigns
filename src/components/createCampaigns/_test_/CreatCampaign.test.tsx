import React from 'react'
import {shallow} from 'enzyme'
import {  fireEvent, render, screen } from '@testing-library/react';
import CreatCampaigns from '../../campaigns/Campaigns';
import { title } from 'process';
test('renders the form properly',()=>{
// const {getByTestId,getByLabelText}=render(<CreatCampaigns/>  
//     )

})

 test('input field',()=>{
    render(<CreatCampaigns/>)
     const titleLabel= screen.getByText('textbox')
     const descriptionLabel= screen.getByText('textbox')
     expect(titleLabel).toBe
 
 })
  
 