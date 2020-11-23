import React from 'react'

const Table = ({params}) => {

    const renderHeader = () => {
        let headerElement = ['Артикул', 'Название', 'Процессор', 'Память,Gb', 'RAM,Gb','Экран','Батарея,мАч','Камера,Мп']

        return headerElement.map((key, index) => {
            return <th key={index}>{key}</th>
        })
    }

    const renderBody = () => {
        return params && params.map((item,index) => {
            return (
                <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.cpu}</td>
                    <td>{item.memory}</td>
                    <td>{item.ram}</td>
                    <td>{item.screen}</td>
                    <td>{item.battery}</td>
                    <td>{item.camera}</td>

                </tr>
            )
        })
    }

    return (

        <table  className="u-full-width" id='items'>
            <thead>
                <tr>{renderHeader()}</tr>
            </thead>
            <tbody>
                {renderBody()}
            </tbody>
        </table>
        
    )
}

export default Table