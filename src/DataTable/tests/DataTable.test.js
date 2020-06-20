import React from 'react';
import { mount } from 'enzyme';
import DataTable from '..';

const rows = [
  {
    name1: 'Mads L. Klausen',
    email: 'MadsLKlausen@jourrapide.com',
    edit_path: 'http://google.com',
    per_id: 1,
  },
  {
    name1: 'Alfred K. Krogh',
    email: 'AlfredKKrogh@armyspy.com',
    edit_path: 'http://google.com',
    per_id: 2,
  },
  {
    name1: 'Silas L. Bertelsen',
    email: 'SilasLBertelsen@armyspy.com',
    edit_path: 'http://google.com',
    per_id: 3,
  },
  {
    name1: 'Mia A. Johnsen',
    email: 'MiaAJohnsen@dayrep.com',
    edit_path: 'http://google.com',
    per_id: 4,
  },
  {
    name1: 'Alfred S. Schou',
    email: 'AlfredSSchou@jourrapide.com',
    edit_path: 'http://google.com',
    per_id: 5,
  },
  {
    name1: 'Emilie T. Lassen',
    email: 'EmilieTLassen@rhyta.com',
    edit_path: 'http://google.com',
    per_id: 6,
  },
  {
    name1: 'Maria C. Eriksen',
    email: 'MariaCEriksen@armyspy.com',
    edit_path: 'http://google.com',
    per_id: 7,
  },
  {
    name1: 'Julius K. Kristiansen',
    email: 'JuliusKKristiansen@rhyta.com',
    edit_path: 'http://google.com',
    per_id: 8,
  },
];

it('renders without crashing', () => {
  mount(<DataTable rows={[]} rowsPerPage={5} />);
});

it('renders 5 rows', () => {
  const wrapper = mount(<DataTable rows={rows} rowsPerPage={5} />);

  expect(wrapper.find('tr').length).toBe(5);
});

it('filters rows based on input', () => {
  const wrapper = mount(<DataTable rows={rows} rowsPerPage={5} />);

  wrapper.find('input').simulate('change', { target: { value: 'k' } });

  expect(wrapper.find('tr').length).toBe(4);
});

it('have working pagination', () => {
  const wrapper = mount(<DataTable rows={rows} rowsPerPage={5} />);

  wrapper.find('button').at(1).simulate('click');

  expect(wrapper.find('tr').length).toBe(3);
});
