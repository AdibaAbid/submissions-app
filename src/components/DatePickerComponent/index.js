import { faCalendarDays } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import DatePicker from 'react-datepicker'

const DatePickerComponent = () => {
  const [selectedDate, setSelectedDate] = useState(new Date())

  return (
    <div
      style={{
        position: 'relative',
        width: '150px',
        zIndex: 1009
      }}
    >
      <FontAwesomeIcon
        icon={faCalendarDays}
        style={{
          position: 'absolute',
          left: '100px',
          top: '45%',
          transform: 'translateY(-50%)',
          color: '#888f99',
          pointerEvents: 'none',
          zIndex: 999
        }}
      />
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        dateFormat='dd/MM/yyyy'
        style={{ paddingLeft: '35px', width: '100%' }}
      />
    </div>
  )
}

export default DatePickerComponent
