// import { render, screen } from '@testing-library/react';
// import App from './App';
//
// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

import React from "react";
import {shallow} from "enzyme";
import App from "./App";

const app = shallow(<App/>);

it('renders correctly', ()=>{
    expect(app).toMatchSnapshot()
})

it('inits with empty state',()=>{
    expect(app.state().gifts).toEqual([])
})

it('adds gift on add button click', ()=>{
    app.find('.btn-add').simulate('click')
    expect(app.state().gifts).toEqual([{id:1}])
})