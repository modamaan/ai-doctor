import React from 'react'
import AddNewMedInterview from './_components/AddNewMedInterview'

const Dashboard = () => {
  return (
    <div className="p-10" >
      <h2 className="font-bold text-2xl" >Dashboard</h2>
      <h2 className="text-gray-500" >Create and start your AI Learning</h2>

      <div className="grid grid-cols-1 md:grid-cols-4 my-4" >
        <AddNewMedInterview/>
      </div>
    </div>
  )
}

export default Dashboard