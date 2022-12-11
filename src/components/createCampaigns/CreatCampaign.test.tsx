import React from 'react'
import {  render, screen } from '@testing-library/react';
import Campaigns from '../campaigns/Campaigns';
import CreatCampaigns from './CreatCampaigns';
 
test('renders create campaign', ()=>{
 const{getByTestId,getByLabelText} =render(<Campaigns/>);
 
 const titleLable=getByLabelText(/Add Campaign Title/t)
 const descriptionLable=getByLabelText(/Add  Campaign Description/t)
expect(titleLable).toBeInTheDocument()
expect(descriptionLable).toBeInTheDocument()
})