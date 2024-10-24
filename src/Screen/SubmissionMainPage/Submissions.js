import React, { useState } from 'react'
import 'react-datepicker/dist/react-datepicker.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import 'leaflet/dist/leaflet.css'
import { faBars, faUsers, faFileAlt, faHistory, faChartBar, faBell, faDownload } from '@fortawesome/free-solid-svg-icons'
import '../../App.css'
import DatePickerComponent from '../../components/DatePickerComponent'
import SubmissionItem from '../../components/SubmissionItem'
import { CustomMap } from '../../components/MapContainer'
import ListViewOfSubmissionItem from '../../components/ListViewOfSubmissionItem'

const Submissions = () => {
  const [showMap, setShowMap] = useState(true) // State for toggle between Map and List

  const handleToggle = (view) => {
    setShowMap(view === 'map')
  }

  return (
    <div className='submissions'>
      <header className='header'>
        <div className='logo'>
          <h1>ZenduForms</h1>
        </div>
        <nav className='nav'>
          <ul>
            <li>
              <FontAwesomeIcon icon={faFileAlt} /> Forms
            </li>
            <li>
              <FontAwesomeIcon icon={faUsers} /> Customers
            </li>
            <li>
              <FontAwesomeIcon icon={faBars} /> Submissions
            </li>
            <li>
              <FontAwesomeIcon icon={faHistory} /> History
            </li>
            <li>
              <FontAwesomeIcon icon={faChartBar} /> Reports
            </li>
            <li>
              <FontAwesomeIcon icon={faBars} /> Workflow
            </li>
          </ul>
        </nav>
        <div className='notifications'>
          <FontAwesomeIcon icon={faBell} />
        </div>
      </header>

      <div
        className='submissions-container'
        style={{
          padding: '20px',
          fontFamily: 'Arial, sans-serif',
          justifyContent: 'space-between',
          width: '100%'
        }}
      >
        <h2>Submissions</h2>
        <div
          className='controls'
          style={{
            display: 'flex',
            gap: '10px',
            marginTop: '20px',
            marginBottom: '20px'
          }}
        >
          <input
            type='text'
            placeholder='Search...'
            style={{
              padding: '10px',
              width: '200px',
              borderRadius: '4px',
              border: '1px solid #ccc',
              maxWidth: '100%'
            }}
          />
          <select
            style={{
              padding: '10px',
              borderRadius: '4px',
              border: '1px solid #ccc'
            }}
          >
            <option>Select Form</option>
          </select>
          <select
            style={{
              padding: '10px',
              borderRadius: '4px',
              border: '1px solid #ccc'
            }}
          >
            <option>Select Status</option>
          </select>
          <DatePickerComponent />
          <div
            style={{
              marginLeft: 'auto',
              display: 'flex',
              gap: '5px'
            }}
          >
            <div
              style={{
                marginLeft: 'auto',
                display: 'flex',
                border: '2px solid #007bff',
                borderRadius: '6px'
              }}
            >
              <button
                onClick={() => handleToggle('map')}
                style={{
                  padding: '10px 20px',
                  backgroundColor: showMap ? '#007bff' : '#fff',
                  color: showMap ? '#fff' : '#000',
                  cursor: 'pointer',
                  borderTopLeftRadius: '4px',
                  borderBottomLeftRadius: '4px'
                }}
              >
                Map
              </button>
              <button
                onClick={() => handleToggle('list')}
                style={{
                  padding: '10px 20px',
                  backgroundColor: !showMap ? '#007bff' : '#fff',
                  color: !showMap ? '#fff' : '#000',
                  borderTopRightRadius: '4px',
                  borderBottomRightRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                List
              </button>
            </div>

            <button
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
                padding: '10px 20px',
                color: '#007bff',
                fontWeight: 'bold'
              }}
            >
              <FontAwesomeIcon icon={faDownload} /> Export
            </button>
          </div>
        </div>

        {showMap ? (
          <div className='map-view' style={{ display: 'flex' }}>
            <SubmissionItem width={'600px'} />
            <div className='map-container' style={{ width: '100%', height: '400px' }}>
              <CustomMap />
            </div>
          </div>
        ) : (
          <ListViewOfSubmissionItem />
        )}
      </div>
    </div>
  )
}

export default Submissions
