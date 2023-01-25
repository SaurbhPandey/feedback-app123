import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid'

const FeedbackContext =createContext()

export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: 'This item is from Context 1',
            rating: 10
        },
        {
            id: 2,
            text: 'This item is from Context 2',
            rating: 9
        }, {
            id: 3,
            text: 'This item is from Context 3',
            rating: 7
        }
    ])

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

    const addFeedback = (newFeedback) => {
        newFeedback.id= uuidv4()
        setFeedback([newFeedback, ...feedback])
      }
    
    

    const deleteFeedback=(id)=>{
        if(window.confirm('Are you sure you want to delete?')){
            setFeedback(feedback.filter((item)=> item.id !== id))
        }
      }

    //   SET FEEDBACK UPDATED
    const updateFeedback = (id, updItem) => {
        setFeedback( feedback.map((item) => (item.id === id ? {
             ...item, ...updItem } : item
        
        ) ) )
        
        }
    


    //   SET ITEM TO BE UPADATED
      const editFeedback= (item) => {
        setFeedbackEdit ({
            item,
            edit: true
        })
      }



    return <FeedbackContext.Provider value={{
        feedback: feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback,
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext