import React from 'react'
import PropTypes from 'prop-types'
import { submissionsData } from '../../Data'

const getStatusStyles = (status) => {
  switch (status) {
    case 'Uncomplete':
      return {
        backgroundColor: '#f5c6cb',
        color: '#721c24',
        label: 'Uncomplete'
      }
    case 'Low Risk':
      return {
        backgroundColor: '#d4edda',
        color: '#155724',
        label: 'Low Risk'
      }
    case 'Unassigned':
      return {
        backgroundColor: '#fff3cd',
        color: '#856404',
        label: 'Unassigned'
      }
    default:
      return {}
  }
}

const SubmissionItem = ({ width }) => {
  return (
    <div
      className='scrollable-container'
      style={{
        padding: '10px',
        height: '600px',
        overflowY: 'auto',
        borderRadius: '6px',
        width
      }}
    >
      {submissionsData.map((submission) => {
        const { backgroundColor, color, label } = getStatusStyles(submission.status)

        return (
          <div
            key={submission.id}
            className='submission-item'
            style={{
              border: '1px solid #888f99',
              paddingLeft: '10px',
              paddingRight: '20px',
              borderRadius: '6px',
              marginBottom: '10px',
              display: 'flex',
              justifyContent: 'space-between',
              flexDirection: 'row'
            }}
          >
            <div style={{ width: '100%', flex: 1 }}>
              <strong>Work Flow: Requires Location</strong>
              <p>
                From: <span style={{ color: '#666' }}>{submission.emailFrom}</span>
              </p>
              <p>
                To: <span style={{ color: '#666' }}>{submission.emailTo}</span>
              </p>
              <p>
                Due Date: <span style={{ color: '#ff0000' }}>{submission.dueDate}</span>
              </p>
            </div>
            <div
              className='status'
              style={{
                backgroundColor: backgroundColor,
                padding: '4px 8px',
                border: `1px solid ${color}`,
                color: color,
                textAlign: 'center',
                height: '100%',
                fontSize: '12px'
              }}
            >
              {label}
            </div>
          </div>
        )
      })}
    </div>
  )
}
// Add PropTypes validation for 'width' prop
SubmissionItem.propTypes = {
  width: PropTypes.string // You can adjust this type to fit your needs, e.g., PropTypes.number if it's numeric
}

export default SubmissionItem
