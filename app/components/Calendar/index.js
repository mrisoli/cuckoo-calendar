/**
*
* Calendar
*
*/

import React from 'react';
import moment from 'moment';
import $ from 'jquery';
import fullCalendar from 'fullcalendar';

import styles from './styles.css';

class Calendar extends React.Component {
  componentDidMount() {
    const { calendar } = this.refs;
    $(calendar).fullCalendar({
      events: 'https://cuckoo-api.herokuapp.com/appointments.json'
    });
  }
  render() {
    return (
      <div className={ styles.calendar } ref="calendar">
      </div>
    );
  }
}

export default Calendar;
