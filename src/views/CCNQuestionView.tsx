import React, { useEffect, useState } from "react"
import CCNActionButton from "../components/button/CCNActionButton"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import { clearAnswearId, getAnswearId, setAnswearId } from "../features/answearSlice"
import Questionnaire from '../static/data/questionnaire.json'
import { Link } from 'react-router-dom'
import CONFIG from '../static/config.json'


function CCNQuestionView() {
  const [question, setQuestion]         = useState("-")
  const [answear, setAnswear]           = useState<string[] | []>(["1", "2"])
  const [isLinkActive, setIsLinkActive] = useState(false)
  const dispatch                        = useAppDispatch()
  const answearId                       = useAppSelector(getAnswearId)


  useEffect(() => {
    dispatch(clearAnswearId({}))

    updateQuestionnaire("")
  }, [])

  const handleOnAnswear = (value: string) => {
    const questionId = answearId + value
    dispatch(setAnswearId({id: questionId}))
    updateQuestionnaire(questionId)
  }

  const updateQuestionnaire = (questionId: string) => {
    const questionIndex = Questionnaire.listOfQuestion.findIndex(item => item.id === questionId)
    if(questionIndex !== -1) {
      setQuestion(Questionnaire.listOfQuestion[questionIndex].question)
      setAnswear(Questionnaire.listOfQuestion[questionIndex].answear)
    }
    const nextQuestionIndex = Questionnaire.listOfQuestion.findIndex(item => item.id === questionId + "1")
    if(nextQuestionIndex === -1)
      setIsLinkActive(true)
  }


  return (
    <div className="questionContainer">
      <div className="questionContent">
        <p>{question}</p>
        <div className="questionActionContainer">
          <Link to={isLinkActive ? CONFIG.pages.endpoint.result : "#"}>
            <CCNActionButton
              a_strText         ={answear[0]}
              onClickCallback   ={handleOnAnswear}
              a_strValue        ="1"
            />
          </Link>

          <Link to={isLinkActive ? CONFIG.pages.endpoint.result : "#"}>
            <CCNActionButton
              className         ="btnQuestionAction2"
              a_strText         ={answear[1]}
              onClickCallback   ={handleOnAnswear}
              a_strValue        ="2"
            />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CCNQuestionView
