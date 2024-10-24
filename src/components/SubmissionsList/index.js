import React from 'react'
import { useSelector } from 'react-redux'
import SubmissionItem from '../SubmissionItem'

const SubmissionsList = () => {
  const submissions = useSelector((state) => state.submissions)

  return (
    <ul className='submissions-list'>
      {submissions.map((submission) => (
        <SubmissionItem key={submission.id} submission={submission} />
      ))}
    </ul>
  )
}

export default SubmissionsList
