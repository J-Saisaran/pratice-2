import React from 'react'

function Table() {

    const data =[{
        Name:"Tiger Nixon",
        Position:"System Architect",
         Office:"Edinburgh",
        Age:"61",
        Startdate:"2011/04/25",
        Salary:"$320,800"
    },
    {
        Name:"Tiger Nixon",
        Position:"System Architect",
         Office:"Edinburgh",
        Age:"61",
        Startdate:"2011/04/25",
        Salary:"$320,800"
    },
    {
        Name:"Tiger Nixon",
        Position:"System Architect",
         Office:"Edinburgh",
        Age:"61",
        Startdate:"2011/04/25",
        Salary:"$320,800"
    },
    {
        Name:"Tiger Nixon",
        Position:"System Architect",
         Office:"Edinburgh",
        Age:"61",
        Startdate:"2011/04/25",
        Salary:"$320,800"
    },
    {
        Name:"Tiger Nixon",
        Position:"System Architect",
         Office:"Edinburgh",
        Age:"61",
        Startdate:"2011/04/25",
        Salary:"$320,800"
    },
    {
        Name:"Tiger Nixon",
        Position:"System Architect",
         Office:"Edinburgh",
        Age:"61",
        Startdate:"2011/04/25",
        Salary:"$320,800"
    },
    {
        Name:"Tiger Nixon",
        Position:"System Architect",
         Office:"Edinburgh",
        Age:"61",
        Startdate:"2011/04/25",
        Salary:"$320,800"
    },
    {
        Name:"Tiger Nixon",
        Position:"System Architect",
         Office:"Edinburgh",
        Age:"61",
        Startdate:"2011/04/25",
        Salary:"$320,800"
    },
    {
        Name:"Tiger Nixon",
        Position:"System Architect",
         Office:"Edinburgh",
        Age:"61",
        Startdate:"2011/04/25",
        Salary:"$320,800"
    },
    {
        Name:"Tiger Nixon",
        Position:"System Architect",
         Office:"Edinburgh",
        Age:"61",
        Startdate:"2011/04/25",
        Salary:"$320,800"
    },
    {
        Name:"Tiger Nixon",
        Position:"System Architect",
         Office:"Edinburgh",
        Age:"61",
        Startdate:"2011/04/25",
        Salary:"$320,800"
    }
  
]
  return (
    <div>
         <h1 className="h3 mb-2 text-gray-800">Tables</h1>
                    <p className="mb-4">DataTables is a third party plugin that is used to generate the demo table below.
                        For more information about DataTables, please visit the <a target="_blank"
                            href="https://datatables.net">official DataTables documentation</a>.</p>

                  
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-primary">DataTables Example</h6>
                        </div>
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Position</th>
                                            <th>Office</th>
                                            <th>Age</th>
                                            <th>Start date</th>
                                            <th>Salary</th>
                                        </tr>
                                    </thead>
{data.map((item,index)=>{
    return(

        <tbody>
        <tr>
            <td>{item.Name}</td>
            <td>{item.Position}</td>
            <td>{item.Office}</td>
            <td>{item.Age}</td>
            <td>{item.Startdate}</td>
            <td>{item.Salary}</td>
        </tr>
    </tbody> 
    )
})}
                                    <tbody>
                                        <tr>
                                            <td>Tiger Nixon</td>
                                            <td>System Architect</td>
                                            <td>Edinburgh</td>
                                            <td>61</td>
                                            <td>2011/04/25</td>
                                            <td>$320,800</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
    </div>
  )
}

export default Table