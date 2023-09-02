'use client'
import {useSelector} from 'react-redux'
import HistoryList from '../../components/HistoryList'

const Page = () => {

    const [user] = useSelector(store => store.history)
    const {historyCart} = user
    
    return (
        <div>
            <h1 className='historyTitle'>Your Past Purchases : </h1>
            {historyCart.map((list) => 
                <HistoryList list={list} key={list.id}/>
            )}
        </div>
    )
}

export default Page
