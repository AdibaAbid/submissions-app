import React, { useState } from 'react'
import { submissionsData } from '../../Data'

// Function to get style for status labels
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
    default:
      return {
        backgroundColor: '#ccc',
        color: '#fff',
        label: 'Unassigned'
      }
  }
}

const ListViewOfSubmissionItem = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const submissionsPerPage = 10

  // Calculate total number of pages
  const totalPages = Math.ceil(submissionsData.length / submissionsPerPage)

  // Get the current submissions for the active page
  const currentSubmissions = submissionsData.slice((currentPage - 1) * submissionsPerPage, currentPage * submissionsPerPage)

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  return (
    <div>
      <table
        style={{
          width: '100%',
          borderCollapse: 'collapse',
          backgroundColor: '#f8f9fa',
          padding: '10px'
        }}
      >
        <thead>
          <tr style={{ backgroundColor: '#f8f9fa', textAlign: 'left' }}>
            <th style={{ padding: '10px', borderBottom: '1px solid #dee2e6' }}>Task</th>
            <th style={{ padding: '10px', borderBottom: '1px solid #dee2e6' }}>Status</th>
            <th style={{ padding: '10px', borderBottom: '1px solid #dee2e6' }}>From</th>
            <th style={{ padding: '10px', borderBottom: '1px solid #dee2e6' }}>To</th>
            <th style={{ padding: '10px', borderBottom: '1px solid #dee2e6' }}>Customer Address</th>
            <th style={{ padding: '10px', borderBottom: '1px solid #dee2e6' }}>Due Date</th>
          </tr>
        </thead>
        <tbody>
          {currentSubmissions.map((submission) => {
            const { backgroundColor, color, label } = getStatusStyles(submission.status)

            return (
              <tr
                key={submission.id}
                style={{
                  paddingTop: '10px',
                  borderBottom: '1px solid #dee2e6',
                  height: '50px'
                }}
              >
                <td
                  style={{
                    padding: '10px',
                    borderBottom: '1px solid #dee2e6',
                    height: '50px'
                  }}
                >
                  Work Flow: Requires Location
                </td>
                <td
                  style={{
                    padding: '10px',
                    borderBottom: '1px solid #dee2e6',
                    backgroundColor: backgroundColor,
                    color: color,
                    textAlign: 'center',
                    borderRadius: '6px',
                    fontSize: '12px'
                  }}
                >
                  {label}
                </td>
                <td
                  style={{
                    padding: '10px',
                    borderBottom: '1px solid #dee2e6'
                  }}
                >
                  {submission.emailFrom}
                </td>
                <td
                  style={{
                    padding: '10px',
                    borderBottom: '1px solid #dee2e6'
                  }}
                >
                  {submission.emailTo}
                </td>
                <td
                  style={{
                    padding: '10px',
                    borderBottom: '1px solid #dee2e6'
                  }}
                >
                  {submission.customerAddress}
                </td>
                <td
                  style={{
                    padding: '10px',
                    borderBottom: '1px solid #dee2e6',
                    color: '#ff0000'
                  }}
                >
                  {submission.dueDate}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>

      {/* Pagination Component */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          padding: '20px 0'
        }}
      >
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          style={{
            margin: '0 5px',
            padding: '8px 12px',
            backgroundColor: currentPage === 1 ? '#ccc' : '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: currentPage === 1 ? 'not-allowed' : 'pointer'
          }}
        >
          Prev
        </button>
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i + 1}
            onClick={() => handlePageChange(i + 1)}
            style={{
              margin: '0 5px',
              padding: '8px 12px',
              backgroundColor: i + 1 === currentPage ? '#007bff' : '#f8f9fa',
              color: i + 1 === currentPage ? '#fff' : '#000',
              border: '1px solid #dee2e6',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            {i + 1}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          style={{
            margin: '0 5px',
            padding: '8px 12px',
            backgroundColor: currentPage === totalPages ? '#ccc' : '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: currentPage === totalPages ? 'not-allowed' : 'pointer'
          }}
        >
          Next
        </button>
      </div>
      <p style={{ textAlign: 'center' }}>{`1-${submissionsPerPage} of ${submissionsData.length} submissions`}</p>
    </div>
  )
}

export default ListViewOfSubmissionItem
