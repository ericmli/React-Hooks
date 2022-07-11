import React, {useCallback, useState} from 'react'
import PageTitle from '../../components/layout/PageTitle'
import UseCallbackButtons from "./UseCallbackButtons"

const UseCallback = (props) => {

    const [count, setCount] = useState(0)

    //Serve para chamar a função diversas vezes repetindo uma vez apenas
    const inc = useCallback(function(delta){
        setCount(curr => count + delta)
    }, [setCount])

    return (
        <div className="UseCallback">
            <PageTitle
                title="Hook UseCallback"
                subtitle="Retorna uma função memoizada!"
            />
            <div className="center">
                <span className="text">{count}</span>
                <UseCallbackButtons inc={inc}/>
            </div>
        </div>
    )
}

export default UseCallback
